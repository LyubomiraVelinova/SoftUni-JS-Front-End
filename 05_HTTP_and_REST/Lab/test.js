function run() {
    return "Running";
}
function category(run, type) {
    console.log(run() + " " + type);
}
category(run, "sprint"); 