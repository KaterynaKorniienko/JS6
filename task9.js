import users from "./users.js";
// Задание 9//
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
const getNamesSortedByFriendsCount = (users) => {
  
  return users.map(({ name, friends }) => {
    return {
      name: name,
      friends: friends.length,
    };
  }).sort((a,b)=>{
      return a.friends-b.friends;
  });
  
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
