import python from "../../assets/python.jpg";
import react from "../../assets/react.png";
import django from "../../assets/django.png";
import js from "../../assets/js.png";
import ts from "../../assets/typescript.png";
import drf from "../../assets/drf.png";
import aws from "../../assets/aws.png";
import bs from "../../assets/bs.png";
import git from "../../assets/git.png";
import postman from "../../assets/postman.png";
import nodejs from "../../assets/nodejs.png";

export const THEMES = {
  javascript: {
    backgroundImage: js,
    linearGradient: createLinearGradient("#bba815", "#FFF"),
    primaryColor: "#BBA815",
    color: "#000000",
  },
  typescript: {
    backgroundImage: ts,
    linearGradient: createLinearGradient("#bba815", "#FFF"),
    primaryColor: "#2656c7",
    color: "#000000",
  },
  react: {
    backgroundImage: react,
    linearGradient: createLinearGradient("#61dafb", "#FFF"),
    primaryColor: "#61dafb",
    color: "#222222",
  },
  nodejs: {
    backgroundImage: nodejs,
    linearGradient: createLinearGradient("#61dafb", "#FFF"),
    primaryColor: "#6cc24a",
    color: "#222222",
  },
  python: {
    backgroundImage: python,
    linearGradient: createLinearGradient("#2b5b84", "#ffd343"),
    primaryColor: "#2b5b84",
    color: "#0043A9",
  },
  aws: {
    backgroundImage: aws,
    linearGradient: createLinearGradient("#EC7211", "#FFF"),
    primaryColor: "#EC7211",
    color: "#49D191",
  },
  django: {
    backgroundImage: django,
    linearGradient: createLinearGradient("#0C4B33", "#FFF"),
    primaryColor: "#0C4B33",
    color: "#0C4B33",
  },
  drf: {
    backgroundImage: drf,
    linearGradient: createLinearGradient("#A30000", "#FFF"),
    primaryColor: "#A30000",
    color: "#A30000",
  },
  bs: {
    backgroundImage: bs,
    linearGradient: createLinearGradient("#000", "#FFF"),
    primaryColor: "#000",
    color: "#A30000",
  },
  git: {
    backgroundImage: git,
    linearGradient: createLinearGradient("#2b280d", "#FFF"),
    primaryColor: "#2b280d",
    color: "#A30000",
  },
  postman: {
    backgroundImage: postman,
    linearGradient: createLinearGradient("#ff6c37", "#FFF"),
    primaryColor: "#ff6c37",
    color: "#A30000",
  },
};

function createLinearGradient(color1, color2) {
  return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
