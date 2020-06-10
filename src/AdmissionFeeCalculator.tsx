import React from 'react'
import { Detail } from './Detail'
import { Summary } from './Summary'
import { DetailProps } from './feeClassification'

export class AdmissionFeeCalculator extends React.Component {
  private detail: DetailProps = {
    classification: {
      name: '大人',
      description: '',
      numOfPeople: 0,
      totalPrice: 1000,
      unitPrice: 0,
    },
  }
  render() {
    return (
      <>
        <Detail classification={this.detail.classification} />
        <Summary />
      </>
    )
  }
}
