$(function() {
    $('form').keypress(function(e) {

        if(e.which == 13) {
            var location = $('#txtsearch_location').val();

            $.ajax({
                url: '/place',
                data: $('form').serialize(),
                type: 'POST',
                success: function(response) {
                    console.log(response);},
                error: function(error) {
                    console.log(error);}
            });
        };
    });


    $('#disambButton').on('click', function() {
        var location = $('#txtsearch_location').val();

            $.ajax({
                url: '/disamb',
                data: $('#form').serialize(),
                type: 'POST',
                success: function(response) {
                    console.log(response);},
                error: function(error) {
                    console.log(error);}
                });

    });
});