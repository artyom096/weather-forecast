import React, { Component } from 'react'
import classes from './Weather.module.css'
import axios from 'axios'

class Weather extends Component {

    state = {
        response: null,
        weather: null
    }

    async componentDidMount() {
        this.state.response = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: { 'id': 524901, 'units': 'metric', 'lang': 'ru', 'APPID': '27538c343947d4f8081f9b95e4248c36' }
        })
        console.log(this.state.response)
        this.setState({
            response: this.state.response.data.main.temp,
            weather: this.state.response.data.weather[0].main
        })
    }

    render() {
        let img = null

        if (this.state.weather === 'Clouds') {
            img = 'clouds'
        } else if (this.state.weather === 'Sun') {
            img = 'sunny'
        } else if (this.state.weather === 'Snow') {
            img = 'snow'
        } else if (this.state.weather === 'Rain') {
            img = 'rain'
        }

        return (
            <div className={classes.Weather}>
                <img src={`./../../img/${img}.png`} />
                <span className={classes.temp}>{this.state.response}&deg;C</span>
            </div>
        )
    }
}

export default Weather