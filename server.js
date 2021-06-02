const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server");

const PORT = 3000;
const app = express();

const data = {
  users: [{ id: 1, name: "Cory" }],
  vehicles: [{ id: 1, make: "Tesla" }],
};

app.use("/ graphql", jsonGraphqlExpress.default(data));
app.listen(PORT);
console.log(`Running on ${PORT}`);
