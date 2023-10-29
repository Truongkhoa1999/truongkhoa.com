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
      {/* <img
        className="profile__image"
        src="https://lh3.googleusercontent.com/pw/ADCreHdBagF0v4RBKgzNtpH6hPMeXrPkUZj8psq6Kg6oYEARfwx5pDAQFURi1PKVIV13KYmXvTBFhsumNkbQobFkzX4je4Kp7GvYLvNhhmyGYCvCPxiWEJzXOzuzDS7ASwevE1rJd4O2mEgTxmTDIQf7pIQYtQ=w1487-h1115-s-no?authuser=0"
        alt="profile picture"
        onContextMenu={disableRightClickBehavior}
      /> */}
      <h1 className="typorgraphy">
        TRUONG KHOA
      </h1>
      <h3 className="description">FullStack Developer - UI Desinger</h3>

    </div>
  );
};
