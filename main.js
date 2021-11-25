const url = "https://3.68.112.247/usermanagement/Authentication/LoginUser";
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

const userProfile = () => {
  let information = JSON.parse(localStorage.getItem("userInfo"));
  console.log(information);
  const main = document.getElementById("user");
  let divContent = `  <div class="card">
                        <h1>User Details</h1>
                        <h3>DisplayName: ${information.displayName}</h3>
                        <h3>GivenName: ${information.givenName}</h3>
                        <h3>Surname: ${information.surname}</h3>
                        <h3>PrincipleName: ${information.userPrincipalName}</h3>
                        <h3>BusinessPhone: ${information.businessPhones}</h3>
                        <h3>ID: ${information.id}</</h3>
                        <h3>Jobtitle: ${information.jobTitle}</h3>
                        <h3>Mail: ${information.mail}</</h3>
                        <h3>MobilePhone: ${information.mobilePhone}</</h3>
                        <h3>OfficeLocation: ${information.officeLocation}</h3>
                    </div>
                `;
  main.innerHTML = divContent;
};

const init = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userTerm = username.value;
    const passTerm = password.value;

    if (userTerm && passTerm) {
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
          localStorage.setItem("userInfo", JSON.stringify(res.user));
          console.log(res.user);
          location.href = "user.html";
        })
        .catch((error) => console.log(error.message));
    }
  });
};

const printData = () => {
  console.log(localStorage.getItem("userInfo"));
};
