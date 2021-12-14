import { useState } from "react";
import Dropdown from "./Dropdown";

export default function NewsSection() {
  const [option, setOption] = useState<string>("Select yours news");

  const onSelectOption = (option: string) => {
    setOption(option);
  };
  return (
    <>
      <Dropdown onSelectOption={onSelectOption} optionSelected={option} />
    </>
  );
}
