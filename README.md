# clean-api
A simple developer profile REST API based on the CLEAN architecture paradigm.

### Installation and Quick Start
Run the following commands in the directory where the code should be installed. 
```
git clone https://github.com/kyuds/clean-api.git
cd clean-api
npm install
```
Run `npm run start` to start the server. 

### RESTful Features
Try testing the API on Postman! The server listens on `localhost:3000`. 
Currently, a POST request is emulated, but not connected to a database. 
- Send a post request through `localhost:3000/developers` with fields `firstName`, `lastName`, `email`, `currentCompany`, and `bestLanguage`. 