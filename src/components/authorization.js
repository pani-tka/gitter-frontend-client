import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeToken, verifyTokenSuccess, verifyTokenFailure, fetchUser } from '../actions';
import styles from './authorization.module.scss';

class Authorization extends Component {
  onChange = event => {
    const token = event.target.value;

    this.props.changeToken(token);
  }

  onClick = () => {
    const { token } = this.props;

    const regexp = /(([0-9])|([a-f])){40}/;

    if (regexp.test(token)) {
      this.props.verifyTokenSuccess();
      // request data
      this.props.fetchUser();
    } else {
      this.props.verifyTokenFailure();
    }
  }

  render() {
    const { token, tokenVerificationError, loading } = this.props;

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>
            Welcome to Gitter Frontend Client
          </h1>
        </header>
        <div className={styles.tokenEditor}>
          <input
            className={styles.tokenInput}
            type="password"
            placeholder="Your token"
            value={token}
            onChange={this.onChange}
          />
          {!!tokenVerificationError &&
            <div className={styles.error}>
              {tokenVerificationError}
            </div>
          }
        </div>
        <div className={styles.controls}>
          <button
            disabled={loading}
            className={styles.applyTokenButton}
            onClick={this.onClick}
          >
            {loading ? 'Loading...' : 'Continue'}
          </button>
        </div>
      </div>
    );
  }
}

// @question: what is mapStateToProps?
const mapStateToProps = (state) => {
  // @question: what is state here? what is props here?
  const props = {
    token: state.tokenField,
    tokenVerificationError: state.tokenVerificationError,
  }

  return props;
};

// @question: what is mapDispatchToProps?
const mapDispatchToProps = {
  changeToken,
  verifyTokenSuccess,
  verifyTokenFailure,
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
