import React, { Component } from 'react'

export default class NavBar extends Component {// atalho rcc SEMPRE CRIAR CLASSE COM LETRA MAIÚSCULA
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">pokedex</a>
        </nav>
      </div>
    )
  }
}
