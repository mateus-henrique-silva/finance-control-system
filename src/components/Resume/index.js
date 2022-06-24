import React from "react";
import * as C from "./style";
import ResumeItem from "../ResumeItem/index";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";
const Resume = () => {
  return (
    <div>
      <C.Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
      
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}/>
        
      <ResumeItem title="Total" Icon={FaDollarSign} />
      </C.Container>
    </div>
  );
};

export default Resume;
