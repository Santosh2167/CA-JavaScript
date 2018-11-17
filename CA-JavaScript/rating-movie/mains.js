

// let heading = document.querySelector(".heading");
// heading.textContent="doing Movie Rate";

let movies = [{
    "title": "The Shawshank Redemption",
    "duration": "PT142M",
    "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
    "ratings": [],
    "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
  },
  {
    "title": "The Godfather",
    "duration": "PT175M",
    "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
    "ratings": [],
    "watchlist": [62289, 66380, 34139, 6146]
  },
  {
    "title": "The Dark Knight",
    "duration": "PT152M",
    "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
    "ratings": [],
    "watchlist": [51417, 62289, 6146, 71389, 7001]
  },
  {
    "title": "Pulp Fiction",
    "duration": "PT154M",
    "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
    "ratings": [],
    "watchlist": [7001, 9250, 34139, 6146]
  },
  {
    "title": "Schindler's List",
    "duration": "PT195M",
    "actors": [
      "Liam Neeson",
      "Ralph Fiennes",
      "Ben Kingsley"
    ],
    "watchlist": [15291, 51417, 7001, 9250, 93707]
  }];

let users = [{
        "userId": 15291,
        "email": "Constantin_Kuhlman15@yahoo.com",
        "friends": [7001, 51417, 62289]
    },
    {
        "userId": 7001,
        "email": "Keven6@gmail.com",
        "friends": [15291, 51417, 62289, 66380]
    },
    {
        "userId": 51417,
        "email": "Margaretta82@gmail.com",
        "friends": [15291, 7001, 9250]
    },
    {
        "userId": 62289,
        "email": "Marquise.Borer@hotmail.com",
        "friends": [15291, 7001]
 }];

 let userID = prompt("Pleaes enter user ID. Options are 15291, 7001,51417,62289.");

 let tempArray = users.filter(item => {
     return item.userId === parseInt(userID);
 });
 let friendList = tempArray[0].friends;
 console.log(friendList);

 let moviesInWatchList = movies.filter(item =>{
     return true;
 });

 console.log(moviesInWatchList);





//  let getUserID = prompt(`Please enter user ID: Options are 15291, 7001,51417,62289`);

//  let tempList = users.filter(item=>
//     {
//         return item.userId === parseInt(getUserID);
//     });

//  let friendList = tempList[0].friends;
// //  console.log(friendList);

//  let movieListedByFriends = movies.filter(movie => {
//     return friendList.some(id => {
//         return movie.watchlist.indexOf(id)>=0;
//     })
//  });

//  console.log(movieListedByFriends);

 // example below:

// const myFriends = [15291, 7001];

// const movieWatchListedBy = [51417, 62289, 6146, 71389, 7001];

// let result1 = myFriends.some(item => {
//     return movieWatchListedBy.indexOf(item)>=0;
// });

// console.log(result1);

//  let movieList = friendList.some(item =>{

//  });

// let friend = [
//     {
//         name:"Slesha",
//         location:"Glenfield",
//         age:30,
//     }
//     {
//         name:"Karuna",
//         location:"Kathmandu",
//         age:32,
//     }
//     {
//         name:"Mamta",
//         location:"Baneshwor",
//         age:35,
//     }
// ];