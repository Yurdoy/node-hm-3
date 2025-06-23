const fs = require("fs");

const content = "Node.js is awesome!";

fs.writeFile("info.txt", content, "utf8", (err) => {
  if (err) {
    console.error("Error during writing in file:", err);
    return;
  }
  console.log("Content successfully wrote in file");
});

fs.readFile("info.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error during reading file:", err);
    return;
  }
  console.log("File content:", data);
});
