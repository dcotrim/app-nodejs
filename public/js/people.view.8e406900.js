(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["people.view"], {
		"366b": function(t, e, c) {
			"use strict";
			c("af40")
		},
		"376e": function(t, e, c) {
			"use strict";
			c.d(e, "a", (function() {
				return r
			})), c.d(e, "b", (function() {
				return b
			})), c.d(e, "c", (function() {
				return o
			})), c.d(e, "d", (function() {
				return l
			}));
			var a = c("5e73"),
				n = "name",
				d = "born",
				i = "movieCount",
				r = [{
					value: n,
					label: "Name"
				}, {
					value: d,
					label: "Age"
				}, {
					value: i,
					label: "Movies"
				}];

			function b() {
				return Object(a["d"])("/people", void 0, void 0, 4)
			}

			function o(t) {
				return Object(a["c"])("/people/".concat(t))
			}

			function l(t) {
				return Object(a["c"])("/people/".concat(t, "/similar"))
			}
		},
		"49cd": function(t, e, c) {
			"use strict";
			c("b0c0");
			var a = c("7a23"),
				n = {
					class: "col-6 col-sm-6 col-md-3 col-xl-3"
				},
				d = {
					class: "card"
				},
				i = ["src"],
				r = {
					class: "card__title"
				},
				b = {
					class: "card__list"
				},
				o = {
					key: 0,
					class: "card__extra"
				},
				l = Object(a["g"])("svg", {
					width: "18px",
					height: "18px",
					viewBox: "0 0 24 24",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg",
					"xmlns:xlink": "http://www.w3.org/1999/xlink"
				}, [Object(a["g"])("g", {
					stroke: "none",
					"stroke-width": "1",
					fill: "none",
					"fill-rule": "evenodd",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, [Object(a["g"])("path", {
					d: "M0.5,23.5 C0.513413666,22.3574974 0.751254857,21.2287711 1.2,20.178 C1.69,19.197 3.739,18.517 6.311,17.565 C7.006,17.307 6.892,15.491 6.584,15.152 C5.59155718,14.0773139 5.10543859,12.629874 5.248,11.174 C5.15892891,10.2479477 5.45849615,9.32650185 6.07511042,8.62987183 C6.69172469,7.93324181 7.56998407,7.52401883 8.5,7.5 C9.43072015,7.52292867 10.3100352,7.93168064 10.9275231,8.6284406 C11.545011,9.32520056 11.8451079,10.2472716 11.756,11.174 C11.8985614,12.629874 11.4124428,14.0773139 10.42,15.152 C10.112,15.491 9.998,17.307 10.693,17.565 C13.265,18.517 15.314,19.197 15.804,20.178 C16.2527451,21.2287711 16.4905863,22.3574974 16.504,23.5 L0.5,23.5 Z",
					id: "Shape"
				}), Object(a["g"])("path", {
					d: "M13.979,12.034 C14.4689008,12.2254727 14.9792855,12.3596962 15.5,12.434 C15.5,13.004 15.5,15.004 15.5,15.504 C16,15.004 19,12.504 19.5,12.043 C21.8543064,11.2065989 23.446441,9.00189048 23.5,6.504 C23.3586568,3.05313706 20.451216,0.367556273 17,0.5 C13.7876833,0.394834268 11.0066051,2.7140479 10.533,5.893",
					id: "Shape"
				}), Object(a["g"])("path", {
					d: "M14.25,6.24999798 C14.3163857,6.24973285 14.3801295,6.27598627 14.4270716,6.3229284 C14.4740137,6.36987053 14.5002671,6.43361434 14.5,6.5 L14.5,6.5 C14.5002671,6.56638566 14.4740137,6.63012947 14.4270716,6.6770716 C14.3801295,6.72401373 14.3163857,6.75026715 14.25,6.74999798 L14.25,6.74999798 C14.1836959,6.74999798 14.1201074,6.72366079 14.0732233,6.6767767 C14.0263392,6.6298926 14,6.56630412 14,6.5 L14,6.5 C14,6.36192881 14.1119288,6.24999798 14.25,6.24999798",
					id: "Shape"
				}), Object(a["g"])("path", {
					d: "M17,6.25 C17.1380712,6.25 17.25,6.36192881 17.25,6.5 L17.25,6.5 C17.25,6.63807119 17.1380712,6.75 17,6.75 L17,6.75 C16.8619288,6.75 16.75,6.63807119 16.75,6.5 L16.75,6.5 C16.75,6.36192881 16.8619288,6.25 17,6.25",
					id: "Shape"
				}), Object(a["g"])("path", {
					d: "M19.75,6.25 C19.8880712,6.25 20,6.36192881 20,6.5 L20,6.5 C20,6.63807119 19.8880712,6.75 19.75,6.75 L19.75,6.75 C19.6119288,6.75 19.5,6.63807119 19.5,6.5 L19.5,6.5 C19.5,6.36192881 19.6119288,6.25 19.75,6.25",
					id: "Shape"
				})])], -1);

			function s(t, e, c, s, j, u) {
				var O = Object(a["C"])("router-link");
				return Object(a["u"])(), Object(a["f"])("div", n, [Object(a["g"])("div", d, [Object(a["j"])(O, {
					to: {
						name: "PersonView",
						params: {
							tmdbId: t.tmdbId
						}
					},
					class: "card__cover"
				}, {
					default: Object(a["K"])((function() {
						return [Object(a["g"])("img", {
							src: t.posterImage,
							alt: ""
						}, null, 8, i)]
					})),
					_: 1
				}, 8, ["to"]), Object(a["g"])("h3", r, [Object(a["j"])(O, {
					to: {
						name: "PersonView",
						params: {
							tmdbId: t.tmdbId
						}
					},
					innerHTML: t.name
				}, null, 8, ["to", "innerHTML"])]), Object(a["g"])("ul", b, [Object(a["g"])("li", null, Object(a["E"])(t.born), 1), Object(a["g"])("li", null, Object(a["E"])(t.bornIn), 1)]), t.role ? (Object(a["u"])(), Object(a["f"])("div", o, [l, Object(a["i"])(" " + Object(a["E"])(t.role), 1)])) : Object(a["e"])("", !0)])])
			}
			var j = Object(a["k"])({
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
				u = c("6b0d"),
				O = c.n(u);
			const g = O()(j, [
				["render", s]
			]);
			e["a"] = g
		},
		af40: function(t, e, c) {},
		cdc9: function(t, e, c) {
			"use strict";
			c.r(e);
			c("b0c0");
			var a = c("7a23"),
				n = function(t) {
					return Object(a["x"])("data-v-42b779ba"), t = t(), Object(a["v"])(), t
				},
				d = {
					key: 0
				},
				i = {
					key: 1
				},
				r = {
					key: 2,
					class: "section section--head section--gradient"
				},
				b = {
					class: "container"
				},
				o = {
					class: "article"
				},
				l = {
					class: "row"
				},
				s = {
					key: 0,
					class: "col-xl-3"
				},
				j = ["src"],
				u = {
					class: "col-12 col-xl-9"
				},
				O = {
					class: "article__content"
				},
				g = ["innerHTML"],
				m = {
					class: "list"
				},
				v = n((function() {
					return Object(a["g"])("li", null, null, -1)
				})),
				f = ["innerHTML"],
				p = {
					class: "row"
				},
				I = {
					class: "col-12 col-xl-8"
				},
				C = {
					class: "comments"
				},
				k = {
					class: "nav nav-tabs comments__title comments__title--tabs",
					role: "tablist"
				},
				L = {
					class: "nav-item"
				},
				h = n((function() {
					return Object(a["g"])("h4", null, "Acted In", -1)
				})),
				M = {
					key: 0,
					class: "nav-item"
				},
				w = n((function() {
					return Object(a["g"])("h4", null, "Directed", -1)
				})),
				_ = {
					class: "tab-content"
				},
				y = {
					key: 0
				},
				x = {
					key: 2,
					class: "row"
				},
				S = {
					class: "col-12"
				},
				T = {
					key: 0
				},
				E = {
					key: 2,
					class: "row"
				},
				G = {
					class: "col-12"
				},
				H = {
					class: "col-12 col-xl-4"
				},
				R = {
					class: "sidebar sidebar--mt"
				},
				A = n((function() {
					return Object(a["g"])("h3", {
						class: "sidebar-title"
					}, "Similar People", -1)
				})),
				P = {
					class: "row"
				},
				K = {
					class: "col-12"
				},
				V = {
					key: 0
				};

			function J(t, e, c, n, J, z) {
				var B = Object(a["C"])("MovieGridItem"),
					D = Object(a["C"])("Grid"),
					N = Object(a["C"])("PersonGridItem");
				return t.loading ? (Object(a["u"])(), Object(a["f"])("div", d)) : t.data ? (Object(a["u"])(), Object(a["f"])("section", r, [Object(a["g"])("div", b, [Object(a["g"])("div", o, [Object(a["g"])("div", l, [t.data.poster ? (Object(a["u"])(), Object(a["f"])("div", s, [Object(a["g"])("img", {
					src: t.data.poster,
					alt: ""
				}, null, 8, j)])) : Object(a["e"])("", !0), Object(a["g"])("div", u, [Object(a["g"])("div", O, [Object(a["g"])("h1", {
					innerHTML: t.data.name
				}, null, 8, g), Object(a["g"])("ul", m, [v, Object(a["g"])("li", null, Object(a["E"])(t.data.born), 1), Object(a["g"])("li", null, Object(a["E"])(t.data.bornIn), 1)]), Object(a["g"])("p", {
					innerHTML: t.data.bio
				}, null, 8, f)])])]), Object(a["g"])("div", p, [Object(a["g"])("div", I, [Object(a["g"])("div", C, [Object(a["g"])("ul", k, [Object(a["g"])("li", L, [Object(a["g"])("a", {
					class: Object(a["p"])(["nav-link", {
						active: "acted" === t.tab
					}]),
					"data-toggle": "tab",
					href: "#tab-1",
					role: "tab",
					"aria-controls": "tab-1",
					"aria-selected": "true",
					onClick: e[0] || (e[0] = Object(a["M"])((function(e) {
						return t.setTab("acted")
					}), ["prevent"]))
				}, [h, Object(a["g"])("span", null, Object(a["E"])(t.data.actedCount), 1)], 2)]), t.data.directedCount && t.data.directedCount > 0 ? (Object(a["u"])(), Object(a["f"])("li", M, [Object(a["g"])("a", {
					class: Object(a["p"])(["nav-link", {
						active: "directed" === t.tab
					}]),
					"data-toggle": "tab",
					href: "#tab-2",
					role: "tab",
					"aria-controls": "tab-2",
					"aria-selected": "false",
					onClick: e[1] || (e[1] = Object(a["M"])((function(e) {
						return t.setTab("directed")
					}), ["prevent"]))
				}, [w, Object(a["g"])("span", null, Object(a["E"])(t.data.directedCount), 1)], 2)])) : Object(a["e"])("", !0)]), Object(a["g"])("div", _, ["acted" === t.tab ? (Object(a["u"])(), Object(a["d"])(D, {
					key: 0
				}, {
					default: Object(a["K"])((function() {
						return [t.actedInLoading.value ? (Object(a["u"])(), Object(a["f"])("div", y, "Loading...")) : (Object(a["u"])(!0), Object(a["f"])(a["a"], {
							key: 1
						}, Object(a["A"])(t.actedIn, (function(t) {
							return Object(a["u"])(), Object(a["f"])(a["a"], {
								key: t.tmdbId
							}, [t ? (Object(a["u"])(), Object(a["d"])(B, {
								key: t.tmdbId,
								to: {
									name: "MovieView",
									params: {
										id: t.tmdbId
									}
								},
								tmdbId: t.tmdbId,
								title: t.title,
								imdbRating: t.imdbRating,
								rating: t.rating,
								poster: t.poster,
								list: [{
									name: t.role
								}],
								favorite: t.favorite
							}, null, 8, ["to", "tmdbId", "title", "imdbRating", "rating", "poster", "list", "favorite"])) : Object(a["e"])("", !0)], 64)
						})), 128)), t.actedInMore ? (Object(a["u"])(), Object(a["f"])("div", x, [Object(a["g"])("div", S, [Object(a["g"])("button", {
							class: "catalog__more",
							type: "button",
							onClick: e[2] || (e[2] = function() {
								return t.actedInLoadMore()
							})
						}, " Load more ")])])) : Object(a["e"])("", !0)]
					})),
					_: 1
				})) : Object(a["e"])("", !0), "directed" === t.tab ? (Object(a["u"])(), Object(a["d"])(D, {
					key: 1
				}, {
					default: Object(a["K"])((function() {
						return [t.directedLoading.value ? (Object(a["u"])(), Object(a["f"])("div", T, "Loading...")) : (Object(a["u"])(!0), Object(a["f"])(a["a"], {
							key: 1
						}, Object(a["A"])(t.directed, (function(t) {
							return Object(a["u"])(), Object(a["f"])(a["a"], {
								key: t.tmdbId
							}, [t ? (Object(a["u"])(), Object(a["d"])(B, {
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
								list: [{
									name: t.role
								}],
								favorite: t.favorite
							}, null, 8, ["to", "tmdbId", "title", "imdbRating", "rating", "poster", "list", "favorite"])) : Object(a["e"])("", !0)], 64)
						})), 128)), t.directedMore ? (Object(a["u"])(), Object(a["f"])("div", E, [Object(a["g"])("div", G, [Object(a["g"])("button", {
							class: "catalog__more",
							type: "button",
							onClick: e[3] || (e[3] = function() {
								return t.directedLoadMore()
							})
						}, " Load more ")])])) : Object(a["e"])("", !0)]
					})),
					_: 1
				})) : Object(a["e"])("", !0)])])]), Object(a["g"])("div", H, [Object(a["g"])("div", R, [A, Object(a["g"])("div", P, [Object(a["g"])("div", K, [Object(a["j"])(D, null, {
					default: Object(a["K"])((function() {
						return [t.similarLoading.value ? (Object(a["u"])(), Object(a["f"])("div", V, "Loading...")) : (Object(a["u"])(!0), Object(a["f"])(a["a"], {
							key: 1
						}, Object(a["A"])(t.similar, (function(t) {
							return Object(a["u"])(), Object(a["d"])(N, {
								key: t.tmdbId,
								class: "col-md-6 col-xl-6",
								tmdbId: t.tmdbId,
								name: t.name,
								poster: t.poster,
								born: t.born,
								bornIn: t.bornIn
							}, null, 8, ["tmdbId", "name", "poster", "born", "bornIn"])
						})), 128))]
					})),
					_: 1
				})])])])])])])])])) : (Object(a["u"])(), Object(a["f"])("div", i))
			}
			var z = c("c2c0"),
				B = c("efbf"),
				D = c("49cd"),
				N = c("6c02"),
				Z = c("376e"),
				q = c("e490"),
				F = Object(a["k"])({
					components: {
						Grid: z["a"],
						MovieGridItem: B["a"],
						PersonGridItem: D["a"]
					},
					setup: function() {
						var t = Object(N["c"])(),
							e = t.params,
							c = Object(Z["c"])(e.tmdbId),
							n = c.loading,
							d = c.data,
							i = c.error,
							r = Object(a["z"])("acted"),
							b = function(t) {
								r.value = t
							},
							o = Object(q["h"])(e.tmdbId),
							l = o.loading,
							s = o.data,
							j = o.more,
							u = o.loadMore,
							O = Object(q["i"])(e.tmdbId),
							g = O.loading,
							m = O.data,
							v = O.more,
							f = O.loadMore,
							p = Object(Z["d"])(e.tmdbId),
							I = p.loading,
							C = p.data;
						return {
							loading: n,
							data: d,
							error: i,
							tab: r,
							setTab: b,
							actedIn: s,
							actedInLoading: l,
							actedInMore: j,
							actedInLoadMore: u,
							directed: m,
							directedLoading: g,
							directedMore: v,
							directedLoadMore: f,
							similarLoading: I,
							similar: C
						}
					}
				}),
				Q = (c("366b"), c("6b0d")),
				U = c.n(Q);
			const W = U()(F, [
				["render", J],
				["__scopeId", "data-v-42b779ba"]
			]);
			e["default"] = W
		}
	}
]);