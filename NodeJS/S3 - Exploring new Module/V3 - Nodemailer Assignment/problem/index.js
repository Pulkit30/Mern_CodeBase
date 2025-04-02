// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from "nodemailer";
import readline from "readline";

const Solution = async () => {
  // Write your code here
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Please enter your email", async (str1) => {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codingninjas2k16@gmail.com",
        pass: "slwvvlczduktvhdj",
      },
    });
    const mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: str1,
      subject: "Coding Ninjas",
      text: "The world has enough coders; be a coding ninja!",
    };
    try {
      const result = await transport.sendMail(mailOptions);
      console.log(`Email sent to ${str1}`);
    } catch (err) {

      console.log("Email send failer with error: " + err);
    }
  });
};

export default Solution;
