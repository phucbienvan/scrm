### Folder structure
```
|--doc
|--app
   |--Http
      |--Controllers
         |--Admin  --> ADMIN/ controller api put here
         |--Api
            |--V1
               |--User -->  API/  controller api put here
   |--Services
      |--Admin --> ADMIN/ logic request, call model,... from controller put here
      |--User
         |--Version1  --> API/ logic request, call model,... from controller put here
|--resources
   |--views --> blade template put here
      |--admin
   |--templates --> Contains config all the templates to be downloaded for use
      |--admin --> teamplate admin for vue
   |--js --> vuejs codes
      |--core --> all component, services, utils which is can be re-used must be put here
         |--components --> components reuse for multiple pagese
            |--Distributor
               |--Layout
         |--services/
         |--utils/
         |--pages --> the pages are written here
            |--Distributor
               |-->Example --> Sample code structure
      |--modules --> scope components, services... into module,
         |--Home/
         |--Distributor
            |--components/
            |--services/
            index.vue
         ...
|--routes --> laravel routes
|--tests  --> laravel specs
...
```
### Install
## Docker
check [it](https://github.com/Mipu94/MailNhanh_Docker) out

## Non-docker
# OSX user
Note: php >= 7.3, composer, yarn, mysql must be installed on your machine

## Required:
Mysql database with name `mailnhanh` or anything you want but match with `DB_DATABASE` in file .env

```
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve
yarn hot
```

You can now access your project at http://localhost:8000 :)
