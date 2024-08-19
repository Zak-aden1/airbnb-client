import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    axios.post("/api/auth/register", {
      email,
      password
    }).then(data => {
      console.log("🚀 ~ onSubmit ~ data:", data)
    }).catch((err) => {
      console.log("🚀 ~ onSubmit ~ err:", err)
    })
  }

  return (
    <div className="mt-4 space-y-4 grow flex items-center justify-around">
      <div className="mb-32">
      <h1 className="text-4xl text-center">Register</h1>
      <form action="" className="max-w-md mx-auto" onSubmit={onSubmit}>
        <input placeholder="Email" type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <input placeholder="Username" type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        <input placeholder="Password" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <button className="btn-primary">Register</button>
      </form>
      <div className="text-center py2 text-gray-500">
        Have an account yet? <Link  className="underline text-black" to={"/register"}> Register now</Link>
      </div>
      </div>
    </div>
  )
}

export default Register