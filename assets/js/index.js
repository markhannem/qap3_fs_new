// adding employee
$("#add-employee").submit(function (event) {
  alert("Employee Data Successfully Added");
});

// updating employee
$("#update-employee").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $("#update-employee").serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  console.log(data);

  var request = {
    url: `http://localhost:3000/api/employees/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Employee Data Successfully Updated");
  });
});

// deleting employee

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/employees/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you wish to delete this employee record?")) {
      $.ajax(request).done(function (response) {
        alert("Employee Data Successfully Deleted");
        location.reload;
      });
    }
  });
}
