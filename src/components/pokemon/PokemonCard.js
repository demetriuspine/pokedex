import React, { Component } from 'react';

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
  };

  componentDidMount() {
    const {name, url} = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2]
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
    this.setState(
      {
        name,
        imageUrl,
        pokemonIndex, 
      })
  }

  render() {

    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <h5 className="card-header">
            {this.state.pokemonIndex}
          </h5>
          <img alt={this.state.name} className="pokemon-img card-image-top rounded mx-auto nt-2" src={this.state.imageUrl}></img>
          <div className="card-body mx-auto">
            <h6 className="card-title">{this.state.name.toLowerCase()
              .split('-').map((letter) => letter.charAt(0).toUpperCase() + letter
              .substring(1)).join(' ')}</h6>
          </div>
        </div>
      </div>
    )
  }
}
