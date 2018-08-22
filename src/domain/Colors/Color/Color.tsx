import React from 'react'
import { map } from 'lodash'
import {
  WrappedList,
  ColorBox,
  ColorName
} from './style'
const variables = require('@Common/sass/variables.scss')

export interface IColorGridProps {
  colors: string[]
}

export class ColorsGrid extends React.PureComponent<IColorGridProps> {
  public render (): JSX.Element {
    const { colors } = this.props

    return (
      <WrappedList>
        {map(colors, (color) =>
          (
            <div>
              <ColorBox hex={variables[color]} />
              <ColorName> {color} </ColorName>
              <p> {variables[color]} </p>
            </div>
          )
        )}
      </WrappedList>
    )
  }
}