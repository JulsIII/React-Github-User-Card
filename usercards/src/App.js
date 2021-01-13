import React from 'react';
import axios from 'axios';
import User from "./components/User"
import styled from "styled-components";

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
    
    componentDidMountII() {
      
    }


    // componentDidUpdate(prevProps, prevState) {
        
   
    //         }


    render() {
        return(<div>
             <div className="userContainer">
                {
                  
                    <img width="200" src={this.state.userData.avatar_url}/>

                    
                    // (image=>(
                    //     <img width="200" key={image} src={image}/>
                    // ))
                }
                 <div className="followerContainer">asdf
                {
                    this.state.followerData.map(user =>(
                        <img width="200" src={user.avatar_url}/>
                    ))
                }
            </div>
            </div>
        </div>);
    }
}

export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
