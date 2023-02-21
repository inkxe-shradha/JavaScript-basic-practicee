function MyName() {
  this.name = null;
  this.age = 0;
  this.detail = {
    name: "",
    age: 0,
  };

  this.setMyName = (name) => {
    this.name = name;
  };
  this.setMyAge = (age) => {
    this.age = age;
  };
  this.setDetail = (detail) => {
    this.detail = detail;
  };
  this.getAll = () => {
    return {
      name: this.name,
      age: this.age,
      detail: this.detail,
    };
  };
  this.init = () => {
    this.setMyName("Shradha");
    this.setMyAge(20);
    this.setDetail({
      name: "kumar",
      age: 40,
    });
  };
  if (this instanceof MyName) {
    this.init();
  }
}

const instance = new MyName();
const details = instance.getAll();
console.log(details);

const modifiedInstance = new MyName();

modifiedInstance.setMyName("Amit");
modifiedInstance.setMyAge(20);
modifiedInstance.setDetail({
  name: "Amit",
  age: 20,
});

console.log(modifiedInstance.getAll());
