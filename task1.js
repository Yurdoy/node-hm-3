const fs = require("fs");

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.error("Error during creating directory:", err);
    return;
  }
  console.log('Directory "myFolder" successfully created.');

  fs.rmdir("myFolder", (err) => {
    if (err) {
      console.error("Error during deleting folder:", err);
      return;
    }
    console.log("Folder was successfully deleted.");
  });
});
