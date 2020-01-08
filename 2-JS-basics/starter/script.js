console.log('Hello World!');

//CC1
// let markMass = 73
// let markHeight = 176
// let johnMass = 82
// let johnHeight = 176

// let markBMI = markMass / (markHeight * markHeight)
// let johnBMI = johnMass / (johnHeight * johnHeight)

// let bmiDif = johnBMI > markBMI

// console.log("Is johns bmi greater than marks bmi? " + bmiDif)


//CC2
// // 1. calculate ave score for each team
// let johnsScore = (116 + 94 + 123) / 3;
// let mikesScore = (114 + 94 + 123) / 3;

// // 2. print winner to console
// // 3. include condition in case of draw
// // 4. add score for marys team, and include && operator into code

// let marysScore = (114 + 94 + 123) / 3;


// if (johnsScore > mikesScore && marysScore) {
//     console.log('johns team wins with a score of ' + johnsScore)
// } else if (mikesScore > johnsScore && marysScore) {
//     console.log('mikes team wins with a score of ' + mikesScore)
// } else if (marysScore > johnsScore && mikesScore) {
//     console.log('marys team wins with a score of ' + marysScore)
// } else {
//     console.log('two, or all teams draw')
//}


//CC3
// Tip calculator. Bills = $124 $48 and $268
//20% if <50, 15% if 50-200, 10% if > 200
// Create 2 arrays
// 1. Containing all 3 tips 
// 2. Containing all 3 final paid amounts (bill + tip)

// function tipCalculator(bill) {
//     let percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill <= 200) {
//         percentage = .15;
//     } else if (bill > 200) {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// console.log(tipCalculator(20))

// let bills = [124, 48, 268];
// let tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
// console.log(tips)

// let finalValues = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]]
// console.log(finalValues)

//C4

// let mark = {
//     firstName: "Mark",
//     mass: 73,
//     height: 1.76,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI
//     }
// }

// let john = {
//     firstName: "John",
//     mass: 82,
//     height: 1.76,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI
//     }
// }


// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(john.firstName + " has a bmi of " + john.BMI + " which is higher than marks bmi.")
// } else if (mark.BMI > john.BMI) {
//     console.log(mark.firstName + " has a bmi of " + mark.BMI + " which is higher than johns bmi.")
// } else {
//     console.log("Both Mark and John have the same BMI of " + mark.BMI)
// }

//CC5

let john = {
    fullName: "John Smith",
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.totalBill = [];

        for (let i = 0; i < this.bills.length; i++) {
            let bill = this.bills[i]
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill <= 200) {
                percentage = .15;
            } else if (bill > 200) {
                percentage = .1;
            }

        //add results to the corresponding arrays
          this.tips[i] = bill * percentage;
          this.totalBill[i] = bill + bill * percentage;
        }
    }
}


let mark = {
    fullName: "Mark Miller",
    bills: [77, 475, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.totalBill = [];

        for (let i = 0; i < this.bills.length; i++) {
            let bill = this.bills[i]
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill <= 300) {
                percentage = .1;
            } else if (bill > 300) {
                percentage = .25;
            }

        //add results to the corresponding arrays
          this.tips[i] = bill * percentage;
          this.totalBill[i] = bill + bill * percentage;
        }
    }
}


function tipAve (tips) {
    let tipTotal = 0;
    for (let i = 0; i < tips.length; i++){
        tipTotal = tipTotal + tips[i];
    }
    return tipTotal / tips.length;
}

john.calcTips();
mark.calcTips();

john.ave = tipAve(john.tips);
mark.ave = tipAve(mark.tips);


console.log(john, mark);

if(john.ave > mark.ave) {
    console.log("Johns family had a higher average tip of " + john.ave)
} else if(mark.ave > john.ave) {
    console.log("Marks family had a higher average tip of " + mark.ave)
} else {
    console.log("Both families tip equally on average.")
}