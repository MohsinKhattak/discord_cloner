const MirrorClient = require("./client");
require("dotenv").config(); // Load environment variables from .env file

const authtoken = process.env.AUTH_TOKEN; // Access the authtoken variable

const client = new MirrorClient({ checkUpdate: false });
client.login(authtoken);
