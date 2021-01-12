import React from "react";
import styled from "styled-components";


const CardStyled = styled.div`
    border: 1px solid ${(pr) => pr.theme.primaryColor};
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin: 10px;
    padding: 1px;
    color: ${(pr) => pr.theme.secondaryColor};
    background-color: ${(pr) => pr.theme.bgColorB};
    width: 20% ;
    display: flex;
    flex-direction: column;
    justify-content: left;
    flex-wrap: nowrap;

h3{
    margin-top:15px;
    margin-bottom:5px;
    display: flex;
    justify-content: left;
    font-family: 'Quantico', sans-serif;
}

h4{
    margin:8px;
    display: flex;
    justify-content: left;
    font-family: 'Quantico', sans-serif;
}

h5{
    margin:8px;
    display: flex;
    justify-content: left;
    font-family: 'Quantico', sans-serif;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

@media ${(pr) => pr.theme.breakpointA} {
    width: 25%;
  }

  @media ${(pr) => pr.theme.breakpointB} {
    width: initial;
  }
`

export default function User(props) {
  
    const {user} = props;
  
    return (
          <CardStyled>
            <img src={user.image} alt='Profile'></img>
            <h3>Name: {user.name}</h3>
            <h4>Species: {user.species}</h4>
            <h4>Gender: {user.gender}</h4>
            <h4>Status: {user.status}</h4>
            <h4>Origin:</h4><h5>{user.origin.name}</h5>
            <h4>Location:</h4><h5>{user.location.name}</h5>
          </CardStyled>
    );
  }
  