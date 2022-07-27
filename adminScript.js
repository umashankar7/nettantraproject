$(document).ready(function () {
  var items = JSON.parse(localStorage.getItem("Data"));
  items.forEach((element) => {
    $(".vaccinedata").append(
      `<tr><td>${element.name}</td><td>${element.email}</td><td>${element.age}</td><td>${element.phone}</td><td>${element.adhaarNumber}</td><td>${element.address}</td><td>${element.date}</td></tr>`
    );
    // console.log(element.name);
  });
  //   console.log(items);
});
