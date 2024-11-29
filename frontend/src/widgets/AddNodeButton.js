import React from "react";

const AddNodeButton = ({ onClick }) => {
  return (
    <button
      onClick={() => {
        const nodeType = prompt(
          "Enter node type (leadSource, coldEmail, waitDelay):"
        );
        if (nodeType && ["leadSource", "coldEmail", "waitDelay"].includes(nodeType)) {
          onClick(nodeType);
        } else {
          alert("Invalid node type");
        }
      }}
    >
      Add Node
    </button>
  );
};

export default AddNodeButton;
