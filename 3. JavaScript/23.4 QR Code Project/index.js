import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter the URL you want to convert to a QR code:",
    },
  ])
  .then((answers) => {
    const url = answers.url; // same as `const { url } = answers;`
    console.log(`Generating QR code for: ${url}`);
    let qr_svg = qr.image(url, { type: "svg", parse_url: true });
    qr_svg.pipe(fs.createWriteStream("qr-url.svg"));
    console.log("QR code generated successfully.");
    fs.writeFile("qr-url.txt", url, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log(
          "QR code saved as qr-url.svg and URL saved in qr-url.txt"
        );
      }
    });
  })
  .catch((error) => {
    console.error("Error during inquirer prompt:", error);
  });
