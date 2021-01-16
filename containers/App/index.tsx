import React from "react";
import Head from "next/head";
import PageContainer from "../../styledComponents/PageContainer";
import Header from "../../components/Header";
import MainContainer from "../../styledComponents/MainContainer";

const App: React.FC = ({children}) => {
  return (
    <>
      <Head>
        <title>Детский сад "Новые люди"</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <PageContainer>
        <Header/>
        <MainContainer>
          {children}
        </MainContainer>
      </PageContainer>
    </>
  );
}
export default App;
