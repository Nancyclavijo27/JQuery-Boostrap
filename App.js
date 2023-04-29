
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
        listItem.append(name, avatar, empresa, createdAt);
        userList.append(listItem);
      });

      

      $.ajax({
        url:urlAPI + "/"+ 1, // replace with the appropriate URL for your API
        method: 'PUT',
        data: { name: 'New Name' },
        success: function(response) {
          console.log(response);
        },
        error: function(xhr, status, error) {
          console.log(error);
        }
      });
    });
  
    $.ajax({
        url:urlAPI,
        type: 'POST',
        data: { name: 'John', email: 'john@example.com' },
        success: function(response) {
          console.log(response);
        },
        error: function(xhr, status, error) {
          console.log(error);
        }
      });

  

    //$("#my-button").on("click", function(){
       // dataEjemplo= {
       //     name:"Nancy "//por lo que vamos a cambiar
       // }

        //$.ajax({
        //    type: "PUT",
        //    url:urlAPI + "/"+ 1,
        //    contentType:"application/json",
         //   data: JSON.stringify(dataEjemplo)
       // })
       // .done(function(data){
      //      console.log("respuesta >", data)
      //  })
      //  .fail(function(error){
       //     console.log("respuesta >", error)
       // });



    //});

    //$("#my-button").on("click", function(){
    //    dataEjemplo= {
     //   name:"Carlos"//por lo que vamos a cambiar
     //    } 

     //    $.post(urlAPI,
     //       dataEjemplo,
     //       function(data){
      //          console.log("respuesta [create] >", data)
      //      }
      //      )
   // })
 
  });
