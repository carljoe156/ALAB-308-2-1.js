const pi=3.1415;
const radius=5
const area=pi*radius*radius
const min_siz_req_plant=0.8
const maxCapacity = area / min_siz_req_plant;
let plantgrowth=20;
/**USER INPUT */
let noofweeks=3
console.log("**************************************************")
console.log( "Part 1: Growing Pains")
console.log("**************************************************")
//1. Predict the plant growth after a specific number of weeks ?
for (let i = 1; i <= noofweeks; i++)
{
    currentweek=i;
    if( currentweek > 1)
    {
        plantgrowth=plantgrowth*2
    }
  }
  let Plantoverallgrowtharea = plantgrowth *0.8
console.log("No of weeks", noofweeks)
console.log("Your Plant count is ", plantgrowth)
console.log("Your Plant growth area is ", Plantoverallgrowtharea)
console.log("Maximum capacity of your garden is" ,maxCapacity)
 // 2. Prune - if plant count exceeds 80%
 if(Plantoverallgrowtharea > 80% maxCapacity)
 {
    console.log("your plant growth reached above max capacity. Please prune");
 }
 else if(Plantoverallgrowtharea>=50% maxCapacity )
    {
   console.log("Please monitor");
    }
 else if( Plantoverallgrowtharea < 50% maxCapacity)
 {
    console.log("Please plant more");
 }
 /*Part 2: Thinking Bigger*/
 console.log("**************************************************")
 console.log( "Part 2: Thinking Bigger")
 console.log("**************************************************")
const noofInitplants2 = 100;
const noofweeks2 = 10;
let Plantcountforweeks =  noofInitplants2 * 2 ** (noofweeks2 - 1)
let additionalspace=Plantcountforweeks*0.8
let expandedradius=Math.sqrt(additionalspace / pi);
 console.log("The size of the expanded garden will be ",expandedradius.toFixed(2), "square meters");
 console.log("**************************************************")
 console.log( "Part 3: Errors in Judgement")
console.log("**************************************************")
/*
The scientists decided not to listen to your recommendations, and have
instead started with 100 plants in the original 5-meter-radius garden.
Use try and catch to wrap your work in an error-handling block.
If the amount of space required to hold the originally provided number of
plants exceeds the amount of space available, throw a new error and log an appropriate message.
*/
const Err_noofInitplants=100;
const Err_noofweeks3=1;
let Err_Plantcountforweeks =  Err_noofInitplants * 2 ** (Err_noofweeks3 - 1)
let Err_additionalspace=Err_Plantcountforweeks*0.8
let Err_expandedradius=Math.sqrt(Err_additionalspace / pi);
 console.log("The size of the expanded garden will be ",Err_expandedradius, "square meters");
try
{
 if (Err_expandedradius > area)
{
    throw new Error('Insufficient space in the garden for the given number of plants.');
}
console.log(`Required space: ${Err_expandedradius.toFixed(2)} square meters`);
}
catch (error) {
console.error(error.message);
}