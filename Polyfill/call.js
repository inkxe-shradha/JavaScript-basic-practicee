let user = {
  firstName: "John",
  lastName: "Doe",
};

Function.prototype.myCall = function (scope, ...args) {
  scope._this = this;
  return scope._this(...args);
};
Function.prototype.myApply = function (scope, args) {
  scope._this = this;
  return scope._this(args);
};

const printUserWithParams = function (address) {
  console.log(
    `Hey ${this.firstName} ${this.lastName}! Your address is ${address}`
  );
};

printUserWithParams.myApply(user, ["Wanda Wakanda"]);
printUserWithParams.myCall(user, "wanada");
