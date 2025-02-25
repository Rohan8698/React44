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



// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// const App = () => {
//     return (
//         <div className="app">
//             <Navbar/>
//             <Main></Main>
//             <div className="sidebar">
//                 <Sidebar1/>
//                 <Sidebar2/>
//             </div>
//             <Footer/>
//         </div>
//     );
// }

// export default App;





// import React, { Component } from 'react';
// import CBCPropsex1 from './propsexample/CBCPropsex1';

// class App extends Component {
//   render() {
//     return (
//       <div>App
//         <hr />
//         <CBCPropsex1
//           username="Rohan"
//           age={21}
//           desig={["developer", "tester"]}
//           userDetails={{city:"Hyd", area:"Hyderabad"}}
//           sendFun={function(){alert("Hi i m from parent component")}}
//         />
//       </div>
//     );
//   }
// }

// export default App;





// import React from 'react'
// import FBCPropex1 from './propsexample/FBCPropex1'

// const App = () => {
//   return (
//     <div>
//       <FBCPropex1
//         username="Tarun"
//         isLoggedIn ={false}
//         hobbies={["Roaming", "Watching movies", "travel", "studies"]}
//       />
//     </div>
//   )
// }

// export default App





// import React from 'react'
// import Myform from './components/Myform'
// const App = () => {
//   return (
//     <div>
//       <Myform></Myform>
//     </div>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// const ExUseEffect = () => {
//     const [count , setCount] = useState(0);

//     useEffect(()=>{
//         // setCount(1000);
//         document.title = "MRU";
//         setTimeout(()=>{
//             setCount(1000);
//         },4000)
//     })

//     return (
//         <div>ExUseEffect
//             <h1>{count}</h1>
//         </div>
//     )
// }

// export default ExUseEffect


// import React from 'react'
// import Myform from './components/Myform'

// const App = () => {
//   return (
//     <div><Myform></Myform></div>
//   )
// }

// export default App


// import React from 'react'
// import Navbar from './components/Navbar'
// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import ClassRoom from './pages/ClassRoom';
// import Assessment from './pages/Assessment';
// import Store from './pages/Store';
// import Calender from './pages/Calender';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import PageNotFound from './pages/PageNotFound';
// import Profile from './pages/Profile';
// import MyAccounts from './pages/MyAccounts';
// import MySettings from './pages/MySettings';


// const App = () => {
//   return (
    
//     <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classroom' element={<ClassRoom/>}/>
//             <Route path='/assessment' element={<Assessment/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>}>
//                 <Route path='myaccount' element={<MyAccounts/>}/>
//                 <Route path='mysettings' element={<MySettings/>}/>
//             </Route>
//             <Route path='*' element={<PageNotFound/>}/>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


// import Home from "./netflix/Home";

// export default function App() {
//   return <Home />;
// }







