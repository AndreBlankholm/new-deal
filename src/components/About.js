import React from "react";
import coverImage from "../../src/assets/cover/coverImage.jpg";

function About() {

  return(
    <section>
        <h1 id="about">Lucci</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  )
}



export default About;