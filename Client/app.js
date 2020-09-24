function redirectToHomePage(){
    window.location.replace("GetMovies.html");
    console.log ("Hello world");
}
(function($){
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        type: 'get',
        dataType: 'json',
        success: function(data){
            $.each(data, function(index, movie){
                $("#movieTitles").append(`<li> <div class="card mb-3"><h3 class="card-header">
                <a href="MovieById.html?${movie["MovieId"]}">${movie["Title"]}</a></h3> 
                <img style="height: auto; width: 100%; display: block;" src="${movie["ImageURL"]}" alt="Card image">
                </div> </li>`);
            });
        },
        error: function(errorThrown){
            console.log (errorThrown);
        } 
    })
})(jQuery);

(function($){
    let movieId = location.search.slice(1);
    $.get(`https://localhost:44325/api/movie/${movieId}`, function(data){
        $("#movieInfo").html(`<li>Title: ${data["title"]}</li>`);
        $("#movieInfo").append(`<li>Director: ${data["director"]}</li>`);
        $("#movieInfo").append(`<li>Genre: ${data["genre"]}</li>`);
        $("#editMovie").html(`<a style="position: relative; left: 70px; top:30px;" class="btn btn-warning" href="edit.html?${movieId}">Edit Movie</a>`);
        $("#deleteMovie").html(`<a style="position: relative; left: 70px; top:30px;" class="btn btn-danger" href="delete.html?${movieId}">Delete Movie</a>`)
    });
})(jQuery);

(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value,
            ImageURL: this["imageURL"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            },
            complete: function(jqXhr){
                if(jqXhr.status == 200){
                    redirectToHomePage();
                }
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);
(function($){
    let movieId = location.search.slice(1);

    $.get(`https://localhost:44325/api/movie/${movieId}`, function(data){
        $("#edit-form").html(`<input type="hidden" name="movieId" value="${movieId}" />`);
        $("#edit-form").append(`<label style="position: relative; top: 10px;" for="title">Title:</label><br><input type="text" name="title" value="${data["title"]}" required=true />`);
        $("#edit-form").append(`<br><label style="position: relative; top: 10px;" for="director">Director:</label><br><input type="text" name="director" value="${data["director"]}" required=true />`);
        $("#edit-form").append(`<br><label style="position: relative; top: 10px;" for="genre">Genre:</label><br><input type="text" name="genre" value="${data["genre"]}" required=true />`);
        $("#edit-form").append(`<br><label style="position: relative; top: 10px;" for="imageURL">Image URL:</label><br><input type="text" name="imageURL" value="${data["imageURL"]}" required=true />`)
        $("#edit-form").append(`<br><button style="position: relative; top:30px;" class="btn btn-success" type="submit">Submit</button>`);
        $("#edit-form").append(` <a style="position: relative; top:30px;" class="btn btn-info" href="MovieById.html?${movieId}">Back to Movie</a>`);
    })
})(jQuery);

(function($){
    function processForm( e ){
        var dict = {
            MovieId : parseInt(this["movieId"].value),
            Title : this["title"].value,
            Director : this["director"].value,
            Genre : this["genre"].value,
            ImageURL : this["imageURL"].value
        };
        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function(data, textStatus, jQxhr){
                $('#Edit pre').html(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            },
            complete: function(jQxhr, status){
                if(jQxhr.status == 200){
                    redirectToHomePage();
                }
            }
        });
        e.preventDefault();
    }
    $('#edit-form').submit( processForm );
})(jQuery);

(function($){
    let movieId = location.search.slice(1);
    $.get(`https://localhost:44325/api/movie/${movieId}`, function(data){
        $("#deleteMovieInfo").html(`<li>Title: ${data["title"]}</li>`);
        $("#deleteMovieInfo").append(`<li>Director: ${data["director"]}</li>`);
        $("#deleteMovieInfo").append(`<li>Genre: ${data["genre"]}</li>`);
        $("#delete-form").append(`<a class="btn btn-secondary" href="MovieById.html?${movieId}">Cancel</a>`)
    });
})(jQuery);

(function($){
    let movieId = location.search.slice(1);
    function processForm( e ){
        var dict = {
            MovieId : parseInt(movieId),
        };
        $.ajax({
            url: `https://localhost:44325/api/movie/${movieId}`,
            type: 'delete',
            success: function(data, textStatus, jQxhr){
                $('#Delete pre').html(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            },
            complete: function(jQxhr){
                if(jQxhr.status == 200){
                    redirectToHomePage();
                }
            }
        });
        e.preventDefault();
    }
    $('#delete-form').submit( processForm );
})(jQuery);