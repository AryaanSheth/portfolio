import React from "react";
import IDCard from "./components/Card/Card";

const App: React.FC = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <IDCard
        name="Aryaan Sheth"
        title="Cloud Analyst Intern @ Sun Life Financial"
        location="Toronto, ON"
        university="McMaster University"
        skills={["Cloud", "Backend", "DevOps", "Databases"]}
        image="https://avatars.githubusercontent.com/u/67332328?v=4"
        github="https://github.com/AryaanSheth"
        linkedin="https://www.linkedin.com/in/aryaansheth/"
        stackoverflow="https://stackoverflow.com/users/21440608/lines"
      />
    </div>
  );
};

export default App;
