import { useState } from "react";
import Angular from "../../../../assets/angular.png";
import React from "../../../../assets/react.png";
import Vue from "../../../../assets/vue.png";

type Options = {
  name: string;
  icon: string;
};

const options: Options[] = [
  { name: "Angular", icon: Angular },
  { name: "Reactjs", icon: React },
  { name: "Vuejs", icon: Vue },
];

interface IProps {
  optionSelected: string;
  onSelectOption(option: string): void;
}
export default function Dropdown(props: IProps) {
  const { onSelectOption, optionSelected } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  const onSelect = (option: string) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  const isSelected = (option: string) => {
    return option === optionSelected ? "selected" : "";
  };
  return (
    <div className="dropdown-container">
      <div data-testid="select-dropdown" onClick={toggle} className="select">
        <p>{optionSelected}</p>
        <div className="arrow" />
      </div>
      {isOpen && (
        <div data-testid="dropdown" className="dropdown">
          {options.map((option, i) => (
            <div
              onClick={() => onSelect(option.name)}
              key={i}
              data-testid={`option-${option.name}`}
              className={`option ${isSelected(option.name)}`}
            >
              <img width={24} src={option.icon} alt={option.name} />
              <p>{option.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
