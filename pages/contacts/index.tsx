import React from "react";
import MainApp from "../../containers/App";
import ContactsComponent from "../../containers/Contacts";

const Contacts: React.FC = () => {
  return (
    <MainApp >
      <ContactsComponent/>
    </MainApp>
  );
}

export default Contacts;
