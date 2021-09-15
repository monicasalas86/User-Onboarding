import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './Form';
import schema from './formSchema';
import axios from 'axios';
import * as yup from 'yup';
import Member from './Member';

const initailFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initalFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialMembers = []
const initialDisabled = true

function App() {

  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initailFormValues)
  const [formErrors, setFormErrors] = useState(initalFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getMembers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setMembers(res.data)
      }).catch(err => console.log(err))
  }
  
  const postNewMember = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
      .then(res => {
        setMembers([res.data, ...members])
        setFormValues(initailFormValues);
      }).catch(err => {
        console.error(err);
        setFormValues(initailFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewMember(newMember);
  }
  
  useEffect(() => {
    getMembers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Form
        values={formValues}
        submit={formSubmit}
        change={inputChange}
        disabled={disabled}
        errors={formErrors}
      />
      {/* {
        members.map(member => {
          return(
            <Member key={member.id} details={member} />
          )
        })
      } */}
    </div>
  );
}

export default App;
