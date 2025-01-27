import { MdGamepad, MdKey } from "react-icons/md";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { TextInput } from "./index";

import "../styles/Header.css";

export const Header = ({ name, handleName }) => {
  return (
    <div className="header">
      <div className="logo">
        <MdGamepad />
        <div>Games DB</div>
      </div>
      <TextInput
        fullWidth
        Icon={HiMiniMagnifyingGlass}
        placeholder="Type to search game"
        value={name}
        handleName={handleName}
        name="name"
      />
    </div>
  );
};
