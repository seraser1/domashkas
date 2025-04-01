

// const func = () => {
//     console.log('FUNC');
// };

// console.log('ONE');

// const timeId = setTimeout(func, 5200);
// setTimeout(func, 5200);
// setTimeout(func, 5200);
// setTimeout(func, 5200);

// clearTimeout(timeId);


// const intervalId = setInterval(func, 1000);

// clearInterval(intervalId);

// console.log('TWO');




// создать функцию hello котороя пишет в консколь
// hello world
// эта функция должна запускатсья каждую секунду
// в течении 5 секунд
// после чего запуск функции должен прекратиться

// const hello = () => {
//     console.log('hello');
// };

// const itervalId = setInterval(hello, 1000);

// const func = () => {
//     clearInterval(intervalId);
// };

// setTimeout(func, 5000);






// console.log(1);

// const timeID = setTimeout(() => {
//     console.log(2);
// }, 0);

// console.log(timeID); // 1





// stack


function foo () {
    throw new Error('Oops!');
}

function bar () {
    foo();
}

function baz () {
    bar();
}

baz();

// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=YTLXrji4DJc&pp=ygUNanMgZXZlbnQgbG9vcA%3D%3D






