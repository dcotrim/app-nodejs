(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["favorites"], {
		4559: function(t, e, n) {
			"use strict";
			var c = n("7a23"),
				o = {
					class: "col-6 col-sm-4 col-lg-3 col-xl-2"
				};

			function i(t, e) {
				return Object(c["u"])(), Object(c["f"])("div", o, [Object(c["B"])(t.$slots, "default")])
			}
			var r = n("6b0d"),
				u = n.n(r);
			const a = {},
				b = u()(a, [
					["render", i]
				]);
			e["a"] = b
		},
		"48d5": function(t, e, n) {
			"use strict";
			n.r(e);
			var c = n("7a23"),
				o = Object(c["g"])("p", null, "You must be logged in to save your favorite movies.", -1),
				i = Object(c["i"])("Sign in"),
				r = Object(c["i"])(" or "),
				u = Object(c["i"])("Register"),
				a = Object(c["i"])(" to continue. "),
				b = Object(c["g"])("p", null, "Your favorite movies will be listed here.", -1),
				l = Object(c["g"])("p", null, "Click the icon in the top right hand corner of a Movie to save it to your favorites.", -1),
				j = Object(c["i"])("View Popular Movies"),
				d = Object(c["i"])(" or "),
				O = Object(c["i"])("check out the latest releases"),
				s = Object(c["i"])(". ");

			function f(t, e, n, f, v, g) {
				var m = Object(c["C"])("router-link"),
					p = Object(c["C"])("column"),
					k = Object(c["C"])("grid"),
					K = Object(c["C"])("MovieGridItem"),
					_ = Object(c["C"])("Section");
				return Object(c["u"])(), Object(c["d"])(_, {
					title: "My Favorite Movies",
					to: "/genres"
				}, {
					default: Object(c["K"])((function() {
						return [401 === t.code ? (Object(c["u"])(), Object(c["d"])(k, {
							key: 0
						}, {
							default: Object(c["K"])((function() {
								return [Object(c["j"])(p, null, {
									default: Object(c["K"])((function() {
										return [o, Object(c["g"])("p", null, [Object(c["j"])(m, {
											to: {
												name: "Login"
											}
										}, {
											default: Object(c["K"])((function() {
												return [i]
											})),
											_: 1
										}), r, Object(c["j"])(m, {
											to: {
												name: "Register"
											}
										}, {
											default: Object(c["K"])((function() {
												return [u]
											})),
											_: 1
										}), a])]
									})),
									_: 1
								})]
							})),
							_: 1
						})) : t.data && t.data.length ? (Object(c["u"])(), Object(c["d"])(k, {
							key: 1
						}, {
							default: Object(c["K"])((function() {
								return [(Object(c["u"])(!0), Object(c["f"])(c["a"], null, Object(c["A"])(t.data, (function(t) {
									return Object(c["u"])(), Object(c["d"])(K, {
										key: t.tmdbId,
										to: {
											name: "MovieView",
											params: {
												tmdbId: t.tmdbId
											}
										},
										tmdbId: t.tmdbId,
										title: t.title,
										imdbRating: t.imdbRating,
										rating: t.rating,
										poster: t.poster,
										list: t.genres,
										favorite: t.favorite
									}, null, 8, ["to", "tmdbId", "title", "imdbRating", "rating", "poster", "list", "favorite"])
								})), 128))]
							})),
							_: 1
						})) : (Object(c["u"])(), Object(c["d"])(k, {
							key: 2
						}, {
							default: Object(c["K"])((function() {
								return [Object(c["j"])(p, null, {
									default: Object(c["K"])((function() {
										return [b, l, Object(c["g"])("p", null, [Object(c["j"])(m, {
											to: {
												name: "PopularMovies"
											}
										}, {
											default: Object(c["K"])((function() {
												return [j]
											})),
											_: 1
										}), d, Object(c["j"])(m, {
											to: {
												name: "LatestMovies"
											}
										}, {
											default: Object(c["K"])((function() {
												return [O]
											})),
											_: 1
										}), s])]
									})),
									_: 1
								})]
							})),
							_: 1
						}))]
					})),
					_: 1
				})
			}
			var v = n("5e73"),
				g = n("8317"),
				m = n("4559"),
				p = n("c2c0"),
				k = n("efbf"),
				K = Object(c["k"])({
					components: {
						Section: g["a"],
						Column: m["a"],
						Grid: p["a"],
						MovieGridItem: k["a"]
					},
					setup: function() {
						var t = Object(v["c"])("/account/favorites"),
							e = t.loading,
							n = t.data,
							c = t.error,
							o = t.code;
						return {
							loading: e,
							data: n,
							error: c,
							code: o
						}
					}
				}),
				_ = n("6b0d"),
				h = n.n(_);
			const w = h()(K, [
				["render", f]
			]);
			e["default"] = w
		}
	}
]);
//# sourceMappingURL=favorites.c1e61f74.js.map