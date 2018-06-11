import React from 'react'
import classNames from 'classnames'
import { InputWrapper } from './style'

export interface InputProps {
  /** ID of the input */
  id?: string
  /** Name of the input */
  name: string
  /** Type of input to display */
  type: string
  /** Custom classname to use */
  className?: string
  /** If true, adds invalid input class to component */
  isInvalid?: boolean
  /** Function passed to `onChange` prop */
  handleChange?: any
  /** Function called when
  /** Value of the input */
  value?: string | number
  /** [Number only] Minimum value allowed */
  min?: number
  /** [Number only] Maximum value allowed */
  max?: number
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** Icon to display in the input box */
  icon?: JSX.Element
  /** Highlight input value on focus */
  highlightOnFocus?: boolean
  /** Handle blur event */
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>, value?: string | number) => void
  /** Handle blur event */
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** Max length of string for text input */
  maxLength?: number
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** If true, use HTML5 required attribute */
  isHTML5Required?: boolean
  /** Add autofocus attribute to input */
  autoFocus?: boolean
}

export class Input extends React.PureComponent<InputProps> {
  constructor (props: InputProps) {
    super(props)

    this.onFocus = this.onFocus.bind(this)
  }

  onFocus (e: React.FocusEvent<HTMLInputElement>): void {
    const {
      highlightOnFocus
    } = this.props

    if (highlightOnFocus) {
      const input = e.target as HTMLInputElement
      input.select()
    }
  }

  classNames (): string {
    const {
      className,
      isInvalid
    } = this.props

    return classNames(
      className,
      {'is-invalid-input': isInvalid}
    )
  }

  input (): JSX.Element {
    const {
      id,
      name,
      type,
      handleChange,
      isDisabled,
      value,
      handleBlur,
      min,
      max,
      maxLength,
      placeholder,
      isHTML5Required,
      autoFocus,
      handleKeyDown
    } = this.props

    return (
      <input
        id={id || name}
        type={type}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur ? (e) => handleBlur(e, value) : undefined}
        onFocus={this.onFocus}
        className={this.classNames()}
        disabled={isDisabled}
        placeholder={placeholder}
        min={min}
        max={max}
        maxLength={maxLength}
        required={isHTML5Required}
        autoFocus={autoFocus}
      />
    )
  }

  public render (): JSX.Element {
    const {
      icon
    } = this.props

    if (icon) {
      return (
        <InputWrapper>
          {icon}
          {this.input()}
        </InputWrapper>
      )
    }

    return this.input()
  }
}
