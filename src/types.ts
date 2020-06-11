export type FeeClassification = {
  name: string
  description: string
  unitPrice: number
  numOfPeople: number
  totalPrice: number
}

export type DetailProps = {
  classification: FeeClassification
}

export type DetailState = {
  numOfPeople: number
}

export type AdmissionFeeCalculatorState = {
  feeClassifications: FeeClassification[]
}
