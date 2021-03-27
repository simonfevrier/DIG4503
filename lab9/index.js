import Express from "express";
import fs from "fs";

const App = Express();
const port = 3010;

let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);

App.use("/", Express.static("public"));

App.get("employees/:name", (req, res) => {
  let result = {"error": "not found"};

  database.forEach((value) => {
    if(req.params.name == value.name) {
      result = value;
    }
  });

  res.json(result);
})

App.get("ages/:number", (req,res) => {
  let result = {"error": "not found"};

  database.forEach((value) => {
    if(req.params.number == value.number) {
      result = value;
    }
  });

  res.json(result);
  })

App.post("employee/:name/:age", (req, res)=> {
  let result = {
      "name": req.params.name,
      "age": parseINT(req.params.age)
  };

  database.push(result)

  fs.writeFileSync("database.json", JSON.stringify(database, null, '\t')

  res.json(result);
});

App.listen(port, () => {
  console.log("Server running!");
})
