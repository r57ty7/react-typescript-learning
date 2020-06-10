import React from 'react'
import { DetailProps } from './feeClassification'

export class Detail extends React.Component<DetailProps, {}> {
  render() {
    return (
      <div>
        <div className="classification-name">
          ${this.props.classification.name}
        </div>
        <div className="description">
          ${this.props.classification.description}
        </div>
        <div className="unit-price">
          ${this.props.classification.unitPrice}円
        </div>
        <div className="num-people">
          <select value={this.props.classification.numOfPeople}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span>名</span>
        </div>
      </div>
    )
  }
}
