import { Component, useRef, useState } from 'react'
import classes from './App.module.css'
import React from 'react'
import { Card } from './components/Card/Card.jsx'
import { URL_TO_SERVER } from './URL.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      content: '',
      cardList: []
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.hendleOnClick = this.hendleOnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.fetchGet = this.fetchGet.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  fetchGet() {
    fetch(URL_TO_SERVER)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      this.setState({cardList: data})
    })

  }

  componentDidMount() {
      this.fetchGet();
  }

  handleOnChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }


  hendleOnClick() {
    fetch(URL_TO_SERVER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({id: 0, content: this.state.content})
    })
  }

  handleDelete(e) {
    fetch(`${URL_TO_SERVER}/${e.target.id}`, {
      method: 'DELETE'
    })
    this.fetchGet();
  }

  handleUpdate(e) {
    console.log(e.target)
    this.fetchGet();
  }

  render(){
    return (
      <>
      <div className={classes['notes']}>
        <h1>Notes</h1>
        <img src="src/png/obnovlenie_e2kmkwui5dde_32.png" alt="" className={classes['update']} onClick={this.handleUpdate}/>
      </div>
      <div className={classes['cards']}>
        {this.state.cardList.map((c, i) => (
          <div key={i}>
            <Card item={c} handler={this.handleDelete}/>
          </div>
        ))}
      </div>  
      <form className={classes["new-note"]}>
        <h3>New Note</h3>
        <input type="text" name='content' className={classes['input']} defaultValue={this.state.content} onChange={this.handleOnChange}/>
        <button className={classes['btn']} onClick={this.hendleOnClick}>
          <img src="src/png/right-arrow_156324.png" alt="" className={classes['btn-img']}/>
        </button>
      </form>
      </>
    )
  }
}

export default App
