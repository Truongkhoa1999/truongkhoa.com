import { ReactNode } from "react";
import "./style/wrapper.scss";
type WrapperProps = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return <div className="wrapper">{children}</div>;
}
