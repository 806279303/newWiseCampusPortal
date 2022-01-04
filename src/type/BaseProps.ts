import {CSSProperties, ReactNode} from "react";

export interface BaseProps {
  className?: string
  style?: CSSProperties | undefined
  children?: ReactNode | undefined
}