import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

//class components: 
/*
 class ClassComponent extends React.Component{
  render(){
    return <h2> class component </h2>
  }
}*/

const Card = ({title, rating, isCool}) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card" >
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className='card-container'>
      <Card title="Star Wars" rating={5} isCool={true}/>
      <Card title="Avatar" rating={6}/>
      <Card title="The Lion King" />
    </div>
  )
}

export default App
