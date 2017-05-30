
// Refactor the current code to use the new let keyword.
function loadProfiles(userNames){
  let message = "Loading " + userNames.length + " user(s)";

  _displayFlash(message);

  _fetchProfiles(userNames, function(data){
    let profiles = data.profiles;
    _addToPage(profiles);
  });
}


// 1.5 Vars and the for Loop
// We thought we were done with our code, but this weird bug showed up. 
// Looks like the _displayAvatar() function is receiving the wrong first argument — it keeps 
// receiving the last element in userNames. Let’s fix that.
function getUsersAvatars(userNames, cb){
  let url = "/userAvatars/";
  
  for(let index in userNames){
    _fetchAvatar(url + userNames[index], function(avatarUrl){
      _displayAvatar(userNames[index], avatarUrl);
    });
  }
}