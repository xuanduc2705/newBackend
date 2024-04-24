"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Boxchats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      avatar1: {
        type: Sequelize.STRING,
      },
      avatar2: {
        type: Sequelize.STRING,
      },
      host: {
        type: Sequelize.STRING,
      },
      isGroupchat: {
        type: Sequelize.BOOLEAN,
      },
      member: {
        type: Sequelize.STRING,
      },
      groupava: {
        type: Sequelize.STRING,
      },
      groupname: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Boxchats");
  },
};
