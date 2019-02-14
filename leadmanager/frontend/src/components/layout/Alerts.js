import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

export class Alerts extends Component {

componentDidMount(){
    this.props.alert.show("it works");
}

    render() {
        return <Fragment/>;
    }
}

const mapStateToProps = state => ({
    
})

export default withAlert()(Alerts);