import { Component } from 'react';
import classes from './App.module.css';
import Days from './components/Days/Weather';
import Header from './components/Header/Header';

class App extends Component {

  state = {
    day: { day: new Date().getDay(), temp: '+24', dateDay: new Date().getDate(), dateMonth: new Date().getMonth() }
  }

  render() {
    return (
      <div className={classes.App}>
        <Header day={this.state.day}  />
        <Days />
      </div>
    );
  }
}

export default App;
