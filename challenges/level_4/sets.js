// 4.18 Limitations With Array 
// Which of the following describes a limitation of Arrays?
// Answer:
// Arrays don't enforce uniqueness of items. Duplicate entries are allowed.

// 4.19 Using Sets
// Follow the tasks in order to complete the unfinished code.

let tags = new Set();
tags.add("JavaScript");
tags.add("Programming");
tags.add("Web");

console.log(`Total items ${tags.size}`);

// 4.20 Sets and for...of
// Using for… of, loop through each element of the tags Set and assign it to a local 
// variable called tag so that it properly prints them to the console from inside the loop.

let tags = new Set();

tags.add("JavaScript");
tags.add("Programming");
tags.add("Web");

for( let tag of tags ){
  console.log(`Tag: ${tag}`);
}


// 4.21 Sets and Destructuring
// Using array destructuring, extract the first element of the tags set and assign it to the variable first.

let tags = new Set();

tags.add("JavaScript");
tags.add("Programming");
tags.add("Web");

let[first, , ] = tags;

console.log( `First tag: ${first}` );

// 4.22 WeakSets
// Complete the following statement about WeakSets.
// Answer:
// The WeakSet is a more memory efficient type of Set where only objects are allowed to be stored.


// 4.23 WeakSets in Action 
// Given the following code:
let allPosts = new WeakSet();

let post1 = { title: "ES2015" };
let post2 = { title: "CoffeeScript" };
let post3 = { title: "TypeScript" };

allPosts.add( post1 );
allPosts.add( post2 );
allPosts.add( post3 );

// How can we query the allPosts WeakSet to determine whether it has the post2 object?
allPosts.has(post2);


