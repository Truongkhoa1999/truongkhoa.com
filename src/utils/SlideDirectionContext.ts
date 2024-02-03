import React, { createContext, useContext } from "react";

export const SlideDirectionContext = createContext<React.MutableRefObject<string | null>>({} as React.MutableRefObject<string | null>);

export const useSlideDirection = () => {
  return useContext(SlideDirectionContext);
};
