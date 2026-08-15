fetch(
  "https://hackingtonsapiproxy.herokuapp.com/" +
    "api.scratch.mit.edu/users/1220dragon/projects",
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
