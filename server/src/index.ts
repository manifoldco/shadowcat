import express from "express";

const app = express();

app.set("view engine", "ejs");

const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/signin/oauth/web", (req, res) => {
  res.redirect("/signin/oauth/callback");
});

app.get("/signin/oauth/callback", (req, res) => {
  res.redirect("/signin/oauth/token");
});

app.get("/signin/oauth/token", (req, res) => {
  const token = "Hi I'm a super duper secret token!";

  res.render("pages/index", { token });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
