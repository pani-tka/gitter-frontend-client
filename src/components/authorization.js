import React from 'react';
import styles from './authorization.module.scss';

const Authorization = ({ token, tokenVerificationError, changeToken, applyToken }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1>
        Welcome
      </h1>
    </header>
    <div className={styles.tokenEditor}>
      <input
        className={styles.tokenInput}
        type="password"
        placeholder="Your token"
        value={token}
        onChange={changeToken}
      />
      {!!tokenVerificationError &&
        <div className={styles.error}>
          {tokenVerificationError}
        </div>
      }
    </div>
    <div className={styles.controls}>
      <button
        className={styles.applyTokenButton}
        onClick={applyToken}
      >
        Continue
      </button>
    </div>
  </div>
);

export default Authorization;
