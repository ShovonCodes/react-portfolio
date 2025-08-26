import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./index.scss";

const Menu = () => {
	return (
		<ul className="menu">
			<Menu.Item name={"person"} link="/">
				About
			</Menu.Item>
			<Menu.Item name={"university"} link="/education">
				Education
			</Menu.Item>
			<Menu.Item name={"briefcase"} link="/experience">
				Experience
			</Menu.Item>
			<Menu.Item name={"ios-paper-outline"} link="/publications">
				Publications
			</Menu.Item>
			{/* <Menu.Item name={"code"} link="/works">
				Projects
			</Menu.Item> */}
			<Menu.Item name={"at"} link="/contact">
				Social
			</Menu.Item>
		</ul>
	);
};

Menu.Item = ({ link = "", children, name }) => (
	<li>
		<NavHashLink smooth to={link} activeClassName={"active"} exact>
			<span className={`icon ion-${name}`} />
			{children}
		</NavHashLink>
	</li>
);

export default Menu;
