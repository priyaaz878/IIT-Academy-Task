import React from 'react';
import "../Studentlogin.css";




const Studentloginbutton = () => {
  return (
    <div>


      
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form action="#">
		<h1>Teacher Login</h1>
			<input type="text" placeholder="Name" />
			
			<input type="password" placeholder="Password" />
			<button>Login</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h2>Student login</h2>
			<br></br>
      <p className='student'>To login as a student, please click the button below</p><br></br>
			<button>Login</button>

		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h2>Student Login</h2>
				
				<button className="ghost" id="signIn">Login</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Teacher Login</h1>
        <p>To login as a Teacher, please click the button below
        </p>
				<button className="ghost" id="signUp">LogIn</button>
   
			</div>


		</div>
	</div>
</div>


    </div>
  )
}

export default Studentloginbutton;