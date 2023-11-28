import './style/frontendstack.scss'
export const BackendStack = () => {
    return (
        <div className='fe__container'>
            <div className='ele js__container'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
                <p>RestAPI,<br/>(Author) authentication<br/>Data construction</p>
                <h3>Java SpringBoot</h3>
                <a href="google.com">Certificates</a>
            </div>
            <div className='ele js__container'>          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <h3>NodeJS</h3>
                <p>RestAPI <br/>Hands-on with non-relational db </p>
                <a href="google.com">Certificate</a>
            </div>
        </div>
    )
}