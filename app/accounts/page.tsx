import React from 'react'
import PanelAccount from '@/app/components/AccountPageSection/PanelAccount'
import LogisticsCorp from '../components/AccountPageSection/LogisticsCorp'
import Metrics from '../components/AccountPageSection/Metrics'
import Policies from '../components/AccountPageSection/Policies'
import AccountStatus from '../components/AccountPageSection/AccountStatus'
import AccountDetails from '../components/AccountPageSection/AccountDetails'
import Communication from '../components/AccountPageSection/Communication'
import AccountPolicies from '../components/AccountPageSection/AccountPolicies'

const AccountPage = () => {
  return (
    <div>
      <PanelAccount />
      <LogisticsCorp />
      <Metrics />
      <Policies />
      <AccountStatus />
      <AccountDetails />
      <Communication />
      <AccountPolicies />
    </div>
  )
}

export default AccountPage