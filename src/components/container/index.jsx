import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles.index';

export default function Container({ children, className }) {
  const classes = useStyles();
  return <div className={`${classes.root} ${className}`}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};
