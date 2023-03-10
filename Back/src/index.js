const app = require("./app");
const { database } = require("./Database/DB_connection");
const {saveApiData} = require("./controllesrs/saveApiData");

database.sync({ alter: false }).then(async () => {
  await saveApiData();
  console.log("estoy conectado a", database.getDatabaseName());

  app.listen(3001, () => {
    console.log("port 3001");
  });
});
