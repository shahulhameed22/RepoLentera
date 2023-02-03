import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import img from '../user/Skills_Point Logo.png'

export function Landing(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand col-lg-2" href="#">
                <img src={img} className="col-lg-12"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-right" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto justify-content-around ">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                    </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Categories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQs</a>
                        </li>
                        <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                <button class="nav-link cust_button1 text-white">Register</button>
                </li>
                </ul>
            </div>
            </nav>
            <div class="container-fluid backimg">
                <p>Get Started noe </p>
            </div>
        </>
    );
}