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
                        A dynamic Software Engineer with a dual focus on full stack development and cutting-edge research in
                        artificial intelligence. I excel in problem-solving and take pleasure in crafting scalable, user-friendly
                        web applications using the latest frameworks and technologies. <br /><br />

                        In the realm of full stack development, I specialize in creating SaaS applications, leveraging serverless
                        technologies, and designing micro-service architectures. Proficient in Python and JavaScript/TypeScript,
                        I have hands-on experience with frameworks like ReactJs and Django Rest Framework. My database expertise
                        includes MySQL, PostgreSQL, and DynamoDB, and I am well-versed in cloud technologies such as AWS services. <br /><br />

                        Beyond my role as a Full Stack Developer, my passion extends to the realms of research. I am particularly
                        intrigued by artificial intelligence, delving into machine learning, natural language processing,
                        and handwriting recognition. <br /><br />

                        I am currently aspiring to pursue higher studies and contribute to the field of research. If you are seeking
                        a dynamic professional with expertise in full stack development and a passion for cutting-edge research,
                        I am eager to connect and explore potential opportunities. <br /> <br />

                        <h4>Tools & technologies: </h4>
                        - Top languages: Python, JavaScript/TypeScript <br />
                        - Top libraries & frameworks: ReactJs, ExpressJs, Fastify, Django Rest Framework <br />
                        - Databases: MySQL, PostgreSQL, DynamoDB <br />
                        - Cloud technologies: AWS (Lambda, Api Gateway, Cognito, Cloudfront, S3, SNS, SQS, etc) <br />
                        - IaC frameworks: Terraform, Serverless framework <br />
                        - AI/ML Libraries: Tensorflow, NLTK, Pandas, NumPy, SKLearn etc. <br />
                        - Writing tools: LaTeX, Microsoft Excel <br />
                        - Others: MaterialUI, CircleCI, Ffmpeg, etc. <br />
                    </p>

                    <div>
                        <h3 className="mt-5">Coders Rank Profile</h3>
                        <codersrank-summary
                            username="shovon588"
                            branding="false"
                            show-avatar="false"
                        ></codersrank-summary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
