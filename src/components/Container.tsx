import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="max-w-7xl w-11/12 mx-auto">{children}</div>;
};

export default Container;
