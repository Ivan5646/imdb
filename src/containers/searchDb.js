import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { fetchDB } from '../actions/popularActions'
import history from '../history';
import config from  '../configs/config'

class SearchDb extends React.Component {

    constructor(props){
        super(props);
        this.searchDb = this.searchDb.bind(this);
    }

    searchDb(event) {
        this.props.fetchDB(event.target.value);
        if (document.location.href !== config.dev.host) {
            history.push('/');
        }
    }

    render() {
        return (
            <input placeholder="search..." type="text" onChange={this.searchDb} className={"search-input"}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchResult: state.searchResult
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchDB: fetchDB}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchDb);