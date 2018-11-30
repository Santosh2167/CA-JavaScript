let heading = document.querySelector(".heading");
heading.textContent = "Promises";

document.querySelector("button").addEventListener("click",getJokes);

function getJokes() {
    let url = "https://api.chucknorris.io/jokes/random";

    // $.get(url,(joke1)=>{
    //     $.get(url,(joke2)=>{
    //         $.get(url,(joke3)=>{
    //             $.get(url,(joke4)=>{
    //                 let jokeArray =[joke1.value,
    //                                 joke2.value,
    //                                 joke3.value,
    //                                 joke4.value];
    //                                 console.log(jokeArray);

    //             });
    //         });
    //     });
    // });
}

let x =2;
let y = 5;

let calculation = new Promise((resolve,reject)=>{
    let answer = x + y;

    if (isNaN(answer)) {
        reject("input needs to be a number");
    }
    resolve(answer);


});

calculation
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    });

    console.log(1);

    function adder (x,y){
        return new Promise((resolve,reject)=>{
            let answer = x + y;

            if(isNaN(answer)){
                reject("Input needs to be a number");
            }

            resolve(answer);
        });
    }

    adder(2,5)
    .then(answer1=> {
        adder(answer1,4)
        .then(answer2=>{
            adder(answer2,5)
            .then(answer3=>{
                console.log(answer3);

            })
            .catch(error=>{

            })

        })
        .catch(error=>{

        })
    })
    .catch(error=>{

    })
    