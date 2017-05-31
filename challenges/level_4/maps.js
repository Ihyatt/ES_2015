// 4.9 The Map Data Structure 
// Complete the following statement about the Map data structure.
// Answer: 
// In the Map data structure, each key Correct is associated with one value

// 4.10 Issues With Objects as Maps 
// Given this initial code:
let author1 = { name: "Sam" };
let author2 = { name: "Tyler" };

let mostRecentReply = {};

mostRecentReply[author1] = "ES2015";
mostRecentReply[author2] = "Semi-colons: Good or Bad?";
// What will be the output of the following code?
console.log( mostRecentReply[author1] );
console.log( mostRecentReply[author2] );
// Answer:
// Semi-colons: Good or Bad?
// Semi-colons: Good or Bad?

// 4.11 The Map Object
// Complete the following statement about the Map object
// The Map object is a simple key/value data structure. We use the 
// *set* method to add entries, and the *get* method to read entries.

// 4.12 Adding Entries to a Map Object 
let author1 = { name: "Sam" };
let author2 = { name: "Tyler" };

let totalReplies = new Map();

totalReplies.set(author1,42);
totalReplies.set(author2, 15);


console.log( `Total Replies: ${totalReplies.get(author1)}` );
console.log( `Total Replies: ${totalReplies.get(author2)}` );

// 4.13 Maps and Objects
// In the code below, we are not using the most appropriate data structure. What’s wrong with this code?
let recentPosts = {};

getPost(postId, (data) => {
  recentPosts[data.author] = data.title;
});
// Answer 
// recentPosts should be a Map, since keys are unknown until runtime.


// 4.14 Objects Are Still Useful 
// In the code below, is it appropriate to use a JavaScript object as a map?
const USERS_PER_PAGE = 10;

let pageSettings = {
  perPage:  USERS_PER_PAGE,
  canSort:  false
};

// Yes. Since keys like perPage and canSort are previously defined, we don't run the risk of accidentally overwriting values.

// 4.15 Iterating Maps With for...of 
// Complete the for… of loop on the right so that it properly prints each entry. Remember to use array destructuring in order to assign 
// to user and postTitle at once.

let recentPosts = new Map();

recentPosts.set( "Sam", "ES2015" );
recentPosts.set( "Tyler", "CoffeeScript" );
recentPosts.set( "Brook",  "TypeScript" );

for(let [user, postTitle] of recentPosts){
  console.log(`${user} = ${postTitle}`);
}


// 4.16 WeakMaps
// Complete the following statement about WeakMaps.
// The WeakMap is a more memory efficient type of Map where only 
// *objects* can be passed as keys. Primitive data types such as strings, numbers, 
// booleans, etc. are not allowed.




