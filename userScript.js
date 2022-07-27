$(document).ready(function () {
  console.log("working");
  $(".subForm").click(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    // var name = document.querySelector("#name").value;
    var email = $("#email").val();
    var phone = $("#phone").val();
    var age = $("#age").val();
    var adhaarNumber = $("#Adhaar_number").val();
    var address = $("#address").val();
    var date = $("#date").val();
    var data = {
      name: name,
      email: email,
      phone: phone,
      age: age,
      adhaarNumber: adhaarNumber,
      address: address,
      date: date,
    };
    console.log(name, phone, email, age, adhaarNumber, address, date);
    var array = JSON.parse(localStorage.getItem("Data") || "[]");
    array.push(data);
    localStorage.setItem("Data", JSON.stringify(array));
    $("#vaccineForm").trigger("reset");
    alert("Form Submitted");
  });
});

