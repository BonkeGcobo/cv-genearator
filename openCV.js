import {exec} from 'child_process'

const Open = () => {
  let filepath = "dist/cv.pdf";
  exec(`start ${filepath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
};

export default Open