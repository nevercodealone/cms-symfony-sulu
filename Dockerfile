FROM composer AS composer

WORKDIR /var/www/html

RUN composer global require hirak/prestissimo --no-plugins --no-scripts

COPY composer.* /var/www/html/
RUN composer install --apcu-autoloader -o --no-scripts --ignore-platform-reqs --no-dev

FROM kkarczmarczyk/node-yarn:latest AS npm

WORKDIR /var/www/html


COPY --from=composer /var/www/html/vendor/sulu/sulu /var/www/html/vendor/sulu/sulu
COPY --from=composer /var/www/html/vendor/friendsofsymfony/jsrouting-bundle /var/www/html/vendor/friendsofsymfony/jsrouting-bundle
COPY composer.json /var/www/html/

COPY .babelrc /var/www/html/
COPY package.json /var/www/html/
COPY webpack.config.js /var/www/html/
COPY assets/admin /var/www/html/assets/admin

RUN npm install && npm run build

# Build actual image
FROM php:7.2-apache AS webserver

WORKDIR /var/www/html

# install packages
RUN apt-get update && apt-get install -y \
        openssl \
        git \
        ssmtp \
        unzip \
        libicu-dev \
        libmagickwand-dev

# install PHP extensions
RUN docker-php-ext-configure intl && docker-php-ext-install -j$(nproc) \
        intl \
        pdo \
        pdo_mysql \
        opcache \
        zip

RUN pecl install imagick redis apcu && docker-php-ext-enable imagick redis apcu

# apache config
RUN /usr/sbin/a2enmod rewrite && /usr/sbin/a2enmod headers && /usr/sbin/a2enmod expires
COPY ./deploy/config/www.conf /etc/apache2/sites-available/000-default.conf

# php config
ADD ./deploy/config/php.ini /usr/local/etc/php/conf.d/custom.ini

# SSMTP config
ADD ./deploy/config/ssmtp.conf /etc/ssmtp/ssmtp.conf

# copy needed files from build containers
COPY --from=npm /var/www/html/public/build/admin/ /var/www/html/public/build/admin/
COPY --from=composer /var/www/html/vendor/ /var/www/html/vendor/

COPY --chown=www-data:www-data . /var/www/html/
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN mkdir -p /var/www/html/var && chown www-data:www-data /var/www/html/var && chmod 775 /var/www/html/var

RUN cd /var/www/html && bin/websiteconsole sulu:media:format:cache:clear


ENTRYPOINT ["/entrypoint.sh"]
CMD ["/usr/sbin/apachectl", "-DFOREGROUND"]

FROM webserver AS toolbox

LABEL description="Shipped toolboximage for nevercodealone.de."

ARG RANCHER_CLI_VERSION=0.6.9
ARG RANCHER_CLI_URL=https://github.com/rancher/cli/releases/download/v$RANCHER_CLI_VERSION/rancher-linux-amd64-v$RANCHER_CLI_VERSION.tar.gz
ARG RANCHER_COMPOSE_VERSION=0.12.4
ARG RANCHER_COMPOSE_URL=https://github.com/rancher/rancher-compose/releases/download/v${RANCHER_COMPOSE_VERSION}/rancher-compose-linux-amd64-v${RANCHER_COMPOSE_VERSION}.tar.gz

RUN curl -sSL "$RANCHER_CLI_URL" | tar -xzp -C /usr/local/bin/ --strip-components=2 \
 && curl -sSL "$RANCHER_COMPOSE_URL" | tar -xzp -C /usr/local/bin/ --strip-components=2

ENTRYPOINT []
CMD []

