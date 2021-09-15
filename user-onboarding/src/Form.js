import React from 'react'

// form needs name, email, password, terms of service checked, and submit button

export default function Form(props) {
    const {values, submit, change, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value ;
        change(name, valueToUse)
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <h2>New User Sign Up</h2>
            
            {/* errors */}
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>

            <div className='form-inputs'>
                <label>Name: 
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        placeholder='name'
                    />
                </label>

                <label>Email: 
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                        placeholder='email'
                    />
                </label>

                <label>Password: 
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                        placeholder='password'
                    />
                </label>

                <label>Terms of Service: 
                    <input
                        type='checkbox'
                        name='terms'
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
                <button disabled={disabled}>Sumbit</button>
            </div>
        </form>
    )
}