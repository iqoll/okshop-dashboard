import { Link } from 'react-router-dom'

export default function Dashboard() {
	return (
		<div>
			<p>dashboard</p>
			<Link to='/products' className='underline'>
				Go to products
			</Link>
		</div>
	)
}
