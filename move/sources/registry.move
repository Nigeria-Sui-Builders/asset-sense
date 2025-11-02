module assetsense::registry;

const EAlreadyVoted: u64 = 0;

public struct VoteRecord has store {
    object_id: address,
    upvotes: u32,
    downvotes: u32,
    voters: vector<address>,
}

public struct REGISTRY has key {
    id: UID,
    votes: vector<VoteRecord>
}

// Create and publish the global registry
fun init(ctx: &mut TxContext) {
    let registry = REGISTRY {
        id: object::new(ctx),
        votes: vector::empty(),
    };
    transfer::share_object(registry);
}

// Upvote an object — creates record if not existing
public fun upvote(registry: &mut REGISTRY, object_id: address, ctx: &TxContext) {
    vote_internal(registry, object_id, true, ctx);
}

// Downvote an object — creates record if not existing
public fun downvote(registry: &mut REGISTRY, object_id: address, ctx: &TxContext) {
    vote_internal(registry, object_id, false, ctx);
}

fun vote_internal(registry: &mut REGISTRY, object_id: address, is_upvote: bool, ctx: &TxContext) {
    let sender = tx_context::sender(ctx);

    // Find if this object is already tracked
    let (exists, index) = find_vote_record(&registry.votes, object_id);
    
    if (!exists) {
        // Create a new vote record
        let mut voters = vector::empty<address>();
        vector::push_back(&mut voters, sender);
        let record = if (is_upvote) {
            VoteRecord { 
                object_id: object_id, 
                upvotes: 1, 
                downvotes: 0, 
                voters: voters 
            }
        } else {
            VoteRecord { 
                object_id: object_id, 
                upvotes: 0, 
                downvotes: 1, 
                voters: voters 
            }
        };
        vector::push_back(&mut registry.votes, record);
        return
    };

    // Object already exists — retrieve it
    let record = vector::borrow_mut(&mut registry.votes, index);

    // Ensure user hasn't already voted
    let has_voted = has_voted_before(&record.voters, sender);
    assert!(!has_voted, EAlreadyVoted);

    // Record the new vote
    vector::push_back(&mut record.voters, sender);
    if (is_upvote) {
        record.upvotes = record.upvotes + 1;
    } else {
        record.downvotes = record.downvotes + 1;
    };
}

// Get upvote/downvote counts for an object
public fun get_vote_counts(registry: &REGISTRY, object_id: address): (u32, u32) {
    let (exists, index) = find_vote_record(&registry.votes, object_id);
    if (!exists) {
        return (0, 0)
    };
    let record = vector::borrow(&registry.votes, index);
    (record.upvotes, record.downvotes)
}

// Check whether a given address has voted on an object
public fun has_voted(registry: &REGISTRY, object_id: address, user: address): bool {
    let (exists, index) = find_vote_record(&registry.votes, object_id);
    if (!exists) {
        return false
    };
    let record = vector::borrow(&registry.votes, index);
    has_voted_before(&record.voters, user)
}

// Helper function to find a vote record by object_id
fun find_vote_record(votes: &vector<VoteRecord>, object_id: address): (bool, u64) {
    let len = vector::length(votes);
    let mut i = 0;
    while (i < len) {
        let record = vector::borrow(votes, i);
        if (record.object_id == object_id) {
            return (true, i)
        };
        i = i + 1;
    };
    (false, 0)
}

fun has_voted_before(voters: &vector<address>, user: address): bool {
    let len = vector::length(voters);
    let mut i = 0;
    while (i < len) {
        if (vector::borrow(voters, i) == &user) {
            return true
        };
        i = i + 1;
    };
    false
}



// module assetsense::registry;

// const EAlreadyVoted: u64 = 0;


// public struct VoteRecord has store {
//     object_id: address,
//     upvotes: u32,
//     downvotes: u32,
//     voters: vector<address>,
// }

// public struct REGISTRY has key {
//     id: UID,
//     votes: vector<VoteRecord>
// }

// // Create and publish the global registry
// fun init(ctx: &mut TxContext) {
//     let registry = REGISTRY {
//         id: object::new(ctx),
//         votes: vector::empty(),
//     };
//     transfer::share_object(registry);
// }

// // Upvote an object — creates record if not existing
// public fun upvote( registry: &mut REGISTRY, voteRecord: VoteRecord, ctx: &TxContext){
//     vote_internal(registry, voteRecord, true, ctx);
// }

// // Downvote an object — creates record if not existing
// public fun downvote( registry: &mut REGISTRY, voteRecord: VoteRecord, ctx: &TxContext) {
//     vote_internal(registry, voteRecord, false, ctx);
// }

// fun vote_internal( registry: &mut REGISTRY, voteRecord: VoteRecord, is_upvote: bool, ctx: &TxContext) {
//     let sender = tx_context::sender(ctx);

//     // Check if this object is already tracked
//     let exists = vector::contains(&registry.votes, &voteRecord);
//     if (!exists) {
//         // Create a new vote record
//         let mut voters = vector::empty<address>();
//         vector::push_back(&mut voters, sender);
//         let record = if (is_upvote) {
//             VoteRecord { object_id :voteRecord.object_id , upvotes: 1, downvotes: 0, voters: voters }
//         } else {
//             VoteRecord { object_id:voteRecord.object_id, upvotes: 0, downvotes: 1, voters: voters }
//         };
//         vector::push_back(&mut registry.votes, record);
//         return;
//     };

//     // Object already exists — retrieve it
//     let mut record = vector::borrow_mut(&mut registry.votes, &voteRecord);

//     // Ensure user hasn’t already voted
//     let has_voted = has_voted_before(&record.voters, sender);
//     assert!(!has_voted, EAlreadyVoted);

//     // Record the new vote
//     vector::push_back(&mut record.voters, sender);
//     if (is_upvote) {
//         record.upvotes = record.upvotes + 1;
//     } else {
//         record.downvotes = record.downvotes + 1;
//     };
// }

// // Get upvote/downvote counts for an object
// public fun get_vote_counts(registry: &REGISTRY, voteRecord:VoteRecord): (u32, u32) {
//     if (!vector::contains(&registry.votes, &voteRecord)) {
//         return (0, 0);
//     };
//     let record = vector::borrow(&registry.votes, &voteRecord);
//     (record.upvotes, record.downvotes)
// }

// // Check whether a given address has voted on an object
// public fun has_voted( registry: &REGISTRY, voteRecord:VoteRecord, user: address): bool {
//     if (!vector::contains(&registry.votes, &voteRecord)) {
//         return false;
//     };
//     let record = vector::borrow(&registry.votes, &voteRecord);
//     has_voted_before(&record.voters, user)
// }

// fun has_voted_before(voters: &vector<address>, user: address): bool {
//     let len = vector::length(voters);
//     let mut i = 0;
//     while (i < len) {
//         if (vector::borrow(voters, i) == &user) {
//             return true;
//         };
//         i = i + 1;
//     };
//     false
// }