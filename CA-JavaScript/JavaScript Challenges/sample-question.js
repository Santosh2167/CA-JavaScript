const players = [
    {
      "id": 109191123,
      "surname": "Farah",
      "full_name": "Robbie Farah",
      "short_name": "R. Farah",
      "other_names": "Robert",
      "jumper_number": 9,
      "position_code": "CEN1",
      "position_order": 9,
      "position_description": "Hooker",
      "is_captain": false,
      "is_interchange": false
    },
    {
      "id": 109509,
      "surname": "Rapana",
      "full_name": "Jordan Rapana",
      "short_name": "J. Rapana",
      "other_names": "Jordan",
      "jumper_number": 1,
      "position_code": "FBCK",
      "position_order": 1,
      "position_description": "Full Back",
      "is_captain": false,
      "is_interchange": false
    },
    {
      "id": 111285,
      "surname": "Waqa",
      "full_name": "Sisa Waqa",
      "short_name": "S. Waqa",
      "other_names": "Sisa",
      "jumper_number": 2,
      "position_code": "WING1",
      "position_order": 2,
      "position_description": "Wing",
      "is_captain": false,
      "is_interchange": false
    },
    {
      "id": 109861,
      "surname": "Croker",
      "full_name": "Jarrod Croker",
      "short_name": "J. Croker",
      "other_names": "Jarrod",
      "jumper_number": 3,
      "position_code": "CEN1",
      "position_order": 3,
      "position_description": "Centre",
      "is_captain": true,
      "is_interchange": false
    },
    {
      "id": 112814,
      "surname": "Lee",
      "full_name": "Edrick Lee",
      "short_name": "E. Lee",
      "other_names": "Edrick",
      "jumper_number": 5,
      "position_code": "CEN2",
      "position_order": 4,
      "position_description": "Centre",
      "is_captain": false,
      "is_interchange": false
    }
];

const playerStats = [
    {
        "id": 112814,
        "matches": "123",
        "tries": "11"
    },
    {
        "id": 111285,
        "matches": "234",
        "tries": "22"
    },
    {
        "id": 109861,
        "matches": "345",
        "tries": "33"
    },
    {
        "id": 109509,
        "matches": "456",
        "tries": "44"
    },
    {
        "id": 109510,
        "matches": "567",
        "tries": "55"
    }
];


// Create a new array that contains, playerId, player full_name with their respective stats (matches & tries)
// The final outcome should be sorted by player's position_order.
// Do not display any players that do not have their respective stats.
