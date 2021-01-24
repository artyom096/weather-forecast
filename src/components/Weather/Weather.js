import React, { Component } from 'react'
import classes from './Weather.module.css'
import axios from 'axios'

class Weather extends Component {

    state = {
        response: null,
        weather: null,
    }

    async componentDidMount() {
        this.state.response = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: { 'id': this.props.city, 'units': 'metric', 'lang': 'ru', 'APPID': '27538c343947d4f8081f9b95e4248c36' }
        })
        console.log(this.state.response)
        this.setState({
            response: this.state.response.data.main.temp,
            weather: this.state.response.data.weather[0].main
        })
    }

   async componentDidUpdate(prevProps) {
        if (this.props.city !== prevProps.city) {
            this.state.response = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
                params: { 'id': this.props.city, 'units': 'metric', 'lang': 'ru', 'APPID': '27538c343947d4f8081f9b95e4248c36' }
            })
            console.log(this.state.response)
            this.setState({
                response: this.state.response.data.main.temp,
                weather: this.state.response.data.weather[0].main
            })
        }
      }

    selectWeather() {
        let img = null

        if (this.state.weather === 'Clouds') {
            img = 'clouds'
            return img
        } else if (this.state.weather === 'Sun') {
            img = 'sunny'
            return img
        } else if (this.state.weather === 'Snow') {
            img = 'snow'
            return img
        } else if (this.state.weather === 'Rain') {
            img = 'rain'
            return img
        } else if (this.state.weather === 'Mist' || this.state.weather === 'Fog') {
            img = 'clouds'
            return img
        }else if (this.state.weather === 'Drizzle') {
            img = 'rain'
            return img
        }
    }

    render() {
        return (
            <div className={classes.Weather}>
                <img src={`./../../img/${this.selectWeather()}.png`} />
                <span className={classes.temp}>{this.state.response}&deg;C</span>
            </div>
        )
    }
}

export default Weather