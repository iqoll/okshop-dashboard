import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

// Custom lib
import {
	DASHBOARD_SIDEBAR_BOTTOM_LINKS,
	DASHBOARD_SIDEBAR_LINKS,
} from '../../lib/constants/Navigation'

const linkClasses =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	return (
		<div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
			{/* Logo */}
			<div className='flex items-center gap-2 px-1 py-3'>
				<FcBullish fontSize={24} />
				<span className='text-neutral-100 text-lg'>OkShop</span>
			</div>
			{/* Main Links */}
			<div className='flex flex-col flex-1 py-8 gap-0.5'>
				{DASHBOARD_SIDEBAR_LINKS.map((item) => (
					<SidebarLink key={item.key} item={item} />
				))}
			</div>
			{/* Bottom Links */}
			<div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
					<SidebarLink key={item.key} item={item} />
				))}
			</div>
			{/* Logout */}
			<div className={classNames('text-red-500 cursor-pointer', linkClasses)}>
				<span className='text-xl'>
					<HiOutlineLogout />
				</span>
				Logout
			</div>
		</div>
	)
}

function SidebarLink({ item }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={item.path}
			className={classNames(
				pathname === item.path
					? 'text-white bg-neutral-700'
					: 'text-neutral-400',
				linkClasses
			)}
		>
			<span className='text-xl'>{item.icon}</span>
			{item.label}
		</Link>
	)
}
