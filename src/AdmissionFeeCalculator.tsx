import React from 'react'
import { Detail } from './Detail'
import { Summary } from './Summary'
import { DetailProps } from './types'

export class AdmissionFeeCalculator extends React.Component {
  private detail: DetailProps[] = [
    {
      classification: {
        name: '大人',
        description: '',
        numOfPeople: 0,
        totalPrice: 1000,
        unitPrice: 0,
      },
    },
    {
      classification: {
        name: '学生',
        description: '中学生・高校生',
        unitPrice: 700,
        numOfPeople: 0,
        totalPrice: 0,
      },
    },
    {
      classification: {
        name: '子ども',
        description: '小校生',
        unitPrice: 300,
        numOfPeople: 0,
        totalPrice: 0,
      },
    },
    {
      classification: {
        name: '幼児',
        description: '未就学',
        unitPrice: 0,
        numOfPeople: 0,
        totalPrice: 0,
      },
    },
  ]

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
