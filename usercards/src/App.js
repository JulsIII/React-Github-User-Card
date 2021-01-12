import React from 'react';
import axios from 'axios';
import User from "./components/User"
import styled from "styled-components";

class App extends React.Component {
    state = {
        avatarImgs: [],
        userName: ""
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/JulsIII")
            .then((res)=>{
                console.log(res);
                this.setState({
                  avatarImgs: res.data
                })
            })
            .catch(err=>{
                console.log(err);
            });
    }
    
    componentDidUpdate(prevProps, prevState) {
        
              // this.setState({
              //   avatarImgs: res.data.message
              // })
              console.log("App: Component Did Update");
              console.log("old props ", prevProps);
              console.log("new props ", this.props);

              console.log("old state ", prevState);
              console.log("new state:", this.state);
            }

    // handleChange = e => {
    //     this.setState({
    //         dogBreed: e.target.value
    //     });
    // }

    // handleClick = e => {
    //     e.preventDefault();
    //     axios.get(`https://dog.ceo/api/breed/${this.state.dogBreed}/images`)
    //         .then(res=>{
    //             this.setState({
    //               avatarImgs: res.data.message
    //             });
    //         })
    // }

    render() {
        return(<div>
             <div className="userContainer">
                {
                    this.state.avatarImgs.map(image=>(
                        <img width="200" key={image} src={image}/>
                    ))
                }
            </div>
            <div>{this.state.userName}</div>
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
