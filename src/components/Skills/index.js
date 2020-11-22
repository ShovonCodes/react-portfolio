import React, { useContext } from "react";
import "./index.scss";
import { ThemeContext } from "../../context/ThemeContext";

const Skills = () => {
	const { changeTheme, stopThemeChangeTimer } = useContext(ThemeContext);

	function handleMouseEnter(e) {
		const type = e.nativeEvent.target.id;
		if (type) {
			changeTheme(type);
		}
	}

	return (
		<div className="skills">
			<h5>Skills</h5>
			<ul
				onMouseEnter={stopThemeChangeTimer}
				// onMouseLeave={startThemeChangeTimer}
				onMouseOver={handleMouseEnter}
			>
				<li id="python">Python</li>
				<li id="django">Django</li>
				<li id="drf">Django Rest Framework</li>
				<li id="postman">Postman</li>
				<li id="javascript">JavaScript</li>
				<li id="react">React</li>
				<li id="git">Git</li>
				<li id="aws">AWS</li>
				<li id="bs">Beautiful Soup</li>
			</ul>
		</div>
	);
};

export default Skills;
