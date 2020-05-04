(function($){
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        type: 'get',
        dataType: 'json',
        success: function(data){
            $.each(data, function(index, movie){
                    $("#tableData").append(`<tr id=${index}></tr>`);
                    $("#" + index).append("<td>" + movie["Title"] +"</td>");
                    $("#" + index).append("<td>" + movie["Director"] + "</td>");
                    $("#" + index).append("<td>" + movie["Genre"] + "</td>");
            })
            
        },
        error: function(errorThrown){
            console.log (errorThrown);
        }
    })
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
})(jQuery));

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
                $('#response pre').html(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
        e.preventDefault();
    }
    $('#edit-form').submit( processForm );
})(jQuery);