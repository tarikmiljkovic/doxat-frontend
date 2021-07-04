const { API_URL } = process.env;
// import styles from '../styles/Home.module.css'

import Wrapper from "../components/Wrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContainerRest from "../components/ContainerRest";
import ContainerMain from "../components/ContainerMain";

export default function Software({ result }) {

    // const { carouselState } = useContext(SiteContext);
    // const { pageTranslate } = useContext(SiteContext);

  // console.log(result);
  return (
    <>
      <ContainerMain>
        <Navigation />
        <ContainerRest>

            {result.slike.map((slika, index) => (
              <img src={slika.url} alt="" key={index} />
            ))}


          <div
            dangerouslySetInnerHTML={{
              __html: result.opis,
            }}
          ></div>
        </ContainerRest>
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
      ? `${API_URL}/softver`
      : `${API_URL}/softver?_locale=en`
  );
  const result = await res.json();

  return {
    props: { result },
  };
}
