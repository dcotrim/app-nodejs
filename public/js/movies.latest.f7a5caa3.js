(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["movies.latest"], {
		"1a3b": function(e, t, r) {
			"use strict";
			r.r(t);
			r("4e82");
			var o = r("7a23");

			function s(e, t, r, s, a, c) {
				var i = Object(o["C"])("movie-grid");
				return Object(o["u"])(), Object(o["d"])(i, {
					title: e.title,
					to: e.path,
					sort: e.sort,
					order: e.order,
					showLoadMore: !0
				}, null, 8, ["title", "to", "sort", "order"])
			}
			var a = r("6c02"),
				c = r("e490"),
				i = r("5e73"),
				n = r("9bc1"),
				b = Object(o["k"])({
					components: {
						MovieGrid: n["a"]
					},
					setup: function() {
						var e = Object(a["c"])(),
							t = e.path.substr(1),
							r = "Movies",
							o = c["c"];
						switch (t) {
							case "popular":
								r = "Popular Movies", o = c["b"];
								break;
							case "latest":
								r = "Latest Releases", o = c["c"];
								break
						}
						return {
							title: r,
							path: t,
							sort: o,
							order: i["a"]
						}
					}
				}),
				u = r("6b0d"),
				d = r.n(u);
			const p = d()(b, [
				["render", s]
			]);
			t["default"] = p
		}
	}
]);
//# sourceMappingURL=movies.latest.f7a5caa3.js.map