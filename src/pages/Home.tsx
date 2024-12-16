import React from "react";
import IDCard from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <title>Home - Portfolio</title>
      <Navbar />
      <IDCard
        name="Aryaan Sheth"
        title="Cloud Analyst Intern @ Sun Life Financial"
        location="Toronto, ON"
        university="McMaster University"
        image="/images/github.jpg"
        github="https://github.com/AryaanSheth"
        linkedin="https://www.linkedin.com/in/aryaansheth/"
        stackoverflow="https://stackoverflow.com/users/21440608/lines"
        description="Cloud & Backend Developer"
      />
    </div>
  );
};

export default Home;
