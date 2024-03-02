const fs = require("fs");
const http = require("http");

fs.writeFile("text.txt", "Hello world!", () => {
  console.log("file created!");
});

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});

fs.writeFile("text.txt", "Updated content!", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File updated successfully!");
});

// fs.unlink("text.txt", (err) => {
//   if (err) {
//     console.error("Error deleting file:", err);
//     return;
//   }
//   console.log("File deleted successfully!");
// });
