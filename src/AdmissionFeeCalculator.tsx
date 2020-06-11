import React from 'react'
import { Detail } from './Detail'
import { Summary } from './Summary'
import {
  FeeClassification,
  DetailProps,
  AdmissionFeeCalculatorState,
} from './types'

export class AdmissionFeeCalculator extends React.Component<
  {},
  AdmissionFeeCalculatorState
> {
  constructor(props: {}) {
    super(props)
    const adult: FeeClassification = {
      name: '大人',
      description: '',
      numOfPeople: 0,
      totalPrice: 1000,
      unitPrice: 0,
    }

    const student: FeeClassification = {
      name: '学生',
      description: '中学生・高校生',
      unitPrice: 700,
      numOfPeople: 0,
      totalPrice: 0,
    }

    const child: FeeClassification = {
      name: '子ども',
      description: '小校生',
      unitPrice: 300,
      numOfPeople: 0,
      totalPrice: 0,
    }

    const infant: FeeClassification = {
      name: '幼児',
      description: '未就学',
      unitPrice: 0,
      numOfPeople: 0,
      totalPrice: 0,
    }
    this.state = { feeClassifications: [adult, student, child, infant] }
  }

  handleNumOfPeopleChange(idx: number, num: number) {
    const currentFC = this.state.feeClassifications[idx]
    const newTotalPrice = currentFC.unitPrice * num
    const newFC: FeeClassification = Object.assign({}, currentFC, {
      numOfPeople: num,
      totalPrice: newTotalPrice,
    })
    const feeClassifications = this.state.feeClassifications.slice()
    feeClassifications[idx] = newFC

    this.setState({ feeClassifications })
  }

  render() {
    const detailsJsx = this.detail.map((fc, idx) => {
      return <Detail key={idx.toString()} classification={fc.classification} />
    })
    return (
      <>
        {detailsJsx}
        <Summary />
      </>
    )
  }
}
