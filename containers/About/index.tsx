import React from "react";
import Image from "../../styledComponents/Image";
import Container from "../../styledComponents/Container";
import Header from "../../styledComponents/Header";
import MainContainer from "./styledComponents/MainContainer";
import SideContainer from "./styledComponents/SideContainer";
import data from './data.json';
import Article from "./styledComponents/Article";
import TextBlock from "./styledComponents/TextBlock";
import DocumentsBlock from "./styledComponents/DocumentsBlock";
import {VscFilePdf} from "react-icons/vsc"
import PartialContent from "./styledComponents/PartialContent";

const About: React.FC = () => {

  const renderArticles = () => {
    // @ts-ignore
    return data.blocks.map((block, index) => (
      <Article
        key={`block-${index}`}
        // @ts-ignore
        background={block.background}
        color={block.color}
      >
        <h2>{block.header}</h2>
        <p>{block.text}</p>
      </Article>
    ));
  };

  const renderDocuments = () => {
    return (
      <DocumentsBlock>
        <a href="/document.pdf"><VscFilePdf/>&nbsp;Документ&nbsp;1.pdf</a><br/>
        <a href="/document.pdf"><VscFilePdf/>&nbsp;Документ&nbsp;2.pdf</a><br/>
        <a href="/document.pdf"><VscFilePdf/>&nbsp;Документ&nbsp;3.pdf</a><br/>
        <a href="/document.pdf"><VscFilePdf/>&nbsp;Документ&nbsp;4.pdf</a><br/>
        <a href="/document.pdf"><VscFilePdf/>&nbsp;Документ&nbsp;5.pdf</a><br/>
        <a href="/document.pdf"><VscFilePdf/>&nbsp;Документ&nbsp;6.pdf</a><br/>
        <a href="/document.pdf"><VscFilePdf/>&nbsp;Документ&nbsp;7.pdf</a><br/>
        <a href="/document.pdf"><VscFilePdf/>&nbsp;Документ&nbsp;8.pdf</a>
      </DocumentsBlock>
    )
  }

  return (
    <Container>
      <Header color="sailDark50">О нас</Header>
      <Image src="/children/2.jpg"/>
      <PartialContent>
      <MainContainer>
        <TextBlock>
          {renderArticles()}
        </TextBlock>
      </MainContainer>
      <SideContainer>
        {renderDocuments()}
      </SideContainer>
      </PartialContent>
    </Container>
  )
};

export default About;
