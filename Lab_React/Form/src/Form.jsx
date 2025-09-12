import { useState } from "react";

function Validation(){

    const [user,setUser] = useState(null);

    let handleLogin = (data)=>{
        setUser(data);
    }

    return (

    <>

   { user ? <Dashboard name = {user} handleLogin = {handleLogin}/> : <Login handleLogin = {handleLogin}/> }

    </>
    )

}

function Login({handleLogin}){

    const [name,setName] = useState('');
    const [password,setPassWord] = useState('');

    const check = () =>{

        if(name !== '' && password !== ''){

            if(name === "vibhu" && password === "7777"){
                handleLogin(name);
            }
            else{
                alert("Invalid Password/Name");
            }
        }
        else{
            alert("Name/password is Empty");
        }
    }


    return(
        <>  
        
        <form  onSubmit={check} style={{width:"42%" , margin:"auto" , paddingTop:"20px"}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={name}
        onChange = {(e) => {setName(e.target.value)}}/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  value={password}
        onChange = {(e) => {setPassWord(e.target.value)}} />
  </div>
  
  <button type="submit" class="btn btn-outline-warning">Submit</button>
</form>

        </>
    )
}

function Dashboard({name,handleLogin}){

    return(
        <>
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Dashboard</a>
    <form class="d-flex" role="search">
      <button class="btn btn-outline-success" type="button" onClick={() => handleLogin(null)}>Log out</button>
    </form>
  </div>
</nav>
        <h1 style={{textAlign:"center" , color:"green"}}>Welcome , {name}! </h1>
        <div>You Have Succesfully Logged Into The Dashboard</div>
        </>
    )
}

export default Validation