$(document).ready(function() {

    $('.gallery').isotope({
        itemSelector: '.layout-image'
    })

    var filvalue;
    var btns = $('button').toArray();
    $.each(btns,function(key, btn) {

        $(btn).on('click', function() {
            filvalue = $(btn).text().toLowerCase();
            console.log(filvalue);
            filvalue = '.' + filvalue;
            console.log(filvalue);
            $('.gallery').isotope({
                filter: filvalue
            })

        })
    })
})