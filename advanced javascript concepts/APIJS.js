

    fetch("https://api.chucknorris.io/jokes/random")
.then((response)=> {
    return response.json();
})
        .then((data) => {
            // console.log("the data is ",data)})
            var joks = data.value
            console.log("jokes:",joks)
        })
.catch();
//this is gettig jokes from chuck noris and the main joke is in forms of value in thatobject and that value is is inserted into the joks and that is displayed