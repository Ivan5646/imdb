import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
 
class UserList extends Component {

    createListItems() {
        return this.props.users.map((user) => { // users is available as props because it has been passed to the Store through allReducers in main index.js
            return (
                <li 
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                > 
                    {user.first} {user.last} 
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
        users: state.users // https://youtu.be/wa1NaL_WWpI?t=2m1s. It equals to reducer-users.js object, it was imported in reducers/index.js as "users"
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList); // this is now a contanier