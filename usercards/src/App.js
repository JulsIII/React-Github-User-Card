import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const CardStyled = styled.div`
    border: 1px solid ${(pr) => pr.theme.primaryColor};
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    font-size:1.25rem;
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
    margin-top:10px;
    margin-bottom:0px;
    display: flex;
    justify-content: center;
    font-family: 'Quantico', sans-serif;
}

h4{
    margin:8px;
    display: flex;
    justify-content: center;
    font-family: 'Quantico', sans-serif;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

`

const UserBlockStyledA = styled.div`
    border: 1px solid ${(pr) => pr.theme.primaryColor};
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 10px;
    padding: 10px;
    font-size:1.45rem;
    color: ${(pr) => pr.theme.primaryColor};
    background-color: ${(pr) => pr.theme.bgColorA};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
   
`

const UserBlockStyledB = styled.div`
    border: 1px solid ${(pr) => pr.theme.primaryColor};
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 10px;
    padding: 10px;
    font-size:1.35rem;
    color: ${(pr) => pr.theme.primaryColor};
    background-color: ${(pr) => pr.theme.bgColorA};
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
   
`


class App extends React.Component {
    state = {
        userData: {},
        followerData: []
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/JulsIII")
            .then((res)=>{
                console.log('asdf', res);
                this.setState({
                    userData: res.data
                })
            })
            .catch(err=>{
                console.log(err);
            });

            axios.get("https://api.github.com/users/JulsIII/followers")
            .then((res)=>{
                console.log('follower', res);
                this.setState({
                    followerData: res.data
                })
            })
            .catch(err=>{
                console.log(err);
            });
    }


    // componentDidUpdate(prevProps, prevState) {
    //         }


    render() {
        return(
        
        <div>
             <UserBlockStyledA>
                <h3>My Git</h3>
                
                {
                    <CardStyled>
                        <img src={this.state.userData.avatar_url}/>
                            <div>
                                <h4>{this.state.userData.login}</h4>
                                <h4>{this.state.userData.id}</h4>
                            </div>
                    </CardStyled>
                }
            </UserBlockStyledA>
            <UserBlockStyledB>
            <h4>Followers:</h4>
                {
                    this.state.followerData.map(user =>(
                        <CardStyled>
                            <img src={user.avatar_url}/>
                                <div>
                                    <h4>{user.login}</h4>
                                    <h4>{user.id}</h4>
                                </div>
                       
                        </CardStyled>
                    ))
                }
            </UserBlockStyledB>
        </div>);
    }
}

export default App;
