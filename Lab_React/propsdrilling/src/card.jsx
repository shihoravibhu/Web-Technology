import React from 'react'

export default function ProductName(){
    const name = "Ipad"
  return (
    <>
        <ProductPrice name={name}/>
    </>
  )
}


function ProductPrice(props) {
    const price = "999$";
  return (
    <>
        <ProductManufactured name={props.name} price={price}/>
    </>
  )
}

 function ProductManufactured(props) {
    const ManufacturedDate = "2-Feb-2025";
  return (
    <>
        <Card name = {props.name} price = {props.price} ManufacturedDate = {ManufacturedDate}/>
    </>
  )
}


function Card(props){
    return(
        <>
            <div class="card" style={{width: "18rem"}}>
                <div class="card-header">
                    Featured
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name : {props.name}</li>
                    <li class="list-group-item">Price : {props.price}</li>
                    <li class="list-group-item">ManufacturedDate : {props.ManufacturedDate}</li>
                </ul>
            </div>  
        </>
    )
}