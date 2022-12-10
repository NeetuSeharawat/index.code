console.log("Person 1 shows ticket");
console.log("Person 2 shows ticket")

var myWifeShowsTicket = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("ticket")
    }, 3000);
});
var getPopCorn = myWifeShowsTicket.then((t)=>{
    console.log("wife: I have the tickets")
    console.log("hus: Lets get in ")
    console.log("wife: No i am hungry");
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});
var getButter = getPopCorn.then((t)=>{
    console.log("wife: Got the popcorn");
    console.log("hus: Lets get in ");
    console.log("wife: No i need Butter");
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
})
var getColdDrinks = getButter.then((t)=>{
    console.log("hus: Lets get in?");
    console.log("wife: No we forget cold drinks");
    console.log("hus: Ok, buy it ");
    return new Promise((resolve,reject)=>resolve(`${t} cold drinks`));
});
getColdDrinks = getButter.then((t)=>{console.log(t)})


console.log("Person 4 shows ticket");
console.log("Person 5 shows ticket")











console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });

  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);

  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);

  let butter = await addButter;
  console.log(`added ${butter}`);

  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);

  return ticket;

};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');