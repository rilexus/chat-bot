#Chat-bot
![](https://media.giphy.com/media/Xbcl7LFbXBMQHre2MR/giphy.gif)

##Tech
* React (TypeScript)
* Node Express (TypeScript)
* Socket.io
* MongoDB
* Docker
* lerna
* cypress
* jest
* testing-library-react
* testing-library-react/user-event

##Modules
All modules are located in the `package` folder. There are the following packages:
* database: Contains the database data and the docker-compose.yml
* backend: Contains the Express node server
* frontend: Contains React application
* ui: Contains React application UI and the UI-Theme
* types: Contains type definitions which are shared between the backend and frontend packages

##Instructions
You will need docker installed on your system. To start project development follow steps:
1. run `yarn run start` from the "package/database" module and wait till the database is online
2. run `yarn run start:dev` from the root. This spins up frontend, backend, types and the ui package at the same time. 
