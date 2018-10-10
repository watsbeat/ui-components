import React from 'react'
import classNames from 'classnames'
import {
  DropdownMenu,
  IDropdownMenuSectionProps,
  IDropdownMenuToggleComponentProps
} from '../../Popovers'
import {
  StyledComment,
  CommentActionMenuToggleButton
} from './style'
import { FontAwesomeIcon } from '../../Icons'
import { FormattedText } from '../../Typographies'

export interface ICommentProps {
  /** the name of the person who posted the comment */
  commentHeaderText: string,
  /** Displays the comment in a focused state */
  focused: boolean,
  /** The component to render to the left of the comment box */
  avatarComponent: React.Component,
  /** A pill to be displayed right before the date label of the comment (use a span to persist the inline diplay behaviour) */
  pillComponent?: React.Component,
  /** Additional text to display in the array header (preferable a span HTML element) */
  headerComponent?: React.Component,
  /** Use DateText component from the list of alreay defined components (a string should work too) */
  dateComponent: React.Component,
  /** Comment text string */
  commentBodyText: string,
  /** an array of sectionProps from the DropdownMenu to render the submenu sections */
  actions?: IDropdownMenuSectionProps[]
}

export class Comment extends React.Component<ICommentProps> {
  public render (): JSX.Element {
    const {
      focused
    } = this.props

    return (
      <StyledComment>
        {this.avatar}
        <div className={classNames(
          'comment-container',
          { focused }
        )}>
          {this.commentHeader}
          {this.commentContent}
        </div>
      </StyledComment>
    )
  }

  private get avatar (): JSX.Element {
    const {
      avatarComponent
    } = this.props

    return (
      <div className='comment-badge-container'>
        {avatarComponent}
      </div>
    )
  }

  private get commentActions (): JSX.Element | null {
    const {
      actions,
      headerComponent
    } = this.props

    if (headerComponent || !actions) {
      return null
    }

    return (
      <DropdownMenu
        toggleComponent={this.dropdownMenuToggleComponent}
        sections={actions}
      />
    )
  }
  
  private dropdownMenuToggleComponent = (props: IDropdownMenuToggleComponentProps) => {
    return (
      <CommentActionMenuToggleButton
        onClick={props.toggleMenu}
        innerRef={props.toggleComponentRef}
        {...props.ariaProps}
      >
        <FontAwesomeIcon type='ellipsis-v' />
      </CommentActionMenuToggleButton>
    )
  }

  private get commentDate (): JSX.Element {
    const {
      dateComponent,
      pillComponent
    } = this.props

    return (
      <div className='comment-header-date'>
        {pillComponent}
        {dateComponent}
      </div>
    )
  }

  private get commentTitle (): JSX.Element {
    const {
      commentHeaderText,
      headerComponent
    } = this.props

    return (
      <div className='comment-header'>
        <span className='comment-header-person-name'>
          {commentHeaderText}
        </span>
        {headerComponent}
      </div>
    )
  }

  private get commentHeader (): JSX.Element {
    const {
      headerComponent
    } = this.props

    return (
      <div className={classNames(
        'comment-header-container',
        { 'with-status-update': !(!headerComponent) }
      )}>
        {this.commentTitle}

        {this.commentDate}

        {this.commentActions}
      </div>
    )
  }

  private get commentContent (): JSX.Element {
    const {
      commentBodyText
    } = this.props

    return (
      <div className='comment-content'>
        <FormattedText
          text={commentBodyText}
        />
      </div>
    )
  }
}
