// import { Link } from 'react-router-dom'
import BuyerProfileChart from '../components/BuyerProfileChart'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import PopularProducts from '../components/PopularProducts'
import RecentOrders from '../components/RecentOrders'
import TransactionChart from '../components/TransactionChart'

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
