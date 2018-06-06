import React, { Fragment } from 'react'
import { isEmpty } from 'lodash'
import { FontAwesomeIcon } from '../Icon'
import {
  Wrapper,
  TitleBox,
  HelpContentBox,
  IconBox,
  ArrowIcon,
  IconText,
  Title
} from './style'

const InfoIcon = () => (
  <IconBox>
    <span className='fa-stack'>
      <FontAwesomeIcon
        type='info'
        size={1}
        isStacked
      />
      <FontAwesomeIcon
        type='circle-thin'
        size={2}
        isStacked
      />
    </span>
  </IconBox>
)

export enum InfoTextStatus {
  initial = 0,
  hover,
  clicked,
  hoverAfterClicked
}

export interface IReportHeader {
  renderTitle: JSX.Element
  primaryText: string
  secondaryText: string
  renderHelperContent?: JSX.Element
  onShown?: () => void
  showHelper?: boolean
}

export interface ReportHeaderState {
  status: InfoTextStatus,
  isExpanded: boolean
}

export class ReportHeader extends React.PureComponent<IReportHeader, ReportHeaderState> {
  public static defaultProps: Partial<IReportHeader> = {
    showHelper: true
  }

  constructor (props: IReportHeader) {
    super(props)
    this.state = {
      status: InfoTextStatus.initial,
      isExpanded: false
    }
  }

  // Hover in
  onMouseEnter = () => {
    const {
      status
    } = this.state

    if (status === InfoTextStatus.initial) {
      this.setState({
        status: InfoTextStatus.hover
      })
    }
  }

  // Hover out
  onMouseLeave = () => {
    const {
      status
    } = this.state

    if (status === InfoTextStatus.hover) {
      this.setState({
        status: InfoTextStatus.initial
      })
    }

    if (status === InfoTextStatus.hoverAfterClicked) {
      this.setState({
        status: InfoTextStatus.clicked
      })
    }
  }

  handleClick = () => {
    const {
      status,
      isExpanded
    } = this.state

    const {
      onShown
    } = this.props

    let newStatus

    if (status === InfoTextStatus.clicked) {
      newStatus = InfoTextStatus.initial
    } else {
      newStatus = InfoTextStatus.clicked
    }

    if (onShown && !isExpanded) {
      onShown()
    }

    this.setState({
      status: newStatus,
      isExpanded: !this.state.isExpanded
    })
  }

  get text (): string {
    const {
      primaryText,
      secondaryText
    } = this.props

    const {
      status
    } = this.state

    switch (status) {
      case InfoTextStatus.initial:
        return ''
      case InfoTextStatus.hover:
        return primaryText
      case InfoTextStatus.clicked:
        return secondaryText
      default:
        return ''
    }
  }

  get icon () {
    const {
      status
    } = this.state

    if (status === InfoTextStatus.clicked) {
      return <ArrowIcon className='intelli-icon-arrow-down' />
    }

    return <InfoIcon />
  }

  get helpContent (): JSX.Element | null {
    const {
      isExpanded
    } = this.state

    const {
      renderHelperContent
    } = this.props

    if (isExpanded) {
      return (
        <HelpContentBox>
          {renderHelperContent}
        </HelpContentBox>
      )
    }

    return null
  }

  get wrapper () {
    const {
      showHelper,
      renderHelperContent
    } = this.props

    if (showHelper && !isEmpty(renderHelperContent)) {
      return (<Wrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.handleClick}
      >
        <IconText>
          {this.text}
        </IconText>
        {this.icon}
      </Wrapper>)
    }

    return null
  }

  get title () {
    const {
      renderTitle
    } = this.props
    return (
      <Title>
        { renderTitle }
      </Title>
    )
  }

  render () {
    return (
      <div>
        <TitleBox>
          {this.title}
          {this.wrapper}
        </TitleBox>
        {this.helpContent}
      </div>
    )
  }
}