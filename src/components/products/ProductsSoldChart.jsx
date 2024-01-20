import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import { salesData } from '../../lib/dashboardData'

const normalizedData = salesData.map((product) => ({
	...product,
	normalizedSold: product.sold / 100, //  assuming a maximum of 100 units sold
	normalizedRevenue: product.revenue / 5000, // assuming a maximum of $5000 in revenue
}))

export default function ProductsSoldChart() {
	return (
		<div className='bg-white p-4 flex flex-col flex-1 rounded-sm h-[22rem]'>
			<strong className='text-gray-700 font-medium'>
				Products Sold This Month
			</strong>
			<div className='mt-3 w-full flex-1 text-xs'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart
						width={500}
						height={300}
						data={normalizedData}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis domain={[0, 1]} />
						<Tooltip />
						<Legend />
						<Line
							type='monotone'
							dataKey='normalizedSold'
							stroke='#8884d8'
							activeDot={{ r: 8 }}
						/>
						<Line
							type='monotone'
							dataKey='normalizedRevenue'
							stroke='#82ca9d'
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
