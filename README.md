Requirements
1. node v18.16.0
2. php v8.2.4
3. Composer v2.5.5
4. Cranetime V2 Database

Cranetime
 - Back End using Laravel 9
    * Go to be folder
    * Run composer install on your cmd or terminal
    * Copy .env.example file to .env on the root folder.
    * Open your .env file and change the database name (DB_DATABASE), username (DB_USERNAME) and password (DB_PASSWORD) field correspond to your configuration.
    * Run php artisan key:generate
    * Run php artisan migrate
    * Run php artisan db:seed
    * Run php artisan passport:install
    * Run php artisan serve
    * Go to http://localhost:8000/

 - Front End using ReactJS
    * Go to fe folder
    * Run npm install
    * Run npm start
    * Go to http://localhost:3000/
