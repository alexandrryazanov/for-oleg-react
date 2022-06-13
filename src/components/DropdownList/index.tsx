import React, { useState } from "react";

function DropdownItem(props: {
  item: any;
  opened: boolean;
  onClick: (item: any) => void;
}) {
  return (
    <div onClick={() => props.onClick(props.item)}>
      <i>{props.item.icon}</i>
      <span>{props.item.name}</span>
      {props.opened && props.item.component}
    </div>
  );
}

const DropdownList = ({ data }: { data: any[] }) => {
  const [state, setState] = useState<string[]>([]);
  const itemClickHandler = (item: any) => {
    if (state.includes(item.name)) {
      setState((prev) => prev.filter((name) => name !== item.name));
      return;
    }
    setState((prev) => [...prev, item.name]);
  };

  return (
    <>
      {data.map((item) => (
        <DropdownItem
          item={item}
          opened={state.includes(item.name)}
          onClick={itemClickHandler}
        />
      ))}
    </>
  );
};

export default DropdownList;
