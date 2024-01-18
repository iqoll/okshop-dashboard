import { Link } from 'react-router-dom'
import { products } from '../../lib/dashboardData'
import { useState } from 'react'

const productsPerPage = 9 // Number of products to display per page

function ProductList() {
	const [currentPage, setCurrentPage] = useState(1)

	// Calculate the index range for the current page
	const startIndex = (currentPage - 1) * productsPerPage
	const endIndex = startIndex + productsPerPage

	// Slice the products array to get products for the current page
	const currentProducts = products.slice(startIndex, endIndex)

	// Calculate the total number of pages
	const totalPages = Math.ceil(products.length / productsPerPage)

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage)
	}

	return (
		<div className='relative w-full bg-white p-4 rounded-sm h-[22rem]'>
			<span className='text-gray-700 font-medium'>Product List</span>
			<div className='grid mt-4 grid-cols-3 mx-auto gap-2'>
				{currentProducts.map((product) => (
					<Link
						to={`/products/${product.id}`}
						key={product.id}
						className='flex items-center gap-2 hover:no-underline'
					>
						<div className='w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden'>
							<img
								className='w-full h-full object-cover rounded-sm'
								src={product.product_thumbnail}
								alt={product.product_name}
							/>
						</div>
						<div>
							<div className='text-gray-500 hover:text-gray-700'>
								{product.product_name}
							</div>
							<div className='text-green-500'>{product.product_price}</div>
							<div>{product.product_stock}</div>
						</div>
					</Link>
				))}
			</div>

			{/* Paginations control */}
			<div className='flex justify-center absolute bottom-10 left-1/2'>
				{Array.from({ length: totalPages }, (_, index) => index + 1).map(
					(page) => (
						<button
							key={page}
							onClick={() => handlePageChange(page)}
							className={`mx-1 px-2 py-1 rounded-sm ${
								currentPage === page ? 'bg-gray-300' : 'bg-white'
							}`}
						>
							{page}
						</button>
					)
				)}
			</div>
		</div>
	)
}
export default ProductList
