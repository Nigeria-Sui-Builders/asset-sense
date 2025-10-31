import { useSuiClientQuery } from "@mysten/dapp-kit";

export const NFTCard = ({ objectId }: { objectId: string }) => {
  const { data: objectData, isPending, error } = useSuiClientQuery(
    "getObject",
    {
      id: objectId,
      options: {
        showContent: true,
        showDisplay: true,
        showType: true,
        showOwner: true,
      },
    }
  );

  if (isPending) {
    return (
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse">
        <div className="h-48 bg-slate-700 rounded-lg mb-4"></div>
        <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-slate-700 rounded w-1/2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-800 rounded-xl p-6">
        <p className="text-red-400 text-sm">Failed to load object</p>
        <p className="text-red-300 text-xs mt-2">{error.message || 'Unknown error'}</p>
      </div>
    );
  }

  const display = objectData?.data?.display?.data;
  const content = objectData?.data?.content;
  const type = objectData?.data?.type;

  // Extract name, description, and image
  const name = display?.name || (content && content.dataType === "moveObject" && typeof content.fields === 'object' && content.fields !== null ? (content.fields as any).name : undefined) || "Unnamed Object";
  const description = display?.description || (content && content.dataType === "moveObject" && typeof content.fields === 'object' && content.fields !== null ? (content.fields as any).description : undefined) || "";
  const imageUrl = display?.image_url || display?.img_url || "";
  
  // Shorten object type for display
  const shortType = type ? type.split("::").pop() : "Unknown Type";

  return (
    <div className="group bg-text/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 bg-text/20 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23334155" width="200" height="200"/><text x="50%" y="50%" font-size="60" text-anchor="middle" dy=".3em" fill="%2394a3b8">?</text></svg>';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Type Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-primary backdrop-blur-sm text-text text-xs font-semibold rounded-full">
            {shortType}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-text mb-2 truncate" title={name}>
          {name}
        </h3>
        
        {description && (
          <p className="text-text-muted text-sm mb-4 line-clamp-2" title={description}>
            {description}
          </p>
        )}

        {/* Object ID */}
        <div className="mt-4 pt-4 border-t border-slate-700">
          <p className="text-xs text-text-muted font-mono truncate" title={objectId}>
            ID: {objectId.slice(0, 8)}...{objectId.slice(-6)}
          </p>
        </div>

        {/* Additional metadata if available */}
        {content && content.dataType === "moveObject" && typeof content.fields === 'object' && content.fields !== null && (
          <div className="mt-3 flex flex-wrap gap-2">
            {Object.keys(content.fields).slice(0, 3).map((key) => (
              key !== 'name' && key !== 'description' && key !== 'id' && (
                <span key={key} className="px-2 py-1 bg-text/10 text-text-muted text-xs rounded">
                  {key}
                </span>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};