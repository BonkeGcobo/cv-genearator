import fs from "fs";
import pdf from "pdf-creator-node";

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
        <meta charset="utf-8" />
        <title>CV</title>
        <style>/* CSS */

        /* Set the background color */
        body {
          background-color: #f2f2f2;
        }
        
        /* Center the content */
        header, section {
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Style the header */
        header {
          background-color: #4CAF50;
          color: white;
          padding: 20px;
          text-align: center;
        }
        
        header h1 {
          font-size: 36px;
          margin-bottom: 10px;
        }
        
        header span {
          display: block;
          margin-bottom: 10px;
        }
        
        /* Style the summary section */
        .summary-section {
          padding: 20px;
        }
        
        .summary-section h2 {
          margin-bottom: 20px;
        }
        
        .summary p {
          font-size: 18px;
          line-height: 1.5;
        }
        
        /* Style the skills section */
        .skills {
          padding: 20px;
        }
        
        .skills h2 {
          margin-bottom: 20px;
        }
        
        .list-of-skills {
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        
        .list-of-skills li {
          background-color: #ddd;
          color: #444;
          font-size: 16px;
          line-height: 1.5;
          padding: 10px;
          margin: 5px;
          border-radius: 5px;
        }
        
        /* Style the work experience section */
        .WorkExperience {
          padding: 20px;
        }
        
        .WorkExperience h2 {
          margin-bottom: 20px;
        }
        
        .list-of-work-experience {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap:4rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .list-of-work-experience li {
          margin-bottom: 20px;
        }
        
        .list-of-work-experience h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        
        .list-of-work-experience p {
          font-size: 18px;
          line-height: 1.5;
          margin-bottom: 5px;
        }
        
        /* Style the education section */
        .education {
          padding: 20px;
        }
        
        .education h2 {
          margin-bottom: 20px;
        }
        
        .list-of-qualification {
          display: grid;
          grid-gap:4rem;
          grid-template-columns: repeat(2, 1fr);
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .list-of-qualification li {
          margin-bottom: 20px;
        }
        
        .list-of-qualification h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        
        .list-of-qualification p {
          font-size: 18px;
          line-height: 1.5;
          margin-bottom: 5px;
        }
        </style>
        
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
               ${skills
                 .map((skill) => {
                   return `<li> ${skill} </li>`;
                 })
                 .join("")}
            </ul>
        </section>

        <section class='WorkExperience'>
          <h2>Work Experience</h2>
          <ul class="list-of-work-experience">
             ${WorkExperience.map((exp) => {
               return `<li class="workExperience"> 
                    <h4>${exp.company}</h4>
                    <p>${exp.myRole}</p>
                    <p>Period: ${exp.start + " - " + exp.end}</p>
                  </li>`;
             }).join("")}
          </ul>
        </section>

        <section class='education'>
        <h2>Qualification</h2>
        <ul class="list-of-qualification">
           ${Qualfications.map((education) => {
             return `<li class="quali"> 
                  <h4>${education.institution}</h4>
                  <p>${education.nameQualification}</p>
                  <p>Period: ${
                    education.startQualification +
                    " - " +
                    education.endQualification
                  }</p>
                </li>`;
           }).join("")}
        </ul>
      </section>
      <script src="cvGenerator.js"></script>
    </body>
    </html>
    `;
  fs.writeFile("dist/index.html", htmlContent, (err) => {
    if (err) throw err;
    console.log("Your CV has been created successfully");

    var html = fs.readFileSync("dist/index.html", "utf8");

    var document = {
      html: html,
      path: "dist/cv.pdf",
      type: "",
    };

    var options = {
      format: "A3",
    };

    pdf.create(document, options)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  });
};
