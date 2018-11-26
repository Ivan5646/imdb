import React, {Component} from 'react';
import {connect} from 'react-redux';

class KittiesList extends Component { 

    render() {
        return (
            <p> static content </p>
        )
    }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
        kitties: state.kitties
    };
}

// function matchDispathToProps(dispatch){
//     return bindActionCreators({selectUser: selectUser}, dispatch)
// }

export default connect(mapStateToProps)(KittiesList); // this is now a contanier