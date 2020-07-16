import React from "react"
import Layout from "../components/layout"
import me from "../images/me2.png"
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
          I am a Senior studying CS at NCSU (<strong>GO PACK</strong> <span role='img'>🐺</span>).
          I chose Software because it is a space where simple ideas can quickly and dramatically change the world <span role='img'>🌎</span>.
          I've observed a modern motif characterized by random kids with internet access making industry-changing contributions (sometimes accidentally).
          In a lot of ways, such as its youth and limited barriers to entry, the software industry feels like a <strong>new global frontier</strong>, 
          and I'm excited to contribute to it <span role='img'>💻</span>.
        </p>
        <p> 
          This summer I'm interning at Cisco where I have become comfortable
          building full stack applications at a professional level, from setting up relational databases to
          designing and implementing REST apis to wireframing UIs. Thanks to this experience 
          I have finally overcome the imposter syndrome that I think a lot rookies in this industry experience <span role='img'>😂</span>.
        </p>

        <p> </p>

        <hr></hr>
        
        <img class="c" src={yos} alt="TC" />
        <p> </p>
        <p>
          Last year I was lucky enough to spend 7 months in the Bay Area while I was working at Nokia.
          In addition to experiencing the cultural and technical epicenter of the software industry, I also
          discovered some other passions of mine, such as live music <span role='img'>🎤</span> and hiking <span role='img'>🥾</span>. Every weekend I was exploring
          one the area's countless natural landmarks or seeing my favorite artists live in San Francisco.
        </p>
        <p>
          I definitely fell in love with the West coast, so I'm planning to move out to the Bay after graduating Spring 2021! 
          This time around I'm gonna make sure to hit some of the famous music festivals and also scale the Half Dome at Yosemite.
        </p>
    </Layout>
  </div>

)

/**
Checkout my 
          favorite <ListLink to="/hikes/"> hiking experiences ⛰️</ListLink> and 
          <ListLink to="/music/"> music 🎶</ListLink>. 
 */