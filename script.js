let ApplePrice = 15.678;
let sweetsPrice = 123.965;
let nutsPrice = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число

console.log(`Максимальне число: ${Math.max(ApplePrice, sweetsPrice, nutsPrice)}`);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число

console.log(`Мінімальне число: ${Math.min(ApplePrice, sweetsPrice, nutsPrice)}`);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму

let sumPrice = ApplePrice + sweetsPrice + +nutsPrice;
console.log(`Загальна вартість: ${sumPrice} грн.`);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.

let sumWithoutPennies = Math.floor(ApplePrice) + Math.floor(sweetsPrice) + Math.floor(nutsPrice);
console.log(`Загальна округлена вартість: ${sumWithoutPennies} грн.`);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)

console.log(`Сума товарів, округлена до сотень: ${Math.round(sumPrice / 100) * 100} грн.`);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?

let CheckParity;
Math.floor(sumPrice) % 2 === 0 ? (CheckParity = true) : (CheckParity = false);
console.log(`Чи є сума всіх товарів парним числом: ${CheckParity}`);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.

let ClientPay = 500;
let extraMoney = ClientPay - sumPrice;
console.log(`Клієнт заплатив 500 грн. Його решта: ${extraMoney} грн.`);

//Виведіть середнє значення цін, округлене до другого знаку після коми

let avgPrice = (sumPrice / 3).toFixed(2);
console.log(`Середнє значення цін, округлене до другого знаку після коми: ${avgPrice} грн.`);

//(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).

let discount = Math.random().toFixed(2) * 100;
console.log(`Випадкова знижка клієнту: ${discount}%`);

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.

let sumToPay = sumPrice - (sumPrice / 100) * discount;
console.log(`Сума до оплати враховуючи знижку клієнта: ${sumToPay.toFixed(2)} грн.`);

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

let NetProfit = sumToPay.toFixed(2) - (sumPrice / 2).toFixed(2);
console.log(`Чистий прибуток: ${NetProfit.toFixed(2)} грн.`);
