require("dotenv").config();

const express = require("express");
const postgres = require("./modules/postgres");
const app = express();

app.listen(process.env.PORT);

async function server() {
	let db = await postgres();
}

server();
