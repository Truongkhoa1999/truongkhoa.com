import CRTScreen from "../stacks/CRTcreen";
import "./style/contact.scss";
import '../stacks/style/crtscreen.scss'

export const Contact = () => {
  return (
    <div className="contact__wrapper">
      <CRTScreen />
      <h1 className="sitename">Contact</h1>
      <p>
        Happy New Year, Hit me up with any matters.
      </p>
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
  );
};
