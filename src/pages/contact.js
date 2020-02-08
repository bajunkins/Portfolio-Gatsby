import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import git from "../images/git.png"
import linked from "../images/linked.png"
import mail from "../images/mail.png"
import resume from "../images/resume.png"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <Layout>
    <div>
    <h1>Find Me 📪</h1>
    <div class="d">
      <div class="e"> 
          <a href="https://github.com/bajunkins"><img class="d" src={git} alt="TC" /></a>
          <a href="https://www.linkedin.com/in/bajunkins/"><img class="d" src={linked} alt="TC" /></a>
          <a href="mailto:brycejunkinz@gmail.com"><img class="d" src={mail} alt="TC" /></a>
          <a href="mailto:brycejunkinz@gmail.com"><img class="d" src={resume} alt="TC" /></a>
      </div>
    </div>
    </div>  
  </Layout>
)