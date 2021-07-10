const express = require("express");
const path = require("path");
const data = require("./data.json");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));

app.get("/", function (req, res) {
	res.render("home");
});

app.get("/r/:subreddit", function (req, res) {
	const { subreddit } = req.params;
	const dt = data[subreddit];
	// console.log(dt);
	res.render("reddit", { ...dt });
});

// app.get("/rand", (req, res) => {
// 	const r = Math.floor(Math.random() * 10) + 1;
// 	// res.render("rand.ejs", { rand: r });
// 	res.render("rand.ejs", { r });
// });
app.listen(3000, () => {
	console.log("Port 3000 listening");
});
