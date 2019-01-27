# Symfony CMS Sulu
Hier ist das Repo für die nevercodealone.de Seite

## Blog Post Symfony CMS Sulu
[Symfony-CMS Sulu – PHP-Training bei Core Developern](https://blog.nevercodealone.de/symfony-cms-sulu-php-training/ "Symfony-CMS Sulu – PHP-Training bei Core Developern")

## Installation

__Mac:__

```
rm -rf var/cache/*
rm -rf var/logs/*
rm -rf var/sessions/*
HTTPDUSER=`ps axo user,comm | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1`
sudo chmod +a "$HTTPDUSER allow delete,write,append,file_inherit,directory_inherit" var/cache var/logs var/uploads var/uploads/* public/uploads public/uploads/* var/indexes var/sessions
sudo chmod +a "`whoami` allow delete,write,append,file_inherit,directory_inherit" var/cache var/logs var/uploads var/uploads/* public/uploads public/uploads/* var/indexes var/sessions
```

__Linux:__

```
rm -rf var/cache/*
rm -rf var/logs/*
rm -rf var/sessions/*
HTTPDUSER=`ps axo user,comm | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1`
sudo setfacl -R -m u:"$HTTPDUSER":rwX -m u:`whoami`:rwX var/cache var/logs var/uploads var/uploads/* public/uploads public/uploads/* var/indexes var/sessions
sudo setfacl -dR -m u:"$HTTPDUSER":rwX -m u:`whoami`:rwX var/cache var/logs var/uploads var/uploads/* public/uploads public/uploads/* var/indexes var/sessions
```
