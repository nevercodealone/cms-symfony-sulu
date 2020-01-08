FROM composer AS composer

WORKDIR /var/www/html

RUN composer global require hirak/prestissimo --no-plugins --no-scripts

COPY composer.* /var/www/html/

FROM composer AS composer-web

# Application docker
RUN composer install --apcu-autoloader -o --no-scripts --ignore-platform-reqs

FROM composer AS composer-dev

RUN composer install --apcu-autoloader -o --no-scripts --ignore-platform-reqs

# Build actual image
FROM php:7.4-apache AS webserver

WORKDIR /var/www/html

# install packages
RUN apt-get update && apt-get install -y \
        openssl \
        git \
        msmtp \
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

# MSMTP config
ADD ./deploy/config/msmtprc /etc/msmtprc

# copy needed files from build containers
COPY --from=composer-web /var/www/html/vendor/ /var/www/html/vendor/

COPY --chown=www-data:www-data . /var/www/html/
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN mkdir -p /var/www/html/var && chown www-data:www-data /var/www/html/var && chmod 775 /var/www/html/var
RUN touch /var/www/html/.env

ENTRYPOINT ["/entrypoint.sh"]
CMD ["/usr/sbin/apachectl", "-DFOREGROUND"]

FROM webserver AS toolbox

LABEL description="Shipped toolboximage for nevercodealone.de."

COPY --from=composer-dev /var/www/html/vendor/ /var/www/html/vendor/

ARG RANCHER_CLI_VERSION=0.6.13
ARG RANCHER_CLI_URL=https://github.com/rancher/cli/releases/download/v$RANCHER_CLI_VERSION/rancher-linux-amd64-v$RANCHER_CLI_VERSION.tar.gz
ARG RANCHER_COMPOSE_VERSION=0.12.4
ARG RANCHER_COMPOSE_URL=https://github.com/rancher/rancher-compose/releases/download/v${RANCHER_COMPOSE_VERSION}/rancher-compose-linux-amd64-v${RANCHER_COMPOSE_VERSION}.tar.gz

RUN curl -sSL "$RANCHER_CLI_URL" | tar -xzp -C /usr/local/bin/ --strip-components=2 \
 && curl -sSL "$RANCHER_COMPOSE_URL" | tar -xzp -C /usr/local/bin/ --strip-components=2

ENTRYPOINT ["/entrypoint.sh"]
CMD []

