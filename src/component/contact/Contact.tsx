
import { useSelector } from "react-redux";
import "./style/contact.scss";
import { RootState } from "../redux/store";
// import "../stacks/style/crtscreen.scss";

export const Contact = () => {
  const outputSlideDirection = useSelector((state: RootState) => state.slideAnimation.outputSlideDirection);
  return (
    <div className={outputSlideDirection === 'sr'? "contact__wrapper sr" : "contact__wrapper sl"} >
      <div className="contact__container">
        <div className="generalInfo__container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/truongkhoaportfolio.appspot.com/o/thumbnail%2Fprofileimg.svg?alt=media&token=cda1f377-8a82-4ade-89f6-d779b98a631f"
            alt="1"
          />
          <p>
            To request a quote or a meet up for a project coffee. Let’s talk
            within Finnish time (UTC +2).
          </p>
          <a href="https://github.com/Truongkhoa1999">GIT</a>
          <a href="https://www.linkedin.com/in/khoa-truong-010999/">Linkedin</a>
        </div>
        <form action="https://formspree.io/f/mrgwyjbr" method="POST">
          <input
            type="email"
            id="fname"
            name="email"
            placeholder="Your email address"
            required={true}
          />
          <input
            required={true}
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <input
            required={true}
            type="text"
            name="message"
            placeholder="Your message"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>

      {/* <div className="background"></div> */}
    </div>
  );
};
