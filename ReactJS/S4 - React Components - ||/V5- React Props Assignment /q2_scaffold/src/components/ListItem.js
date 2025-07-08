import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  let {name,link,icon,bgColor}=props.srcItem
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
      {name}
    </div>
  );
};


export default ListItem;
