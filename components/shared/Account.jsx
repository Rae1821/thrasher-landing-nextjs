import React from 'react'

const Account = () => {
  return (
    <div>
        <h1>My Account</h1>
        <div>
            <div>
                <h2>Current Payment Due</h2>
                <div>
                    <p>Date</p>
                    <p>Amount</p>
                    <button>Pay Now</button>
                </div>
            </div>
            <div>
                <h2>Payment History</h2>
                <div>
                    <p>Date</p>
                    <p>Amount</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account
