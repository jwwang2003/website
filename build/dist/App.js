import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import {TransitionGroup, CSSTransition} from "../_snowpack/pkg/react-transition-group.js";
import {Switch, Route, Link, useLocation} from "../_snowpack/pkg/react-router-dom.js";
import {
  Navbar,
  Nav,
  Container,
  Form,
  ButtonGroup,
  ToggleButton
} from "../_snowpack/pkg/react-bootstrap.js";
import i18next from "../_snowpack/pkg/i18next.js";
import "./i18n/config.js";
import {useTranslation} from "../_snowpack/pkg/react-i18next.js";
import HOME from "./Pages/Home.js";
import RESUME from "./Pages/Resume.js";
import BLOG from "./Pages/Blog.js";
import PROJECTS from "./Pages/Projects.js";
import image from "./static/me1.jpg.proxy.js";
import "./App.css.proxy.js";
const names = ["Jimmy Wang", "Jun Wei Wang", "王俊崴"];
function App({}) {
  let location = useLocation();
  const [name, setName] = useState(0);
  const [lang, setRadioValue] = useState(localStorage.getItem("lang") || "en");
  const {t} = useTranslation();
  useEffect(() => {
    i18next.changeLanguage(lang);
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", lang);
    i18next.changeLanguage(lang);
  }, [lang]);
  const LANG = [
    {name: "English", value: "en"},
    {name: "中文", value: "zh-CN"}
  ];
  const changeName = () => {
    if (name + 1 > 2)
      setName(0);
    else
      setName(name + 1);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Navbar"
  }, /* @__PURE__ */ React.createElement(Navbar, {
    collapseOnSelect: true,
    expand: "lg",
    bg: "dark",
    variant: "dark"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Navbar.Brand, {
    onClick: changeName
  }, /* @__PURE__ */ React.createElement("img", {
    alt: "",
    src: image,
    width: "30",
    height: "30",
    className: "d-inline-block align-top"
  }), " ", names[name]), /* @__PURE__ */ React.createElement(Navbar.Toggle, {
    "aria-controls": "responsive-navbar-nav"
  }), /* @__PURE__ */ React.createElement(Navbar.Collapse, {
    id: "responsive-navbar-nav"
  }, /* @__PURE__ */ React.createElement(Nav, {
    className: "mr-auto"
  }, /* @__PURE__ */ React.createElement(Nav.Link, {
    href: "/",
    as: Link,
    to: "/"
  }, t("navHome")), /* @__PURE__ */ React.createElement(Nav.Link, {
    href: "/resume",
    as: Link,
    to: "/resume"
  }, t("navResume")), /* @__PURE__ */ React.createElement(Nav.Link, {
    href: "/blog",
    as: Link,
    to: "/blog"
  }, t("navBlog")), /* @__PURE__ */ React.createElement(Nav.Link, {
    href: "/projects",
    as: Link,
    to: "/projects"
  }, t("navProjects"))), /* @__PURE__ */ React.createElement(Form, {
    inline: true
  }, /* @__PURE__ */ React.createElement(ButtonGroup, {
    toggle: true
  }, LANG.map((radio, idx) => /* @__PURE__ */ React.createElement(ToggleButton, {
    key: idx,
    type: "radio",
    variant: "secondary",
    name: "radio",
    value: radio.value,
    checked: lang === radio.value,
    onChange: (e) => setRadioValue(e.currentTarget.value)
  }, radio.name)))))))), /* @__PURE__ */ React.createElement("div", {
    className: "Content"
  }, /* @__PURE__ */ React.createElement(TransitionGroup, null, /* @__PURE__ */ React.createElement(CSSTransition, {
    key: location.key,
    classNames: "fade",
    timeout: 250
  }, /* @__PURE__ */ React.createElement(Switch, {
    location
  }, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    render: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/blog",
    render: Blog
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/projects",
    render: Projects
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/resume",
    render: Resume
  }))))));
}
const style = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: "100%",
  height: "100%"
};
function Home() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {...style}
  }, /* @__PURE__ */ React.createElement(HOME, null));
}
function Blog() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {...style}
  }, /* @__PURE__ */ React.createElement(BLOG, null));
}
function Projects() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {...style}
  }, /* @__PURE__ */ React.createElement(PROJECTS, null));
}
function Resume() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {...style}
  }, /* @__PURE__ */ React.createElement(RESUME, null));
}
export default App;
