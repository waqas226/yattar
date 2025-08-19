var CRUMINA = {};

(function ($) {
    'use strict';

    var $window = $(window),
        $document = $(document),
        $body = $('body'),
        $header = $('#header--standard'),
        $profileMenu = $('.profile-menu'),
        $preloader = $('#hellopreloader');

    // Preloader
    CRUMINA.preloader = function () {
        $window.scrollTop(0);
        $preloader.addClass('preloader');
        setTimeout(function () {
            $preloader.fadeOut(800);
        }, 500);
        return false;
    };

    // Back to top
    $('.back-to-top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1200);
        return false;
    });

    // Quantity plus
    $(document).on('click', '.quantity-plus', function () {
        var $input = $(this).prev('.number-spinner').find('input');
        var value = parseInt($input.val());
        $input.val(value + 1).change();
        return false;
    });

    // Quantity minus
    $(document).on('click', '.quantity-minus', function () {
        var $input = $(this).next('.number-spinner').find('input');
        var value = parseInt($input.val());
        if (value !== 1) {
            $input.val(value - 1).change();
        }
        return false;
    });

    // Number spinner hold
    $(function () {
        var interval;
        $(document).on('touchstart mousedown', '.number-spinner button', function () {
            var $btn = $(this),
                $input = $btn.closest('.number-spinner').find('input');
            $btn.prop('disabled', false);
            interval = $btn.data('dir') === 'up'
                ? setInterval(function () {
                        if (
                            $input.attr('max') == null ||
                            parseInt($input.val()) < parseInt($input.attr('max'))
                        ) {
                            $input.val(parseInt($input.val()) + 1);
                        } else {
                            $btn.prop('disabled', true);
                            clearInterval(interval);
                        }
                    }, 50)
                : setInterval(function () {
                        if (
                            $input.attr('min') == null ||
                            parseInt($input.val()) > parseInt($input.attr('min'))
                        ) {
                            $input.val(parseInt($input.val()) - 1);
                        } else {
                            $btn.prop('disabled', true);
                            clearInterval(interval);
                        }
                    }, 50);
        });
        $(document).on('touchend mouseup', '.number-spinner button', function () {
            clearInterval(interval);
        });
    });

    // Tab shown
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if ($(e.target).data('dir') === 'events') {
            $('#events').click();
        }
    });

    // Sidebar open
    $('.js-sidebar-open').on('click', function () {
        if ($body.outerWidth() <= 560) {
            $(this).closest('body').find('.fixed-sidebar').removeClass('open');
        }
        var $sidebar = $(this).closest($profileMenu);
        if ($sidebar.hasClass('open')) {
            $profileMenu.each(function () {
                $(this).removeClass('open');
                $(this).find('.js-sidebar-open').removeClass('overlay-enable');
            });
        } else {
            $profileMenu.each(function () {
                $(this).addClass('open');
                $(this).find('.js-sidebar-open').addClass('overlay-enable');
            });
            $sidebar.addClass('open');
            $sidebar.find('.js-sidebar-open').addClass('overlay-enable');
        }
        return false;
    });

    // ESC key closes sidebar
    $window.keydown(function (e) {
        if (e.which === 27 && $profileMenu.is(':visible')) {
            $profileMenu.removeClass('open');
        }
    });

    // Click outside closes sidebar
    $document.on('click', function (e) {
        if (!$(e.target).closest($profileMenu).length && $profileMenu.is(':visible')) {
            $profileMenu.removeClass('open');
        }
    });

    // Popup
    var $popups = $('.window-popup');
    $('.js-open-popup').on('click', function (e) {
        var target = $(this).data('popup-target');
        var $popup = $popups.filter(target);
        var offset = $(this).offset();
        $popup.addClass('open');
        $popup.css('top', offset.top - $popup.outerHeight() / 2);
        $body.addClass('overlay-enable');
        return false;
    });

    // ESC key closes popup
    $window.keydown(function (e) {
        if (e.which === 27) {
            $popups.removeClass('open');
            $body.removeClass('overlay-enable');
            $('.profile-menu').removeClass('active');
            $('.popup-chat-responsive').removeClass('open-chat');
            $('.profile-settings-responsive').removeClass('open');
            $('#profile-panel').removeClass('open');
            $('.js-sidebar-open').removeClass('overlay-enable');
        }
    });

    // Click outside closes popup
    $document.on('click', function (e) {
        if (!$(e.target).closest($popups).length) {
            $popups.removeClass('open');
            $body.removeClass('overlay-enable');
        }
        if (!$(e.target).closest('#profile-panel').length) {
            $('#profile-panel').removeClass('open');
        }
        if (!$(e.target).closest('.header-menu').length) {
            $('.header-menu').removeClass('open');
        }
        if (!$(e.target).closest('.js-expanded-menu').length) {
            $('.js-expanded-menu').removeClass('active');
        }
        if (!$(e.target).closest('.profile-settings-responsive').length) {
            $('.profile-settings-responsive').removeClass('open');
        }
    });

    // Expanded menu
    $('.js-expanded-menu').on('click', function () {
        if ($(this).hasClass('active') && $(this).closest('ul').find('.fc-state-active').length) {
            $($(this).data('dir')).toggleClass('overlay-enable');
            $(this).removeClass('active');
            return false;
        }
    });

    // Close popup
    $('.js-close-popup').on('click', function () {
        $(this).closest($popups).removeClass('open');
        $body.removeClass('overlay-enable');
        return false;
    });

    // Profile settings open
    $('.profile-settings-open').on('click', function () {
        $('.profile-settings-responsive').toggleClass('open');
        return false;
    });

    // Header menu
    $('.header-menu').on('click', function () {
        $('.header-menu').toggleClass('active');
        return false;
    });

    // Chat open
    $('.js-chat-open').on('click', function () {
        $('.popup-chat-responsive').toggleClass('open-chat');
        return false;
    });

    // Chat close
    $('.js-chat-close').on('click', function () {
        $('.popup-chat-responsive').removeClass('open-chat');
        return false;
    });

    // Responsive menu open
    $('.js-open-responsive-menu').on('click', function () {
        $('#profile-panel').toggleClass('open');
        return false;
    });

    // Responsive menu close
    $('.js-close-responsive-menu').on('click', function () {
        $('#profile-panel').removeClass('open');
        return false;
    });

    // Perfect scrollbar
    CRUMINA.perfectScrollbarInit = function () {
        var $scrollbar = $('#desktop-container-panel > .ui-block');
        $('.mCustomScrollbar').perfectScrollbar({ wheelPropagation: false });
        if ($scrollbar.length) {
            $scrollbar.scrollTop($scrollbar.prop('scrollHeight'));
            $scrollbar.perfectScrollbar('update');
        }
    };

    // Profile panel
    CRUMINA.profilePanel = {
        $profilePanel: null,
        $desktopContainerPanel: null,
        $responsiveContainerPanel: null,
        init: function () {
            this.$profilePanel = $('#profile-panel');
            this.$desktopContainerPanel = $('#desktop-container-panel > .ui-block');
            this.$responsiveContainerPanel = $('#responsive-container-panel .ui-block');
            this.update();
        },
        mixPanel: function () {
            if (window.matchMedia('(max-width: 1024px)').matches) {
                this.$responsiveContainerPanel.append(this.$profilePanel);
            } else {
                this.$desktopContainerPanel.append(this.$profilePanel);
            }
        },
        update: function () {
            var self = this,
                resizeTimeout = null;
            $(window)
                .on('resize', function () {
                    if (resizeTimeout === null) {
                        resizeTimeout = window.setTimeout(function () {
                            resizeTimeout = null;
                            self.mixPanel();
                        }, 300);
                    }
                })
                .resize();
        }
    };

    // Fixed header
    CRUMINA.fixedHeader = function () {
        var $header = $('#header--standard');
        $(document).on('scroll', function () {
            if ($(document).scrollTop() > 100) {
                $header.addClass('header--fixed');
            } else {
                $header.removeClass('header--fixed');
            }
        });
    };

    // Document ready
    $document.ready(function () {
        CRUMINA.perfectScrollbarInit();
        CRUMINA.fixedHeader();
        if (typeof $.fn.gifplayer !== 'undefined') {
            $('.gif-play-image').gifplayer();
        }
        if (typeof $.fn.mediaelementplayer !== 'undefined') {
            $('#mediaplayer').mediaelementplayer({
                features: [
                    'playpause',
                    'progress',
                    'volume',
                    'next',
                    'prev',
                    'duration',
                    'current',
                    'responsive'
                ]
            });
        }
        CRUMINA.profilePanel.init();
    });
})(jQuery);

