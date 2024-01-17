import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
	return (
		<div className='relative flex bg-neutral-100 h-screen w-screen overflow-x-hidden'>
			<div className='sticky flex top-0 left-0'>
				<Sidebar />
			</div>
			<div className='relative flex-1'>
				<div className='sticky top-0 left-0 z-10'>
					<Header />
				</div>
				<div className='p-4'>{<Outlet />}</div>
			</div>
		</div>
	)
}
