import React from "react"
import Layout from "../components/layout"
import me from "../images/me.png"
import yos from "../images/yos2.png"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `0rem`}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <div>
    <Layout>  
        <h1>
          Hi! I'm Bryce 🙋🏻‍♂️
          
        </h1>
        <img class="b" src={me} alt="TC" />
        <p> </p>
        <p>
          I am a Junior studying computer science at NCSU (<strong>GO PACK</strong> <span role='img'>🐺</span>).
          For <strong>7 months</strong> of 2019 I was lucky enough to intern at <strong>Nokia</strong> in the Bay Area,
          where I collaborated with QA professionals to maintain their test infrastructure. Exposure to a QA system
          at the size and complexity Nokia's gave me an appreciation for thorough and scalable testing that
          I didn't have before my internship. 
        </p>
        <p>
          Being surrounded by the passionate people and high-energy culture leading software innovation was one
          of the coolest experiences of my life and definitely had a last impact on my perspective of the industry. 
          I am super excited to be a part of it.
        </p>
        <p>
          This summer I will be interning at <strong>Cisco</strong> in RTP as a software engineer, where I hope to make tangible contributions
          to my team as well as get my hands dirty with some new technology and tools I've never used before.
        </p>

        <p> </p>

        <hr></hr>
        
        <img class="c" src={yos} alt="TC" />
        <p> </p>
        <p>
          When I'm not coding I love hiking and discovering new music, so the Bay was a perfect fit for me.
          Almost every weekend I was exploring the countless natural landmarks or seeing my favorite
          artists live in San Francisco. 
        </p>
        <p>

          The Upper Yosemite Falls was easily one of my favorite hiking experiences, despite
          almost not making it back due to a lack of preparation (long story). This trail is 
          one-upped only by the Pikchu trail I climbed in Peru a year ago, which winds up the
          mountain Pikchu for a cinematic view of the city Cusco.

        </p>

        <p>
          At the start of this summer I'm doing a tour of 11 European contries, hopefully my hiking
          portfolio will be a little longer by the end!
        </p>
    </Layout>
  </div>

)

/**
Checkout my 
          favorite <ListLink to="/hikes/"> hiking experiences ⛰️</ListLink> and 
          <ListLink to="/music/"> music 🎶</ListLink>. 
 */