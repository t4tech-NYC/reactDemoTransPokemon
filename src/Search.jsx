import React from 'react'
import axios from 'axios'

export default class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            receivedPokemon: 'hello'
        }
    }

    componentWillMount(){
        axios.get('http://pokeapi.salestock.net/api/v2/pokemon/20').then((response) => {
        this.setState({
            receivedPokemon: response.data.name
        })
        console.log('hey here is the result : ', response.data.name)
    })
    }

    render() {
        return(
            <div>
                {this.state.receivedPokemon}
                <form>
                    <input type="text" placeholder="insert number here" />
                    <button>Submit </button>
                </form>
            </div>
        )
    }
}