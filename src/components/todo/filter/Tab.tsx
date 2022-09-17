import React from "react";
import "./filter.scss";

interface Props {
  activeTab: string;
  label: string;
  handleStatus: () => void;
}

const Tab = ({ activeTab, label, handleStatus }: Props) => {
  let className = "filter__items";

  activeTab === label ? (className += " filter__items_active") : className;

  return (
    <div
      role="button"
      tabIndex={0}
      className={className}
      data-name="All"
      onClick={handleStatus}
    >
      {label}
    </div>
  );
};

export default Tab;
