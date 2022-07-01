import React, { useState } from "react";
import SelectIconButton from "../../components/SelectIconButton";
import { IconType } from "react-icons";

const SelectIconTab = () => {
  const [SelectedIcon, setSelectedIcon] = useState<IconType | null>(null);
  return (
    <div>
      <SelectIconButton onSelect={setSelectedIcon} />
      <br />
      <br />
      <div>{SelectedIcon}</div>
    </div>
  );
};

export default SelectIconTab;
