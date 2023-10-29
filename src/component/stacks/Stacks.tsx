import './style/stacks.scss'
export const Stacks = () => {
    return (<div className="stacks">
        <h1 className='title'>Stacks</h1>
        <div className='stacks__wrapper'>
            <div className='stack frontend'>
                <h3>FRONTEND</h3>
                <div>
                    <h4>Javascript</h4>
                    <h4>Typescript</h4>
                    <h4>SCSS</h4>
                    <h4>ReactJS</h4>
                    <h4>MUI</h4>
                </div>

            </div>
            <div className='stack Backend'>
                <h3>BACKEND</h3>
                <div>
                    <h4>Java</h4>
                    <h4>SpringBoot</h4>
                    <h4>AWS</h4>
                </div>

            </div>
            <div className='stack Database'>
                <h3>DATABASE</h3>
                <div>
                    <h4>PostgreSQL</h4>
                    <h4>MongoDB</h4>
                    
                </div>

            </div>
            <div className='stack Devops'>
                <h3>DEVOPS</h3>
                <div>
                    <h4>GIT</h4>
                    <h4>AWS</h4>
                </div>

            </div>
        </div>

    </div>)
}