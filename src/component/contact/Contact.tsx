import "./style/contact.scss";
export const Contact = () => {
  return (
    <div className="contact__wrapper">
      <h1>Contact</h1>
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
        />
        <input type="text" name="subject" placeholder="Subject" />
        <input type="text" name="message" placeholder="Your message" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
