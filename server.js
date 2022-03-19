const StaticServer = require("static-server");

const server = new StaticServer({
  rootPath: "./dist/",
  port: 4000,
});

server.start(function () {
  console.log(`Server Has Been Started at Port: ${server.port}`);
});
