import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { fetchDB } from '../actions/popularActions'

class SearchDb extends React.Component {

    constructor(props){
        super(props);
        this.searchDb = this.searchDb.bind(this);
    }

    searchDb(event) {
        console.log("searchDb", event.target.value);
        this.props.fetchDB(event.target.value);
    }

    render() {
        return (
            <input placeholder="search database" type="text" onChange={this.searchDb}/>
        )
    }
}

function mapStateToProps(state) {
    console.log("searchDb state", state);
    return {
        searchResult: state.searchResult
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchDB: fetchDB}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchDb);