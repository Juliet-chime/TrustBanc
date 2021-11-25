const url = "https://3.68.112.247/usermanagement/Authentication/LoginUser";
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
let errormsg = document.getElementById("errormsg");
let nodata = document.getElementById("nodata")

const init = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userTerm = username.value;
    const passTerm = password.value;

    if (userTerm === "" && passTerm === "") {
      setInterval(() => {
        nodata.innerHTML="Please enter your password and Username "
      }, 3000);
    }
    else{
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
            setInterval(() => {
              errormsg.innerHTML="Wrong username or password "
            }, 3000);  
          }else{
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
