import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar/>
      <br />
      <br />
      {/* <Hero slides={SliderData} /> */}
      <Home />
    </div>
  );
};

export default App;





// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // import About from './pages/About';
// // import Home from './pages/Home';
// // import Profile from './pages/Profile';
// // import ErrorPage from './pages/ErrorPage';
// // import StateTutorial from './pages/StateTutorial';
// // import ReducerTutorial from './pages/ReducerTutorial';
// // import RefTutorial from './pages/RefTutorial';
// // import ImperativeHandle from './pages/ImperativeHandle';
// // import EffectTutorial from './pages/EffectTutorial';
// import React from 'react';
// // import ReactDOM from 'react-dom';
// import Navbar from './components/Navbar';
// import Counter from './counter';

// class App extends React.Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       mount: true,
//       ignoreProp: 0,
//       seed: 40,
//       showErrorComponent: false
//     }

//     this.mountCounter = () => this.setState({
//       mount: true
//     })
    
//     this.unmountCounter = () => this.setState({
//       mount: false
//     })

//     this.ignoreProp = () => this.setState({
//       ignoreProp: Math.random()
//     })

//     this.seedGenerator = () => this.setState({
//       seed: Number.parseInt(Math.random() * 100)
//     })

//     this.toggleError = () => this.setState({
//       showErrorComponent: !this.state.showErrorComponent
//     })
//   }

//   render () {
//   return (
//     <div>
//       <Navbar />
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <button 
//         onClick={this.mountCounter} 
//         disabled={this.state.mount}
//         >Mount Counter
//       </button>
//       <br/>
//       <br/>
//       <button 
//         onClick={this.unmountCounter} 
//         disabled={!this.state.mount}
//         >Unmount Counter
//       </button>
//       <br/>
//       <br/>
//       <button 
//         onClick={this.ignoreProp}
//         >Ignore Prop
//       </button>
//       <br/>
//       <br/>
//       <button 
//         onClick={this.seedGenerator}
//         >Generate Seed
//       </button>
//       <br/>
//       <br/>
//       <button 
//         onClick={this.toggleError}
//         >Toggle Error
//       </button>
//       <br/>
//       <br/>
//       {this.state.mount ? 
//         <Counter 
//           ignoreProp={this.state.ignoreProp}
//           seed={this.state.seed}
//           showErrorComponent={this.state.showErrorComponent}
//           /> : 
//           null}
//     </div>
//   )
//   }
// }

// // ReactDOM.render(<App/>, document.getElementById('root'));
//     // <Router>
//     //   <nav>
//     //     <Link to="/">Home</Link>
//     //     <Link to="/about">About</Link>
//     //     <Link to="/profile">Profile</Link>
//     //   </nav>
//     //   <StateTutorial />
//     //   <Routes>
//     //     <Route path="/" element={<Home />} />
//     //     <Route path="/about" element={<About />} />
//     //     <Route path="/profile/:username" element={<Profile />} />
//     //     <Route path="*" element={<ErrorPage />} />
//     //   </Routes>
//     //   <div>Footer</div>
//     //   {/* <div className="App">
//     //     <Navbar />
//     //   </div> */}
//     // </Router>


// export default App;
