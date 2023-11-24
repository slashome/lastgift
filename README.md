# LastGift

## Project non tech links

[Notion](https://www.notion.so/LastMessage-Voice-Text-Gift-GiveAway-347a401a99ca49978ae1cc6fabd98937?pvs=4)

## Stack description

[comment]: <> (to fetch automatically from installation files)
* Node 20.x
* Nest 10.2
* Angular 9.x
* MySQL 5.7
* MongoDB:latest

## Installation

Clone this repository on your local computer.

Run the `docker-compose up -d`.

Your  stack is now ready!! You can access it via

[comment]: <> (to fetch automatically from installation files)
- api (Nodejs):     http://localhost:3001
- app-ui (Angular)  http://localhost:4201
- database (mysql)  http://localhost:3306
- database (mongoDB)  mongodb://localhost/node

  ```bash
   // access mysql
   ROOT_PASSWORD: node
   NM_DATABASE: dbnode
   USER: usnode
   USER_PASSWORD: pwnode

  // access mongodb
   NM_DATABASE: node
   PORT: 27017
  ```
## Author

Jadilson Guedes <jadilson12@gmail.com>  
License MIT <https://jadilson12.mit-license.org/>
