const express = require("express");
const APP_SERVER = express();
const BODY_PARSER = require("body-parser");
const CountriesRouter = require("./Controllers/countriesController");
const FileRouter = require("./Controllers/filescontroller");

/**
 * REGISTERING MIDDLEWARES
 */
APP_SERVER.use(BODY_PARSER.urlencoded({ extended: true }));
APP_SERVER.use(BODY_PARSER.json());

/**
 * IMPORTING ALL ROUTERS
 */


/**
 * REGISTERING CONTROLLERS
 */
APP_SERVER.use("/countries", CountriesRouter);
APP_SERVER.use("/filesystem", FileRouter);

module.exports = APP_SERVER;