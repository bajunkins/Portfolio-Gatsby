import React from "react"
import Layout from "../components/layout"
import me from "../images/me.png"
import yos from "../images/yos2.png"

export default () => (
  <div>
    <Layout>  
        <h1>
          Hi! I'm Bryce 🙋🏻‍♂️
          <img class="b" src={me} alt="TC" />
        </h1>
        <p>
            I am a Junior studying computer science at NCSU (<strong>GO PACK</strong> <span role='img'>🐺</span>).
            Computer Science to me is the most exciting thing in the <strong>world</strong>, because it is the
            front line of technological innovation at this point in history. The insanely low barrier to entry and abundance of
            resources online means <strong>anyone</strong> with an internet connection and a computer can contribute.
            
        </p>

        <p>When I'm not coding, I love discovering new music, hiking, and exploring 
            obscure internet communities. 
        </p>
        <hr></hr>
        <img class="c" src={yos} alt="TC" />
        <p>
          For <strong>7 months</strong> of 2019 I was lucky enough to intern at Nokia in the Bay Area, where I had the time of my life going to 
          concerts in SF and exploring the never-ending supply of jaw-dropping landmarks. At the same time,
          I was gaining invaluable industry experience and learning from the innovative and fast-paced Silicon Valley
          culture.
        </p>

        <p>
          This summer I will be interning at Cisco as a software engineer, where I hope to make tangible contributions
          to my team as well as get my hands dirty with some new technology and tools I've never used before.
        </p>
    </Layout>
  </div>

)