import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const TabStyleConstants = {
  GroupHeight: 40,
  MarginSize: 16,
  ScrollDuration: 250
}

interface ITabGroupContainerProps {
  /** Margins around the highlight area */
  margins?: Props.IMargins
}

const TabGroupContainer = styled.div`
  box-shadow: inset 0 -1px 0 0 ${Variables.Color.n300};
  height: ${TabStyleConstants.GroupHeight}px;
  width: 100%;
  ${(props: ITabGroupContainerProps) => styleForMargins(props.margins)}
`

interface ITabChevronButtonProps {
  float: 'left' | 'right'
}

const TabChevronButton = styled.button`
  color: ${Variables.Color.n600};
  cursor: pointer;
  float: ${(props: ITabChevronButtonProps) => props.float};
  font-weight: bold;
  line-height: ${TabStyleConstants.GroupHeight}px;
  margin: 0 ${TabStyleConstants.MarginSize / 2}px;
  outline: none;
  text-align: center;
  transition: color .15s ease-in;

  &:hover {
    color: ${Variables.Color.n800};
  }

  &:disabled {
    color: ${Variables.Color.n400};
    cursor: not-allowed;
  }

  .icon {
    margin: 0;
  }
`

const TabParent = styled.div`
  overflow: hidden;
  height: ${TabStyleConstants.GroupHeight}px;
`

const TabList = styled.ul`
  font-size: ${Variables.FontSize.fzBody}px;
  height: 100%;
  line-height: ${TabStyleConstants.GroupHeight}px;
  -ms-overflow-style: none;
  list-style-type: none;
  margin: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-left: 0;
  position: relative;
  scrollbar-width: none;
  white-space: nowrap;

  &::-webkit-scrollbar {
      width: 0;
      height: 0;
  }

  &:after,
  &:before {
    display: table;
    content: ' ';
  }
`

const TabListItem = styled.li`
  display: inline-block;
  margin: 0 ${TabStyleConstants.MarginSize}px;
`

interface ITabListItemAnchorProps {
  active: boolean
}

const TabListItemAnchor = styled.a`
  color: ${Variables.Color.n600};
  display: block;
  font-weight: ${Variables.FontWeight.fwSemiBold};
  line-height: ${TabStyleConstants.GroupHeight}px;
  outline: none;
  position: relative;
  text-decoration: none;
  transition: color .15s ease-in;

  &:before {
    background-color: transparent;
    bottom: -2px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transition: all .15s ease-in-out;
    width: 100%;
  }

  &:after {
    content: '';
    height: 100%;
    left: -5px;
    right: -5px;
    position: absolute;
    transition: all .15s ease-in-out;
    border-radius: ${Variables.Style.borderRadius}px;
  }

  ${(props: ITabListItemAnchorProps) => props.active && css`&,`}
  &:active {
    color: ${Variables.Color.i400};

    &:before {
      background-color: ${Variables.Color.i400};
      bottom: 0;
    }
  }

  &:focus {
    color: ${Variables.Color.i500};

    &:after {
      border: 1px solid ${Variables.Color.i500};
    }
  }

  &:hover {
    color: ${Variables.Color.i500};
  }

  .left-component {
    margin-right: 5px;
  }

  .right-component {
    margin-left: 5px;
  }
`

export {
  TabStyleConstants,
  TabGroupContainer,
  TabChevronButton,
  TabList,
  TabParent,
  TabListItem,
  TabListItemAnchor
}
