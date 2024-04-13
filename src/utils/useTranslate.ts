import { useCallback, useState } from "react";
import { Point } from "react-d3-tree";


export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) =>{
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem:any) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 5 });
    }
  }, []);
  return [translate, containerRef];
};
