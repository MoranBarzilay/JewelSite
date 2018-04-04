function load(path) {
    return function () {
        $.ajax({
            contentType: 'html',
            url: path,
            success: function (data) {
                var i = 0;
                var imageCollection = $(data).find("a:contains(.jpeg)");
                var length = imageCollection.length;
                imageCollection.each(function () {
                    var images = $(this).attr("href");
                    $("#header ul").append('<li style="background-image: url(' + images + ');"></li>');
                    if (i == length - 1) {
                        $("#header ol").append('<li class="active" onclick="pointClick(' + i + ')"><i class="fa fa-circle-o"></i></li>');
                    }
                    else {
                        $("#header ol").append('<li onclick="pointClick(' + i + ')"><i class="fa fa-circle-o"></i></li>');
                    }
                    i++;
                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                alert("Status: " + textStatus);
                alert("Error: " + errorThrown); 
            }  
        });
    }
}
