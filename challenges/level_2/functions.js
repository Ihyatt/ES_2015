
// 2.2 Fixing Undefined Arguments
// The function displayTopicsPreview() raises an error on the very first 
// line when called with no arguments. Let's fix that!

function displayTopicsPreview( topics = [] ){
  let message = "There are currently " + topics.length;
  _displayPreviewMessage(topics, message);
}


// 2.3 Basic Named Parameters
// Complete the setPageThread() function signature with the missing named parameters.
// You can check out the body of the function to help discover what options are expected.

function setPageThread(name, { popular, expires, activeClass } ){
  let nameElement = _buildNameElement(name);
  let settings = _parseSettings(popular, expires, activeClass);

  _updateThreadElement(nameElement, settings);
}


// 2.4 Replacing Object With Named Parameters 250 PTS
// Let's refactor the loadProfiles() function to use named parameters with default values
function loadProfiles(userNames = [], {options, profilesClass, reverseSort} = {}) {
  profilesClass = profilesClass || ".user-profile";
  reverseSort   = reverseSort   || false;

  if (reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}

// Take the following function:

function fetchReplies(topicId, { displayClass, includeAvatar }){
    //... 
}
// Mark all the possible ways this function can be invoked without generating an error.


// A. 
fetchReplies(12, {displayClass: "topic-replies"});
// B. 
let options = {displayClass:"topic-replies", includeAvatar: true};
	fetchReplies(12, options)


// 2.6 Advanced Named Parameters 
// Take the following function, which sets a default value for the second parameter:

function setPageThread(name, {popular, expires, activeClass} = {}){
  // ...
}
// Mark all the possible ways this function can be invoked without generating an error.
// A.
setPageThread(“ES2015”, {
  popular: true
});
// B.
setPageThread(“ES2015”, {});
// C.
setPageThread(“ES2015”);

// 2.8 Refactoring to Rest Params 
// Refactor the code on the right to use rest parameters instead of the arguments object.

function appendUserNames( ...userNames ){

  let userNameDivs  = "";
  let USER_CLASS    = ".forum-user";

  for(let i in userNames){
    let name = userNames[i];
    if(name !== "admin"){
      userNameDivs += "<div class='" + USER_CLASS + "'>" + name + "</div>";
    }
  }

  return userNameDivs;
}

// 2.9 The Spread Operator 
// In the call to getActiveUsers(), the 2nd argument is a callback. This callback, an anonymous function, 
// has data as its parameter.We can pass data.userNames as an argument to the appendUserNames() function. 
// However, this property is an array while the appendUserNames() function expects individual arguments.
// Change the call to appendUserNames() to use the syntax that will split the array into individual elements.

getActiveUsers(15, function(data){   
  let userNameDivs = appendUserNames(...data.userNames);
  appendToSidebar(".side-bar", userNameDivs);
});

function getActiveUsers(topicId, cb){
  _fetchTopicInfo("/topics/" + id, function(data){
    cb(data);
  });
}

// 2.10 Arrow Function Syntax
// See the function below:

let printName = function(value){
  console.log( value );
}
// How could we write its arrow function counterpart?
// Answer:
  let printName = (value) => {
    console.log( value );
  }


// 2.11 Arrow Functions in Action 250 PTS
// We've wrapped our previous functionality into a higher level component, but it's not yet fully functional. 
// There's a scope bug we must fix before we can use our new component.


function ActiveUsersComponent(target, topicId){
  this.targetElement = target;
  this.topicId       = topicId;
}

ActiveUsersComponent.prototype.render = function(){
  getActiveUsers(this.topicId, (data) => {
    let userNameDivs = appendUserNames(...data.userNames);
    appendToSidebar(this.targetElement, userNameDivs);
  });
};
// Create new component below

let component = new ActiveUsersComponent(".active-users", 17);
component.render();



