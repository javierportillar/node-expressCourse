const { createReadStream } = require("fs");
const http = require("http");

http.createServer(function (req, res) {
  // const text = fs.readFileSync("./content/big.txt", "utf8");
  // res.end(text);
  const fileStream = createReadStream("./content/big.txt", {
    highWaterMark: 90000,
    // encoding: "utf8",
  });
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
}).listen(3000);

// const stream = createReadStream("./content/big.txt", {
//   highWaterMark: 90000,
//   // encoding: "utf8",
// });

// stream.on("data", (result) => {
//   console.log(result);
// });
// stream.on("error", (err) => console.log(err));
