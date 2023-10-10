// Style
import "./style/home.scss";
export const Home = () => {
  const disableRightClickBehavior = (
    event: React.MouseEvent<HTMLImageElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="home__container">
      {" "}
      <img
        className="profile__image"
        src="https://lh3.googleusercontent.com/pw/ADCreHdBagF0v4RBKgzNtpH6hPMeXrPkUZj8psq6Kg6oYEARfwx5pDAQFURi1PKVIV13KYmXvTBFhsumNkbQobFkzX4je4Kp7GvYLvNhhmyGYCvCPxiWEJzXOzuzDS7ASwevE1rJd4O2mEgTxmTDIQf7pIQYtQ=w1487-h1115-s-no?authuser=0"
        alt="profile picture"
        onContextMenu={disableRightClickBehavior}
      />
      {/* <iframe
        // width="500"
        // height="300"
        src="https://www.youtube.com/embed/gk1g53AZVds"
        title="YouTube video player"
        // frameBorder="0"
        allowFullScreen
        className="video"
        allow="autoplay; encrypted-media"
      /> */}
    </div>
  );
};
