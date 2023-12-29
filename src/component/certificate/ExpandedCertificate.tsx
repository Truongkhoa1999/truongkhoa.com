import "./style/expandedcertifcate.scss";

interface ExpandedCertiProps {
  setIsExpandedCertificate: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ExpandedCertificate: React.FC<ExpandedCertiProps> = ({
  setIsExpandedCertificate,
}) => {
  const handleCloseNoti = () => {
    setIsExpandedCertificate(false);
  };
  return (
    <div className="expanded__container">
      <div className="button__container">
        <button className="circle" onClick={handleCloseNoti}>
          X
        </button>
      </div>
      <div className="content__container">
        <div>
          <p>Higher Education</p>
          <a href="">
            Bachelor Business Information Technology at Hagga-helia GPA-4.0
          </a>
          <br />
          <p>Trainee & Intership</p>
          <a href="">Integrify fs-14 Fullstack Overall 4.0</a>
          <a>Dzistar Wordpress Designer Passed</a>
          <a>Mehtaheino 3D Industry Fit To Project Passed</a>
          <br />
          <p>Self Studies</p>
          <a href="https://www.freecodecamp.org/certification/Khoa99/responsive-web-design">
            Freecodecamp: Responsive Web Design
          </a>
          <a href="https://www.freecodecamp.org/certification/Khoa99/javascript-algorithms-and-data-structures">
          Freecodecamp: Javascript Algorithms and Data Structures
          </a>
          <a href="https://www.freecodecamp.org/certification/Khoa99/back-end-development-and-apis">
          Freecodecamp: Back End Development and APIs
          </a>
          <a href="https://www.hackerrank.com/certificates/7254e8c2606b">
            Hackerank: JavaScript (Basic) 
          </a>
        </div>
      </div>
    </div>
  );
};
