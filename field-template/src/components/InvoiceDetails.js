import React, {Component} from 'react'

class InvoiceDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currency: 'INR',
      basicAmount: 15000,
      taxAmount: 1000,
      totalAmount: 16000,
      advancePaid: 0,
      netPayable: 16000,
      country: '',
      ifscCode: '',
      bankAccNo: '',
      reference: '',
    }
  }

  componentDidMount() {
    fetch('/api/invoices/mongodb')
      .then(response => response.json())
      .then(data => this.setState(data))
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('/api/invoices/mongodb', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Country:</label>
          <input type="text" name="country" onChange={this.handleChange} />
        </div>
        <div>
          <label>Bank Key / IFSC Code:</label>
          <input type="text" name="ifscCode" onChange={this.handleChange} />
        </div>
        <div>
          <label>Bank Acc No:</label>
          <input type="text" name="bankAccNo" onChange={this.handleChange} />
        </div>
        <div>
          <label>Reference:</label>
          <input type="text" name="reference" onChange={this.handleChange} />
        </div>
        <div>
          <label>Currency: {this.state.currency}</label>
        </div>
        <div>
          <label>Inv Basic Amt:</label>
          <input
            type="number"
            name="basicAmount"
            value={this.state.basicAmount}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Basic Tax Amt:</label>
          <input
            type="number"
            name="taxAmount"
            value={this.state.taxAmount}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Total Inv Amt: {this.state.totalAmount}</label>
        </div>
        <div>
          <label>Net Payable Amt: {this.state.netPayable}</label>
        </div>
        <div>
          <button type="submit">Approve</button>
        </div>
      </form>
    )
  }
}

export default InvoiceDetails
