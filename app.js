// window.alert('Hello World');
// let myName= 'Adiri Oghenetega';
// console.log(myName);
// const newName='david';
// document.write(newName);

// const firstName='Oghenetega';
// const surName='Adiri';
// let fullName = firstName + ' ' + surName;
// let myAge = 30;
// let myMaidenName = 'Otis';
// let stringOne= 'My name is ';
// let stringTwo= '.My age is ';
// let stringThree= '.My maiden is ';

// nameUpperCase= fullName.toUpperCase()
// myMaidenNameUpperCase=myMaidenName.toUpperCase()
// stringOneLower=stringOne.toLowerCase()
// stringTwoLower=stringTwo.toLowerCase()
// stringThreeLower=stringThree.toLowerCase()

// let sentence= `${stringOneLower} ${nameUpperCase} ${stringTwoLower} ${myAge} ${stringThreeLower} ${myMaidenNameUpperCase}`
// console.log(sentence);

// let bootCamp='CORTH CODEVAULT';
// let camp=bootCamp.replace('C','T');
// document.write(camp);

// console.log(Number(false));
// x=5;
// y=7;
// z=5;
// console.log(x!==y);

// a=3;
// b=3;
// c=4;
// console.log(a==b);
// console.log(b==c);
// const message = 'this is my first message';
// const parts = message.split(' ');
// console.log(parts);

// const combined= parts.join('-');
// console.log(combined);
// const numbers = [2,3,1];
// numbers.reverse();
// console.log(numbers);
// let passwordLength = 6;
// let passwordInput = 5;

// if (passwordInput<passwordLength){
//     password= 'Paasword too short';
// } else if (passwordInput>passwordLength){
//     password='Password too long';
// }else{
//     password= 'Password correct';
// }
// console.log(password);
// function range(min,max){
//     const rangeArray= [];
//     for (let i=min;i<=max;i++)
//     rangeArray.push(i);
//     console.log(rangeArray)
// }
// range(2,6);
// const numbers= [1,2,3,4];
//  numbers.pop();
//  console.log(numbers);

// function includes(numbers,searchElement){
//     for (let number of numbers)
//     if (searchElement === number)
//     return true

//    return false
// }

// console.log(includes(numbers,3));

// const names=['alexis','david','kehinde','taiwo','tega'];
// oneLessName= names.splice(3,1);
// console.log(names);

// const numbers = [1,2,3,4];
// numbers[numbers.length] = 5
// delete numbers [0]
// console.log(numbers);

//assignment - create and array of elements ,name it countries  , add 10 elements , remove the last element , add a new element , remove first element , delete element in index 2
  
// const countries = ['nigeria','gambia','cameroon','cotevoire','uganda','south africa','kenya','ghana','libya','egypt','congo'];
// // removing the last element
// let lastCountry = countries.pop();
// console.log(countries);
// //adding a new element
// let newCountry = countries.push('ivorycoast');
// console.log(countries);
// //removing the first elements
// let firstCountry = countries.shift();
// console.log(countries);
// //deleting element in index 2
// delete countries[2];
// console.log(countries);
// const numbers = [1,2,3,4,5,1,1];


// function except(array,exclude) {
//     const output = [];
//     for (let number of array)
//     if (!exclude.includes(number))
//     output.push(number)
//     return output
        
// }
// console.log(except(numbers,[1]));

// const numbers = [1,2,3,4];
// function move(array,index,offset){
    //     const position = index + offset;
    //     if ((position >= array.length) || (position < 0)){
        //     console.error('invalid offset');
        //     return;
        // }
        //    let element= array.splice(index,1)[0];
        //     array.splice(index + offset,0,element)
        //     return array;
        
        // }
        // console.log(move(numbers,0,3));
        // const names=['alexis','david','kehinde','taiwo','tega'];
        // const numbers = [1,2,3,4];
        // const states = ['delta','rivers','lagos','edo'];
        // const country = states.concat(capital,numbers,names);
        // console.log(country);
        // const capital= ['asaba','portharcourt','lagos','benin'];
        //  capital.splice(2,0,'ore');
        //  const split= capital.slice(5);
        //  console.log(split);
        //  console.log(capital);
        // classwork - create array , delete index 4, determine length of array , add an element to index 5
    //     const newArray= ['names','country','state','city','street'];
    //     //delete index 4
    //     delete newArray[4]
    //     console.log(newArray);
    //     //add new element to index 5
    //     newArray.splice(5,0,'email');
    //     console.log(newArray);
    //     //determine length
    //    let knownLength = newArray.length
    //     console.log(knownLength);
    // const numbers = [1,2,3,4,1];

    // function countOccurrences(array,searchElement){
    //     let count = 0;
    //     for (let element of array)
    //     if (searchElement === element)
    //     count++;
    //     return count;

    // }       
    
    // console.log(countOccurrences(numbers,1));
    // const numbers = [1,2,3,4,1];

    //  function countOccurrences(array,searchElement){

    //      return array.reduce((accumulator,currentValue)=>{
    //         let occurrence = (currentValue===searchElement) ? 1:0
    //          return accumulator + occurrence;

    //      },0);
    //  }       
    
    //  console.log(countOccurrences(numbers,2))
    // console.log(Math.max(1,2,3,4,5));

// const numbers = [1,2,3,4,5,6];
// function getMax(array){
//     let max = array[0];
//     for (let element of array)
//     if (element > max) 
//     max = element
//     return max
// }
// console.log(getMax(numbers));
// const numbers = [1,2,3,6,4,5];
// function getMax(array){
//      return array.reduce((accumulator,currentValue)=>
//        (currentValue>accumulator) ? currentValue:accumulator
//       );
//  }
//  console.log(getMax(numbers));
// const movies =[
//     {title: 'a', year: 2018, rating: 4.5 },
//     {title: 'b', year: 2018, rating: 4.7 },
//     {title: 'c', year: 2018, rating: 3 },
//     {title: 'd', year: 2017, rating: 4.5 },
// ];
// const filtered = movies
// .filter(value=> {return value.year ===2018 && value.rating > 4;} 
// )
// .sort(function(a,b){
//     return a.rating - b.rating;
//     // if (a.rating<b.rating) return -1;
//     // if (a.rating>b.rating) return 1;
//     // return 0;
// })
// .reverse()
// .map(value=> value.title)
// console.log(filtered);
// const person = {
//     firstName : 'Oghenekevwe',
//     lastName : 'Adiri',
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName= parts[1];
//     }
// };
//   person.fullName = 'Adiri Oghenetega';
//      console.log(person.fullName);
// let sum= 0;
// for (let i=0;i<100;i++){
// sum+=i;//the value of sum changes to result of the previous execution after every iteration
// console.log(sum);
// }
// for (let i=0;i<10;i++){
//     if(i===5){
//         continue
//     }
//     console.log(i);
// }
// function playVideo(){
//     console.log(this);
// }

// playVideo.call({a:1});

// function sum(...arg) {
// if (arg.length === 1 && Array.isArray(arg[0]))
// arg = [...arg[0]]
// return arg.reduce((a,b) => a + b);
// }
// console.log(sum([1,2,3,4]))
//  const circle = {
//      radius: 2,
//      get area(){
//          return 4;
//      }
//  }
//  circle.radius = 6;
// circle.area= 7
// ; console.log(circle);
// function countOccurrences(array,searchElement) {
    
//     if (!Array.isArray(array))
//     throw new Error('Not a valid array');

//     for (element of array)
//     if (typeof element!== typeof 1)
//     throw new Error('Not a number');

//     if (array.length<=0)
//     throw new Error('No number found');

//     return array.reduce((accumulator,current)=>{
//         const occurrence = (current === searchElement) ? 1:0;
//         return accumulator + occurrence;
//     },0);
// }

// try{
//     console.log(countOccurrences([],1));
// }
// catch (e){
//     alert(e);
// }
// let text = "Adiri Oghenetega";
// const myArray = text.split(" ");
// document.getElementById("demo").innerHTML = myArray[0];

// function myTime(){
    
//     let today = new Date();
//     let someday = new Date();
//     someday.setFullYear(2100);
//     today.setDate(today.getDate() + 50);

//     if (someday == today) return 'same day';
//     if (someday<today) return 'day before';
//     if (someday>today) return 'the future'

//     return 'not a date';
// }
// console.log(myTime());

// function showTime(){
//     const d= new Date();
//     year= d.getFullYear();
//     month= d.getMonth();
//     date = d.getDate();
//     hour=d.getHours();
//     minute=d.getMinutes();
//     seconds= d.getSeconds();
//     mili = d.getMilliseconds();

//     text = `${year} ${month} ${date} ${hour} ${minute} ${seconds} ${mili}`;
//      console.log(text);

// setTimeout(showTime,1000);
// }
// showTime();
// let ninjas = ['naruto','sasuke','neji','minato','hinata']
// ninjas.forEach(function(ninja){
//     console.log(ninja)
// })
// let cars = {
//     brand:'Toyota',
//     model:'rav4',
//     color:'white',
//     year:'2001'
// };
// console.log(cars.brand);
// function Circle(radius){
//     this.radius=radius
//     this.draw=function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);
// //adding properties to the newly created circle object
// circle.location = {x:2};
// //or
// const propertyName = 'another location';
// circle[propertyName] = {x:2};
// //or
// circle['location3'] = {x:3};
// console.log(circle);

// //removing poperties in given object
// delete circle['location'];
// delete circle.location3;

// const keys = Object.keys(circle)
// console.log(keys);

// document.getElementById('demo2').innerHTML = 'Hello world'
// document.getElementById('timely').style.textAlign='center'

// document.getElementById('button').onclick = function(){
//     window.open('https://www.google.com')
// }


//assignment use getelementbyclass to modify styles in 3 cases and implemnt and onclick event that will re-direct to facebook
// document.getElementById('demo3').style.color='yellow'
// document.getElementById('demo3').style.backgroundColor='black'
// document.getElementById('demo3').style.textAlign='center'
// document.getElementById('button1').onclick= function(){
//     window.open('https://www.facebook.com')
// }
//stopwatch
// function Stopwatch(){
//     let startTime,stopTime,running,duration = 0;

//     this.start = function() {
//         if (running)
//         throw new Error('Stopwatch is already running');

//         running = true;

//         startTime = new Date();
//         document.getElementById('demo4').innerHTML = startTime
//     };
//      this.stop = function(){
//          if (!running)
//          throw new Error('Stopwatch not running')

//          running = false;

//          stopTime= new Date();

//          duration = stopTime.getTime()-startTime.getTime() /1000
//          document.getElementById('demo4').innerHTML = duration
//      };   

//      this.reset = function() {
//          duration = 0;
//          startTime = null;
//          stopTime=null;
//          running = false;
//      };
//      Object.defineProperty(this,'duration',{
//         get : function() { return duration;}
//     });

//     }

//     const sw = new Stopwatch();
//     console.log(sw.duration);
//form validation
// function validateNumber(){
//     let x= document.forms['form1']['num1'].value;
    
//     if (isNaN(x) || x < 1 || x > 10) {
//         alert( "Input not valid");
//       } else {
//         alert("Input OK");
//       }
// }


//animation using javascript
function glide(){
  let x= null;
  const obj= document.getElementById('animate');
  let position = 0;
  clearInterval(x);
  x =setInterval(move,30)
 function move(){
  if (position == 22){
    clearInterval(x);
  }else{
    position++;
    obj.style.top = position + 'em';
    obj.style.left= position + 'em';
  }
 }
}

    

