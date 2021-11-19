# Spring EQ Code Challenge

INSTRCTIONS TO RUN APP:

Run `npm run start` in frontend directory


Run `npm run start` in backend directory

frontend runs on Port:3000
backend runs on Port:8000

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An array of sample data can be reached on the server with a GET to /data

A business user wants to see a very simple front-end display for all loans that have a specific attribute, or all attributes for one specific loan. If the user gives a single attribute, the front-end should display a list of all loans and their details for any loan that has that attribute. The user should also be able to search through that list by typing specific details into a search box. If the user gives a single loan identifier, all information for just that loan should be displayed.

Using the provided express server, create routes to return the 2 types of queries above. Then, use that express server to serve your implementation of the front-end.

Requirements:

- Create the routes to serve the details according to specs:
	- Get by loan_number
	- Get by an attribute (e.g. First Name = Mike)
- Create a front end to visualize the data

A search box (fuzzy) to give me a list of loans based on either the loan number, first name, last name, city as I type it in (search-ahead)
The returned list should show the loan number, state, last name and first name with a “detail” collapsible that shows the full record in an easy-to-read format

Instructions:

- Fork this repository
- Push your code to your new forked repo
- Let us know the name of your new repo
