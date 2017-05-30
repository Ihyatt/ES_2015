// 1.10 Refractoring Magic Number
// Let's refactor the code on the right and make it more expressive.

function validateMessage(author, message){
  const MAX_MESSAGE_LENGTH = 140;
  if(message.length > MAX_MESSAGE_LENGTH){
    message = _trimMessage(message);
  }

  _postMessage(author, message);
}

// 1.11 Fix const Error
 // Fix the syntax error on the following code.\
 function loadProfiles(userNames){

  const MAX_USERS = 15;

  if(userNames.length > MAX_USERS){
  	return false;
  }
  
  for(let i=0; i < userNames.length; i++){
  	_fetchProfile(userNames[i], function(data){
    	_addToSidebar(userNames[i], data);
    });
  }
}