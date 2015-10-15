//start ajax request
$.ajax({
    url: "data.json",
    //force to handle it as text
    dataType: "text",
    success: function(data) {

        //data downloaded so we call parseJSON function 
        //and pass downloaded data
        var json = $.parseJSON(data);
        //now json variable contains data in json format
        //let's display a few items
        var i;
        for (i=0;i<json.length;++i)
        {
            $('#results').append('<div class="name">'+json[i].name+'</>');
        }
    }
});

//second example
    var teams = $('#teams').val();
    var games = $('#games').val();
    var datastring = 'team=' + team + '&game=' + game;
    $.ajax({
        type: "GET",
        cache: "true",
        url: "WIS",
        datatype:"json",
        data: datastring,
        success: function(data){
            var main = $('#main'),
            var i,
            var j;
            for (i = 0, j = data.length; i < j; i++) {

                  $("#main").append('<div>' + data[i].teams + '</div>');
                  $("#main").append('<div>' + data[i].games + '</div>');
              }
        }
    });
	
	