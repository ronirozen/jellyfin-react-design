import { AnchorHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';

// Style
import styles from './button.module.scss';

interface LinkButtonProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href?: string;
  target?: string;
  className?: string;
  isShowFocus?: boolean;
  isAutoHideEnabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  HandleClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  target,
  children,
  className,
  isShowFocus,
  HandleClick,
  size = 'medium',
  isAutoHideEnabled,
  ...rest
}) => {
  return (
    <a
      href={href}
      target={target}
      onClick={HandleClick}
      {...rest}
      className={`${styles['emby-button']} ${styles[size]} ${className} ${
        isShowFocus ? styles['show-focus'] : ''
      }`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
