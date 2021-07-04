const { API_URL } = process.env;
// import styles from '../styles/Home.module.css'

import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContainerBody from "../components/ContainerBody";
import ContainerMain from "../components/ContainerMain";

export default function Onama({ result }) {

  return (
    <>
      {/* <Wrapper> */}
      <ContainerMain>
        <Navigation />
        <ContainerBody>
          <img src={result.slika.url} alt="" />

          <div
            dangerouslySetInnerHTML={{
              __html: result.opis,
            }}
          ></div>
        </ContainerBody>
        <Footer />
      </ContainerMain>
      {/* </Wrapper> */}
    </>
  );
}


export async function getStaticProps(context) {
  // set context locale, default.

  // console.log(context.locale);

  const res = await fetch(
    context.locale == "bs"
      ? `${API_URL}/o-nama`
      : `${API_URL}/o-nama?_locale=en`
  );
  const result = await res.json();

  return {
    props: { result },
  };
}
