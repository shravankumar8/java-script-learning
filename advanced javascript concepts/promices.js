const uno = () => {
  return "i am one ";
};
// const dos = async() => {
//     setTimeout(() => {
//         return "delayed text"

//     }, 3000);
// }
const dos = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("get data from server");
          reject("data cant be fetched /not found")
        
    },3000);
      
  });
};

const tres = () => {
  return "i am three";
};

//the problem here is we want the delayed text to be displayed before tres executed we need the complete block of dos to be executed and then move on to the next.
const callMe = () => {
  let valOne = uno();
  console.log(valOne);

  let valtwo = dos();
  console.log(valtwo);

  let valthree = tres();
  console.log(valthree);
};
callMe();
