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
                $("#movieTitles").append(`<li> <div class="card mb-3"><h3 class="card-header">
                <a href="MovieById.html?${movie["MovieId"]}">${movie["Title"]}</a></h3> 
                <img style="height: 200px; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image">
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
        $("#editMovie").html(`<a class="btn btn-warning" href="edit.html?${movieId}">Edit Movie</a>`);
        $("#deleteMovie").html(`<a class="btn btn-danger" href="delete.html?${movieId}">Delete Movie</a>`)
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
        $("#edit-form").append(`<input type="text" name="title" value="${data["title"]}" required=true />`);
        $("#edit-form").append(`<input type="text" name="director" value="${data["director"]}" required=true />`);
        $("#edit-form").append(`<input type="text" name="genre" value="${data["genre"]}" required=true />`);
        $("#edit-form").append(`<button class="btn btn-success" type="submit">Submit</button>`);
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