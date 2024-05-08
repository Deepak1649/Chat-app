import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { redirectRoute } from "../utils/APIRoutes";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';


export default function Redirect() {
  const navigate = useNavigate();
  const handleClick = async () => {
      navigate("/");
    // }
  };
  return (
    <Button onClick={handleClick}>
      <CompareArrowsIcon />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
