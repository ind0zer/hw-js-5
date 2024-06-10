const select = prompt("Кава, Чай чи Сік?");

switch (select) {
  case "Чай":
    alert(select);
    break;

  case "Кава":
    alert(select);
    break;

  case "Сік":
    alert(select);
    break;

  default:
    alert("Введено невірний напій");
}

const day = prompt("Введіть день тижня: ");

switch (day) {
  case "Понеділок":
    alert("Робочий день");
    break;

  case "Вівторок":
    alert("Робочий день");
    break;

  case "Середа":
    alert("Робочий день");
    break;

  case "Четвер":
    alert("Робочий день");
    break;

  case "П`ятниця":
    alert("Робочий день");
    break;

  case "Суббота":
    alert("Вихідний");
    break;

  case "Неділя":
    alert("Вихідний");
    break;

  default:
    alert("В неділі тільки 7 днів!");
}

const month = Number(prompt("Номер місяця: "));

switch (month) {
  case 1:
  case 2:
  case 12:
    alert("Зима");
    break;

  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;

  case 6:
  case 7:
  case 8:
    alert("Літо");
    break;

  case 9:
  case 10:
  case 11:
    alert("Осінь");
    break;

  default:
    alert("В році всього 12 місяців!");
}

const monthes = Number(prompt("Номер місяця: "));

switch (monthes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("В цьому місяці 31 день");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("В цьому місяці 30 день");
    break;
  case 2:
    alert("В цьому місяці 28 день");
    break;
  default:
    alert("Цього місяця не існує");
}

const color = prompt("Введіть колір світлофору: ");

switch (color) {
  case "Червоний":
    alert("Червоний — стоп");
    break;

  case "Зелений":
    alert("Зелений — йти");
    break;

  case "Жовтий":
    alert("Жовтий — чекати");
    break;
}

const firstNumber = Number(prompt("Введіть перше число: "));
const calc = prompt("Введіть дію (+, -, *, /): ");
const secondNumber = Number(prompt("Введіть друге число: "));

let result;

switch (calc) {
  case "+":
    result = firstNumber + secondNumber;
    break;

  case "-":
    result = firstNumber - secondNumber;
    break;

  case "*":
    result = firstNumber * secondNumber;
    break;

  case "/":
    result = firstNumber / secondNumber;
    break;

  default:
    "Цю дію не можна використати";
}

alert(`Результат: ${result}`);
