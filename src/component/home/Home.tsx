// Style
import "./style/home.scss";
export const Home = () => {
  return (
    <div className="home__container">
      <h1 className="typorgraphy">
        Designer & Developer
      </h1>
      <h3 className="description">Hi I am Truong Khoa, A Passionate in FullStack Web App Developing</h3>
      <div className="code__container">
        <div className="macos__nav">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        <div className="code__content">
        <code>
          <span style={{ color: '#569cd6' }}> const </span>
          <span style={{ color: '#d4cc88' }}>repeatWorkHarder </span>
          = <span style={{color:'#fed502'}}>{`(`}</span>
          <span style={{color:'#9cdcfe'}}>isFail</span>
          <span style={{color:'#fed502'}}>{`)`}</span>
          <span style={{color:'#569cd6'}}> {`=>`}</span>
          <span style={{ color: '#c869c5' }}>{` {`}</span>
          <br />
          <span style={{ color: '#c586c0' }}>&nbsp;&nbsp;while </span>
          <span style={{color:'#569cd6'}}>{`(`}</span>
          <span style={{color:'#9cdcfe'}}>isFail</span>
          <span style={{color:'#569cd6'}}>{`) `}</span>
          <span style={{color:'#569cd6'}}>{`{ `}</span>
          <br />
          <span style={{ color: '#9cdcfe' }}>&nbsp;&nbsp;&nbsp;sad</span>. 
          <span style={{ color: '#d4cc88' }}>stop</span>
          <span style={{color:'#fed502'}}>{`(`}</span>
          <span style={{color:'#fed502'}}>{`)`}</span>
          <br />
          <span style={{ color: '#9cdcfe' }}>&nbsp;&nbsp;&nbsp;failure</span>. 
          <span style={{ color: '#d4cc88' }}>admit</span>
          <span style={{color:'#fed502'}}>{`(`}</span>
          <span style={{color:'#fed502'}}>{`)`}</span>
          <br />
          <span style={{ color: '#d4cc88' }}>&nbsp;&nbsp;&nbsp;repeatWorkHarder</span>
          <span style={{color:'#fed502'}}>{`(`}</span>
          <span style={{ color: '#569cd6' }}>true</span>
          <span style={{color:'#fed502'}}>{`)`}</span>
          <br />
          <span style={{color:'#569cd6'}}>&nbsp;&nbsp;{`}`}</span>
          <br />
          <span style={{ color: '#c869c5' }}>{`}`}</span>
        </code>
        </div>
     
      </div>

    </div>
  );
};
