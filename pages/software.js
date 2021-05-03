const { API_URL } = process.env;
// import styles from '../styles/Home.module.css'

import ContextWrapper from "../components/ContextWrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BodyWrapper from "../components/BodyWrapper";
import BodyContainer from "../components/BodyContainer";

export default function Onama({ result }) {

  console.log(result);
  return (
    <>
      <ContextWrapper>
        <BodyContainer>
          <Navigation />
          <BodyWrapper>


              <div className="">
                {result.slike.map((slika, index) => (
                  <img
                    src={API_URL + slika.url}
                    alt=""
                    key={index}
                  />
                ))}
              </div>

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
      ? `${API_URL}/softver`
      : `${API_URL}/softver?_locale=en`
  );
  const result = await res.json();

  return {
    props: { result },
  };
}
