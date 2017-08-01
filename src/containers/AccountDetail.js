import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAccount }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';


class AccountDetail extends Component {

  render() {
    if(!this.props.account) {
      return (
        <div>Your Account Info Is Loading:</div>
      )
    }

    return (
      <div className="col-md-6">
        <div className= "card">
          <div className= "card-block">
            <h4 className= "card-title">Account Information</h4>
            <h6 className= "card-subtitle mb-2 text-muted">{this.props.account.accountType} for {this.props.user.name}</h6>
            <div className= "card-text">
              <div>Balance: {this.props.account.balance}</div>
            </div>
            <Link className="btn btn-primary" to={`/users/${this.props.user._id}`} >Back to User Details</Link>
          </div>
        </div>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state.selectedAccount,
    user: state.selectedUser
  };
}

export default withRouter(connect(mapStateToProps)(AccountDetail));
