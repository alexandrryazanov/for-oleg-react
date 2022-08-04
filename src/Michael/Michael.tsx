import React from "react";
import { Tab, Tabs } from "../components/Tabs";
import UsersTab from "./pages/Users";
import { NavLink } from "react-router-dom";
import PopUpСookies from "./components/PopUpСookies";
import AvatarGroup from "./components/AvatarGroup";
import Avatar from "./components/Avatar";

const Michael = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <Tabs>
        <Tab title={"table-users"} component={<UsersTab />} />
        <Tab
          title={"avatar-group"}
          component={
            <AvatarGroup total={2}>
              <Avatar
                alt={"img"}
                imageUrl={
                  "https://yablyk.com/wp-content/uploads/2018/04/shoten-links.jpg"
                }
              />
              <Avatar
                alt={"img"}
                imageUrl={
                  "https://yablyk.com/wp-content/uploads/2018/04/shoten-links.jpg"
                }
              />
              <Avatar
                alt={"img"}
                imageUrl={
                  "https://yablyk.com/wp-content/uploads/2018/04/shoten-links.jpg"
                }
              />
              <Avatar
                alt={"img"}
                imageUrl={
                  "https://yablyk.com/wp-content/uploads/2018/04/shoten-links.jpg"
                }
              />
              <Avatar
                alt={"img"}
                imageUrl={
                  "https://yablyk.com/wp-content/uploads/2018/04/shoten-links.jpg"
                }
              />
            </AvatarGroup>
          }
        />
        <Tab title={"test2"} component={<div>test2</div>} />
      </Tabs>
      <PopUpСookies />
    </div>
  );
};

export default Michael;
