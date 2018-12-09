

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

let temUserData = users.filter(item =>{
    return item.userId===parseInt(userID);
});

let friendList = temUserData[0].friends;



//map on movies 
//check if there is any firends in friendlist
//if true how many friends in friendlist 
//return the object 
//sorting 

// let ratedMoviesList = moviesInWatchlist.map(movie =>{
//     return {
//         title: movie.title,
//         rating: movie.watchlist.reduce((accu,userId)=> {
//             if(friendList.indexOf(userId)>=0) {
//                 accu +=1;
//             }
//             return accu;
//         },0)
//     };
// });



// console.log(ratedMoviesList);

// let alpha = ratedMoviesList.sort((a,b) =>{
//     if(a.title < b.title) {
//         return -1;
//     }else if (a.title > b.title){
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log(alpha);

// let score = alpha.sort((a,b)=>{
//     return b.rating - a.rating;
// });

// console.log(score);

//  let tempUserDetail = users.filter(item => {
//      return item.userId ===parseInt(userID);
//  });
 
//  let friendList = tempUserDetail[0].friends;

//  let movieInWatchlist = movies.filter(movie =>{
//     return friendList.some(id => {
//         return movie.watchlist.indexOf(id)>=0;
//     })
//  });

//  let movieWatchlistCount = movieInWatchlist.map(movie => {
//     return {
//         title: movie.title,
//         watchlistedCount: movie.watchlist.reduce((accu,userid)=>   {
//             if (friendList.indexOf(userid)>=0){
//                 accu += 1;
//             }
//             return accu;
//         }, 0)
//     };
//  });
 
//  let alpha = movieWatchlistCount.sort((a,b) => {
//     if(a.title < b.title) {
//         return -1;
//     }else if (a.title > b.title) {
//         return 1;

//     } else {
//         return 0
//     };
//  });
 
//  let score = alpha.sort((a,b) => {
//      return b.watchlistedCount - a.watchlistedCount;
//  });
 
//  console.log(score);



//  let tempArray = users.filter(item => {
//      return item.userId === parseInt(userID);
//  });
//  let friendList = tempArray[0].friends;
//  console.log(friendList);

//  let moviesInWatchList = movies.filter(item =>{
//      return friendList.some(userID =>{
//         return item.watchlist.indexOf(userID)>=0;
//      })
//  });

//  let moviesWatchlistCount = moviesInWatchList.map(movie =>{
//     return {
//         title: movie.title,
//         watchlistedCount: movie.watchlist.reduce((accumulator, userid) => {
//             if(friendList.indexOf(userid) >= 0) {
//                 accumulator += 1;
//             }

//             return accumulator;
//         }, 0);
//     }
//  }); 

//  let shortListAlphabetically = moviesWatchlistCount.sort((a,b) => {
//      if (a.title < b.title) {
//          return -1;
//      } else if (a.title > b.title) {
//          return 1;
//      } else {
//          return 0;
//      }
//  });

//  let sortByWatchListedCount = shortListAlphabetically.sort((a,b) => {
//     return b.watchlistedCount - a.watchlistedCount;
//  });

//  const finalListWithDesiredLength = sortByWatchListedCount.slice(0, 4);

//  console.log(finalListWithDesiredLength);




