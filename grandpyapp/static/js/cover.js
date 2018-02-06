$(function() {
    $('#search_location').keypress(function(e) {
        if(e.which == 13) {
            var location = $('#txtsearch_location').val();
            $.ajax({
                url: '/place',
                data: $('#search_location').serialize(),
                type: 'POST',
                success: function(response) {
                    console.log(response);},
                error: function(error) {
                    console.log(error);}
            });
        };
    });


     $('#disamb').on('click', function() {
        var location = $('#txtsearch_location').val();
            $.ajax({
                url: '/disamb',
                data: $('#search_location').serialize(),
                type: 'POST',
                success: function(response) {
                    console.log(response);},
                error: function(error) {
                    console.log(error);}
                });

    });


    $('ul').on('click', 'li', function() {
        var location = $(this);
        $.ajax({
                url: '/newPlace',
                data: location.serialize(),
                type: 'POST',
                success: function(response) {
                    console.log(response);},
                error: function(error) {
                    console.log(error);}
                });

    });
});