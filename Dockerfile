FROM composer AS composer

WORKDIR /var/www/html

RUN composer global require hirak/prestissimo --no-plugins --no-scripts

COPY composer.* /var/www/html/
RUN composer install --apcu-autoloader -o --no-dev --no-scripts --ignore-platform-reqs

FROM kkarczmarczyk/node-yarn:latest AS npm

WORKDIR /var/www/html

COPY package.json /var/www/html/

COPY --from=composer /var/www/html/vendor/sulu/sulu /var/www/html/vendor/sulu/sulu
COPY composer.json /var/www/html/
COPY webpack.config.js /var/www/html/

RUN npm install && npm run build

# Build actual image
FROM php:7.2-apache

WORKDIR /var/www/html

# install packages
RUN apt-get update && apt-get install -y \
        openssl \
        git \
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

# copy needed files from build containers
COPY --from=npm /var/www/html/public/build/admin/ /var/www/html/public/build/admin/
COPY --from=composer /var/www/html/vendor/ /var/www/html/vendor/

COPY . /var/www/html/