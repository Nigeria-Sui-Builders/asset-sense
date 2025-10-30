import { ConnectModal, useCurrentAccount } from '@mysten/dapp-kit'
import { useState } from 'react'
import Button from './ui/button'

const LandingPage = () => {
	const currentAccount = useCurrentAccount()
	const [open, setOpen] = useState(false)
	return (
		<div className="min-h-screen bg-surface">
			{/* Hero Section */}
			<header className=" px-6 pt-20 md:pt-28 max-w-5xl mx-auto text-center">
				<div className="space-y-2">
					<h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight text-text    ">
						Asset Sense
					</h1>
					<p className="text-xl md:text-2xl text-text-muted  max-w-4xl mx-auto leading-relaxed font-light">
						Your intelligent Sui wallet manager. Detect spam, organize assets,
						and keep your wallet secure and clutter-free.
					</p>

					<div className="pt-12">
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
					</div>

					<div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-text-muted">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-green-400 rounded-full"></div>
							<span>100% Free to Use</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
							<span>No Registration Required</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
							<span>Non-Custodial</span>
						</div>
					</div>
				</div>
			</header>

			{/* Features Section */}
			<section className="px-6 py-8 max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
						Powerful Features for Wallet Management
					</h2>
					<p className="text-text-muted text-lg max-w-2xl mx-auto">
						Asset Sense provides comprehensive tools to help you maintain a
						clean, secure, and organized Sui wallet
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-12">
					{/* Feature Card 1 */}
					<div className="group bg-text/10 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
						<div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
							🛡️
						</div>
						<h3 className="text-2xl font-bold text-text mb-4 tracking-tight">
							Security Scan
						</h3>
						<p className="text-text-muted leading-relaxed text-lg mb-4">
							Identify potentially harmful NFTs and protect your assets from
							malicious airdrops and phishing attempts.
						</p>
						<ul className="space-y-2 text-text-muted">
							<li className="flex items-start gap-2">
								<span>Real-time threat detection</span>
							</li>
							<li className="flex items-start gap-2">
								<span>Smart contract analysis</span>
							</li>
							<li className="flex items-start gap-2">
								<span>Suspicious pattern recognition</span>
							</li>
						</ul>
					</div>

					{/* Feature Card 2 */}
					<div className="group bg-text/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
						<div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
							🗂️
						</div>
						<h3 className="text-2xl font-bold text-text mb-4 tracking-tight">
							Smart Organization
						</h3>
						<p className="text-text-muted leading-relaxed text-lg mb-4">
							Automatically categorize your assets with AI-powered
							classification for effortless wallet management.
						</p>
						<ul className="space-y-2 text-text-muted">
							<li className="flex items-start gap-2">
								<span>Auto-categorization by type</span>
							</li>
							<li className="flex items-start gap-2">
								<span>Custom folder creation</span>
							</li>
							<li className="flex items-start gap-2">
								<span>Spam filtering & hiding</span>
							</li>
						</ul>
					</div>

					{/* Feature Card 3 */}
					<div className="group bg-text/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
						<div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
							🧹
						</div>
						<h3 className="text-2xl font-bold text-text mb-4 tracking-tight">
							Easy Cleanup
						</h3>
						<p className="text-text-muted leading-relaxed text-lg mb-4">
							One-click actions to hide, transfer, or remove unwanted items and
							reclaim your wallet space.
						</p>
						<ul className="space-y-2 text-text-muted">
							<li className="flex items-start gap-2">
								<span>Bulk selection & actions</span>
							</li>
							<li className="flex items-start gap-2">
								<span>Safe asset burning</span>
							</li>
							<li className="flex items-start gap-2">
								<span>Quick hide/unhide toggles</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="px-6 py-4 max-w-8xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
						How Asset Sense Works
					</h2>
					<p className="text-text-muted text-lg max-w-2xl mx-auto">
						Get started in three simple steps
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-12">
					<div className="text-center">
						<div className="w-16 h-16 border-2 border-text rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-text">
							1
						</div>
						<h3 className="text-xl font-bold text-text mb-3">
							Connect Your Wallet
						</h3>
						<p className="text-text-muted leading-relaxed">
							Connect your Sui wallet securely. We never store your private keys
							or request sensitive information.
						</p>
					</div>

					<div className="text-center">
						<div className="w-16 h-16 border-2 border-text rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-text">
							2
						</div>
						<h3 className="text-xl font-bold text-text mb-3">Scan & Review</h3>
						<p className="text-text-muted leading-relaxed">
							We instantly scan your wallet, identify spam via our community
							registry, categorize assets, and flags potential threats.
						</p>
					</div>

					<div className="text-center">
						<div className="w-16 h-16 border-2 border-text rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-text">
							3
						</div>
						<h3 className="text-xl font-bold text-text mb-3">Clean Up</h3>
						<p className="text-text-muted leading-relaxed">
							Take action with one-click bulk operations. Hide spam, organize
							favorites, or safely remove unwanted NFTs.
						</p>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="px-6 py-16 max-w-4xl mx-auto text-center">
				<div className="bg-text/10 rounded-3xl p-12">
					<h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
						Ready to Clean Your Wallet?
					</h2>
					<p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
						Join thousands of Sui users who have decluttered their wallets and
						improved their Web3 experience with Asset Sense.
					</p>
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
				</div>
			</section>
		</div>
	)
}

export default LandingPage
