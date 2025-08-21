import React, { useState, useEffect } from 'react'

function Main() {
  const [Tip, setTip] = useState("")
  const [Amount, setAmount] = useState("")
  const [Total, setTotal] = useState("0")

  useEffect(() => {
    setTotal(Number(Tip) + Number(Amount))
     }, [Tip, Amount])

    function handletip(tip){
    setTip (Math.floor((tip*Amount)/100))
  }

  return (
    <div className="flex flex-col gap-20 mx-auto mt-20 bg-gray-200 p-6 rounded-lg shadow w-fit">
      <div className="flex flex-row gap-40">
        <label htmlFor="amount">Enter Amount :</label>
        <input
          id="amount"
          type="text"
          placeholder="Enter Amount"
          name="Amount"
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 rounded border w-40"
        />
      </div>
      
 <div> Enter Tip in % :</div>
        <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-green-300 cursor-pointer transition-all duration-300 hover:bg-blue-500"
                            onClick={(e)=>handletip(e.target.innerText)}>10</div>
        <div className="p-4 bg-green-300 cursor-pointer transition-all duration-300 hover:bg-blue-500"
                            onClick={(e)=>handletip(e.target.innerText)}>5</div>
        <div className= "p-4 bg-green-300 cursor-pointer transition-all duration-300 hover:bg-blue-500"
                            onClick={(e)=>handletip(e.target.innerText)}>20</div>
        <div className= "p-4 bg-green-300 cursor-pointer transition-all duration-300 hover:bg-blue-500"
                            onClick={(e)=>handletip(e.target.innerText)}>30</div>
        <div className= "p-4 bg-green-300 cursor-pointer transition-all duration-300 hover:bg-blue-500"
                            onClick={(e)=>handletip(e.target.innerText)}>40</div>
        <div className= "p-4 bg-green-300 cursor-pointer transition-all duration-300 hover:bg-blue-500"
                            onClick={(e)=>handletip(e.target.innerText)}>50</div>
 </div>


      <div className="flex flex-row">
        <label htmlFor="tip">Enter Tip :</label>
        <input
          id="tip"
          type="text"
          placeholder="Enter Tip Amount"
          name="Tip"
          value={Tip}
          onChange={(e) => setTip(e.target.value)}
          className="p-2 rounded border w-40"
        />
      </div>

      <div className="flex flex-row">
        <label htmlFor="total">Total Amount :</label>
        <input
          id="total"
          placeholder="Total Amount"
          name="Total"
          value={Total}
          readOnly
          className="p-2 rounded border bg-green-200 w-40"
        />
      </div>
    </div>
  )
}

export default Main
