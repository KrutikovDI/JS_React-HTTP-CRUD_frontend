import React, { Component } from 'react'
import classes from './card.module.css'
import { ICard } from '../../interface';

interface propsICard {
  item: ICard
}

export class Card extends Component<propsICard> {
    constructor(props: propsICard){
        super(props)
    }

    render(){
        return (
            <div className={classes['card']}>
                <p>{this.props.item.content}</p>
                <div className={classes['btn']}>
                    <p>X</p>
                </div>
            </div>
        )
    }
}