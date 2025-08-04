import express from "express";

const server = express();
server.use(express.urlencoded({ extended: true }));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});

server.post("/form-data", (req, res) => {    
  res.send(
    `<pre style='color:green; justify-content:center; margin-top:5vh; font-size:20px'>${JSON.stringify(req.body, 0, 2)}</pre>`
  );
});

const port = process.env.PORT;
server.listen(port || 3043, () =>
  console.log(`listening on port: ${port || 3043}`)
);
