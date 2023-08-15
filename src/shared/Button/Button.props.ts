import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'transparent-btn' | 'primary-btn' | 'info-btn' | 'subscribe-btn' |  'ghost-btn'
    children: ReactNode
}