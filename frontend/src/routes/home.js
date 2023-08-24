import React from "react";
import "./css/home.css";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="Home">
      <header className="title3">
        <h1>ONLINE JUDGE FOR CSE LAB EXAM</h1>
      </header>
      <section className="main-content">
        <div className="hero-image">
          <img className="image" src="https://i.ibb.co/8ggpGBL/contest1.jpg" alt="contest1" border="0" />
        </div>
        <div className="content">
          <h2>Online Judge</h2>
          <p>
            online judge is a web-based platform designed to evaluate and grade programming code submitted by users. It provides a virtual environment where programmers can solve algorithmic problems and programming challenges from various domains. Users can submit their code, which is then tested against a predefined set of test cases to determine its correctness and efficiency.
          </p>
          <button className="learn1button">Learn More</button>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <img className="image"  src="https://i.ibb.co/SdYZtL3/home2.jpg" alt="home2" border="0" />
          <h3>Feature 1</h3>
          <p className="para1">
            Real-time Code Evaluation:
            An online judge for CSE lab exams offers real-time code evaluation, allowing students to submit their code solutions of problems and instantly receive feedback on their correctness and efficiency.
          </p>
        </div>
        <div className="feature">
          <img className="image" src="https://i.ibb.co/3RScqsg/home1.jpg" alt="home1" border="0" />
          <h3>Feature 2</h3>
          <p className="para1">
            Automated Grading System: The online judge automates the grading process, saving time and effort for instructors. It automatically tests submitted code against multiple test cases and assesses performance of the solutions.
          </p>
        </div>
        <div className="feature">
          <img className="image" src="https://i.ibb.co/cJqBmXx/home3.jpg" alt="home3" border="0" />
          <h3>Feature 3</h3>
          <p className="para1">
            Secure and Controlled Environment: The online judge provides a secure and controlled environment for conducting lab exams. It prevents plagiarism and cheating by restricting access to external resources during the exam.
          </p>
        </div>
      </section>
    </div>
    </div>
    
  );
}

export default Home;
