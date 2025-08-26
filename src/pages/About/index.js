import React from "react";
import "./index.scss";
import Title from "../common/Title";

const About = () => {
    return (
        <div className="page" id="about">
            <Title>About Me</Title>
            <div className="row">
                <div className="column" style={{ width: '100%'}}>
                    <h4>Hi, I am Shovon</h4>
                    <p>
                        I’m a Full-Stack Software Engineer with 4+ years of experience building cloud-native applications using AWS, React, 
                        TypeScript, and Node.js. I enjoy creating solutions that work smarter, faster, and cleaner. <br /><br />

                        My current focus is on Large Language Models (LLMs) and intelligent automation, pushing beyond simple chat to 
                        building agents that truly assist. Alongside engineering, I hold a deep passion for research and aspire to pursue a 
                        PhD, contributing to the advancement of AI systems and infrastructure. I’m eager to collaborate with research labs and
                        contribute to meaningful work at the intersection of large-scale systems and AI.<br /><br />

                        <h4>Tools & Technologies:</h4>
                        - Languages: TypeScript, JavaScript, Python <br />
                        - Frameworks: React, Node.js, Express, Fastify, Django Rest Framework <br />
                        - Databases: DynamoDB, PostgreSQL, MySQL <br />
                        - Cloud: AWS (Lambda, API Gateway, Cognito, CloudFront, Step Functions, SNS, SQS, etc.) <br />
                        - IaC: Terraform, Serverless Framework <br />
                        - AI/ML: TensorFlow, NLTK, Pandas, NumPy, Scikit-learn <br />
                        - Frontend & Tools: Tailwind, Material UI, CircleCI, FFmpeg, LaTeX <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
