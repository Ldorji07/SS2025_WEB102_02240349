### a/ Documentation

In this practical, I learned how to create a RESTful API using Node.js and Express. I used HTTP methods like GET, POST, PUT, and DELETE to manage data. Middleware was helpful for handling errors, processing requests, and improving security. I also set up content negotiation so the API could return data in different formats. To keep the project organized, I used Express routers and separate controller files. I also added an error handler to manage API errors and created a simple HTML page to document the API endpoints.

### b/ Reflection

This practical gave me hands-on experience in building a well-structured API. I learned how to organize API routes, handle errors effectively, and use middleware to improve functionality. Understanding content negotiation also helped me make the API more flexible for different users.

I faced a few challenges during this project. One issue was a CORS policy error when testing API endpoints in the browser. I fixed this by installing and configuring the cors middleware in server.js, allowing cross-origin requests. Another challenge was dealing with undefined routes, which caused errors when users accessed non-existent endpoints. I solved this by adding a middleware function to return a 404 error message. Lastly, I noticed that different endpoints returned inconsistent responses, making data retrieval harder. To fix this, I created a utility function to ensure all API responses followed the same format.

Overall, this practical helped me understand the basics of API development. By solving these issues and following best practices, I improved my ability to create reliable and well-structured RESTful APIs.