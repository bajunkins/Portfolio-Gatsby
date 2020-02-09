import React from "react"
import Layout from "../components/layout"
import bot1 from "../images/bot1.png"
import bot2 from "../images/bot2.png"

export default () => (
  <Layout>
    <h1>
        Thought-Police-Bot🕵️👁️
    </h1>
    
    <p>
      Thought-Police-Bot is a Reddit bot that can be called to investigate a Redditor
      by using <strong>sentiment analysis</strong> to evaluate the overall toxicity or wholesome-ness
      of their profile.
    </p>

    <img class="f1" src={bot1} alt="bot1" />
    <img class="f2" src={bot2} alt="bot2" />

    <h4>
      Check it out:
      <a style={{margin: `5px`}} href="https://www.reddit.com/user/thought-police-bot">thought-police-bot</a> 
    </h4>

    <hr></hr>

    <p>
      Description 1
    </p>

    <p>
        Description 2
    </p>
  </Layout>
)