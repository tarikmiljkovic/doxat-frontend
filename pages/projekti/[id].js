const { API_URL } = process.env;
import Navigation from "../../components/Navigation";
import ContextWrapper from "../../components/ContextWrapper";
import Footer from "../../components/Footer";
import BodyWrapper from "../../components/BodyWrapper";
import BodyContainer from "../../components/BodyContainer";
import Link from 'next/link'

// import { useContext } from "react";
// import SiteContext from "../../contexts/SiteContext";

import getConfig from "next/config";
// import { useRouter } from "next/router";

export default function Projekt({ result }) {
  // let router = useRouter();
  // const { visible, translateDown } = useContext(SiteContext);

  console.log(result);

  // console.log(result);

  function countIndex(index) {
    if (index == 0) {
      return 4;
    }
    if (index > 2 && index < 5) {
      return 2;
    } else {
      return 1;
    }
  }

  return (
    <>
      <ContextWrapper>
        <BodyContainer>
          <Navigation />

          {/* <Link
            className=""
            href={`/projekti/${result.id + 1}`}
            as={`/projekti/${result.id + 1}`}
          >
            <a className="items" href="/">
              <img
                src={API_URL + result.slike[0].formats.small.url}
                alt=""
                className="hover"
              />
              <div className="bottom">{result.naziv}</div>
            </a>
          </Link> */}

          <BodyWrapper>
            <div>
              <div>
                {result.slike.map((slika, index) => (
                  <img
                    src={API_URL + slika.formats.large.url}
                    alt=""
                    key={index}
                  />
                ))}
              </div>
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

      {/* <div className="second" prop={result.opisProjekta}></div> */}

      {/* <Container>
        <Grid>
          <SpanLeft>
            <PageTitle
              title={projekt.nazivProjekta} //post.nazivProjekta
              description={projekt.opisProjekta}
            ></PageTitle>
          </SpanLeft>

          <SpanRight>
            <div className="grid grid-cols-4 gap-4 mt-0 px-4 sm:pt-0 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              {projekt.galerijaProjekta.map((slike, index) => (
                <img
                  src={API_URL + slike.formats.large.url}
                  alt=""
                  key={index}
                  className={`col-span-${countIndex(
                    index
                  )} md:col-span-${countIndex(index)}`}
                />
              ))}
            </div>
          </SpanRight>
        </Grid>
      </Container> */}
    </> // End Wrapper
  );
}




const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {

  const res = await fetch(`${publicRuntimeConfig.API_URL}/Projektis/${context.params.id.toString()}`);
  const result = await res.json();
  // const contextJson = await res.json();

  // console.log(context)

  // console.log(result);

  return {
    props: {
      result,
    },
    // revalidate: 60,
  };
}


// export async function getStaticPaths({context,locale}) {
//   const res = await fetch(`${API_URL}/Projektis`);
//   const result = await res.json();
//   const paths = result.map((projekt) => ({
//     params: {
//       id: projekt.id.toString()
//     },
//   }));

//   return { paths, fallback: false };
// }
