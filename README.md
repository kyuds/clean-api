# clean-api
A simple developer profile REST API based on the CLEAN architecture paradigm.

<br/>
Currently, the database is not setup yet, so every command is emulated with the assumption that there is one. 
This is the beauty of the CLEAN architecture: no need to have everything in place. 

### Installation and Quick Start
Run the following commands in the directory where the code should be installed. 
```
git clone https://github.com/kyuds/clean-api.git
cd clean-api
npm install
```
Run `mongod` then `npm run start` to start MongoDB and the server. 

### RESTful Features
Try testing the API on Postman! The server listens on `localhost:3000`. 
- Send a POST request through `localhost:3000/dev` with fields `firstName`, `lastName`, `email`, `currentCompany`, and `bestLanguage`. 
- Send a GET request. There are two methods: path the `id` or include a query of `company` or `language`. 
- Send a PATCH request by putting the `id` in the path and changes to the `body`.
- Send a DELETE request by putting the `id` in the path. 