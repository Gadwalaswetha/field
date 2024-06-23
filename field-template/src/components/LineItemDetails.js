import React, {Component} from 'react'

class LineItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lineItems: [{glDesc: '', glCode: '', text: ''}],
      glDescriptions: [
        'Original cost-Plant & Equipment',
        'Maintenance cost',
        'Operational cost',
      ],
      glCodes: ['0020200000', '0020300000', '0020400000'],
    }
  }

  handleChange = (index, event) => {
    const {name, value} = event.target
    const lineItems = [...this.state.lineItems]
    lineItems[index][name] = value
    this.setState({lineItems})
  }

  handleAddLineItem = () => {
    this.setState({
      lineItems: [...this.state.lineItems, {glDesc: '', glCode: '', text: ''}],
    })
  }

  handleRemoveLineItem = index => {
    const lineItems = this.state.lineItems.filter((item, i) => i !== index)
    this.setState({lineItems})
  }

  handleCalculate = () => {
    console.log(this.state.lineItems)
  }

  render() {
    return (
      <div>
        <h2>Line Item Details</h2>
        <table>
          <thead>
            <tr>
              <th>Select Debit</th>
              <th>GL Desc</th>
              <th>GL Code</th>
              <th>Text (Do not enter special characters)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lineItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" name="selectDebit" />
                </td>
                <td>
                  <select
                    name="glDesc"
                    value={item.glDesc}
                    onChange={e => this.handleChange(index, e)}
                  >
                    <option value="">Select GL Desc</option>
                    {this.state.glDescriptions.map((desc, i) => (
                      <option key={i} value={desc}>
                        {desc}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    name="glCode"
                    value={item.glCode}
                    onChange={e => this.handleChange(index, e)}
                  >
                    <option value="">Select GL Code</option>
                    {this.state.glCodes.map((code, i) => (
                      <option key={i} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    name="text"
                    value={item.text}
                    onChange={e => this.handleChange(index, e)}
                    pattern="^[a-zA-Z0-9\s]*$"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => this.handleRemoveLineItem(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={this.handleCalculate}>
          Calculate
        </button>
        <button type="button" onClick={this.handleAddLineItem}>
          Add
        </button>
      </div>
    )
  }
}

export default LineItemDetails
