import users from "./users.js";
// Задание 7//
// Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = (users) => {
  return users.reduce((balance, user) => balance + user.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916
