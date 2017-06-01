// 5.2 Initializing Classes
// Complete the following statement regarding the new class syntax.
// When writing JavaScript classes, there's a special method for creating and initializing an object. This method is called the 
// *constructor method.


// 5.3 Implementing a Method on a Class 
// The following TopicReplyCounter class has an addReply() method, which is unfinished. Follow the tasks to complete this method and 
// finish writing this class.
class TopicReplyCounter {

  constructor(topicId, replies){
    this.topicId = topicId;
    this.replies = replies || [];
    this.replyCount = this.replies.length;
  }
  
  addReply(reply){
    this.replies.push(reply);
    this.replyCount = this.totalReplies().length;
    
  }
  
  totalReplies(){
    return this.replies.filter( reply => !reply.isAbuse );
  }
  
  totalCount(){
    return this.replyCount;
  }
}

// 5.4 From Function to Class 
// Let's rewrite TagManager from function to a class. You can see the function version on the tag-manager-function.js tab.

class TagManager {
  
  constructor(topicId){
    this.topicId = topicId;  
  }
  addTag(tagName){
    API.createTag(tagName, this.topicId);  
  }
  removeTag(tagName){
    API.deleteTag(tagName, this.topicId); 
  }
}

// 5.5 Subclassing
// Our forum app currently has an Advertisement class that renders a generic widget for an ad (see the code on the advertisement-class.js tab). 
// In order to accommodate a new type of advertisement, we need to change the way this code is rendered. The Advertisement class is being used by 
// other pages on our app, so we want to avoid changing this class. Instead, we'll create a new class and inherit properties from the Advertisement 
// class — also known as subclassing.

class SidebarAdvertisement extends Advertisement {
  constructor(title, link){
    super(title, link);
  }
  _linkText(){
    return "Sign up now!";
  }
}

// 5.6 Calling Methods From the Parent Class 
// In the code below, we have a parent class ShoppingCart and a child class ForumShoppingCart.
class ShoppingCart {
  constructor(userId){
    this.userId = userId;
    this.products = [];
  }
  
  addProducts(product){
    this.products.push(product);
  }
  
  calculate(){
    //... complex math
  }
}


class ForumShoppingCart extends ShoppingCart {
  constructor(userId){
    super(userId);
  }

  calculate(){
    let partialCost = // call parent class `calculate` method here
    return partialCost - _calculateDiscount();
  }
  
  _calculateDiscount(){
    //... complex math
  }
}

// From the ForumShoppingCart class, how can we invoke the calculate method from its parent class, ShoppingCart?
super.calculate()



// 5.8 Benefit of JavaScript Modules
// Indicate the biggest benefit of using the JavaScript module system.
// Answer:
// Avoid polluting the global namespace.

// 5.9 Exporting Modules
// In the code below, fill in the missing keyword that will allow this function to be exported in the simplest way.
// answer = default
export default function isTopicValid(topic){
  const MAX_TITLE_LENGTH = 20;

  let isValid = !(topic.title.length > MAX_TITLE_LENGTH || topic.author.isBlocked);
  return isValid;
}
// 5.10 Importing Modules

import isTopicValid from "./is-topic-valid";

let topic = {
  title: "ES2015",
  author: { name: "Sam", isBlocked: false }
};

isTopicValid(topic);


// 5.11 Named Exports
// Let's refactor the code on our validators module to be less repetitive.
function isTopicValid(topic){
  const MAX_TITLE_LENGTH = 20;

  let isValid = !(topic.title.length > MAX_TITLE_LENGTH || topic.author.isBlocked);
  return isValid;
}

function isEmailAuthorized(email){
  const EMAIL_DOMAIN = "@codeschool.com";
  return email.indexOf(EMAIL_DOMAIN) > 0;
}

export {isTopicValid, isEmailAuthorized};


// 5.12 Importing Named Exports
// Complete the code to use named exports from the validators module.
import {isTopicValid, isEmailAuthorized} from "./validators";

let author = { name: "Sam", email: "sam@codeschool.com", isBlocked: false };
let topic = {
  title: "ES2015",
  author
};

isTopicValid(topic);
isEmailAuthorized(author.email);

// 5.14 Exporting Constants
// We've moved the constants used on the validators module over to their own module called validation-constants.  
const MAX_TITLE_LENGTH = 20;
const EMAIL_DOMAIN = "@codeschool.com";

export {MAX_TITLE_LENGTH, EMAIL_DOMAIN};

// 5.15 Exporting Classes
// Complete the following code to export the TagManager class using the default type export.
export default class TagManager {
  constructor(topicId){
    this.topicId = topicId;
  }
  
  addTag(tagName){
    API.createTag(tagName, this.topicId);
  }
  
  removeTag(tagName){
    API.deleteTag(tagName, this.topicId);
  }
}


// 5.16 Loading Classes From Modules 
// Now let's load and use the TagManager class.
import TagManager from "./tag-manager-class";

let tagManager = new TagManager(20);
tagManager.addTag("JavaScript");

// 5.17 Export Subclasses 
// Let's finish writing the sidebar-advertisement-class module below. We've written the code, but still need to make this class visible to
// the outside world.
import { Advertisement } from "./advertisement-class";

class SidebarAdvertisement extends Advertisement {
  constructor(title, link){
    super(title, link);
  }
  
  _linkText(){
    return "Sign up now!";
  }
}

export { SidebarAdvertisement };


