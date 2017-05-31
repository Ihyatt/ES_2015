// 3.2 Building Objects With the New Syntax 
// Using the new object initializer shorthand, 
// complete the code on the right to build a user object. 
// This new object should have the properties name, totalReplies, 
// and avatar with values coming from the variables with the same name.
let name = "Brook";
let totalReplies = 249;
let avatar = "/users/avatars/brook-user-1.jpg";

let user = {name, totalReplies, avatar};

addUserToSidebar(user);


// 3.3 Object Initializer Shorthand
// Refactor the code on the right to use the object initializer shorthand.
function buildTopicElement(topic){
  let title = "<h2>" + topic.title + "</h2>";
  let author = "<small>" + topic.author + "</small>";
  let body = "<p>" + topic.body + "</p>";

  return { title,author,  body };
}

// 3.4 Object Destructuring 
// Let's add a new topic to the page. On the first line, call the 
// buildUser() function with 2 arguments: "Tyler" and "Williams". 
// Then, using object destructuring, assign the property fullName 
// from its return object to a local variable with the same name.
let { fullName } = buildUser("Tyler", "Williams");

let title  = "The New Object Syntax - Good or Bad?";
let author = fullName;
let body = "What do you all think of the new syntax? I like it!";

let topic = { title, author, body };

let element = buildTopicElement(topic);

addTopicToPage(element);

// 3.5 Destructuring vs. Initializer 
// The new object initializer shorthand and object destructuring 
// look very similar, but they are used in different scenarios. 
// Identify which syntax is being used in the code snippets below:

// Snippet #1
let { tags, isLocked } = topicInfo(17);

// Snippet #2
let reply = { author, body, repliedAt };

// Snippet #3
function buildMetadata(object){
  let id = parseInt(object.id);
  let lastUpdatedAt = object.updatedAt || object.createdAt;
  let hashCode = _buildHashCode(object);

  return { id, lastUpdateAt, hashCode };
}

// Answer:
// Destructring, Initializer, Initializer


// 3.6 Method Initializer Shorthand 
// Let's refactor the code on the right to use some new ES2015 features.
function buildMetadata(object){
  let id = parseInt(object.id);
  let lastUpdatedAt = object.updatedAt || object.createdAt;
  let hashCode = _buildHashCode(object);
  const SECURE_HASH_CODE_LENGTH = 32;
  
  
  
  return { 
    id, 
    lastUpdatedAt, 
    hashCode,
    isSecureHash() {
      return hashCode >= SECURE_HASH_CODE_LENGTH;
    }
  };
}

// 3.7 String Interpolation
// Complete the code on the right so that it uses the variable replyCount 
// from inside the template string. You'll need to use the syntax for string 
// interpolation.

let replyCount = 21;
let message = `This topic has a total of ${replyCount} replies`;

// 3.8 Template Strings
// Refactor the code on the right to use string templates.
function buildTopicElement(topic){
  let title = `<h2>${topic.title}</h2>`;
  let author = `<small>${topic.author}</small>`;
  let body = `<p>${topic.body}</p>`;

  return { title, author, body };


