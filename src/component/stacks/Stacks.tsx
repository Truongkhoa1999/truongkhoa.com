import { useEffect, useState } from "react";
import "./style/stacks.scss";
// import { handleSwitchStack } from '../../utils/handleSwitchStack'
import { FrontendStack } from "./FrontendStack";
import { BackendStack } from "./BackendStack";
import { DatabaseStack } from "./DatabaseStack";
import { CloudStack } from "./CloudStack";
import { DevopStack } from "./DevopStack";
import { useParams } from "react-router-dom";
import CRTScreen from "./CRTcreen";

export const Stacks = () => {
  const [stack, setStack] = useState<string>("Frontend");
  const params = useParams();
  const paramsKey = Object.keys(params)[0];
  let paramsValue = params[paramsKey as keyof typeof params];
  console.log(params)
  const handleStacks = (paramsValue: string) => {
    const regex = /\/([^/]+)$/;
    const lastStringStack = paramsValue.match(regex)
    if (lastStringStack && lastStringStack.length > 1) {
      setStack(lastStringStack[1])
    }

  }

  useEffect(() => {
    handleStacks(paramsValue!)
  }, [params])

  return (
    <div className="stacks">
<CRTScreen />
      <h1>{stack}</h1>
      <div>
        {
          stack === "Frontend" ? <FrontendStack /> : stack === "Backend" ? <BackendStack /> : stack === "Database" ? <DatabaseStack /> : stack === "Cloud" ? <CloudStack /> : stack === "DevOps" ? <DevopStack /> : ""
        }
      </div>



    </div>
  );
};
