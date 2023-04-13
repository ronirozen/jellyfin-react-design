import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

// Style
import styles from './button.module.scss';

const iconPosition = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: string;
  isShowFocus?: boolean;
  iconClassName?: string;
  size?: 'small' | 'medium' | 'large';
  iconPos?: typeof iconPosition[keyof typeof iconPosition];
}

export const Button: FC<ButtonProps> = ({
  icon,
  title,
  iconPos,
  onClick,
  className,
  isShowFocus,
  iconClassName,
  size = 'medium',
  ...rest
}) => {
  const iconClass = `${styles['material-icons']} ${styles[icon]} ${iconClassName}`;

  return (
    <button
      onClick={onClick}
      className={`${styles['emby-button']} ${styles[size]} ${className} ${
        isShowFocus ? styles['show-focus'] : ''
      }`}
      {...rest}
    >
      {icon && iconPos === iconPosition.LEFT && (
        <span className={iconClass} aria-hidden="true" />
      )}
      <span>{title}</span>
      {icon && iconPos === iconPosition.RIGHT && (
        <span className={iconClass} aria-hidden="true" />
      )}
    </button>
  );
};
