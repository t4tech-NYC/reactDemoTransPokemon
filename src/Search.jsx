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
        axios.get('https://pokeapi.co/api/v2/pokemon/200').then((response) => {
        this.setState({
            receivedPokemon: response
        })
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