import './App.css';
import TodoList from './components/TodoList';



function App() {


  return (
    <section id='App' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
      <div className=" flex py-8 shadow-2xl">
        <h1 className='text-7xl mt-10 mx-auto italic font-bold pb-8 text-sky-100 '>My super -todolist-</h1>
      </div>
        <TodoList/>

    </section>
    
  )
}

export default App
