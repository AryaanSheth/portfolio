import React from "react";
import IDCard from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start", // Align items to the top of the screen
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Navbar />
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

export default Home;