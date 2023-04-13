import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

// Style
import styles from './button.module.scss';

interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: string;
  isShowFocus?: boolean;
  iconClassName?: string;
  size?: 'small' | 'medium' | 'large';
}

export const IconButton: FC<IconButtonProps> = ({
  title,
  icon,
  onClick,
  disabled,
  className,
  isShowFocus,
  iconClassName,
  size = 'medium',
  ...rest
}) => {
  return (
    <button
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`${styles['paper-icon-button-light']} ${
        styles[size]
      } ${className} ${isShowFocus ? styles['show-focus'] : ''}`}
      {...rest}
    >
      <span
        className={`${styles['material-icons']} ${iconClassName} ${styles[icon]}`}
        aria-hidden="true"
      />
    </button>
  );
};
