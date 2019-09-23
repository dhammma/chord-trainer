import React from 'react';
import PropTypes from 'prop-types';
import { GClef } from 'components/GClef/GClef';
import { FClef } from 'components/FClef/FClef';
import styles from './Row.module.scss';

export const Row = ({ clef }) => (
  <div className={styles.row}>
    <div className={styles.linesContainer}>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      {clef === 'G' && (
        <div className={styles.gClef}>
          <GClef />
        </div>
      )}
      {clef === 'F' && (
        <div className={styles.fClef}>
          <FClef />
        </div>
      )}
    </div>
  </div>
);

Row.propTypes = {
  clef: PropTypes.string
};

Row.defaultProps = {
  clef: undefined
};
