# qap3_fs_new
 Using-Api-in-browser

My Version of QAP3

This is an assignment for my Fullstack Class at Keyin College

We were tasked with creating a RESTful API with Node, Express, EJS, and postgreSQL or MongoDB

I chose to use MongoDB Atlas

============================================================================
MAKE SURE TO TYPE: npm i || IN THE TERMINAL TO INSTALL NODE MODULES

Start program:

npm start

End Program:

Ctrl + C

============================================================================
MongoDB

database: KEYIN COLLEGE > QAP3

User: mark
password: keyin

.json file is also available on the GitHub repo

============================================================================
Postman

REPLACE <id> with the employee id from the database

GET- all employees
http://localhost:3000/api/employees

-- send

GET- single employee
http://localhost:3000/api/employees?id=<id>

-- send

POST
http://localhost:3000/api/employees

-- make sure you are in: body -> x-www-form-urlencoded
-- then make keys: name, job, email, status
-- then values for those keys
-- send

PUT
http://localhost:3000/api/employees?id=<id>

-- make sure you are in: body -> x-www-form-urlencoded
-- then make keys: name, job, email, status
-- then values for those keys
-- then select only paramters you wish to change
-- send

DELETE
http://localhost:3000/api/employees?id=<id>

--send

============================================================================
My Version of QAP3 

This is an assignment for my Fullstack Class at Keyin College

We were tasked with creating a RESTful API with Node, Express, EJS, and postgreSQL/MongoDB

 main
