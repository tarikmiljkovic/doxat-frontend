
// import styles from '../styles/Home.module.css'
const { API_URL } = process.env;

import Wrapper from "../components/Wrapper";
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

export default function Home({ projekti }) {
  let router = useRouter();

      const { carouselState } = useContext(SiteContext);
      const { pageTranslate } = useContext(SiteContext);


  return (
    <IndexStyled carouselState={carouselState} pageTranslate={pageTranslate}>
      <Carousel />
      <TranslateDown />
      <ContainerMain>
        <Navigation />
        <Grid projekti={projekti} />
        <Footer />
      </ContainerMain>
      {/* </div> */}
    </IndexStyled>
  );
}

const IndexStyled = styled.div`
  /* height: calc(100% - 100vh); */
  overflow: hidden;
  max-height: 100vh;
  // This must be constained,because of the translateY on the index.js page
  overflow: ${(props) => (props.carouselState ? "hidden" : "visible")};
`;

export async function getServerSideProps(context) {

  // set context locale, default.

  // console.log(context.locale);

  const res = await fetch(
    context.locale == "bs"
      ? `${API_URL}/Projektis?_sort=published_at:DESC`
      : `${API_URL}/Projektis?_sort=published_at:DESC&_locale=en`
  );
  const projekti = await res.json();

  console.log(projekti);

  return {
    props: { projekti },
  };
}

