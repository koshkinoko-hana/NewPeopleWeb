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
import List from "./styledComponents/List";

const About: React.FC = () => {

  const renderArticles = () => {
    // @ts-ignore
    return (
      <Article>
        <p>Проект «Новые люди» -  это первый в области частный детский сад для детей с расстройством аутистического спектра.</p>
        <p>
          Мы планируем создать своего рода симбиоз образовательного и реабилитационного центра на базе детского сада.
          В одном месте ребенок получит помощь всех профильных специалистов в области дефектологии, сенсорной интеграции,
          АВА терапии. Проект «Новые люди» -  это первый в области частный детский сад для детей с расстройством аутистического спектра.
        </p>
        <p>
          Дети получат комплексное поведенческое и педагогическое сопровождение, обеспечение индивидуальной диеты и
          схемы приема необходимых лекарств. А родители - возможность оставить ребенка в саду на полный день и выйти на работу.
        </p>
        <p>

          "Новые люди" это:
          <List>
            <li>
              комплексный подход к обучению (работа специалистов по АВА,  сенсорной интеграции, дефектологии в едином ключе,
              по персонализированной программе ребенка)
            </li>
            <li>
              питание с учетом индивидуальных особенностей ребенка
            </li>
            <li>
              пребывание полный день (11 часов)
            </li>
            <li>
              видеонаблюдение
            </li>
            <li>
              среда, адаптированная к особенностям и потребностям ребенка
            </li>
          </List>
        </p>
        <p>
          Родители детей с нарушениями развития при каждом маленьком успехе или промахе ребенка обретают и теряют надежду
          вновь сотни раз….И очень хочется, чтобы однажды поверив в своего малыша, семья уже не потеряла эту веру. Мы надеемся
          помочь вам в этом.Наша цель – максимально подготовить ребенка с РАС к общению со сверстниками, к посещению
          в будущем группы обычного сада или школы. Без такой подготовки совместное пребывание детей весьма затруднительно, а,
          зачастую, и невозможно.
        </p>
      </Article>
    );
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
      <Image src="/children/6.jpg"/>
      <TextBlock>
        {renderArticles()}
      </TextBlock>
    </Container>
  )
};

export default About;
