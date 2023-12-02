import React from "react";
import "./index.scss";
import Title from "../common/Title";

const About = () => {
    return (
        <div className="page" id="about">
            <Title>About Me</Title>
            <div className="row">
                <div className="column">
                    <h4>Hi, I am Shovon</h4>
                    <p>
                        I am a Software Engineer with a passion for
                        problem-solving and software development. I enjoy
                        building, managing, writing applications at scale. I
                        love building scalable and user-friendly web
                        applications using emerging frameworks, tools, and
                        technologies. Being a problem solver, I like challenges
                        and love to play around and break stuff while learning
                        something new. Apart from that I also have experience in
                        web scraping and web browser automation. I enjoy both
                        strategy and execution - and above all, a great culture
                        (which, extending Drucker a bit, eats them both for
                        breakfast). I would love to work with an innovative team
                        that makes things happen. I am interested in Full Stack
                        Development and building SaaS applications. If you want
                        to talk about serverless technologies, scalable SaaS
                        applications, distributed system design, micro-service
                        architecture, Web 3.0 technologies and business ideas
                        then I am all ears.
                        <br /> <br />
                        I’m an easy going person and can easily be a part of any
                        team. I enjoy being around different types of people and
                        I like to challenge myself to improve my skills and
                        ability.
                        <br />
                        <h4>Technologies: </h4>
                        - Top languages: Python, JavaScript/TypeScript <br />
                        - Top libraries & frameworks: ReactJs, Django Rest
                        Framework <br />
                        - Databases: MySQL, PostgreSQL, DynamoDB <br />
                        - Cloud technologies: AWS (EC2, Lambda, Api
                        Gateway, Cognito, Cloudfront, S3, SNS, SQS, Step
                        Functions, CloudWatch, etc) <br />
												- IaC frameworks: Terraform,
                        Serverless - Others: MaterialUI, CircleCI, etc.

												<h4>Also interested in: </h4>
												- Web Security, Artificial Intelligence, Machine Learning, Blockchain and other Web 3.0 technologies

                    </p>

                    <div>
                        <h3 className="mt-5">Coders Rank Profile</h3>
                        <codersrank-summary
                            username="shovon588"
                            branding="false"
                            show-avatar="false"
                        ></codersrank-summary>

                        <br />
                        <h3 className="mt-5">Github Activity</h3>
                        <codersrank-activity
                            username="minul-vimond"
                            branding="false"
                            labels="true"
                            legend="true"
                            weeks="40"
                        ></codersrank-activity>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
