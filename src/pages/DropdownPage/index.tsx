import React from "react";
import DropdownList from "../../components/DropdownList";

const DropdownPage = () => {
  return (
    <div>
      <DropdownList
        data={[
          { name: "test1", icon: "icon1", component: <div>component1</div> },
          { name: "test2", icon: "icon2", component: <div>component2</div> },
          { name: "test3", icon: "icon3", component: <div>component3</div> },
        ]}
      />
    </div>
  );
};

export default DropdownPage;
