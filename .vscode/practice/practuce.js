/*console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks =new Promise((resolve , reject)=>{
    setTimeout(() => {
resolve('ticket');
    } ,3000)
});  

 const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('i have the tics');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => resolve (`${t} popcorn`)) 
}); 

const getButter = getPopcorn.then((t) => {
    const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve, reject) => resolve (`${t} butter`)) 

}); 
 
getButter.then((t)  => console.log(t))
//getPopcorn.then((t)  => console.log(t))

console.log('person1: shows ticket');
console.log('person2: shows ticket');

*/

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie =async() => {
const promiseWifeBringingTicket = new Promise((resolve, reject) => {
 setTimeout (()=> reject('ticket'),3000);
});  

    let ticket 
    try{
        ticket= await promiseWifeBringingTicket;
    } catch(e){
        ticket = 'sad face';
    }




    //const getPopcorn =   new Promise((resolve, reject) => resolve (`popcorn`)) ;
    //const getButter   =   new Promise((resolve, reject) => resolve (`butter`)) ;
    //const getColddrinks =   new Promise((resolve, reject) => resolve (`colddrinks`)) ;

    //let ticket = await promiseWifeBringingTicket;
    //return ticket;
    //console.log(` wife: i have the ${ticket}`);
    //console.log('husband: we should go in');
    //console.log('wife: no i am hungry');

//preMovie().then((m) => console.log(m)); 

    //let popcorn = await getPopcorn;

   // console.log(`husband: i got some ${popcorn}`);
    //console.log('husband: we should go in')
    //console.log('wife: I need butter on my popcorn');

    //let butter = await addButter;

    //console.log(`husband: i got some ${butter} on popcorn`);
    //console.log('husband: anything else darling');
    //console.log('wife: lets go we are getting late');
    //console.log(`husband: thank you for the reminder *grins*`);

    //let colddrinks = await addColddrinks;
 
    //console.log(`husband: you want something else` );
    //console.log('wife : i need cold drinks' );
     //let ticket = await promiseWifeBringingTicket
   //let [popcorn, butter, colddrinks] = await Promise.all([getPopcorn,getButter,getColddrinks]);
    //console.log(`${popcorn}, ${butter}, ${colddrinks}`);
    return ticket; 
};

    preMovie().then((m) =>{ console.log(` person3: shows ${m}`); 
});
console.log('person4: shows ticket');
console.log('person5: shows ticket');
