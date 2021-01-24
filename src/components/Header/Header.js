import React, { Component } from 'react'
import classes from './Header.module.css'

class Header extends Component {

    month = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ]

    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday']

    render() {

        let city = null
        if(this.props.city === 524901){
            city = 'Москве'
        }else if(this.props.city === 536203){
            city = 'Санкт-Петербурге'
        }else if(this.props.city === 551487){
            city = 'Казани'
        }else if(this.props.city === 1496747){
            city = 'Новосибирске'
        }

        return (
            <div className={classes.Header}>
                <div className={classes.title}> {`Погода в ${city} сегодня:`} </div>
                <div>{this.props.day.dateDay} {this.month[this.props.day.dateMonth]}
                <p className={classes.subtitle}>{this.days[this.props.day.day]}</p>
                </div>
            </div>
        )
    }
}

export default Header