import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
    variant: 'row-space-between' | 'row-center' | 'row-start' | 'row-end' | 'column-center' | 'column-start' | 'column-end' | 'column-space-between'
}