const mongoose = require("mongoose");

const uri = "mongodb://admin:admin@localhost:27017/basefarmacia?authSource=basefarmacia";

mongoose.connect(uri, { } );