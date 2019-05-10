import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: White;
  border-bottom: 5px solid black;
  margin-bottom: 20px;
  font-family: 'Indie Flower', cursive;
`;

const LinkVillage = styled(Link)`
  padding: 20px 50px;
  color: blue;
  text-decoration: none;
  font-size: 48px;
//   border-left: 2px solid black;

  &:hover {
    color: white;
    background-color: blue;
    transition: 0.3s all ease-in;
  }
`;

const LinkSmurfForm = styled(Link)`
  padding: 20px 50px;
  color: blue;
  text-decoration: none;
  font-size: 48px;
  border-left: 2px solid black;
  &:hover {
    color: white;
    background-color: blue;
    transition: 0.3s all ease-in;
  }
`;


const Header = props => {
    return (
      <DivWrapper>
        <LinkVillage to={props.urlLinks.home}>Smurf Village</LinkVillage>
        <LinkSmurfForm to={props.urlLinks.smurfForm}>Smurf Form</LinkSmurfForm>
      </DivWrapper>
    );
  };
  
  
  
  export default Header;
  