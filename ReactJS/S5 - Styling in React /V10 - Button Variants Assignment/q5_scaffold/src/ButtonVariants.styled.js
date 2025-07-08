import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
 background-color: ${(props) => (props.filled ? props.bg || "#000" : "#fff")};
  color: ${(props) => (props.filled ? props.color || "#fff" : "#000")};
  border: ${(props) => (props.filled ? "none" : "3px solid #000")}
  `
