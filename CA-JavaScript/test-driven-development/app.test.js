const {add} = require("./app");

const result = add(1,5);

if (result !==6) {
    throw "Add did not return 6 when given 1 and 5";
}