const NFTCard = ({ nft, onVote, onHide }:any) => {
  return (
    <div className={`nft-card ${nft.legitimacy}`}>
      <div className="nft-image">
        <img src={nft.imageUrl} alt={nft.name} />
        <span className={`legitimacy-badge ${nft.legitimacy}`}>
          {nft.legitimacy}
        </span>
      </div>
      
      <div className="nft-info">
        <h4>{nft.name}</h4>
        <p className="nft-description">{nft.description}</p>
        <div className="nft-meta">
          <span className="package-id">
            Package: {nft.packageId}
          </span>
          <div className="community-rating">
            <button onClick={() => onVote(nft.id, 'up')}>
              👍 {nft.upvotes}
            </button>
            <button onClick={() => onVote(nft.id, 'down')}>
              👎 {nft.downvotes}
            </button>
          </div>
        </div>
        
        <div className="action-buttons">
          <button 
            className="keep-btn"
            onClick={() => onHide(nft.id, 'keep')}
          >
            Keep
          </button>
          <button 
            className="hide-btn"
            onClick={() => onHide(nft.id, 'hide')}
          >
            Hide in Vault
          </button>
          <button 
            className="transfer-btn"
            onClick={() => onHide(nft.id, 'transfer')}
          >
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;