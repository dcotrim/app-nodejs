(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["logout"], {
		c100: function(n, t, e) {
			"use strict";
			e.r(t);
			var c = e("7a23");

			function o(n, t, e, o, u, a) {
				return Object(c["u"])(), Object(c["f"])("div", null, "Please wait…")
			}
			var u = e("d617"),
				a = e("6c02"),
				i = Object(c["k"])({
					setup: function() {
						var n = Object(u["a"])(),
							t = n.logout,
							e = Object(a["d"])(),
							c = e.push;
						t().then((function() {
							c({
								name: "Home"
							})
						}))
					}
				}),
				r = e("6b0d"),
				s = e.n(r);
			const b = s()(i, [
				["render", o]
			]);
			t["default"] = b
		}
	}
]);
//# sourceMappingURL=logout.26c41b02.js.map