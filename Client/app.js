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
    function processForm( e ){
        var dict = {
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
            }
        });
        e.preventDefault();
    }
    $('#edit-form').submit( processForm );
})(jQuery);