import React from "react";
import Title from "../common/Title";
import "./index.scss";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import cf from "../../assets/cf.png";
import hackerrank from "../../assets/hackerrank.png";
import stopstalk from "../../assets/stopstalk.png";
import gmail from "../../assets/gmail.png";
import whatsapp from "../../assets/whatsapp.png";

const Contact = () => {
  return (
    <div className="page" id="contact">
      <Title>Social Accounts</Title>
      <br />

      <div className="social-main-div">
        <div className="social-block">
          <a href="mailto:mainulislam588@gmail.com" blank="_blank">
            <img className="social-logo" src={gmail} alt="" />
            <p className="social-name">Gmail</p>
          </a>
        </div>

        <div className="social-block">
          <a
            href="https://api.whatsapp.com/send?phone=+8801952885804&amp;text=Hello, are you available?"
            target="_blank"
          >
            <img className="social-logo" src={whatsapp} alt="" />
            <p className="social-name">Whatsapp</p>
          </a>
        </div>

        <div className="social-block">
          <a href="https://github.com/Shovon588" target="_blank">
            <img className="social-logo" src={github} alt="" />
            <p className="social-name">Github</p>
          </a>
        </div>

        <div className="social-block">
          <a href="https://www.linkedin.com/in/mainulislam588/" target="_blank">
            <img className="social-logo" src={linkedin} alt="" />
            <p className="social-name">Linkedin</p>
          </a>
        </div>

        <div className="social-block">
          <a href="https://codeforces.com/profile/SHOVON588" target="_blank">
            <img className="social-logo" src={cf} alt="" />
            <p className="social-name">Codeforces</p>
          </a>
        </div>

        <div className="social-block">
          <a href="https://www.hackerrank.com/mainulislam588" target="_blank">
            <img className="social-logo" src={hackerrank} alt="" />
            <p className="social-name">HackerRank</p>
          </a>
        </div>

        <div className="social-block">
          <a
            href="https://www.stopstalk.com/user/profile/mainulislam588"
            target="_blank"
          >
            <img className="social-logo" src={stopstalk} alt="" />
            <p className="social-name">StopStalk</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
