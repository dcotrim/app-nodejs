(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["people.list"], {
		"30d0": function(e, t, c) {
			"use strict";
			c.r(t);
			c("4e82"), c("b0c0");
			var n = c("7a23"),
				r = {
					class: "catalog catalog--page"
				},
				o = {
					class: "container"
				},
				a = {
					class: "row"
				},
				l = {
					class: "col-12"
				},
				b = {
					class: "catalog__nav"
				},
				i = {
					class: "catalog__search"
				},
				d = {
					class: "slider-radio"
				},
				s = ["onChange", "value", "id", "checked"],
				u = ["for"],
				j = {
					key: 2,
					class: "row"
				},
				O = {
					class: "col-12"
				};

			function g(e, t, c, g, p, v) {
				var f = Object(n["C"])("Hero"),
					m = Object(n["C"])("placeholder"),
					C = Object(n["C"])("grid"),
					h = Object(n["C"])("person");
				return Object(n["u"])(), Object(n["f"])("div", r, [Object(n["j"])(f, {
					title: "People"
				}), Object(n["g"])("div", o, [Object(n["g"])("div", a, [Object(n["g"])("div", l, [Object(n["g"])("div", b, [Object(n["g"])("div", i, [Object(n["L"])(Object(n["g"])("input", {
					class: "sign__input",
					"onUpdate:modelValue": t[0] || (t[0] = function(t) {
						return e.q = t
					}),
					placeholder: "Search by Name"
				}, null, 512), [
					[n["I"], e.q]
				])]), Object(n["g"])("div", d, [(Object(n["u"])(!0), Object(n["f"])(n["a"], null, Object(n["A"])(e.orderBy, (function(t) {
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
				})), 128))])]), e.loading ? (Object(n["u"])(), Object(n["d"])(C, {
					key: 0
				}, {
					default: Object(n["K"])((function() {
						return [Object(n["j"])(m), Object(n["j"])(m), Object(n["j"])(m), Object(n["j"])(m), Object(n["j"])(m), Object(n["j"])(m)]
					})),
					_: 1
				})) : (Object(n["u"])(), Object(n["d"])(C, {
					key: 1
				}, {
					default: Object(n["K"])((function() {
						return [(Object(n["u"])(!0), Object(n["f"])(n["a"], null, Object(n["A"])(e.data, (function(e) {
							return Object(n["u"])(), Object(n["d"])(h, {
								key: e.tmdbId,
								tmdbId: e.tmdbId,
								name: e.name,
								poster: e.poster,
								born: e.born,
								bornIn: e.bornIn
							}, null, 8, ["tmdbId", "name", "poster", "born", "bornIn"])
						})), 128))]
					})),
					_: 1
				})), e.more ? (Object(n["u"])(), Object(n["f"])("div", j, [Object(n["g"])("div", O, [Object(n["g"])("button", {
					class: "catalog__more",
					type: "button",
					onClick: t[1] || (t[1] = function() {
						return e.loadMore()
					})
				}, " Load more ")])])) : Object(n["e"])("", !0)])])])])
			}
			var p = c("c2c0"),
				v = c("3d87"),
				f = c("49cd"),
				m = c("b71d"),
				C = c("376e"),
				h = Object(n["k"])({
					components: {
						Grid: p["a"],
						Hero: v["a"],
						Person: f["a"],
						Placeholder: m["a"]
					},
					setup: function() {
						var e = Object(C["b"])(),
							t = e.q,
							c = e.loading,
							n = e.data,
							r = e.more,
							o = e.loadMore,
							a = e.sort,
							l = e.setSort;
						return {
							loading: c,
							data: n,
							more: r,
							loadMore: o,
							sort: a,
							setSort: l,
							orderBy: C["a"],
							q: t
						}
					}
				}),
				_ = (c("c419"), c("6b0d")),
				k = c.n(_);
			const w = k()(h, [
				["render", g]
			]);
			t["default"] = w
		},
		"376e": function(e, t, c) {
			"use strict";
			c.d(t, "a", (function() {
				return l
			})), c.d(t, "b", (function() {
				return b
			})), c.d(t, "c", (function() {
				return i
			})), c.d(t, "d", (function() {
				return d
			}));
			var n = c("5e73"),
				r = "name",
				o = "born",
				a = "movieCount",
				l = [{
					value: r,
					label: "Name"
				}, {
					value: o,
					label: "Age"
				}, {
					value: a,
					label: "Movies"
				}];

			function b() {
				return Object(n["d"])("/people", void 0, void 0, 4)
			}

			function i(e) {
				return Object(n["c"])("/people/".concat(e))
			}

			function d(e) {
				return Object(n["c"])("/people/".concat(e, "/similar"))
			}
		},
		"3d87": function(e, t, c) {
			"use strict";
			var n = c("7a23"),
				r = {
					class: "section section--head"
				},
				o = {
					class: "container"
				},
				a = {
					class: "row"
				},
				l = {
					class: "col-12"
				},
				b = {
					class: "section__title section__title--head"
				};

			function i(e, t, c, i, d, s) {
				return Object(n["u"])(), Object(n["f"])("section", r, [Object(n["g"])("div", o, [Object(n["g"])("div", a, [Object(n["g"])("div", l, [Object(n["g"])("h1", b, Object(n["E"])(e.title), 1)])])])])
			}
			var d = Object(n["k"])({
					props: {
						title: String
					}
				}),
				s = c("6b0d"),
				u = c.n(s);
			const j = u()(d, [
				["render", i]
			]);
			t["a"] = j
		},
		"49cd": function(e, t, c) {
			"use strict";
			c("b0c0");
			var n = c("7a23"),
				r = {
					class: "col-6 col-sm-6 col-md-3 col-xl-3"
				},
				o = {
					class: "card"
				},
				a = ["src"],
				l = {
					class: "card__title"
				},
				b = {
					class: "card__list"
				},
				i = {
					key: 0,
					class: "card__extra"
				},
				d = Object(n["g"])("svg", {
					width: "18px",
					height: "18px",
					viewBox: "0 0 24 24",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg",
					"xmlns:xlink": "http://www.w3.org/1999/xlink"
				}, [Object(n["g"])("g", {
					stroke: "none",
					"stroke-width": "1",
					fill: "none",
					"fill-rule": "evenodd",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, [Object(n["g"])("path", {
					d: "M0.5,23.5 C0.513413666,22.3574974 0.751254857,21.2287711 1.2,20.178 C1.69,19.197 3.739,18.517 6.311,17.565 C7.006,17.307 6.892,15.491 6.584,15.152 C5.59155718,14.0773139 5.10543859,12.629874 5.248,11.174 C5.15892891,10.2479477 5.45849615,9.32650185 6.07511042,8.62987183 C6.69172469,7.93324181 7.56998407,7.52401883 8.5,7.5 C9.43072015,7.52292867 10.3100352,7.93168064 10.9275231,8.6284406 C11.545011,9.32520056 11.8451079,10.2472716 11.756,11.174 C11.8985614,12.629874 11.4124428,14.0773139 10.42,15.152 C10.112,15.491 9.998,17.307 10.693,17.565 C13.265,18.517 15.314,19.197 15.804,20.178 C16.2527451,21.2287711 16.4905863,22.3574974 16.504,23.5 L0.5,23.5 Z",
					id: "Shape"
				}), Object(n["g"])("path", {
					d: "M13.979,12.034 C14.4689008,12.2254727 14.9792855,12.3596962 15.5,12.434 C15.5,13.004 15.5,15.004 15.5,15.504 C16,15.004 19,12.504 19.5,12.043 C21.8543064,11.2065989 23.446441,9.00189048 23.5,6.504 C23.3586568,3.05313706 20.451216,0.367556273 17,0.5 C13.7876833,0.394834268 11.0066051,2.7140479 10.533,5.893",
					id: "Shape"
				}), Object(n["g"])("path", {
					d: "M14.25,6.24999798 C14.3163857,6.24973285 14.3801295,6.27598627 14.4270716,6.3229284 C14.4740137,6.36987053 14.5002671,6.43361434 14.5,6.5 L14.5,6.5 C14.5002671,6.56638566 14.4740137,6.63012947 14.4270716,6.6770716 C14.3801295,6.72401373 14.3163857,6.75026715 14.25,6.74999798 L14.25,6.74999798 C14.1836959,6.74999798 14.1201074,6.72366079 14.0732233,6.6767767 C14.0263392,6.6298926 14,6.56630412 14,6.5 L14,6.5 C14,6.36192881 14.1119288,6.24999798 14.25,6.24999798",
					id: "Shape"
				}), Object(n["g"])("path", {
					d: "M17,6.25 C17.1380712,6.25 17.25,6.36192881 17.25,6.5 L17.25,6.5 C17.25,6.63807119 17.1380712,6.75 17,6.75 L17,6.75 C16.8619288,6.75 16.75,6.63807119 16.75,6.5 L16.75,6.5 C16.75,6.36192881 16.8619288,6.25 17,6.25",
					id: "Shape"
				}), Object(n["g"])("path", {
					d: "M19.75,6.25 C19.8880712,6.25 20,6.36192881 20,6.5 L20,6.5 C20,6.63807119 19.8880712,6.75 19.75,6.75 L19.75,6.75 C19.6119288,6.75 19.5,6.63807119 19.5,6.5 L19.5,6.5 C19.5,6.36192881 19.6119288,6.25 19.75,6.25",
					id: "Shape"
				})])], -1);

			function s(e, t, c, s, u, j) {
				var O = Object(n["C"])("router-link");
				return Object(n["u"])(), Object(n["f"])("div", r, [Object(n["g"])("div", o, [Object(n["j"])(O, {
					to: {
						name: "PersonView",
						params: {
							tmdbId: e.tmdbId
						}
					},
					class: "card__cover"
				}, {
					default: Object(n["K"])((function() {
						return [Object(n["g"])("img", {
							src: e.posterImage,
							alt: ""
						}, null, 8, a)]
					})),
					_: 1
				}, 8, ["to"]), Object(n["g"])("h3", l, [Object(n["j"])(O, {
					to: {
						name: "PersonView",
						params: {
							tmdbId: e.tmdbId
						}
					},
					innerHTML: e.name
				}, null, 8, ["to", "innerHTML"])]), Object(n["g"])("ul", b, [Object(n["g"])("li", null, Object(n["E"])(e.born), 1), Object(n["g"])("li", null, Object(n["E"])(e.bornIn), 1)]), e.role ? (Object(n["u"])(), Object(n["f"])("div", i, [d, Object(n["i"])(" " + Object(n["E"])(e.role), 1)])) : Object(n["e"])("", !0)])])
			}
			var u = Object(n["k"])({
					props: {
						tmdbId: String,
						name: String,
						poster: String,
						born: null,
						bornIn: String,
						role: [String, void 0]
					},
					computed: {
						posterImage: function() {
							return this.poster || "/img/poster-placeholder.png"
						}
					}
				}),
				j = c("6b0d"),
				O = c.n(j);
			const g = O()(u, [
				["render", s]
			]);
			t["a"] = g
		},
		"851b": function(e, t, c) {},
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
				l = [o, a];

			function b(e, t, c, o, a, b) {
				return Object(n["u"])(), Object(n["f"])("div", r, l)
			}
			var i = Object(n["k"])({
					name: "GridPlaceholder"
				}),
				d = c("6b0d"),
				s = c.n(d);
			const u = s()(i, [
				["render", b]
			]);
			t["a"] = u
		},
		c419: function(e, t, c) {
			"use strict";
			c("851b")
		}
	}
]);//# sourceMappingURL=people.list.2a90c2bb.js.map