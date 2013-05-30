/*
 *  A Smooth Scroll - v0.0.1
 *  Simple plugin for smooth srolling anchors
 *  
 *
 *  Made by Nick Lau
 */
/*
 *  A Smooth Scroll - v0.0.1
 *
 *  Made by Nick Lau
 */

;(function ( $, window, document, undefined ) {

        // Create the defaults 
        var pluginName = "anchorSmooth",
                defaults = {
                speed: 500,
                yOffset: 0
        };

        // Pugin constructor
        function Plugin ( element, options ) {
                this.element = $("#smooth-scroll").find("a");
                this.options = $.extend( {}, defaults, options );
                this._defaults = defaults;
                this._name = pluginName;
                this.init();
        }

        Plugin.prototype = {
                init: function () {
                        speed = this.options.speed;
                        yOffset = this.options.yOffset;
                        this.element.click(function(e) {
                            e.preventDefault();
                            target = this.getAttribute("href");
                            $("html, body").animate({
                                scrollTop: $(target).offset().top + yOffset
                            }, speed);
                            
                        });
                },
        };

        // A really lightweight plugin wrapper around the constructor
        $.fn[ pluginName ] = function ( options ) {
                return this.each(function() {
                        if ( !$.data( this, "plugin_" + pluginName ) ) {
                                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
                        }
                });
        };

})( jQuery, window, document );

/* THE CODE

var nav_items = document.getElementsByClassName("nav-item");

    $(nav_items).click(function(e) {
        
        var pathname = window.location.pathname;
        console.log(pathname);
        target = $(this).attr("href");
        target = target.replace('/','');    
        console.log($(target).offset().top);            
        $('html, body').animate({
            scrollTop: $(target).offset().top - 60
        }, 500);
        // location = pathname;     
            
        e.preventDefault();
    });

*/