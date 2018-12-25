import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

class Favourites extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <h3>Favourites</h3>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        favourites: state.favourites
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Favourites);