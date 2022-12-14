import type { NextPage } from 'next'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import style from '../styles/Home.module.css'
import withSSRGuest from '../utils/withSSRGuest'


const Home: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const data = {
      email,
      password
    }
    await signIn(data)
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type='submit'>Entrar</button>
    </form>
  )
}

export default Home


export const getServerSideProps = withSSRGuest(async (ctx) => {

  return {
    props: {
    }
  }
})
