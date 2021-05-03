import React from "react";
import MainApp from "../../containers/App";
import NewsComponent from "../../containers/News";

const Contacts: React.FC = () => {
  return (
    <MainApp >
      <NewsComponent/>
    </MainApp>
  );
}

export default Contacts;
