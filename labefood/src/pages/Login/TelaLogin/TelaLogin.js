import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import useForm from '../../../hooks/useForm'
import {Login} from '../../../services/user'

const TelaLogin = () => {

  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const navigate = useNavigate()

  const onSubmitFormLogin = (e) => {
    e.preventDefault()
    Login(form, clear, navigate)
  }

  return (
    <form onSubmit={onSubmitFormLogin}>

      <input
      name='email'
      label="User Email"
      value={form.email}
      type={'email'}
      onChange={onChange}
      required
      />

      <input
      name='password'
      placeholder='password'
      value={form.password}
      type={'password'}
      onChange={onChange}
      required
      />

      <button type='submit'>Enviar</button>
      
    </form>
  )
}

export default TelaLogin