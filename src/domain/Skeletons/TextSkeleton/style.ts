import styled from 'styled-components'
import { Props } from '../../../common'
import { styleForTypographyType } from '../../Typographies/services/textStyles'
import { SkeletonWrapper } from '../style'

export interface ITextSkeletonWrapperProps {
  width?: number,
  textType?: Props.TypographyType
}

export const TextSkeletonWrapper = styled(SkeletonWrapper)`
  border-radius: 4px;
  width: ${(props: ITextSkeletonWrapperProps) => props.width ? `${props.width}px` : '100%'};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  ${(props: ITextSkeletonWrapperProps) => styleForTypographyType(props.textType)}
`
