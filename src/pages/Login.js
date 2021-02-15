import React, { useState} from "react";
import Axios from 'axios';

import { Link } from "react-router-dom";
const postUrl = "https://bw-better-professor-app.herokuapp.com/api/auth/login"

export default function Login(props) {

    const [ formInputValues, setFormInputValues] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();  
        console.log("values are:" , formInputValues)  
        Axios.post(postUrl, {
            ...formInputValues
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log("Thr was an err", err)
        });
        props.history.push('/')  
    }

    const handleInputChange = (e) => {        
        setFormInputValues({
            ...formInputValues,
            [e.target.name]: e.target.value
        }) 
    }

  return (
    <div>
      <section className="absolute w-full top-0">
        <div
          className="absolute top-0 w-full h-full bg-gray-900"
          style={{
            backgroundImage:
              'url("https://demos.creative-tim.com/tailwindcss-starter-project/static/media/register_bg_2.2fee0b50.png")',
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white"
          }}
        />
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4 pt-32">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-40 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <small>Welcome Back!</small>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: "all 0.15s ease 0s" }}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Password"
                        style={{ transition: "all 0.15s ease 0s" }}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="inline-flex w-full cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                          style={{ transition: "all 0.15s ease 0s" }}
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">
                          Remember me
                        </span>
                      </label>
                    </div>
                    <div className="text-center mt-6">
                      <input
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style={{ transition: "all 0.15s ease 0s" }}
                        value="Login"
                      />
                      <p className="ml-2 mt-5 text-sm font-semibold text-gray-700">
                        Don't have an account? <Link style={{color: "rosybrown"}}  to="/register">Click here</Link> to sign up
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
