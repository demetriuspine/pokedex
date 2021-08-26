import React, { Component } from 'react'

export default class NavBar extends Component {// atalho rcc SEMPRE CRIAR CLASSE COM LETRA MAIÚSCULA
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a>pokedex</a>
        </nav>
      </div>
    )
  }
}
