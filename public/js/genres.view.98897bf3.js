(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["genres.view"], {
		4222: function(e, t, c) {
			"use strict";
			c.r(t);
			c("b0c0"), c("4e82");
			var n = c("7a23"),
				r = {
					key: 0
				},
				o = {
					key: 1
				},
				a = {
					class: "catalog"
				},
				i = {
					class: "container"
				},
				b = {
					class: "row"
				},
				d = {
					class: "col-12"
				},
				l = {
					class: "catalog__nav"
				},
				j = {
					class: "slider-radio"
				},
				s = ["onChange", "value", "id", "checked"],
				u = ["for"],
				O = {
					key: 2,
					class: "row"
				},
				g = {
					class: "col-12"
				};

			function v(e, t, c, v, f, m) {
				var p = Object(n["C"])("Section"),
					k = Object(n["C"])("placeholder"),
					y = Object(n["C"])("grid"),
					w = Object(n["C"])("MovieGridItem");
				return e.genreLoading ? (Object(n["u"])(), Object(n["f"])("div", r, [Object(n["j"])(p, {
					title: "Loading",
					to: "/genres"
				})])) : (Object(n["u"])(), Object(n["f"])("div", o, [Object(n["j"])(p, {
					title: e.genre.name,
					to: {
						name: "GenreView",
						props: e.genre
					},
					background: e.genre.poster
				}, null, 8, ["title", "to", "background"]), Object(n["g"])("div", a, [Object(n["g"])("div", i, [Object(n["g"])("div", b, [Object(n["g"])("div", d, [Object(n["g"])("div", l, [Object(n["g"])("div", j, [(Object(n["u"])(!0), Object(n["f"])(n["a"], null, Object(n["A"])(e.orderBy, (function(t) {
					return Object(n["u"])(), Object(n["f"])(n["a"], {
						key: t.value
					}, [Object(n["g"])("input", {
						name: "sort",
						onChange: Object(n["M"])((function(c) {
							return e.setSort(t.value)
						}), ["prevent"]),
						type: "radio",
						value: t.value,
						id: t.value,
						checked: t.value === e.sort
					}, null, 40, s), Object(n["g"])("label", {
						for: t.value
					}, Object(n["E"])(t.label), 9, u)], 64)
				})), 128))])])])]), e.moviesLoading ? (Object(n["u"])(), Object(n["d"])(y, {
					key: 0
				}, {
					default: Object(n["K"])((function() {
						return [Object(n["j"])(k), Object(n["j"])(k), Object(n["j"])(k), Object(n["j"])(k), Object(n["j"])(k), Object(n["j"])(k)]
					})),
					_: 1
				})) : (Object(n["u"])(), Object(n["d"])(y, {
					key: 1
				}, {
					default: Object(n["K"])((function() {
						return [(Object(n["u"])(!0), Object(n["f"])(n["a"], null, Object(n["A"])(e.movies, (function(e) {
							return Object(n["u"])(), Object(n["d"])(w, {
								key: e.tmdbId,
								to: {
									name: "MovieView",
									params: {
										tmdbId: e.tmdbId
									}
								},
								tmdbId: e.tmdbId,
								title: e.title,
								imdbRating: e.imdbRating,
								rating: e.rating,
								poster: e.poster,
								list: e.genres,
								favorite: e.favorite
							}, null, 8, ["to", "tmdbId", "title", "imdbRating", "rating", "poster", "list", "favorite"])
						})), 128))]
					})),
					_: 1
				})), e.more ? (Object(n["u"])(), Object(n["f"])("div", O, [Object(n["g"])("div", g, [Object(n["g"])("button", {
					class: "catalog__more",
					type: "button",
					onClick: t[0] || (t[0] = function() {
						return e.loadMore()
					})
				}, "Load more")])])) : Object(n["e"])("", !0)])])]))
			}
			var f = c("b71d"),
				m = c("43f4"),
				p = c("e490"),
				k = c("8317"),
				y = c("c2c0"),
				w = c("efbf"),
				h = c("6c02"),
				_ = Object(n["k"])({
					components: {
						Section: k["a"],
						Grid: y["a"],
						MovieGridItem: w["a"],
						Placeholder: f["a"]
					},
					setup: function() {
						var e = Object(h["c"])(),
							t = e.params,
							c = Object(m["a"])(t.name),
							n = c.loading,
							r = c.data,
							o = Object(p["j"])(t.name, p["d"]),
							a = o.loading,
							i = o.data,
							b = o.more,
							d = o.loadMore,
							l = o.sort,
							j = o.setSort;
						return {
							genreLoading: n,
							genre: r,
							moviesLoading: a,
							movies: i,
							loadMore: d,
							more: b,
							orderBy: p["a"],
							sort: l,
							setSort: j
						}
					}
				}),
				I = c("6b0d"),
				C = c.n(I);
			const L = C()(_, [
				["render", v]
			]);
			t["default"] = L
		},
		"43f4": function(e, t, c) {
			"use strict";
			c.d(t, "b", (function() {
				return r
			})), c.d(t, "a", (function() {
				return o
			}));
			var n = c("5e73");

			function r() {
				return Object(n["c"])("/genres")
			}

			function o(e) {
				return Object(n["c"])("/genres/".concat(e))
			}
		},
		b71d: function(e, t, c) {
			"use strict";
			var n = c("7a23"),
				r = {
					class: "col-12 col-sm-6 col-lg-4 col-xl-3 loading"
				},
				o = Object(n["g"])("div", {
					class: "category__cover"
				}, [Object(n["g"])("img", {
					src: "/img/poster-placeholder.png",
					alt: ""
				})], -1),
				a = Object(n["g"])("h3", {
					class: "category__title"
				}, "Loading...", -1),
				i = [o, a];

			function b(e, t, c, o, a, b) {
				return Object(n["u"])(), Object(n["f"])("div", r, i)
			}
			var d = Object(n["k"])({
					name: "GridPlaceholder"
				}),
				l = c("6b0d"),
				j = c.n(l);
			const s = j()(d, [
				["render", b]
			]);
			t["a"] = s
		}
	}
]);
//# sourceMappingURL=genres.view.98897bf3.js.map