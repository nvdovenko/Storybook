import React from 'react';

import PropTypes from 'prop-types';

import './button.css';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Defines whether the button is the primary call to action (e.g., main button on the page).
   * If `true`, the button will have a primary style.
   */
  primary: PropTypes.bool,
  /**
   * Specifies the background color of the button. If not provided, the default button style will be used.
   */
  backgroundColor: PropTypes.string,
  /**
   * Specifies the size of the button.
   * Accepted values are: 'small', 'medium', and 'large'.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The text label displayed on the button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler function that will be triggered when the button is clicked.
   */
  onClick: PropTypes.func,
};
