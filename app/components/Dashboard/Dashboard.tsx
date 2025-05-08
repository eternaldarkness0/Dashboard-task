import React from 'react'
import Panel from './Panel'
import WorkSection from './WorkSection'
import MyAccounts from './MyAccounts'

const Dashboard = () => {
  return (
    <div>
      <Panel />
      <WorkSection />
      <MyAccounts />
    </div>
  )
}

export default Dashboard