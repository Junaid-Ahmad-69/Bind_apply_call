const person = {
  name: "Junaid",
  lastName: "Sandhu",
  age: 45,
  color: "red",
  height: 5.6,
  detail: function (...detailApply) {
    return "My name " + this.name + " and last name " + this.lastName + detailApply[0] + detailApply[1];
  }
}

const detailName = {
  name: 'John',
  lastName: "Snow",
}

const detailApply = ["Snow", "Ragnar"]

console.log(person.detail());

console.log(person.detail.apply(detailName, [detailApply]))


const Binder = {
  domain: "Host.com",
  link: "www.host.com",
  server: "https",
  serverMethod: function (rating) {
    return `My Domain name is ${this.domain} and link is ${this.link} using the server is ${this.server} and their rating is ${rating} star.`
  }
}

const store = Binder.serverMethod.bind(Binder)
// console.log(store.call(null, 5))
console.log(store(4))

















