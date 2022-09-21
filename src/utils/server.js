require("dotenv").config();
console.clear();

const express = require("express");
const http = require("http");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const { readdirSync } = require("fs");
const { join } = require("path");

const app = express();
const server = http.createServer(app);

const { PORT, URL_PREFIX } = process.env;

const port = PORT || 3000;

console.log("🚀 | API Started...");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const routes = {};

console.log("\n📶 | Loading routes....");
readdirSync(join(__dirname, "../routes")).forEach((r) => {
  routes[r.split(".")[0]] = [];
  try {
    const router = require(join(__dirname, `../routes/${r}`));

    router.map((route) => {
      routes[r.split(".")[0]].push({
        path: route.path,
        method: route.method.toUpperCase(),
      });

      app[route.method.toLowerCase()](
        `/${URL_PREFIX ? URL_PREFIX + "/" : ""}` + r.split(".")[0] + route.path,
        route.router
      );
    });

    console.log("   - ✔ ", r.split(".")[0]);
  } catch (err) {
    console.log("   - ✖ ", err, r.split(".")[0]);
  }
});

app.use("**", (req, res) =>
  res.json({
    prefix: URL_PREFIX,
    routes,
    example: `${URL_PREFIX ? URL_PREFIX + "/" : ""}path/to/route`,
  })
);

const start = () => {
  server.listen(port);
  server.on("listening", () =>
    console.log("\n🔈 |", `Server listeng on port ${port}\n\nLOGS:`)
  );
  server.on("err", (err) => console.log("\n\n", err, "\n\n"));
};

module.exports = { start };
