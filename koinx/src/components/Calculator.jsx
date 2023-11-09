import React from 'react'
import icon from './aus.png'
import { useState } from 'react';


function Card({ color, onClick,text }) {
    return (
      <div
        className={`ml-1 h-10 rounded-lg shadow-lg ${color} cursor-pointer border-2 justify-center`}
        onClick={onClick}
      ><label className={`font-medium align-middle p-2 `}>{text}</label></div>
    );
}



const Calculator = () => {
   const [selectedCard,setSelectedCard] = useState(0);
   const taxSlab = {
    "$0 - $18,200" : "0%",
    "$18,201 - $45,000" : "Nil + 19% of the excess over $18,200",
    "$45,001 - $120,000" : "$5,092 + 32.5% of the excess over $45,000",
    "$120,001 - $180,000" : "$29,467 + 37% of the excess over $120,000",
    "$180,001+" : "$51,667 + 45% of the excess over $180,000"
   };
   const [taxVal,setTaxVal] = useState(taxSlab['$0 - $18,200']);
   const [purchasePrice,setPurchasePrice] = useState(0);
   const [salePrice,setSalePrice] = useState(0);
   const [expense,setExpense] = useState(0);
   
   const calulateTax = (sum) => {
    
    if(sum>=0){

        if(taxVal === "$0 - $18,200")
            return sum;
        else if(taxVal === "$45,001 - $120,000")
             return sum*0.325;
        else if(taxVal ==="$18,201 - $45,000")
            return sum*0.19;
        else if(taxVal ==="$120,001 - $180,000")
            return sum*0.37;
        else 
            return sum*0.45;
    }
        
    
    
   }
   



   
    return (
    <div className='flex-col bg-white'>
        
            <div className='flex-col'>
                <div className='flex justify-evenly' >
                    <h1 className='text-3xl font-bold'>Free Crypto Tax Calculator Australia</h1>
                </div>
                

                <div className='flex-col items-center'>
                    <div className='w-3/4 mx-auto'>
                    <form>
                    <div className='flex mt-6 pb-4 h-8 items-center justify-between'>
                        <div className='flex items-center w-4/12'>
                            <label>Financial Year</label>
                            <select className='rounded-md bg-gray-100 ml-4 h-10 '>
                                <option value="2023-24">FY 2023-24</option>
                            </select>
                            
                            
                        </div>
                        <div className='flex items-center w-4/12'>
                            <label>Country</label>
                            <select className='rounded-md bg-gray-100 ml-2 h-10'>
                                <option value="Australia" className="bg-[icon] " >
                                Australia
                                </option>
                            </select>
                        </div>
                        
                    </div>
                    <hr></hr>

                    <div className='flex mt-8 h-12 items-center justify-between'>
                        <div className='flex-col items-center w-4/12'>
                            <label>Enter purchase price of Crypto</label>
                            <div> 
                            <input type="number" className='w-full bg-gray-100 h-10 mt-2 rounded-md indent-2 text-sm ' required onChange={e => setPurchasePrice(e.target.value)}></input>
                            </div>
                            
                        </div>
                        <div className='flex-col items-center w-4/12'>

                        <label>Enter sale price of Crypto</label>
                            <div> 
                            <input type='number' className='w-full bg-gray-100 h-10 mt-2 rounded-md indent-2 text-sm ' required onChange={e=> setSalePrice(e.target.value)}></input>
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex mt-8 h-15  justify-between'>
                        
                        <div className='flex-col items-center w-4/12'>
                            <label>Enter your Expenses</label>
                            <div className='mt-2'> 
                            <input type='number' className='w-full bg-gray-100 h-10 rounded-md indent-2 text-sm ' required onChange={e=> setExpense(e.target.value)}></input>
                            </div>
                            
                        </div>

                        <div className='flex-col w-4/12'>
                                <label>Investment Type</label>
                                <div className='flex mt-2'>
                                <div className='flex-col'>

                                <Card
                                    color={selectedCard === 0 ? 'border-blue-500 text-blue-500' : 'border-gray-500 text-gray-500'}
                                    onClick={() => setSelectedCard(0)
                                    }
                                    text={"Short Term"}
                                    
                                    />
                                <p className='font-thin text-sm'>&lt; 12 Months</p>
                                </div>
                                <div className='flex-col'>

                                <Card
                                    color={selectedCard === 1 ? 'border-blue-500 text-blue-500' : 'border-gray-500 text-gray-500'}
                                    onClick={() => setSelectedCard(1)}
                                    text={"Long Term"}
                                    />
                                <p className='font-thin text-sm'>&gt; 12 Months</p>
                                </div>
                                </div>
                            
                        </div>
                        
                    </div>
                    <div className='flex h-12 mt-8 items-center justify-between'>
                        <div className='flex-col items-center w-4/12'>
                            <label>Select Your Annual Income</label>
                            <div className='mt-2'>

                            <select className='w-full bg-gray-100 h-10 rounded-md indent-2 font-medium' 
                            onChange={e => setTaxVal(e.target.value)} >
                                {Object.entries(taxSlab).map(([key,value]) => <option key={key} value={key} 
                                >{key}</option>)}
                            </select>
                            </div>
                            
                        </div>
                        <div className='flex-col items-center w-4/12'>

                        <label className='text-md'>Tax Rate</label>
                            <div> 
                            
                            <p className='font-medium text-sm'>{taxVal!==taxSlab['$0 - $18,200'] ? taxSlab[taxVal]:taxSlab['$0 - $18,200']}</p>
                            </div>
                        </div>
                        
                    </div>
                    {selectedCard===1 && <div className='flex mt-12 h-12 items-center justify-between'>
                        <div className='flex-col items-center w-4/12'>
                            <label>Capital gains amount </label>
                            <div className='mt-2'> 
                            <div className='w-full bg-gray-100 h-10 rounded-md text-sm '>{purchasePrice && expense && salePrice && <p className='mx-2 py-2 text-base font-normal'>$ {salePrice - purchasePrice - expense }</p>}</div>
                            </div>
                            
                        </div>
                        <div className='flex-col items-center w-4/12'>

                        <label>Discount for long term gains</label>
                            <div className='mt-2'> 
                            <div className='w-full bg-gray-100 h-10 rounded-md indent-2 text-sm '>{
                                 purchasePrice && expense && salePrice && (salePrice - purchasePrice - expense) >= 0 && <p className='mx-2 py-2 text-base font-normal'>$ {(salePrice - purchasePrice - expense)*0.5 }</p>
                            }</div>
                            </div>
                        </div>
                        
                    </div>}
                    <div className='flex mt-10 h-25 justify-between'>
                        <div className='flex-col items-center w-4/12 bg-green-50 h-25 rounded-md justify-center'>
                            <div className='my-3 mx-12 px-6'>
                                

                                <span>Net Capitals gains tax amount
                                </span>
                                
                            </div>
                            
                            {purchasePrice && expense && salePrice && <div className='mx-24 px-8'>
                                
                                <h2 className='font-bold text-xl text-green-500'>$ {selectedCard === 0 ? (salePrice - purchasePrice - expense) : (salePrice - purchasePrice - expense) -(salePrice - purchasePrice - expense)*0.5}</h2>
                            </div>}
                            
                        </div>
                        <div className='flex-col items-center w-4/12 bg-blue-50 h-25 rounded-md justify-center'>

                            <div className='my-3 mx-12 px-6'> 
                            <span>Tax you need to pay*</span>
                            
                            </div>
                            {purchasePrice && expense && salePrice && <div className='mx-24 px-8'>
                                <h2 className='font-bold text-xl text-blue-500'>$ {
                                    selectedCard === 0 ? calulateTax((salePrice - purchasePrice - expense)) : calulateTax((salePrice - purchasePrice - expense) -(salePrice - purchasePrice - expense)*0.5)
                                }</h2>
                            </div>}
                        </div>
                        
                    </div>
                    </form>
                    </div>
                </div>
                

            </div>
        
    </div>
  )
}

export default Calculator