const express = require(`express`);
const Sequelize = require(`sequelize`);
const app = express();

app.use(express.json());

const dbUrl = ''

const sequelize = new Sequelize(dbUrl);