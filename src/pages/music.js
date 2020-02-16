import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <div>
    <Layout>  
        <h1>
          Good Music 🎶
        </h1>
        <p> </p>
        <p>
          Since I love annoying people with music recommendations, I've decided to dedicate a whole page
          to it.
        </p>
        <hr></hr>

        <h3>
          2020
        </h3>
    </Layout>
  </div>

)