(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["register"], {
		"5eb9": function(e, t, n) {
			"use strict";
			n("6e7c")
		},
		"6e7c": function(e, t, n) {},
		"73cf": function(e, t, n) {
			"use strict";
			n.r(t);
			n("b0c0");
			var r = n("7a23"),
				o = {
					class: "sign__group"
				},
				c = {
					class: "sign__group"
				},
				i = {
					class: "sign__group"
				},
				s = {
					class: "sign__text"
				},
				a = Object(r["i"])("Already have an account? "),
				l = Object(r["i"])("Sign In");

			function u(e, t, n, u, b, d) {
				var j = Object(r["C"])("router-link"),
					g = Object(r["C"])("form-wrapper");
				return Object(r["u"])(), Object(r["d"])(g, {
					error: e.error,
					details: e.details,
					buttonText: "Register",
					onSubmit: e.onSubmit
				}, {
					footer: Object(r["K"])((function() {
						return [Object(r["g"])("span", s, [a, Object(r["j"])(j, {
							to: "/login"
						}, {
							default: Object(r["K"])((function() {
								return [l]
							})),
							_: 1
						})])]
					})),
					default: Object(r["K"])((function() {
						return [Object(r["g"])("div", o, [Object(r["L"])(Object(r["g"])("input", {
							"onUpdate:modelValue": t[0] || (t[0] = function(t) {
								return e.name = t
							}),
							type: "text",
							class: Object(r["p"])(["sign__input", {
								error: e.details && e.details.name
							}]),
							placeholder: "Your Name"
						}, null, 2), [
							[r["I"], e.name]
						])]), Object(r["g"])("div", c, [Object(r["L"])(Object(r["g"])("input", {
							"onUpdate:modelValue": t[1] || (t[1] = function(t) {
								return e.email = t
							}),
							type: "text",
							class: Object(r["p"])(["sign__input", {
								error: e.details && e.details.email
							}]),
							placeholder: "Email"
						}, null, 2), [
							[r["I"], e.email]
						])]), Object(r["g"])("div", i, [Object(r["L"])(Object(r["g"])("input", {
							"onUpdate:modelValue": t[2] || (t[2] = function(t) {
								return e.password = t
							}),
							type: "password",
							class: Object(r["p"])(["sign__input", {
								error: e.details && e.details.password
							}]),
							placeholder: "Password"
						}, null, 2), [
							[r["I"], e.password]
						])])]
					})),
					_: 1
				}, 8, ["error", "details", "onSubmit"])
			}
			var b = n("5530"),
				d = n("d617"),
				j = n("6c02"),
				g = n("d3a2"),
				p = Object(r["k"])({
					setup: function() {
						var e = Object(d["a"])(),
							t = e.user,
							n = e.error,
							o = e.details,
							c = e.register,
							i = Object(j["d"])(),
							s = i.push,
							a = Object(r["y"])({
								email: "",
								password: "",
								name: ""
							}),
							l = function() {
								c(a.email, a.password, a.name)
							};
						return Object(r["J"])([t], (function() {
							t.value && s({
								name: "Home"
							})
						})), Object(b["a"])({
							user: t,
							error: n,
							details: o,
							onSubmit: l
						}, Object(r["F"])(a))
					},
					components: {
						FormWrapper: g["a"]
					}
				}),
				O = n("6b0d"),
				m = n.n(O);
			const f = m()(p, [
				["render", u]
			]);
			t["default"] = f
		},
		d3a2: function(e, t, n) {
			"use strict";
			var r = n("7a23"),
				o = {
					class: "sign section--full-bg"
				},
				c = {
					class: "container"
				},
				i = {
					class: "row"
				},
				s = {
					class: "col-12"
				},
				a = {
					class: "sign__content"
				},
				l = Object(r["g"])("svg", {
					width: "38px",
					height: "36px",
					viewBox: "0 0 38 36",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg",
					"xmlns:xlink": "http://www.w3.org/1999/xlink"
				}, [Object(r["g"])("g", {
					id: "Page-1",
					stroke: "none",
					"stroke-width": "1",
					fill: "none",
					"fill-rule": "evenodd"
				}, [Object(r["g"])("g", {
					id: "Artboard-Copy-4",
					transform: "translate(-461.000000, -92.000000)",
					fill: "#FFFFFF",
					"fill-rule": "nonzero"
				}, [Object(r["g"])("g", {
					id: "Neo4j-logo-white",
					transform: "translate(461.000000, 92.000000)"
				}, [Object(r["g"])("path", {
					d: "M15.1567882,19.7787499 C14.2593113,19.7797412 13.3869911,20.0839625 12.6739274,20.6446466 L8.12902953,17.4480446 C8.23017901,17.0744431 8.28207734,16.6885531 8.28333162,16.3007314 C8.30323173,14.5779313 7.31020034,13.0132192 5.76906756,12.3390243 C4.22793477,11.6648295 2.44364988,12.0145572 1.25142245,13.2245027 C0.0591950158,14.4344482 -0.305064777,16.2651954 0.329150182,17.859786 C0.963365141,19.4543767 2.47056054,20.4972837 4.14523019,20.5003305 C5.04296547,20.5009503 5.91577446,20.1965585 6.62809105,19.6344338 L11.1589614,22.8526832 C10.9531573,23.6053568 10.9531573,24.4018518 11.1589614,25.1545253 L6.61406359,28.3511274 C5.9055597,27.7920045 5.03816115,27.4877809 4.14523019,27.4852306 C2.47025128,27.4823124 0.958755122,28.5185053 0.316457436,30.1100122 C-0.325840249,31.7015192 0.0277521654,33.5344193 1.21214281,34.7529338 C2.39653346,35.9714483 4.17810422,36.3352281 5.72504187,35.674425 C7.27197952,35.0136219 8.27915444,33.4585776 8.27631789,31.7353403 C8.27610073,31.3526759 8.22657313,30.97173 8.12902953,30.6024588 L12.6739274,27.4058568 C13.3869911,27.9665408 14.2593113,28.2707622 15.1567882,28.2717535 C17.3222528,28.1125873 19,26.2587846 19,24.0252517 C19,21.7917188 17.3222528,19.9379161 15.1567882,19.7787499 L15.1567882,19.7787499 Z",
					id: "Path"
				}), Object(r["g"])("path", {
					d: "M25.5070592,0 C18.0226312,0 13,4.36522213 13,12.8334696 L13,18.871082 C13.7598872,18.496936 14.5938987,18.2983633 15.4405743,18.2899973 C16.2888621,18.2901903 17.1259465,18.4840715 17.8882228,18.8569092 L17.8882228,12.805124 C17.8882228,7.31316435 20.9159498,4.49277732 25.5282816,4.49277732 C30.1406134,4.49277732 33.1258956,7.31316435 33.1258956,12.805124 L33.1258956,26 L38,26 L38,12.805124 C38.0141184,4.28727174 32.9914872,0 25.5070592,0 Z",
					id: "Path"
				})])])])], -1),
				u = {
					key: 0,
					class: "sign__group error-message"
				},
				b = ["innerHTML"];

			function d(e, t, n, d, j, g) {
				return Object(r["u"])(), Object(r["f"])("div", o, [Object(r["g"])("div", c, [Object(r["g"])("div", i, [Object(r["g"])("div", s, [Object(r["g"])("div", a, [Object(r["g"])("form", {
					action: "#",
					class: "sign__form",
					onSubmit: t[0] || (t[0] = Object(r["M"])((function() {
						return e.onSubmit && e.onSubmit.apply(e, arguments)
					}), ["prevent"]))
				}, [l, e.error ? (Object(r["u"])(), Object(r["f"])("div", u, Object(r["E"])(e.error), 1)) : Object(r["e"])("", !0), Object(r["B"])(e.$slots, "default"), Object(r["g"])("button", {
					class: "sign__btn",
					type: "submit",
					innerHTML: e.buttonText
				}, null, 8, b), Object(r["B"])(e.$slots, "footer")], 32)])])])])])
			}
			var j = Object(r["k"])({
					props: {
						error: String,
						details: Object,
						buttonText: String,
						onSubmit: Function
					}
				}),
				g = (n("5eb9"), n("6b0d")),
				p = n.n(g);
			const O = p()(j, [
				["render", d]
			]);
			t["a"] = O
		}
	}
]);
//# sourceMappingURL=register.c725c442.js.map

