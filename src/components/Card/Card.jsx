import React, { Component } from 'react'
import classes from './card.module.css'
// import { ICard } from '../../interface';

// interface propsICard {
//   item: ICard
// }

export class Card extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={classes['card']}>
                <p>{this.props.item.content}</p>
                <div id={this.props.item.id} className={classes['btn']} onClick={this.props.handler}>X</div>
            </div>
        )
    }
}