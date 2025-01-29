import * as dotenv from "dotenv";
dotenv.config(); // to store email and githuburl

import e from "express";
import cors from "cors";

//setup
const app = e();
const PORT = 4000;

app.use(e.json());
app.use(cors()); // handling cross-origin resource sharing

// getting required info from env file and storing
const e_mail = process.env.HNG_EMAIL;
const github_repo_url = process.env.GITHUB_URL;

//endpoint handler
app.get('/info_api', (req, res) => {
try {
    // to get current date and time in the ISO 8601 formatted timestamp.
    const now = new Date().toLocaleString('sv-SE', { timeZoneName: 'short' }).slice(0, 19);

   //error handling if required data are not available
   if (!e_mail || !github_repo_url) {
    return res.status(500).json({ error: "Email or GitHub URL not available." });
  }

   //to store required data
   const data = {
    email: e_mail,
    current_datetime: now,
    github_url: github_repo_url,
   };

   // getting the stored data as a JSON response
   res.status(200).json(data);
} catch (error) { //error handling to detect errors from the server
    console.error("Error in /info_api:", error); 
    res.status(500).json({ error: "Internal server error" }); 
}
});

// starting the server
app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
})