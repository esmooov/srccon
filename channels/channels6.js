function go_(machine, step) {
  while(!step.done) {
    var arr   = step.value(),
        state = arr[0],
        value = arr[1];

    switch (state) {
      case "park":
        setTimeout(function() { go_(machine, step); },0);
        return;
      case "continue":
        step = machine.next(value);
        break;
    }
  }
}

function go(machine) {
  var gen = machine();
  go_(gen, gen.next());
}

function put(chan, val) {
  return function() {
    if(! chan.hasOwnProperty("max_len")){
        chan.max_len = 1;
    }
    if(chan.length < chan.max_len) {
      chan.unshift(val);
      return ["continue", null];
    } else {
      return ["park", null];
    }
  };
}

function take(chan) {
  return function() {
    if(chan.length == 0) {
      return ["park", null];
    } else {
      var val = chan.pop();
      return ["continue", val];
    }
  };
}

function channel(len) {
    if(typeof(len) == "undefined"){
        len = 1;
    }
    var channel = [];
    channel.max_len = len
    return channel;
}

var c = channel(3);

go(function* () {
  for(var i = 0; i < 10; i++) {
    yield put(c, i);
    console.log("process one put", i, c);
  }
  yield put(c, null);
});

go(function* () {
  var receiver = [];
  while(receiver.length < 3) {
    var val = yield take(c)
    receiver.push(val);
    console.log("process two took", val, c);
  }
});
