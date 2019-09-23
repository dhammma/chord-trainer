import React from 'react';
import { Row } from './Row';

// eslint-disable-next-line
export default {
  title: 'Row'
};

export const emptyRow = () => <Row />;

export const gClefRow = () => <Row clef="G" />;

export const fClefRow = () => <Row clef="F" />;
