import React from 'react';
import axios from 'axios';
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

`


const UserBlockStyled = styled.div`
    border: 1px solid ${(pr) => pr.theme.primaryColor};
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 14px;
    padding: 14px;
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
            <div>
                
            </div>
             <UserBlockStyled>
                
                {
                    <CardStyled>
                        <img width="200" src={this.state.userData.avatar_url}/>
                            <div>
                                <h3>{this.state.userData.login}</h3>
                            </div>
                    </CardStyled>
                }
            </UserBlockStyled>
            <UserBlockStyled>
                {
                    this.state.followerData.map(user =>(
                        <CardStyled>
                            <img width="200" src={user.avatar_url}/>
                                <div>
                                    <h3>{user.login}</h3>
                                </div>
                       
                        </CardStyled>
                    ))
                }
            </UserBlockStyled>

            
        </div>);
    }
}

export default App;
