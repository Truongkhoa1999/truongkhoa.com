// style
import "./style/homepage.scss";
import "../../utils/style/scrollbar.scss";

import { Header } from "../../component/header/Header";
// import { Footer } from "../../component/footer/Footer";
// interface NavProps {
//   about: boolean;
//   contact: boolean;
//   stacks: boolean;
//   resume: boolean;
//   portfolio: boolean;
// }

export const Homepage = () => {
  // const [elementsState, setElementsState] = useState<NavProps>({
  //   about: true,
  //   stacks: false,
  //   resume: false,
  //   contact: false,
  //   portfolio: false,
  // });
  // const handleElementsAreClicked = (elements: string) => {
  //   const updatedObject = { ...elementsState } as NavProps;

  //   for (const key in updatedObject) {
  //     if (key === elements) {
  //       updatedObject[key as keyof NavProps] = true;
  //     } else {
  //       updatedObject[key as keyof NavProps] = false;
  //     }
  //   }
  //   setElementsState(updatedObject);
  // };

  return (
    <div className="homepage__container">
      <Header />
      {/* <Navbar handleSwitchElements={handleElementsAreClicked} /> */}
      {/* <div className="content__container">
        {elementsState.about ? <About /> : ""}
        {elementsState.portfolio ? <Projects /> : ""}
        {elementsState.contact ? <Contact /> : ""}
        {elementsState.stacks ? <Stacks /> : ""}
      </div> */}
    </div>
  );
};
