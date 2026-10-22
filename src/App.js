import { Component } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'

import Skills from './components/Skills'

import About from './components/About'

import Project from './components/Project'

import Contact from './components/Contact'

import Context from './Context/ContextComponents'
import './App.css';

class App extends Component {
  state = { showMood: false }

  btnClickToChangeMood = () => {
    this.setState(prevState => ({ showMood: !prevState.showMood }))
  }

  render() {
    const { showMood } = this.state
    return (


      <Context.Provider value={{ showMood, btnClickToChangeMood: this.btnClickToChangeMood }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/project" component={Project} />
            <Route exact path='/contact' component={Contact} />
          </Switch>

        </BrowserRouter>
      </Context.Provider>

    )
  }
}

export default App;
