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
        return (
            <div className={classes.Header}>
                <div className={classes.title}> Погода в Москве на сегодня: </div>
                <div>{this.props.day.dateDay} {this.month[this.props.day.dateMonth]}
                <p className={classes.subtitle}>{this.days[this.props.day.day]}</p>
                </div>
            </div>
        )
    }
}

export default Header