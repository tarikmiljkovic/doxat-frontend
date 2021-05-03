// import styles from '../styles/Home.module.css'
const { API_URL } = process.env;

import ContextWrapper from "../components/ContextWrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import BodyContainer from "../components/BodyContainer";
import { useRouter } from "next/router";
import { useContext } from "react";
import SiteContext from "../contexts/SiteContext";


export default function Home({ projekti }) {
  let router = useRouter();

  // const { category, setCategory } = useContext(SiteContext);
  // console.log(category);

  return (
    <>
      <ContextWrapper>
        <BodyContainer>
          <Navigation />
          <Grid projekti={projekti} />
          <Footer />
        </BodyContainer>
        {/* A components in the middle doesn't have to pass the theme down
        explicitly anymore. */}
      </ContextWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  // set context locale, default.
  // console.log(context.locale);

  const res = await fetch(
    context.locale == "bs"
      ? `${API_URL}/Projektis`
      : `${API_URL}/Projektis?_locale=en`
  );
  const projekti = await res.json();

  return {
    props: { projekti },
  };
}
