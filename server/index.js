const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.PASSWORD,
  database: "movieLibrary",
});

app.post("/create", (req, res) => {
  const title = req.body.title;
  const length = req.body.length;
  const genre = req.body.genre;
  const description = req.body.description;
  const director = req.body.director;

  db.query(
    "INSERT INTO movies (title, length, genre, description, director) VALUES (?,?,?,?,?)",
    [title, length, genre, description, director],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted.");
      }
    }
  );
});

app.get("/movies", (req, res) => {
  db.query("SELECT * FROM movies", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const description = req.body.description;
  db.query(
    "UPDATE movies SET description = ? WHERE id = ?",
    [description, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM movies WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Your server is runnig on port ${process.env.PORT}.`);
});
