import React from 'react'
import classNames from 'classnames'
import {
  isNil,
  isEmpty
} from 'lodash'
import { FontAwesomeIcon } from '../../Icons'
import {
  withSkeleton,
  ISkeletonComponentProps
} from '../../Skeletons'
const style = require('./Avatar.scss')

export interface IAvatarProps {
  /** Size of the avatar  */
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  /** Initials to display if no valid `imageUrl` or `imageData` is passed to Avatar */
  initials?: string
  /** Text for the black, transparent overlay (both Label and Icon have to be present for the overlay to render) */
  hoverLabel?: string
  /** Label for the black, transparent overlay (both Label and Icon have to be present for the overlay to render) */
  hoverIcon?: string
  /** Handle the component click (If the function is not present, cursor and border effects will not appear on hover) */
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  /** Image URL */
  imageUrl?: string
  /** Image blob data */
  imageData?: string
  /** Display a coloured status dot on the avatar */
  statusDot?: 'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight'
  /** Display an icon component on the avatar */
  statusIcon?: JSX.Element

  className?: string
}

export interface IAvatarState {
  showInitials: boolean
}

export type IAvatarSkeletonProps = IAvatarProps & ISkeletonComponentProps

class AvatarComponent extends React.Component<IAvatarProps> {

  get hoverDom (): JSX.Element | null {
    const {
      size,
      hoverLabel,
      hoverIcon
    } = this.props

    if (isNil(hoverLabel) && isNil(hoverIcon)) {
      return null
    }

    return (
      <div className={classNames('avatar-hover', `avatar-${size}`)}>
        <FontAwesomeIcon type='camera' />
        <span className='avatar-hover-label'>{hoverLabel}</span>
      </div>
    )
  }

  get picture (): JSX.Element {
    const {
      imageUrl,
      imageData
    } = this.props

    const errorHandler = () => { this.setState({showInitials: true}) }

    return (
      <img
        src={imageUrl || imageData}
        onError={errorHandler}
      />
    )
  }

  get avatarContent (): JSX.Element {
    const {
      initials
    } = this.props

    if (this.state.showInitials) {
      return (
        <div className='avatar-initials-container'>
          <span className='avatar-initials'>
            {initials}
          </span>
        </div>
      )
    }

    return (
      <div className='avatar-picture-container'>
        {this.picture}
      </div>
    )
  }

  get statusDot (): JSX.Element | null {
    const {
      statusDot
    } = this.props

    if (statusDot) {
      return <span className={`status-dot ${statusDot}`} />
    }

    return null
  }

  get statusIcon (): JSX.Element | null {
    const {
      statusIcon
    } = this.props

    if (statusIcon) {
      return statusIcon
    }

    return null
  }

  public static defaultProps: IAvatarProps = {
    size: 'medium'
  }
  public state: IAvatarState = {
    showInitials: true
  }

  constructor (props: IAvatarProps) {
    super(props)

    this.state = {
      showInitials: !this.hasImage(props)
    }
  }

  public componentDidUpdate (prevProps: IAvatarProps): void {
    if (this.hasImage(prevProps) !== this.hasImage(this.props)) {
      this.setState({
        showInitials: !this.state.showInitials
      })
    }
  }

  public render (): JSX.Element | null {
    const {
      className,
      size,
      handleClick
    } = this.props

    const errorHandler = (event: React.MouseEvent<HTMLDivElement>) => isNil(handleClick) ? null : handleClick(event)

    return (
      <div className={classNames(
        style.Avatar,
        className,
        `avatar-${size}`
      )}>
        <div
          className={classNames(
            'avatar-inner-container',
            { 'with-hover': !isNil(handleClick) }
          )}
          onClick={errorHandler}
        >
          {this.hoverDom}
          {this.avatarContent}
        </div>
        {this.statusDot}
        {this.statusIcon}
      </div>
    )
  }

  protected hasImage (props: IAvatarProps): boolean {
    const {
      imageUrl,
      imageData
    } = props

    return !isEmpty(imageUrl) || !isEmpty(imageData)
  }
}

const AvatarWithSkeleton: React.ComponentClass<IAvatarSkeletonProps> = withSkeleton(AvatarComponent)

// tslint:disable-next-line:max-classes-per-file
class Avatar extends React.PureComponent<IAvatarSkeletonProps> {
  public render () {
    const {
      size,
      skeletonOptions,
      skeletonOptions: {
        size: skeletonSize = null
      } = {}
    } = this.props

    let props = this.props

    if (!skeletonSize && skeletonOptions && size) {
      props = {
        ...props,
        skeletonOptions: {
          ...skeletonOptions,
          size
        }
      }
    }

    return <AvatarWithSkeleton {...props} />
  }
}

export {
  Avatar
}