import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <AppBar position="static">
          <Toolbar>
            <Link
              to="/"
              style={{ textShadow: `none`, backgroundImage: `none` }}
            >
              <h3 style={{ display: `inline` }}>MySweetSite</h3>
            </Link>
            <ul style={{ listStyle: `none` }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
            </ul>
          </Toolbar>
        </AppBar>
      </header>
      {children}
    </div>
  );
}
