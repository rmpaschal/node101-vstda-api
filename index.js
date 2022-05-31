const app = require('./app');
const server = require('./app');
const port = process.env.PORT || 8484;
server.listen(port, () =>  console.log(`server is listening on ${port}...`));

// write your code here
