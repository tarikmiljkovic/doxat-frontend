// import styles from '../styles/Home.module.css'
const { API_URL } = process.env;

import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import ContainerMain from "../components/ContainerMain";
import { useRouter } from "next/router";
import { useContext } from "react";
import SiteContext from "../contexts/SiteContext";


export default function Home({ projekti, numberOfProjects }) {
  let router = useRouter();

  // const { category, setCategory } = useContext(SiteContext);
  // console.log(category);

  return (
    <>
      <ContainerMain>
        <Navigation />
        <Grid projekti={projekti} numberOfProjects={numberOfProjects} />
        <Footer />
      </ContainerMain>
      {/* A components in the middle doesn't have to pass the theme down
        explicitly anymore. */}
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

  const countProjects = await fetch(
    context.locale == "bs"
      ? `${API_URL}/Projektis/count`
      : `${API_URL}/Projektis/count?_locale=en`
  );
  const numberOfProjects = await countProjects.json();


  return {
    props: { projekti, numberOfProjects },
  };
}
