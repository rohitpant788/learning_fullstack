import './App.css'

function App () {
  return (
    <>
      <div className='bg-red-500 sm:bg-blue-500'>Hi there</div>


      {/* Can you write a code , How can I have 3 equally placed children but if I go below md they become one below the another ,  */}
      <div className='md:grid md:grid-cols-3'>
        <div className='bg-red-500 '>Hi there</div>
        <div className='bg-blue-500 '>Hi there</div>
        <div className='bg-green-500'>Hi there</div>
      </div>
    </>
  )
}

export default App
