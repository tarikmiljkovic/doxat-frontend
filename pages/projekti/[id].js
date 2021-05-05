const { API_URL } = process.env;
import Navigation from "../../components/Navigation";
import ContextWrapper from "../../components/ContextWrapper";
import Footer from "../../components/Footer";
import BodyWrapper from "../../components/BodyWrapper";
import OtherProjects from "../../components/OtherProjects";
import BodyContainer from "../../components/BodyContainer";
import Link from 'next/link'

// import { useContext } from "react";
// import SiteContext from "../../contexts/SiteContext";

import getConfig from "next/config";
// import { useRouter } from "next/router";

export default function Projekt({ result, requestJ, currentProjectIndex, nextProjectIndex, prevProjectIndex}) {
  // let router = useRouter();
  // const { visible, translateDown } = useContext(SiteContext);

  // console.log(result);

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
          <OtherProjects
            requestJ={requestJ}
            currentProjectIndex={currentProjectIndex}
            nextProjectIndex={nextProjectIndex}
            prevProjectIndex={prevProjectIndex}
          ></OtherProjects>
          <div>
            {/* <div>
              {typeof requestJ[result.id - 1] == undefined ? (
                ""
              ) : (
                <div>
                  {" "}
                  <a
                    href={`/projekti/${requestJ[result.id - 1].id}`}
                    as={`/projekti/${requestJ[result.id - 1].id}`}
                  >
                    <img
                      src={
                        API_URL +
                        requestJ[result.id - 1].skica.formats.thumbnail.url
                      }
                      alt=""
                    />
                  </a>
                </div>
              )}
            </div>
            <div>
              {typeof requestJ[result.id + 1] == undefined
                ? ""
                : requestJ[result.id + 1].skica.formats.thumbnail.url}
            </div> */}
          </div>
          <Footer />
        </BodyContainer>
      </ContextWrapper>
    </>
  );
}




const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const res = await fetch(
    `${publicRuntimeConfig.API_URL}/Projektis/${context.params.id.toString()}`
  );
  const result = await res.json();

  let request = {};

  if(context.locale =='bs'){
     request = await fetch(`${publicRuntimeConfig.API_URL}/Projektis/`);
  }else{
     request = await fetch(
      `${publicRuntimeConfig.API_URL}/Projektis?_locale=en`
    );
  }
  console.log(context.params.id);

  let requestJ = await request.json();

  // console.log(context.params.id);
  let currentProjectIndex = requestJ.findIndex((elem) => elem.id == context.params.id);
  console.log(currentProjectIndex);

  let nextProjectIndex = requestJ[currentProjectIndex +1] == undefined
    ? 1
    : currentProjectIndex + 1;
    console.log(nextProjectIndex);
  let prevProjectIndex =
    currentProjectIndex - 1 >= 0 ? currentProjectIndex - 1 : 0;

    // console.log(currentProjectIndex);
    // console.log(nextProjectIndex);
    // console.log(prevProjectIndex);


  // console.log(requestJ[1].id);



  // console.log(myKeys);

  return {
    props: {
      result,
      requestJ,
      currentProjectIndex,
      nextProjectIndex,
      prevProjectIndex,
    },
    // revalidate: 60,
  };
}
