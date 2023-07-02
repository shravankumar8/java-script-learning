var counter = document.querySelector(".counter");
let followers = document.querySelector(".followers");

let count = 0;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
  if(count==1000){
    followers.innerHTML = (`${count} followers`)
    

    
}
}, 1);

