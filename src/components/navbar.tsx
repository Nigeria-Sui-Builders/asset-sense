import { useEffect, useRef, useState } from 'react'
import Button from './ui/button'
import {
	ConnectModal,
	useCurrentAccount,
	useDisconnectWallet,
} from '@mysten/dapp-kit'
import ThemeToggle from './toggleTheme'
import { ChevronDown } from 'lucide-react'

export const NavBar = () => {
	const currentAccount = useCurrentAccount()
	const { mutate: disconnect } = useDisconnectWallet()
	const [open, setOpen] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const handleCopy = async () => {
		if (currentAccount?.address) {
			await navigator.clipboard.writeText(currentAccount.address)
			setMenuOpen(false)
		}
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setMenuOpen(false)
			}
		}

		const handleScroll = () => setMenuOpen(false)

		document.addEventListener('mousedown', handleClickOutside)
		window.addEventListener('scroll', handleScroll)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<nav className="bg-surface/20 backdrop-blur-md px-2 fixed w-[85%] left-1/2 -translate-x-1/2 rounded-xl shadow-lg border border-outline top-6 z-5 transition-colors duration-200 ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<p className="text-3xl font-bold text-text">Asset Sense</p>
					<div className="flex gap-2">
						<div className="flex gap-4 relative">
							{currentAccount ? (
								<div
									className="relative"
									ref={dropdownRef}
								>
									<Button
										size="lg"
										onClick={() => setMenuOpen((prev) => !prev)}
										variant="outline"
										classname="flex items-center gap-2"
									>
										<p className="text-sm">
											{currentAccount.address.slice(0, 6)}...
											{currentAccount.address.slice(-4)}
										</p>
										<ChevronDown
											className={`w-4 h-4 transition-transform ${
												menuOpen ? 'rotate-180' : ''
											}`}
										/>
									</Button>

									{/* Dropdown */}
									{menuOpen && (
										<div className="absolute right-0 mt-2 w-60 bg-surface border border-outline rounded-lg shadow-lg z-50">
											<button
												onClick={handleCopy}
												className="w-full px-4 py-2 text-left text-text hover:bg-primary/40 text-sm"
											>
												Copy Address
											</button>
											<button
												onClick={() => {
													disconnect()
													setMenuOpen(false)
												}}
												className="w-full px-4 py-2 text-left text-sm hover:bg-primary/20 text-error"
											>
												Disconnect
											</button>
										</div>
									)}
								</div>
							) : (
								<ConnectModal
									trigger={
										<Button
											variant={!!currentAccount ? 'outline' : 'primary'}
											disabled={!!currentAccount}
										>
											<p>Connect Wallet</p>
										</Button>
									}
									open={open}
									onOpenChange={(isOpen) => setOpen(isOpen)}
								/>
							)}
						</div>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</nav>
	)
}
