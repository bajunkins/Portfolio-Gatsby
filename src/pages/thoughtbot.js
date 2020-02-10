import React from "react"
import Layout from "../components/layout"
import bot1 from "../images/b1.png"
import bot2 from "../images/b2.png"

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

    <p>
    Mentioning "<strong>/u/thought-police-bot</strong>" in a comment on Reddit will
      trigger an investigation of the author of the comment/post replied to.
    </p>

    <img class="f1" src={bot1} alt="bot1" />
    <img class="f2" src={bot2} alt="bot2" />

    <h4>
      Check it out:
      <a style={{margin: `5px`}} href="https://www.reddit.com/user/thought-police-bot">thought-police-bot</a> 
    </h4>

    <hr></hr>

    <p>
      On Reddit, everyone's history is on public display, and is set in stone after 6 months.
      I think judging someone's character based on their comment history alone is a funny but
      also dystopian reminder of this fact. I named it after the Thought Police in George Orwell's 1984.
    </p>

    <p>
        Thought-Police-Bot is built with Python libraries <strong>praw</strong> for interacting with Reddit,
        and <strong>textblob</strong> for performing the sentiment analysis, 
        and is hosted on <strong>AWS EC2</strong>.
    </p>
  </Layout>
)