import CRTScreen from "../stacks/CRTcreen";
import "./style/contact.scss";
import '../stacks/style/crtscreen.scss'

export const Contact = () => {
  return (
    <div className="contact__wrapper">
      <CRTScreen />
      <h1 className="sitename">Contact</h1>
      <p>
        Welcome to my World. Dont hesitate getting in touch with me. I am happy
        to recive new project offers. Please hit my email via the form below!
        Good day to you.
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
