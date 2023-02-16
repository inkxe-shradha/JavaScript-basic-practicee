let user = {
  firstName: "John",
  lastName: "Doe",
};

const printUserWithParams = function (address) {
  console.log(
    `Hey ${this.firstName} ${this.lastName}! Your address is ${address}`
  );
};

Function.prototype.myCustomBind = function (...args) {
  let object = this;
  return function (...params) {
    object.apply(args[0], [...args.splice(1), ...params]);
  };
};

Function.prototype.myCustomBind2 = function (scope, ...args) {
  scope._this = this;
  return function (...params) {
    return scope._this(...args, ...params);
  };
};

const customBind = printUserWithParams.myCustomBind(user, "Wakanad for ever");
const customBind2 = printUserWithParams.myCustomBind2(user);

customBind();
customBind2("Tim buk Tooo", "Zukajoi");
