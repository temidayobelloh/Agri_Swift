import {useState} from 'react;'

const Login = () => {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit =(e)=>{
    (e).preventDefault();
    console.log(username, email, password)
}
  return (
    <div>
    <form className="login" onSubmit={handleSubmit} >
    <label>Username:</label>
    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
    <label>Email:</label>
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.email)}/>
    <label>Password:</label>
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

    </form>
      
    </div>
  )
}

export default Login;
