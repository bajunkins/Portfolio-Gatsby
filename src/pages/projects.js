import React from "react"
import Layout from "../components/layout"
import tunechef from "../images/tunechef.png"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <Layout>
    <h1><span role='img'>My Projects 📁</span></h1>
    <p>Checkout some of the stuff I've been working on.</p>
      <div class="c" style={{outline: "5px solid #FFC145"}}>
        <ListLink to="/tunechef/">TuneChef👨🏽‍🍳🎧</ListLink>
        <p class="a">
          WebApp that intelligently builds Spotify playlists for your party.
        </p>
      </div>
  </Layout>
)