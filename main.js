const url = "https://3.68.112.247/usermanagement/Authentication/LoginUser";
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
let errormsg = document.getElementById("errormsg");
let nodata = document.getElementById("nodata")
let loading = document.getElementById("loading")

function displayingLoading () {
  loading.classList.add("show")
  // to stop loading after some time
  setTimeout(()=>{
    loading.classList.remove("show")
  },3000)
}

function hideLoading(){
  loading.classList.remove("show")
}


const init = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userTerm = username.value;
    const passTerm = password.value;

    if (userTerm === "" && passTerm === "") {
      setTimeout(() => {
        nodata.innerHTML="Enter your password and Username "
      }, 3000);
    }
    else{
      displayingLoading()
      const data = {
        method: "loginuser",
        username: userTerm,
        password: passTerm,
      };
      fetch(url, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(
          (res) => res.json()
          //console.log(res.data)
        )
        .then((res) => {
          if(res.success === false){
          //   function errorMessage(){
          //     errormsg.innerHTML="Wrong username or password "
          //   }
          // let timeOutId =  setTimeout(errorMessage, 3000); 
          // clearTimeout(timeOutId);
            setTimeout(() => {
              errormsg.innerHTML= res.responseMessage
            }, 3000);  
          }else{
            hideLoading()
            localStorage.setItem("userInfo", JSON.stringify(res.user));
            console.log(res, "fghtrg");
            location.href = "user.html";
          }
          
        })
        .catch((error) => console.log(error.message));
    }
  });
};

const printData = () => {
  console.log(localStorage.getItem("userInfo"));
};
