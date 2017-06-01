// 6.6 About Iterables
// Complete the following statement about iterables.
// Iterables return an object called an 
// iterator This object knows how to access items from a 
// collection 1 at a time, while keeping track of its current 
// position within the sequence.

// 6.7 Iterator Objects
// An iterator object has a method called next(). Each time next() is called, 
// it returns an object with 2 specific properties. These are:
// Answer:
// done and value

// 6.8 Writing a Custom Iterator Object 
// Complete the following code so user becomes an iterable object.
// Finish the next() function so that it returns an object with done and value properties, both assigned to their proper values.
// Let's try and do this using the new object initializer shorthand where possible.
let user = {
  name: "sam", totalReplies: 17, isBlocked: false
};

user[Symbol.iterator] = function(){

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  let next = () => {
    if(count >= properties.length){
      isDone = true;
    }
    let value = this[properties[count++]];

    return { done: isDone, value };
  };
  return { next };
};