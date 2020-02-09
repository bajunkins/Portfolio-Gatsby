import React from "react"
import Layout from "../components/layout"
import tunechef from "../images/tunechef.png"

export default () => (
  <Layout>
      <img class="a" src={tunechef} alt="TC" />
    <h1>
        TuneChef 👨🏽‍🍳🎧
    </h1>
    
    <p>
      TuneChef is a WebApp that <strong>automatically and intelligently</strong> builds a playlist based on the
      combined music tastes of everyone in your party, using the Spotify API.
    </p>

    <h4>
      Check it out:
      <a style={{margin: `5px`}} href="https://tunechef.herokuapp.com/">TuneChef</a> 
      <span class="small"> (If you don't have a Spotify account, I made a <a href="https://www.youtube.com/watch?v=5_akRxPORjU&feature=youtu.be ">quick demo</a>)</span>
    </h4>

    <hr></hr>

    <p>
      Not only was this my first hackathon project, but it was also my first time ever using 
      JavaScript 🤯. Turns out building an entire project in 24 hours in a 
      language you don't know is a really efficient way to learn the 
      language. I built TuneChef with two friends at HackNC 2019.
    </p>

    <p>
        I am obsessed with sharing and discovering new music, so this app was something I had been thinking about for awhile.
        I am super proud of how it came out, and I actually use it all the time.
    </p>
  </Layout>
)