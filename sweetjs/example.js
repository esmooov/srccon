42;
// Note that a single token to sweet.js includes matched 
// delimiters not just numbers and identifiers. For example,
// an array with all of its elements counts as one token:
[
    1,
    2,
    3
];
// One of the really important things sweet.js does is protect
// macros from unintentionally binding or capturing variables they
// weren't supposed to. This is called hygiene and to enforce hygiene 
// sweet.js must carefully rename all variable names.
var x$626;
var foo$651 = 100;
var bar$652 = 200;
var tmp$653 = 'my other temporary variable';
var tmp$655 = bar$652;
bar$652 = foo$651;
foo$651 = tmp$655;
var a$681 = 2;
var b$683 = function () {
        if (a$681 > 1) {
            return 'GT';
        } else if (a$681 < 1) {
            return 'LT';
        } else {
            return 'EQ';
        }
    }();
console.log(b$683);