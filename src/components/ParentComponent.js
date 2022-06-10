import React, {useState} from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export default function ParentComponent() {
    const [firstName, setFirstName] = useState ("Bishnu")
    const [lastName, setLastName] = useState ("Thapa")

    function handleFirstName(event){
        setFirstName(event.target.value)
    }

    function handleLastName(event){
        setLastName(event.target.value)
    }

  return (
    <div>
        <Form 
        firstName = {firstName} 
        lastName ={lastName}
        handleFirstName = {handleFirstName}
        handleLastName = {handleLastName}
        />
        <DisplayData firstName = {firstName} lastName = {lastName} />

    </div>
  )
}
