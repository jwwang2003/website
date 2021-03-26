import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  Form,
  ButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import i18next from 'i18next';
import './i18n/config';
import { useTranslation } from 'react-i18next';
import type CSS from 'csstype';

import HOME from './Pages/Home';
import RESUME from './Pages/Resume';
import BLOG from './Pages/Blog';
import PROJECTS from './Pages/Projects';
import POST from './Pages/Post';
import image from './static/me1.jpg';
import './App.css';

interface AppProps {}

const names = ['Jimmy Wang', 'Jun Wei Wang', '王俊崴'];

function App({}: AppProps) {
  let location = useLocation();
  const [name, setName] = useState<number>(0);
  const [lang, setRadioValue] = useState<string>(
    localStorage.getItem('lang') || 'en',
  );

  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(lang);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    i18next.changeLanguage(lang);
  }, [lang]);

  const LANG = [
    { name: 'English', value: 'en' },
    { name: '中文', value: 'zh-CN' },
  ];

  const changeName = () => {
    if (name + 1 > 2) setName(0);
    else setName(name + 1);
  };

  return (
    <div className="App">
      <div className="Navbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand onClick={changeName}>
              <img
                alt=""
                src={image}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              {names[name]}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/" as={Link} to="/">
                  {t('navHome')}
                </Nav.Link>
                <Nav.Link href="/resume" as={Link} to="/resume">
                  {t('navResume')}
                </Nav.Link>
                <Nav.Link href="/blog" as={Link} to="/blog">
                  {t('navBlog')}
                </Nav.Link>
                <Nav.Link href="/projects" as={Link} to="/projects">
                  {t('navProjects')}
                </Nav.Link>
              </Nav>
              <Form inline>
                <ButtonGroup toggle>
                  {LANG.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      type="radio"
                      variant="secondary"
                      name="radio"
                      value={radio.value}
                      checked={lang === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="Content">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={250}>
            <Switch location={location}>
              <Route exact path="/" render={Home} />
              <Route path="/blog" render={Blog} />
              <Route path="/projects" render={Projects} />
              <Route path="/resume" render={Resume} />
              <Route path="/post" component={() => <Post />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

const style: CSS.Properties = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: '100%',
  height: '100%'
};

function Post() {
  return (
    <div style={{ ...style }}>
      <POST />
    </div>
  );
}

function Home() {
  return (
    <div style={{ ...style }}>
      <HOME />
    </div>
  );
}

function Blog() {
  return (
    <div style={{ ...style }}>
      <BLOG />
    </div>
  );
}

function Projects() {
  return (
    <div style={{ ...style }}>
      <PROJECTS />
    </div>
  );
}

function Resume() {
  return (
    <div style={{ ...style }}>
      <RESUME />
    </div>
  );
}

export default App;
