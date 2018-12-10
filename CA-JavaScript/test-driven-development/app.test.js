const {add,subtract} = require("./app");
//const assert = require("assert");

// const result = add(1,5);

// if (result !==6) {
//     throw "Add did not return 6 when given 1 and 5";
// }

// const actual = add(1,5);
// const expectation = 6;



// if (actual !==expectation){
    
//     throw "Add did not return 6 when given 1 and 5";

// }

// assert.equal(actual,expectation);

// assert.throws(() => {
//     add(1)
// });

describe ("add()",() => {

        test ("add(1,5) is equal to 6",() =>{
            const actual = add(1,5);
            const expectation =6;
            // assert.equal(actual,expectation);
            expect(actual).toBe(expectation);
        });

        test ("add() with 1 argument throws an error",() =>{
            // assert.throws(() =>{
            //     add(1);
            // });

            expect(() => add(1)).toThrow();
        });
});

describe ("subtract()",() => {
    test ("subtract(6,7) is equal to -1", ()=> {
        const actual = subtract(6,7);
        const expectation = -1;
        expect(actual).toBe(expectation);
    });

    test ("add() with 1 argument throws an error",() =>{
       
        expect(() => subtract(1)).toThrow();
    });

});