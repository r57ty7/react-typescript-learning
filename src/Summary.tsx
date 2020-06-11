import React from 'react'
import { SummaryProps } from './types'

export class Summary extends React.Component<SummaryProps, {}> {
  render() {
    return (
      <div>
        <div className="party">
          <input type="text" className="party" value={this.props.numOfPeople} />
          <span>名様</span>
        </div>
        <div className="total-amount">
          <span>合計</span>
          <input
            type="text"
            className="total-amount"
            value={this.props.totalAmount}
          />
          <span>円</span>
        </div>
      </div>
    )
  }
}
