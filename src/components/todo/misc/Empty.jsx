import React from "react";
const emptyStyle = {
  margin: "0 auto",
  fontSize: "1.2rem",
  color: "ccc",
  width: "80%",
  textAlign: "center"

}

const Empty = () => (
  <p style={emptyStyle}>
    There are no tasks..!
  </p>
)

export default Empty;
