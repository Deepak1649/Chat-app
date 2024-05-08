import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect( () => {      //async
    // setUserName(
    //   await JSON.parse(
    //     localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    //   ).username
    // );
    async function fetchUserName() {
      try {
        const data = await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        );
        setUserName(data.username);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    }

    fetchUserName();
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging testttttt.</h3>
      <ButtonContainer>
        <div className="regbut2">
          <Logout />
        </div>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;

//   .regbut1,
//   .regbut2 {
//     margin: 0 10px;
//   }
// `;

const ButtonContainer = styled.div`
  position: absolute; /* Position absolutely within the Container */
  top: 10px; /* Adjust this value to fit your desired vertical position */
  right: 10px; /* Adjust this value to fit your desired horizontal position */
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
`;
