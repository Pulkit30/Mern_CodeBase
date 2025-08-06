import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  const { name, link, icon, bgColor } = props.itemProp;
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor:bgColor
      }}
    >
      <img src={icon} alt={name} />
      <a href={link}></a>
    </div>
  );
};

export default ListItem;
