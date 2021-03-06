import styled from 'styled-components'

import { Variables } from '../../../../common'

const VerticalTimelineEventWrapper = styled.div`
  margin: 40px 0;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const EventMarkerWrapper = styled.div`
  position: absolute;
  width: auto;
  height: 0;
  left: 88px;
  top: 12px;

  > * {
    top: -50%;
    transform: translate(-50%, -50%);
  }
`

const EventDate = styled.span`
  text-align: right;
  color: ${Variables.Color.n600};
  position: absolute;
  width: 4rem;
  font-size: 14px;
  top: 6px;
  line-height: 1;
`

const EventDot = styled.span`
  border: 2px solid ${Variables.Color.n300};
  position: absolute;
  left: 50%;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: white;
`

const EventContent = styled.div`
  margin-left: 7rem;
`

export {
  VerticalTimelineEventWrapper,
  EventDate,
  EventDot,
  EventContent,
  EventMarkerWrapper
}
