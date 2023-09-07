import React from "react";

function Nav() {
  const categories = [
    {
      name: "Projects",
      description:
        "List of Projects to display that I made during and after bootcamp",
    },
    {
      name: "Certificatons",
      description: "List of Certification from bootcamp, Udemy and Corsera",
    },
    {
      name: "Employment",
      description: "List of employers with contact Information",
    },
  ];

  //onClick return statement//
  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <div>
      <header>
        <h2>
          <a href="/">
            <span role="img" aria-label="camera">
              {" "}
              😄{" "}
            </span>{" "}
            Main page link (/)
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#about">About me</a>
            </li>
            <li>
              <span>Contact</span>
            </li>

            {categories.map((category) => (
              <li className="mx-2" key={category.name}>
                <span onClick={()=> categorySelected(category.name)}>{category.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
