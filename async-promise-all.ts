function asyncDelay1(order:number){
    return new Promise(function(resolve,reject){
        let ms :number = 5000;
        setTimeout(function(){
            console.log('작업 완료 : '+order);
            resolve(order);
        },ms);
    });
}
function asyncDelay2(order:number){
    return new Promise(function(resolve,reject){
        let ms :number = 2000;
        setTimeout(function(){
            console.log('작업 완료 : '+order);
            resolve(order);
        },ms);
    });
}
function asyncDelay3(order:number){
    return new Promise(function(resolve,reject){
        let ms :number = 3000;
        setTimeout(function(){
            console.log('작업 완료 : '+order);
            resolve(order);
        },ms);
    });
}
function asyncDelay4(order:number){
    return new Promise(function(resolve,reject){
        let ms :number = 4000;
        setTimeout(function(){
            console.log('작업 완료 : '+order);
            resolve(order);
        },ms);
    });
}

function syncResultPromise(){
    let p1 = asyncDelay1(11);
    let p2 = asyncDelay2(2);
    let p3 = asyncDelay3(3);
    let p4 = asyncDelay4(4);
    
    Promise.all([p3,p2,p1,p4]).then(function(order){
        console.log(`동기화된 출력 : ${order}`);
    });
}

var m1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('gae')
    },4000);
});

var m2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('vvae');
    },2000);
});

var m3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('aaaaaa');
    },100);
});


Promise.all([m1,m2,m3]).then(function(result){
    console.log(`동기화된 출력 : ${result}`);
});

//syncResultPromise();




