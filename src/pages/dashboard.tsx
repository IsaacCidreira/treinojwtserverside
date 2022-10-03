import React from 'react'
import Can from '../components/Can'
import { UseAuthContext } from '../context/AuthContext'
import { UseCan } from '../hooks/UseCan'
import { setupAPIClient } from '../services/api'
import withSSRAuth from '../utils/withSSRAuth'

const dashboard = () => {
  const { user, signOut } = UseAuthContext()
  const userCanSeeMetrics = UseCan({
    permissions: ['metrics.list']
  })

  return (
    <>
      <h1>dashboard: {user?.email}</h1>
      <button onClick={signOut}>Sign Out</button>
      <Can permissions={['metrics.list']}>
        {userCanSeeMetrics && <div>Métricas</div>}
      </Can>
    </>
  )
}

export default dashboard


export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me')
  return {
    props: {}
  }
})