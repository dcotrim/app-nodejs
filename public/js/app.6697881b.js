(function(e) {
	function t(t) {
		for (var o, r, c = t[0], s = t[1], u = t[2], l = 0, d = []; l < c.length; l++) r = c[l], Object.prototype.hasOwnProperty.call(a, r) && a[r] && d.push(a[r][0]), a[r] = 0;
		for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
		b && b(t);
		while (d.length) d.shift()();
		return i.push.apply(i, u || []), n()
	}

	function n() {
		for (var e, t = 0; t < i.length; t++) {
			for (var n = i[t], o = !0, r = 1; r < n.length; r++) {
				var c = n[r];
				0 !== a[c] && (o = !1)
			}
			o && (i.splice(t--, 1), e = s(s.s = n[0]))
		}
		return e
	}
	var o = {},
		r = {
			app: 0
		},
		a = {
			app: 0
		},
		i = [];

	function c(e) {
		return s.p + "js/" + ({
			favorites: "favorites",
			"genres.list": "genres.list",
			"genres.view": "genres.view",
			login: "login",
			logout: "logout",
			"movie.view": "movie.view",
			"movies.latest": "movies.latest",
			"people.list": "people.list",
			"people.view": "people.view",
			register: "register"
		} [e] || e) + "." + {
			favorites: "c1e61f74",
			"genres.list": "54f95426",
			"genres.view": "98897bf3",
			login: "2f0faba0",
			logout: "26c41b02",
			"movie.view": "1451862a",
			"movies.latest": "f7a5caa3",
			"people.list": "2a90c2bb",
			"people.view": "8e406900",
			register: "c725c442"
		} [e] + ".js"
	}

	function s(t) {
		if (o[t]) return o[t].exports;
		var n = o[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
	}
	s.e = function(e) {
		var t = [],
			n = {
				login: 1,
				"movie.view": 1,
				"people.list": 1,
				"people.view": 1,
				register: 1
			};
		r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise((function(t, n) {
			for (var o = "css/" + ({
					favorites: "favorites",
					"genres.list": "genres.list",
					"genres.view": "genres.view",
					login: "login",
					logout: "logout",
					"movie.view": "movie.view",
					"movies.latest": "movies.latest",
					"people.list": "people.list",
					"people.view": "people.view",
					register: "register"
				} [e] || e) + "." + {
					favorites: "31d6cfe0",
					"genres.list": "31d6cfe0",
					"genres.view": "31d6cfe0",
					login: "b93aa172",
					logout: "31d6cfe0",
					"movie.view": "420ab6d9",
					"movies.latest": "31d6cfe0",
					"people.list": "12ebb465",
					"people.view": "32f8da85",
					register: "d6a35621"
				} [e] + ".css", a = s.p + o, i = document.getElementsByTagName("link"), c = 0; c < i.length; c++) {
				var u = i[c],
					l = u.getAttribute("data-href") || u.getAttribute("href");
				if ("stylesheet" === u.rel && (l === o || l === a)) return t()
			}
			var d = document.getElementsByTagName("style");
			for (c = 0; c < d.length; c++) {
				u = d[c], l = u.getAttribute("data-href");
				if (l === o || l === a) return t()
			}
			var b = document.createElement("link");
			b.rel = "stylesheet", b.type = "text/css", b.onload = t, b.onerror = function(t) {
				var o = t && t.target && t.target.src || a,
					i = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
				i.code = "CSS_CHUNK_LOAD_FAILED", i.request = o, delete r[e], b.parentNode.removeChild(b), n(i)
			}, b.href = a;
			var v = document.getElementsByTagName("head")[0];
			v.appendChild(b)
		})).then((function() {
			r[e] = 0
		})));
		var o = a[e];
		if (0 !== o)
			if (o) t.push(o[2]);
			else {
				var i = new Promise((function(t, n) {
					o = a[e] = [t, n]
				}));
				t.push(o[2] = i);
				var u, l = document.createElement("script");
				l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = c(e);
				var d = new Error;
				u = function(t) {
					l.onerror = l.onload = null, clearTimeout(b);
					var n = a[e];
					if (0 !== n) {
						if (n) {
							var o = t && ("load" === t.type ? "missing" : t.type),
								r = t && t.target && t.target.src;
							d.message = "Loading chunk " + e + " failed.\n(" + o + ": " + r + ")", d.name = "ChunkLoadError", d.type = o, d.request = r, n[1](d)
						}
						a[e] = void 0
					}
				};
				var b = setTimeout((function() {
					u({
						type: "timeout",
						target: l
					})
				}), 12e4);
				l.onerror = l.onload = u, document.head.appendChild(l)
			} return Promise.all(t)
	}, s.m = e, s.c = o, s.d = function(e, t, n) {
		s.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, s.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, s.t = function(e, t) {
		if (1 & t && (e = s(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (s.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e) s.d(n, o, function(t) {
				return e[t]
			}.bind(null, o));
		return n
	}, s.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return s.d(t, "a", t), t
	}, s.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, s.p = "/", s.oe = function(e) {
		throw console.error(e), e
	};
	var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
		l = u.push.bind(u);
	u.push = t, u = u.slice();
	for (var d = 0; d < u.length; d++) t(u[d]);
	var b = l;
	i.push([0, "chunk-vendors"]), n()
})({
	0: function(e, t, n) {
		e.exports = n("cd49")
	},
	"0993": function(e, t, n) {
		"use strict";
		n("cf64")
	},
	"4ca7": function(e, t, n) {
		"use strict";
		n("dd4b")
	},
	"4d47": function(e, t, n) {},
	"5aea": function(e, t, n) {},
	"5e73": function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return s
		})), n.d(t, "b", (function() {
			return u
		})), n.d(t, "c", (function() {
			return l
		})), n.d(t, "e", (function() {
			return d
		})), n.d(t, "d", (function() {
			return v
		}));
		var o = n("2909"),
			r = n("1da1"),
			a = (n("96cf"), n("d3b7"), n("4e82"), n("caad"), n("2532"), n("a15b"), n("99af"), n("7a23")),
			i = n("bc3a"),
			c = n.n(i),
			s = "desc",
			u = c.a.create({
				baseURL: "http://localhost:3000/api"
			});

		function l(e) {
			var t = Object(a["z"])(!0),
				n = Object(a["z"])(),
				o = Object(a["z"])(),
				r = Object(a["z"])();
			return u.get(e).then((function(e) {
				n.value = e.status, r.value = e.data, o.value = void 0
			})).catch((function(e) {
				var t;
				n.value = null === (t = e.response) || void 0 === t ? void 0 : t.status, o.value = e.message, r.value = void 0
			})).finally((function() {
				t.value = !1
			})), {
				loading: t,
				code: n,
				error: o,
				data: r
			}
		}

		function d(e) {
			var t = Object(a["z"])(!1),
				n = Object(a["z"])(),
				o = Object(a["z"])(),
				r = Object(a["z"])(),
				i = function(a) {
					t.value = !0, u.post(e, a).then((function(e) {
						n.value = e.status, r.value = e.data, o.value = void 0
					})).catch((function(e) {
						var t;
						n.value = null === (t = e.response) || void 0 === t ? void 0 : t.status, o.value = e.message, r.value = void 0
					})).finally((function() {
						t.value = !1
					}))
				};
			return {
				post: i,
				loading: t,
				code: n,
				error: o,
				data: r
			}
		}

		function b(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6,
				o = Object(a["D"])(e),
				r = function(e) {
					o.value = e
				},
				i = Object(a["z"])(t),
				c = function(e) {
					i.value = e
				},
				s = Object(a["z"])(n),
				u = function(e) {
					s.value = e
				},
				l = Object(a["z"])(0),
				d = function(e) {
					l.value = e
				},
				b = Object(a["z"])(!0);
			return {
				sort: o,
				setSort: r,
				order: i,
				setOrder: c,
				limit: s,
				setLimit: u,
				skip: l,
				setSkip: d,
				more: b
			}
		}

		function v(e, t, n) {
			var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 6,
				c = Object(a["z"])(""),
				s = Object(a["z"])(!0),
				l = Object(a["z"])(),
				d = Object(a["z"])(),
				v = Object(a["z"])(),
				f = b(t, n, i),
				j = f.sort,
				p = f.setSort,
				g = f.order,
				O = f.setOrder,
				m = f.limit,
				h = f.setLimit,
				_ = f.skip,
				w = f.setSkip,
				y = f.more;
			Object(a["J"])([c, j, g], (function() {
				_.value = 0, v.value = [], y.value = !0, C()
			}));
			var k = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					_.value = _.value + m.value, !0 === e && (s.value = !0, v.value = []), C()
				},
				C = function() {
					var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
						var n, r;
						return regeneratorRuntime.wrap((function(t) {
							while (1) switch (t.prev = t.next) {
								case 0:
									n = [], void 0 !== j.value && n.push("sort=".concat(encodeURIComponent(j.value))), void 0 !== m.value && m.value > 0 && n.push("limit=".concat(encodeURIComponent(m.value))), void 0 !== _.value && _.value > 0 && n.push("skip=".concat(encodeURIComponent(_.value))), void 0 !== c.value && "" !== c.value && n.push("q=".concat(encodeURIComponent(c.value))), r = e, n.length && (r.includes("?") ? r += "&" : r += "?", r += n.join("&")), u.get(r).then((function(e) {
										var t = e.data;
										if (t.length) {
											var n = void 0 !== v.value ? v.value : [];
											v.value = n.concat.apply(n, Object(o["a"])(t))
										} else y.value = !1;
										t.length < m.value && (y.value = !1), l.value = e.status, d.value = void 0
									})).catch((function(e) {
										var t;
										l.value = null === (t = e.response) || void 0 === t ? void 0 : t.status, d.value = e.message, v.value = void 0
									})).finally((function() {
										s.value = !1
									}));
								case 8:
								case "end":
									return t.stop()
							}
						}), t)
					})));
					return function() {
						return t.apply(this, arguments)
					}
				}();
			return C(), {
				q: c,
				loading: s,
				code: l,
				error: d,
				data: v,
				limit: m,
				setLimit: h,
				skip: _,
				setSkip: w,
				sort: j,
				setSort: p,
				order: g,
				setOrder: O,
				more: y,
				loadMore: k
			}
		}
	},
	8317: function(e, t, n) {
		"use strict";
		var o = n("7a23"),
			r = {
				class: "section section--gradient"
			},
			a = ["data-bg"],
			i = {
				class: "container"
			},
			c = {
				class: "row"
			},
			s = {
				class: "col-12"
			},
			u = {
				class: "section__title"
			};

		function l(e, t, n, l, d, b) {
			var v = Object(o["C"])("router-link");
			return Object(o["u"])(), Object(o["f"])("section", r, [e.background ? (Object(o["u"])(), Object(o["f"])("div", {
				key: 0,
				class: "section__bg",
				"data-bg": e.background,
				style: Object(o["q"])("background: url(".concat(e.background, ") center / cover no-repeat;"))
			}, null, 12, a)) : Object(o["e"])("", !0), Object(o["g"])("div", i, [Object(o["g"])("div", c, [Object(o["g"])("div", s, [Object(o["g"])("h2", u, [Object(o["j"])(v, {
				to: e.to,
				innerHTML: e.title
			}, null, 8, ["to", "innerHTML"])])]), Object(o["B"])(e.$slots, "default")])])])
		}
		var d = Object(o["k"])({
				name: "Header",
				props: {
					to: String,
					title: String,
					background: {
						type: String,
						required: !1
					}
				}
			}),
			b = n("6b0d"),
			v = n.n(b);
		const f = v()(d, [
			["render", l]
		]);
		t["a"] = f
	},
	9108: function(e, t, n) {
		"use strict";
		n("4d47")
	},
	9214: function(e, t, n) {},
	"9bc1": function(e, t, n) {
		"use strict";
		var o = n("7a23"),
			r = {
				key: 0
			},
			a = {
				key: 2,
				class: "row"
			},
			i = {
				class: "col-12"
			};

		function c(e, t, n, c, s, u) {
			var l = Object(o["C"])("MovieGridItem"),
				d = Object(o["C"])("Grid"),
				b = Object(o["C"])("Section");
			return Object(o["u"])(), Object(o["d"])(b, {
				title: e.title,
				to: e.to
			}, {
				default: Object(o["K"])((function() {
					return [Object(o["j"])(d, null, {
						default: Object(o["K"])((function() {
							return [e.loading.value ? (Object(o["u"])(), Object(o["f"])("div", r, " Loading... ")) : (Object(o["u"])(!0), Object(o["f"])(o["a"], {
								key: 1
							}, Object(o["A"])(e.data, (function(e) {
								return Object(o["u"])(), Object(o["f"])(o["a"], null, [e ? (Object(o["u"])(), Object(o["d"])(l, {
									key: e.tmdbId,
									to: {
										name: "MovieView",
										params: e
									},
									tmdbId: e.tmdbId,
									title: e.title,
									imdbRating: e.imdbRating,
									rating: e.rating,
									poster: e.poster,
									list: e.genres,
									favorite: e.favorite
								}, null, 8, ["to", "tmdbId", "title", "imdbRating", "rating", "poster", "list", "favorite"])) : Object(o["e"])("", !0)], 64)
							})), 256)), e.showLoadMore && e.more ? (Object(o["u"])(), Object(o["f"])("div", a, [Object(o["g"])("div", i, [Object(o["g"])("button", {
								class: "catalog__more",
								type: "button",
								onClick: t[0] || (t[0] = function() {
									return e.loadMore()
								})
							}, "Load more")])])) : Object(o["e"])("", !0)]
						})),
						_: 1
					})]
				})),
				_: 1
			}, 8, ["title", "to"])
		}
		n("4e82");
		var s = n("8317"),
			u = n("c2c0"),
			l = n("efbf"),
			d = n("e490"),
			b = n("5e73"),
			v = Object(o["k"])({
				components: {
					Section: s["a"],
					Grid: u["a"],
					MovieGridItem: l["a"]
				},
				props: {
					title: String,
					to: String,
					sort: String,
					order: String,
					showLoadMore: Boolean
				},
				setup: function(e) {
					var t = Object(d["f"])(e.sort, e.order || b["a"], 6),
						n = t.loading,
						o = t.data,
						r = t.more,
						a = t.loadMore;
					return {
						loading: n,
						data: o,
						more: r,
						loadMore: a
					}
				}
			}),
			f = n("6b0d"),
			j = n.n(f);
		const p = j()(v, [
			["render", c]
		]);
		t["a"] = p
	},
	c2c0: function(e, t, n) {
		"use strict";
		var o = n("7a23"),
			r = {
				class: "col-12"
			},
			a = {
				class: "row row--grid"
			};

		function i(e, t) {
			return Object(o["u"])(), Object(o["f"])("div", r, [Object(o["g"])("div", a, [Object(o["B"])(e.$slots, "default")])])
		}
		var c = n("6b0d"),
			s = n.n(c);
		const u = {},
			l = s()(u, [
				["render", i]
			]);
		t["a"] = l
	},
	cd49: function(e, t, n) {
		"use strict";
		n.r(t);
		n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var o = n("7a23");

		function r(e, t, n, r, a, i) {
			var c = Object(o["C"])("Header"),
				s = Object(o["C"])("router-view"),
				u = Object(o["C"])("notification"),
				l = Object(o["C"])("Footer");
			return Object(o["u"])(), Object(o["f"])(o["a"], null, [Object(o["j"])(c), (Object(o["u"])(), Object(o["d"])(s, {
				key: e.$route.path
			})), Object(o["j"])(u), Object(o["j"])(l)], 64)
		}
		var a = function(e) {
				return Object(o["x"])("data-v-6ffc0ff5"), e = e(), Object(o["v"])(), e
			},
			i = {
				class: "container"
			},
			c = {
				class: "row"
			},
			s = {
				class: "col-12"
			},
			u = {
				class: "header__content"
			},
			l = a((function() {
				return Object(o["g"])("span", null, null, -1)
			})),
			d = a((function() {
				return Object(o["g"])("span", null, null, -1)
			})),
			b = a((function() {
				return Object(o["g"])("span", null, null, -1)
			})),
			v = [l, d, b],
			f = a((function() {
				return Object(o["g"])("svg", {
					width: "38px",
					height: "36px",
					viewBox: "0 0 38 36",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg",
					"xmlns:xlink": "http://www.w3.org/1999/xlink"
				}, [Object(o["g"])("g", {
					id: "Page-1",
					stroke: "none",
					"stroke-width": "1",
					fill: "none",
					"fill-rule": "evenodd"
				}, [Object(o["g"])("g", {
					id: "Artboard-Copy-4",
					transform: "translate(-461.000000, -92.000000)",
					fill: "#FFFFFF",
					"fill-rule": "nonzero"
				}, [Object(o["g"])("g", {
					id: "Neo4j-logo-white",
					transform: "translate(461.000000, 92.000000)"
				}, [Object(o["g"])("path", {
					d: "M15.1567882,19.7787499 C14.2593113,19.7797412 13.3869911,20.0839625 12.6739274,20.6446466 L8.12902953,17.4480446 C8.23017901,17.0744431 8.28207734,16.6885531 8.28333162,16.3007314 C8.30323173,14.5779313 7.31020034,13.0132192 5.76906756,12.3390243 C4.22793477,11.6648295 2.44364988,12.0145572 1.25142245,13.2245027 C0.0591950158,14.4344482 -0.305064777,16.2651954 0.329150182,17.859786 C0.963365141,19.4543767 2.47056054,20.4972837 4.14523019,20.5003305 C5.04296547,20.5009503 5.91577446,20.1965585 6.62809105,19.6344338 L11.1589614,22.8526832 C10.9531573,23.6053568 10.9531573,24.4018518 11.1589614,25.1545253 L6.61406359,28.3511274 C5.9055597,27.7920045 5.03816115,27.4877809 4.14523019,27.4852306 C2.47025128,27.4823124 0.958755122,28.5185053 0.316457436,30.1100122 C-0.325840249,31.7015192 0.0277521654,33.5344193 1.21214281,34.7529338 C2.39653346,35.9714483 4.17810422,36.3352281 5.72504187,35.674425 C7.27197952,35.0136219 8.27915444,33.4585776 8.27631789,31.7353403 C8.27610073,31.3526759 8.22657313,30.97173 8.12902953,30.6024588 L12.6739274,27.4058568 C13.3869911,27.9665408 14.2593113,28.2707622 15.1567882,28.2717535 C17.3222528,28.1125873 19,26.2587846 19,24.0252517 C19,21.7917188 17.3222528,19.9379161 15.1567882,19.7787499 L15.1567882,19.7787499 Z",
					id: "Path"
				}), Object(o["g"])("path", {
					d: "M25.5070592,0 C18.0226312,0 13,4.36522213 13,12.8334696 L13,18.871082 C13.7598872,18.496936 14.5938987,18.2983633 15.4405743,18.2899973 C16.2888621,18.2901903 17.1259465,18.4840715 17.8882228,18.8569092 L17.8882228,12.805124 C17.8882228,7.31316435 20.9159498,4.49277732 25.5282816,4.49277732 C30.1406134,4.49277732 33.1258956,7.31316435 33.1258956,12.805124 L33.1258956,26 L38,26 L38,12.805124 C38.0141184,4.28727174 32.9914872,0 25.5070592,0 Z",
					id: "Path"
				})])])])], -1)
			})),
			j = {
				class: "header__nav-item"
			},
			p = Object(o["i"])("Genres"),
			g = {
				class: "header__nav-item"
			},
			O = Object(o["i"])("People"),
			m = {
				class: "header__nav-item"
			},
			h = Object(o["i"])("Popular Movies"),
			_ = {
				class: "header__nav-item"
			},
			w = Object(o["i"])("Latest Releases"),
			y = {
				class: "header__nav-item"
			},
			k = Object(o["i"])("My Favorites"),
			C = {
				key: 0,
				class: "header__actions"
			},
			L = a((function() {
				return Object(o["g"])("span", null, "Sign in", -1)
			})),
			M = a((function() {
				return Object(o["g"])("span", null, "Register", -1)
			})),
			x = {
				key: 1,
				class: "header__actions"
			},
			S = a((function() {
				return Object(o["g"])("span", null, "Sign Out", -1)
			}));

		function I(e, t, n, r, a, l) {
			var d = Object(o["C"])("router-link");
			return Object(o["u"])(), Object(o["f"])("header", {
				class: Object(o["p"])(["header header--static", e.menu ? "header--menu" : ""])
			}, [Object(o["g"])("div", i, [Object(o["g"])("div", c, [Object(o["g"])("div", s, [Object(o["g"])("div", u, [Object(o["g"])("button", {
				class: Object(o["p"])(["header__menu", e.menu ? "header__menu--active" : ""]),
				type: "button",
				onClick: t[0] || (t[0] = Object(o["M"])((function() {
					return e.toggleMenu && e.toggleMenu.apply(e, arguments)
				}), ["prevent"]))
			}, v, 2), Object(o["j"])(d, {
				to: {
					name: "Home"
				},
				class: "header__logo"
			}, {
				default: Object(o["K"])((function() {
					return [f]
				})),
				_: 1
			}), Object(o["g"])("ul", {
				class: Object(o["p"])(["header__nav", e.menu ? "header__nav--active" : ""])
			}, [Object(o["g"])("li", j, [Object(o["j"])(d, {
				class: "header__nav-link",
				to: {
					name: "GenreList"
				}
			}, {
				default: Object(o["K"])((function() {
					return [p]
				})),
				_: 1
			})]), Object(o["g"])("li", g, [Object(o["j"])(d, {
				class: "header__nav-link",
				to: {
					name: "PeopleList"
				}
			}, {
				default: Object(o["K"])((function() {
					return [O]
				})),
				_: 1
			})]), Object(o["g"])("li", m, [Object(o["j"])(d, {
				class: "header__nav-link",
				to: {
					name: "PopularMovies"
				}
			}, {
				default: Object(o["K"])((function() {
					return [h]
				})),
				_: 1
			})]), Object(o["g"])("li", _, [Object(o["j"])(d, {
				class: "header__nav-link",
				to: {
					name: "LatestMovies"
				}
			}, {
				default: Object(o["K"])((function() {
					return [w]
				})),
				_: 1
			})]), Object(o["g"])("li", y, [Object(o["j"])(d, {
				class: "header__nav-link",
				to: {
					name: "Favorites"
				}
			}, {
				default: Object(o["K"])((function() {
					return [k]
				})),
				_: 1
			})])], 2), e.user ? (Object(o["u"])(), Object(o["f"])("div", x, [Object(o["j"])(d, {
				to: {
					name: "Favorites"
				},
				class: "header__user"
			}, {
				default: Object(o["K"])((function() {
					return [Object(o["g"])("span", null, Object(o["E"])(e.greeting), 1)]
				})),
				_: 1
			}), Object(o["j"])(d, {
				to: {
					name: "Logout"
				},
				class: "header__register"
			}, {
				default: Object(o["K"])((function() {
					return [S]
				})),
				_: 1
			})])) : (Object(o["u"])(), Object(o["f"])("div", C, [Object(o["j"])(d, {
				to: {
					name: "Login"
				},
				class: "header__user"
			}, {
				default: Object(o["K"])((function() {
					return [L]
				})),
				_: 1
			}), Object(o["j"])(d, {
				to: {
					name: "Register"
				},
				class: "header__register"
			}, {
				default: Object(o["K"])((function() {
					return [M]
				})),
				_: 1
			})]))])])])])], 2)
		}
		n("b0c0");
		var P = n("d617"),
			R = Object(o["k"])({
				name: "Header",
				setup: function() {
					var e = Object(P["a"])(),
						t = e.user,
						n = Object(o["z"])(!1),
						r = function() {
							n.value = !n.value
						},
						a = Object(o["b"])((function() {
							var e, n, o = "Hey";
							void 0 !== (null === (e = t.value) || void 0 === e ? void 0 : e.name) && (o += ", ".concat(null === (n = t.value) || void 0 === n ? void 0 : n.name));
							return "".concat(o, "!")
						}));
					return {
						menu: n,
						toggleMenu: r,
						user: t,
						greeting: a
					}
				}
			}),
			A = (n("4ca7"), n("6b0d")),
			F = n.n(A);
		const z = F()(R, [
			["render", I],
			["__scopeId", "data-v-6ffc0ff5"]
		]);
		var N = z,
			K = {
				class: "footer"
			},
			B = Object(o["h"])('<div class="container"><div class="row"><div class="col-12"><div class="footer__content"><div class="footer__links"><a href="https://neo4j.com/privacy-policy/" target="_blank">Privacy policy</a><a href="https://neo4j.com/terms/" target="_blank">Terms and conditions</a></div><small class="footer__copyright">© 2021 <a href="https://graphacademy.neo4j.com" target="_blank">Neo4j GraphAcademy</a>.</small></div></div></div></div>', 1),
			T = [B];

		function G(e, t) {
			return Object(o["u"])(), Object(o["f"])("footer", K, T)
		}
		const H = {},
			E = F()(H, [
				["render", G]
			]);
		var V = E,
			Z = function(e) {
				return Object(o["x"])("data-v-3ffbe346"), e = e(), Object(o["v"])(), e
			},
			U = Z((function() {
				return Object(o["g"])("svg", {
					width: "14px",
					height: "22px",
					viewBox: "0 0 22 22",
					role: "button",
					class: "close",
					"aria-label": "Close"
				}, [Object(o["g"])("line", {
					x1: "19.5833333",
					y1: "0.416666667",
					x2: "0.416666667",
					y2: "19.5833333"
				}), Object(o["g"])("line", {
					x1: "19.5833333",
					y1: "19.5833333",
					x2: "0.416666667",
					y2: "0.416666667"
				})], -1)
			})),
			q = [U],
			D = {
				class: "modal__overline"
			},
			$ = ["innerHTML"];

		function J(e, t, n, r, a, i) {
			return e.message ? (Object(o["u"])(), Object(o["f"])("div", {
				key: 0,
				class: Object(o["p"])(["notification modal", ["notification__".concat(e.type)]])
			}, [Object(o["g"])("button", {
				class: "modal__close",
				onClick: t[0] || (t[0] = Object(o["M"])((function() {
					return e.closeNotification && e.closeNotification.apply(e, arguments)
				}), ["prevent"]))
			}, q), Object(o["g"])("h2", D, Object(o["E"])(e.type), 1), Object(o["g"])("p", {
				class: "modal__text",
				innerHTML: e.message
			}, null, 8, $)], 2)) : Object(o["e"])("", !0)
		}
		var Q = n("f262"),
			W = Object(o["k"])({
				setup: function() {
					var e = Object(Q["a"])(),
						t = e.message,
						n = e.type,
						o = e.closeNotification;
					return {
						message: t,
						type: n,
						closeNotification: o
					}
				}
			});
		n("0993");
		const X = F()(W, [
			["render", J],
			["__scopeId", "data-v-3ffbe346"]
		]);
		var Y = X,
			ee = Object(o["k"])({
				name: "App",
				components: {
					Header: N,
					Footer: V,
					Notification: Y
				}
			});
		const te = F()(ee, [
			["render", r]
		]);
		var ne = te,
			oe = (n("d3b7"), n("3ca3"), n("ddb0"), n("6c02")),
			re = {
				class: "section section--head section--head-static section--gradient section--details-bg"
			},
			ae = {
				class: "container"
			},
			ie = {
				class: "row"
			},
			ce = {
				class: "col-12 col-xl-6"
			},
			se = Object(o["g"])("h1", {
				class: "section__title section__title--head"
			}, "alya.Sintese.de", -1),
			ue = Object(o["g"])("p", null, "Using the power of Graph Databases and Cypher to serve you real-time recommendations.", -1),
			le = {
				class: "article__btns"
			},
			de = Object(o["i"])("Register Now"),
			be = Object(o["i"])("Browse Genres");

		function ve(e, t, n, r, a, i) {
			var c = Object(o["C"])("router-link"),
				s = Object(o["C"])("movie-grid");
			return Object(o["u"])(), Object(o["f"])(o["a"], null, [Object(o["g"])("section", re, [Object(o["g"])("div", ae, [Object(o["g"])("div", ie, [Object(o["g"])("div", ce, [se, ue, Object(o["g"])("div", le, [Object(o["j"])(c, {
				to: {
					name: "Register"
				},
				class: "article__btn"
			}, {
				default: Object(o["K"])((function() {
					return [de]
				})),
				_: 1
			}), Object(o["j"])(c, {
				to: {
					name: "GenreList"
				},
				class: "article__btn article__btn--white"
			}, {
				default: Object(o["K"])((function() {
					return [be]
				})),
				_: 1
			})])])])])]), Object(o["j"])(s, {
				title: "Popular Movies",
				to: "/popular",
				sort: "imdbRating"
			}), Object(o["j"])(s, {
				title: "Latest Releases",
				to: "/latest",
				sort: "released"
			})], 64)
		}
		var fe = n("9bc1"),
			je = Object(o["k"])({
				name: "Home",
				components: {
					MovieGrid: fe["a"]
				}
			});
		const pe = F()(je, [
			["render", ve]
		]);
		var ge = pe,
			Oe = [{
				path: "/",
				name: "Home",
				component: ge
			}, {
				path: "/login",
				name: "Login",
				component: function() {
					return n.e("login").then(n.bind(null, "a55b"))
				}
			}, {
				path: "/logout",
				name: "Logout",
				component: function() {
					return n.e("logout").then(n.bind(null, "c100"))
				}
			}, {
				path: "/register",
				name: "Register",
				component: function() {
					return n.e("register").then(n.bind(null, "73cf"))
				}
			}, {
				path: "/genres",
				name: "GenreList",
				component: function() {
					return n.e("genres.list").then(n.bind(null, "5b53"))
				}
			}, {
				path: "/genres/:name",
				name: "GenreView",
				component: function() {
					return n.e("genres.view").then(n.bind(null, "4222"))
				}
			}, {
				path: "/people",
				name: "PeopleList",
				component: function() {
					return n.e("people.list").then(n.bind(null, "30d0"))
				}
			}, {
				path: "/people/:tmdbId",
				name: "PersonView",
				component: function() {
					return n.e("people.view").then(n.bind(null, "cdc9"))
				}
			}, {
				path: "/movies/:tmdbId",
				name: "MovieView",
				component: function() {
					return n.e("movie.view").then(n.bind(null, "8c25"))
				}
			}, {
				path: "/latest",
				name: "LatestMovies",
				component: function() {
					return n.e("movies.latest").then(n.bind(null, "1a3b"))
				}
			}, {
				path: "/popular",
				name: "PopularMovies",
				component: function() {
					return n.e("movies.latest").then(n.bind(null, "1a3b"))
				}
			}, {
				path: "/favorites",
				name: "Favorites",
				component: function() {
					return n.e("favorites").then(n.bind(null, "48d5"))
				}
			}, {
				path: "/:catchAll(.*)",
				redirect: {
					name: "Home"
				}
			}],
			me = Object(oe["a"])({
				history: Object(oe["b"])("/"),
				routes: Oe
			}),
			he = me;
		n("d926"), n("d434"), n("9214"), n("5aea");
		Object(o["c"])(ne).use(he).mount("#app")
	},
	cf64: function(e, t, n) {},
	d434: function(e, t, n) {},
	d617: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return c
		}));
		var o = n("5530"),
			r = (n("d3b7"), n("7a23")),
			a = n("5e73"),
			i = Object(r["y"])({
				user: void 0,
				token: void 0,
				error: void 0,
				details: void 0
			});

		function c() {
			var e = function(e, t, n) {
					a["b"].post("/auth/register", {
						email: e,
						password: t,
						name: n
					}).then((function(e) {
						i.error = void 0, i.details = void 0, i.user = e.data, i.token = e.data.token, Object.assign(a["b"].defaults, {
							headers: {
								Authorization: "Bearer ".concat(i.token)
							}
						})
					})).catch((function(e) {
						i.error = e.response.data.message, i.user = void 0, i.token = void 0, i.details = e.response.data.details
					}))
				},
				t = function(e, t) {
					a["b"].post("/auth/login", {
						email: e,
						password: t
					}).then((function(e) {
						i.error = void 0, i.details = void 0, i.user = e.data, i.token = e.data.token, Object.assign(a["b"].defaults, {
							headers: {
								Authorization: "Bearer ".concat(i.token)
							}
						})
					})).catch((function(e) {
						i.error = e.message, i.user = void 0, i.token = void 0
					}))
				},
				n = function() {
					return new Promise((function(e) {
						var t;
						i.user = void 0, i.token = void 0, null === (t = a["b"].defaults.headers) || void 0 === t || delete t.Authorization, e()
					}))
				},
				c = Object(r["b"])((function() {
					return void 0 !== i.user
				}));
			return Object(o["a"])({
				register: e,
				login: t,
				logout: n,
				authenticated: c
			}, Object(r["F"])(i))
		}
	},
	d926: function(e, t, n) {},
	dd4b: function(e, t, n) {},
	e490: function(e, t, n) {
		"use strict";
		n.d(t, "d", (function() {
			return r
		})), n.d(t, "b", (function() {
			return a
		})), n.d(t, "c", (function() {
			return i
		})), n.d(t, "a", (function() {
			return s
		})), n.d(t, "f", (function() {
			return u
		})), n.d(t, "j", (function() {
			return l
		})), n.d(t, "e", (function() {
			return d
		})), n.d(t, "k", (function() {
			return b
		})), n.d(t, "g", (function() {
			return f
		})), n.d(t, "h", (function() {
			return j
		})), n.d(t, "i", (function() {
			return p
		}));
		n("99af");
		var o = n("5e73"),
			r = "title",
			a = "imdbRating",
			i = "released",
			c = "score",
			s = [{
				label: "Title",
				value: r
			}, {
				label: "Rating",
				value: a
			}, {
				label: "Release Date",
				value: i
			}];

		function u(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6;
			return Object(o["d"])("/movies?sort=".concat(e, "&order=").concat(t, "&limit=").concat(n))
		}

		function l(e) {
			return Object(o["d"])("/genres/".concat(e, "/movies"), r)
		}

		function d(e) {
			return Object(o["c"])("/movies/".concat(e))
		}

		function b(e) {
			return Object(o["d"])("/movies/".concat(e, "/similar"), c)
		}
		var v = "timestamp";

		function f(e, t) {
			return Object(o["d"])("/movies/".concat(e, "/ratings"), v, o["a"], t)
		}

		function j(e) {
			return Object(o["d"])("/people/".concat(e, "/acted"), r)
		}

		function p(e) {
			return Object(o["d"])("/people/".concat(e, "/directed"), r)
		}
	},
	efbf: function(e, t, n) {
		"use strict";
		n("b0c0");
		var o = n("7a23"),
			r = function(e) {
				return Object(o["x"])("data-v-118a0f5e"), e = e(), Object(o["v"])(), e
			},
			a = {
				class: "col-6 col-sm-4 col-lg-3 col-xl-2"
			},
			i = ["src", "alt"],
			c = r((function() {
				return Object(o["g"])("svg", {
					width: "22",
					height: "22",
					viewBox: "0 0 22 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, [Object(o["g"])("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}), Object(o["g"])("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				})], -1)
			})),
			s = r((function() {
				return Object(o["g"])("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, [Object(o["g"])("path", {
					d: "M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"
				})], -1)
			})),
			u = [s],
			l = {
				class: "card__rating"
			},
			d = r((function() {
				return Object(o["g"])("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, [Object(o["g"])("path", {
					d: "M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"
				})], -1)
			})),
			b = {
				class: "card__title"
			},
			v = {
				class: "card__list"
			};

		function f(e, t, n, r, s, f) {
			var j = Object(o["C"])("router-link");
			return Object(o["u"])(), Object(o["f"])("div", a, [Object(o["g"])("div", {
				class: Object(o["p"])(["card", {
					card__favorited: !0 === this.isFavorite
				}])
			}, [Object(o["j"])(j, {
				to: {
					name: "MovieView",
					params: {
						tmdbId: e.tmdbId
					}
				},
				class: "card__cover"
			}, {
				default: Object(o["K"])((function() {
					return [Object(o["g"])("img", {
						src: e.posterImage,
						alt: e.title
					}, null, 8, i), c]
				})),
				_: 1
			}, 8, ["to"]), e.authenticated ? (Object(o["u"])(), Object(o["f"])("button", {
				key: 0,
				class: "card__add",
				type: "button",
				onClick: t[0] || (t[0] = Object(o["M"])((function() {
					return e.toggleFavorite && e.toggleFavorite.apply(e, arguments)
				}), ["prevent"]))
			}, u)) : Object(o["e"])("", !0), Object(o["g"])("span", l, [d, Object(o["i"])(" " + Object(o["E"])(e.imdbRating), 1)]), Object(o["g"])("h3", b, [Object(o["j"])(j, {
				to: e.to
			}, {
				default: Object(o["K"])((function() {
					return [Object(o["i"])(Object(o["E"])(e.title), 1)]
				})),
				_: 1
			}, 8, ["to"])]), Object(o["g"])("ul", v, [(Object(o["u"])(!0), Object(o["f"])(o["a"], null, Object(o["A"])(e.list, (function(e) {
				return Object(o["u"])(), Object(o["f"])("li", {
					key: e
				}, Object(o["E"])(e.name), 1)
			})), 128))])], 2), Object(o["B"])(e.$slots, "default", {}, void 0, !0)])
		}
		n("a9e3");
		var j = n("5e73"),
			p = n("d617"),
			g = n("f262"),
			O = Object(o["k"])({
				name: "MovieGridItem",
				setup: function() {
					var e = Object(g["a"])(),
						t = e.setNotification,
						n = Object(p["a"])(),
						o = n.authenticated;
					return {
						authenticated: o,
						setNotification: t
					}
				},
				props: {
					to: Object,
					tmdbId: String,
					poster: String,
					rating: Number,
					imdbRating: Number,
					title: String,
					list: [Object],
					favorite: Boolean
				},
				data: function() {
					return {
						isFavorite: !0 === this.favorite
					}
				},
				computed: {
					posterImage: function() {
						return this.poster || "/img/poster-placeholder.png"
					}
				},
				methods: {
					toggleFavorite: function() {
						var e = this;
						this.isFavorite ? j["b"].delete("/account/favorites/".concat(this.tmdbId)).then((function(t) {
							e.isFavorite = t.data.favorite, e.setNotification("success", "This movie has been removed from your favorites")
						})) : j["b"].post("/account/favorites/".concat(this.tmdbId)).then((function(t) {
							e.isFavorite = t.data.favorite, e.setNotification("success", "This movie has been added to your favorites")
						}))
					}
				}
			}),
			m = (n("9108"), n("6b0d")),
			h = n.n(m);
		const _ = h()(O, [
			["render", f],
			["__scopeId", "data-v-118a0f5e"]
		]);
		t["a"] = _
	},
	f262: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return i
		}));
		var o = n("5530"),
			r = n("7a23"),
			a = Object(r["y"])({
				message: void 0,
				type: void 0
			});

		function i() {
			var e = function(e, n) {
					a.type = e, a.message = n, setTimeout((function() {
						return t()
					}), 2e3)
				},
				t = function() {
					a.type = void 0, a.message = void 0
				};
			return Object(o["a"])({
				setNotification: e,
				closeNotification: t
			}, Object(r["F"])(a))
		}
	}
});
//# sourceMappingURL=app.6697881b.js.map