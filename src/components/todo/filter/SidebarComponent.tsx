import React, { useContext, useState } from "react";
import { filterTodo } from "../../action/actions";
import { TodoContext } from "../../context/TodoContext";
import "./filter.scss";
import Tab from "./Tab";

interface Props {
  toggleMenu: boolean;
  setToggeMenu: (val: boolean) => void;
}
const SidebarComponent = ({ toggleMenu, setToggeMenu }: Props) => {
  console.log(toggleMenu);
  const { dispatch } = useContext(TodoContext);
  const [activeTab, setActiveTab] = useState("All");

  const handleStatus = (ft: string) => {
    setActiveTab(ft);
    setToggeMenu(!toggleMenu);
    dispatch(filterTodo(ft));
  };

  const filters = ["All", "Pending", "Complete"];

  return (
    <div
      className={
        toggleMenu
          ? "filter__container"
          : "filter__container filter__container_show"
      }
    >
      {filters.map((filter) => (
        <Tab
          activeTab={activeTab}
          key={filter}
          label={filter}
          handleStatus={() => handleStatus(filter)}
        />
      ))}
    </div>
  );
};

export default SidebarComponent;
