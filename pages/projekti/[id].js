const { API_URL } = process.env;
import Navigation from "../../components/Navigation";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import ContainerBody from "../../components/ContainerBody";
import OtherProjects from "../../components/OtherProjects";
import ContainerMain from "../../components/ContainerMain";
import Link from 'next/link'

// import { useContext } from "react";
// import SiteContext from "../../contexts/SiteContext";

import getConfig from "next/config";
// import { useRouter } from "next/router";

export default function Projekt({
  result,
  requestJ,
  currentProjectIndex,
  nextProjectIndex,
  prevProjectIndex,

}) {
  // let router = useRouter();
  // const { carouselState, mutateCarousel } = useContext(SiteContext);

  var sl = result.plan;
  console.log(sl);


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


  function otherProjects() {
    // const isLoggedIn = props.isLoggedIn;
    // if (currentProjectIndex || nextProjectIndex \\ prevProjectIndex) {

      return (
        <OtherProjects
          requestJ={requestJ}
          currentProjectIndex={currentProjectIndex}
          nextProjectIndex={nextProjectIndex}
          prevProjectIndex={prevProjectIndex}
        ></OtherProjects>
      );
    // }
    return <></>;
  }


  return (
    <>
      <Wrapper>
        <ContainerMain>
          <Navigation
            requestJ={requestJ}
            currentProjectIndex={currentProjectIndex}
          />

          <ContainerBody>
            <div>
              <div>
                {result.slike.map((slika, index) => (
                  <img
                    src={slika.formats.medium.url}
                    alt="doxat sarajevo"
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
            <div>
              {result.plan.map((slika, index) => (
                <img
                  src={slika.url}
                  alt="doxat"
                  key={index}
                />
              ))}
            </div>
          </ContainerBody>

          {otherProjects()}


          <div>
          </div>
          <Footer />
        </ContainerMain>
      </Wrapper>
    </>
  );
}




const { publicRuntimeConfig } = getConfig();

// Get Current Project with current ID
export async function getServerSideProps(context) {
  const res = await fetch(
    `${publicRuntimeConfig.API_URL}/Projektis/${context.params.id.toString()}`
  );
  const result = await res.json();

  // get the Whole
  let request = {};
  if (context.locale == "bs") {
    request = await fetch(`${publicRuntimeConfig.API_URL}/Projektis/`);
  } else {
    request = await fetch(
      `${publicRuntimeConfig.API_URL}/Projektis?_locale=en`
    );
  }
  let requestJ = await request.json();

  // console.log(context.params.id);
  let currentProjectIndex = requestJ.findIndex(
    (elem) => (elem.id == context.params.id)
  );



  let nextProjectIndex =
    requestJ[currentProjectIndex + 1] == undefined
      ? 1
      : currentProjectIndex + 1;

  let prevProjectIndex =
    currentProjectIndex - 1 >= 0 ? currentProjectIndex - 1 : 0;



  // console.log(currentProjectIndex);
  // console.log(nextProjectIndex);
  // console.log(prevProjectIndex);

  // console.log(requestJ[1].id);


  // console.log(nextProjectIndex);

  return {
    props: {
      result,
      requestJ,
      currentProjectIndex ,
      nextProjectIndex,
      prevProjectIndex,
    },
    // revalidate: 60,
  };
}
