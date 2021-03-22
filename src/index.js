import React from 'react'
import ReactDom from 'react-dom'
import SeasonDisplay from './components/SeasonDisplay'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: null }
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
                console.log(position.coords.latitude)
            },
            (err) => {
                console.log(err)
                this.setState({ errorMessage: err.message })
            }
        )
    }
    render() {
        if (this.state.lat && !this.state.errorMessage) {
            return (
                <SeasonDisplay lat={this.state.lat} />

            )
        }
        if (!this.state.lat && this.state.errorMessage) {
            return (
                <div>Error Meassage {this.state.errorMessage}</div>
            )
        }

        return (
            <div>Loading</div>
        )

    }
};

ReactDom.render(<App />, document.querySelector("#root"))