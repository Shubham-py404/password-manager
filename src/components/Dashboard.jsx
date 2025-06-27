import React, { use } from "react";
import { useRef , useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {v4 as uuidv4} from 'uuid';
import footer from "./footer";



const Dashboard = () => {
  
  const ref = useRef()
  const passwordRef = useRef(); 
  const eyeOpenRef = useRef(null);
  const eyeCloseRef = useRef(null);
  const [form, setform] = useState({ site: "", username: "", password: "" });

  
  const [passwordarray, setpasswordarray] = useState(() => {
      let passwords = localStorage.getItem("passwords");
      
      if (passwords) {
          try {
              const parsed = JSON.parse(passwords);
              if (Array.isArray(parsed)) {
                  return parsed; 
              }
          } catch (error) {
              console.error("Error parsing localStorage data during useState initialization:", error);
          }
      }
      return [];
  });


  const showpassword = () => {

    if(eyeOpenRef.current.classList.contains("hidden")){
             passwordRef.current.type="text"
    }
    else{
      passwordRef.current.type="password"
    }
    eyeOpenRef.current.classList.toggle("hidden");
    eyeCloseRef.current.classList.toggle("hidden");
  };

  useEffect(() => {  
     localStorage.setItem("passwords", JSON.stringify(passwordarray))

  }, [passwordarray])

  const SavePass = () => {

    if(form.site.length>3 && form.username.length>3 && form.password.length>3){

      const newid = uuidv4();
      const newEntry = {...form , id: uuidv4()}; // creating a new entry with a unique id
      setpasswordarray([...passwordarray, newEntry])
      setform({ site: "", username: "", password: "", id: "" })
        toast.success('Password saved successfully!', {
        position: "top-center",
        autoClose: 1100,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        });
       
       
      }

    else{
      toast.error('Please fill all fields correctly!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });    
    }
    
  }


  const deletepass = (id)=>
  {

    let c = confirm("Are you sure you want to delete this password?");
    if( c){
        setpasswordarray( prevArray =>{
          return prevArray.filter(item=> item.id !==id)
        })

        toast.success('Password deleted successfully!', {
        position: "top-center",
        autoClose: 1100,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        });
    }
     
  }

const handlechange= (e) => {
      setform({...form , [e.target.name]: e.target.value})
  }


  const editpass = (id )=>{
     setform(passwordarray.find(i=> i.id ===id)) // saves the new data
     setpasswordarray(passwordarray.filter(item=> item.id !==id)) //deltes the data
  }


  const copyText =(text) => {
    navigator.clipboard.writeText(text)
      toast("📋Copy to clipboard !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
  }






  return (

     <div className="dashboard-container">
         <ToastContainer
      position="top-center"
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      /> 


      <div className="flex flex-col items-center pt-1 p-1  w-screen shadow-black shadow-1xl ">
        <div className="key logo flex">
          <h1 className="text-white text-4xl font-semibold">Passify</h1>
          <span className="text-green-500 text-4xl">&lt;</span>
          <span className="text-gray-500 text-4xl pt-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path d="M18 10.9971C17.6078 10.1968 16.5481 9.02153 14.3703 9.07154C14.3703 9.07154 12.6431 8.99652 10.6906 8.99652C8.73815 8.99652 7.82408 9.04224 6.25999 9.07154C5.25872 9.04653 3.35629 9.2716 2.48018 11.3472C1.90445 13.0976 1.87941 16.7736 2.22986 18.6241C2.30496 19.5744 2.80559 20.8998 4.35757 21.6C5.30878 22.1001 6.83573 21.9 7.9872 22.0001M5.98465 8.1963C5.93458 5.82065 5.83445 3.94514 8.58796 2.39472C9.51414 2.01962 10.8909 1.69453 12.5931 2.49475C14.3703 3.57004 14.5917 4.70802 14.7458 4.99543C15.1713 6.12074 14.9461 7.72117 14.9961 8.37135" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M15.5 19.7351C15.5 20.9792 14.4911 21.9656 13.2552 21.9656C12.0194 21.9656 11 20.9792 11 19.7351C11 18.4911 12.0194 17.4915 13.2552 17.4915C14.4911 17.4915 15.5 18.4911 15.5 19.7351Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M15.2251 17.7909L17.2156 15.8482M22.0001 15.8482L20.3731 14.3089C19.6001 13.5692 18.9501 14.2149 18.6264 14.4906L17.2156 15.8482M17.2156 15.8482L18.8251 17.3936" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-green-500 text-4xl">&gt;</span>
        </div>
        <p className="text-white font-semibold">All your keys at one place</p>
      </div>

     <div className="Dashboard  text-white mcontainer mx-auto shadow-2xl px-4 pt-3                lg:w-6/10 h-[565px] rounded-2xl bg-[#151515]
                 max-[670px]:w-7/10">
        <div className="flex flex-col gap-4   " >
          <input
            onChange={handlechange}
            className="in1 w-full border-2 p-1 rounded-2xl border-green-500 bg-white text-black "
            type="text"
            placeholder="Enter Website URL"
            value={form.site}
            id="site"
            name="site"
          />
          <div className="in2 gap-2 flex">
            <input
              onChange={handlechange}
              className=" h-8 p-2 w-6/9 min-lg:w-7/10 border-green-500 border-2 bg-white rounded-2xl text-black"
              type="text"
              placeholder="Enter Username"
              id="username"
              value={form.username}
              name="username"
            />
            <div className="relative min-lg:w-3/9 ">
              <input
                ref={passwordRef}
                onChange={handlechange}
                className="bg-white border-green-500 border-2 h-8 p-3 w-full rounded-2xl text-black"
                type="password"
                placeholder="Enter Password"
                value={form.password}
                id="password"
                name="password"
              />
              <span className="text-black absolute cursor-pointer right-2 top-1.5 " onClick={showpassword}>
                <svg ref={eyeOpenRef} className=" hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="#000000" strokeWidth="2"></path>
                  <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="#000000" strokeWidth="2"></path>
                </svg>
                <svg ref={eyeCloseRef} className="relative " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="M3 3L21 21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </div>
          </div>
          <button onClick={SavePass} id="addpass" className="bg-green-500 rounded-2xl p-2 border-3 border-green-950 flex gap-2 items-center mx-auto w-1/2 justify-center cursor-pointer text-black font-bold hover:bg-green-600 ">
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
              target="#addpass"
            ></lord-icon>
            Add Password
          </button>

        </div>
        <div className="password-table-wrapper  w-full pt-5 mx-auto ">
{passwordarray.length === 0 && <div className="text-center text-gray-500 py-4">No passwords to display. Add one!</div>}

<div className="desktop-table-wrapper"> 
    <div className="relative sm:rounded-lg shadow-xl shadow-gray-900 overflow-y-auto max-h-[365px]">
        {passwordarray.length !== 0 && (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
                <thead className="text-xs text-gray-300 uppercase bg-green-700 dark:bg-[#1e1e1e] dark:text-grey-400">
                    <tr>
                        <th scope="col" className="px-5 py-3"> Website </th>
                        <th scope="col" className="px-4 py-3"> user/id </th>
                        <th scope="col" className="px-4 py-3"> password </th>
                        <th scope="col" className="py-3 pl-8"> action </th>
                    </tr>
                </thead>
                <tbody>
                    {passwordarray.map((item) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-[#1e1e1e] dark:border-gray-700 border-black-200">
                            <th scope="row" className="px-4 py-3 font-medium text-white whitespace-nowrap dark:text-white">
                                <div className="flex gap-2 text-white items-center">
                                    <span className="url-text-display">{item.site}</span> 
                                    <a href={item.site} target="_blank" rel="noopener noreferrer">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/gsjfryhc.json"
                                            trigger="morph"
                                            state="morph-link"
                                            colors="primary:#ffffff,secondary:#16c72e"
                                            className="h-6 w-6"
                                        ></lord-icon>
                                    </a>
                                </div>
                            </th>
                            <td className="px-5 py-4 text-white">
                                <div className="flex items-center gap-3 cursor-pointer" onClick={() => copyText(item.username)}>
                                    <span className="url-text-display">{item.username}</span> 
                                    <svg className="copy-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#ffffff" fill="none">
                                        <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </td>
                            <td className="px-5 py-4 text-white flex gap-3 items-center">
                                <div className="flex gap-3 items-center cursor-pointer" onClick={() => copyText(item.password)}>
                                    <span>{"*".repeat(item.password.length)}</span>
                                    <svg className="copy-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#ffffff" fill="none">
                                        <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </td>
                            <td className="px-5 py-4">
                                <div className="flex gap-2">
                                    <button id="edit" className="action-button" onClick={() => editpass(item.id)}> 
                                        <lord-icon
                                            src="https://cdn.lordicon.com/exymduqj.json"
                                            trigger="hover"
                                            state="hover-line"
                                            target="#edit"
                                            colors="primary:#3080e8,secondary:#3080e8"
                                            className="h-7 w-7"
                                        ></lord-icon>
                                    </button>
                                    <button id="delete" className="action-button" onClick={() => deletepass(item.id)}>
                                        <lord-icon
                                            className="h-7 w-7"
                                            src="https://cdn.lordicon.com/jzinekkv.json"
                                            trigger="hover"
                                            stroke="bold"
                                            colors="primary:#e83a30,secondary:#e83a30"
                                        ></lord-icon>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
</div>

<div className="mobile-password-cards"> 
    {passwordarray.map((item) => (
        <div key={item.id} className="password-card">
            <div className="password-card-header">
                <span className="url-text-display">{item.site}</span> 
                <a href={item.site} target="_blank" rel="noopener noreferrer">
                    <lord-icon
                        src="https://cdn.lordicon.com/gsjfryhc.json"
                        trigger="morph"
                        state="morph-link"
                        colors="primary:#ffffff,secondary:#16c72e"
                        className="lord-icon-link"
                    ></lord-icon>
                </a>
            </div>
            <div className="password-card-item">
                <span className="password-card-label">Username:</span>
                <div className="password-card-value cursor-pointer" onClick={() => copyText(item.username)}>
                    <span className="url-text-display">{item.username}</span> 
                    <svg className="copy-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#ffffff" fill="none">
                        <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
            </div>
            <div className="password-card-item">
                <span className="password-card-label">Password:</span>
                <div className="password-card-value cursor-pointer" onClick={() => copyText(item.password)}>
                    <span>{"*".repeat(item.password.length)}</span>
                    <svg className="copy-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#ffffff" fill="none">
                        <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
            </div>
            <div className="password-card-actions">
                <button className="action-button" onClick={() => editpass(item.id)}> 
                    <lord-icon
                        src="https://cdn.lordicon.com/exymduqj.json"
                        trigger="hover"
                        state="hover-line"
                        colors="primary:#3080e8,secondary:#3080e8"
                        className="h-6 w-6"
                    ></lord-icon>
                </button>
                <button className="action-button" onClick={() => deletepass(item.id)}> 
                    <lord-icon
                        className="h-6 w-6"
                        src="https://cdn.lordicon.com/jzinekkv.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#e83a30,secondary:#e83a30"
                    ></lord-icon>
                </button>
            </div>
        </div>
    ))}
          </div>
        </div>
      </div>
     
    </div>
    
  );
};

export default Dashboard


