import { createContext, useState } from "react";

const SiteContext = createContext();

const SiteProvider = ({ children }) => {

  const [pageTranslate, setPageTranslate] = useState('0vh');
  const [pageTranslateSecond, setPageTranslateSecond] = useState("0vh");
  const [carouselState, mutateCarousel] = useState(true);

  const [category, setCategory] = useState("svi");

  return (
    <SiteContext.Provider
      value={{
        pageTranslate,
        setPageTranslate,
        carouselState,
        mutateCarousel,
        pageTranslateSecond,
        setPageTranslateSecond,
        category,
        setCategory,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export {SiteProvider, SiteContext};
