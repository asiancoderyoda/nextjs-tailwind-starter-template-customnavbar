import React from "react";



export default function Profile() {
  return (
    <>
      <div style={{marginTop:"-15px"}} className="w-full h-screen bg-center bg-no-repeat bg-cover" >
          <div id="top" className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
              <div className="mx-4 text-center text-white">
                  <h1 className="font-bold text-6xl mb-4">This is a test</h1>
                  <h2 className="font-bold text-3xl mb-12">This is a test</h2>
                  <div>
                      <a href="" className="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                          Click here
                      </a>
                      <a href="" className="bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2">
                          Or click here
                      </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="w-full h-screen bg-center bg-no-repeat bg-cover" >
          <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center relative">
              <div className="mx-4 text-center text-white">
                  <h1 className="font-bold text-6xl mb-4">This is a test</h1>
                  <h2 className="font-bold text-3xl mb-12">This is a test</h2>
              </div>
              <div className="absolute bottom-14">
                  <a href="" className="border-2 border-white rounded-md font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
                      Click here
                  </a>
              </div>
          </div>
      </div>
    </>
  );
}