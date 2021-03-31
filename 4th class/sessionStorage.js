sessionStorage.setItem("name", JSON.stringify({name: "osama", age: 55}))
sessionStorage.setItem("profession", "developer")


const value = JSON.parse(sessionStorage.getItem("name"))
console.log(value);

// sessionStorage.removeItem( 'name');

// sessionStorage.clear();