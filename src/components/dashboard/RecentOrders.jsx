import { Link } from 'react-router-dom'
import { recentOrdersData } from '../../lib/dashboardData'
import { getOrderStatus } from '../../lib/utils'

function RecentOrders() {
	return (
		<div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
			<strong className='text-gray-700 font-medium'>Recent Orders</strong>
			<div className='mt-3'>
				<table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
					<thead>
						<tr>
							<td>ID</td>
							<td>Product ID</td>
							<td>Customer Name</td>
							<td>Order Date</td>
							<td>Order Total</td>
							<td>Shipping Address</td>
							<td>Order Status</td>
						</tr>
					</thead>
					<tbody>
						{recentOrdersData.map((order) => (
							<tr key={order.id}>
								<td>#{order.id}</td>
								<td>
									<Link to={`/products/${order.product_id}`}>
										{order.product_id}
									</Link>
								</td>
								<td>
									<Link to={`/customers/${order.customer_name}`}>
										{order.customer_name}
									</Link>
								</td>
								<td>{new Date(order.order_date).toLocaleDateString()}</td>
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
								<td>{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
export default RecentOrders
