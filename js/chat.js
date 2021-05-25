// Напишите скрипт,который проверяет возможность открыть чат с подьзователем
// Для этого пользователь должен быть :
// другом,онлайн ,без режима не беспокоить

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можно открыть чат?', canOpenChat);