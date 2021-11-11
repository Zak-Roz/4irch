const arrayTypes = ['undefined', 'object', 'function', 'symbol', 'string', 'bigint', 'number', 'boolean'];
const arrayBeforeFilter = [undefined, 'hello', 'world', 23, '23', null, 37, null, Math.sin, function () { }, new Date(), [1, 2, 4], { a: 1 }, Symbol('foo'), (typeof 1), String(1), `template literal`, 42n, Number('1'), 37];

function filterBy(array, type) {
  const filterArray = [];
  for (let elementArray of array) {
    if (typeof (elementArray) !== type) {
      filterArray.push(elementArray);
    }
  }
  return filterArray;
}

let typeInput;

typeInput = prompt(`Enter one of JS data type: ${arrayTypes}`);

while (!arrayTypes.includes(typeInput)) {
  typeInput = prompt(`Error. Try again!\nEnter on of this types ${arrayTypes}:`);
  console.log(typeInput);
}

console.log(filterBy(arrayBeforeFilter, typeInput));

alert('А тепер перегляньте консоль, бо не можна передати сюди або на сторінку dslgjdslm.\nТак як перетворення з Symbol в строку неможливо :(')