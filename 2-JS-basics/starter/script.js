// const johnScore = (89 + 120 + 103)/3;
// const mikeScore = (116 + 94 + 123)/3;
// const maryScore = (97 + 134 + 105)/3;
// console.log(johnScore, mikeScore, maryScore);

// if (johnScore > mikeScore && johnScore > maryScore) {
//     console.log('John\'s team is the winner! Their average score is ' + johnScore + '!');
// } else if (mikeScore > johnScore && mikeScore > maryScore) {
//     console.log('Mark\'s team is the winner! Their average score is ' + markScore + '!');
// } else if (maryScore > johnScore && maryScore > mikeScore) {
//     console.log('Mary\'s team is the winner! Their average score is ' + maryScore + '!');
// } else {
//     console.log('It\'s a tie! Their average scores were ' + johnScore + '.');
// }

// const tipCalculator = function(bill) {
//     let percentage;
//     switch(true) {
//         case bill < 50 && bill > 0:
//             percentage = 0.2;
//             break;
//         case 50 <= bill && bill < 200:
//             percentage = 0.15;
//             break;
//         case bill >= 200:
//             percentage = 0.1;
//             break;
//         default:
//             percentage = 0;
//     }
//     return bill * percentage;
// }

// const firstBill = 124;
// const secondBill = 48;
// const thirdBill = 268;
// let tips = [];
// let billAndTips = [];

// const firstTip = tipCalculator(firstBill);
// const secondTip = tipCalculator(secondBill);
// const thirdTip = tipCalculator(thirdBill);

// tips = [firstTip, secondTip, thirdTip];
// billAndTips = [firstBill + firstTip, secondBill + secondTip, thirdBill + thirdTip];
// console.log(tips, billAndTips);

// let john = {
//     fullName: 'John Smith',
//     mass: 60,
//     height: 1.8,
//     calcBMI: function() {
//         return this.BMI = this.mass / this.height^2;
//     }
// }
// let mark = {
//     fullName: 'Mark Twain',
//     mass: 60,
//     height: 1.7,
//     calcBMI: function() {
//         return this.BMI = this.mass / this.height^2;
//     }
// }

// john.calcBMI();
// mark.calcBMI();
// console.log(john,mark);

// function BMIComparison(a,b) {
//     if (a.BMI > b.BMI) {
//         return a.fullName + ' has a higher BMI with a BMI value of ' + a.BMI;
//     }
//     else if (b.BMI > a.BMI) {
//         return b.fullName + ' has a higher BMI with a BMI value of ' + b.BMI;
//     }
//     else {
//         return a.fullName + ' has the same BMI as ' + b.fullName + ' with a BMI value of ' + a.BMI;
//     }
// } 
// console.log(BMIComparison(john, mark));

let john = {
    bill: [124, 48, 268, 180, 42],
    tip: [],
    billAndTip: [],
    tipCalculate: function(bill) {
        for(let i = 0; i < bill.length; i++) {
            let percentage;
            switch(true) {
                case bill[i] < 50 && bill[i] > 0:
                    percentage = 0.2;
                    break;
                case 50 <= bill[i] && bill[i] < 200:
                    percentage = 0.15;
                    break;
                case bill[i] >= 200:
                    percentage = 0.1;
                    break;
                default:
                    percentage = 0;
            }
            this.tip.push(Math.round(bill[i] * percentage * 100) / 100);
            this.billAndTip.push(Math.round(bill[i]*(percentage + 1) * 100) / 100);
        }
    }
}
john.tipCalculate(john.bill);
console.log(john);

let mark = {
    bill: [77, 475, 110, 45],
    tip: [],
    billAndTip: [],
    tipCalculate: function(bill) {
        for(let i = 0; i < bill.length; i++) {
            let percentage;
            switch(true) {
                case bill[i] < 100 && bill[i] > 0:
                    percentage = 0.2;
                    break;
                case 100 <= bill[i] && bill[i] < 300:
                    percentage = 0.10;
                    break;
                case bill[i] >= 300:
                    percentage = 0.25;
                    break;
                default:
                    percentage = 0;
            }
            this.tip.push(Math.round(bill[i] * percentage * 100) / 100);
            this.billAndTip.push(Math.round(bill[i]*(percentage + 1) * 100) / 100);
        }
    }
}
mark.tipCalculate(mark.bill);
console.log(mark);

const averageTips = (tips) => {
    let sum = 0;
    for (let i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    console.log(sum);
    return sum / tips.length;
}

const johnAverageTip = averageTips(john.tip);
const markAverageTip = averageTips(mark.tip);
console.log(johnAverageTip, markAverageTip);

if (johnAverageTip > markAverageTip) {
    console.log('John\'s family paid a higher average tip fee of ' + johnAverageTip + ' dollars.');
} else if (markAverageTip > johnAverageTip) {
    console.log('Mark\'s family paid a higher average tip fee of ' + markAverageTip + ' dollars.');
} else {
    console.log('John\'s family paid the same amount average tip fee as Mark\'s family of a value of ' + johnAverageTip + ' dollars.');
}