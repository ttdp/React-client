import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: [],
        apiResponse: ""
    }

    callAPI() {
        console.log("Here")
        fetch("http://localhost:3001/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err)
    }

    handleSubmit = (character) => {
        this.setState({characters: [... this.state.characters, character]})
    }

    removeCharacter = (index) => {
        const {characters} = this.state
    
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    componentDidMount() {
        this.callAPI()
    }
    
    render() {
        const {characters} = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App