import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's World" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="Quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans"> Dolore
            cumque animi aliquam qui sint facilis corrupti ipsum et tempora
            expedita, iste quibusdam pariatur assumenda aut odio ipsa modi id
            libero.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign } alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
