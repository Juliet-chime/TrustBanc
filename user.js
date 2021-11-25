

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