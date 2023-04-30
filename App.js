
$(document).ready(function () {
    var urlAPI='https://644d62d2cfdddac970a39eb9.mockapi.io/name';
    
    // Obtener los datos de los usuarios
    $.get(urlAPI, function(data) {
      // Crear elementos de la lista para los usuarios
      var userList = $('#user-list');
      $.each(data, function(index, user) {
        var listItem = $('<li>').addClass('list-group-item');
        var name = $('<h3>').text(user.name);
        var avatar = $('<img>').attr('src', user.avatar).addClass('img-thumbnail');
        var empresa = $('<p>').text(user.empresa);
        var createdAt = $('<small>').text(user.createdAt);
        var descripcion = $('<p>').text(user.descripcion);
        var editButton = $('<button>').addClass('btn btn-primary').text('Edit').click(function() {
          $('#name').val(user.name);
          $('#empresa').val(user.empresa);
          $('#descripcion').val(user.descripcion);
          $('#id').val(user.id);
          // hide the create button and show the edit button
          $('#createBtn').hide();
          $('#editBtn').show();
        });
        var deleteButton = $('<button>').addClass('btn btn-danger delete-btn').text('Delete').data('id', user.id);
        listItem.append(name, avatar, empresa, createdAt, descripcion, editButton, deleteButton);
        userList.append(listItem);
      });
      
    });
  
    // POST request
$('#createBtn').click(() => {
  const formData = new FormData($('#myForm')[0]);
  const data = {
      name: formData.get('name'),
      empresa: formData.get('empresa'),
      descripcion: formData.get('descripcion')
  };
  $.post(urlAPI, data, function(response) {
      console.log(response);
  })
  .fail(function(error) {
      console.error('There was a problem with the post operation:', error);
  });
});

// PUT request
$('#editBtn').click(() => {
  const formData = new FormData($('#myForm')[0]);
  const data = {
    name: formData.get('name'),
    empresa: formData.get('empresa'),
    descripcion: formData.get('descripcion')
  };
  const id = formData.get('id');
  if (id) {
    $.ajax({
      url: urlAPI + '/' + id,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(result) {
        console.log("Data updated successfully");
        // reset the form and show the create button
        $('#myForm')[0].reset();
      },
      error: function(error) {
        console.error('There was a problem with the put operation:', error);
      }
    });
  } else {
    console.error('ID parameter is null or undefined, cannot update data');
  }
});


  });
