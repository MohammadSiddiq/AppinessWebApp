import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from '../../components/User/User';
import axios from '../../axios-users';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Users extends Component {
    componentDidMount () {
        this.props.onFetchUsers(this.props.token);
    }

    render () {
        let users = <Spinner />;
        if ( !this.props.loading ) {
            users = this.props.users.users.map( user => (
                <User
                    key={user.id}
                    name={user.name}
                    gender={user.gender} 
                    email={user.email}
                    phone={user.phoneNo}

                />
            ) )
        }
        return (
            <div>
                {users}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loading: state.user.loading,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: (token) => dispatch( actions.fetchUsers(token) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Users, axios ) );