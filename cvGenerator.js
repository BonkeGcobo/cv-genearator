import fs from "fs";
import {exec} from "child_process";

export const Output = (
  name,
  surname,
  skills,
  WorkExperience,
  Qualfications
) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Website</title>
    </head>
    <body>
        <h1>${(name, surname)} </h1>
        <p>This is a paragraph of text.</p>
    </body>
    </html>
    `;
  fs.writeFile("yourCV.html", htmlContent, (err) => {
    if (err) throw err;
    console.log("Your CV has been created successfully");
    const filePath = "yourCV.html";

    exec(`start ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  });
};
