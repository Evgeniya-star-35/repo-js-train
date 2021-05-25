//Напиши скрипт проверки подписки пользователя при доступе к контенту
// Есть три типа подписки: free pro vip
// Получить доступ могут только пользователи pro vip

const subscription = 'pro';

const canAccessContent = subscription === 'pro' || subscription === "vip";
console.log('Есть доступ к контенту? ', canAccessContent);