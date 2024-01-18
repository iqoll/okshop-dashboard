// import { Link } from 'react-router-dom'
import BuyerProfileChart from '../components/dashboard/BuyerProfileChart'
import DashboardStatsGrid from '../components/dashboard/DashboardStatsGrid'
import PopularProducts from '../components/dashboard/PopularProducts'
import RecentOrders from '../components/dashboard/RecentOrders'
import TransactionChart from '../components/dashboard/TransactionChart'

export default function Dashboard() {
	return (
		<div className='flex flex-col gap-4'>
			<DashboardStatsGrid />
			<div className='flex flex-col md:flex-row gap-4 w-full'>
				<TransactionChart />
				<BuyerProfileChart />
			</div>
			<div className='flex flex-col md:flex-row gap-4 w-full'>
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}
