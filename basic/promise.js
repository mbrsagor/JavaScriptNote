example = () => {
    var promise = new Promise(function (resolve, reject) {
        resolve(1);
    });

    promise.then(function (val) {
        console.log(val); // 1
        return val + 2;
    }).then(function (val) {
        console.log(val); // 3
    });

    console.log('\n');

    console.log("hello");
}
// example();

example2 = () => {
    var promise = new Promise(function (resolve, reject) {
        const python = "I'm learning javascript.";
        const javascript = "I'm learning javascript.";
        if (python === javascript) {
            resolve();
        } else {
            reject();
        }
    });

    promise.then(function () {
        console.log('Success, you got a new job.');
    }).catch(function () {
        console.log('Some error has occured');
    });
}

example2();


example3 = () => {
    let completed = false;
    new Promise(function (resolve, reject) {
        if (completed) {
            resolve();
        } else {
            reject();
        }
    }).then(function () {
        console.log("I have completed learning programming.");
    }).catch(function () {
        console.log("I haven't completed learning JS programming.");
    })
}

example3();