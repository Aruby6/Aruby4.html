! function(l) {
    l(function() {
        try {
            document.querySelector(".single_add_to_cart_button") || document.querySelector(".add_to_cart_button") ? function() {
                var t, o, c, e = document.querySelector(".single_add_to_cart_button"),
                    r = document.querySelector(".add_to_cart_button");
                if (document.querySelector(".ctc_woo_single_cart_layout .s1_btn") && (t = document.querySelector(".ctc_woo_single_cart_layout .s1_btn"), o = l(t).css("color"), c = l(t).css("background-color"), e && (_(e, t), l(t).css({
                        display: "inline-flex",
                        width: "fit-content",
                        "align-items": "center",
                        color: o,
                        "background-color": c
                    })), s()), document.querySelector(".ctc_woo_shop_cart_layout .s1_btn")) {
                    let t = document.querySelectorAll(".ctc_woo_shop_cart_layout .s1_btn");
                    r && t.length && (o = l(t).css("color"), c = l(t).css("background-color"), t.forEach(t => {
                        _(r, t)
                    }), l(t).css({
                        display: "inline-flex",
                        width: "fit-content",
                        "align-items": "center",
                        color: o,
                        "background-color": c
                    })), s()
                }

                function n(t) {
                    l(t).css({
                        "min-height": l(e).css("min-height"),
                        "font-size": l(e).css("font-size"),
                        "font-weight": l(e).css("font-weight"),
                        "letter-spacing": l(e).css("letter-spacing"),
                        "border-radius": l(e).css("border-radius"),
                        width: "fit-content"
                    }), s()
                }

                function _(t, o) {
                    const c = window.getComputedStyle(t);
                    Array.from(c).forEach(t => o.style.setProperty(t, c.getPropertyValue(t), c.getPropertyPriority(t)))
                }
                document.querySelector(".ctc_woo_shop_cart_layout .s_8") && n(document.querySelector(".ctc_woo_shop_cart_layout .s_8")), document.querySelector(".ctc_woo_single_cart_layout .s_8") && n(document.querySelector(".ctc_woo_single_cart_layout .s_8"))
            }() : document.querySelector(".ctc_woo_place") && s()
        } catch (t) {}

        function s() {
            document.querySelector(".ctc_woo_schedule") || (l(".ctc_woo_place").css({
                display: l(".ctc_woo_place").attr("data-dt")
            }), l(".ctc_woo_place").show())
        }
    })
}(jQuery);