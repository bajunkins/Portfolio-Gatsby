import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div class = "a" style={{maxWidth: 700}}>

    <header class = "a" style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Bryce Junkins</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Me<span role='img'>🙋🏻‍♂️</span></ListLink>
        <ListLink to="/projects/">Projects<span role='img'>📁</span></ListLink>
        <ListLink to="/contact/">Contact<span role='img'>☎️</span></ListLink>
      </ul>
    </header>
    <div class ="b">
      {children}
    </div>   
  </div>
)