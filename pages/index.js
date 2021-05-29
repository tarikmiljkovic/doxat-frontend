
// import styles from '../styles/Home.module.css'
const { API_URL } = process.env;

import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import TranslateDown from "../components/TranslateDown";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import ContainerMain from "../components/ContainerMain";
import {useContext} from 'react';
import { SiteContext } from "../contexts/SiteContext";

import { useRouter } from "next/router";
import styled from "@emotion/styled";

export default function Home({ projekti, numberOfProjects }) {
  let router = useRouter();

  const { carouselState } = useContext(SiteContext);
  const { pageTranslate } = useContext(SiteContext);

  return (
    <IndexStyled carouselState={carouselState} pageTranslate={pageTranslate}>
      <Carousel />
      <TranslateDown />
      <ContainerMain>
        <Navigation />
        <Grid projekti={projekti} numberOfProjects={numberOfProjects} />
        <Footer />
      </ContainerMain>
    </IndexStyled>
  );
}

const IndexStyled = styled.div`
  /* height: calc(100% - 100vh); */
  overflow: hidden;
  max-height: 100vh;
  overflow: ${(props) => (props.carouselState ? "hidden" : "visible")};
`;

export async function getStaticProps(context) {

  const res = await fetch(
    context.locale == "bs"
      ? `${API_URL}/Projektis?_sort=published_at:DESC`
      : `${API_URL}/Projektis?_sort=published_at:DESC&_locale=en`
  );
  const projekti = await res.json();

    const countProjects = await fetch(
      context.locale == "bs"
        ? `${API_URL}/Projektis?_sort=published_at:DESC`
        : `${API_URL}/Projektis?_sort=published_at:DESC&_locale=en`
    );
    const numberOfProjects = await countProjects.json();


  return {
    props: { projekti, numberOfProjects },
    revalidate: 1
  };
}

