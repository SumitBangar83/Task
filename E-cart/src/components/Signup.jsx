import axios from 'axios'; 
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import facebook from '../assets/facebook.png'

export default function Signup() {
    // const[form,setForm] = setForm({email:"",password:""});

    // const handleChange = e =>{
    //     setForm({email:e.target.email,password:e.target.name})   
    // }

    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
        
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            console.log(form)

            // axios.post("http://localhost:5000/api/auth/signup", form)
        const res = await axios.post("http://localhost:5000/api/auth/signup", form);
            alert(res.data.message);
            
        } catch (err) {
            alert("Signup failed didnt send request to beckend");
        }
    };

    return (
        // <div>
        //     <div className='mt-10 mb-10 m-auto w-fit'>
        //         <form action="" onSubmit={handleSubmit}>
        //             {/* <div>
        //                 <input className='border border-gray-400 mt-1.5 pl-2' name='email' type="text" placeholder='email' />
        //             </div>
        //             <div>
        //                 <input className='border border-gray-400 mt-1.5 pl-2 ' name='password' type="text" placeholder='password'/>
        //             </div> */}
        //             <input className='border border-gray-400 mt-1.5 pl-2' name='email'type="text"placeholder='email'value={form.email}onChange={handleChange}/>
        //             <input className='border border-gray-400 mt-1.5 pl-2' name='password' type="text" placeholder='password' value={form.password} onChange={handleChange} />
        //             <div className='w-fit m-auto mt-5 '>
        //                 <button type='submit' className='rounded-md px-3 py-1 border bg-gray-200 hover:bg-gray-400 cursor-pointer active:bg-amber-700 active:text-white'>SignUp</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>

	<>
	<div className='loading absolute text-2xl w-full h-full z-10 opacity-50 flex justify-center items-center hidden' id = "loading">

</div>

   <div className='flex justify-center w-full h-fit fixed'>
   {/* <Message type={type} bordered showIcon    placement = "topCenter" className='mt-6 hidden message' >
	<strong id = "message">Success!</strong> 
   </Message> */}

   </div>
	
    <div className='Signup flex  w-full h-screen'>
	   
      
      	<div className='m-auto pl-4 pr-4 SignupFrame2 ' style={{maxWidth: '600px'}} >
			<div id = "SignupFrame2">
				<div className='text-center'>
				<p className='font-semibold text-4xl mt-16 mb-12 text-purple-700 '>Sign Up And Start <br />Learning</p>
				</div>
				
				<div>
				<form action="" onSubmit={handleSubmit} >
					<div>
					<input type="text" className='w-full h-10 border border-black  rounded-md pl-3 pr-3 ' name = "email" placeholder='email'value={form.password} onChange={handleChange} required />
					</div>

					{/* <div>
					<input type="email" className='w-full h-10 border border-black  rounded-md pl-3 pr-3 mt-8' placeholder='Email' name="email" required />
					</div> */}

					<div>
					<input type="password" className='w-full border h-10 border-black  rounded-md pl-3 pr-3 mt-8'value={form.email}onChange={handleChange} placeholder='Password' name="password" required/>
					</div>

					<div>
						<button className='w-full text-white h-10 mt-8  text-lg font-bold ' style={{backgroundColor:'#920DE3'}}>Sign Up</button>
					</div>

					
					<div className='flex justify-around mt-10'> 
						<div className='w-fit'>
							<input type="checkbox" className='border-2 h-6 border-black' name='checkbox' />
						</div>

						<div className='pl-3  w-fit'>
							<p className='text-sm '>Send me special offer personalized recommendations, and learning tips.</p>
						</div>
					</div>
				</form>

				<div className='flex justify-between w-44 m-auto pt-8  items-center'>
					<img className = 'h-9 w-8 ' src ={google} />
					<img className = 'h-8 w-8  rounded-circle' src ={facebook} style={{backgroundColor:'#1877F2'}} />
					<img className = 'h-8 w-8 ' src ={apple}/>
				</div>

				<div>
					<div className='text-sm w-fit pt-5 flex justify-center flex-wrap m-auto '>
						<p className='mr-1 font-semibold  '>By Signing Up, You Agree To Our</p> 
						<a href="" className='font-semibold text-purple-700 '><u>Terms & Use</u></a>
						 <p className='w-fit font-semibold ml-1 mr-1'> and </p>
						<a href="" className='w-fit font-semibold text-purple-700 '> <u>Privacy Policy </u></a>
					</div>

					<div className='flex w-fit m-auto pt-3'>
						<p className='mr-2 font-semibold text-lg'>Already Have An Account?</p>
						<Link to = "/login" className='text-purple-700 text-lg'><u>Log In</u></Link>
					</div>
				</div>

		
      			</div>
    		</div>
		</div>
	</div>
	</>
  
    )
}
