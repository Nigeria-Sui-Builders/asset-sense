import { NavBar } from './components/navbar'
import { useState } from 'react'
import WalletManager from './components/walletmanager';
import LandingPage from './components/landingpage';

const App = () => {
	const [connected, setConnected] = useState(false);
	const [wallet, setWallet] = useState(null);
	return (
		<div className="bg-surface min-h-screen transition-colors duration-300">
			<NavBar />
      {!connected ? (
        <LandingPage/>
      ) : (
        <WalletManager
          wallet={wallet}
          onDisconnect={() => setConnected(false)}
        />
      )}
		</div>
	)
}

export default App
