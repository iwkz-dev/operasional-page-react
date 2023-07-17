import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import IncomeInfo from "../../services/IncomeInfo";

const ProgBar = ({value}) => {
  return <ProgressBar completed={value} />;
};
export default ProgBar