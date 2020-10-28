$(document).ready(function() {

    $("footer").load("footer.html", function () {})

    $("header").load("header.html", function () {
        $('.language-value').click(function () {
            $('.choice-lang').toggleClass('active');
        });

        $('.choice-lang li').click(function () {
            var langText = $(this).text();
            $('.language-value').html(langText);
            $('.choice-lang').removeClass('active')
        });

        $('.btn-search-mb').click(function () {
            $('.abs-mb').toggleClass('show')
        });

        $('.btn-user-mb').click(function () {
            $('.user-abs').toggleClass('show')
        });

        $('.user-abs a').click(function () {
            $('.user-abs').removeClass('show')
        })
    });

    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        dots: true
    });

    $('.slider-centers').slick({
        autoplay: true,
        arrow: false,
        centerMode: true,
        infinite: true,
        centerPadding: '180px',
        slidesToShow: 3,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '180px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });

    //choose payment
    $('.select-result').click(function () {
        $('.list-payment').toggleClass('show');
    });

    $('.list-payment li').click(function () {
       $('.select-result').html($(this).html());
        $('.list-payment').removeClass('show')
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        vertical: true,
        autoplay: false,
        arrow: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $("#modal-block").load("modal.html", function () {

        $('.close-customize').click(function () {
            $('.customize-food').removeClass('show');
            $('body').removeClass('modal-open-3')
        });

        $('.btn-order').click(function () {
            $('#product-detail').modal('hide');
            $('.customize-food').addClass('show');
            $('body').addClass('modal-open-3')
        });

        $(function() {
            'use strict';
            var formVerify = $('#form-otp');
            function goToNextInput(e) {
                var key = e.which,
                    t = $(e.target),
                    sib = t.next('input');

                if (key != 9 && (key < 48 || key > 57)) {
                    e.preventDefault();
                    return false;
                }

                if (key === 9) {
                    return true;
                }

                if (!sib || !sib.length) {
                    sib = formVerify.find('input').eq(0);
                }
                sib.select().focus();
            }
            function onKeyDown(e) {
                var key = e.which;

                if (key === 9 || (key >= 48 && key <= 57)) {
                    return true;
                }

                e.preventDefault();
                return false;
            }

            function onFocus(e) {
                $(e.target).select();
            }

            formVerify.on('keyup', 'input', goToNextInput);
            formVerify.on('keydown', 'input', onKeyDown);
            formVerify.on('click', 'input', onFocus);
        })

        $(function () {
            return $(".modal").on("show.bs.modal", function () {
                var curModal;
                curModal = this;
                $(".modal").each(function () {
                    if (this !== curModal) {
                        $(this).modal("hide");
                        // $('body').addClass('modal-open-2');
                    }
                });
            });
        });

        $("#sign-up").on('shown.bs.modal', function() {
            $("body").addClass("modal-open");
        });

        $("#sign-in").on('shown.bs.modal', function() {
            $("body").addClass("modal-open");
        });

        var $inputItem = $(".js-inputWrapper");
        $inputItem.length && $inputItem.each(function() {
            var $this = $(this),
                $input = $this.find(".formRow--input");
                $input.val().length ? $this.addClass("active") : $this.removeClass("active"),

                $input.on("focusout", function() {
                    $input.val().length ? $this.addClass("active") : $this.removeClass("active");
                }).on("focus", function() {
                    $this.addClass("active");
                });
        });

        $(".modal").on("shown.bs.modal", function() {
            $('.detail-slider').slick({
                arrows: true,
                autoplay: false,
                dots: false,
                prevArrow: '<span class="previous"><span>Previous <br/> Meal</span></span>',
                nextArrow: '<span class="next"><span>Next Meal</span></span>',
            });
        })
    });

    //back top top
    if ($('#back-to-top').length) {
        var scrollTrigger = 800,
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');

                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });

        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    
    //use point
    $('.btn-usee').click(function () {
        $(this).addClass('hide');
        $(this).next().removeClass('hide');
        $(this).prev('.input-point').addClass('yes');
        $(this).prev('.input-coupon').addClass('no');
    });

    //use point
    $('.btn-removee').click(function () {
        $(this).addClass('hide');
        $(this).prev().removeClass('hide');
        $(this).closest('.mgb-60').find('.input-point').removeClass('yes');
        $(this).closest('.mgb-30').find('.input-coupon').removeClass('no');
    })

    $('#select-cp li').click(function () {
        $(this).closest('ul').hide();
        $(this).closest('.input-coupon').find('input').val($(this).html());
        $(this).closest('.input-coupon').addClass('no')
    })

    $('.btn-select-cp').click(function () {
        $('#select-cp').show();
    })
})
