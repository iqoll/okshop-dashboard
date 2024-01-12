import { Link } from 'react-router-dom'

export default function Dashboard() {
	return (
		<div>
			Dashboard{' '}
			<Link to='/products' className='underline'>
				Go to products
			</Link>
		</div>
	)
}
