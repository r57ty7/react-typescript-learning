import React from 'react'

export class Detail extends React.Component {
  render() {
    return (
      <div>
        <div className="classification-name">名前</div>
        <div className="description">説明</div>
        <div className="unit-price">0円</div>
        <div className="num-people">
          <select value="0">
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
