export const Home = () => {
    const disableRightClickBehavior = (
        event: React.MouseEvent<HTMLImageElement>
      ) => {
        event.preventDefault();
      };
  return (
    <img
      className="profile__image"
      src="https://icapps.com/uploads/site/what-is-the-right-background-for-a-react-native-developer/_1200x630_crop_center-center_82_none/React_Native_image.jpg?mtime=1594715542"
      alt="profile picture"
      onContextMenu={disableRightClickBehavior}
    />
  );
};
