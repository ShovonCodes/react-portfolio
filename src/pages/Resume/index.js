import React from "react";
import moment from "moment";
import Title from "../common/Title";
import "./index.scss";
import ResumeItem from "./Item";

const Resume = () => {
  return (
    <div className="page" id="resume">
      <Title icon={"fa fa-university"}>
        <span style={{ paddingLeft: "10%" }}>EDUCATION</span>
      </Title>

      <ResumeItem
        date={"2016 – 2020"}
        title={"Rajshahi University of Engineering & Technlogy"}
        company={"Rajshahi, Bangladesh"}
      >
        <p style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>
          Bachelor of Science, Electrical & Computer Engineering
        </p>
      </ResumeItem>

      <ResumeItem
        date={"2013 – 2015"}
        title={"Govt. Bangabandhu College"}
        company={"Rupsha, Khulna"}
      >
        <p style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>
          Higher Secondary Certificate
        </p>
      </ResumeItem>

      <Title icon={"fa fa-briefcase"}>
        {/*Resume - Total Commercial Experience {moment().diff('09/01/2016', 'years', true).toFixed(2)} years*/}
        <span style={{ paddingLeft: "10%" }}>EMPLOYMENT</span>
      </Title>
      <ResumeItem
        date={"Jun 2020 - Present"}
        title={"ENALO, HYDERABAD, INDIA"}
        company={"Django Backend Developer Intern (Remote)"}
      >
        • Created scalable restful APIs that powers the smooth workflow in the
        frontend.
        <br />• Designed and built the payment page frontend, a payment button
        widget, integrated Cashfree payment gateway.
      </ResumeItem>
      <ResumeItem
        date={"Apr 2019 - Jun 2019"}
        title={"SELISE ROCKIN' SOFTWARE, DHANMONDI, DHAKA"}
        company={"Software Engineer Intern"}
      >
        • Played a prime role in building the frontend and backend for an MCQ
        based examination system.
        <br />• Collaborated with team and maintained the workflow and deadline
        using Scrum.
      </ResumeItem>

      <Title icon={"fa fa-newspaper"}>
        {/*Resume - Total Commercial Experience {moment().diff('09/01/2016', 'years', true).toFixed(2)} years*/}
        <span style={{ paddingLeft: "10%" }}>PUBLICATION</span>
      </Title>

      <ResumeItem
        date={"June 5-7, 2020"}
        title={
          "RECOGNITION OF HANDWRITTEN BANGLA NUMBER USING MULTI LAYER CONVOLUTIONAL NEURAL NETWORK"
        }
        company={"Accepted on: IEEE Tensymp 2020"}
      >
        • Used 80000+ unbiased and augmented data to train the model. <br /> •
        Got an excellent accuracy of about 99%.
      </ResumeItem>
    </div>
  );
};

export default Resume;
