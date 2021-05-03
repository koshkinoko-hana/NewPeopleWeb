import React from "react";
import MainApp from "../../containers/App";
import AboutComponent from "../../containers/About";

const About: React.FC = () => {
  return (
    <MainApp>
      <AboutComponent/>
    </MainApp>
  );
}

export default About;
