const select = prompt("Кава, Чай чи Сік?")

if (select === "Чай") {
    alert(select);
} else if (select === "Кава") {
    alert(select);
} else if (select === "Сік") {
    alert(select);
} else {
    alert("Введено невірний напій");
}


const day = prompt("Введіть день тижня(Назву): ");

if (day == "Понеділок") {
    alert("Робочий день"); 
} else if (day === "Понеділок") {
    alert("Робочий день");
} else if (day === "Вівторок") {
    alert("Робочий день");
} else if (day === "Середа") {
    alert("Робочий день");
} else if (day === "Четвер") {
    alert("Робочий день");
} else if (day === "П`ятниця") {
    alert("Робочий день");
} else if (day === "Суббота") {
    alert("Вихідний");
} else if (day === "Неділя") {
    alert("Вихідний");
} else {
    alert("В неділі тільки 7 днів!")
}

const month = Number(prompt("Номер місяця: "));

if (month === 1 || month === 2 || month === 12) {
    alert("Зима");
} else if (month === 3 || month === 4 || month === 5) {
    alert("Весна");
} else if (month === 6 || month === 7 || month === 8) {
    alert("Літо");
} else if (month === 9 || month === 10 || month === 11) {
    alert("Осінь");
} else {
    alert("В році всього 12 місяців!");
}

const monthes = Number(prompt("Номер місяця: "));

if (monthes === 1) {
    alert("В цьому місяці 31 день");
} else if (monthes === 2) {
    alert("В цьому місяці 29 день");
} else if (monthes === 3) {
    alert("В цьому місяці 31 день");
} else if (monthes === 4) {
    alert("В цьому місяці 30 день");
} else if (monthes === 5) {
    alert("В цьому місяці 31 день");
} else if (monthes === 6) {
    alert("В цьому місяці 30 день");
} else if (monthes === 7) {
    alert("В цьому місяці 31 день");
} else if (monthes === 8) {
    alert("В цьому місяці 31 день");
} else if (monthes === 9) {
    alert("В цьому місяці 30 день");
} else if (monthes === 10) {
    alert("В цьому місяці 31 день");
} else if (monthes === 11) {
    alert("В цьому місяці 30 день");
} else if (monthes === 12) {
    alert("В цьому місяці 31 день");
} else {
    alert("В році всього 12 місяців!");
}

const color = prompt("Введіть колір світлофору: ");

if (color === "Червоний") {
    alert("Червоний — стоп");
} else if (color === "Зелений") {
    alert("Зелений — йти");
} else if (color === "Жовтий") {
    alert("Жовтий — чекати");
}

const firstNumber = Number(prompt("Введіть перше число: "));
const calc = prompt("Введіть дію (+, -, *, /): ");
const secondNumber = Number(prompt("Введіть друге число: "));

let result;

if (calc === "+") {
    result = firstNumber + secondNumber;
} else if (calc === "-") {
    result = firstNumber - secondNumber;
} else if (calc === "*") {
    result = firstNumber * secondNumber;
} else if (calc === "/") {
    result = firstNumber / secondNumber;
} else {
    result = "Невірна дія";
}

alert(`Результат: ${result}`);
