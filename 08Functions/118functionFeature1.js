// functions are variable (fn ko as a parameter pass kr skte h kisi aur fn k andr)
function outer(param) {
    console.log(param);
    param();
}

function chotafn() {
    console.log("Hello I am chota fn");
}
// function can be passed as a parameter to another function (bcoz fncn is variable/1st class citizen)
// 1. function ki as a feature/parameter/variable kisi dusre function m pass kr skte h - HOF
outer(chotafn);