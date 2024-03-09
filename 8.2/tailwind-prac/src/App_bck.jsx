import './App.css'

function App() {

  return (
    <>
    {/* Default  */}
    <div style={{display : "flex", justifyContent: "center"}}>
      <div style={{backgroundColor : "red"}}>Hi</div>
      <div style={{backgroundColor : "blue"}}>Hi</div>
      <div style={{backgroundColor : "green"}}>Hi</div>
    </div>

{/* Tailwind flex  */}
    <div className='flex justify-center'>
      <div className='bg-red-500'>Hi Iam using tailwind flex</div>
      <div className='bg-blue-500'>Hi Iam using tailwind flex</div>
      <div className='bg-green-500'>Hi Iam using tailwind flex</div>
    </div>


{/* tailwind grid */}
    <div className='grid grid-cols-3'>
      <div className='bg-red-500'>Hi Iam using tailwind flex</div>
      <div className='bg-blue-500'>Hi Iam using tailwind flex</div>
      <div className='bg-green-500'>Hi Iam using tailwind flex</div>
      <div className='bg-orange-500'>Hi Iam using tailwind flex</div>
      <div className='bg-yellow-500'>Hi Iam using tailwind flex</div>
    </div>

{/* tailwind grid */}
    <div className='grid grid-cols-10'>
      <div className='bg-red-500 col-span-4'>Hi Iam using tailwind flex</div>
      <div className='bg-blue-500 col-span-4'>Hi Iam using tailwind flex</div>
      <div className='bg-green-500 col-span-2 '>Hi Iam using tailwind flex</div>
      <div className='bg-orange-500'>Hi Iam using tailwind flex</div>
      <div className='bg-yellow-500'>Hi Iam using tailwind flex</div>
    </div>
    </>
  )
}

export default App
