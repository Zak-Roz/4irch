let currentFirst, appointmentFirst;
let currentSum, appointmentSum;
let currentSecond, appointmentSecond;

const UA = 1;
const US = 0.038;
const EU = 0.033;
const RU = 2.74;
const GBR = 0.028;

while (true) {
    while (true) {
        currentFirst = prompt('Введіть валюту з якої робити обрахунок. Наприклад ua (us, eu, ru, gbr).').trim().toLowerCase();
        if (currentFirst === 'ua' || currentFirst === 'eu' || currentFirst === 'ru' || currentFirst === 'us' || currentFirst === 'gbr') {
            appointmentFirst = currentFirst === 'ua'
                ? UA
                : currentFirst === 'eu'
                    ? EU
                    : currentFirst === 'ru'
                        ? RU
                        : currentFirst === 'us'
                            ? US
                            : currentFirst === 'gbr'
                                ? GBR : '';
            break;
        }
        alert('Не вірно ввели валюту. Спробуйте ще.');
        continue;
    }

    while (true) {
        currentSum = parseFloat(prompt('Введіть суму з якої робити обрахунок. Наприклад 123.2').trim().toLowerCase());
        if (!isNaN(currentSum) && typeof (currentSum) === 'number') {
            appointmentSum = currentSum;
            break;
        }
        alert('Не вірно ввели одиницю суми. Спробуйте ще.');
        continue;
    }

    while (true) {
        currentSecond = prompt('Введіть валюту в яку робити обрахунок. Наприклад us (ua, eu, ru, gbr).').trim().toLowerCase();
        if (currentSecond === 'ua' || currentSecond === 'eu' || currentSecond === 'ru' || currentSecond === 'us' || currentSecond === 'gbr') {
            appointmentSecond = currentSecond === 'ua'
                ? UA
                : currentSecond === 'eu'
                    ? EU
                    : currentSecond === 'ru'
                        ? RU
                        : currentSecond === 'us'
                            ? US
                            : currentSecond === 'gbr'
                                ? GBR : '';
            break;
        }
        alert('Не вірно ввели валюту. Спробуйте ще.');
        continue;
    }
    let convertSum = (appointmentSum / appointmentFirst) * appointmentSecond;

    alert(`Конвертація валют: ${convertSum}`);
    let continueConvert = prompt(`Хочете продовдити перевод валют? Якщо бажаєте напишіть '1' або 'Так' або 'yes' або 'true'`).trim().toLowerCase();
    if (continueConvert === '1' || continueConvert === 'так' || continueConvert === 'yes' || continueConvert === 'true') {
        continue;
    }
    break;
}