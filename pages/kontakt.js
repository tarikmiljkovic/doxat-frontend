const { API_URL } = process.env;
// import styles from '../styles/Home.module.css'
import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";

import Footer from "../components/Footer";
import ContainerBody from "../components/ContainerBody";
import ContainerMain from "../components/ContainerMain";

export default function Kontakt({ result }) {


  return (
    <>
        <ContainerMain>
          <Navigation />
          <ContainerBody>
            <div>
              <img src={API_URL + result.slika.url} alt="" className="slika" />
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
                <a href="mailto:doxat@bih.net.ba">doxat@bih.net.ba</a>
                <br />
              </div>
            </div>
          </ContainerBody>
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
      ? `${API_URL}/Kontakt`
      : `${API_URL}/kontakt?_locale=en`
  );
  const result = await res.json();

  return {
    props: { result },
  };
}
