import React from 'react'
import { connect } from 'react-redux'
import { turnOn, turnOff } from '../modules/BoxModule'
import Button from '@material-ui/core/Button';

import SampleView from '../views/SampleView.jsx'

class SampleContainer extends React.Component {

    handleTurnOn = () => {
        this.props.turnOn()
    }

    handleTurnOff = () => {
        this.props.turnOff()
    }

    render() {
        console.log(this.props, 'checking inside container')
        return (
            <div id="sample-container">
                <center>
                    <h3>Greetings from the App!</h3>
                </center>
                <center>
                    <Button onClick={this.handleTurnOn}
                            className="btnSpacing"
                            variant="contained"
                            color="primary">Turn On</Button>
                    <Button onClick={this.handleTurnOff}
                            className="btnSpacing"
                            variant="contained"
                            color="primary">Turn Off</Button>
                </center>
                <SampleView visibility={this.props.visibility} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        visibility: state.box.visibility
    }
}


// mapStateToProps, mapDispatchToProps
export default connect(
    mapStateToProps,
    { turnOn, turnOff }
)(SampleContainer)
