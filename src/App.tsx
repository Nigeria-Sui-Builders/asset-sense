import { NavBar } from './components/navBar'
import WalletManager from './components/walletManager'
import LandingPage from './components/landingPage'
import { useCurrentAccount } from '@mysten/dapp-kit'

const App = () => {
	const currentAccount = useCurrentAccount()
	return (
		<div className="bg-surface min-h-screen transition-colors duration-300">
			<NavBar />
      {!currentAccount ? (
        <LandingPage/>
      ) : (
        <WalletManager />
      )}
		</div>
	)
}

export default App
