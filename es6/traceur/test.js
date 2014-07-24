
/* DESTRUCTURING */

function destruct() {
    var [a,b,c] = [1,2,3]
    console.log("A: ",a);
    console.log("B: ",b);
    console.log("C: ",c);
}

/* ITERATORS */

function iterate() {
    for (var element of [1,2,3]) {
        console.log("I gotta",element);
    }
}

function customIterator() {
    
    var myiterator = function*(mult){
        var hopper = [1,2,3], i = 0;
        while (i < 3){
            yield (mult* hopper[i]);
            i++;
        }
    }

    var doubler = myiterator(2);
    debugger;
    for (var element of doubler){
        console.log("My doubler gave me",element);
    }

}
