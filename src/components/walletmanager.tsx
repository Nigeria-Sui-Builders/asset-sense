import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit"
import { NFTCard } from "./nftCard"

const WalletManager = () => {
  const account = useCurrentAccount();
  const { data, isPending, error } = useSuiClientQuery(
    "getOwnedObjects",
    {
      owner: account?.address as string,
    },
    {
      enabled: !!account,
    }
  );

  if (!account) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Connect Your Wallet</h2>
          <p className="text-slate-400">Please connect your wallet to view your assets</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-6">
        <div className="bg-red-900/20 border border-red-800 rounded-xl p-8 max-w-md">
          <h2 className="text-xl font-bold text-red-400 mb-2">Error Loading Assets</h2>
          <p className="text-red-300">{error.message}</p>
        </div>
      </div>
    );
  }

  if (isPending || !data) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-muted">Loading your assets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-surface from-slate-950 via-blue-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-text mb-4">
            Your Wallet Assets
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-text-muted">
              {data.data.length} {data.data.length === 1 ? 'object' : 'objects'} found
            </p>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-text-muted text-sm font-mono">
                {account.address.slice(0, 6)}...{account.address.slice(-4)}
              </span>
            </div>
          </div>
        </div>

        {/* Objects Grid */}
        {data.data.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-text mb-2">No Assets Found</h2>
            <p className="text-text-muted">This wallet doesn't contain any objects yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.data.map((object) => (
              <NFTCard key={object.data?.objectId} objectId={object.data?.objectId as string} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletManager;


// import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";

// const WalletManager = ()=>{
//   const account = useCurrentAccount();
//   const { data, isPending, error } = useSuiClientQuery(
//     "getOwnedObjects",
//     {
//       owner: account?.address as string,
//     },
//     {
//       enabled: !!account,
//     },
//   );

//   if (!account) {
//     return;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (isPending || !data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {data.data.length === 0 ? (
//         <p>No objects owned by the connected wallet</p>
//       ) : (
//         <h1>Objects owned by the connected wallet</h1>
//       )}
//       {data.data.map((object) => (
//         <div key={object.data?.objectId}>
//           <p>Object ID: {object.data?.objectId}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default WalletManager;