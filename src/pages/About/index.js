import React from 'react';
import './index.scss';
import Title from "../common/Title";

const About = () => {
    return (
        <div className="page" id="about">
            <Title>
                About Me
            </Title>
            <div className="row">
                <div className="column">
                    <strong>
                        Hi, I am Shovon
                    </strong>
                    <p>
                        A problem-solving enthusiast with 3 years of experience in solving programming problems who has solved 750+ programming problems across various sports programming platform and developer focusing on Python, Django, Django Rest Framework and JavaScript Technologies. Looking forward to working with ingenious teams on challenging projects.
                        <br/> <br/>
                        I’m an easy going person and can easily be a part of any team. I enjoy being around different types of people and I like to challenge myself to improve my skills and ability.
                        <br/><br/>
                        I have a great passion for programming and learning new technologies. I have a deep understanding of how Python works. I strongly believe that having a solid understanding of core technologies allows developers to master at any frameworks.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;
