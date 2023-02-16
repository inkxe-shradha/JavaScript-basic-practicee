let user = {
  firstName: "John",
  lastName: "Doe",
};

const printUserWithParams = function (address) {
  console.log(
    `Hey ${this.firstName} ${this.lastName}! Your address is ${address}`
  );
};

const resFunctions = printUserWithParams.bind(user, "Wakanda Ki Jay Ho");

resFunctions();
