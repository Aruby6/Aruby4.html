! function(t) {
    t((function() {
        var e = window.location.href,
            c = void 0 !== document.title ? document.title : "",
            n = void 0 !== screen.width && screen.width > 1024 ? "no" : "yes",
            a = "",
            _ = {};

        function o(t) {
            return !!_[t] && _[t]
        }

        function i(t, e) {
            _[t] = e;
            var c = JSON.stringify(_);
            localStorage.setItem("ht_ctc_storage", c)
        }
        localStorage.getItem("ht_ctc_storage") && (_ = localStorage.getItem("ht_ctc_storage"), _ = JSON.parse(_));
        var r = "";
        ! function() {
            if ("undefined" != typeof ht_ctc_chat_var) r = ht_ctc_chat_var;
            else try {
                if (document.querySelector(".ht_ctc_chat_data")) {
                    var e = t(".ht_ctc_chat_data").attr("data-settings");
                    r = JSON.parse(e), window.ht_ctc_chat_var = r
                }
            } catch (t) {
                r = {}
            }
        }();
        var s, h = {};

        function l(e = "open") {
            m(), t(".ctc_cta_stick").remove(), t(".ht_ctc_chat_greetings_box").show(70), t(".ht_ctc_chat_greetings_box").addClass("ctc_greetings_opened").removeClass("ctc_greetings_closed"), i("g_action", e), "user_opened" == e && i("g_user_action", e)
        }

        function u(e = "close") {
            t(".ht_ctc_chat_greetings_box").hide(70), t(".ht_ctc_chat_greetings_box").addClass("ctc_greetings_closed").removeClass("ctc_greetings_opened"), i("g_action", e), "user_closed" == e && i("g_user_action", e)
        }

        function d(t) {
            var e;
            "yes" == n ? "show" == r.dis_m && ((e = document.querySelector(".ht_ctc_desktop_chat")) && e.remove(), t.style.cssText = r.pos_m + r.css, p(t)) : "show" == r.dis_d && ((e = document.querySelector(".ht_ctc_mobile_chat")) && e.remove(), t.style.cssText = r.pos_d + r.css, p(t))
        }

        function p(e) {
            try {
                t(e).show(parseInt(r.se))
            } catch (t) {
                e.style.display = "block"
            }! function() {
                if (t(".ht_ctc_chat_greetings_box").length) {
                    if (r.g_device) {
                        if ("yes" !== n && "mobile" == r.g_device) return void t(".ht_ctc_chat_greetings_box").remove();
                        if ("yes" == n && "desktop" == r.g_device) return void t(".ht_ctc_chat_greetings_box").remove()
                    }
                    document.dispatchEvent(new CustomEvent("ht_ctc_event_after_chat_displayed", {
                        detail: {
                            ctc: r,
                            greetings_open: l,
                            greetings_close: u
                        }
                    })), r.g_init && "open" == r.g_init && "user_closed" !== o("g_user_action") && l("init"), t(document).on("click", '.ctc_greetings, #ctc_greetings, .ctc_greetings_now, [href="#ctc_greetings"]', (function(t) {
                        t.preventDefault(), u("element"), l("element")
                    }))
                }
            }(),
            function() {
                if (document.querySelector(".ht_ctc_notification") && "stop" !== o("n_badge")) {
                    if (document.querySelector(".ctc_nb")) {
                        var e = t(".ht_ctc_badge").closest(".ht_ctc_style");
                        t(".ht_ctc_badge").css({
                            top: t(e).find(".ctc_nb").attr("data-nb_top"),
                            right: t(e).find(".ctc_nb").attr("data-nb_right")
                        })
                    }
                    var c = r.n_time ? 1e3 * r.n_time : "150";
                    setTimeout((() => {
                        t(".ht_ctc_notification").show(400)
                    }), c)
                }
            }(),
            function(e) {
                var c = t(e).hasClass("ht_ctc_entry_animation") ? 1200 : 120;
                setTimeout((function() {
                    e.classList.add("ht_ctc_animation", r.ani)
                }), c), t(".ht-ctc-chat").hover((function() {
                    t(".ht-ctc-chat .ht-ctc-cta-hover").show(120)
                }), (function() {
                    t(".ht-ctc-chat .ht-ctc-cta-hover").hide(100)
                }))
            }(e)
        }

        function m() {
            document.querySelector(".ht_ctc_notification") && (i("n_badge", "stop"), t(".ht_ctc_notification").remove())
        }

        function g(t) {
            if (r.analytics && "session" == r.analytics) {
                if (sessionStorage.getItem("ht_ctc_analytics")) return;
                sessionStorage.setItem("ht_ctc_analytics", "done")
            }

            function n(t, n) {
                try {
                    t = (t = (t = t.replace("{number}", n)).replace("{title}", c)).replace("{url}", e)
                } catch (t) {}
                return t
            }
            document.dispatchEvent(new CustomEvent("ht_ctc_event_analytics"));
            var a = r.number;
            if (t.classList.contains("ht-ctc-sc") && (a = t.getAttribute("data-number")), r.ga || r.ga4) {
                var _ = r.g_an_event_name && "" !== r.g_an_event_name ? r.g_an_event_name : "click to chat";
                _ = n(_, a);
                var o = {},
                    i = "Click to Chat for WhatsApp",
                    s = "chat: " + a,
                    l = c + ", " + e;
                if (h.g_an_params && h.g_an_params.forEach((t => {
                        if (h[t]) {
                            var e = h[t],
                                c = e.key,
                                _ = e.value;
                            c = n(c, a), _ = n(_, a), o[c] = _
                        }
                    })), "undefined" != typeof gtag) gtag("event", _, o);
                else if ("undefined" != typeof ga && void 0 !== ga.getAll) {
                    ga.getAll()[0].send("event", i, s, l)
                } else "undefined" != typeof __gaTracker && __gaTracker("send", "event", i, s, l)
            }
            if ("undefined" != typeof dataLayer && dataLayer.push({
                    event: "Click to Chat",
                    type: "chat",
                    number: a,
                    title: c,
                    url: e,
                    event_category: i,
                    event_label: l,
                    event_action: s
                }), r.ads && "undefined" != typeof gtag_report_conversion && gtag_report_conversion(), r.fb && "undefined" != typeof fbq) {
                var u = r.pixel_event_name && "" !== r.pixel_event_name ? r.pixel_event_name : "Click to Chat by HoliThemes",
                    d = "trackCustom",
                    p = {};
                d = h.pixel_event_type && "" !== h.pixel_event_type ? h.pixel_event_type : d, h.pixel_params && h.pixel_params.forEach((t => {
                    if (h[t]) {
                        var e = h[t],
                            c = e.key,
                            _ = e.value;
                        c = n(c, a), _ = n(_, a), p[c] = _
                    }
                })), fbq(d, u, p)
            }
        }

        function v(c) {
            document.dispatchEvent(new CustomEvent("ht_ctc_event_number", {
                detail: {
                    ctc: r
                }
            }));
            var _ = r.number,
                o = r.pre_filled;
            c.hasAttribute("data-number") && (_ = c.getAttribute("data-number")), c.hasAttribute("data-pre_filled") && (o = c.getAttribute("data-pre_filled"));
            try {
                o = (o = o.replaceAll("%", "%25")).replace(/\[url]/gi, e), o = encodeURIComponent(decodeURI(o))
            } catch (t) {}
            if ("" != _) {
                var i = "https://wa.me/" + _ + "?text=" + o,
                    s = r.url_target_d ? r.url_target_d : "_blank";
                "yes" == n ? (r.url_structure_m && (i = "whatsapp://send?phone=" + _ + "&text=" + o, s = "_self"), r.custom_url_m && "" !== r.custom_url_m && (i = r.custom_url_m)) : (r.url_structure_d && (i = "https://web.whatsapp.com/send?phone=" + _ + "&text=" + o), r.custom_url_d && "" !== r.custom_url_d && (i = r.custom_url_d));
                var h = "popup" == s ? "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=788,height=514,left=100,top=100" : "noopener";
                window.open(i, s, h), g(c), y(_), m()
            } else t(".ht-ctc-chat").html(a)
        }
        "undefined" != typeof ht_ctc_variables ? h = ht_ctc_variables : (h = {
                g_an_event_name: "click to chat",
                pixel_event_name: "Click to Chat by HoliThemes",
                pixel_event_type: "trackCustom",
                g_an_params: ["g_an_param_1", "g_an_param_2", "g_an_param_3"],
                g_an_param_1: {
                    key: "number",
                    value: "{number}"
                },
                g_an_param_2: {
                    key: "title",
                    value: "{title}"
                },
                g_an_param_3: {
                    key: "url",
                    value: "{url}"
                },
                pixel_params: ["pixel_param_1", "pixel_param_2", "pixel_param_3", "pixel_param_4"],
                pixel_param_1: {
                    key: "Category",
                    value: "Click to Chat for WhatsApp"
                },
                pixel_param_2: {
                    key: "return_type",
                    value: "chat"
                },
                pixel_param_3: {
                    key: "ID",
                    value: "{number}"
                },
                pixel_param_4: {
                    key: "Title",
                    value: "{title}"
                }
            }, window.ht_ctc_chat_var = h),
            function() {
                var e = document.querySelector(".ht_ctc_chat_data");
                e && (a = t(".ht_ctc_chat_data").attr("data-no_number"), e.remove())
            }(), document.dispatchEvent(new CustomEvent("ht_ctc_event_settings", {
                detail: {
                    ctc: r
                }
            })), (s = document.querySelector(".ht-ctc-chat")) && (document.dispatchEvent(new CustomEvent("ht_ctc_event_chat")), function(t) {
                "yes" == r.schedule ? document.dispatchEvent(new CustomEvent("ht_ctc_event_display", {
                    detail: {
                        ctc: r,
                        display_chat: d,
                        ht_ctc_chat: t
                    }
                })) : d(t)
            }(s), s.addEventListener("click", (function() {
                t(".ht_ctc_chat_greetings_box").length || v(s)
            })), t(".ht_ctc_chat_greetings_box").length && t(document).on("click", ".ht_ctc_chat_style", (function(e) {
                t(".ht_ctc_chat_greetings_box").hasClass("ctc_greetings_opened") ? u("user_closed") : l("user_opened")
            })), t(document).on("click", ".ctc_greetings_close_btn", (function(t) {
                u("user_closed")
            })), t(document).on("click", ".ht_ctc_chat_greetings_box_link", (function(e) {
                e.preventDefault(), document.querySelector("#ctc_opt") ? t("#ctc_opt").is(":checked") || o("g_optin") ? v(s) : t(".ctc_opt_in").show(400).fadeOut("1").fadeIn("1") : v(s), document.dispatchEvent(new CustomEvent("ht_ctc_event_greetings"))
            })), document.querySelector("#ctc_opt") && t("#ctc_opt").on("change", (function(e) {
                t("#ctc_opt").is(":checked") && (t(".ctc_opt_in").hide(100), i("g_optin", "y"), setTimeout((() => {
                    v(s)
                }), 500))
            }))), t(document).on("click", ".ht-ctc-sc-chat", (function() {
                var t = this.getAttribute("data-number"),
                    c = this.getAttribute("data-pre_filled");
                c = c.replace(/\[url]/gi, e), c = encodeURIComponent(c), r.url_structure_d && "yes" !== n ? window.open("https://web.whatsapp.com/send?phone=" + t + "&text=" + c, "_blank", "noopener") : window.open("https://wa.me/" + t + "?text=" + c, "_blank", "noopener"), g(this), y(t)
            })), t(document).on("click", ".ctc_chat, #ctc_chat", (function(e) {
                v(this), t(this).hasClass("ctc_woo_place") && e.preventDefault()
            })), t(document).on("click", '[href="#ctc_chat"]', (function(t) {
                t.preventDefault(), v(this)
            }));
        var f = r.hook_v ? r.hook_v : "";

        function y(e) {
            if (r.hook_url) {
                var c = {};
                if (r.hook_v) {
                    c = void 0 !== f ? f : r.hook_v;
                    var n = {},
                        a = 1;
                    c.forEach((t => {
                        n["value" + a] = t, a++
                    })), r.hook_v = n
                }
                document.dispatchEvent(new CustomEvent("ht_ctc_event_hook", {
                    detail: {
                        ctc: r,
                        number: e
                    }
                }));
                var _ = r.hook_url;
                if (c = r.hook_v, r.webhook_format && "json" == r.webhook_format) var o = c;
                else o = JSON.stringify(c);
                t.ajax({
                    url: _,
                    type: "POST",
                    mode: "no-cors",
                    data: o,
                    success: function(t) {}
                })
            }
        }
    }))
}(jQuery);