import React from 'react'
import axios from 'axios'

export default class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    axios.get('https://pokeapi.co/api/v2/pokemon/200', (response) => {
        this.setState({
            response: response
        })
    });

    render() {
        return(
            <div>
                <form>
                    <input type="text" placeholder="insert number here" />
                    <button>Submit </button>
                </form>
            </div>
        )
    }
}