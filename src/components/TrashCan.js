import React from "react";
import { FaTrash } from "react-icons/fa";

const TrashCan = ({ onRemove }) => {
  return <FaTrash onClick={onRemove} />;
};

export default TrashCan;
