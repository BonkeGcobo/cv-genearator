import fs from "fs";
import { exec } from "child_process";

export const Output = (
  name,
  surname,
  professionalSummary,
  skills,
  WorkExperience,
  Qualfications,
  emailAddress,
  contactNumber
) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>CV</title>
        <link rel="stylesheet" href="styles/style.css">
    </head>
    <body>
        <header>
            <h1>${name + " " + surname}</h1>
            <span>${emailAddress}</span>
            <span>${contactNumber}</span>
        </header>

        <section class="summary-section">
           <h2>Summary</h2>
           <div class="summary">
           <p>${professionalSummary}</p>
           </div>
           
        </section>

        <section class="skills">
            <h2>Skills</h2>
            <ul class="list-of-skills">
               ${skills.map((skill) => {
                 return `<li> ${skill} </li>`
               }).join('')}
            </ul>
        </section>

        <section class='WorkExperience'>
          <h2>Work Experience</h2>
          <ul class="list-of-work-experience">
             ${WorkExperience.map((exp)=>{
                return  `<li class="workExperience"> 
                    <h4>${exp.company}</h4>
                    <p>${exp.myRole}</p>
                    <p>Period: ${exp.start + " - " +exp.end}</p>
                  </li>`
             }).join('')}
          </ul>
        </section>

        <section class='education'>
        <h2>Qualification</h2>
        <ul class="list-of-qualification">
           ${Qualfications.map((education)=>{
              return  `<li class="quali"> 
                  <h4>${education.institution}</h4>
                  <p>${education.nameQualification}</p>
                  <p>Period: ${education.startQualification + " - " +education.endQualification}</p>
                </li>`
           }).join('')}
        </ul>
      </section>
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
