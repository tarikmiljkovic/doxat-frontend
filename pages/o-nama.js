const { API_URL } = process.env;
// import styles from '../styles/Home.module.css'

import ContextWrapper from "../components/ContextWrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BodyWrapper from "../components/BodyWrapper";
import BodyContainer from "../components/BodyContainer";

export default function Onama({ result }) {

  return (
    <>
      <ContextWrapper>
        <BodyContainer>
          <Navigation />
          <BodyWrapper>

              <img src={API_URL + result.slika.url} alt="" />

              <div
                dangerouslySetInnerHTML={{
                  __html: result.opis,
                }}
              ></div>

          </BodyWrapper>
          <Footer />
        </BodyContainer>
      </ContextWrapper>
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
