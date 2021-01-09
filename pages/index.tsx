import React from 'react'
import Head from 'next/head'
import PageContainer from "./styledComponents/PageContainer";
import MainContainer from "./styledComponents/MainContainer";
import Header from "./components/Header";
import HomePage from "./containers/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Детский сад "Новые люди"</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <PageContainer>
        <Header/>
        <MainContainer>
          <HomePage/>
        </MainContainer>
        </PageContainer>
      </>
  )
}
