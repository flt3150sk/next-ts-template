import React from 'react';
import './index.css';

type Props = {
  label: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({
  label,
  primary = false,
  size = 'medium',
  backgroundColor,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
