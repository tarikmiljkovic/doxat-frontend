const { API_URL } = process.env;
// import styles from '../styles/Home.module.css'
import ContextWrapper from "../components/ContextWrapper";
import Navigation from "../components/Navigation";

import Footer from "../components/Footer";
import BodyWrapper from "../components/BodyWrapper";
import BodyContainer from "../components/BodyContainer";

export default function Kontakt({ result }) {
  return (
    <>
      <ContextWrapper>
        <BodyContainer>
          <Navigation />

          <BodyWrapper>

              <div>
                <img
                  src={API_URL + result.slika.url}
                  alt=""
                  className="slika"
                />
              </div>

              <div>
                <div>
                  <p>
                    <strong> Doxat </strong> d.o.o.
                  </p>
                </div>
                <div>
                  <address>
                    Fadil-Paše Šerifovića,
                    <br />
                    Sarajevo 71000,
                    <br />
                    Bosnia and Herzegovina
                  </address>
                </div>
                <br />
                <div>
                  <strong>T</strong>
                  &nbsp;
                  <a href="tel:+0038733239918">+387 33 239 - 918</a>
                  <br />
                  <strong>F</strong>
                  &nbsp;
                  <a href="tel:+0038733239918">+387 33 239 - 918</a>
                  <br />
                  <strong>E</strong>
                  &nbsp;
                  <a href="mailto:info@doxat.ba">info@doxat.ba</a>
                  <br />
                </div>
              </div>

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
      ? `${API_URL}/Kontakt`
      : `${API_URL}/kontakt?_locale=en`
  );
  const result = await res.json();

  return {
    props: { result },
  };
}
