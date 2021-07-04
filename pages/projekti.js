
const { API_URL } = process.env;

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import ContainerMain from "../components/ContainerMain";
import { useRouter } from "next/router";
// import { useContext } from "react";
// import SiteContext from "../contexts/SiteContext";


export default function Home({ projekti, numberOfProjects }) {
  let router = useRouter();

  return (
    <>
      <ContainerMain>
        <Navigation />
        <Grid projekti={projekti} numberOfProjects={numberOfProjects} />
        <Footer />
      </ContainerMain>

    </>
  );
}

export async function getStaticProps(context) {
  // set context locale, default.
  // console.log(context.locale);

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
  };
}
