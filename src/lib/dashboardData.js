const chartData = [
	{
		name: 'Jan',
		Expense: 4000,
		Income: 2400,
	},
	{
		name: 'Feb',
		Expense: 3000,
		Income: 1398,
	},
	{
		name: 'Mar',
		Expense: 2000,
		Income: 9800,
	},
	{
		name: 'Apr',
		Expense: 2780,
		Income: 3908,
	},
	{
		name: 'May',
		Expense: 1890,
		Income: 4800,
	},
	{
		name: 'Jun',
		Expense: 2390,
		Income: 3800,
	},
	{
		name: 'July',
		Expense: 3490,
		Income: 4300,
	},
	{
		name: 'Aug',
		Expense: 2000,
		Income: 9800,
	},
	{
		name: 'Sep',
		Expense: 2780,
		Income: 3908,
	},
	{
		name: 'Oct',
		Expense: 1890,
		Income: 4800,
	},
	{
		name: 'Nov',
		Expense: 2390,
		Income: 3800,
	},
	{
		name: 'Dec',
		Expense: 3490,
		Income: 4300,
	},
]

const buyerData = [
	{name: 'Male', value: 540},
	{name: 'Female', value: 630}
]

const recentOrdersData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17T03:24:00',
		order_total: '$435.50',
		current_order_status: 'PLACED',
		shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17T07:14:00',
		order_total: '$836.44',
		current_order_status: 'SHIPPED',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16T12:40:00',
		order_total: '$334.50',
		current_order_status: 'SHIPPED',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2022-05-14T03:24:00',
		order_total: '$876.00',
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'DELIVERED',
		shipment_address: 'Los Angeles, CA 90017'
	}
]

const popularProducts = [
	{
		id: '3432',
		product_name: 'Macbook M1 Pro 14"',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'LG Flex Canvas',
		product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'Apple Magic Touchpad',
		product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
		product_price: '$699.00',
		product_stock: 0
	},
	{
		id: '4342',
		product_name: 'Nothing Earbuds One',
		product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
		product_price: '$399.00',
		product_stock: 453
	},	
]

const products = [
	{
    id: '5432',
    product_name: 'Dell XPS 15',
    product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
    product_price: '$1299.00',
    product_stock: 78,
  },
  {
    id: '7635',
    product_name: 'Sony WH-1000XM4 Headphones',
    product_thumbnail: 'https://source.unsplash.com/100x100?headphones',
    product_price: '$349.00',
    product_stock: 102,
  },
  {
    id: '6231',
    product_name: 'Canon EOS R5 Camera',
    product_thumbnail: 'https://source.unsplash.com/100x100?camera',
    product_price: '$3799.00',
    product_stock: 15,
  },
  {
    id: '8321',
    product_name: 'Samsung 34-Inch Curved Gaming Monitor',
    product_thumbnail: 'https://source.unsplash.com/100x100?monitor',
    product_price: '$799.00',
    product_stock: 32,
  },
  {
    id: '7843',
    product_name: 'Fitbit Charge 5',
    product_thumbnail: 'https://source.unsplash.com/100x100?fitbit',
    product_price: '$179.00',
    product_stock: 120,
  },
  {
    id: '3654',
    product_name: 'Google Pixel 6 Pro',
    product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
    product_price: '$899.00',
    product_stock: 65,
  },
	{
		id: '3431',
		product_name: 'Macbook M2 Pro 14"',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '1245',
		product_name: 'Ipad Pro "',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '3432',
		product_name: 'Xiaomi',
		product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '3512',
		product_name: 'ASUS ROG',
		product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'LG Flex Canvas',
		product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'Apple Magic Touchpad',
		product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
		product_price: '$699.00',
		product_stock: 0
	},
	{
		id: '4342',
		product_name: 'Nothing Earbuds One',
		product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
		product_price: '$399.00',
		product_stock: 453
	},
	{
		id: '4452',
		product_name: 'Samsung Earbuds One',
		product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
		product_price: '$399.00',
		product_stock: 453
	},
	{
		id: '4122',
		product_name: 'Asus VivoBook',
		product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
		product_price: '$399.00',
		product_stock: 453
	},
]

const salesData = [
	{
		name: 'TV & Monitor',
		sold: 5,
	},
	{
		name: 'Laptop',
		sold: 50,
	},
	{
		name: 'Tablets',
		sold: 5,
	},
	{
		name: 'Smartphone',
		sold: 30,
	},
	{
		name: 'Smart Watch',
		sold: 15,
	},
	// Add more product categories as needed
]

export { chartData, buyerData, recentOrdersData , popularProducts, products, salesData}
