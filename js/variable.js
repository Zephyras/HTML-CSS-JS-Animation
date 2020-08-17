//2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name'; {
    let name = 'hwnag';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)호이스팅은 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 위로 끌어올리는거
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);


// 3. Constans, r(read only)메모리가 선언되면 락걸려서 데이터를 변경할수 없다 
//use const whenever possible.
//only use let if variable needs to change.

// favor imutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistake
const daysInWeek = 7;
const maxNumber = 5;
console.log(daysInWeek, maxNumber);

//Note!
//Immutable data types: premitive types, frozen objects ( i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
//

//4. Variable types
// primitive(value of value), single item: number, string, boolean, null, undefine,
// object(value of reference), box container
// function, first-class function

const count = 17; // integer
const size = 17.2; // deciaml number


const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a nuber' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
//const bigInt = 1231241241512312312412312412513124 n;
//console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hellow' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `his ${brendan}!`; // template literals (stirng)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type: ' + typeof helloBob);

//boolean
//false: 0, null, undefined, NaN, ''
//true:any other value;
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead} value: ${typeof canRead}`);
console.log(`value: ${test} value: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined; //
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// symbol 은 바로 출력하면 에러가 발생한다 그래서 .description으로 변형해서 출력해야한다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4); //true
console.log(`value: ${symbol3.description}, type: ${typeof symbol3}`);

// object, real-life object, data struct
const ellie = { name: 'ellie', age: 20 };
console.log(`name: ${ellie.name}`);
ellie.age = 21;
ellie.name = 'hwang';
console.log(`name: ${ellie.name}`);
// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type ${typeof text}`);
text = 1;
console.log(`value: ${text}, type ${typeof text}`);
text = '7' + 5
console.log(`value: ${text}, type ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type ${typeof text}`);
console.log(text.charAt(0)); // 처음 할당된 타입이 string타입 인데 숫자타입을 변경하면 에러발생한다. 런타임에서 타입이 정해지기 때문이다. 그래서 타입스크립트가 나왔다.