# TODO APP

Watch the APP Demo Video [here](https://drive.google.com/file/d/1Ev76A-gLyE8aN34xB0TiHmX-gBnpexS0/view?usp=sharing)

Build and Rethink your priorities and task with a simple ToDo List and accomplish great things.

### Tech

This app is using the following technologies:

* ReactJS
* NodeJS
* MySQL
* Docker

### Security Consideration

This app is using JWT to maintain session and allow multiple users to login at the same time.

### Build Application with Docker
##### Prerequisites
 Install Docker on your system

1. Ensure you have `docker` and `docker-compose` installed and the docker service is running. You can install it from [here](https://docs.docker.com/docker-for-mac/install/). You can also install using the following on Mac OS -
```sh
$ brew install docker
$ brew install docker-compose
$ start the docker app
```

2. git clone https://github.com/pragyadaga/todo-list
3. `cd todo-list/`
4. Build the Dockers
    ```sh
    $ docker-compose build
    ```
4. Get the system to run
    ```sh
    $ docker-compose up
    ```

The Todo list would be available on http://localhost:3000/

You can go ahead, register a user for yourself and start creating your todo-list

### Build Application without Docker
 ##### Prerequisites
 NodeJs, Npm and MySql. Following commands have been tested on MacOS X
1. git clone https://github.com/pragyadaga/todo-list
2. Install node modules in root directory (/todo-list):  
    ```sh
    $ npm install
    ```
3.  Install MySQL
    ```sh
    $ brew install mysql
    ```
4. Start MySql server
    ```sh
    $ /usr/local/bin/mysql.server start
    ```
5. Login to MySql, set correct password and create DB
    ```sh
    $ mysql -u root
    $ ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password’;
    $ create database todo_list;
    ```
6. Migrate DB for todo-list app
    ```sh
    $ cd todo-list/
    $ sequelize db:migrate
    ```
    In case if the above command is failing, do - 
    ```sh
    $ npm install -g sequelize-cli
    ```
    and then try to run `sequelize db:migrate` command again
7. Install frontend node modules
    ```sh
    $ cd client/
    $ npm install
    ```
7. From app root directory start the project (/todo-list)
    ```sh
    $ npm run dev
    ```

The Todo list is available on http://localhost:3000/

You can go ahead, register a user for yourself and start creating your todo-list

### API Reference

1. Registering a user API -
    ```sh
    curl -X POST \
      http://localhost:5000/api/users/register \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -H 'Postman-Token: bf0598c4-0c5d-495c-b053-d7bf05da246c' \
      -H 'cache-control: no-cache' \
      -d 'firstName=Testing&email=testing%40test.com&password=test123&password2=test123&lastName=App&undefined='
     ```
2. Logging in API
    ```sh
    curl -X POST \
      http://localhost:5000/api/users/login \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -H 'Postman-Token: ac8fdd7c-5059-4a5c-b779-a05ab4267ba0' \
      -H 'cache-control: no-cache' \
      -d 'email=testing%40test.com&password=test123&undefined='
    ```
    Login API will return the token
3. Creating new todo
    ```sh
    curl -X POST \
      http://localhost:5000/api/todos/new \
      -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUxMDA0NTQ0LCJleHAiOjE1ODI1NjE0NzB9.j-EUKG5YJ2YP2eaDponjifltbTv48l7T_ZZfHrt-P9c' \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -H 'Postman-Token: 9cc70f75-7d6e-4e5d-b79c-7618b9c21a6d' \
      -H 'cache-control: no-cache' \
      -d 'title=Second%20Todo&undefined='
     ```
4. Listing all the Todos
    ```sh
    curl -X GET \
      http://localhost:5000/api/todos/ \
      -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUxMDA0NTQ0LCJleHAiOjE1ODI1NjE0NzB9.j-EUKG5YJ2YP2eaDponjifltbTv48l7T_ZZfHrt-P9c' \
      -H 'Postman-Token: 760f7d6b-8e4c-4b70-b917-ed587b29c5c3' \
      -H 'cache-control: no-cache'
    ```
5. Deleting a Todo item
    ```sh
    curl -X DELETE \
      http://localhost:5000/api/todos/:id \
      -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUxMDA0NTQ0LCJleHAiOjE1ODI1NjE0NzB9.j-EUKG5YJ2YP2eaDponjifltbTv48l7T_ZZfHrt-P9c' \
      -H 'Postman-Token: 760f7d6b-8e4c-4b70-b917-ed587b29c5c3' \
      -H 'cache-control: no-cache'
    ```
6. Marking a Todo item as complete
    ```sh
    curl -X POST \
      http://localhost:5000/api/todos/:id/complete \
      -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUxMDA0NTQ0LCJleHAiOjE1ODI1NjE0NzB9.j-EUKG5YJ2YP2eaDponjifltbTv48l7T_ZZfHrt-P9c' \
      -H 'Postman-Token: 760f7d6b-8e4c-4b70-b917-ed587b29c5c3' \
      -H 'cache-control: no-cache'
    ```
7. Marking a Todo item as incomplete
    ```sh
    curl -X POST \
      http://localhost:5000/api/todos/:id/incomplete \
      -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUxMDA0NTQ0LCJleHAiOjE1ODI1NjE0NzB9.j-EUKG5YJ2YP2eaDponjifltbTv48l7T_ZZfHrt-P9c' \
      -H 'Postman-Token: 760f7d6b-8e4c-4b70-b917-ed587b29c5c3' \
      -H 'cache-control: no-cache'
    ```

### Future Considerations

1. Deploy the app on some cloud service eg. Heroku
2. Add features to the todo app:
    1. Add test cases - unit and integration test cases
    2. Ability to flag certain items
    3. Reorder the items present in the todo list
    4. Filter by completed items vs show only incomplete items
    5. Ability to create different kinds of todo-list like work-list, personal-list

### Author ###
##### [Pragya Daga](https://github.com/pragyadaga)
