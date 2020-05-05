function redirectToHomePage(){
    window.location.replace("GetMovies.html");
}
(function($){
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        type: 'get',
        dataType: 'json',
        success: function(data){
            $.each(data, function(index, movie){
                $("#movieTitles").append(`<li>
                    <a href="MovieById.html?${movie["MovieId"]}">${movie["Title"]}</a>
                </li>`);
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
        $("#editMovie").html(`<button><a href="edit.html?${movieId}">Edit Movie</a></button>`);
        $("#deleteMovie").html(`<button><a href="delete.html?${movieId}">Delete Movie</a></button>`)
    });
})(jQuery);

(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value
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
        $("#edit-form").append(`<input type="text" name="title" value="${data["title"]}" required=true />`);
        $("#edit-form").append(`<input type="text" name="director" value="${data["director"]}" required=true />`);
        $("#edit-form").append(`<input type="text" name="genre" value="${data["genre"]}" required=true />`);
        $("#edit-form").append(`<button type="submit">Submit</button>`);
        $("#backToMovie").append(`<a href="MovieById.html?${movieId}">Back to Movie</a>`);
    })
})(jQuery);

(function($){
    function processForm( e ){
        var dict = {
            MovieId : parseInt(this["movieId"].value),
            Title : this["title"].value,
            Director : this["director"].value,
            Genre : this["genre"].value
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
            }
        });
        e.preventDefault();
    }
    $('#delete-form').submit( processForm );
})(jQuery);