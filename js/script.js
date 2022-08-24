// const arrowFunc = () => {
//     console.log(this)
// }

// function x(){
//     console.log(this)
// }

// // arrowFunc()
// // x()

// const person = {
//     name: 'Gevorg',
//     age: 12,
//     x,
//     arrowFunc,
//     delayLog: function(){
//         const self = this;
//         setTimeout (   () => {
//             console.log(self.name + ' '  + self.age)
//         },100)
//     }
// }

// person.x()
// person.arrowFunc()// sterechni funkcian cankacac tex vorpes this yndunum e menak window 
//                 //ete sterechni chi yndunum e henc ayn obyekty vori mech gtnvum e
// person.delayLog()

// const Biscuit = function (obj){
//     this.name = obj.name;
//     this.price = obj.price
// }
// const cheese = new Biscuit( {name:'Tiramisu',price:'200'})
// console.log(cheese)
// const cheese1 = {name:'Tiramisu',price:'200'}
// console.log(cheese1)


// const Animal = function (obj){
//     this.name = obj.name
//     this.color =  obj.color
//     // this.voice = function (){
//     //     console.log('Base voice is ' + this.name)
//     // }
// }
// Animal.prototype.voice = function(){
//     console.log('Base voice is ' + this.name)
// }

// Animal.prototype.tail = function(){
//     console.log(this.name + 'has long tail')
// }

// const dog = new Animal({name:'chalo',color:'white'})
// console.log(dog)
// dog.voice()


// const cat= new Animal({name:'piso',color:'blue'})
// console.log(cat)
// cat.voice()


class RoyalArmenia {
    constructor(obj){
        this.name = obj.name
        this.age = obj.age
    }
    voice(){
        console.log('base voice of ' + this.name)
    }
}

// const dog = new RoyalArmenia({name:'Rex',age:3})
// console.log(dog)
// dog.voice()

// class Boo extends RoyalArmenia{
//     constructor(obj){//mer boo e patkanum}
//         super(obj);//mer cnoxn e royalArmeniaic
//         this.hasCoffee = obj.hasCoffee
//         this.hasTea = obj.hasTea
// }
// voice(){
//     console.log(this.name + 'says coffee')
// }
// }

// const tea = new Boo ({name:'Peach tea',age:7,hasCoffee:true,hasTea:false})
// console.log(tea)

class User { 
    constructor(options){
        this.name = options.name
        this.age = options.age
        this.gender = options.gender
    }
}
//     sayInfo(){
//         console.log(this.name + ' ' + this.age  +' es ' +  this.gender + ' em' )
//     }
// }

// const User1 = new User ({name:'HAYk ',age:'40',gender:' txa '})
// console.log(User1.age)
// User1.sayInfo()

class Girl extends User {
    constructor(options){
        super(options);
        this.work = options.work
        this.hair = options.hair
    }
    sayInfo(){
        console.log("es" + this.name + 'em ev ashxatum em' + this.work + 'um ev unem ' + this.hair + 'mazer' )
    }
}
const girl1 = new Girl({
    name:'MANE',
    age:21,
    gender:'Female',
    work:'asistent',
    hair:'erkar'
})

console.log(girl1.work)
console.log(girl1)
girl1.sayInfo();


