function ProductForm() {
	return (
		<div className='bg-white rounded-sm p-4 w-[20rem] relative'>
			<span className='text-gray-700 font-medium'>Add new product</span>
			<form>
				<div className='flex flex-col mt-1 gap-2'>
					<label htmlFor=''>Product Name: </label>
					<input
						className='ml-2 border w-1/2 border-gray-200 focus:outline-none p-1 rounded-md'
						type='text'
					/>
				</div>
				<div className='flex flex-col mt-1 gap-2'>
					<label htmlFor=''>Product Description: </label>
					<textarea className='ml-2 border w-1/2 border-gray-200 focus:outline-none p-1 rounded-md' />
				</div>
				<div className='flex flex-col mt-1 gap-2'>
					<label htmlFor=''>Product Price: </label>
					<input
						className='ml-2 border w-1/2 border-gray-200 focus:outline-none p-1 rounded-md'
						type='text'
					/>
				</div>
				<div className='flex flex-col mt-1 gap-2'>
					<label htmlFor=''>Product Stock: </label>
					<input
						className='ml-2 border w-1/2 border-gray-200 focus:outline-none p-1 rounded-md'
						type='number'
					/>
				</div>
				<button
					type='submit'
					className='absolute top-1/2 right-10 rounded-sm bg-gray-500 p-2'
				>
					Submit
				</button>
			</form>
		</div>
	)
}
export default ProductForm
