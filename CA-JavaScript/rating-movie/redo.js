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

// alert("lets start");

// let getUserId = prompt("Please enter User ID. Options are 15291, 7001,51417,62289");
const getUserId = 7001;
let friendList=[];


users.forEach(item => {
    if(item.userId === parseInt(getUserId)){
        friendList = item.friends;
    }
});

let watchList = movies.filter(item => {
    return friendList.some(fid => {
        return item.watchlist.indexOf(fid) >= 0;
    });
});

// console.log("here"+watchList);
console.log("here", watchList);

// let ratingMovie = movies.map(item =>{
//      return {
//          movie: item.title,
//          rating: item.watchlist.reduce((accu,userId)=>{
//              if(friendList.indexOf(userId)>=0){
//                  accu +=1;
//              }
//              return accu;
//          },0)
//      }
// });

// console.log(ratingMovie);







// let getUserId = prompt ("please enter user id. Options are 15291, 7001,51417,62289!!!.");
// let friendList =[];

// users.forEach(item => {
//     if(item.userId === parseInt(getUserId)){
//         friendList = item.friends;
//     }
// });


// let titleRating = movies.map(movie =>{
//     return {
//         movie: movie.title,
//         rating: movie.watchlist.reduce((accru,userId)=>{
//             if (friendList.indexOf(userId)>=0){
//                 accru +=1;
//             }
//             return accru;
//         },0)
//     }
// });




