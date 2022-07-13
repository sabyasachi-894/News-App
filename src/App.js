import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <>
        {/* <BrowserRouter>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<News setProgress = {setProgress} key="home" pageSize={6} category="general" country="in"/>} />
          </Routes>
        </BrowserRouter> */}
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} key="home" pageSize={6} category="general" country="in" />}></Route>
            <Route exact path="/general" element={<News setProgress = {this.setProgress} key="general" pageSize={6} category="general" country="in" />}></Route>
            <Route exact path="/business" element={<News setProgress = {this.setProgress} key="business" pageSize={6} category="business" country="in" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} key="entertainment" pageSize={6} category="entertainment" country="in" />}></Route>
            <Route exact path="/health" element={<News setProgress = {this.setProgress} key="health" pageSize={6} category="health" country="in" />}></Route>
            <Route exact path="/science" element={<News setProgress = {this.setProgress} key="science" pageSize={6} category="science" country="in" />}></Route>
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} key="sports" pageSize={6} category="sports" country="in" />}></Route>
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} key="technology" pageSize={6} category="technology" country="in" />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <News setProgress = {setProgress} key="home" pageSize={6} category="general" country="in"/> */}
      </>
    )
  }
}

