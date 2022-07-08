# clean-api
A simple developer profile REST API based on the CLEAN architecture paradigm.

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
- Send a GET request. There are two methods: query the id or include a body of `company` or `language` for filtering. 