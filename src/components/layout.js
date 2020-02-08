import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div class = "a" style={{maxWidth: 950}}>

    <Helmet>
      <title>Bryce.</title>
    </Helmet>

    <header class = "a" style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 class = "a">Bryce Junkins</h3>
      </Link>
      <ul class = 'a' style={{ listStyle: `none`}}>
        <ListLink to="/">About Me<span role='img'>🙋🏻‍♂️</span></ListLink>
        <ListLink to="/projects/">Projects<span role='img'>📁</span></ListLink>
        <ListLink to="/contact/">Find Me<span role='img'>📪</span></ListLink>
      </ul>
    </header>
    <div class ="b">
      {children}
    </div>   
  </div>
)