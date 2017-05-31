// 4.2 Assigning With Array Destructuring
// Which of the following uses the correct syntax for array destructuring?
// Answer
let [a, b, c] = ["Programming", "Web", "JavaScript"];

// 4.3 Destructuring and Rest Parameters 
// Complete the code so that it assigns the first element of the array to the 
// variable first, and the second and third elements of the array to a single 
// variable called remainingUsers. Remember to use the rest parameter syntax from 
// inside the array destructuring assignment.
let [first,...remainingUsers] = ["Sam", "Tyler", "Brook"];
addActiveUsers(first, remainingUsers);

// 4.4 Destructuring From Return Values 
// Add a return value for the buildTopicInfo() function that will make the rest of the 
// code function correctly.

function buildTopicInfo(topic){
  let title = `<h1>${topic.title}</h1>`;
  let author = `<small>${topic.author}<small>`;

  return [title, author];
}

let topic = getCurrentTopic();
let [topicTitle, topicAuthor] = buildTopicInfo(topic);


// 4.5 The for...of Loop
// Complete the following code using the new for… of loop. For each element in the 
// activeUsers array, pass the current user name as the second argument to the notifyTopicReply()
// function.
let topicId = currentTopic();
let activeUsers = ["Sam", "Tyler", "Brook"];

for( let name of activeUsers ){
  notifyTopicReply(topicId, name );
}

// 4.6 Objects and for...of 
// What is the outcome of running the following code?
let topicInfo = { 
  title: "New Features in JS", 
  replies: 19, 
  lastReplyFrom: "Tyler"
};

for(let [k, v] of topicInfo){
  console.log(`${k} - ${v}`);
}
// Answer: TypeError

// 4.7 Array.find()
// Given the following array:
let recentTopics = [
  { 
    title: "Semi-colons: Good or Bad?",
    isLocked: true 
  },
  { 
    title: "New JavaScript Framework Released", 
    isLocked: true 
  },
  { 
    title: "ES2015 - The Shape of JavaScript to Come", 
    isLocked: false 
  }
];
// Which of the following options will return the first topic object that is not locked? Check all that apply.
recentTopics.find( topic => !topic.isLocked );
recentTopics.find( (topic) => !topic.isLocked );


