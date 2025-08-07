// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import List from "./List.jsx";

const fname = "Ivan";
const lname = "Pina";
const date = new Date();
const year = date.getFullYear();
const time_hour = date.getHours();
let dayTime = null;

if (time_hour < 12) {
  dayTime = "morning";
} else if (time_hour >= 12 && time_hour < 18) {
  dayTime = "afternoon";
} else {
  dayTime = "evening";
}

function App() {
  return (
    <div>
      <h1 className="title">My Favorite Foods</h1>  {/* className is the recommended way to add classes in JSX */}
      <List /> {/* This is a custom component! */}
      <p className="greeting">Good {dayTime}!</p>
      <p className="footer">
        Created by {fname} {lname}!
      </p>
      <p className="footer">Copyright {year}</p>
    </div>
  );
}

export default App;
