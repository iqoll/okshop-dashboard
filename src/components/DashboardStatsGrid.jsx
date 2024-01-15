import { IoBagHandle, IoCart, IoPeople, IoPieChart } from 'react-icons/io5'

function DashboardStatsGrid() {
	return (
		<div className='flex gap-4 w-full'>
			<BoxWrapper>
				<div className='rounded-full w-12 h-12 flex items-center justify-center bg-sky-500'>
					<IoBagHandle className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>Total Sales</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							$3452.60
						</strong>
						<span className='text-sm text-green-500 pl-2'>+235</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className='rounded-full w-12 h-12 flex items-center justify-center bg-red-500'>
					<IoPieChart className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Total Expenses
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							$452.60
						</strong>
						<span className='text-sm text-green-500 pl-2'>+235</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className='rounded-full w-12 h-12 flex items-center justify-center bg-yellow-500'>
					<IoPeople className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Total Customers
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>267</strong>
						<span className='text-sm text-red-500 pl-2'>-4</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className='rounded-full w-12 h-12 flex items-center justify-center bg-green-500'>
					<IoCart className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>Total Orders</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							1432
						</strong>
						<span className='text-sm text-green-500 pl-2'>+23</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}
export default DashboardStatsGrid

function BoxWrapper({ children }) {
	return (
		<div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
			{children}
		</div>
	)
}
