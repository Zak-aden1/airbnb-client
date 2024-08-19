import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    axios.post("/register", {
      email,
      password
    }).catch(err => console.log({err}))
  }

  return (
    <div className="mt-4 space-y-4 grow flex items-center justify-around">
      <div className="mb-32">
      <h1 className="text-4xl text-center">Login</h1>
      <form action="" className="max-w-md mx-auto" onSubmit={onSubmit}>
        <input placeholder="Email" type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <input placeholder="Password" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <button className="btn-primary">Login</button>
      </form>
      <div className="text-center py2 text-gray-500">
        Have an account yet? <Link  className="underline text-black" to={"/register"}> Register now</Link>
      </div>
      </div>
    </div>
  )
}

export default Login