function getUser() {
    return new Promise((resolve, reject) => {
        resolve("user is there");
        reject("user not found");
    });
}
getUser().catch((ele) => {
    console.log("cathch");
    console.log(ele);
}).then((res) => {
    console.log("then");
    console.log(res);
});
function num() {
    return new Promise((resolve) => {
        resolve(10);
    });
}
num().then(res => res * 2)
    .then(res => res + 2).then((res) => {
    console.log(res);
});
