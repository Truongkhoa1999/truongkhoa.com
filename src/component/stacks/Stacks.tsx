import { useState } from 'react'
import './style/stacks.scss'
import { handleSwitchStack } from '../../utils/handleSwitchStack'
import { FrontendStack } from './FrontendStack'
import { BackendStack } from './BackendStack'
import { DatabaseStack } from './DatabaseStack'
import { CloudStack } from './CloudStack'
import { DevopStack } from './DevopStack'

export const Stacks = () => {
    const [stack, setStack] = useState<string>("Frontend")


    return (
        <div className="stacks">
            <h1>{stack}</h1>
            <div>
                {
                    stack === "Frontend" ? <FrontendStack /> : stack === "Backend" ? <BackendStack /> : stack === "Database" ? <DatabaseStack /> : stack === "Cloud" ? <CloudStack /> : stack === "DevOps"?<DevopStack/>:""
                }
            </div>
            <div className="dock">
                <div className="dock-container">
                    {/* <button onClick={()=> handleSwitchStack("Frontend",setStack)} className="li-1" > */}
                    <button onClick={() => handleSwitchStack("Frontend", setStack)} className={stack === "Frontend" ? "li-active" : "li-1"} >
                        <div className="name">Frontend</div>
                        <img className="ico" src="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/icon%2FFEic.png?alt=media&token=8fe8b976-9f49-448a-9dea-8d3e64314ef4" alt="" />
                    </button>
                    <button onClick={() => handleSwitchStack("Backend", setStack)} className={stack === "Backend" ? "li-active" : "li-2"}>
                        <div className="name">Backend</div>
                        <img className="ico" src="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/icon%2FBEic.png?alt=media&token=26b6fcf7-782b-48a0-94ef-07ca980fe2d8" alt="" />
                    </button>
                    <button onClick={() => handleSwitchStack("Database", setStack)} className={stack === "Database" ? "li-active" : "li-3"}>
                        <div className="name">Database</div>
                        <img className="ico" src="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/icon%2FDBic.png?alt=media&token=66ee7013-0d70-4ac0-9675-3efd8df92740" alt="" />
                    </button>
                    <button onClick={() => handleSwitchStack("Cloud", setStack)} className={stack === "Cloud" ? "li-active" : "li-4"}>
                        <div className="name">Cloud</div>
                        <img className="ico" src="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/icon%2FCIc.png?alt=media&token=4091692f-ab17-4de0-b48b-72f4ab4f8cdc" alt="" />
                    </button>
                    <button onClick={() => handleSwitchStack("DevOps", setStack)} className={stack === "DevOps" ? "li-active" : "li-5"}>
                        <div className="name">DevOps</div>
                        <img className="ico" src="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/icon%2FDEVoc.png?alt=media&token=d838747b-e787-4ef6-bba2-cc00f93d7c18" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}