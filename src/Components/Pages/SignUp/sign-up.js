import {useState} from 'react';
import './sign-up.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e)=> {
    (e).preventDefault();
    console.log (email, password)
  }
  return (
    <>
    <div className='sign-up-container'>
    <form className="sign-up" onSubmit={handleSubmit}>
    <h3>Sign In to Your Account!</h3>
    <label>Email:</label>
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
    <label>Password</label>
    <input type="password" value ={password} onChange={(e)=> setPassword(e.target.value)}/>
    <button>Sign Up</button>
    </form>
    </div>
    </>
  )
}

export default SignUp;
