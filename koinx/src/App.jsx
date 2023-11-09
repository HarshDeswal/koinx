import Calculator from "./components/Calculator"

function App() {
  

  return (
    <>
      <div >
        {/* <h1 className="bg-gray-200">Header</h1> */}
        <div className="flex justify-between mx-5 mt-3 h-screen ">
            

            <div className="w-full flex-col content-center bg-white">
              <Calculator/>
              
            
            </div>
            
        </div>
      </div>
    </>
  )
}

export default App
