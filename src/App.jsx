import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Transactions from './pages/Transactions'
import Messages from './pages/Messages'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index={true} element={<Dashboard />} />
					<Route path='products' element={<Products />} />
					<Route path='orders' element={<Orders />} />
					<Route path='customers' element={<Customers />} />
					<Route path='transactions' element={<Transactions />} />
					<Route path='messages' element={<Messages />} />
				</Route>
				<Route path='login' element={<div>Login Page</div>}></Route>
			</Routes>
		</Router>
	)
}

export default App
