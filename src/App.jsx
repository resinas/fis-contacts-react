import './App.css'
import Contact from './Contact'

function App() {
  return (
    <div className='px-4'>
      <h1 className='text-5xl font-extrabold text-center my-20'>Contacts</h1>
      <Contact contact={{name: "John Doe", phone: "123-456-7890"}} />
    </div>
  )
}

export default App
