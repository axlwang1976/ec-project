import React from 'react';
import PropTypes from 'prop-types';
import './fade.css';

export default function Page({ children }) {
  return <section className="page">{children}</section>;
}

Page.propTypes = {
  children: PropTypes.object,
};
