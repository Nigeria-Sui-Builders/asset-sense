import { useState } from 'react';
import NFTCard from './nftcard';

function WalletManager({ onDisconnect }:any) {
  const [filter, setFilter] = useState('all');
  const [groupBy, setGroupBy] = useState('type');

  const groupedNfts = [
    {
      name: 'Legit',
      items: [] // Populate with legit NFTs
    },
    {
      name: 'Dubious',
      items: [] // Populate with dubious NFTs
    },
    {
      name: 'Scam',
      items: [] // Populate with scam NFTs
    }
  ];

  return (
    <div className="wallet-manager">
      {/* Header with Controls */}
      <header className="wallet-header">
        <div className="wallet-info">
          <h2>Wallet Contents</h2>
          <span className="wallet-address">
            {/* {wallet.address} */}
          </span>
        </div>
        
        <div className="controls">
          {/* Filter Toggle Header */}
          <div className="filter-group">
            <span>Filter:</span>
            <button 
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={filter === 'legit' ? 'active' : ''}
              onClick={() => setFilter('legit')}
            >
              Legit
            </button>
            <button 
              className={filter === 'dubious' ? 'active' : ''}
              onClick={() => setFilter('dubious')}
            >
              Dubious
            </button>
            <button 
              className={filter === 'scam' ? 'active' : ''}
              onClick={() => setFilter('scam')}
            >
              Scam
            </button>
          </div>

          {/* Group By Toggle */}
          <div className="group-toggle">
            <span>Group by:</span>
            <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
              <option value="type">NFT Type</option>
              <option value="legitimacy">Legitimacy</option>
              <option value="package">Package ID</option>
            </select>
          </div>
        </div>
      </header>

      {/* NFT Grid */}
      <div className="nft-grid-container">
        {groupedNfts.map((group: any) => (
          <div key={group.name} className="nft-group">
            <h3 className="group-title">{group.name} ({group.items.length})</h3>
            <div className="nft-grid">
              {group.items.map((nft: any) => (
                <NFTCard
                  key={nft.id} 
                  nft={nft}
                  onVote={"handleVoteNFT"}
                  onHide={"handleHideNFT"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WalletManager;