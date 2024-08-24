import React, { useState } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import './Navbar.css'
import Sdata from './Sdata'


function Navbar({setData, cart}) {
  const [searchTerm, setSearchTerm]=useState('')

  const navigate =useNavigate()

  const filterByCategory = (category)=>{
    const element =  Sdata.filter((product)=> product.category === category)

    setData(element)
  }

  const filterByPrice = (price)=>{
    const element = Sdata.filter((product)=>product.price >=price)
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
  }
  return (
    <header className='sticky-top'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <NavLink className="navbar-brand text-light fw-bold" to="/">E-Commerce</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <form onSubmit={handleSubmit} 
      className="d-flex mx-auto" >
        <input value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>


      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-light fw-bold fs-5 active" aria-current="page" to="/cart">
          <button type="button" class="btn btn-primary position-relative">
  Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="nav-bar-wrapper">
  <div className="items">Filter by {'->'}</div>

  <div onClick={()=>setData(Sdata)}
  className="items">No Filter</div>

  <div onClick={()=>filterByCategory('mobiles')}
  className="items">Mobile</div>

  <div onClick={()=>filterByCategory('laptops')} 
  className="items">Laptops</div>

  <div  onClick={()=>filterByCategory('tablets')}
   className="items">Tablets</div>

  <div onClick={()=>filterByPrice(29999)}
   className="items">{'>='}29999</div>

  <div onClick={()=>filterByPrice(49999)}
   className="items">{'>='}49999</div>

  <div onClick={()=>filterByPrice(69999)}
   className="items">{'>='}69999</div>

  <div onClick={()=>filterByPrice(89999)}
   className="items">{'>='}89999</div>
   
</div>
    </header>
  )
}

export default Navbar
