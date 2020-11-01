import React from "react";

import "./style.css";
import Logo from "../../../Components/Logo";
import Points from "../../../asset/img/points.jsx";
import Quote from "../../../asset/img/Quote.jsx";
import Endquote from "../../../asset/img/Endquote.jsx";

class LeftSide extends React.Component {
  render() {
    return (
      <>
        <div className="blue">
          <div className="com-logo">
            <Logo />
          </div>
          <div className="quote">
            <Quote color="#00DAF7" />
            <div className="quote-text">
              I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them.
            </div>
            <div className="quotes-name">Hideo Kojima</div>
            <Endquote />

            <div className="points">
              <Points />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LeftSide;
