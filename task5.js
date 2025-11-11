import PromptSync from "prompt-sync"

// Type your code below this line!
function FriendsList() {
this.friends = [];

this.addFriend = function(name) {
    this.friends.push(name);
};
}

const prompt = PromptSync();
const myfriends = new FriendsList();

const num = Number(prompt("How many names do you have?: "));

for (let i = 0; i < num; i++) {
const name = prompt("Enter a name: ");
  myfriends.addFriend(name);
}

console.log(myfriends.friends);
// Type your code above this line!


