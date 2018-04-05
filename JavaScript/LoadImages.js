function load(path) {
    return function () {
        $.ajax({
            contentType: 'html',
            url: path,
            success: function (data) {
                data = data.substring(0, data.length-1);
                var url = this.url;
                var res = data.split(";");
                for(var i = 0; i < res.length; i++){
                    $("#header ul").append('<li style="background-image: url(' + url + res[i] + ');"></li>');
                    if (i == res.length - 1) {
                        $("#header ol").append('<li class="active" onclick="pointClick(' + i + ')"><i class="fa fa-circle-o"></i></li>');
                    }
                    else {
                        $("#header ol").append('<li onclick="pointClick(' + i + ')"><i class="fa fa-circle-o"></i></li>');
                    }
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                alert("Status: " + textStatus);
                alert("Error: " + errorThrown); 
            }  
        });
    }
}
