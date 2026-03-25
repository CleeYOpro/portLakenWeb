const fs = require("fs");
const path = require("path");

const projectDir = "./"; // root of your TSA project
const urlRegex = /(https?:\/\/[^\s"'<>]+)/g;

function scanDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    // Skip node_modules or other junk folders if needed
    if (stat.isDirectory()) {
      if (file === "node_modules" || file.startsWith(".")) continue;
      scanDir(fullPath);
    } else {
      const content = fs.readFileSync(fullPath, "utf8");
      const matches = content.match(urlRegex);

      if (matches) {
        console.log(`\n📄 File: ${fullPath}`);
        for (const url of matches) {
          console.log("   → " + url);
        }
      }
    }
  }
}

scanDir(projectDir);
