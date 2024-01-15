import {
	HiOutlineBell,
	HiOutlineChatAlt,
	HiOutlineSearch,
} from 'react-icons/hi'
import { Popover, Transition, Menu } from '@headlessui/react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

export default function Header() {
	const navigate = useNavigate()

	return (
		<div className='flex justify-between items-center bg-white h-16 px-4 border-b border-gray-200'>
			{/* Search Section */}
			<div className='relative'>
				<HiOutlineSearch
					fontSize={20}
					className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'
				/>
				<input
					type='text'
					placeholder='Search...'
					className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4'
				/>
			</div>
			{/* Right Section */}
			<div className='flex items-center gap-2 mr-2'>
				{/* Messages */}
				<Popover className='relative'>
					{({ open }) => (
						/* Use the `open` state to conditionally change the direction of the chevron icon. */
						<>
							<Popover.Button
								className={classNames(
									open && 'bg-gray-100',
									'inline-flex items-center p-1.5 rounded-sm text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineChatAlt fontSize={24} />
							</Popover.Button>
							<Transition
								enter='transition ease-out duration-200'
								enterFrom='opacity-0 translate-y-1'
								enterTo='opacity-100 translate-y-0'
								leave='transition ease-in duration-150'
								leaveFrom='opacity-100 translate-y-0'
								leaveTo='opacity-0 translate-y-1'
							>
								<Popover.Panel className='absolute right-0 z-10 mt-2.5 transform w-80'>
									<div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
										<strong className='text-gray-700 font-medium'>
											Messages
										</strong>
										<div className='mt-2 py-1 text-sm'>
											This is messages panel.
										</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>

				{/* Notification */}
				<Popover className='relative'>
					{({ open }) => (
						/* Use the `open` state to conditionally change the direction of the chevron icon. */
						<>
							<Popover.Button
								className={classNames(
									open && 'bg-gray-100',
									'inline-flex items-center p-1.5 rounded-sm text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineBell fontSize={24} />
							</Popover.Button>
							<Transition
								enter='transition ease-out duration-200'
								enterFrom='opacity-0 translate-y-1'
								enterTo='opacity-100 translate-y-0'
								leave='transition ease-in duration-150'
								leaveFrom='opacity-100 translate-y-0'
								leaveTo='opacity-0 translate-y-1'
							>
								<Popover.Panel className='absolute right-0 z-10 mt-2.5 transform w-80'>
									<div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
										<strong className='text-gray-700 font-medium'>
											Messages
										</strong>
										<div className='mt-2 py-1 text-sm'>
											This is messages panel.
										</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>

				{/* Profile */}
				<Menu as='div' className='relative'>
					<div>
						<Menu.Button className='ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400'>
							<span className='sr-only'>Open user menu</span>
							<div
								className='h-10 w-10 rounded-full bg-cover bg-no-repeat bg-center bg-sky-500'
								style={{
									backgroundImage:
										'url("https://source.unsplash.com/80x80?face")',
								}}
							>
								<span className='sr-only'>John Doe</span>
							</div>
						</Menu.Button>
						<Transition
							enter='transition ease-out duration-100'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-75'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'
						>
							{/* Profile toggle select */}
							<Menu.Items className='origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
								{/* Profile button */}
								<Menu.Item>
									{({ active }) => (
										<div
											className={classNames(
												active && 'bg-gray-100',
												'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
											)}
											onClick={() => navigate('/profile')}
										>
											Your Profile
										</div>
									)}
								</Menu.Item>

								{/* Setting button */}
								<Menu.Item>
									{({ active }) => (
										<div
											className={classNames(
												active && 'bg-gray-100',
												'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
											)}
											onClick={() => navigate('/settings')}
										>
											Settings
										</div>
									)}
								</Menu.Item>

								{/* Logout button */}
								<Menu.Item>
									{({ active }) => (
										<div
											className={classNames(
												active && 'bg-gray-100',
												'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
											)}
											onClick={() => navigate('/logout')}
										>
											Logout
										</div>
									)}
								</Menu.Item>
							</Menu.Items>
						</Transition>
					</div>
				</Menu>
			</div>
		</div>
	)
}
