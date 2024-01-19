// import { Link } from 'react-router-dom'

import ProductForm from '../components/products/ProductForm'
import ProductList from '../components/products/ProductList'
import ProductsSoldChart from '../components/products/ProductsSoldChart'

export default function Products() {
	return (
		<div className='flex flex-col gap-4'>
			<ProductList />
			<div className='mt-3 w-full flex gap-4'>
				<ProductForm />
				<ProductsSoldChart />
			</div>
		</div>
	)
}
