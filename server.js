const express = require('express');
const cors = require('cors');
const app = express();
const { MONGO_URI, SERVER_PORT } = require('./src/utils/secrets');
const mongoose = require('mongoose');
const uri = MONGO_URI;


require("./src/routes/api/v1/authRoutes.js")(app);
