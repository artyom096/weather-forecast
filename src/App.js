import { Component } from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';

class App extends Component {

  state = {
    day: { day: new Date().getDay(), temp: '+24', dateDay: new Date().getDate(), dateMonth: new Date().getMonth() },
    city: 524901
  }

  selectCity = (event) => {
    this.setState({
      city: Number(event.target.value)
    })
}

  render() {
    return (
      <div className={classes.App}>
        <Header city={this.state.city} day={this.state.day}  />
        <Weather city={this.state.city} />
        <select className={classes.select} onChange={event => this.selectCity(event)}>
          <option value='524901' selected>Москва</option>
          <option value='536203'>Санкт-Петербург</option>
          <option value='551487'>Казань</option>
          <option value='1496747'>Новосибирск</option>
        </select>
      </div>
    );
  }
}

export default App;
