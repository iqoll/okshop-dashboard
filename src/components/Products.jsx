import { Link } from 'react-router-dom'

export default function Products() {
	return (
		<div>
			Products{' '}
			<Link to='/' className='underline'>
				Go to Dashboard
			</Link>
		</div>
	)
}
