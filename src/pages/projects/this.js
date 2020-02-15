import React from "react"
import Layout from "../../components/layout"

export default () => (
  <Layout>
    <h1>
        This Site 🧑‍💻
    </h1>
    
    <p>
      I built this site not just because I wanted a centralized place to store all-things-Bryce, 
      but also because I wanted to get some more hands on front-end experience. I decided to use 
       <strong> Gatsby</strong> to accelerate the process, which proved to be an amazing decision
        - using Gatsby I was able deploy a skeleton of the site in just a few hours.
    </p>

    <hr></hr>

    <p>
      In the process of putting together this site, I also had to get comfortable with <strong>React </strong>
      and <strong>CSS</strong>. I decided to deploy the finished site on <strong>AWS Amplify </strong>
      because it has options specifically designed for hosting Gatsby sites, making the process incredibly simple.
    </p>
  </Layout>
)