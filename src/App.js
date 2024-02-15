import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import AboutJobItem from './components/AboutJobItem'
import AllJobs from './components/AllJobs'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AboutJobItem} />
        <Route exact path="/" component={AllJobs} />
      </Switch>
    )
  }
}

export default App
