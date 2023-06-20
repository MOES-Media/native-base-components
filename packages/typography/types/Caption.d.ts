import { PropsWithChildren } from 'react';

interface CaptionProps {
  size?: 'sm' | 'lg';
}

declare const Caption = React.FC<PropsWithChildren<CaptionProps>>;

export { CaptionProps };
export default Caption;
