/* PLEASE READ EACH STEP CAREFULLY INCLUDING CAVEATS--->

  STEP 1:  Implement fanOut.

  fanOut - return a new collection of results after applying the
           input function to each item in the input collection.

  ARGS:   input - input collection
          cb    - callback function to apply to each item in the collection

  EX:   - fanOut([1, 2, 3], double) -->  [1, 4, 9];
        - function double(n) { return n * n; }

  CAVEATS:
    - Do not use make any function calls (other than fn and push)
    - You may not use any external libraries
*/

const fanOut = (input, cb) => {
    // TODO: your implementation here
    let result = [];
    for (let i = 0; i < input.length; i++) {
        result.push(cb(input[i]))
    };
    
    return result;
};

/*
 STEP 2:  Implement funnel.

 funnel - return a result after applying an accumulation function to
          each item in the collection. Funneling down to a single result.

 ARGS:  input - input collection
        fn - function to apply to each item in the collection with args accumulation value and current value
        startValue - start the accumulation with this value

 EX:  - funnel([1, 2, 3], add, 0) -->  6;
      - funnel([1, 2], add, 1) --> 4
      - function add(total, n) { return total + n; }

 CAVEATS:
   - Do not use make any function calls (other than fn and push)
   - You may not use any external libraries
 */

const funnel = (input, fn, startValue) => {
    // TODO: your implementation here.w
    for (let i = 0; i < input.length; i++) {
        var funResult = startValue += input[i];
    }
    return funResult;
};

/*
 STEP 3:  Implement distill. Glad you made it here... Are you feeling the same?

 distill: return a new collection of results after applying the
          predicate function to each item. Only include the item in the result
          if the predicate returns true.

 ARGS:    input - input collection
          fn - predicate function to apply to each item in the collection

 EX:  - distill([1, 2, 3], isEven) -->  [2];
      - distill([1, 2, 3], isOdd) -->  [1, 3];
      - distill([1, 2, 3], isNegative) -->  [];

 CAVEATS:
 - Do not use make any function calls (other than fn and push)
 - You may not use any external libraries
 */

const distill = (input, fn) => {
    // TODO: your implementation here.
    let disResult = [];

    for (let i = 0; i < input.length; i++) {
        const dis = fn(input[i]);
        if (dis === true) {
            disResult.push(input[i]);
        }
    }
    return disResult;
};

/*
STEP 4: Implement numberOfCharacters.

numberOfCharacters - return the number of characters in the input array of strings

ARGS: input - input collection of strings (words)

EX: - numOfChars(['the']) -->  3;
    - numOfChars(['the', 'end']) -->  6;

CAVEATS:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries
 */

const numberOfCharacters = (input) => {
    // TODO: your implementation here.
    //fanout: return a new collection of items
    // funnel: return result after applying addition to each item
    //distil: if predict is true, return item

    let result = funnel(input, function(i) { return i; }, '');
    return result.length;
};

/*
 STEP 5: Implement numberOfSpecialCharacters.

 numberOfSpecialCharacters - return the number of c characters in the input array of strings

 ARGS: input - input collection of strings (words)
       c - the certain character to count

 EX:  - numOfCertainChars(['the'], 'e') -->  1;
      - numOfCertainChars(['the', 'end'], 'e') -->  2;

 CAVEATS:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries
 */

const numberOfSpecialCharacters = (input, c) => {
    // TODO: your implementation here.
    let specialResult = [];
    // call fanout function and give input and callback function..
    let result = fanOut(input, (x) => {
        // callback function is the distill function that takes in an input and a function that is applied to all characters int he input
        let pen = distill(x, (i) => {
            if(i===c){
                specialResult.push(i);
            }
        })
    })
    return specialResult.length;
};

// EXTREME STRETCH
// STEP 6: Implement groupObjectsByProp
// ARGS:  collection: an array of objects
//        prop: a string refrencing the prop
//
// CAVEATS:
// -- no external libraries or function calls
// -- you may only use .push and .reduce
//
// EXAMPLE: const data = [{id: 4, name: 'bob'}, {id: 1, name: 'sue'}, {id: 6, name: 'sue'}];
// groupObjectsByProp(data, 'name');
// => { bob: [ { id: 4, name: 'bob' } ], sue: [ { id: 1, name: 'sue' }, { id: 6, name: 'sue' } ] }

const groupObjectsByProp = (collection, prop) => {
    return {};
};

export { distill, fanOut, funnel, groupObjectsByProp, numberOfCharacters, numberOfSpecialCharacters };
