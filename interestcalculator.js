//javascript task 2

//Interest calculator solution
//storing the objects in an array called data

let data = [
    {principal:2500,
    time: 1.8},
    {principal:1000,
    time: 5},
    {principal:3000,
    time: 1},
    {principal:2000,
    time: 3},
];


//creating a function for the looping,conditions and calculations.
function interestCalculator(interest) {

    //all these are variables used in the codes.
    let rate;
    let interestcalculated;
    let interestData = [];

    //using a for loop to loop through the array.
    for ( var i = 0; i < interest.length; i++ ){

    // Using conditions to check the rate applicable.
        if(interest[i].principal >= 2500 && interest[i].time > 1 && interest[i].time < 3){
        rate = 3;
        } else if (interest[i].principal >= 2500 && interest[i].time >= 3 ){
        rate = 4;
        } else if (interest[i].principal < 2500 || interest[i].time <= 1){
        rate = 2;
        } else {
        rate = 1;
        }


    //calculating the interest using the formular (principal * rate * time)/100
    interestcalculated = (interest[i].principal * rate * interest[i].time)/100;


    //pushing the values to the interestData variable
    interestData.push({
    principal : interest[i].principal,
    rate : rate,
    time : interest[i].time,
    interest : interestcalculated,
    })

    }

    //logging the interestData to the console.
    console.log(interestData);
    // closing out the function
    return;
}
//calling the function to run the application.
interestCalculator(data)