const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("IgBackend", "root", "duc2003vodich", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
const Connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
Connect();
