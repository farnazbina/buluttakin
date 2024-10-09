import React from 'react'
import ReportCardItem from './ReportCardItem'
import {
  CardRecieveIcon,
  WalletIcon, 
  EmptyWalletIcon,
  OutlineChartIcon
} from '../../../assets/icons/index'

const ReportCards = () => {
  const reports = [
    {
      id: 1,
      icon: <WalletIcon />,
      report: '$143.223',
      description: 'Your bank balance'
    },
    {
      id: 2,
      icon: <OutlineChartIcon />,
      report: '$43.110',
      description: 'Your Tax'
    },
    {
      id: 3,
      icon: <EmptyWalletIcon />,
      report: '24',
      description: 'Employees working today'
    },
    {
      id: 4,
      icon: <CardRecieveIcon />,
      report: '$3.287',
      description: 'This week`s card spending'
    }
  ]
  return (
    <div className='grid grid-cols-4 gap-6'>
      {reports.map((item)=> {
        return(
          <ReportCardItem key={item.id} item={item} />
        )
      })}
    </div>
  )
}

export default ReportCards