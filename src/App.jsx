import { useState } from 'react'
import './App.css'
import Product from './component/product'
import ProductTab from './component/product/productTab'
import MsgBox from './component/smsBox/MsgBox'
import AmazonProductTab from './component/amazonCard/amProduct'
import Button from './component/button/Button'
import Counter from './component/counter-useState/Counter'
import LikeButton from './component/likeButton/LikeButton'
import LudoBoard from './component/Ludo/LudoBoard'
import ToDoList from './component/To-Do List/ToDoList'
import Lottery from './component/Lottery Game/Lottery'
import TicketNum from './component/Lottery Game/TicketNum'
import Ticket from './component/Lottery Game/Ticket'
import Form from './component/Form/Form'
import CommonForm from './component/CommonForm/CommonForm'
import ComentsForm from './component/ComenetsForm/ComentsForm'
import COunterUseEffect from './component/counter-UseEffect'
import Jocker from './component/API for Jock/Jocker'


function App() {
  return (
    <>
      {/* <ProductTab/> */}
      {/* <MsgBox userName="Rahul" textColor="red"/> */}
      {/* <AmazonProductTab/> */}
      {/* <Button/>  */}
      {/* <Counter/> */}
      {/* <LikeButton/> */}
      {/* <LudoBoard/> */}
      {/* <ToDoList/> */}
      {/* <Lottery/> */}
      {/* <TicketNum num={1}/> */}
      {/* <Ticket ticket={[0,1,3]}/>  */}
      {/* <Lottery n={3} winningSum={15}/> */}
      {/* <Form/> */}
      {/* <CommonForm/> */}
      {/* <ComentsForm/> */}
      {/* <COunterUseEffect/> */}
      <Jocker/> 
    </>
  )
}

export default App
