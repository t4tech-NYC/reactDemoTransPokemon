import React, { Component } from 'react';
import $ from 'jquery'

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            pokemonResults: {
                sprites: {
                    front_default: './logo.svg'
                } 
            }
        }

        this.onChange = this.onChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    onChange(e) {
        e.preventDefault()
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSearch() {
        $.ajax('http://pokeapi.salestock.net/api/v2/pokemon/' + this.state.inputValue).then((result) => {
            console.log(result)
            if(result.name !== 'sylveon'){
                window.alert('DID YOU MEAN 700?!')
            }
            this.setState({
             pokemonResults: result,   
            })
        })
    }
    componentDidMount(){
        console.log('my state is : ', this.state)
    }

    render(){
        return(
            <div>        
                <input type="text" placeholder="search for a pokemon!!!!" value={this.state.inputValue} onChange={this.onChange}></input>
                <button onClick={this.handleSearch}>search!</button>
                <h2>
                Your results: {this.state.pokemonResults.name}
                </h2>
                <img src={this.state.pokemonResults.sprites.front_default} alt="pokemon search result!" />
            </div>
        )
    }
}

export default Search