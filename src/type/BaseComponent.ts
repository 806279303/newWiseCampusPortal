import {Component} from "react";
import {BaseProps} from "./BaseProps";
import classnames, {Argument} from "classnames"
import {paddingPrefix} from "../utils/classNameUtils";

export abstract class BaseComponent<T = {}, S = {}, SS = any> extends Component<T & BaseProps, S, SS> {
  protected readonly CNP: string

  constructor(props: T & BaseProps);
  constructor(props: T & BaseProps, context: any);

  constructor(props: (T & BaseProps) | Readonly<T & BaseProps>, context?: any) {
    super(props, context);
    this.CNP = this.newClassNamePrefix()
  }

  protected newClassNamePrefix(): string{
    let words = this.getClassNamePrefix().split(/(?=[A-Z])/);
    words = words.map(word => word.toLocaleLowerCase())
    let realPrefix = words.join("-");
    return realPrefix.startsWith("lg-") ? realPrefix : `lg-${realPrefix}`;
  }


  protected abstract getClassNamePrefix(): string;

  protected rootClass(...args: Argument[]): string {
    return classnames(`${this.CNP}-root`,this.class(args),
      {
        [`${this.props.className}`]: !!this.props.className
      })
  }

  protected class(...args: Argument[]): string {
    return classnames(paddingPrefix(this.CNP, args))
  }

  protected classnames(...args: Argument[]): string {
    return classnames(args)
  }

  componentDidMount() {
    this.props.onRef && this.props.onRef(this)
  }
}