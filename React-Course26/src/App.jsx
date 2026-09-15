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
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

      <Card title="Star Wars" rating={5} isCool={true} actors={[{name: 'Actors'}]}/>
      <Card title="Avatar" rating={6}/>
      <Card title="The Lion King" />
    </div>
    
  )
}

export default App
