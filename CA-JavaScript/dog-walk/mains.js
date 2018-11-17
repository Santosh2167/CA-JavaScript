let myHeading = document.querySelector(".head");
let myDogButton = document.querySelector(".clickDog");
let myWalkButton = document.querySelector(".clickWalk");
let displayWalk = document.querySelector(".displayWalk");
myHeading.textContent = "Doing Dog Walk1";
myDogButton.textContent = "Register you Dog";
myWalkButton.textContent = "Register you Dog's walk";
displayWalk.textContent = "Display Walk of you Dog";


class Walk {
    constructor(distance, walkedLocation) {
        this.distance = distance;
        this.walkedLocation = walkedLocation;
        
    }

}

class Dog {
    constructor () {
        this.name="";
        this.liveLocation = "";
        this.walkedLocation="";
        this.distance=0;
        this.allWalks =[];
        // this.recordWalk.bind(this)
    }

    recordWalk() {
        // console.log(this);
        this.walkedLocation = prompt(`Where did ${this.name} walked?`); 
        this.distance = prompt(`How much did ${this.name} walked?`);
        this.allWalks.push(new Walk(this.distance,this.walkedLocation));
    } 

    displayWalk(){
        // console.log(this.allWalks);
        // let totalDistance=0;
        // let allWalkedLocation="";
        
        // for(let i=0;i<this.allWalks.length;i++){
        //     // console.log(this.allWalks[i].distance);
        //     totalDistance += parseInt(this.allWalks[i].distance);
        //     allWalkedLocation += this.allWalks[i].walkedLocation+ " ";
        // }

        // TODO: Explore array functions: map, reduce, filter, forEach
        const totalWalk = this.allWalks.reduce((accumulatedValue, walk) => {
            accumulatedValue.distance += parseInt(walk.distance);
            accumulatedValue.location += `${walk.walkedLocation} `;

            return accumulatedValue;
        }, {distance: 0, location: ''})

        console.log(`total distance ${totalWalk.distance}`);
        console.log(`all location: ${totalWalk.location}`);
    }

}


let myDog = new Dog();
// console.log("testing dog walk");
// myDog.run();

function registerDog() {
      
    myDog.name = prompt("what is the name of the dog you are walking today?");
    myDog.liveLocation = prompt(`Where does ${myDog.name} live?`);
     
}


myDogButton.addEventListener("click",registerDog);
myWalkButton.addEventListener("click", () => myDog.recordWalk());
displayWalk.addEventListener("click",()=>myDog.displayWalk());



