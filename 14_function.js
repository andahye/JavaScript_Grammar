

// 1. 함수의 선언과 호출
// 함수 선언 - function이라는 키워드를 이용해 선언
// function 함수이름(전달받는 인자) {
//    코드의 동작
//}
function sayHello() {
    console.log('hello'); // 여기까지 하면? 아무것도 출력안됨. 당연함. 선언만 했음. -> 호출을 해야됨.
}
sayHello(); // -> 함수의 이름과 괄호를 이용하여 호출. 
// = 기능을 수행하고(console에 log를 출력하는 기능) 끝내는 함수


// 2. 값을 리턴하는 함수 = 어떠한 계산을 한 뒤 특정한 값을 전달하는 아이
function add(a, b) { //add라는 function은 a와 b라는 특정한 인자값들을 받아와서 다음과 같은 코드를 수행한다
    // 2. add에는 1과 2라는 값이 들어온다. 
    const sum = a + b; //sum이라는 변수에 a와 b를 더하여 할당. 
    // -> 3. 1과 2를 더하여 sum에 3이라는 값 할당. -> 할당은 했는데.. 전달이 안됐네? 
    return sum; // -> 4. return이라는 키워드를 이용하여 계산한 값을 전달. 
}
// add(1,2); 1. add라는 함수에 1,2을 넣어 호출.
//->그러나 이렇게 하면 결국 아무 일도 일어나지 않는다.
const result = add(1, 2); //함수가 전달한 값을 result라는 변수에 저장 
// -> result라는 변수를 정의함과 동시에 어떠한 값을 할당할건데, 1과 2라는 값을 전달해서 -> add라는 함수 호출 -> 함수에 정의된 코드 실행 -> sum이라는 변수 할당 -> 할당된 sum이라는 변수의 값을 반환 -> 전달된 값이 result로 전달. 
console.log(result);


// 3. 함수를 인자로 전달 
function doSomething(add) { //전달받은 add를 통해서 코드 블럭 실행
    console.log(add);
    const result = add(2,3); //add에 2,3 전달하여 result에 할당 
    console.log(result); //result에 할당된 값 반환 
}

// doSomething(add); //doSomething을 호출하며 인자로 add라는 함수 자체가 전달한다. 
// doSomething(add()); or doSomething(add(1,2)); -
// => 이런 식으로 함수를 바로 호출해버리는 건 가장 많이 하는 실수 중 하나. 함수 자체만 전달해야 합니다!


// 4. 함수의 선언과 호출 총정리 
// 함수에는 선언과 호출이 있다. 
// function 선언을 할 때는 (어떤 값을 전달받아 올 건지 인자들을 정의하고 나서) {
//    코드 블럭을 작성하게 되는데, 선언만 해놓으면 작성한 코드 블럭은 수행되지 않는다.  
//}
// 선언한 함수를 선언하기 위해서는 함수를 호출해야한다. 어떻게?
// 함수이름(정의된 인자값); <-이렇게. 
// 함수의 이름은 함수를 가르키는 함수 자체가 된다. 그래서 괄호를 쓰지 않고 함수 이름만 다른 함수의 인자로 전달하거나, 다른 변수에 할당하게 되면 함수 자체를 가르키에 되는 것이다. 


// 5. 함수를 변수에 할당 
const addFun = add; 
console.log(add);
addFun(1,2);
// addFun이라는 상수변수에 add라는 함수 이름을 할당하게 되면 addFun은 함수 자체만 전달하게 된다. 