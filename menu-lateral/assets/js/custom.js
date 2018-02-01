$(document).ready(function() {
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = $('.side-collapse');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel).toggleClass('out');
            });
        });
