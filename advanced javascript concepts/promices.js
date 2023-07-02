const uno = () => {
  return "i am one ";
};
// const dos = async() => {
//     setTimeout(() => {
//         return "delayed text"

//     }, 3000);
// }

// when user data is true it give a responce "got the user data" other wise it throws up an erros saying user data not found
userdata = false;
const dos = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (userdata == true) {
              resolve("got the user data")
          }else reject("user data not found")
          
        //   reject("data cant be fetched /not found")
        
    },3000);
      
  });
};

const tres = () => {
  return "i am three";
};

//the problem here is we want the delayed text to be displayed before tres executed we need the complete block of dos to be executed and then move on to the next.
const callMe = async () => {
  let valOne = uno();
  console.log(valOne);

  let valtwo =await dos();//await is what which lets the complete block of code to be executed before it moves on to the next block this makes sure it waits as per the time and also you have to initialize the async functions on the parent object
  console.log(valtwo);

  let valthree =   tres();
  console.log(valthree);
};
callMe();
