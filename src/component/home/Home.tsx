// Style

import "./style/home.scss";
export const Home = () => {


  return (
    <div className="home__container">
      <div className="biotext__container">
        <div className="textGr">
          <h1 className="typorgraphy">
            FULLSTACK DEVELOPER AND UI DESIGNER
          </h1>
          <h3 className="description">I like to craft solid and salable full-stack projects. My greatest ability is counting on starting from scratch.</h3>
          <a href="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/KhoaSoftwateEngineerCV.pdf?alt=media&token=cea3f77e-762c-41b4-a815-c901c369c38d" className="viewbutton" target="_blank">View Resume</a>
          {/* <button className="viewbutton">View Resume</button> */}
        </div>
        <div className="bioPro__container"></div>
      </div>
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
            = <span style={{ color: '#fed502' }}>{`(`}</span>
            <span style={{ color: '#9cdcfe' }}>isFail</span>
            <span style={{ color: '#fed502' }}>{`)`}</span>
            <span style={{ color: '#569cd6' }}> {`=>`}</span>
            <span style={{ color: '#c869c5' }}>{` {`}</span>
            <br />
            <span style={{ color: '#c586c0' }}>&nbsp;&nbsp;while </span>
            <span style={{ color: '#569cd6' }}>{`(`}</span>
            <span style={{ color: '#9cdcfe' }}>isFail</span>
            <span style={{ color: '#569cd6' }}>{`) `}</span>
            <span style={{ color: '#569cd6' }}>{`{ `}</span>
            <br />
            <span style={{ color: '#9cdcfe' }}>&nbsp;&nbsp;&nbsp;sad</span>.
            <span style={{ color: '#d4cc88' }}>stop</span>
            <span style={{ color: '#fed502' }}>{`(`}</span>
            <span style={{ color: '#fed502' }}>{`)`}</span>
            <br />
            <span style={{ color: '#9cdcfe' }}>&nbsp;&nbsp;&nbsp;failure</span>.
            <span style={{ color: '#d4cc88' }}>admit</span>
            <span style={{ color: '#fed502' }}>{`(`}</span>
            <span style={{ color: '#fed502' }}>{`)`}</span>
            <br />
            <span style={{ color: '#d4cc88' }}>&nbsp;&nbsp;&nbsp;repeatWorkHarder</span>
            <span style={{ color: '#fed502' }}>{`(`}</span>
            <span style={{ color: '#569cd6' }}>true</span>
            <span style={{ color: '#fed502' }}>{`)`}</span>
            <br />
            <span style={{ color: '#569cd6' }}>&nbsp;&nbsp;{`}`}</span>
            <br />
            <span style={{ color: '#c869c5' }}>{`}`}</span>
          </code>
        </div>

      </div>

    </div>
  );
};
