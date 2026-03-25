

        jQuery(function() {
            var $module = jQuery('#m-1560531027361').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560531027361-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560531027361-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560531027361-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            try {
                var $module = jQuery('#m-1560532715053').children('.module');   
                var navspeed = $module.data('navspeed'),
                    autoplaytimeout = $module.data('autoplaytimeout'),
                    autoplayhoverpause = $module.data('autoplayhoverpause'),
                    navlg = $module.data('navlg'),
                    navmd = $module.data('navmd'),
                    navsm = $module.data('navsm'),
                    navxs = $module.data('navxs'),
                    collg = $module.data('collg'),
                    colmd = $module.data('colmd'),
                    colsm = $module.data('colsm'),
                    colxs = $module.data('colxs'),
                    dotslg = $module.data('dotslg'),
                    dotsmd = $module.data('dotsmd'),
                    dotssm = $module.data('dotssm'),
                    dotsxs = $module.data('dotsxs'),
                    marginlg = parseInt($module.data('marginlg')),
                    marginmd = parseInt($module.data('marginmd')),
                    marginsm = parseInt($module.data('marginsm')),
                    marginxs = parseInt($module.data('marginxs'));
    
                var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
                if(mode == 'production') {
                    var autoplay = $module.data('autoplay'), 
                        loop = $module.data('loop');
                } else {
                    var autoplay = 0, 
                        loop = 0;
                }
            
                $module.owlCarousel({
                    mouseDrag: false,
                    autoplayHoverPause: autoplayhoverpause,
                    autoplay: autoplay,
                    autoplayTimeout: autoplaytimeout,
                    loop: loop,
                    navSpeed: navspeed,
                    autoWidth: !1,
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:colxs,
                            nav: navxs,
                            dots:dotsxs,
                            margin: marginxs
                        },
                        768:{
                            items:colsm,
                            nav: navsm,
                            dots:dotssm,
                            margin: marginsm
                        },
                        992:{
                            items:colmd,
                            nav: navmd,
                            dots:dotsmd,
                            margin: marginmd
                        },
                        1200:{
                            items:collg,
                            nav: navlg,
                            dots:dotslg,
                            margin: marginlg
                        }
                    }
                }); 
            } catch(err) {}

        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532742468').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532742468-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532742468-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532742468-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532742468-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532781082').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532781082-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532781082-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532781082-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532781082-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532790006').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532790006-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532790006-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532790006-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532805605').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532805605-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532805605-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532805605-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532805605-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532824645').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532824645-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532824645-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532824645-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532824645-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532826442').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532826442-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532826442-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532826442-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532826442-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532827345').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532827345-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532827345-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532827345-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532827345-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532828209').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532828209-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532828209-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532828209-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532828209-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532829064').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532829064-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532829064-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532829064-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560532829064-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842267495').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842267495-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842267495-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842267495-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842267495-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842270894').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842270894-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842270894-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842270894-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842270894-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842272006').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842272006-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842272006-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842272006-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1561842272006-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    