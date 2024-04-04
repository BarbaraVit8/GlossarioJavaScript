db = {};

db.init = function(callback) {
    $.getJSON('Js/db.json', function(data) {
        db.data = data;
        if(callback) {
            callback();
        }
    });
}