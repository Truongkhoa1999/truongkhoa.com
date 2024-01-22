import { useEffect, useState } from "react";
import "./style/stacks.scss";
// import { handleSwitchStack } from '../../utils/handleSwitchStack'

import { useParams } from "react-router-dom";

export const Stacks = () => {
  const [stack, setStack] = useState<string>("Frontend");
  const params = useParams();
  const paramsKey = Object.keys(params)[0];
  let paramsValue = params[paramsKey as keyof typeof params];
  console.log(params);
  const handleStacks = (paramsValue: string) => {
    const regex = /\/([^/]+)$/;
    const lastStringStack = paramsValue.match(regex);
    if (lastStringStack && lastStringStack.length > 1) {
      setStack(lastStringStack[1]);
    }
  };

  useEffect(() => {
    handleStacks(paramsValue!);
  }, [params]);

  return (
    <div className="stack__container">
      {/* <div className="background"></div> */}
      {/* <div className="checkerboard"></div> */}
      {/* <h1>{stack}</h1> */}
      <div className="stack__group">
        <div className="stack__card"></div>
        <div className="stack__card"></div>
        <div className="stack__card"></div>
      </div>
      <div className="certificate__container">

      </div>
    </div>
  );
};
