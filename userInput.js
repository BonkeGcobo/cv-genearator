import { Output } from './cvGenerator.js';
import readline from 'readline';

console.log("Welcome to the CV generator application!!!")
console.log("Give us a few details about yourself then we will generator a CV for you")

let name = "";
let surname = "";

let skills = []

let Qualfications= []

let WorkExperience =[]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  name = await askQuestion('What is your name? \n');
  surname = await askQuestion('What is your surname? ');
  let skillQuestion = "y"
  while(skillQuestion.toLowerCase()==="y"){
    skillQuestion = await askQuestion("Do you want to add another skill(y/n) \n")
    if(skillQuestion!="y"){
        break
    }
    let skill = await askQuestion("Add your skill \n")
    skills.push(skill)
  }

  let QualficationQues = 'y';
  while(QualficationQues.toLowerCase()==="y"){
    QualficationQues = await askQuestion("Want to add a qualification(y/n) \n")
    if(QualficationQues!="y"){
        break
    }
    let education = {}
    education.institution = await askQuestion("Name of the institution qualification obtained? \n");
    education.startQualification = await askQuestion("When did you start with your education? \n")
    education.endQualification = await askQuestion("When did you end with your education (enter incomplete/inprogress otherwise)? \n")
    education.nameQualification = await askQuestion("Name of your qualification? \n")
    
    Qualfications.push(education)
  }

   
  let workExpQuest = 'y';
  while(workExpQuest.toLowerCase()==="y"){
    workExpQuest = await askQuestion("Want to add a work experience(y/n) \n")
    if(workExpQuest!="y"){
        break
    }
    let myExperience = {}
    myExperience.company = await askQuestion("Name of the Company you worked for? \n");
    myExperience.myRole = await askQuestion("What was your role \n")
    myExperience.start = await askQuestion("When did you start working there? \n")
    myExperience.end = await askQuestion("When did you stop working there( enter inprogress otherwise)")
    
    WorkExperience.push(myExperience)
  }
  Output(name, surname, skills, WorkExperience,Qualfications)
  rl.close();
}

main();
