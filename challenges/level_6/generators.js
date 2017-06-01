// 6.10 Generator Functions 
// Complete the statement below about generator functions.
// Generator functions are special functions from which we can use the 
// yield keyword to return iterator objects.

// 6.11 Generators and for...of 
// Call the topicList() generator function from the for...of loop and assign 
// its result to a loop variable called topic so that it produces the following output:

// ES2015
// Semi-colons: good or bad?
// TypeScript

function *topicList(){
  yield "ES2015";
  yield "Semi-colons: good or bad?";
  yield "TypeScript";
}

for( let topic of topicList() ){
  console.log( topic );
}

// 6.12 Advanced Generators
// Check all other valid ways we can use our topicList() generator function.
function *topicList(){
  yield "ES2015";
  yield "Semi-colons: good or bad?";
  yield "TypeScript";
}
// Answer: 
// A
 let names = [...topicList()];
 console.log( names );
// B.
 let [first, ...rest] = topicList();
 console.log( first, rest );

 // 6.13 Refactoring to Generator Functions
 // Let's finish converting our custom iterator object to use a generator function.

 let user = {
  name: "sam", totalReplies: 17, isBlocked: false
};

user[Symbol.iterator] = function * (){

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  for(let p of properties){
    yield this[p];
  }
};

for(let p of user){
  console.log( p );
}
