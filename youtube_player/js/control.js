$(function () {
    $(".header_btn").click( function () {
        $("header").toggleClass("open");
    })

    $(".youtube").each(function() {
        $(this).css('background-image', 'url(https://i.ytimg.com/vi/' + this.id + '/maxresdefault.jpg)');
        var icon = '<div class="play"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"><path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15 C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884 c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"/></svg></div>';
        $(this).append(icon);
        $(document).delegate('#'+this.id, 'click', function() {
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': '100%', 'height': 'inherit' })
            $(this).html(iframe);
        });
    });

})