import React from "react";
import coverImage from "../src/assets/cover/coverImage.jpg";

function About() {

  return(
    <section className= 'my-5'>
        <h1 id="about">Hello, My name is Andre Blankholm</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  )
}



export default About;