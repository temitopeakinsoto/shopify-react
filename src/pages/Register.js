import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import github from '../assets/images/github.png'
import google from '../assets/images/google.png'

export default function Register() {
    const [ formInputValues, setFormInputValues] = useState({
        name: "",
        email: "",
        password: ""
    })
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
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      style={{ transition: "all 0.15s ease 0s" }}
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src={github}
                      />
                      Github
                    </button>
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      style={{ transition: "all 0.15s ease 0s" }}
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src={google}
                      />
                      Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: "all 0.15s ease 0s" }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: "all 0.15s ease 0s" }}
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
                        name="password"
                        type="password"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Password"
                        style={{ transition: "all 0.15s ease 0s" }}
                      />
                    </div>
                    
                    <div className="text-center mt-10">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                      >
                        Sign Up
                      </button>
                      <p className="ml-2 mt-5 text-sm font-semibold text-gray-700">
                          Already have an account? <Link style={{color: "rosybrown"}} to="/login">Login</Link> here
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
