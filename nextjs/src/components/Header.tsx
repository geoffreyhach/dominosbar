import * as React from "react";
import Logo from "./Logo";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="flex items-center justify-between gap-0 p-4">
      <h1 className="text-4xl font-bold font-sans ">Domino's bar</h1>
      <Logo width={100} color="white" />
    </div>
  );
};

export default Header;
