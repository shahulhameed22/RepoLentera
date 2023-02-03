import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './user.css'
import img from '../user/Skills_Point Logo.png'

export function User(){
    const[details,setDetails]=useState([])
    useEffect (()=>{
        fetch("http://localhost:3000/main.json")
        .then(respone=>respone.json())
        .then(json=>setDetails(json))
        console.log(details)

    },[] )
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand col-lg-2" href="#">
                <img src={img} className="col-lg-12"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <button class="nav-link cust_button1 text-white">FindCanditate</button>
                    </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Find Job</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Find Companies</a>
                        </li>
                </ul>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                <button class="nav-link cust_button1 text-white">Regiter</button>
                </li>
                </div>
            </nav>
            <div className="main">
                <p className="p-5 cust">Find the Canditates as pre your requirement</p>
                <div className="container bg-white pt-5 text-center custonradi pb-4">
                    <input type="text" placeholder="Job Title/Keyboard"/><input type="text" placeholder="Add Country/City"/><input type='button' value="Search" className="btn cust_button2 text-white"/>
                </div>
            </div>
            <div className="container pt-5 d-flex justify-content-around">

                <div class="btn-group">
                    <button type="button" class="btn btn-link dropdown-toggle cusdrop" data-traget="dropdown-menu" data-mdb-toggle="dropdown" aria-expanded="false">
                        Experience
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-link dropdown-toggle cusdrop" data-traget="dropdown-menu" data-mdb-toggle="dropdown" aria-expanded="false">
                        HTML /CSS
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-link dropdown-toggle cusdrop" data-traget="dropdown-menu" data-mdb-toggle="dropdown" aria-expanded="false">
                        Coimbatore
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-link dropdown-toggle cusdrop" data-traget="dropdown-menu" data-mdb-toggle="dropdown" aria-expanded="false">
                        UI/UX Designer
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-link dropdown-toggle cusdrop" data-traget="dropdown-menu" data-mdb-toggle="dropdown" aria-expanded="false">
                        Gender
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="container">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4 p-5">
                {
                    details.map((value,index)=>(
                        <div class="col p-3">
                            <div class="card radius-15">
                                <img src={value.SPIDimg} class="shadow" alt=""/>
                                <div class="card-body bg-light text-center">
                                    <div class="">
                                        <h5 class="mb-0">{value.Name}</h5>
                                        <p class="mb-3">{value.role}</p>
                                        <div class="d-grid"> <a href="#" class="btn cust_button text-white ">view</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    );
}