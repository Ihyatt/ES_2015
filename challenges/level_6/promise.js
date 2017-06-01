// 6.2 The Lifecycle of a Promise
// Complete the following statement regarding the lifecycle of a Promise object.
// Creating a new Promise automatically sets it to the pending
// state. Then, it can move to 1 of these 2 states: the 
// fulfilled state if the resolve() handler is called, or the 
// state if the reject() handler is called.


// 6.3 Writing Promises 
// A new function called getReplies() is currently incomplete and it needs our help. 
// Here's an example of how it can be used once it's complete:

export default function getReplies(topicId){
  return new Promise(function( resolve, reject ){
    _getRepliesForTopic(topicId, function(data){
      let replies = data.replies;
      if(replies){
        resolve(replies);
      }else{
        let error = new Error("An error occurred");
        reject(error);
      }
    });
  });
}

// 6.4 Catching Errors From Promises 
// We've refactored our code and extended the functionality to filter out replies marked as abuse.
// However, any errors that occur during the execution of our Promise will break our code. Let's fix that.

getReplies(1)
.then(function(replies){
  return replies.filter( reply => !reply.isAbuse );
})
.then(function(filteredReplies){
  console.log( filteredReplies );
});