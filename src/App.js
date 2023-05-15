import { useState } from "react";

const App = () => {
  const [oneUser, setOneUser] = useState({fullName: "", email: "", age: ""})
  const [users, setUsers] = useState([])

  const formChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setOneUser({...oneUser, [name]: value })
  }

  const formSubmit = (event) => {
    event.preventDefault()

    if (oneUser.fullName && oneUser.email && oneUser.age) {
      const newUser = {...oneUser, id: new Date().getTime() }
      setUsers((users) => {
        return [...users, newUser]
      })

      setOneUser({fullName: "", email: "", age: "" })

    } else {
      console.log("Něco nebylo vyplněno!");
    }
  }

  return (
    <article>
      <form onSubmit={formSubmit}>
        <h1>Form</h1>
        <input type="text" className="name-input" placeholder="Name" value={oneUser.fullName} onChange={formChange} name="fullName" />
        <input type="text" className="email-input" placeholder="Email" value={oneUser.email} onChange={formChange} name="email" />
        <input type="text" className="age-input" placeholder="Age" value={oneUser.age} onChange={formChange} name="age" />
        <input type="submit" className="submit" />
      </form>

      {users.map((oneUser) => {
        const { id, fullName, email, age } = oneUser

        return <div className="item" key={id}>
          <h4>{fullName}</h4>
          <p>{email}</p>
          <p>{age}</p>
        </div>
      })}

    </article>
  )
}

export default App
