import './App.css'
import Contacts from './Contacts'

const c = [
  {id: 1, name: "Alice Smith", phone: "555-1234"},
  {id: 2, name: "Bob Johnson", phone: "555-5678"},
  {id: 3, name: "Charlie Brown", phone: "555-8765"},
  {id: 4, name: "Diana Prince", phone: "555-4321"},
  {id: 5, name: "Ethan Hunt", phone: "555-2468"},
  {id: 6, name: "Fiona Glenanne", phone: "555-1357"},
];

function App() {
  return (
    <div className='px-4'>
      <h1 className='text-5xl font-extrabold text-center my-20'>Contacts</h1>
      <Contacts contacts={c} />
    </div>
  )
}

export default App
