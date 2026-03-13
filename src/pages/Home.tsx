import React, { useEffect } from "react";
import IDCard from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Aryaan Sheth – DevOps & Software Engineer";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IDCard
        name="Aryaan Sheth"
        title="Founder @ PromptLint"
        companyLink="https://promptlint.dev"
        location="Hamilton, ON"
        university="McMaster University"
        graduationDate="2027"
        image="/images/github.jpg"
        github="https://github.com/AryaanSheth"
        linkedin="https://www.linkedin.com/in/aryaansheth"
        email="avsheth03@gmail.com"
        description="DevOps & Software Engineer · AI Tooling"
        />
      </div>
    </div>
  );
};

export default Home;
