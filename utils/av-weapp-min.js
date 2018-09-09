var window = {};
var XMLHttpRequest;
var navigator;
var localStorage;
! function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AV = e() : t.AV = e()
}("undefined" != typeof self ? self : this, function() {
  return function(t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, e.n = function(t) {
      var n = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 23)
  }([function(t, e, n) {
    (function(t, n) {
      var r, i;
      ! function() {
        var o = "object" == typeof self && self.self === self && self || "object" == typeof t && t.global === t && t || this || {},
          s = o._,
          a = Array.prototype,
          u = Object.prototype,
          c = "undefined" != typeof Symbol ? Symbol.prototype : null,
          l = a.push,
          h = a.slice,
          f = u.toString,
          d = u.hasOwnProperty,
          p = Array.isArray,
          _ = Object.keys,
          v = Object.create,
          y = function() {},
          m = function(t) {
            return t instanceof m ? t : this instanceof m ? void(this._wrapped = t) : new m(t)
          };
        void 0 === e || e.nodeType ? o._ = m : (void 0 !== n && !n.nodeType && n.exports && (e = n.exports = m), e._ = m), m.VERSION = "1.9.1";
        var g, b = function(t, e, n) {
            if (void 0 === e) return t;
            switch (null == n ? 3 : n) {
              case 1:
                return function(n) {
                  return t.call(e, n)
                };
              case 3:
                return function(n, r, i) {
                  return t.call(e, n, r, i)
                };
              case 4:
                return function(n, r, i, o) {
                  return t.call(e, n, r, i, o)
                }
            }
            return function() {
              return t.apply(e, arguments)
            }
          },
          w = function(t, e, n) {
            return m.iteratee !== g ? m.iteratee(t, e) : null == t ? m.identity : m.isFunction(t) ? b(t, e, n) : m.isObject(t) && !m.isArray(t) ? m.matcher(t) : m.property(t)
          };
        m.iteratee = g = function(t, e) {
          return w(t, e, 1 / 0)
        };
        var O = function(t, e) {
            return e = null == e ? t.length - 1 : +e,
              function() {
                for (var n = Math.max(arguments.length - e, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + e];
                switch (e) {
                  case 0:
                    return t.call(this, r);
                  case 1:
                    return t.call(this, arguments[0], r);
                  case 2:
                    return t.call(this, arguments[0], arguments[1], r)
                }
                var o = Array(e + 1);
                for (i = 0; i < e; i++) o[i] = arguments[i];
                return o[e] = r, t.apply(this, o)
              }
          },
          S = function(t) {
            if (!m.isObject(t)) return {};
            if (v) return v(t);
            y.prototype = t;
            var e = new y;
            return y.prototype = null, e
          },
          A = function(t) {
            return function(e) {
              return null == e ? void 0 : e[t]
            }
          },
          E = function(t, e) {
            return null != t && d.call(t, e)
          },
          C = function(t, e) {
            for (var n = e.length, r = 0; r < n; r++) {
              if (null == t) return;
              t = t[e[r]]
            }
            return n ? t : void 0
          },
          T = Math.pow(2, 53) - 1,
          j = A("length"),
          N = function(t) {
            var e = j(t);
            return "number" == typeof e && e >= 0 && e <= T
          };
        m.each = m.forEach = function(t, e, n) {
          e = b(e, n);
          var r, i;
          if (N(t))
            for (r = 0, i = t.length; r < i; r++) e(t[r], r, t);
          else {
            var o = m.keys(t);
            for (r = 0, i = o.length; r < i; r++) e(t[o[r]], o[r], t)
          }
          return t
        }, m.map = m.collect = function(t, e, n) {
          e = w(e, n);
          for (var r = !N(t) && m.keys(t), i = (r || t).length, o = Array(i), s = 0; s < i; s++) {
            var a = r ? r[s] : s;
            o[s] = e(t[a], a, t)
          }
          return o
        };
        var x = function(t) {
          var e = function(e, n, r, i) {
            var o = !N(e) && m.keys(e),
              s = (o || e).length,
              a = t > 0 ? 0 : s - 1;
            for (i || (r = e[o ? o[a] : a], a += t); a >= 0 && a < s; a += t) {
              var u = o ? o[a] : a;
              r = n(r, e[u], u, e)
            }
            return r
          };
          return function(t, n, r, i) {
            var o = arguments.length >= 3;
            return e(t, b(n, i, 4), r, o)
          }
        };
        m.reduce = m.foldl = m.inject = x(1), m.reduceRight = m.foldr = x(-1), m.find = m.detect = function(t, e, n) {
          var r = N(t) ? m.findIndex : m.findKey,
            i = r(t, e, n);
          if (void 0 !== i && -1 !== i) return t[i]
        }, m.filter = m.select = function(t, e, n) {
          var r = [];
          return e = w(e, n), m.each(t, function(t, n, i) {
            e(t, n, i) && r.push(t)
          }), r
        }, m.reject = function(t, e, n) {
          return m.filter(t, m.negate(w(e)), n)
        }, m.every = m.all = function(t, e, n) {
          e = w(e, n);
          for (var r = !N(t) && m.keys(t), i = (r || t).length, o = 0; o < i; o++) {
            var s = r ? r[o] : o;
            if (!e(t[s], s, t)) return !1
          }
          return !0
        }, m.some = m.any = function(t, e, n) {
          e = w(e, n);
          for (var r = !N(t) && m.keys(t), i = (r || t).length, o = 0; o < i; o++) {
            var s = r ? r[o] : o;
            if (e(t[s], s, t)) return !0
          }
          return !1
        }, m.contains = m.includes = m.include = function(t, e, n, r) {
          return N(t) || (t = m.values(t)), ("number" != typeof n || r) && (n = 0), m.indexOf(t, e, n) >= 0
        }, m.invoke = O(function(t, e, n) {
          var r, i;
          return m.isFunction(e) ? i = e : m.isArray(e) && (r = e.slice(0, -1), e = e[e.length - 1]), m.map(t, function(t) {
            var o = i;
            if (!o) {
              if (r && r.length && (t = C(t, r)), null == t) return;
              o = t[e]
            }
            return null == o ? o : o.apply(t, n)
          })
        }), m.pluck = function(t, e) {
          return m.map(t, m.property(e))
        }, m.where = function(t, e) {
          return m.filter(t, m.matcher(e))
        }, m.findWhere = function(t, e) {
          return m.find(t, m.matcher(e))
        }, m.max = function(t, e, n) {
          var r, i, o = -1 / 0,
            s = -1 / 0;
          if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
            t = N(t) ? t : m.values(t);
            for (var a = 0, u = t.length; a < u; a++) null != (r = t[a]) && r > o && (o = r)
          } else e = w(e, n), m.each(t, function(t, n, r) {
            ((i = e(t, n, r)) > s || i === -1 / 0 && o === -1 / 0) && (o = t, s = i)
          });
          return o
        }, m.min = function(t, e, n) {
          var r, i, o = 1 / 0,
            s = 1 / 0;
          if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
            t = N(t) ? t : m.values(t);
            for (var a = 0, u = t.length; a < u; a++) null != (r = t[a]) && r < o && (o = r)
          } else e = w(e, n), m.each(t, function(t, n, r) {
            ((i = e(t, n, r)) < s || i === 1 / 0 && o === 1 / 0) && (o = t, s = i)
          });
          return o
        }, m.shuffle = function(t) {
          return m.sample(t, 1 / 0)
        }, m.sample = function(t, e, n) {
          if (null == e || n) return N(t) || (t = m.values(t)), t[m.random(t.length - 1)];
          var r = N(t) ? m.clone(t) : m.values(t),
            i = j(r);
          e = Math.max(Math.min(e, i), 0);
          for (var o = i - 1, s = 0; s < e; s++) {
            var a = m.random(s, o),
              u = r[s];
            r[s] = r[a], r[a] = u
          }
          return r.slice(0, e)
        }, m.sortBy = function(t, e, n) {
          var r = 0;
          return e = w(e, n), m.pluck(m.map(t, function(t, n, i) {
            return {
              value: t,
              index: r++,
              criteria: e(t, n, i)
            }
          }).sort(function(t, e) {
            var n = t.criteria,
              r = e.criteria;
            if (n !== r) {
              if (n > r || void 0 === n) return 1;
              if (n < r || void 0 === r) return -1
            }
            return t.index - e.index
          }), "value")
        };
        var k = function(t, e) {
          return function(n, r, i) {
            var o = e ? [
              [],
              []
            ] : {};
            return r = w(r, i), m.each(n, function(e, i) {
              var s = r(e, i, n);
              t(o, e, s)
            }), o
          }
        };
        m.groupBy = k(function(t, e, n) {
          E(t, n) ? t[n].push(e) : t[n] = [e]
        }), m.indexBy = k(function(t, e, n) {
          t[n] = e
        }), m.countBy = k(function(t, e, n) {
          E(t, n) ? t[n]++ : t[n] = 1
        });
        var U = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
        m.toArray = function(t) {
          return t ? m.isArray(t) ? h.call(t) : m.isString(t) ? t.match(U) : N(t) ? m.map(t, m.identity) : m.values(t) : []
        }, m.size = function(t) {
          return null == t ? 0 : N(t) ? t.length : m.keys(t).length
        }, m.partition = k(function(t, e, n) {
          t[n ? 0 : 1].push(e)
        }, !0), m.first = m.head = m.take = function(t, e, n) {
          return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[0] : m.initial(t, t.length - e)
        }, m.initial = function(t, e, n) {
          return h.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
        }, m.last = function(t, e, n) {
          return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[t.length - 1] : m.rest(t, Math.max(0, t.length - e))
        }, m.rest = m.tail = m.drop = function(t, e, n) {
          return h.call(t, null == e || n ? 1 : e)
        }, m.compact = function(t) {
          return m.filter(t, Boolean)
        };
        var I = function(t, e, n, r) {
          r = r || [];
          for (var i = r.length, o = 0, s = j(t); o < s; o++) {
            var a = t[o];
            if (N(a) && (m.isArray(a) || m.isArguments(a)))
              if (e)
                for (var u = 0, c = a.length; u < c;) r[i++] = a[u++];
              else I(a, e, n, r), i = r.length;
            else n || (r[i++] = a)
          }
          return r
        };
        m.flatten = function(t, e) {
          return I(t, e, !1)
        }, m.without = O(function(t, e) {
          return m.difference(t, e)
        }), m.uniq = m.unique = function(t, e, n, r) {
          m.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = w(n, r));
          for (var i = [], o = [], s = 0, a = j(t); s < a; s++) {
            var u = t[s],
              c = n ? n(u, s, t) : u;
            e && !n ? (s && o === c || i.push(u), o = c) : n ? m.contains(o, c) || (o.push(c), i.push(u)) : m.contains(i, u) || i.push(u)
          }
          return i
        }, m.union = O(function(t) {
          return m.uniq(I(t, !0, !0))
        }), m.intersection = function(t) {
          for (var e = [], n = arguments.length, r = 0, i = j(t); r < i; r++) {
            var o = t[r];
            if (!m.contains(e, o)) {
              var s;
              for (s = 1; s < n && m.contains(arguments[s], o); s++);
              s === n && e.push(o)
            }
          }
          return e
        }, m.difference = O(function(t, e) {
          return e = I(e, !0, !0), m.filter(t, function(t) {
            return !m.contains(e, t)
          })
        }), m.unzip = function(t) {
          for (var e = t && m.max(t, j).length || 0, n = Array(e), r = 0; r < e; r++) n[r] = m.pluck(t, r);
          return n
        }, m.zip = O(m.unzip), m.object = function(t, e) {
          for (var n = {}, r = 0, i = j(t); r < i; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
          return n
        };
        var R = function(t) {
          return function(e, n, r) {
            n = w(n, r);
            for (var i = j(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t)
              if (n(e[o], o, e)) return o;
            return -1
          }
        };
        m.findIndex = R(1), m.findLastIndex = R(-1), m.sortedIndex = function(t, e, n, r) {
          n = w(n, r, 1);
          for (var i = n(e), o = 0, s = j(t); o < s;) {
            var a = Math.floor((o + s) / 2);
            n(t[a]) < i ? o = a + 1 : s = a
          }
          return o
        };
        var P = function(t, e, n) {
          return function(r, i, o) {
            var s = 0,
              a = j(r);
            if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
            else if (n && o && a) return o = n(r, i), r[o] === i ? o : -1;
            if (i !== i) return o = e(h.call(r, s, a), m.isNaN), o >= 0 ? o + s : -1;
            for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t)
              if (r[o] === i) return o;
            return -1
          }
        };
        m.indexOf = P(1, m.findIndex, m.sortedIndex), m.lastIndexOf = P(-1, m.findLastIndex), m.range = function(t, e, n) {
          null == e && (e = t || 0, t = 0), n || (n = e < t ? -1 : 1);
          for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0; o < r; o++, t += n) i[o] = t;
          return i
        }, m.chunk = function(t, e) {
          if (null == e || e < 1) return [];
          for (var n = [], r = 0, i = t.length; r < i;) n.push(h.call(t, r, r += e));
          return n
        };
        var D = function(t, e, n, r, i) {
          if (!(r instanceof e)) return t.apply(n, i);
          var o = S(t.prototype),
            s = t.apply(o, i);
          return m.isObject(s) ? s : o
        };
        m.bind = O(function(t, e, n) {
          if (!m.isFunction(t)) throw new TypeError("Bind must be called on a function");
          var r = O(function(i) {
            return D(t, r, e, this, n.concat(i))
          });
          return r
        }), m.partial = O(function(t, e) {
          var n = m.partial.placeholder,
            r = function() {
              for (var i = 0, o = e.length, s = Array(o), a = 0; a < o; a++) s[a] = e[a] === n ? arguments[i++] : e[a];
              for (; i < arguments.length;) s.push(arguments[i++]);
              return D(t, r, this, this, s)
            };
          return r
        }), m.partial.placeholder = m, m.bindAll = O(function(t, e) {
          e = I(e, !1, !1);
          var n = e.length;
          if (n < 1) throw new Error("bindAll must be passed function names");
          for (; n--;) {
            var r = e[n];
            t[r] = m.bind(t[r], t)
          }
        }), m.memoize = function(t, e) {
          var n = function(r) {
            var i = n.cache,
              o = "" + (e ? e.apply(this, arguments) : r);
            return E(i, o) || (i[o] = t.apply(this, arguments)), i[o]
          };
          return n.cache = {}, n
        }, m.delay = O(function(t, e, n) {
          return setTimeout(function() {
            return t.apply(null, n)
          }, e)
        }), m.defer = m.partial(m.delay, m, 1), m.throttle = function(t, e, n) {
          var r, i, o, s, a = 0;
          n || (n = {});
          var u = function() {
              a = !1 === n.leading ? 0 : m.now(), r = null, s = t.apply(i, o), r || (i = o = null)
            },
            c = function() {
              var c = m.now();
              a || !1 !== n.leading || (a = c);
              var l = e - (c - a);
              return i = this, o = arguments, l <= 0 || l > e ? (r && (clearTimeout(r), r = null), a = c, s = t.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, l)), s
            };
          return c.cancel = function() {
            clearTimeout(r), a = 0, r = i = o = null
          }, c
        }, m.debounce = function(t, e, n) {
          var r, i, o = function(e, n) {
              r = null, n && (i = t.apply(e, n))
            },
            s = O(function(s) {
              if (r && clearTimeout(r), n) {
                var a = !r;
                r = setTimeout(o, e), a && (i = t.apply(this, s))
              } else r = m.delay(o, e, this, s);
              return i
            });
          return s.cancel = function() {
            clearTimeout(r), r = null
          }, s
        }, m.wrap = function(t, e) {
          return m.partial(e, t)
        }, m.negate = function(t) {
          return function() {
            return !t.apply(this, arguments)
          }
        }, m.compose = function() {
          var t = arguments,
            e = t.length - 1;
          return function() {
            for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
            return r
          }
        }, m.after = function(t, e) {
          return function() {
            if (--t < 1) return e.apply(this, arguments)
          }
        }, m.before = function(t, e) {
          var n;
          return function() {
            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
          }
        }, m.once = m.partial(m.before, 2), m.restArguments = O;
        var L = !{
            toString: null
          }.propertyIsEnumerable("toString"),
          F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
          q = function(t, e) {
            var n = F.length,
              r = t.constructor,
              i = m.isFunction(r) && r.prototype || u,
              o = "constructor";
            for (E(t, o) && !m.contains(e, o) && e.push(o); n--;)(o = F[n]) in t && t[o] !== i[o] && !m.contains(e, o) && e.push(o)
          };
        m.keys = function(t) {
          if (!m.isObject(t)) return [];
          if (_) return _(t);
          var e = [];
          for (var n in t) E(t, n) && e.push(n);
          return L && q(t, e), e
        }, m.allKeys = function(t) {
          if (!m.isObject(t)) return [];
          var e = [];
          for (var n in t) e.push(n);
          return L && q(t, e), e
        }, m.values = function(t) {
          for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
          return r
        }, m.mapObject = function(t, e, n) {
          e = w(e, n);
          for (var r = m.keys(t), i = r.length, o = {}, s = 0; s < i; s++) {
            var a = r[s];
            o[a] = e(t[a], a, t)
          }
          return o
        }, m.pairs = function(t) {
          for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = [e[i], t[e[i]]];
          return r
        }, m.invert = function(t) {
          for (var e = {}, n = m.keys(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
          return e
        }, m.functions = m.methods = function(t) {
          var e = [];
          for (var n in t) m.isFunction(t[n]) && e.push(n);
          return e.sort()
        };
        var M = function(t, e) {
          return function(n) {
            var r = arguments.length;
            if (e && (n = Object(n)), r < 2 || null == n) return n;
            for (var i = 1; i < r; i++)
              for (var o = arguments[i], s = t(o), a = s.length, u = 0; u < a; u++) {
                var c = s[u];
                e && void 0 !== n[c] || (n[c] = o[c])
              }
            return n
          }
        };
        m.extend = M(m.allKeys), m.extendOwn = m.assign = M(m.keys), m.findKey = function(t, e, n) {
          e = w(e, n);
          for (var r, i = m.keys(t), o = 0, s = i.length; o < s; o++)
            if (r = i[o], e(t[r], r, t)) return r
        };
        var B = function(t, e, n) {
          return e in n
        };
        m.pick = O(function(t, e) {
          var n = {},
            r = e[0];
          if (null == t) return n;
          m.isFunction(r) ? (e.length > 1 && (r = b(r, e[1])), e = m.allKeys(t)) : (r = B, e = I(e, !1, !1), t = Object(t));
          for (var i = 0, o = e.length; i < o; i++) {
            var s = e[i],
              a = t[s];
            r(a, s, t) && (n[s] = a)
          }
          return n
        }), m.omit = O(function(t, e) {
          var n, r = e[0];
          return m.isFunction(r) ? (r = m.negate(r), e.length > 1 && (n = e[1])) : (e = m.map(I(e, !1, !1), String), r = function(t, n) {
            return !m.contains(e, n)
          }), m.pick(t, r, n)
        }), m.defaults = M(m.allKeys, !0), m.create = function(t, e) {
          var n = S(t);
          return e && m.extendOwn(n, e), n
        }, m.clone = function(t) {
          return m.isObject(t) ? m.isArray(t) ? t.slice() : m.extend({}, t) : t
        }, m.tap = function(t, e) {
          return e(t), t
        }, m.isMatch = function(t, e) {
          var n = m.keys(e),
            r = n.length;
          if (null == t) return !r;
          for (var i = Object(t), o = 0; o < r; o++) {
            var s = n[o];
            if (e[s] !== i[s] || !(s in i)) return !1
          }
          return !0
        };
        var W, J;
        W = function(t, e, n, r) {
          if (t === e) return 0 !== t || 1 / t == 1 / e;
          if (null == t || null == e) return !1;
          if (t !== t) return e !== e;
          var i = typeof t;
          return ("function" === i || "object" === i || "object" == typeof e) && J(t, e, n, r)
        }, J = function(t, e, n, r) {
          t instanceof m && (t = t._wrapped), e instanceof m && (e = e._wrapped);
          var i = f.call(t);
          if (i !== f.call(e)) return !1;
          switch (i) {
            case "[object RegExp]":
            case "[object String]":
              return "" + t == "" + e;
            case "[object Number]":
              return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
            case "[object Date]":
            case "[object Boolean]":
              return +t == +e;
            case "[object Symbol]":
              return c.valueOf.call(t) === c.valueOf.call(e)
          }
          var o = "[object Array]" === i;
          if (!o) {
            if ("object" != typeof t || "object" != typeof e) return !1;
            var s = t.constructor,
              a = e.constructor;
            if (s !== a && !(m.isFunction(s) && s instanceof s && m.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
          }
          n = n || [], r = r || [];
          for (var u = n.length; u--;)
            if (n[u] === t) return r[u] === e;
          if (n.push(t), r.push(e), o) {
            if ((u = t.length) !== e.length) return !1;
            for (; u--;)
              if (!W(t[u], e[u], n, r)) return !1
          } else {
            var l, h = m.keys(t);
            if (u = h.length, m.keys(e).length !== u) return !1;
            for (; u--;)
              if (l = h[u], !E(e, l) || !W(t[l], e[l], n, r)) return !1
          }
          return n.pop(), r.pop(), !0
        }, m.isEqual = function(t, e) {
          return W(t, e)
        }, m.isEmpty = function(t) {
          return null == t || (N(t) && (m.isArray(t) || m.isString(t) || m.isArguments(t)) ? 0 === t.length : 0 === m.keys(t).length)
        }, m.isElement = function(t) {
          return !(!t || 1 !== t.nodeType)
        }, m.isArray = p || function(t) {
          return "[object Array]" === f.call(t)
        }, m.isObject = function(t) {
          var e = typeof t;
          return "function" === e || "object" === e && !!t
        }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function(t) {
          m["is" + t] = function(e) {
            return f.call(e) === "[object " + t + "]"
          }
        }), m.isArguments(arguments) || (m.isArguments = function(t) {
          return E(t, "callee")
        });
        var Q = o.document && o.document.childNodes;
        "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof Q && (m.isFunction = function(t) {
          return "function" == typeof t || !1
        }), m.isFinite = function(t) {
          return !m.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t))
        }, m.isNaN = function(t) {
          return m.isNumber(t) && isNaN(t)
        }, m.isBoolean = function(t) {
          return !0 === t || !1 === t || "[object Boolean]" === f.call(t)
        }, m.isNull = function(t) {
          return null === t
        }, m.isUndefined = function(t) {
          return void 0 === t
        }, m.has = function(t, e) {
          if (!m.isArray(e)) return E(t, e);
          for (var n = e.length, r = 0; r < n; r++) {
            var i = e[r];
            if (null == t || !d.call(t, i)) return !1;
            t = t[i]
          }
          return !!n
        }, m.noConflict = function() {
          return o._ = s, this
        }, m.identity = function(t) {
          return t
        }, m.constant = function(t) {
          return function() {
            return t
          }
        }, m.noop = function() {}, m.property = function(t) {
          return m.isArray(t) ? function(e) {
            return C(e, t)
          } : A(t)
        }, m.propertyOf = function(t) {
          return null == t ? function() {} : function(e) {
            return m.isArray(e) ? C(t, e) : t[e]
          }
        }, m.matcher = m.matches = function(t) {
          return t = m.extendOwn({}, t),
            function(e) {
              return m.isMatch(e, t)
            }
        }, m.times = function(t, e, n) {
          var r = Array(Math.max(0, t));
          e = b(e, n, 1);
          for (var i = 0; i < t; i++) r[i] = e(i);
          return r
        }, m.random = function(t, e) {
          return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        }, m.now = Date.now || function() {
          return (new Date).getTime()
        };
        var V = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
          },
          K = m.invert(V),
          H = function(t) {
            var e = function(e) {
                return t[e]
              },
              n = "(?:" + m.keys(t).join("|") + ")",
              r = RegExp(n),
              i = RegExp(n, "g");
            return function(t) {
              return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t
            }
          };
        m.escape = H(V), m.unescape = H(K), m.result = function(t, e, n) {
          m.isArray(e) || (e = [e]);
          var r = e.length;
          if (!r) return m.isFunction(n) ? n.call(t) : n;
          for (var i = 0; i < r; i++) {
            var o = null == t ? void 0 : t[e[i]];
            void 0 === o && (o = n, i = r), t = m.isFunction(o) ? o.call(t) : o
          }
          return t
        };
        var G = 0;
        m.uniqueId = function(t) {
          var e = ++G + "";
          return t ? t + e : e
        }, m.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var z = /(.)^/,
          $ = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
          },
          X = /\\|'|\r|\n|\u2028|\u2029/g,
          Y = function(t) {
            return "\\" + $[t]
          };
        m.template = function(t, e, n) {
          !e && n && (e = n), e = m.defaults({}, e, m.templateSettings);
          var r = RegExp([(e.escape || z).source, (e.interpolate || z).source, (e.evaluate || z).source].join("|") + "|$", "g"),
            i = 0,
            o = "__p+='";
          t.replace(r, function(e, n, r, s, a) {
            return o += t.slice(i, a).replace(X, Y), i = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
          }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
          var s;
          try {
            s = new Function(e.variable || "obj", "_", o)
          } catch (t) {
            throw t.source = o, t
          }
          var a = function(t) {
            return s.call(this, t, m)
          };
          return a.source = "function(" + (e.variable || "obj") + "){\n" + o + "}", a
        }, m.chain = function(t) {
          var e = m(t);
          return e._chain = !0, e
        };
        var Z = function(t, e) {
          return t._chain ? m(e).chain() : e
        };
        m.mixin = function(t) {
          return m.each(m.functions(t), function(e) {
            var n = m[e] = t[e];
            m.prototype[e] = function() {
              var t = [this._wrapped];
              return l.apply(t, arguments), Z(this, n.apply(m, t))
            }
          }), m
        }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
          var e = a[t];
          m.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], Z(this, n)
          }
        }), m.each(["concat", "join", "slice"], function(t) {
          var e = a[t];
          m.prototype[t] = function() {
            return Z(this, e.apply(this._wrapped, arguments))
          }
        }), m.prototype.value = function() {
          return this._wrapped
        }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
          return String(this._wrapped)
        }, r = [], void 0 !== (i = function() {
          return m
        }.apply(e, r)) && (n.exports = i)
      }()
    }).call(e, n(6), n(30)(t))
  }, function(t, e, n) {
    "use strict";
    var r = (n(0), n(42).Promise);
    r._continueWhile = function(t, e) {
      return t() ? e().then(function() {
        return r._continueWhile(t, e)
      }) : r.resolve()
    }, t.exports = r
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(57),
      o = n(0),
      s = o.extend,
      a = n(1),
      u = n(5),
      c = n(3),
      l = c.getSessionToken,
      h = c.ajax,
      f = function(t, e) {
        var n = (new Date).getTime(),
          r = i(n + t);
        return e ? r + "," + n + ",master" : r + "," + n
      },
      d = function(t, e) {
        e ? t["X-LC-Sign"] = f(u.applicationKey) : t["X-LC-Key"] = u.applicationKey
      },
      p = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments[1],
          n = {
            "X-LC-Id": u.applicationId,
            "Content-Type": "application/json;charset=UTF-8"
          },
          r = !1;
        return "boolean" == typeof t.useMasterKey ? r = t.useMasterKey : "boolean" == typeof u._config.useMasterKey && (r = u._config.useMasterKey), r ? u.masterKey ? e ? n["X-LC-Sign"] = f(u.masterKey, !0) : n["X-LC-Key"] = u.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), d(n, e)) : d(n, e), u.hookKey && (n["X-LC-Hook-Key"] = u.hookKey), null !== u._config.production && (n["X-LC-Prod"] = String(u._config.production)), n["X-LC-UA"] = u._sharedConfig.userAgent, a.resolve().then(function() {
          var e = l(t);
          if (e) n["X-LC-Session"] = e;
          else if (!u._config.disableCurrentUser) return u.User.currentAsync().then(function(t) {
            return t && t._sessionToken && (n["X-LC-Session"] = t._sessionToken), n
          });
          return n
        })
      },
      _ = function(t) {
        var e = t.service,
          n = void 0 === e ? "api" : e,
          r = t.version,
          i = void 0 === r ? "1.1" : r,
          o = t.path,
          s = u._config.serverURLs[n];
        if (!s) throw new Error("undefined server URL for " + n);
        return "/" !== s.charAt(s.length - 1) && (s += "/"), s += i, o && (s += o), s
      },
      v = function(t) {
        var e = t.service,
          n = t.version,
          i = t.method,
          o = t.path,
          s = t.query,
          a = t.data,
          c = t.authOptions,
          l = t.signKey,
          f = void 0 === l || l;
        if (!u.applicationId || !u.applicationKey && !u.masterKey) throw new Error("Not initialized");
        u._appRouter.refresh();
        var d = u._config.requestTimeout,
          v = _({
            service: e,
            path: o,
            version: n
          });
        return p(c, f).then(function(t) {
          return h({
            method: i,
            url: v,
            query: s,
            data: a,
            headers: t,
            timeout: d
          }).catch(function(t) {
            var e = {
              code: t.code || -1,
              error: t.message || t.responseText
            };
            if (t.response && t.response.code) e = t.response;
            else if (t.responseText) try {
              e = JSON.parse(t.responseText)
            } catch (t) {}
            e.rawMessage = e.rawMessage || e.error, u._sharedConfig.keepErrorRawMessage || (e.error += " [" + (t.statusCode || "N/A") + " " + i + " " + v + "]");
            var n = new Error(e.error);
            throw delete e.error, r.extend(n, e)
          })
        })
      },
      y = function(t, e, n, r, i, o, a) {
        var u = "";
        if (t && (u += "/" + t), e && (u += "/" + e), n && (u += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
        if (i && i._where) throw new Error("_where should be in the query");
        return r && "get" === r.toLowerCase() && (a = s({}, a, i), i = null), v({
          method: r,
          path: u,
          query: a,
          data: i,
          authOptions: o
        })
      };
    u.request = v, t.exports = {
      _request: y,
      request: v
    }
  }, function(t, e, n) {
    "use strict";

    function r(t) {
      var e = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
        n = e.exec(t);
      if (!n) return null;
      var r = n[1] || 0,
        i = (n[2] || 1) - 1,
        o = n[3] || 0,
        s = n[4] || 0,
        a = n[5] || 0,
        u = n[6] || 0,
        c = n[8] || 0;
      return new Date(Date.UTC(r, i, o, s, a, u, c))
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      o = n(0),
      s = n(8),
      a = n(7),
      u = a("leancloud:request"),
      c = a("leancloud:request:error"),
      l = n(1),
      h = 0,
      f = function(t) {
        var e = t.method,
          n = t.url,
          r = t.query,
          o = t.data,
          f = t.headers,
          d = void 0 === f ? {} : f,
          p = t.onprogress,
          _ = t.timeout,
          v = {};
        if (r)
          for (var y in r) {
            var m = r[y];
            void 0 !== m && ("object" === (void 0 === m ? "undefined" : i(m)) ? v[y] = JSON.stringify(m) : v[y] = m)
          }
        var g = h++;
        return u("request(%d) %s %s %o %o %o", g, e, n, v, o, d), new l(function(t, i) {
          var l = s(e, n).set(d).query(v).send(o);
          p && l.on("progress", p), _ && l.timeout(_), l.end(function(s, l) {
            return s ? (l && (a.enabled("leancloud:request") || c("request(%d) %s %s %o %o %o", g, e, n, r, o, d), c("response(%d) %d %O %o", g, l.status, l.body || l.text, l.header), s.statusCode = l.status, s.responseText = l.text, s.response = l.body), i(s)) : (u("response(%d) %d %O %o", g, l.status, l.body || l.text, l.header), t(l.body))
          })
        })
      },
      d = function(t) {
        return o.isNull(t) || o.isUndefined(t)
      },
      p = function(t) {
        return o.isArray(t) ? t : void 0 === t || null === t ? [] : [t]
      },
      _ = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.keys,
          n = t.include,
          r = t.includeACL,
          i = {};
        return e && (i.keys = p(e).join(",")), n && (i.include = p(n).join(",")), r && (i.returnACL = r), i
      },
      v = function(t) {
        return t.sessionToken ? t.sessionToken : t.user && "function" == typeof t.user.getSessionToken ? t.user.getSessionToken() : void 0
      },
      y = function(t) {
        return function(e) {
          return t(e), e
        }
      },
      m = function() {},
      g = function(t, e, n) {
        var r;
        return r = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
          t.apply(this, arguments)
        }, o.extend(r, t), m.prototype = t.prototype, r.prototype = new m, e && o.extend(r.prototype, e), n && o.extend(r, n), r.prototype.constructor = r, r.__super__ = t.prototype, r
      },
      b = function(t, e, n) {
        var r = e.split("."),
          i = r.pop(),
          o = t;
        return r.forEach(function(t) {
          void 0 === o[t] && (o[t] = {}), o = o[t]
        }), o[i] = n, t
      },
      w = function(t, e) {
        for (var n = e.split("."), r = n[0], i = n.pop(), o = t, s = 0; s < n.length; s++)
          if (void 0 === (o = o[n[s]])) return [void 0, void 0, i];
        return [o[i], o, i, r]
      },
      O = function(t) {
        return o.isObject(t) && Object.getPrototypeOf(t) === Object.prototype
      };
    t.exports = {
      ajax: f,
      isNullOrUndefined: d,
      ensureArray: p,
      transformFetchOptions: _,
      getSessionToken: v,
      tap: y,
      inherits: g,
      parseDate: r,
      setValue: b,
      findValue: w,
      isPlainObject: O
    }
  }, function(t, e, n) {
    "use strict";

    function r(t, e) {
      var n = new Error(e);
      return n.code = t, n
    }
    n(0).extend(r, {
      OTHER_CAUSE: -1,
      INTERNAL_SERVER_ERROR: 1,
      CONNECTION_FAILED: 100,
      OBJECT_NOT_FOUND: 101,
      INVALID_QUERY: 102,
      INVALID_CLASS_NAME: 103,
      MISSING_OBJECT_ID: 104,
      INVALID_KEY_NAME: 105,
      INVALID_POINTER: 106,
      INVALID_JSON: 107,
      COMMAND_UNAVAILABLE: 108,
      NOT_INITIALIZED: 109,
      INCORRECT_TYPE: 111,
      INVALID_CHANNEL_NAME: 112,
      PUSH_MISCONFIGURED: 115,
      OBJECT_TOO_LARGE: 116,
      OPERATION_FORBIDDEN: 119,
      CACHE_MISS: 120,
      INVALID_NESTED_KEY: 121,
      INVALID_FILE_NAME: 122,
      INVALID_ACL: 123,
      TIMEOUT: 124,
      INVALID_EMAIL_ADDRESS: 125,
      MISSING_CONTENT_TYPE: 126,
      MISSING_CONTENT_LENGTH: 127,
      INVALID_CONTENT_LENGTH: 128,
      FILE_TOO_LARGE: 129,
      FILE_SAVE_ERROR: 130,
      FILE_DELETE_ERROR: 153,
      DUPLICATE_VALUE: 137,
      INVALID_ROLE_NAME: 139,
      EXCEEDED_QUOTA: 140,
      SCRIPT_FAILED: 141,
      VALIDATION_ERROR: 142,
      INVALID_IMAGE_DATA: 150,
      UNSAVED_FILE_ERROR: 151,
      INVALID_PUSH_TIME_ERROR: 152,
      USERNAME_MISSING: 200,
      PASSWORD_MISSING: 201,
      USERNAME_TAKEN: 202,
      EMAIL_TAKEN: 203,
      EMAIL_MISSING: 204,
      EMAIL_NOT_FOUND: 205,
      SESSION_MISSING: 206,
      MUST_CREATE_USER_THROUGH_SIGNUP: 207,
      ACCOUNT_ALREADY_LINKED: 208,
      LINKED_ID_MISSING: 250,
      INVALID_LINKED_SESSION: 251,
      UNSUPPORTED_SERVICE: 252,
      X_DOMAIN_REQUEST: 602
    }), t.exports = r
  }, function(t, e, n) {
    "use strict";
    (function(e) {
      var r = n(0),
        i = n(17),
        o = n(33),
        s = n(3),
        a = s.inherits,
        u = s.parseDate,
        c = n(1),
        l = e.AV || {};
      l._config = {
        serverURLs: {},
        useMasterKey: !1,
        production: null,
        realtime: null,
        requestTimeout: null
      }, l._sharedConfig = {
        userAgent: o,
        liveQueryRealtime: null
      }, l._getAVPath = function(t) {
        if (!l.applicationId) throw new Error("You need to call AV.initialize before using AV.");
        if (t || (t = ""), !r.isString(t)) throw new Error("Tried to get a localStorage path that wasn't a String.");
        return "/" === t[0] && (t = t.substring(1)), "AV/" + l.applicationId + "/" + t
      }, l._installationId = null, l._getInstallationId = function() {
        if (l._installationId) return c.resolve(l._installationId);
        var t = l._getAVPath("installationId");
        return l.localStorage.getItemAsync(t).then(function(e) {
          return l._installationId = e, l._installationId ? e : (l._installationId = e = i(), l.localStorage.setItemAsync(t, e).then(function() {
            return e
          }))
        })
      }, l._subscriptionId = null, l._refreshSubscriptionId = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l._getAVPath("subscriptionId"),
          e = l._subscriptionId = i();
        return l.localStorage.setItemAsync(t, e).then(function() {
          return e
        })
      }, l._getSubscriptionId = function() {
        if (l._subscriptionId) return c.resolve(l._subscriptionId);
        var t = l._getAVPath("subscriptionId");
        return l.localStorage.getItemAsync(t).then(function(e) {
          return l._subscriptionId = e, l._subscriptionId || (e = l._refreshSubscriptionId(t)), e
        })
      }, l._parseDate = u, l._extend = function(t, e) {
        var n = a(this, t, e);
        return n.extend = this.extend, n
      }, l._encode = function(t, e, n) {
        var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (t instanceof l.Object) {
          if (n) throw new Error("AV.Objects not allowed here");
          return e && !r.include(e, t) && t._hasData ? t._toFullJSON(e.concat(t), i) : t._toPointer()
        }
        if (t instanceof l.ACL) return t.toJSON();
        if (r.isDate(t)) return i ? {
          __type: "Date",
          iso: t.toJSON()
        } : t.toJSON();
        if (t instanceof l.GeoPoint) return t.toJSON();
        if (r.isArray(t)) return r.map(t, function(t) {
          return l._encode(t, e, n, i)
        });
        if (r.isRegExp(t)) return t.source;
        if (t instanceof l.Relation) return t.toJSON();
        if (t instanceof l.Op) return t.toJSON();
        if (t instanceof l.File) {
          if (!t.url() && !t.id) throw new Error("Tried to save an object containing an unsaved file.");
          return t._toFullJSON(e, i)
        }
        return r.isObject(t) ? r.mapObject(t, function(t, r) {
          return l._encode(t, e, n, i)
        }) : t
      }, l._decode = function(t, e) {
        if (!r.isObject(t) || r.isDate(t)) return t;
        if (r.isArray(t)) return r.map(t, function(t) {
          return l._decode(t)
        });
        if (t instanceof l.Object) return t;
        if (t instanceof l.File) return t;
        if (t instanceof l.Op) return t;
        if (t instanceof l.GeoPoint) return t;
        if (t instanceof l.ACL) return t;
        if ("ACL" === e) return new l.ACL(t);
        if (t.__op) return l.Op._decode(t);
        var n;
        if ("Pointer" === t.__type) {
          n = t.className;
          var i = l.Object._create(n);
          if (Object.keys(t).length > 3) {
            var o = r.clone(t);
            delete o.__type, delete o.className, i._finishFetch(o, !0)
          } else i._finishFetch({
            objectId: t.objectId
          }, !1);
          return i
        }
        if ("Object" === t.__type) {
          n = t.className;
          var s = r.clone(t);
          delete s.__type, delete s.className;
          var a = l.Object._create(n);
          return a._finishFetch(s, !0), a
        }
        if ("Date" === t.__type) return l._parseDate(t.iso);
        if ("GeoPoint" === t.__type) return new l.GeoPoint({
          latitude: t.latitude,
          longitude: t.longitude
        });
        if ("Relation" === t.__type) {
          if (!e) throw new Error("key missing decoding a Relation");
          var u = new l.Relation(null, e);
          return u.targetClassName = t.className, u
        }
        if ("File" === t.__type) {
          var c = new l.File(t.name),
            h = r.clone(t);
          return delete h.__type, c._finishFetch(h), c
        }
        return r.mapObject(t, l._decode)
      }, l.parseJSON = l._decode, l._encodeObjectOrArray = function(t) {
        var e = function(t) {
          return t && t._toFullJSON && (t = t._toFullJSON([])), r.mapObject(t, function(t) {
            return l._encode(t, [])
          })
        };
        return r.isArray(t) ? t.map(function(t) {
          return e(t)
        }) : e(t)
      }, l._arrayEach = r.each, l._traverse = function(t, e, n) {
        if (t instanceof l.Object) {
          if (n = n || [], r.indexOf(n, t) >= 0) return;
          return n.push(t), l._traverse(t.attributes, e, n), e(t)
        }
        return t instanceof l.Relation || t instanceof l.File ? e(t) : r.isArray(t) ? (r.each(t, function(r, i) {
          var o = l._traverse(r, e, n);
          o && (t[i] = o)
        }), e(t)) : r.isObject(t) ? (l._each(t, function(r, i) {
          var o = l._traverse(r, e, n);
          o && (t[i] = o)
        }), e(t)) : e(t)
      }, l._objectEach = l._each = function(t, e) {
        r.isObject(t) ? r.each(r.keys(t), function(n) {
          e(t[n], n)
        }) : r.each(t, e)
      }, t.exports = l
    }).call(e, n(6))
  }, function(t, e) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  }, function(t, e, n) {
    function r() {
      return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    }

    function i(t) {
      var n = this.useColors;
      if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
        var r = "color: " + this.color;
        t.splice(1, 0, r, "color: inherit");
        var i = 0,
          o = 0;
        t[0].replace(/%[a-zA-Z%]/g, function(t) {
          "%%" !== t && (i++, "%c" === t && (o = i))
        }), t.splice(o, 0, r)
      }
    }

    function o() {
      return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }

    function s(t) {
      try {
        null == t ? e.storage.removeItem("debug") : e.storage.debug = t
      } catch (t) {}
    }

    function a() {
      var t;
      try {
        t = e.storage.debug
      } catch (t) {}
      return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t
    }
    e = t.exports = n(40), e.log = o, e.formatArgs = i, e.save = s, e.load = a, e.useColors = r, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
      try {
        return window.localStorage
      } catch (t) {}
    }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function(t) {
      try {
        return JSON.stringify(t)
      } catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message
      }
    }, e.enable(a())
  }, function(t, e, n) {
    function r() {}

    function i(t) {
      if (!_(t)) return t;
      var e = [];
      for (var n in t) o(e, n, t[n]);
      return e.join("&")
    }

    function o(t, e, n) {
      if (null != n)
        if (Array.isArray(n)) n.forEach(function(n) {
          o(t, e, n)
        });
        else if (_(n))
        for (var r in n) o(t, e + "[" + r + "]", n[r]);
      else t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n));
      else null === n && t.push(encodeURIComponent(e))
    }

    function s(t) {
      for (var e, n, r = {}, i = t.split("&"), o = 0, s = i.length; o < s; ++o) e = i[o], n = e.indexOf("="), -1 == n ? r[decodeURIComponent(e)] = "" : r[decodeURIComponent(e.slice(0, n))] = decodeURIComponent(e.slice(n + 1));
      return r
    }

    function a(t) {
      for (var e, n, r, i, o = t.split(/\r?\n/), s = {}, a = 0, u = o.length; a < u; ++a) n = o[a], -1 !== (e = n.indexOf(":")) && (r = n.slice(0, e).toLowerCase(), i = g(n.slice(e + 1)), s[r] = i);
      return s
    }

    function u(t) {
      return /[\/+]json($|[^-\w])/.test(t)
    }

    function c(t) {
      this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
      var e = this.xhr.status;
      1223 === e && (e = 204), this._setStatusProperties(e), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function l(t, e) {
      var n = this;
      this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function() {
        var t = null,
          e = null;
        try {
          e = new c(n)
        } catch (e) {
          return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t)
        }
        n.emit("response", e);
        var r;
        try {
          n._isResponseOK(e) || (r = new Error(e.statusText || "Unsuccessful HTTP response"))
        } catch (t) {
          r = t
        }
        r ? (r.original = t, r.response = e, r.status = e.status, n.callback(r, e)) : n.callback(null, e)
      })
    }

    function h(t, e, n) {
      var r = m("DELETE", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }
    var f;
    "undefined" != typeof window ? f = window : "undefined" != typeof self ? f = self : (console.warn("Using browser-only version of superagent in non-browser environment"), f = this);
    var d = n(35),
      p = n(36),
      _ = n(19),
      v = n(37),
      y = n(39),
      m = e = t.exports = function(t, n) {
        return "function" == typeof n ? new e.Request("GET", t).end(n) : 1 == arguments.length ? new e.Request("GET", t) : new e.Request(t, n)
      };
    e.Request = l, m.getXHR = function() {
      if (!(!f.XMLHttpRequest || f.location && "file:" == f.location.protocol && f.ActiveXObject)) return new XMLHttpRequest;
      try {
        return new ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
      } catch (t) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
      } catch (t) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP")
      } catch (t) {}
      throw Error("Browser-only version of superagent could not find XHR")
    };
    var g = "".trim ? function(t) {
      return t.trim()
    } : function(t) {
      return t.replace(/(^\s*|\s*$)/g, "")
    };
    m.serializeObject = i, m.parseString = s, m.types = {
      html: "text/html",
      json: "application/json",
      xml: "text/xml",
      urlencoded: "application/x-www-form-urlencoded",
      form: "application/x-www-form-urlencoded",
      "form-data": "application/x-www-form-urlencoded"
    }, m.serialize = {
      "application/x-www-form-urlencoded": i,
      "application/json": JSON.stringify
    }, m.parse = {
      "application/x-www-form-urlencoded": s,
      "application/json": JSON.parse
    }, v(c.prototype), c.prototype._parseBody = function(t) {
      var e = m.parse[this.type];
      return this.req._parser ? this.req._parser(this, t) : (!e && u(this.type) && (e = m.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null)
    }, c.prototype.toError = function() {
      var t = this.req,
        e = t.method,
        n = t.url,
        r = "cannot " + e + " " + n + " (" + this.status + ")",
        i = new Error(r);
      return i.status = this.status, i.method = e, i.url = n, i
    }, m.Response = c, d(l.prototype), p(l.prototype), l.prototype.type = function(t) {
      return this.set("Content-Type", m.types[t] || t), this
    }, l.prototype.accept = function(t) {
      return this.set("Accept", m.types[t] || t), this
    }, l.prototype.auth = function(t, e, n) {
      1 === arguments.length && (e = ""), "object" == typeof e && null !== e && (n = e, e = ""), n || (n = {
        type: "function" == typeof btoa ? "basic" : "auto"
      });
      var r = function(t) {
        if ("function" == typeof btoa) return btoa(t);
        throw new Error("Cannot use basic auth, btoa is not a function")
      };
      return this._auth(t, e, n, r)
    }, l.prototype.query = function(t) {
      return "string" != typeof t && (t = i(t)), t && this._query.push(t), this
    }, l.prototype.attach = function(t, e, n) {
      if (e) {
        if (this._data) throw Error("superagent can't mix .send() and .attach()");
        this._getFormData().append(t, e, n || e.name)
      }
      return this
    }, l.prototype._getFormData = function() {
      return this._formData || (this._formData = new f.FormData), this._formData
    }, l.prototype.callback = function(t, e) {
      if (this._shouldRetry(t, e)) return this._retry();
      var n = this._callback;
      this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), n(t, e)
    }, l.prototype.crossDomainError = function() {
      var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
      t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
    }, l.prototype.buffer = l.prototype.ca = l.prototype.agent = function() {
      return console.warn("This is not supported in browser version of superagent"), this
    }, l.prototype.pipe = l.prototype.write = function() {
      throw Error("Streaming is not supported in browser version of superagent")
    }, l.prototype._isHost = function(t) {
      return t && "object" == typeof t && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
    }, l.prototype.end = function(t) {
      return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || r, this._finalizeQueryString(), this._end()
    }, l.prototype._end = function() {
      var t = this,
        e = this.xhr = m.getXHR(),
        n = this._formData || this._data;
      this._setTimeouts(), e.onreadystatechange = function() {
        var n = e.readyState;
        if (n >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 == n) {
          var r;
          try {
            r = e.status
          } catch (t) {
            r = 0
          }
          if (!r) {
            if (t.timedout || t._aborted) return;
            return t.crossDomainError()
          }
          t.emit("end")
        }
      };
      var r = function(e, n) {
        n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = e, t.emit("progress", n)
      };
      if (this.hasListeners("progress")) try {
        e.onprogress = r.bind(null, "download"), e.upload && (e.upload.onprogress = r.bind(null, "upload"))
      } catch (t) {}
      try {
        this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
      } catch (t) {
        return this.callback(t)
      }
      if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
        var i = this._header["content-type"],
          o = this._serializer || m.serialize[i ? i.split(";")[0] : ""];
        !o && u(i) && (o = m.serialize["application/json"]), o && (n = o(n))
      }
      for (var s in this.header) null != this.header[s] && this.header.hasOwnProperty(s) && e.setRequestHeader(s, this.header[s]);
      return this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 !== n ? n : null), this
    }, m.agent = function() {
      return new y
    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(t) {
      y.prototype[t.toLowerCase()] = function(e, n) {
        var r = new m.Request(t, e);
        return this._setDefaults(r), n && r.end(n), r
      }
    }), y.prototype.del = y.prototype.delete, m.get = function(t, e, n) {
      var r = m("GET", t);
      return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r
    }, m.head = function(t, e, n) {
      var r = m("HEAD", t);
      return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r
    }, m.options = function(t, e, n) {
      var r = m("OPTIONS", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, m.del = h, m.delete = h, m.patch = function(t, e, n) {
      var r = m("PATCH", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, m.post = function(t, e, n) {
      var r = m("POST", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, m.put = function(t, e, n) {
      var r = m("PUT", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(10),
      i = n(27),
      o = n(28),
      s = r.LISTENERS,
      a = r.CAPTURE,
      u = r.BUBBLE,
      c = r.ATTRIBUTE,
      l = r.newNode,
      h = i.defineCustomEventTarget,
      f = o.createEventWrapper,
      d = o.STOP_IMMEDIATE_PROPAGATION_FLAG,
      p = "undefined" != typeof window && void 0 !== window.EventTarget,
      _ = t.exports = function t() {
        if (!(this instanceof t)) {
          if (1 === arguments.length && Array.isArray(arguments[0])) return h(t, arguments[0]);
          if (arguments.length > 0) {
            for (var e = Array(arguments.length), n = 0; n < arguments.length; ++n) e[n] = arguments[n];
            return h(t, e)
          }
          throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(this, s, {
          value: Object.create(null)
        })
      };
    _.prototype = Object.create((p ? window.EventTarget : Object).prototype, {
      constructor: {
        value: _,
        writable: !0,
        configurable: !0
      },
      addEventListener: {
        value: function(t, e, n) {
          if (null == e) return !1;
          if ("function" != typeof e && "object" != typeof e) throw new TypeError('"listener" is not an object.');
          var r = n ? a : u,
            i = this[s][t];
          if (null == i) return this[s][t] = l(e, r), !0;
          for (var o = null; null != i;) {
            if (i.listener === e && i.kind === r) return !1;
            o = i, i = i.next
          }
          return o.next = l(e, r), !0
        },
        configurable: !0,
        writable: !0
      },
      removeEventListener: {
        value: function(t, e, n) {
          if (null == e) return !1;
          for (var r = n ? a : u, i = null, o = this[s][t]; null != o;) {
            if (o.listener === e && o.kind === r) return null == i ? this[s][t] = o.next : i.next = o.next, !0;
            i = o, o = o.next
          }
          return !1
        },
        configurable: !0,
        writable: !0
      },
      dispatchEvent: {
        value: function(t) {
          var e = this[s][t.type];
          if (null == e) return !0;
          for (var n = f(t, this); null != e && ("function" == typeof e.listener ? e.listener.call(this, n) : e.kind !== c && "function" == typeof e.listener.handleEvent && e.listener.handleEvent(n), !n[d]);) e = e.next;
          return !n.defaultPrevented
        },
        configurable: !0,
        writable: !0
      }
    })
  }, function(t, e, n) {
    "use strict";
    var r = e.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function(t) {
      return "[[" + t + "_" + Math.random().toFixed(8).slice(2) + "]]"
    };
    e.LISTENERS = r("listeners"), e.CAPTURE = 1, e.BUBBLE = 2, e.ATTRIBUTE = 3, e.newNode = function(t, e) {
      return {
        listener: t,
        kind: e,
        next: null
      }
    }
  }, function(t, e, n) {
    "use strict";

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      o = function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }(),
      s = function() {
        function t() {
          r(this, t), this._entries = []
        }
        return o(t, [{
          key: "append",
          value: function(t, e) {
            if ("string" != typeof t) throw new TypeError("FormData name must be a string");
            if ("string" != typeof e && ("object" !== (void 0 === e ? "undefined" : i(e)) || "string" != typeof e.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
            this._entries.push([t, e])
          }
        }, {
          key: "set",
          value: function(t, e) {
            var n = this.get(t);
            n ? n[1] = e : this.append(t, e)
          }
        }, {
          key: "delete",
          value: function(t) {
            this._entries = this._entries.filter(function(e) {
              return e[0] !== t
            })
          }
        }, {
          key: "entries",
          value: function() {
            return this._entries
          }
        }, {
          key: "get",
          value: function(t) {
            return this._entries.find(function(e) {
              return e[0] === t
            })
          }
        }, {
          key: "getAll",
          value: function(t) {
            return this._entries.filter(function(e) {
              return e[0] === t
            })
          }
        }, {
          key: "has",
          value: function(t) {
            return this._entries.some(function(e) {
              return e[0] === t
            })
          }
        }, {
          key: "keys",
          value: function() {
            return this._entries.map(function(t) {
              return t[0]
            })
          }
        }, {
          key: "values",
          value: function() {
            return this._entries.map(function(t) {
              return t[1]
            })
          }
        }]), t
      }();
    t.exports = s
  }, function(t, e, n) {
    "use strict";

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }(),
      o = function() {
        function t() {
          r(this, t)
        }
        return i(t, [{
          key: "getItem",
          value: function(t) {
            return wx.getStorageSync(t)
          }
        }, {
          key: "setItem",
          value: function(t, e) {
            return wx.setStorageSync(t, e)
          }
        }, {
          key: "removeItem",
          value: function(t) {
            return this.setItem(t, "")
          }
        }, {
          key: "clear",
          value: function() {
            return wx.clearStorageSync()
          }
        }]), t
      }();
    t.exports = new o
  }, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t
    }

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t) {
      this.status = t.statusCode, this.statusText = t.statusCode, t.header && (this._responseHeaders = Object.keys(t.header).reduce(function(e, n) {
        return e[n.toLowerCase()] = t.header[n], e
      }, {}));
      var e = t.data;
      "string" != typeof e && (e = JSON.stringify(e)), this.responseText = this.response = e, this.readyState = d, this.dispatchEvent({
        type: "readystatechange"
      })
    }
    var u = function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }(),
      c = n(14),
      l = n(9),
      h = n(11),
      f = 0,
      d = 4,
      p = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange"],
      _ = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend"],
      v = function(t) {
        function e() {
          return i(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }
        return s(e, t), e
      }(l(_)),
      y = function(t) {
        function e() {
          i(this, e);
          var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return t.readyState = f, t._headers = {}, t.upload = new v, t
        }
        return s(e, t), u(e, [{
          key: "abort",
          value: function() {
            if (!this._request || this._request.abort) return this.status = 0, this.readyState = d, this._request.abort();
            throw new Error("该版本基础库不支持 abort request")
          }
        }, {
          key: "getAllResponseHeaders",
          value: function() {
            var t = this;
            return this._responseHeaders ? Object.keys(this._responseHeaders).map(function(e) {
              return e + ": " + t._responseHeaders[e]
            }).join("\r\n") : ""
          }
        }, {
          key: "getResponseHeader",
          value: function(t) {
            var e = t.toLowerCase();
            return this._responseHeaders && this._responseHeaders[e] ? this._responseHeaders[e] : null
          }
        }, {
          key: "overrideMimeType",
          value: function() {
            throw new Error("not supported in weapp")
          }
        }, {
          key: "open",
          value: function(t, e) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.readyState !== f) throw new Error("request is already opened");
            if (!n) throw new Error("sync request is not supported");
            this._method = t, this._url = e, this.readyState = 1, this.dispatchEvent({
              type: "readystatechange"
            })
          }
        }, {
          key: "setRequestHeader",
          value: function(t, e) {
            if (1 !== this.readyState) throw new Error("request is not opened");
            this._headers[t.toLowerCase()] = e
          }
        }, {
          key: "send",
          value: function(t) {
            var e = this;
            if (1 !== this.readyState) throw new Error("request is not opened");
            if (t instanceof h) {
              var n = t.entries(),
                i = n.filter(function(t) {
                  return "string" != typeof t[1]
                });
              if (0 === i.length) throw new Error("Must specify a Blob field in FormData");
              i.length > 1 && console.warn("Only the first Blob will be send in Weapp");
              var o = n.filter(function(t) {
                return "string" == typeof t[1]
              }).reduce(function(t, e) {
                return c(t, r({}, e[0], e[1]))
              }, {});
              this._request = wx.uploadFile({
                url: this._url,
                name: i[0][0],
                filePath: i[0][1].uri,
                formData: o,
                header: this._headers,
                success: a.bind(this),
                fail: function(t) {
                  e.status = 0, e.readyState = d, e.dispatchEvent({
                    type: "readystatechange"
                  }), e.dispatchEvent({
                    type: "error"
                  })
                }
              }), this._request && this._request.onProgressUpdate && this._request.onProgressUpdate(function(t) {
                var n = t.totalBytesSent,
                  r = t.totalBytesExpectedToSend;
                e.upload.dispatchEvent({
                  type: "progress",
                  loaded: n,
                  total: r
                })
              })
            } else this._request = wx.request({
              url: this._url,
              data: t || "",
              method: this._method.toUpperCase(),
              header: this._headers,
              success: a.bind(this),
              fail: function(t) {
                e.status = 0, e.readyState = d, e.dispatchEvent({
                  type: "readystatechange"
                }), e.dispatchEvent({
                  type: "error"
                })
              }
            })
          }
        }]), e
      }(l(p));
    c(y, {
      UNSENT: f,
      OPENED: 1,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      DONE: d
    }), t.exports = y
  }, function(t, e, n) {
    "use strict";

    function r(t) {
      if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(t)
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var i = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      s = Object.prototype.propertyIsEnumerable;
    t.exports = function() {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
        for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
            return e[t]
          }).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(t) {
          r[t] = t
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
      } catch (t) {
        return !1
      }
    }() ? Object.assign : function(t, e) {
      for (var n, a, u = r(t), c = 1; c < arguments.length; c++) {
        n = Object(arguments[c]);
        for (var l in n) o.call(n, l) && (u[l] = n[l]);
        if (i) {
          a = i(n);
          for (var h = 0; h < a.length; h++) s.call(n, a[h]) && (u[a[h]] = n[a[h]])
        }
      }
      return u
    }
  }, function(t, e, n) {
    "use strict";

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t) {
      "" !== t.message && p && (p._readyState = f, p.dispatchEvent({
        type: "error",
        message: t.errMsg
      }))
    }
    var a = function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }(),
      u = n(14),
      c = n(9),
      l = 0,
      h = 1,
      f = 3,
      d = ["open", "error", "message", "close"],
      p = void 0,
      _ = function(t) {
        function e(t, n) {
          if (r(this, e), !t) throw new TypeError("Failed to construct 'WebSocket': url required");
          if (n && (!wx.canIUse || !wx.canIUse("connectSocket.object.protocols"))) throw new Error("subprotocal not supported in weapp");
          var o = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return o._url = t, o._protocal = n || "", o._readyState = l, p && p.dispatchEvent({
            type: "close"
          }), p = o, wx.onSocketOpen(function(t) {
            p && (p._readyState = h, p.dispatchEvent({
              type: "open"
            }))
          }), wx.onSocketError(s), wx.onSocketMessage(function(t) {
            if (p) {
              var e = t.data,
                n = t.origin,
                r = t.ports,
                i = t.source;
              p.dispatchEvent({
                data: e,
                origin: n,
                ports: r,
                source: i,
                type: "message"
              })
            }
          }), wx.onSocketClose(function(t) {
            if (p) {
              p._readyState = f;
              var e = t.code,
                n = t.reason,
                r = t.wasClean;
              p.dispatchEvent({
                code: e,
                reason: n,
                wasClean: r,
                type: "close"
              }), p = null
            }
          }), wx.connectSocket({
            url: t,
            protocals: o._protocal,
            fail: function(t) {
              return setTimeout(function() {
                return s(t)
              }, 0)
            }
          }), o
        }
        return o(e, t), a(e, [{
          key: "close",
          value: function() {
            this.readyState !== f && (this.readyState === l && console.warn("close WebSocket which is connecting might not work"), wx.closeSocket())
          }
        }, {
          key: "send",
          value: function(t) {
            if (this.readyState !== h) throw new Error("INVALID_STATE_ERR");
            if (!("string" == typeof t || t instanceof ArrayBuffer)) throw new TypeError("only String/ArrayBuffer supported");
            wx.sendSocketMessage({
              data: t
            })
          }
        }, {
          key: "url",
          get: function() {
            return this._url
          }
        }, {
          key: "protocal",
          get: function() {
            return this._protocal
          }
        }, {
          key: "readyState",
          get: function() {
            return this._readyState
          }
        }]), e
      }(c(d));
    u(_, {
      CONNECTING: l,
      OPEN: h,
      CLOSING: 2,
      CLOSED: f
    }), t.exports = _
  }, function(t, e, n) {
    "use strict";
    t.exports = {}
  }, function(t, e, n) {
    function r(t, e, n) {
      var r = e && n || 0;
      "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null), t = t || {};
      var s = t.random || (t.rng || i)();
      if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e)
        for (var a = 0; a < 16; ++a) e[r + a] = s[a];
      return e || o(s)
    }
    var i = n(31),
      o = n(32);
    t.exports = r
  }, function(t, e, n) {
    "use strict";
    t.exports = "3.11.0-beta.0"
  }, function(t, e, n) {
    "use strict";

    function r(t) {
      return null !== t && "object" == typeof t
    }
    t.exports = r
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(1),
      o = n(44),
      s = ["getItem", "setItem", "removeItem", "clear"];
    o.async ? r(s).each(function(t) {
      "function" != typeof o[t] && (o[t] = function() {
        var e = new Error("Synchronous API [" + t + "] is not available in this runtime.");
        throw e.code = "SYNC_API_NOT_AVAILABLE", e
      })
    }) : r(s).each(function(t) {
      "function" == typeof o[t] && (o[t + "Async"] = function() {
        return i.resolve(o[t].apply(o, arguments))
      })
    }), t.exports = o
  }, function(t, e, n) {
    "use strict";
    var r = n(20),
      i = n(5),
      o = e.removeAsync = r.removeItemAsync.bind(r),
      s = function(t, e) {
        try {
          t = JSON.parse(t)
        } catch (t) {
          return null
        }
        if (t) {
          return t.expiredAt && t.expiredAt < Date.now() ? o(e).then(function() {
            return null
          }) : t.value
        }
        return null
      };
    e.getAsync = function(t) {
      return t = "AV/" + i.applicationId + "/" + t, r.getItemAsync(t).then(function(e) {
        return s(e, t)
      })
    }, e.setAsync = function(t, e, n) {
      var o = {
        value: e
      };
      return "number" == typeof n && (o.expiredAt = Date.now() + n), r.setItemAsync("AV/" + i.applicationId + "/" + t, JSON.stringify(o))
    }
  }, function(t, e) {
    var n = {
      utf8: {
        stringToBytes: function(t) {
          return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
        },
        bytesToString: function(t) {
          return decodeURIComponent(escape(n.bin.bytesToString(t)))
        }
      },
      bin: {
        stringToBytes: function(t) {
          for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
          return e
        },
        bytesToString: function(t) {
          for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
          return e.join("")
        }
      }
    };
    t.exports = n
  }, function(t, e, n) {
    "use strict";
    /*!
     * LeanCloud JavaScript SDK
     * https://leancloud.cn
     *
     * Copyright 2016 LeanCloud.cn, Inc.
     * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
     */
    n(24);
    var r = n(0),
      i = n(5);
    i._ = r, i.version = n(18), i.Promise = n(1), i.localStorage = n(20), i.Cache = n(21), i.Error = n(4), n(46), n(48)(i), n(49)(i), n(50)(i), n(51)(i), n(52)(i), n(53)(i), n(61)(i), n(62)(i), n(63)(i), n(64)(i), n(65)(i), n(67)(i), n(68)(i), n(69)(i), n(70)(i), n(71)(i), n(72)(i), i.Conversation = n(73), n(74), t.exports = i
  }, function(t, e, n) {
    "use strict";
    n(25)
  }, function(t, e, n) {
    "use strict";
    var r = n(26).polyfill;
    try {
      r()
    } catch (t) {}
    try {
      r(GameGlobal)
    } catch (t) {}
    try {
      window = window || {}, r(window)
    } catch (t) {}
    try {
      localStorage = localStorage || n(12)
    } catch (t) {}
    try {
      XMLHttpRequest = XMLHttpRequest || n(13)
    } catch (t) {}
    try {
      FormData = FormData || n(11)
    } catch (t) {}
    try {
      WebSocket = WebSocket || n(15)
    } catch (t) {}
    try {
      navigator = navigator || n(16)
    } catch (t) {}
  }, function(t, e, n) {
    "use strict";
    (function(e) {
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        i = n(12),
        o = n(13),
        s = n(11),
        a = n(15),
        u = n(29),
        c = n(16);
      t.exports = {
        polyfill: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e || window;
          if ("object" !== (void 0 === t ? "undefined" : r(t))) throw new Error("polyfill target is not an Object");
          var n = {
            localStorage: i,
            XMLHttpRequest: o,
            FormData: s,
            WebSocket: a,
            Object: Object,
            navigator: c
          };
          for (var l in n) t[l] || (t[l] = n[l]);
          u.polyfill(t), t.navigator.product = "ReactNative"
        },
        localStorage: i,
        XMLHttpRequest: o,
        FormData: s,
        WebSocket: a
      }
    }).call(e, n(6))
  }, function(t, e, n) {
    "use strict";

    function r(t, e) {
      for (var n = t[s][e]; null != n;) {
        if (n.kind === a) return n.listener;
        n = n.next
      }
      return null
    }

    function i(t, e, n) {
      "function" != typeof n && "object" != typeof n && (n = null);
      for (var r = null, i = t[s][e]; null != i;) i.kind === a ? null == r ? t[s][e] = i.next : r.next = i.next : r = i, i = i.next;
      null != n && (null == r ? t[s][e] = u(n, a) : r.next = u(n, a))
    }
    var o = n(10),
      s = o.LISTENERS,
      a = o.ATTRIBUTE,
      u = o.newNode;
    e.defineCustomEventTarget = function(t, e) {
      function n() {
        t.call(this)
      }
      var o = {
        constructor: {
          value: n,
          configurable: !0,
          writable: !0
        }
      };
      return e.forEach(function(t) {
        o["on" + t] = {
          get: function() {
            return r(this, t)
          },
          set: function(e) {
            i(this, t, e)
          },
          configurable: !0,
          enumerable: !0
        }
      }), n.prototype = Object.create(t.prototype, o), n
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(10).createUniqueKey,
      i = r("stop_immediate_propagation_flag"),
      o = r("canceled_flag"),
      s = r("original_event"),
      a = Object.freeze({
        stopPropagation: Object.freeze({
          value: function() {
            var t = this[s];
            "function" == typeof t.stopPropagation && t.stopPropagation()
          },
          writable: !0,
          configurable: !0
        }),
        stopImmediatePropagation: Object.freeze({
          value: function() {
            this[i] = !0;
            var t = this[s];
            "function" == typeof t.stopImmediatePropagation && t.stopImmediatePropagation()
          },
          writable: !0,
          configurable: !0
        }),
        preventDefault: Object.freeze({
          value: function() {
            !0 === this.cancelable && (this[o] = !0);
            var t = this[s];
            "function" == typeof t.preventDefault && t.preventDefault()
          },
          writable: !0,
          configurable: !0
        }),
        defaultPrevented: Object.freeze({
          get: function() {
            return this[o]
          },
          enumerable: !0,
          configurable: !0
        })
      });
    e.STOP_IMMEDIATE_PROPAGATION_FLAG = i, e.createEventWrapper = function(t, e) {
      var n = "number" == typeof t.timeStamp ? t.timeStamp : Date.now(),
        r = {
          type: {
            value: t.type,
            enumerable: !0
          },
          target: {
            value: e,
            enumerable: !0
          },
          currentTarget: {
            value: e,
            enumerable: !0
          },
          eventPhase: {
            value: 2,
            enumerable: !0
          },
          bubbles: {
            value: Boolean(t.bubbles),
            enumerable: !0
          },
          cancelable: {
            value: Boolean(t.cancelable),
            enumerable: !0
          },
          timeStamp: {
            value: n,
            enumerable: !0
          },
          isTrusted: {
            value: !1,
            enumerable: !0
          }
        };
      return r[i] = {
        value: !1,
        writable: !0
      }, r[o] = {
        value: !1,
        writable: !0
      }, r[s] = {
        value: t
      }, void 0 !== t.detail && (r.detail = {
        value: t.detail,
        enumerable: !0
      }), Object.create(Object.create(t, a), r)
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(9);
    e.polyfill = function(t) {
      if (wx.onNetworkStatusChange && !t.__onlineOfflinePolyfilled) {
        t.__onlineOfflinePolyfilled = !0;
        var e = new r;
        t.dispatchEvent || (t.addEventListener = e.addEventListener.bind(e), t.removeEventListener = e.removeEventListener.bind(e), t.dispatchEvent = e.dispatchEvent.bind(e), "function" != typeof postMessage || t.importScripts || (t.importScripts = function() {
          throw new Error("mocked")
        })), wx.getNetworkType({
          success: function(e) {
            var n = e.networkType;
            t.onLine = "none" !== n, wx.onNetworkStatusChange(function(e) {
              var n = e.isConnected;
              t.onLine !== n && (t.onLine = n, t.dispatchEvent({
                type: n ? "online" : "offline"
              }))
            })
          }
        })
      }
    }
  }, function(t, e) {
    t.exports = function(t) {
      return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function() {
          return t.l
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function() {
          return t.i
        }
      }), t.webpackPolyfill = 1), t
    }
  }, function(t, e) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
      var r = new Uint8Array(16);
      t.exports = function() {
        return n(r), r
      }
    } else {
      var i = new Array(16);
      t.exports = function() {
        for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), i[e] = t >>> ((3 & e) << 3) & 255;
        return i
      }
    }
  }, function(t, e) {
    function n(t, e) {
      var n = e || 0,
        i = r;
      return [i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]]].join("")
    }
    for (var r = [], i = 0; i < 256; ++i) r[i] = (i + 256).toString(16).substr(1);
    t.exports = n
  }, function(t, e, n) {
    "use strict";
    var r = n(18),
      i = ["Weapp"].concat(n(34));
    t.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")"
  }, function(t, e, n) {
    "use strict";
    t.exports = []
  }, function(t, e, n) {
    function r(t) {
      if (t) return i(t)
    }

    function i(t) {
      for (var e in r.prototype) t[e] = r.prototype[e];
      return t
    }
    t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, r.prototype.once = function(t, e) {
      function n() {
        this.off(t, n), e.apply(this, arguments)
      }
      return n.fn = e, this.on(t, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n = this._callbacks["$" + t];
      if (!n) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + t], this;
      for (var r, i = 0; i < n.length; i++)
        if ((r = n[i]) === e || r.fn === e) {
          n.splice(i, 1);
          break
        }
      return this
    }, r.prototype.emit = function(t) {
      this._callbacks = this._callbacks || {};
      var e = [].slice.call(arguments, 1),
        n = this._callbacks["$" + t];
      if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, e)
      }
      return this
    }, r.prototype.listeners = function(t) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, r.prototype.hasListeners = function(t) {
      return !!this.listeners(t).length
    }
  }, function(t, e, n) {
    "use strict";

    function r(t) {
      if (t) return i(t)
    }

    function i(t) {
      for (var e in r.prototype) t[e] = r.prototype[e];
      return t
    }
    var o = n(19);
    t.exports = r, r.prototype.clearTimeout = function() {
      return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
    }, r.prototype.parse = function(t) {
      return this._parser = t, this
    }, r.prototype.responseType = function(t) {
      return this._responseType = t, this
    }, r.prototype.serialize = function(t) {
      return this._serializer = t, this
    }, r.prototype.timeout = function(t) {
      if (!t || "object" != typeof t) return this._timeout = t, this._responseTimeout = 0, this;
      for (var e in t) switch (e) {
        case "deadline":
          this._timeout = t.deadline;
          break;
        case "response":
          this._responseTimeout = t.response;
          break;
        default:
          console.warn("Unknown timeout option", e)
      }
      return this
    }, r.prototype.retry = function(t, e) {
      return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = e, this
    };
    var s = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    r.prototype._shouldRetry = function(t, e) {
      if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
      if (this._retryCallback) try {
        var n = this._retryCallback(t, e);
        if (!0 === n) return !0;
        if (!1 === n) return !1
      } catch (t) {
        console.error(t)
      }
      if (e && e.status && e.status >= 500 && 501 != e.status) return !0;
      if (t) {
        if (t.code && ~s.indexOf(t.code)) return !0;
        if (t.timeout && "ECONNABORTED" == t.code) return !0;
        if (t.crossDomain) return !0
      }
      return !1
    }, r.prototype._retry = function() {
      return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
    }, r.prototype.then = function(t, e) {
      if (!this._fullfilledPromise) {
        var n = this;
        this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(t, e) {
          n.end(function(n, r) {
            n ? e(n) : t(r)
          })
        })
      }
      return this._fullfilledPromise.then(t, e)
    }, r.prototype.catch = function(t) {
      return this.then(void 0, t)
    }, r.prototype.use = function(t) {
      return t(this), this
    }, r.prototype.ok = function(t) {
      if ("function" != typeof t) throw Error("Callback required");
      return this._okCallback = t, this
    }, r.prototype._isResponseOK = function(t) {
      return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
    }, r.prototype.get = function(t) {
      return this._header[t.toLowerCase()]
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function(t, e) {
      if (o(t)) {
        for (var n in t) this.set(n, t[n]);
        return this
      }
      return this._header[t.toLowerCase()] = e, this.header[t] = e, this
    }, r.prototype.unset = function(t) {
      return delete this._header[t.toLowerCase()], delete this.header[t], this
    }, r.prototype.field = function(t, e) {
      if (null === t || void 0 === t) throw new Error(".field(name, val) name can not be empty");
      if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), o(t)) {
        for (var n in t) this.field(n, t[n]);
        return this
      }
      if (Array.isArray(e)) {
        for (var r in e) this.field(t, e[r]);
        return this
      }
      if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty");
      return "boolean" == typeof e && (e = "" + e), this._getFormData().append(t, e), this
    }, r.prototype.abort = function() {
      return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
    }, r.prototype._auth = function(t, e, n, r) {
      switch (n.type) {
        case "basic":
          this.set("Authorization", "Basic " + r(t + ":" + e));
          break;
        case "auto":
          this.username = t, this.password = e;
          break;
        case "bearer":
          this.set("Authorization", "Bearer " + t)
      }
      return this
    }, r.prototype.withCredentials = function(t) {
      return void 0 == t && (t = !0), this._withCredentials = t, this
    }, r.prototype.redirects = function(t) {
      return this._maxRedirects = t, this
    }, r.prototype.maxResponseSize = function(t) {
      if ("number" != typeof t) throw TypeError("Invalid argument");
      return this._maxResponseSize = t, this
    }, r.prototype.toJSON = function() {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
      }
    }, r.prototype.send = function(t) {
      var e = o(t),
        n = this._header["content-type"];
      if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
      else if (t && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
      if (e && o(this._data))
        for (var r in t) this._data[r] = t[r];
      else "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + t : t : (this._data || "") + t) : this._data = t;
      return !e || this._isHost(t) ? this : (n || this.type("json"), this)
    }, r.prototype.sortQuery = function(t) {
      return this._sort = void 0 === t || t, this
    }, r.prototype._finalizeQueryString = function() {
      var t = this._query.join("&");
      if (t && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + t), this._query.length = 0, this._sort) {
        var e = this.url.indexOf("?");
        if (e >= 0) {
          var n = this.url.substring(e + 1).split("&");
          "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, e) + "?" + n.join("&")
        }
      }
    }, r.prototype._appendQueryString = function() {
      console.trace("Unsupported")
    }, r.prototype._timeoutError = function(t, e, n) {
      if (!this._aborted) {
        var r = new Error(t + e + "ms exceeded");
        r.timeout = e, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r)
      }
    }, r.prototype._setTimeouts = function() {
      var t = this;
      this._timeout && !this._timer && (this._timer = setTimeout(function() {
        t._timeoutError("Timeout of ", t._timeout, "ETIME")
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
        t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
      }, this._responseTimeout))
    }
  }, function(t, e, n) {
    "use strict";

    function r(t) {
      if (t) return i(t)
    }

    function i(t) {
      for (var e in r.prototype) t[e] = r.prototype[e];
      return t
    }
    var o = n(38);
    t.exports = r, r.prototype.get = function(t) {
      return this.header[t.toLowerCase()]
    }, r.prototype._setHeaderProperties = function(t) {
      var e = t["content-type"] || "";
      this.type = o.type(e);
      var n = o.params(e);
      for (var r in n) this[r] = n[r];
      this.links = {};
      try {
        t.link && (this.links = o.parseLinks(t.link))
      } catch (t) {}
    }, r.prototype._setStatusProperties = function(t) {
      var e = t / 100 | 0;
      this.status = this.statusCode = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.redirect = 3 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), this.created = 201 == t, this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.forbidden = 403 == t, this.notFound = 404 == t, this.unprocessableEntity = 422 == t
    }
  }, function(t, e, n) {
    "use strict";
    e.type = function(t) {
      return t.split(/ *; */).shift()
    }, e.params = function(t) {
      return t.split(/ *; */).reduce(function(t, e) {
        var n = e.split(/ *= */),
          r = n.shift(),
          i = n.shift();
        return r && i && (t[r] = i), t
      }, {})
    }, e.parseLinks = function(t) {
      return t.split(/ *, */).reduce(function(t, e) {
        var n = e.split(/ *; */),
          r = n[0].slice(1, -1);
        return t[n[1].split(/ *= */)[1].slice(1, -1)] = r, t
      }, {})
    }, e.cleanHeader = function(t, e) {
      return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, e && (delete t.authorization, delete t.cookie), t
    }
  }, function(t, e) {
    function n() {
      this._defaults = []
    }["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(t) {
      n.prototype[t] = function() {
        return this._defaults.push({
          fn: t,
          arguments: arguments
        }), this
      }
    }), n.prototype._setDefaults = function(t) {
      this._defaults.forEach(function(e) {
        t[e.fn].apply(t, e.arguments)
      })
    }, t.exports = n
  }, function(t, e, n) {
    function r(t) {
      var n, r = 0;
      for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
      return e.colors[Math.abs(r) % e.colors.length]
    }

    function i(t) {
      function n() {
        if (n.enabled) {
          var t = n,
            r = +new Date,
            o = r - (i || r);
          t.diff = o, t.prev = i, t.curr = r, i = r;
          for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
          s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
          var u = 0;
          s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
            if ("%%" === n) return n;
            u++;
            var i = e.formatters[r];
            if ("function" == typeof i) {
              var o = s[u];
              n = i.call(t, o), s.splice(u, 1), u--
            }
            return n
          }), e.formatArgs.call(t, s);
          (n.log || e.log || console.log.bind(console)).apply(t, s)
        }
      }
      var i;
      return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), n.destroy = o, "function" == typeof e.init && e.init(n), e.instances.push(n), n
    }

    function o() {
      var t = e.instances.indexOf(this);
      return -1 !== t && (e.instances.splice(t, 1), !0)
    }

    function s(t) {
      e.save(t), e.names = [], e.skips = [];
      var n, r = ("string" == typeof t ? t : "").split(/[\s,]+/),
        i = r.length;
      for (n = 0; n < i; n++) r[n] && (t = r[n].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
      for (n = 0; n < e.instances.length; n++) {
        var o = e.instances[n];
        o.enabled = e.enabled(o.namespace)
      }
    }

    function a() {
      e.enable("")
    }

    function u(t) {
      if ("*" === t[t.length - 1]) return !0;
      var n, r;
      for (n = 0, r = e.skips.length; n < r; n++)
        if (e.skips[n].test(t)) return !1;
      for (n = 0, r = e.names.length; n < r; n++)
        if (e.names[n].test(t)) return !0;
      return !1
    }

    function c(t) {
      return t instanceof Error ? t.stack || t.message : t
    }
    e = t.exports = i.debug = i.default = i, e.coerce = c, e.disable = a, e.enable = s, e.enabled = u, e.humanize = n(41), e.instances = [], e.names = [], e.skips = [], e.formatters = {}
  }, function(t, e) {
    function n(t) {
      if (t = String(t), !(t.length > 100)) {
        var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
        if (e) {
          var n = parseFloat(e[1]);
          switch ((e[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n * l;
            case "days":
            case "day":
            case "d":
              return n * c;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n * u;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n * a;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n * s;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n;
            default:
              return
          }
        }
      }
    }

    function r(t) {
      return t >= c ? Math.round(t / c) + "d" : t >= u ? Math.round(t / u) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
    }

    function i(t) {
      return o(t, c, "day") || o(t, u, "hour") || o(t, a, "minute") || o(t, s, "second") || t + " ms"
    }

    function o(t, e, n) {
      if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
    }
    var s = 1e3,
      a = 60 * s,
      u = 60 * a,
      c = 24 * u,
      l = 365.25 * c;
    t.exports = function(t, e) {
      e = e || {};
      var o = typeof t;
      if ("string" === o && t.length > 0) return n(t);
      if ("number" === o && !1 === isNaN(t)) return e.long ? i(t) : r(t);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
    }
  }, function(t, e, n) {
    (function(e) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   v4.2.3+b33f4734
       */
      ! function(e, n) {
        t.exports = n()
      }(0, function() {
        "use strict";

        function t(t) {
          var e = typeof t;
          return null !== t && ("object" === e || "function" === e)
        }

        function r(t) {
          return "function" == typeof t
        }

        function i(t) {
          B = t
        }

        function o(t) {
          W = t
        }

        function s() {
          return void 0 !== M ? function() {
            M(u)
          } : a()
        }

        function a() {
          var t = setTimeout;
          return function() {
            return t(u, 1)
          }
        }

        function u() {
          for (var t = 0; t < q; t += 2) {
            (0, G[t])(G[t + 1]), G[t] = void 0, G[t + 1] = void 0
          }
          q = 0
        }

        function c(t, e) {
          var n = this,
            r = new this.constructor(h);
          void 0 === r[$] && N(r);
          var i = n._state;
          if (i) {
            var o = arguments[i - 1];
            W(function() {
              return C(i, r, o, n._result)
            })
          } else S(n, r, t, e);
          return r
        }

        function l(t) {
          var e = this;
          if (t && "object" == typeof t && t.constructor === e) return t;
          var n = new e(h);
          return g(n, t), n
        }

        function h() {}

        function f() {
          return new TypeError("You cannot resolve a promise with itself")
        }

        function d() {
          return new TypeError("A promises callback cannot return that same promise.")
        }

        function p(t) {
          try {
            return t.then
          } catch (t) {
            return tt.error = t, tt
          }
        }

        function _(t, e, n, r) {
          try {
            t.call(e, n, r)
          } catch (t) {
            return t
          }
        }

        function v(t, e, n) {
          W(function(t) {
            var r = !1,
              i = _(n, e, function(n) {
                r || (r = !0, e !== n ? g(t, n) : w(t, n))
              }, function(e) {
                r || (r = !0, O(t, e))
              }, "Settle: " + (t._label || " unknown promise"));
            !r && i && (r = !0, O(t, i))
          }, t)
        }

        function y(t, e) {
          e._state === Y ? w(t, e._result) : e._state === Z ? O(t, e._result) : S(e, void 0, function(e) {
            return g(t, e)
          }, function(e) {
            return O(t, e)
          })
        }

        function m(t, e, n) {
          e.constructor === t.constructor && n === c && e.constructor.resolve === l ? y(t, e) : n === tt ? (O(t, tt.error), tt.error = null) : void 0 === n ? w(t, e) : r(n) ? v(t, e, n) : w(t, e)
        }

        function g(e, n) {
          e === n ? O(e, f()) : t(n) ? m(e, n, p(n)) : w(e, n)
        }

        function b(t) {
          t._onerror && t._onerror(t._result), A(t)
        }

        function w(t, e) {
          t._state === X && (t._result = e, t._state = Y, 0 !== t._subscribers.length && W(A, t))
        }

        function O(t, e) {
          t._state === X && (t._state = Z, t._result = e, W(b, t))
        }

        function S(t, e, n, r) {
          var i = t._subscribers,
            o = i.length;
          t._onerror = null, i[o] = e, i[o + Y] = n, i[o + Z] = r, 0 === o && t._state && W(A, t)
        }

        function A(t) {
          var e = t._subscribers,
            n = t._state;
          if (0 !== e.length) {
            for (var r = void 0, i = void 0, o = t._result, s = 0; s < e.length; s += 3) r = e[s], i = e[s + n], r ? C(n, r, i, o) : i(o);
            t._subscribers.length = 0
          }
        }

        function E(t, e) {
          try {
            return t(e)
          } catch (t) {
            return tt.error = t, tt
          }
        }

        function C(t, e, n, i) {
          var o = r(n),
            s = void 0,
            a = void 0,
            u = void 0,
            c = void 0;
          if (o) {
            if (s = E(n, i), s === tt ? (c = !0, a = s.error, s.error = null) : u = !0, e === s) return void O(e, d())
          } else s = i, u = !0;
          e._state !== X || (o && u ? g(e, s) : c ? O(e, a) : t === Y ? w(e, s) : t === Z && O(e, s))
        }

        function T(t, e) {
          try {
            e(function(e) {
              g(t, e)
            }, function(e) {
              O(t, e)
            })
          } catch (e) {
            O(t, e)
          }
        }

        function j() {
          return et++
        }

        function N(t) {
          t[$] = et++, t._state = void 0, t._result = void 0, t._subscribers = []
        }

        function x() {
          return new Error("Array Methods must be provided an Array")
        }

        function k(t) {
          return new nt(this, t).promise
        }

        function U(t) {
          var e = this;
          return new e(F(t) ? function(n, r) {
            for (var i = t.length, o = 0; o < i; o++) e.resolve(t[o]).then(n, r)
          } : function(t, e) {
            return e(new TypeError("You must pass an array to race."))
          })
        }

        function I(t) {
          var e = this,
            n = new e(h);
          return O(n, t), n
        }

        function R() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function P() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function D() {
          var t = void 0;
          if (void 0 !== e) t = e;
          else if ("undefined" != typeof self) t = self;
          else try {
            t = Function("return this")()
          } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
          var n = t.Promise;
          if (n) {
            var r = null;
            try {
              r = Object.prototype.toString.call(n.resolve())
            } catch (t) {}
            if ("[object Promise]" === r && !n.cast) return
          }
          t.Promise = rt
        }
        var L = void 0;
        L = Array.isArray ? Array.isArray : function(t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        };
        var F = L,
          q = 0,
          M = void 0,
          B = void 0,
          W = function(t, e) {
            G[q] = t, G[q + 1] = e, 2 === (q += 2) && (B ? B(u) : z())
          },
          J = "undefined" != typeof window ? window : void 0,
          Q = J || {},
          V = Q.MutationObserver || Q.WebKitMutationObserver,
          K = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
          H = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
          G = new Array(1e3),
          z = void 0;
        z = K ? function() {
          return function() {
            return process.nextTick(u)
          }
        }() : V ? function() {
          var t = 0,
            e = new V(u),
            n = document.createTextNode("");
          return e.observe(n, {
              characterData: !0
            }),
            function() {
              n.data = t = ++t % 2
            }
        }() : H ? function() {
          var t = new MessageChannel;
          return t.port1.onmessage = u,
            function() {
              return t.port2.postMessage(0)
            }
        }() : void 0 === J ? function() {
          try {
            var t = n(43);
            return M = t.runOnLoop || t.runOnContext, s()
          } catch (t) {
            return a()
          }
        }() : a();
        var $ = Math.random().toString(36).substring(2),
          X = void 0,
          Y = 1,
          Z = 2,
          tt = {
            error: null
          },
          et = 0,
          nt = function() {
            function t(t, e) {
              this._instanceConstructor = t, this.promise = new t(h), this.promise[$] || N(this.promise), F(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && w(this.promise, this._result))) : O(this.promise, x())
            }
            return t.prototype._enumerate = function(t) {
              for (var e = 0; this._state === X && e < t.length; e++) this._eachEntry(t[e], e)
            }, t.prototype._eachEntry = function(t, e) {
              var n = this._instanceConstructor,
                r = n.resolve;
              if (r === l) {
                var i = p(t);
                if (i === c && t._state !== X) this._settledAt(t._state, e, t._result);
                else if ("function" != typeof i) this._remaining--, this._result[e] = t;
                else if (n === rt) {
                  var o = new n(h);
                  m(o, t, i), this._willSettleAt(o, e)
                } else this._willSettleAt(new n(function(e) {
                  return e(t)
                }), e)
              } else this._willSettleAt(r(t), e)
            }, t.prototype._settledAt = function(t, e, n) {
              var r = this.promise;
              r._state === X && (this._remaining--, t === Z ? O(r, n) : this._result[e] = n), 0 === this._remaining && w(r, this._result)
            }, t.prototype._willSettleAt = function(t, e) {
              var n = this;
              S(t, void 0, function(t) {
                return n._settledAt(Y, e, t)
              }, function(t) {
                return n._settledAt(Z, e, t)
              })
            }, t
          }(),
          rt = function() {
            function t(e) {
              this[$] = j(), this._result = this._state = void 0, this._subscribers = [], h !== e && ("function" != typeof e && R(), this instanceof t ? T(this, e) : P())
            }
            return t.prototype.catch = function(t) {
              return this.then(null, t)
            }, t.prototype.finally = function(t) {
              var e = this,
                n = e.constructor;
              return e.then(function(e) {
                return n.resolve(t()).then(function() {
                  return e
                })
              }, function(e) {
                return n.resolve(t()).then(function() {
                  throw e
                })
              })
            }, t
          }();
        return rt.prototype.then = c, rt.all = k, rt.race = U, rt.resolve = l, rt.reject = I, rt._setScheduler = i, rt._setAsap = o, rt._asap = W, rt.polyfill = D, rt.Promise = rt, rt
      })
    }).call(e, n(6))
  }, function(t, e) {}, function(t, e, n) {
    "use strict";
    (function(e) {
      var r = n(0),
        i = (n(1), {}),
        o = ["getItem", "setItem", "removeItem", "clear"],
        s = e.localStorage;
      try {
        var a = "__storejs__";
        if (s.setItem(a, a), s.getItem(a) != a) throw new Error;
        s.removeItem(a)
      } catch (t) {
        s = n(45)
      }
      r(o).each(function(t) {
        i[t] = function() {
          return s[t].apply(s, arguments)
        }
      }), i.async = !1, t.exports = i
    }).call(e, n(6))
  }, function(t, e, n) {
    ! function(e) {
      var n = {},
        r = {};
      n.length = 0, n.getItem = function(t) {
        return r[t] || null
      }, n.setItem = function(t, e) {
        void 0 === e ? n.removeItem(t) : (r.hasOwnProperty(t) || n.length++, r[t] = "" + e)
      }, n.removeItem = function(t) {
        r.hasOwnProperty(t) && (delete r[t], n.length--)
      }, n.key = function(t) {
        return Object.keys(r)[t] || null
      }, n.clear = function() {
        r = {}, n.length = 0
      }, t.exports = n
    }()
  }, function(t, e, n) {
    "use strict";

    function r(t) {
      var e = void 0,
        n = t.slice(0, 8).toLowerCase();
      switch (t.slice(-9)) {
        case "-9Nh9j0Va":
          e = "lncldapi.com";
          break;
        case "-MdYXbMMI":
          e = "lncldglobal.com";
          break;
        default:
          e = "lncld.net"
      }
      return {
        push: "https://" + n + ".push." + e,
        stats: "https://" + n + ".stats." + e,
        engine: "https://" + n + ".engine." + e,
        api: "https://" + n + ".api." + e
      }
    }
    var i = n(5),
      o = n(47),
      s = n(3),
      a = s.isNullOrUndefined,
      u = n(0),
      c = u.extend,
      l = u.isObject,
      h = function(t) {
        return {
          push: t,
          stats: t,
          engine: t,
          api: t
        }
      },
      f = !1;
    i.init = function(t) {
      if (!l(t)) return i.init({
        appId: t,
        appKey: arguments.length <= 1 ? void 0 : arguments[1],
        masterKey: arguments.length <= 2 ? void 0 : arguments[2]
      });
      var e = t.appId,
        n = t.appKey,
        s = t.masterKey,
        a = (t.hookKey, t.serverURLs),
        u = t.disableCurrentUser,
        d = t.production,
        p = t.realtime;
      if (i.applicationId) throw new Error("SDK is already initialized.");
      if (!e) throw new TypeError("appId must be a string");
      if (!n) throw new TypeError("appKey must be a string");
      s && console.warn("MasterKey is not supposed to be used in browser."), i._config.applicationId = e, i._config.applicationKey = n, i._config.masterKey = s, void 0 !== d && (i._config.production = d), void 0 !== u && (i._config.disableCurrentUser = u), i._appRouter = new o(i);
      var _ = f || void 0 !== a;
      i._setServerURLs(c({}, r(e), i._config.serverURLs, "string" == typeof a ? h(a) : a), _), p ? i._config.realtime = p : i._sharedConfig.liveQueryRealtime && (i._config.realtime = new i._sharedConfig.liveQueryRealtime({
        appId: e,
        appKey: n
      }))
    }, i.setProduction = function(t) {
      a(t) ? i._config.production = null : i._config.production = t ? 1 : 0
    }, i._setServerURLs = function(t) {
      var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "string" != typeof t ? c(i._config.serverURLs, t) : i._config.serverURLs = h(t), e && (i._appRouter ? i._appRouter.disable() : f = !0)
    }, i.setServerURLs = function(t) {
      return i._setServerURLs(t)
    }, i.keepErrorRawMessage = function(t) {
      i._sharedConfig.keepErrorRawMessage = t
    }, i.setRequestTimeout = function(t) {
      i._config.requestTimeout = t
    }, i.initialize = i.init, ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(function(t) {
      return Object.defineProperty(i, t, {
        get: function() {
          return i._config[t]
        },
        set: function(e) {
          i._config[t] = e
        }
      })
    })
  }, function(t, e, n) {
    "use strict";

    function r(t) {
      var e = this;
      this.AV = t, this.lockedUntil = 0, s.getAsync("serverURLs").then(function(t) {
        if (!t) return e.lock(0);
        var n = t.serverURLs,
          r = t.lockedUntil;
        e.AV._setServerURLs(n, !1), e.lockedUntil = r
      }).catch(function() {
        return e.lock(0)
      })
    }
    var i = n(3),
      o = i.ajax,
      s = n(21);
    r.prototype.disable = function() {
      this.disabled = !0
    }, r.prototype.lock = function(t) {
      this.lockedUntil = Date.now() + t
    }, r.prototype.refresh = function() {
      var t = this;
      if (!(this.disabled || Date.now() < this.lockedUntil)) {
        this.lock(10);
        return o({
          method: "get",
          url: "https://app-router.leancloud.cn/2/route",
          query: {
            appId: this.AV.applicationId
          }
        }).then(function(e) {
          if (!t.disabled) {
            var n = e.ttl;
            if (!n) throw new Error("missing ttl");
            n *= 1e3;
            var r = {
              push: "https://" + e.push_server,
              stats: "https://" + e.stats_server,
              engine: "https://" + e.engine_server,
              api: "https://" + e.api_server
            };
            return t.AV._setServerURLs(r, !1), t.lock(n), s.setAsync("serverURLs", {
              serverURLs: r,
              lockedUntil: t.lockedUntil
            }, n)
          }
        }).catch(function(e) {
          console.warn("refresh server URLs failed: " + e.message), t.lock(600)
        })
      }
    }, t.exports = r
  }, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function(t) {
      var e = /\s+/,
        n = Array.prototype.slice;
      t.Events = {
        on: function(t, n, r) {
          var i, o, s, a, u;
          if (!n) return this;
          for (t = t.split(e), i = this._callbacks || (this._callbacks = {}), o = t.shift(); o;) u = i[o], s = u ? u.tail : {}, s.next = a = {}, s.context = r, s.callback = n, i[o] = {
            tail: a,
            next: u ? u.next : s
          }, o = t.shift();
          return this
        },
        off: function(t, n, i) {
          var o, s, a, u, c, l;
          if (s = this._callbacks) {
            if (!(t || n || i)) return delete this._callbacks, this;
            for (t = t ? t.split(e) : r.keys(s), o = t.shift(); o;)
              if (a = s[o], delete s[o], a && (n || i)) {
                for (u = a.tail, a = a.next; a !== u;) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(o, c, l), a = a.next;
                o = t.shift()
              }
            return this
          }
        },
        trigger: function(t) {
          var r, i, o, s, a, u, c;
          if (!(o = this._callbacks)) return this;
          for (u = o.all, t = t.split(e), c = n.call(arguments, 1), r = t.shift(); r;) {
            if (i = o[r])
              for (s = i.tail;
                (i = i.next) !== s;) i.callback.apply(i.context || this, c);
            if (i = u)
              for (s = i.tail, a = [r].concat(c);
                (i = i.next) !== s;) i.callback.apply(i.context || this, a);
            r = t.shift()
          }
          return this
        }
      }, t.Events.bind = t.Events.on, t.Events.unbind = t.Events.off
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(1);
    t.exports = function(t) {
      t.GeoPoint = function(e, n) {
        r.isArray(e) ? (t.GeoPoint._validate(e[0], e[1]), this.latitude = e[0], this.longitude = e[1]) : r.isObject(e) ? (t.GeoPoint._validate(e.latitude, e.longitude), this.latitude = e.latitude, this.longitude = e.longitude) : r.isNumber(e) && r.isNumber(n) ? (t.GeoPoint._validate(e, n), this.latitude = e, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
        var i = this;
        this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function() {
          return i._latitude
        }), this.__defineGetter__("longitude", function() {
          return i._longitude
        }), this.__defineSetter__("latitude", function(e) {
          t.GeoPoint._validate(e, i.longitude), i._latitude = e
        }), this.__defineSetter__("longitude", function(e) {
          t.GeoPoint._validate(i.latitude, e), i._longitude = e
        }))
      }, t.GeoPoint._validate = function(t, e) {
        if (t < -90) throw new Error("AV.GeoPoint latitude " + t + " < -90.0.");
        if (t > 90) throw new Error("AV.GeoPoint latitude " + t + " > 90.0.");
        if (e < -180) throw new Error("AV.GeoPoint longitude " + e + " < -180.0.");
        if (e > 180) throw new Error("AV.GeoPoint longitude " + e + " > 180.0.")
      }, t.GeoPoint.current = function() {
        return new i(function(e, n) {
          navigator.geolocation.getCurrentPosition(function(n) {
            e(new t.GeoPoint({
              latitude: n.coords.latitude,
              longitude: n.coords.longitude
            }))
          }, n)
        })
      }, r.extend(t.GeoPoint.prototype, {
        toJSON: function() {
          return t.GeoPoint._validate(this.latitude, this.longitude), {
            __type: "GeoPoint",
            latitude: this.latitude,
            longitude: this.longitude
          }
        },
        radiansTo: function(t) {
          var e = Math.PI / 180,
            n = this.latitude * e,
            r = this.longitude * e,
            i = t.latitude * e,
            o = t.longitude * e,
            s = n - i,
            a = r - o,
            u = Math.sin(s / 2),
            c = Math.sin(a / 2),
            l = u * u + Math.cos(n) * Math.cos(i) * c * c;
          return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l))
        },
        kilometersTo: function(t) {
          return 6371 * this.radiansTo(t)
        },
        milesTo: function(t) {
          return 3958.8 * this.radiansTo(t)
        }
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function(t) {
      t.ACL = function(e) {
        var n = this;
        if (n.permissionsById = {}, r.isObject(e))
          if (e instanceof t.User) n.setReadAccess(e, !0), n.setWriteAccess(e, !0);
          else {
            if (r.isFunction(e)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
            t._objectEach(e, function(e, i) {
              if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
              n.permissionsById[i] = {}, t._objectEach(e, function(t, e) {
                if ("read" !== e && "write" !== e) throw new Error("Tried to create an ACL with an invalid permission type.");
                if (!r.isBoolean(t)) throw new Error("Tried to create an ACL with an invalid permission value.");
                n.permissionsById[i][e] = t
              })
            })
          }
      }, t.ACL.prototype.toJSON = function() {
        return r.clone(this.permissionsById)
      }, t.ACL.prototype._setAccess = function(e, n, i) {
        if (n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");
        if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
        var o = this.permissionsById[n];
        if (!o) {
          if (!i) return;
          o = {}, this.permissionsById[n] = o
        }
        i ? this.permissionsById[n][e] = !0 : (delete o[e], r.isEmpty(o) && delete this.permissionsById[n])
      }, t.ACL.prototype._getAccess = function(e, n) {
        n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName());
        var r = this.permissionsById[n];
        return !!r && !!r[e]
      }, t.ACL.prototype.setReadAccess = function(t, e) {
        this._setAccess("read", t, e)
      }, t.ACL.prototype.getReadAccess = function(t) {
        return this._getAccess("read", t)
      }, t.ACL.prototype.setWriteAccess = function(t, e) {
        this._setAccess("write", t, e)
      }, t.ACL.prototype.getWriteAccess = function(t) {
        return this._getAccess("write", t)
      }, t.ACL.prototype.setPublicReadAccess = function(t) {
        this.setReadAccess("*", t)
      }, t.ACL.prototype.getPublicReadAccess = function() {
        return this.getReadAccess("*")
      }, t.ACL.prototype.setPublicWriteAccess = function(t) {
        this.setWriteAccess("*", t)
      }, t.ACL.prototype.getPublicWriteAccess = function() {
        return this.getWriteAccess("*")
      }, t.ACL.prototype.getRoleReadAccess = function(e) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getReadAccess("role:" + e);
        throw new Error("role must be a AV.Role or a String")
      }, t.ACL.prototype.getRoleWriteAccess = function(e) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getWriteAccess("role:" + e);
        throw new Error("role must be a AV.Role or a String")
      }, t.ACL.prototype.setRoleReadAccess = function(e, n) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setReadAccess("role:" + e, n);
        throw new Error("role must be a AV.Role or a String")
      }, t.ACL.prototype.setRoleWriteAccess = function(e, n) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setWriteAccess("role:" + e, n);
        throw new Error("role must be a AV.Role or a String")
      }
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function(t) {
      t.Op = function() {
        this._initialize.apply(this, arguments)
      }, r.extend(t.Op.prototype, {
        _initialize: function() {}
      }), r.extend(t.Op, {
        _extend: t._extend,
        _opDecoderMap: {},
        _registerDecoder: function(e, n) {
          t.Op._opDecoderMap[e] = n
        },
        _decode: function(e) {
          var n = t.Op._opDecoderMap[e.__op];
          return n ? n(e) : void 0
        }
      }), t.Op._registerDecoder("Batch", function(e) {
        var n = null;
        return t._arrayEach(e.ops, function(e) {
          e = t.Op._decode(e), n = e._mergeWithPrevious(n)
        }), n
      }), t.Op.Set = t.Op._extend({
        _initialize: function(t) {
          this._value = t
        },
        value: function() {
          return this._value
        },
        toJSON: function() {
          return t._encode(this.value())
        },
        _mergeWithPrevious: function(t) {
          return this
        },
        _estimate: function(t) {
          return this.value()
        }
      }), t.Op._UNSET = {}, t.Op.Unset = t.Op._extend({
        toJSON: function() {
          return {
            __op: "Delete"
          }
        },
        _mergeWithPrevious: function(t) {
          return this
        },
        _estimate: function(e) {
          return t.Op._UNSET
        }
      }), t.Op._registerDecoder("Delete", function(e) {
        return new t.Op.Unset
      }), t.Op.Increment = t.Op._extend({
        _initialize: function(t) {
          this._amount = t
        },
        amount: function() {
          return this._amount
        },
        toJSON: function() {
          return {
            __op: "Increment",
            amount: this._amount
          }
        },
        _mergeWithPrevious: function(e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(this.amount());
            if (e instanceof t.Op.Set) return new t.Op.Set(e.value() + this.amount());
            if (e instanceof t.Op.Increment) return new t.Op.Increment(this.amount() + e.amount());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t) {
          return t ? t + this.amount() : this.amount()
        }
      }), t.Op._registerDecoder("Increment", function(e) {
        return new t.Op.Increment(e.amount)
      }), t.Op.BitAnd = t.Op._extend({
        _initialize: function(t) {
          this._value = t
        },
        value: function() {
          return this._value
        },
        toJSON: function() {
          return {
            __op: "BitAnd",
            value: this.value()
          }
        },
        _mergeWithPrevious: function(e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(0);
            if (e instanceof t.Op.Set) return new t.Op.Set(e.value() & this.value());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t) {
          return t & this.value()
        }
      }), t.Op._registerDecoder("BitAnd", function(e) {
        return new t.Op.BitAnd(e.value)
      }), t.Op.BitOr = t.Op._extend({
        _initialize: function(t) {
          this._value = t
        },
        value: function() {
          return this._value
        },
        toJSON: function() {
          return {
            __op: "BitOr",
            value: this.value()
          }
        },
        _mergeWithPrevious: function(e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(this.value());
            if (e instanceof t.Op.Set) return new t.Op.Set(e.value() | this.value());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t) {
          return t | this.value()
        }
      }), t.Op._registerDecoder("BitOr", function(e) {
        return new t.Op.BitOr(e.value)
      }), t.Op.BitXor = t.Op._extend({
        _initialize: function(t) {
          this._value = t
        },
        value: function() {
          return this._value
        },
        toJSON: function() {
          return {
            __op: "BitXor",
            value: this.value()
          }
        },
        _mergeWithPrevious: function(e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(this.value());
            if (e instanceof t.Op.Set) return new t.Op.Set(e.value() ^ this.value());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t) {
          return t ^ this.value()
        }
      }), t.Op._registerDecoder("BitXor", function(e) {
        return new t.Op.BitXor(e.value)
      }), t.Op.Add = t.Op._extend({
        _initialize: function(t) {
          this._objects = t
        },
        objects: function() {
          return this._objects
        },
        toJSON: function() {
          return {
            __op: "Add",
            objects: t._encode(this.objects())
          }
        },
        _mergeWithPrevious: function(e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
            if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
            if (e instanceof t.Op.Add) return new t.Op.Add(e.objects().concat(this.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t) {
          return t ? t.concat(this.objects()) : r.clone(this.objects())
        }
      }), t.Op._registerDecoder("Add", function(e) {
        return new t.Op.Add(t._decode(e.objects))
      }), t.Op.AddUnique = t.Op._extend({
        _initialize: function(t) {
          this._objects = r.uniq(t)
        },
        objects: function() {
          return this._objects
        },
        toJSON: function() {
          return {
            __op: "AddUnique",
            objects: t._encode(this.objects())
          }
        },
        _mergeWithPrevious: function(e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
            if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
            if (e instanceof t.Op.AddUnique) return new t.Op.AddUnique(this._estimate(e.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(e) {
          if (e) {
            var n = r.clone(e);
            return t._arrayEach(this.objects(), function(e) {
              if (e instanceof t.Object && e.id) {
                var i = r.find(n, function(n) {
                  return n instanceof t.Object && n.id === e.id
                });
                if (i) {
                  var o = r.indexOf(n, i);
                  n[o] = e
                } else n.push(e)
              } else r.contains(n, e) || n.push(e)
            }), n
          }
          return r.clone(this.objects())
        }
      }), t.Op._registerDecoder("AddUnique", function(e) {
        return new t.Op.AddUnique(t._decode(e.objects))
      }), t.Op.Remove = t.Op._extend({
        _initialize: function(t) {
          this._objects = r.uniq(t)
        },
        objects: function() {
          return this._objects
        },
        toJSON: function() {
          return {
            __op: "Remove",
            objects: t._encode(this.objects())
          }
        },
        _mergeWithPrevious: function(e) {
          if (e) {
            if (e instanceof t.Op.Unset) return e;
            if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
            if (e instanceof t.Op.Remove) return new t.Op.Remove(r.union(e.objects(), this.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(e) {
          if (e) {
            var n = r.difference(e, this.objects());
            return t._arrayEach(this.objects(), function(e) {
              e instanceof t.Object && e.id && (n = r.reject(n, function(n) {
                return n instanceof t.Object && n.id === e.id
              }))
            }), n
          }
          return []
        }
      }), t.Op._registerDecoder("Remove", function(e) {
        return new t.Op.Remove(t._decode(e.objects))
      }), t.Op.Relation = t.Op._extend({
        _initialize: function(e, n) {
          this._targetClassName = null;
          var i = this,
            o = function(e) {
              if (e instanceof t.Object) {
                if (!e.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                if (i._targetClassName || (i._targetClassName = e.className), i._targetClassName !== e.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + e.className + ".");
                return e.id
              }
              return e
            };
          this.relationsToAdd = r.uniq(r.map(e, o)), this.relationsToRemove = r.uniq(r.map(n, o))
        },
        added: function() {
          var e = this;
          return r.map(this.relationsToAdd, function(n) {
            var r = t.Object._create(e._targetClassName);
            return r.id = n, r
          })
        },
        removed: function() {
          var e = this;
          return r.map(this.relationsToRemove, function(n) {
            var r = t.Object._create(e._targetClassName);
            return r.id = n, r
          })
        },
        toJSON: function() {
          var t = null,
            e = null,
            n = this,
            i = function(t) {
              return {
                __type: "Pointer",
                className: n._targetClassName,
                objectId: t
              }
            },
            o = null;
          return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), t = {
            __op: "AddRelation",
            objects: o
          }), this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), e = {
            __op: "RemoveRelation",
            objects: o
          }), t && e ? {
            __op: "Batch",
            ops: [t, e]
          } : t || e || {}
        },
        _mergeWithPrevious: function(e) {
          if (e) {
            if (e instanceof t.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
            if (e instanceof t.Op.Relation) {
              if (e._targetClassName && e._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + e._targetClassName + ", but " + this._targetClassName + " was passed in.");
              var n = r.union(r.difference(e.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                i = r.union(r.difference(e.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                o = new t.Op.Relation(n, i);
              return o._targetClassName = this._targetClassName, o
            }
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(e, n, r) {
          if (e) {
            if (e instanceof t.Relation) {
              if (this._targetClassName)
                if (e.targetClassName) {
                  if (e.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in.")
                } else e.targetClassName = this._targetClassName;
              return e
            }
            throw new Error("Op is invalid after previous op.")
          }
          new t.Relation(n, r).targetClassName = this._targetClassName
        }
      }), t.Op._registerDecoder("AddRelation", function(e) {
        return new t.Op.Relation(t._decode(e.objects), [])
      }), t.Op._registerDecoder("RemoveRelation", function(e) {
        return new t.Op.Relation([], t._decode(e.objects))
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function(t) {
      t.Relation = function(t, e) {
        if (!r.isString(e)) throw new TypeError("key must be a string");
        this.parent = t, this.key = e, this.targetClassName = null
      }, t.Relation.reverseQuery = function(e, n, r) {
        var i = new t.Query(e);
        return i.equalTo(n, r._toPointer()), i
      }, r.extend(t.Relation.prototype, {
        _ensureParentAndKey: function(t, e) {
          if (this.parent = this.parent || t, this.key = this.key || e, this.parent !== t) throw new Error("Internal Error. Relation retrieved from two different Objects.");
          if (this.key !== e) throw new Error("Internal Error. Relation retrieved from two different keys.")
        },
        add: function(e) {
          r.isArray(e) || (e = [e]);
          var n = new t.Op.Relation(e, []);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName
        },
        remove: function(e) {
          r.isArray(e) || (e = [e]);
          var n = new t.Op.Relation([], e);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName
        },
        toJSON: function() {
          return {
            __type: "Relation",
            className: this.targetClassName
          }
        },
        query: function() {
          var e, n;
          return this.targetClassName ? (e = t.Object._getSubclass(this.targetClassName), n = new t.Query(e)) : (e = t.Object._getSubclass(this.parent.className), n = new t.Query(e), n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n
        }
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(54),
      o = n(55),
      s = n(56),
      a = n(4),
      u = n(2)._request,
      c = n(1),
      l = n(3),
      h = l.tap,
      f = l.transformFetchOptions,
      d = n(7)("leancloud:file"),
      p = n(60);
    t.exports = function(t) {
      var e = function() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        },
        n = function(t) {
          return r.isString(t) ? t.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] : ""
        },
        l = function(t) {
          if (t < 26) return String.fromCharCode(65 + t);
          if (t < 52) return String.fromCharCode(t - 26 + 97);
          if (t < 62) return String.fromCharCode(t - 52 + 48);
          if (62 === t) return "+";
          if (63 === t) return "/";
          throw new Error("Tried to encode large digit " + t + " in base64.")
        },
        _ = function(t) {
          var e = [];
          return e.length = Math.ceil(t.length / 3), r.times(e.length, function(n) {
            var r = t[3 * n],
              i = t[3 * n + 1] || 0,
              o = t[3 * n + 2] || 0,
              s = 3 * n + 1 < t.length,
              a = 3 * n + 2 < t.length;
            e[n] = [l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), s ? l(i << 2 & 60 | o >> 6 & 3) : "=", a ? l(63 & o) : "="].join("")
          }), e.join("")
        };
      t.File = function(e, i, o) {
        if (this.attributes = {
            name: e,
            url: "",
            metaData: {},
            base64: ""
          }, r.isString(i)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
        r.isArray(i) && (this.attributes.metaData.size = i.length, i = {
          base64: _(i)
        }), this._extName = "", this._data = i, this._uploadHeaders = {}, i && i.blob && (this._extName = n(i.blob.uri)), "undefined" != typeof Blob && i instanceof Blob && (i.size && (this.attributes.metaData.size = i.size), i.name && (this._extName = n(i.name)));
        var s = void 0;
        if (i && i.owner) s = i.owner;
        else if (!t._config.disableCurrentUser) try {
          s = t.User.current()
        } catch (t) {
          if ("SYNC_API_NOT_AVAILABLE" !== t.code) throw t
        }
        this.attributes.metaData.owner = s ? s.id : "unknown", this.set("mime_type", o)
      }, t.File.withURL = function(e, n, r, i) {
        if (!e || !n) throw new Error("Please provide file name and url");
        var o = new t.File(e, null, i);
        if (r)
          for (var s in r) o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
        return o.attributes.url = n, o.attributes.metaData.__source = "external", o
      }, t.File.createWithoutData = function(e) {
        var n = new t.File;
        return n.id = e, n
      }, r.extend(t.File.prototype, {
        className: "_File",
        _toFullJSON: function(e) {
          var n = this,
            i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            o = r.clone(this.attributes);
          return t._objectEach(o, function(n, r) {
            o[r] = t._encode(n, e, void 0, i)
          }), t._objectEach(this._operations, function(t, e) {
            o[e] = t
          }), r.has(this, "id") && (o.objectId = this.id), r(["createdAt", "updatedAt"]).each(function(t) {
            if (r.has(n, t)) {
              var e = n[t];
              o[t] = r.isDate(e) ? e.toJSON() : e
            }
          }), i && (o.__type = "File"), o
        },
        toFullJSON: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return this._toFullJSON(t)
        },
        toJSON: function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this];
          return this._toFullJSON(n, !1)
        },
        _toPointer: function() {
          return {
            __type: "Pointer",
            className: this.className,
            objectId: this.id
          }
        },
        getACL: function() {
          return this._acl
        },
        setACL: function(e) {
          if (!(e instanceof t.ACL)) return new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.");
          this._acl = e
        },
        name: function() {
          return this.get("name")
        },
        url: function() {
          return this.get("url")
        },
        get: function(t) {
          switch (t) {
            case "objectId":
              return this.id;
            case "url":
            case "name":
            case "mime_type":
            case "metaData":
            case "createdAt":
            case "updatedAt":
              return this.attributes[t];
            default:
              return this.attributes.metaData[t]
          }
        },
        set: function() {
          for (var t = this, e = function(e, n) {
              switch (e) {
                case "name":
                case "url":
                case "mime_type":
                case "base64":
                case "metaData":
                  t.attributes[e] = n;
                  break;
                default:
                  t.attributes.metaData[e] = n
              }
            }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
          switch (r.length) {
            case 1:
              for (var o in r[0]) e(o, r[0][o]);
              break;
            case 2:
              e(r[0], r[1])
          }
        },
        setUploadHeader: function(t, e) {
          return this._uploadHeaders[t] = e, this
        },
        metaData: function(t, e) {
          return t && e ? (this.attributes.metaData[t] = e, this) : t && !e ? this.attributes.metaData[t] : this.attributes.metaData
        },
        thumbnailURL: function(t, e, n, r, i) {
          var o = this.attributes.url;
          if (!o) throw new Error("Invalid url.");
          if (!t || !e || t <= 0 || e <= 0) throw new Error("Invalid width or height value.");
          if (n = n || 100, r = r || !0, n <= 0 || n > 100) throw new Error("Invalid quality value.");
          return i = i || "png", o + "?imageView/" + (r ? 2 : 1) + "/w/" + t + "/h/" + e + "/q/" + n + "/format/" + i
        },
        size: function() {
          return this.metaData().size
        },
        ownerId: function() {
          return this.metaData().owner
        },
        destroy: function(t) {
          return this.id ? u("files", null, this.id, "DELETE", null, t) : c.reject(new Error("The file id does not eixst."))
        },
        _fileToken: function(t, r) {
          var i = this.attributes.name,
            o = n(i);
          !o && this._extName && (i += this._extName, o = this._extName);
          var s = e() + e() + e() + e() + e() + o,
            a = {
              key: s,
              name: i,
              ACL: this._acl,
              mime_type: t,
              metaData: this.attributes.metaData
            };
          return this._qiniu_key = s, u("fileTokens", null, null, "POST", a, r)
        },
        save: function() {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
          if (!this._previousSave)
            if (this._data) {
              var n = this.get("mime_type");
              this._previousSave = this._fileToken(n, e).then(function(a) {
                return a.mime_type && (n = a.mime_type, t.set("mime_type", n)), t._token = a.token, c.resolve().then(function() {
                  var e = t._data;
                  if (e && e.base64) return p(e.base64, n);
                  if (e && e.blob) return !e.blob.type && n && (e.blob.type = n), e.blob.name || (e.blob.name = t.get("name")), e.blob;
                  if ("undefined" != typeof Blob && e instanceof Blob) return e;
                  throw new TypeError("malformed file data")
                }).then(function(n) {
                  var u = r.extend({}, e);
                  switch (e.onprogress && (u.onprogress = function(t) {
                    if ("download" !== t.direction) return e.onprogress(t)
                  }), a.provider) {
                    case "s3":
                      return s(a, n, t, u);
                    case "qcloud":
                      return i(a, n, t, u);
                    case "qiniu":
                    default:
                      return o(a, n, t, u)
                  }
                }).then(h(function() {
                  return t._callback(!0)
                }), function(e) {
                  throw t._callback(!1), e
                })
              })
            } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
            var a = {
              name: this.attributes.name,
              ACL: this._acl,
              metaData: this.attributes.metaData,
              mime_type: this.mimeType,
              url: this.attributes.url
            };
            this._previousSave = u("files", this.attributes.name, null, "post", a, e).then(function(e) {
              return t.attributes.name = e.name, t.attributes.url = e.url, t.id = e.objectId, e.size && (t.attributes.metaData.size = e.size), t
            })
          }
          return this._previousSave
        },
        _callback: function(t) {
          u("fileCallback", null, null, "post", {
            token: this._token,
            result: t
          }).catch(d), delete this._token, delete this._data
        },
        fetch: function(t, e) {
          return u("files", null, this.id, "GET", f(t), e).then(this._finishFetch.bind(this))
        },
        _finishFetch: function(e) {
          var n = t.Object.prototype.parse(e);
          return n.attributes = {
            name: n.name,
            url: n.url,
            mime_type: n.mime_type,
            bucket: n.bucket
          }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, r.extend(this, n), this
        }
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(8),
      i = n(7)("cos"),
      o = n(1);
    t.exports = function(t, e, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId;
      var a = t.upload_url + "?sign=" + encodeURIComponent(t.token);
      return new o(function(t, o) {
        var u = r("POST", a).set(n._uploadHeaders).attach("fileContent", e, n.attributes.name).field("op", "upload");
        s.onprogress && u.on("progress", s.onprogress), u.end(function(e, r) {
          if (r && i(r.status, r.body, r.text), e) return r && (e.statusCode = r.status, e.responseText = r.text, e.response = r.body), o(e);
          t(n)
        })
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(8),
      i = n(1),
      o = n(7)("qiniu");
    t.exports = function(t, e, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId;
      var a = t.token,
        u = t.upload_url || "https://upload.qiniup.com";
      return new i(function(t, i) {
        var c = r("POST", u).set(n._uploadHeaders).attach("file", e, n.attributes.name).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
        s.onprogress && c.on("progress", s.onprogress), c.end(function(e, r) {
          if (r && o(r.status, r.body, r.text), e) return r && (e.statusCode = r.status, e.responseText = r.text, e.response = r.body), i(e);
          t(n)
        })
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(8),
      i = n(1),
      o = function(t, e) {
        return e && (t.statusCode = e.status, t.responseText = e.text, t.response = e.body), t
      };
    t.exports = function(t, e, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId, new i(function(i, a) {
        var u = r("PUT", t.upload_url).set(Object.assign({
          "Content-Type": n.get("mime_type"),
          "Cache-Control": "public, max-age=31536000"
        }, n._uploadHeaders));
        s.onprogress && u.on("progress", s.onprogress), u.on("response", function(t) {
          if (t.ok) return i(n);
          a(o(t.error, t))
        }), u.on("error", function(t, e) {
          return a(o(t, e))
        }), u.send(e).end()
      })
    }
  }, function(t, e, n) {
    ! function() {
      var e = n(58),
        r = n(22).utf8,
        i = n(59),
        o = n(22).bin,
        s = function(t, n) {
          t.constructor == String ? t = n && "binary" === n.encoding ? o.stringToBytes(t) : r.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
          for (var a = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, l = -271733879, h = -1732584194, f = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
          a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;
          for (var p = s._ff, _ = s._gg, v = s._hh, y = s._ii, d = 0; d < a.length; d += 16) {
            var m = c,
              g = l,
              b = h,
              w = f;
            c = p(c, l, h, f, a[d + 0], 7, -680876936), f = p(f, c, l, h, a[d + 1], 12, -389564586), h = p(h, f, c, l, a[d + 2], 17, 606105819), l = p(l, h, f, c, a[d + 3], 22, -1044525330), c = p(c, l, h, f, a[d + 4], 7, -176418897), f = p(f, c, l, h, a[d + 5], 12, 1200080426), h = p(h, f, c, l, a[d + 6], 17, -1473231341), l = p(l, h, f, c, a[d + 7], 22, -45705983), c = p(c, l, h, f, a[d + 8], 7, 1770035416), f = p(f, c, l, h, a[d + 9], 12, -1958414417), h = p(h, f, c, l, a[d + 10], 17, -42063), l = p(l, h, f, c, a[d + 11], 22, -1990404162), c = p(c, l, h, f, a[d + 12], 7, 1804603682), f = p(f, c, l, h, a[d + 13], 12, -40341101), h = p(h, f, c, l, a[d + 14], 17, -1502002290), l = p(l, h, f, c, a[d + 15], 22, 1236535329), c = _(c, l, h, f, a[d + 1], 5, -165796510), f = _(f, c, l, h, a[d + 6], 9, -1069501632), h = _(h, f, c, l, a[d + 11], 14, 643717713), l = _(l, h, f, c, a[d + 0], 20, -373897302), c = _(c, l, h, f, a[d + 5], 5, -701558691), f = _(f, c, l, h, a[d + 10], 9, 38016083), h = _(h, f, c, l, a[d + 15], 14, -660478335), l = _(l, h, f, c, a[d + 4], 20, -405537848), c = _(c, l, h, f, a[d + 9], 5, 568446438), f = _(f, c, l, h, a[d + 14], 9, -1019803690), h = _(h, f, c, l, a[d + 3], 14, -187363961), l = _(l, h, f, c, a[d + 8], 20, 1163531501), c = _(c, l, h, f, a[d + 13], 5, -1444681467), f = _(f, c, l, h, a[d + 2], 9, -51403784), h = _(h, f, c, l, a[d + 7], 14, 1735328473), l = _(l, h, f, c, a[d + 12], 20, -1926607734), c = v(c, l, h, f, a[d + 5], 4, -378558), f = v(f, c, l, h, a[d + 8], 11, -2022574463), h = v(h, f, c, l, a[d + 11], 16, 1839030562), l = v(l, h, f, c, a[d + 14], 23, -35309556), c = v(c, l, h, f, a[d + 1], 4, -1530992060), f = v(f, c, l, h, a[d + 4], 11, 1272893353), h = v(h, f, c, l, a[d + 7], 16, -155497632), l = v(l, h, f, c, a[d + 10], 23, -1094730640), c = v(c, l, h, f, a[d + 13], 4, 681279174), f = v(f, c, l, h, a[d + 0], 11, -358537222), h = v(h, f, c, l, a[d + 3], 16, -722521979), l = v(l, h, f, c, a[d + 6], 23, 76029189), c = v(c, l, h, f, a[d + 9], 4, -640364487), f = v(f, c, l, h, a[d + 12], 11, -421815835), h = v(h, f, c, l, a[d + 15], 16, 530742520), l = v(l, h, f, c, a[d + 2], 23, -995338651), c = y(c, l, h, f, a[d + 0], 6, -198630844), f = y(f, c, l, h, a[d + 7], 10, 1126891415), h = y(h, f, c, l, a[d + 14], 15, -1416354905), l = y(l, h, f, c, a[d + 5], 21, -57434055), c = y(c, l, h, f, a[d + 12], 6, 1700485571), f = y(f, c, l, h, a[d + 3], 10, -1894986606), h = y(h, f, c, l, a[d + 10], 15, -1051523), l = y(l, h, f, c, a[d + 1], 21, -2054922799), c = y(c, l, h, f, a[d + 8], 6, 1873313359), f = y(f, c, l, h, a[d + 15], 10, -30611744), h = y(h, f, c, l, a[d + 6], 15, -1560198380), l = y(l, h, f, c, a[d + 13], 21, 1309151649), c = y(c, l, h, f, a[d + 4], 6, -145523070), f = y(f, c, l, h, a[d + 11], 10, -1120210379), h = y(h, f, c, l, a[d + 2], 15, 718787259), l = y(l, h, f, c, a[d + 9], 21, -343485551), c = c + m >>> 0, l = l + g >>> 0, h = h + b >>> 0, f = f + w >>> 0
          }
          return e.endian([c, l, h, f])
        };
      s._ff = function(t, e, n, r, i, o, s) {
        var a = t + (e & n | ~e & r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + e
      }, s._gg = function(t, e, n, r, i, o, s) {
        var a = t + (e & r | n & ~r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + e
      }, s._hh = function(t, e, n, r, i, o, s) {
        var a = t + (e ^ n ^ r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + e
      }, s._ii = function(t, e, n, r, i, o, s) {
        var a = t + (n ^ (e | ~r)) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + e
      }, s._blocksize = 16, s._digestsize = 16, t.exports = function(t, n) {
        if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
        var r = e.wordsToBytes(s(t, n));
        return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : e.bytesToHex(r)
      }
    }()
  }, function(t, e) {
    ! function() {
      var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        n = {
          rotl: function(t, e) {
            return t << e | t >>> 32 - e
          },
          rotr: function(t, e) {
            return t << 32 - e | t >>> e
          },
          endian: function(t) {
            if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
            for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
            return t
          },
          randomBytes: function(t) {
            for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
            return e
          },
          bytesToWords: function(t) {
            for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
            return e
          },
          wordsToBytes: function(t) {
            for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
            return e
          },
          bytesToHex: function(t) {
            for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));
            return e.join("")
          },
          hexToBytes: function(t) {
            for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
            return e
          },
          bytesToBase64: function(t) {
            for (var n = [], r = 0; r < t.length; r += 3)
              for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
            return n.join("")
          },
          base64ToBytes: function(t) {
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
            return n
          }
        };
      t.exports = n
    }()
  }, function(t, e) {
    function n(t) {
      return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }

    function r(t) {
      return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    t.exports = function(t) {
      return null != t && (n(t) || r(t) || !!t._isBuffer)
    }
  }, function(t, e, n) {
    "use strict";
    var r = function(t, e) {
      var n;
      t.indexOf("base64") < 0 ? n = atob(t) : t.split(",")[0].indexOf("base64") >= 0 ? (e = e || t.split(",")[0].split(":")[1].split(";")[0], n = atob(t.split(",")[1])) : n = unescape(t.split(",")[1]);
      for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
      return new Blob([r], {
        type: e
      })
    };
    t.exports = r
  }, function(t, e, n) {
    "use strict";

    function r(t, e) {
      return t && t[e] ? o.isFunction(t[e]) ? t[e]() : t[e] : null
    }
    var i = function() {
        function t(t, e) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
          } catch (t) {
            i = !0, o = t
          } finally {
            try {
              !r && a.return && a.return()
            } finally {
              if (i) throw o
            }
          }
          return n
        }
        return function(e, n) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return t(e, n);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(),
      o = n(0),
      s = n(4),
      a = n(1),
      u = n(2),
      c = u._request,
      l = n(3),
      h = l.isNullOrUndefined,
      f = l.ensureArray,
      d = l.transformFetchOptions,
      p = l.setValue,
      _ = l.findValue,
      v = l.isPlainObject,
      y = function t(e) {
        return o.isArray(e) ? e.map(t) : v(e) ? o.mapObject(e, t) : o.isObject(e) && e._toPointer ? e._toPointer() : e
      },
      m = ["objectId", "createdAt", "updatedAt"],
      g = function(t) {
        if (-1 !== m.indexOf(t)) throw new Error("key[" + t + "] is reserved")
      },
      b = function(t) {
        var e = o.find(t, function(t) {
          return t instanceof Error
        });
        if (!e) return t;
        var n = new s(e.code, e.message);
        throw n.results = t, n
      };
    t.exports = function(t) {
      t.Object = function(e, n) {
        if (o.isString(e)) return t.Object._create.apply(this, arguments);
        e = e || {}, n && n.parse && (e = this.parse(e), e = this._mergeMagicFields(e));
        var i = r(this, "defaults");
        i && (e = o.extend({}, i, e)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = o.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {
          silent: !0
        }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = o.clone(this.attributes), this.initialize.apply(this, arguments)
      }, t.Object.saveAll = function(e, n) {
        return t.Object._deepSaveAsync(e, null, n)
      }, t.Object.fetchAll = function(t, e) {
        return a.resolve().then(function() {
          return c("batch", null, null, "POST", {
            requests: o.map(t, function(t) {
              if (!t.className) throw new Error("object must have className to fetch");
              if (!t.id) throw new Error("object must have id to fetch");
              if (t.dirty()) throw new Error("object is modified but not saved");
              return {
                method: "GET",
                path: "/1.1/classes/" + t.className + "/" + t.id
              }
            })
          }, e)
        }).then(function(e) {
          var n = o.map(t, function(t, n) {
            if (e[n].success) {
              var r = t.parse(e[n].success);
              return t._cleanupUnsetKeys(r), t._finishFetch(r), t
            }
            return null === e[n].success ? new s(s.OBJECT_NOT_FOUND, "Object not found.") : new s(e[n].error.code, e[n].error.error)
          });
          return b(n)
        })
      }, o.extend(t.Object.prototype, t.Events, {
        _fetchWhenSave: !1,
        initialize: function() {},
        fetchWhenSave: function(t) {
          if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !o.isBoolean(t)) throw new Error("Expect boolean value for fetchWhenSave");
          this._fetchWhenSave = t
        },
        getObjectId: function() {
          return this.id
        },
        getCreatedAt: function() {
          return this.createdAt || this.get("createdAt")
        },
        getUpdatedAt: function() {
          return this.updatedAt || this.get("updatedAt")
        },
        toJSON: function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return this._toFullJSON(n, !1)
        },
        toFullJSON: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return this._toFullJSON(t)
        },
        _toFullJSON: function(e) {
          var n = this,
            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = o.clone(this.attributes);
          if (o.isArray(e)) var s = e.concat(this);
          return t._objectEach(i, function(e, n) {
            i[n] = t._encode(e, s, void 0, r)
          }), t._objectEach(this._operations, function(t, e) {
            i[e] = t
          }), o.has(this, "id") && (i.objectId = this.id), o(["createdAt", "updatedAt"]).each(function(t) {
            if (o.has(n, t)) {
              var e = n[t];
              i[t] = o.isDate(e) ? e.toJSON() : e
            }
          }), r && (i.__type = "Object", o.isArray(e) && e.length && (i.__type = "Pointer"), i.className = this.className), i
        },
        _refreshCache: function() {
          var e = this;
          e._refreshingCache || (e._refreshingCache = !0, t._objectEach(this.attributes, function(n, r) {
            n instanceof t.Object ? n._refreshCache() : o.isObject(n) && e._resetCacheForKey(r) && e.set(r, new t.Op.Set(n), {
              silent: !0
            })
          }), delete e._refreshingCache)
        },
        dirty: function(t) {
          this._refreshCache();
          var e = o.last(this._opSetQueue);
          return t ? !!e[t] : !this.id || o.keys(e).length > 0
        },
        _toPointer: function() {
          return {
            __type: "Pointer",
            className: this.className,
            objectId: this.id
          }
        },
        get: function(t) {
          switch (t) {
            case "objectId":
              return this.id;
            case "createdAt":
            case "updatedAt":
              return this[t];
            default:
              return this.attributes[t]
          }
        },
        relation: function(e) {
          var n = this.get(e);
          if (n) {
            if (!(n instanceof t.Relation)) throw new Error("Called relation() on non-relation field " + e);
            return n._ensureParentAndKey(this, e), n
          }
          return new t.Relation(this, e)
        },
        escape: function(t) {
          var e = this._escapedAttributes[t];
          if (e) return e;
          var n, r = this.attributes[t];
          return n = h(r) ? "" : o.escape(r.toString()), this._escapedAttributes[t] = n, n
        },
        has: function(t) {
          return !h(this.attributes[t])
        },
        _mergeMagicFields: function(e) {
          var n = this,
            r = ["objectId", "createdAt", "updatedAt"];
          return t._arrayEach(r, function(r) {
            e[r] && ("objectId" === r ? n.id = e[r] : "createdAt" !== r && "updatedAt" !== r || o.isDate(e[r]) ? n[r] = e[r] : n[r] = t._parseDate(e[r]), delete e[r])
          }), e
        },
        _startSave: function() {
          this._opSetQueue.push({})
        },
        _cancelSave: function() {
          var e = o.first(this._opSetQueue);
          this._opSetQueue = o.rest(this._opSetQueue);
          var n = o.first(this._opSetQueue);
          t._objectEach(e, function(t, r) {
            var i = e[r],
              o = n[r];
            i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i)
          }), this._saving = this._saving - 1
        },
        _finishSave: function(e) {
          var n = {};
          t._traverse(this.attributes, function(e) {
            e instanceof t.Object && e.id && e._hasData && (n[e.id] = e)
          });
          var r = o.first(this._opSetQueue);
          this._opSetQueue = o.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(e);
          var i = this;
          t._objectEach(e, function(e, r) {
            i._serverData[r] = t._decode(e, r);
            var o = t._traverse(i._serverData[r], function(e) {
              if (e instanceof t.Object && n[e.id]) return n[e.id]
            });
            o && (i._serverData[r] = o)
          }), this._rebuildAllEstimatedData();
          var s = this._opSetQueue.map(o.clone);
          this._refreshCache(), this._opSetQueue = s, this._saving = this._saving - 1
        },
        _finishFetch: function(e, n) {
          this._opSetQueue = [{}], this._mergeMagicFields(e);
          var r = this;
          t._objectEach(e, function(e, n) {
            r._serverData[n] = t._decode(e, n)
          }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n
        },
        _applyOpSet: function(e, n) {
          var r = this;
          t._objectEach(e, function(e, o) {
            var s = _(n, o),
              a = i(s, 3),
              u = a[0],
              c = a[1],
              l = a[2];
            p(n, o, e._estimate(u, r, o)), c && c[l] === t.Op._UNSET && delete c[l]
          })
        },
        _resetCacheForKey: function(e) {
          var n = this.attributes[e];
          if (o.isObject(n) && !(n instanceof t.Object) && !(n instanceof t.File)) {
            var r = JSON.stringify(y(n));
            if (this._hashedJSON[e] !== r) {
              var i = !!this._hashedJSON[e];
              return this._hashedJSON[e] = r, i
            }
          }
          return !1
        },
        _rebuildEstimatedDataForKey: function(e) {
          var n = this;
          delete this.attributes[e], this._serverData[e] && (this.attributes[e] = this._serverData[e]), t._arrayEach(this._opSetQueue, function(r) {
            var o = r[e];
            if (o) {
              var s = _(n.attributes, e),
                a = i(s, 4),
                u = a[0],
                c = a[1],
                l = a[2],
                h = a[3];
              p(n.attributes, e, o._estimate(u, n, e)), c && c[l] === t.Op._UNSET && delete c[l], n._resetCacheForKey(h)
            }
          })
        },
        _rebuildAllEstimatedData: function() {
          var e = this,
            n = o.clone(this.attributes);
          this.attributes = o.clone(this._serverData), t._arrayEach(this._opSetQueue, function(n) {
            e._applyOpSet(n, e.attributes), t._objectEach(n, function(t, n) {
              e._resetCacheForKey(n)
            })
          }), t._objectEach(n, function(t, n) {
            e.attributes[n] !== t && e.trigger("change:" + n, e, e.attributes[n], {})
          }), t._objectEach(this.attributes, function(t, r) {
            o.has(n, r) || e.trigger("change:" + r, e, t, {})
          })
        },
        set: function(e, n, r) {
          var i;
          if (o.isObject(e) || h(e) ? (i = o.mapObject(e, function(e, n) {
              return g(n), t._decode(e, n)
            }), r = n) : (i = {}, g(e), i[e] = t._decode(n, e)), r = r || {}, !i) return this;
          i instanceof t.Object && (i = i.attributes), r.unset && t._objectEach(i, function(e, n) {
            i[n] = new t.Op.Unset
          });
          var s = o.clone(i),
            a = this;
          t._objectEach(s, function(e, n) {
            e instanceof t.Op && (s[n] = e._estimate(a.attributes[n], a, n), s[n] === t.Op._UNSET && delete s[n])
          }), this._validate(i, r), r.changes = {};
          var u = this._escapedAttributes;
          this._previousAttributes;
          return t._arrayEach(o.keys(i), function(e) {
            var n = i[e];
            n instanceof t.Relation && (n.parent = a), n instanceof t.Op || (n = new t.Op.Set(n));
            var s = !0;
            n instanceof t.Op.Set && o.isEqual(a.attributes[e], n.value) && (s = !1), s && (delete u[e], r.silent ? a._silent[e] = !0 : r.changes[e] = !0);
            var c = o.last(a._opSetQueue);
            c[e] = n._mergeWithPrevious(c[e]), a._rebuildEstimatedDataForKey(e), s ? (a.changed[e] = a.attributes[e], r.silent || (a._pending[e] = !0)) : (delete a.changed[e], delete a._pending[e])
          }), r.silent || this.change(r), this
        },
        unset: function(t, e) {
          return e = e || {}, e.unset = !0, this.set(t, null, e)
        },
        increment: function(e, n) {
          return (o.isUndefined(n) || o.isNull(n)) && (n = 1), this.set(e, new t.Op.Increment(n))
        },
        add: function(e, n) {
          return this.set(e, new t.Op.Add(f(n)))
        },
        addUnique: function(e, n) {
          return this.set(e, new t.Op.AddUnique(f(n)))
        },
        remove: function(e, n) {
          return this.set(e, new t.Op.Remove(f(n)))
        },
        bitAnd: function(e, n) {
          return this.set(e, new t.Op.BitAnd(n))
        },
        bitOr: function(e, n) {
          return this.set(e, new t.Op.BitOr(n))
        },
        bitXor: function(e, n) {
          return this.set(e, new t.Op.BitXor(n))
        },
        op: function(t) {
          return o.last(this._opSetQueue)[t]
        },
        clear: function(t) {
          t = t || {}, t.unset = !0;
          var e = o.extend(this.attributes, this._operations);
          return this.set(e, t)
        },
        _getSaveJSON: function() {
          var e = o.clone(o.first(this._opSetQueue));
          return t._objectEach(e, function(t, n) {
            e[n] = t.toJSON()
          }), e
        },
        _canBeSerialized: function() {
          return t.Object._canBeSerializedAsValue(this.attributes)
        },
        fetch: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments[1],
            n = this;
          return c("classes", this.className, this.id, "GET", d(t), e).then(function(e) {
            var r = n.parse(e);
            return t.keys || n._cleanupUnsetKeys(r), n._finishFetch(r, !0), n
          })
        },
        _cleanupUnsetKeys: function(e) {
          var n = this;
          t._objectEach(this._serverData, function(t, r) {
            void 0 === e[r] && delete n._serverData[r]
          })
        },
        save: function(e, n, r) {
          var i, s, u;
          o.isObject(e) || h(e) ? (i = e, u = n) : (i = {}, i[e] = n, u = r), u = o.clone(u) || {}, u.wait && (s = o.clone(this.attributes));
          var l = o.clone(u) || {};
          l.wait && (l.silent = !0), i && this.set(i, l);
          var f = this,
            d = [],
            p = [];
          return t.Object._findUnsavedChildren(f, d, p), d.length + p.length > 1 ? t.Object._deepSaveAsync(this, f, u) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || a.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function(t) {}).then(function() {
            var t = f.id ? "PUT" : "POST",
              e = f._getSaveJSON(),
              n = {};
            if ((f._fetchWhenSave || u.fetchWhenSave) && (n.new = "true"), u._failOnNotExist && (n.failOnNotExist = "true"), u.query) {
              var r;
              if ("function" == typeof u.query.toJSON && (r = u.query.toJSON()) && (n.where = r.where), !n.where) {
                throw new Error("options.query is not an AV.Query")
              }
            }
            o.extend(e, f._flags);
            var a = "classes",
              h = f.className;
            "_User" !== f.className || f.id || (a = "users", h = null);
            var d = u._makeRequest || c,
              p = d(a, h, f.id, t, e, u, n);
            return p = p.then(function(t) {
              var e = f.parse(t);
              return u.wait && (e = o.extend(i || {}, e)), f._finishSave(e), u.wait && f.set(s, l), f
            }, function(t) {
              throw f._cancelSave(), t
            })
          }), this._allPreviousSaves)
        },
        destroy: function(t) {
          t = t || {};
          var e = this,
            n = function() {
              e.trigger("destroy", e, e.collection, t)
            };
          return this.id ? (t.wait || n(), c("classes", this.className, this.id, "DELETE", this._flags, t).then(function() {
            return t.wait && n(), e
          })) : n()
        },
        parse: function(e) {
          var n = o.clone(e);
          return o(["createdAt", "updatedAt"]).each(function(e) {
            n[e] && (n[e] = t._parseDate(n[e]))
          }), n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt), n
        },
        clone: function() {
          return new this.constructor(this.attributes)
        },
        isNew: function() {
          return !this.id
        },
        change: function(e) {
          e = e || {};
          var n = this._changing;
          this._changing = !0;
          var r = this;
          t._objectEach(this._silent, function(t) {
            r._pending[t] = !0
          });
          var i = o.extend({}, e.changes, this._silent);
          if (this._silent = {}, t._objectEach(i, function(t, n) {
              r.trigger("change:" + n, r, r.get(n), e)
            }), n) return this;
          for (var s = function(t, e) {
              r._pending[e] || r._silent[e] || delete r.changed[e]
            }; !o.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, e), t._objectEach(this.changed, s), r._previousAttributes = o.clone(this.attributes);
          return this._changing = !1, this
        },
        hasChanged: function(t) {
          return arguments.length ? this.changed && o.has(this.changed, t) : !o.isEmpty(this.changed)
        },
        changedAttributes: function(e) {
          if (!e) return !!this.hasChanged() && o.clone(this.changed);
          var n = {},
            r = this._previousAttributes;
          return t._objectEach(e, function(t, e) {
            o.isEqual(r[e], t) || (n[e] = t)
          }), n
        },
        previous: function(t) {
          return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null
        },
        previousAttributes: function() {
          return o.clone(this._previousAttributes)
        },
        isValid: function() {
          try {
            this.validate(this.attributes)
          } catch (t) {
            return !1
          }
          return !0
        },
        validate: function(e) {
          if (o.has(e, "ACL") && !(e.ACL instanceof t.ACL)) throw new s(s.OTHER_CAUSE, "ACL must be a AV.ACL.")
        },
        _validate: function(t, e) {
          !e.silent && this.validate && (t = o.extend({}, this.attributes, t), this.validate(t))
        },
        getACL: function() {
          return this.get("ACL")
        },
        setACL: function(t, e) {
          return this.set("ACL", t, e)
        },
        disableBeforeHook: function() {
          this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete")
        },
        disableAfterHook: function() {
          this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete")
        },
        ignoreHook: function(e) {
          o.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], e) || console.trace("Unsupported hookName: " + e), t.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(e)
        }
      }), t.Object.createWithoutData = function(e, n, r) {
        var i = new t.Object(e);
        return i.id = n, i._hasData = r, i
      }, t.Object.destroyAll = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t || 0 === t.length) return a.resolve();
        var n = o.groupBy(t, function(t) {
            return JSON.stringify({
              className: t.className,
              flags: t._flags
            })
          }),
          r = {
            requests: o.map(n, function(t) {
              var e = o.map(t, "id").join(",");
              return {
                method: "DELETE",
                path: "/1.1/classes/" + t[0].className + "/" + e,
                body: t[0]._flags
              }
            })
          };
        return c("batch", null, null, "POST", r, e).then(function(t) {
          var e = o.find(t, function(t) {
            return !t.success
          });
          if (e) throw new s(e.error.code, e.error.error)
        })
      }, t.Object._getSubclass = function(e) {
        if (!o.isString(e)) throw new Error("AV.Object._getSubclass requires a string argument.");
        var n = t.Object._classMap[e];
        return n || (n = t.Object.extend(e), t.Object._classMap[e] = n), n
      }, t.Object._create = function(e, n, r) {
        return new(t.Object._getSubclass(e))(n, r)
      }, t.Object._classMap = {}, t.Object._extend = t._extend, t.Object.new = function(e, n) {
        return new t.Object(e, n)
      }, t.Object.extend = function(e, n, r) {
        if (!o.isString(e)) {
          if (e && o.has(e, "className")) return t.Object.extend(e.className, e, n);
          throw new Error("AV.Object.extend's first argument should be the className.")
        }
        "User" === e && (e = "_User");
        var i = null;
        if (o.has(t.Object._classMap, e)) {
          var s = t.Object._classMap[e];
          if (!n && !r) return s;
          i = s._extend(n, r)
        } else n = n || {}, n._className = e, i = this._extend(n, r);
        return i.extend = function(n) {
          if (o.isString(n) || n && o.has(n, "className")) return t.Object.extend.apply(i, arguments);
          var r = [e].concat(o.toArray(arguments));
          return t.Object.extend.apply(i, r)
        }, Object.defineProperty(i, "query", Object.getOwnPropertyDescriptor(t.Object, "query")), i.new = function(t, e) {
          return new i(t, e)
        }, t.Object._classMap[e] = i, i
      }, Object.defineProperty(t.Object.prototype, "className", {
        get: function() {
          var t = this._className || this.constructor._LCClassName || this.constructor.name;
          return "User" === t ? "_User" : t
        }
      }), t.Object.register = function(e, n) {
        if (!(e.prototype instanceof t.Object)) throw new Error("registered class is not a subclass of AV.Object");
        var r = n || e.name;
        if (!r.length) throw new Error("registered class must be named");
        n && (e._LCClassName = n), t.Object._classMap[r] = e
      }, Object.defineProperty(t.Object, "query", {
        get: function() {
          return new t.Query(this.prototype.className)
        }
      }), t.Object._findUnsavedChildren = function(e, n, r) {
        t._traverse(e, function(e) {
          return e instanceof t.Object ? void(e.dirty() && n.push(e)) : e instanceof t.File ? void(e.id || r.push(e)) : void 0
        })
      }, t.Object._canBeSerializedAsValue = function(e) {
        var n = !0;
        return e instanceof t.Object || e instanceof t.File ? n = !!e.id : o.isArray(e) ? t._arrayEach(e, function(e) {
          t.Object._canBeSerializedAsValue(e) || (n = !1)
        }) : o.isObject(e) && t._objectEach(e, function(e) {
          t.Object._canBeSerializedAsValue(e) || (n = !1)
        }), n
      }, t.Object._deepSaveAsync = function(e, n, r) {
        var i = [],
          u = [];
        t.Object._findUnsavedChildren(e, i, u);
        var l = a.resolve();
        o.each(u, function(t) {
          l = l.then(function() {
            return t.save()
          })
        });
        var h = o.uniq(i),
          f = o.uniq(h);
        return l.then(function() {
          return a._continueWhile(function() {
            return f.length > 0
          }, function() {
            var e = [],
              n = [];
            if (t._arrayEach(f, function(t) {
                if (e.length > 20) return void n.push(t);
                t._canBeSerialized() ? e.push(t) : n.push(t)
              }), f = n, 0 === e.length) return a.reject(new s(s.OTHER_CAUSE, "Tried to save a batch with a cycle."));
            var i = a.resolve(o.map(e, function(t) {
                return t._allPreviousSaves || a.resolve()
              })),
              u = i.then(function() {
                return c("batch", null, null, "POST", {
                  requests: o.map(e, function(t) {
                    var e = t.id ? "PUT" : "POST",
                      n = t._getSaveJSON();
                    o.extend(n, t._flags);
                    var r = t.className,
                      i = "/classes/" + r;
                    "_User" !== t.className || t.id || (i = "/users");
                    var i = "/1.1" + i;
                    return t.id && (i = i + "/" + t.id), t._startSave(), {
                      method: e,
                      path: i,
                      body: n
                    }
                  })
                }, r).then(function(t) {
                  var n = o.map(e, function(e, n) {
                    return t[n].success ? (e._finishSave(e.parse(t[n].success)), e) : (e._cancelSave(), new s(t[n].error.code, t[n].error.error))
                  });
                  return b(n)
                })
              });
            return t._arrayEach(e, function(t) {
              t._allPreviousSaves = u
            }), u
          })
        }).then(function() {
          return e
        })
      }
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(4);
    t.exports = function(t) {
      t.Role = t.Object.extend("_Role", {
        constructor: function(e, n) {
          if (r.isString(e) ? (t.Object.prototype.constructor.call(this, null, null), this.setName(e)) : t.Object.prototype.constructor.call(this, e, n), n) {
            if (!(n instanceof t.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
            this.setACL(n)
          }
        },
        getName: function() {
          return this.get("name")
        },
        setName: function(t, e) {
          return this.set("name", t, e)
        },
        getUsers: function() {
          return this.relation("users")
        },
        getRoles: function() {
          return this.relation("roles")
        },
        validate: function(e, n) {
          if ("name" in e && e.name !== this.getName()) {
            var o = e.name;
            if (this.id && this.id !== e.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
            if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
            if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
          }
          return !!t.Object.prototype.validate && t.Object.prototype.validate.call(this, e, n)
        }
      })
    }
  }, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t
    }
    var i = n(0),
      o = n(17),
      s = n(4),
      a = n(2),
      u = a._request,
      c = a.request,
      l = n(1),
      h = function() {
        if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp");
        return new l(function(t, e) {
          wx.login({
            success: function(n) {
              var r = n.code,
                i = n.errMsg;
              r ? t(r) : e(new Error(i))
            },
            fail: function() {
              return e(new Error("wx.login 失败"))
            }
          })
        })
      },
      f = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.unionIdPlatform,
          o = void 0 === r ? "weixin" : r,
          a = n.asMainAccount,
          u = void 0 !== a && a;
        if ("string" != typeof e) throw new s(s.OTHER_CAUSE, "unionId is not a string");
        if ("string" != typeof o) throw new s(s.OTHER_CAUSE, "unionIdPlatform is not a string");
        return i.extend({}, t, {
          platform: o,
          unionid: e,
          main_account: Boolean(u)
        })
      };
    t.exports = function(t) {
      t.User = t.Object.extend("_User", {
        _isCurrentUser: !1,
        _mergeMagicFields: function(e) {
          return e.sessionToken && (this._sessionToken = e.sessionToken, delete e.sessionToken), t.User.__super__._mergeMagicFields.call(this, e)
        },
        _cleanupAuthData: function() {
          if (this.isCurrent()) {
            var e = this.get("authData");
            e && t._objectEach(this.get("authData"), function(t, n) {
              e[n] || delete e[n]
            })
          }
        },
        _synchronizeAllAuthData: function() {
          if (this.get("authData")) {
            var e = this;
            t._objectEach(this.get("authData"), function(t, n) {
              e._synchronizeAuthData(n)
            })
          }
        },
        _synchronizeAuthData: function(e) {
          if (this.isCurrent()) {
            var n;
            i.isString(e) ? (n = e, e = t.User._authProviders[n]) : n = e.getAuthType();
            var r = this.get("authData");
            if (r && e) {
              e.restoreAuthentication(r[n]) || this.dissociateAuthData(e)
            }
          }
        },
        _handleSaveResult: function(e) {
          return e && !t._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !e && !this.isCurrent() || t._config.disableCurrentUser ? l.resolve() : l.resolve(t.User._saveCurrentUser(this))
        },
        _linkWith: function(e, n) {
          var o, s = this,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            u = a.failOnNotExist,
            c = void 0 !== u && u;
          return i.isString(e) ? (o = e, e = t.User._authProviders[e]) : o = e.getAuthType(), n ? this.save({
            authData: r({}, o, n)
          }, {
            fetchWhenSave: !!this.get("authData"),
            _failOnNotExist: c
          }).then(function(t) {
            return t._handleSaveResult(!0).then(function() {
              return t
            })
          }) : e.authenticate().then(function(t) {
            return s._linkWith(e, t)
          })
        },
        associateWithAuthData: function(t, e) {
          return this._linkWith(e, t)
        },
        associateWithAuthDataAndUnionId: function(t, e, n, r) {
          return this._linkWith(e, f(t, n, r))
        },
        linkWithWeapp: function() {
          var t = this;
          return h().then(function(e) {
            return t._linkWith("lc_weapp", {
              code: e
            })
          })
        },
        dissociateAuthData: function(t) {
          return this.unset("authData." + t), this.save().then(function(t) {
            return t._handleSaveResult(!0).then(function() {
              return t
            })
          })
        },
        _unlinkFrom: function(t) {
          return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"), this.dissociateAuthData(t)
        },
        _isLinked: function(t) {
          var e;
          return e = i.isString(t) ? t : t.getAuthType(), !!(this.get("authData") || {})[e]
        },
        isAnonymous: function() {
          return this._isLinked("anonymous")
        },
        logOut: function() {
          this._logOutWithAll(), this._isCurrentUser = !1
        },
        _logOutWithAll: function() {
          if (this.get("authData")) {
            var e = this;
            t._objectEach(this.get("authData"), function(t, n) {
              e._logOutWith(n)
            })
          }
        },
        _logOutWith: function(e) {
          this.isCurrent() && (i.isString(e) && (e = t.User._authProviders[e]), e && e.deauthenticate && e.deauthenticate())
        },
        signUp: function(t, e) {
          var n = t && t.username || this.get("username");
          if (!n || "" === n) throw new s(s.OTHER_CAUSE, "Cannot sign up user with an empty name.");
          var r = t && t.password || this.get("password");
          if (!r || "" === r) throw new s(s.OTHER_CAUSE, "Cannot sign up user with an empty password.");
          return this.save(t, e).then(function(t) {
            return t.isAnonymous() && (t.unset("authData.anonymous"), t._opSetQueue = [{}]), t._handleSaveResult(!0).then(function() {
              return t
            })
          })
        },
        signUpOrlogInWithMobilePhone: function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t && t.mobilePhoneNumber || this.get("mobilePhoneNumber");
          if (!n || "" === n) throw new s(s.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
          var r = t && t.smsCode || this.get("smsCode");
          if (!r || "" === r) throw new s(s.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
          return e._makeRequest = function(t, e, n, r, i) {
            return u("usersByMobilePhone", null, null, "POST", i)
          }, this.save(t, e).then(function(t) {
            return delete t.attributes.smsCode, delete t._serverData.smsCode, t._handleSaveResult(!0).then(function() {
              return t
            })
          })
        },
        loginWithAuthData: function(t, e, n) {
          return this._linkWith(e, t, n)
        },
        loginWithAuthDataAndUnionId: function(t, e, n, r) {
          return this.loginWithAuthData(f(t, n, r), e, r)
        },
        loginWithWeapp: function(t) {
          var e = this;
          return h().then(function(n) {
            return e.loginWithAuthData({
              code: n
            }, "lc_weapp", t)
          })
        },
        logIn: function() {
          var t = this;
          return u("login", null, null, "POST", this.toJSON()).then(function(e) {
            var n = t.parse(e);
            return t._finishFetch(n), t._handleSaveResult(!0).then(function() {
              return n.smsCode || delete t.attributes.smsCode, t
            })
          })
        },
        save: function(e, n, r) {
          var o, s;
          return i.isObject(e) || i.isNull(e) || i.isUndefined(e) ? (o = e, s = n) : (o = {}, o[e] = n, s = r), s = s || {}, t.Object.prototype.save.call(this, o, s).then(function(t) {
            return t._handleSaveResult(!1).then(function() {
              return t
            })
          })
        },
        follow: function(e, n) {
          if (!this.id) throw new Error("Please signin.");
          var r = void 0,
            o = void 0;
          e.user ? (r = e.user, o = e.attributes) : r = e;
          var s = i.isString(r) ? r : r.id;
          if (!s) throw new Error("Invalid target user.");
          var a = "users/" + this.id + "/friendship/" + s;
          return u(a, null, null, "POST", t._encode(o), n)
        },
        unfollow: function(t, e) {
          if (!this.id) throw new Error("Please signin.");
          var n = void 0;
          n = t.user ? t.user : t;
          var r = i.isString(n) ? n : n.id;
          if (!r) throw new Error("Invalid target user.");
          var o = "users/" + this.id + "/friendship/" + r;
          return u(o, null, null, "DELETE", null, e)
        },
        followerQuery: function() {
          return t.User.followerQuery(this.id)
        },
        followeeQuery: function() {
          return t.User.followeeQuery(this.id)
        },
        fetch: function(e, n) {
          return t.Object.prototype.fetch.call(this, e, n).then(function(t) {
            return t._handleSaveResult(!1).then(function() {
              return t
            })
          })
        },
        updatePassword: function(t, e, n) {
          var r = "users/" + this.id + "/updatePassword";
          return u(r, null, null, "PUT", {
            old_password: t,
            new_password: e
          }, n)
        },
        isCurrent: function() {
          return this._isCurrentUser
        },
        getUsername: function() {
          return this.get("username")
        },
        getMobilePhoneNumber: function() {
          return this.get("mobilePhoneNumber")
        },
        setMobilePhoneNumber: function(t, e) {
          return this.set("mobilePhoneNumber", t, e)
        },
        setUsername: function(t, e) {
          return this.set("username", t, e)
        },
        setPassword: function(t, e) {
          return this.set("password", t, e)
        },
        getEmail: function() {
          return this.get("email")
        },
        setEmail: function(t, e) {
          return this.set("email", t, e)
        },
        authenticated: function() {
          return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), !!this._sessionToken && !t._config.disableCurrentUser && t.User.current() && t.User.current().id === this.id
        },
        isAuthenticated: function() {
          var e = this;
          return l.resolve().then(function() {
            return !!e._sessionToken && t.User._fetchUserBySessionToken(e._sessionToken).then(function() {
              return !0
            }, function(t) {
              if (211 === t.code) return !1;
              throw t
            })
          })
        },
        getSessionToken: function() {
          return this._sessionToken
        },
        refreshSessionToken: function(t) {
          var e = this;
          return u("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, t).then(function(t) {
            return e._finishFetch(t), e._handleSaveResult(!0).then(function() {
              return e
            })
          })
        },
        getRoles: function(e) {
          return t.Relation.reverseQuery("_Role", "users", this).find(e)
        }
      }, {
        _currentUser: null,
        _currentUserMatchesDisk: !1,
        _CURRENT_USER_KEY: "currentUser",
        _authProviders: {},
        signUp: function(e, n, r, i) {
          return r = r || {}, r.username = e, r.password = n, t.Object._create("_User").signUp(r, i)
        },
        logIn: function(e, n) {
          var r = t.Object._create("_User");
          return r._finishFetch({
            username: e,
            password: n
          }), r.logIn()
        },
        become: function(t) {
          return this._fetchUserBySessionToken(t).then(function(t) {
            return t._handleSaveResult(!0).then(function() {
              return t
            })
          })
        },
        _fetchUserBySessionToken: function(e) {
          var n = t.Object._create("_User");
          return c({
            method: "GET",
            path: "/users/me",
            authOptions: {
              sessionToken: e
            }
          }).then(function(t) {
            var e = n.parse(t);
            return n._finishFetch(e), n
          })
        },
        logInWithMobilePhoneSmsCode: function(e, n) {
          var r = t.Object._create("_User");
          return r._finishFetch({
            mobilePhoneNumber: e,
            smsCode: n
          }), r.logIn()
        },
        signUpOrlogInWithMobilePhone: function(e, n, r, i) {
          return r = r || {}, r.mobilePhoneNumber = e, r.smsCode = n, t.Object._create("_User").signUpOrlogInWithMobilePhone(r, i)
        },
        logInWithMobilePhone: function(e, n) {
          var r = t.Object._create("_User");
          return r._finishFetch({
            mobilePhoneNumber: e,
            password: n
          }), r.logIn()
        },
        loginWithAuthData: function(e, n, r) {
          return t.User._logInWith(n, e, r)
        },
        signUpOrlogInWithAuthData: function() {
          return console.warn("DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替"), this.loginWithAuthData.apply(this, arguments)
        },
        loginWithAuthDataAndUnionId: function(t, e, n, r) {
          return this.loginWithAuthData(f(t, n, r), e, r)
        },
        signUpOrlogInWithAuthDataAndUnionId: function() {
          return console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替"), this.loginWithAuthDataAndUnionId.apply(this, arguments)
        },
        loginWithWeapp: function(t) {
          var e = this;
          return h().then(function(n) {
            return e.loginWithAuthData({
              code: n
            }, "lc_weapp", t)
          })
        },
        loginAnonymously: function() {
          return this.loginWithAuthData({
            id: o()
          }, "anonymous")
        },
        associateWithAuthData: function(t, e, n) {
          return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"), t._linkWith(e, n)
        },
        logOut: function() {
          return t._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), l.resolve(null)) : (null !== t.User._currentUser && (t.User._currentUser._logOutWithAll(), t.User._currentUser._isCurrentUser = !1), t.User._currentUserMatchesDisk = !0, t.User._currentUser = null, t.localStorage.removeItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function() {
            return t._refreshSubscriptionId()
          }))
        },
        followerQuery: function(e) {
          if (!e || !i.isString(e)) throw new Error("Invalid user object id.");
          var n = new t.FriendShipQuery("_Follower");
          return n._friendshipTag = "follower", n.equalTo("user", t.Object.createWithoutData("_User", e)), n
        },
        followeeQuery: function(e) {
          if (!e || !i.isString(e)) throw new Error("Invalid user object id.");
          var n = new t.FriendShipQuery("_Followee");
          return n._friendshipTag = "followee", n.equalTo("user", t.Object.createWithoutData("_User", e)), n
        },
        requestPasswordReset: function(t) {
          return u("requestPasswordReset", null, null, "POST", {
            email: t
          })
        },
        requestEmailVerify: function(t) {
          return u("requestEmailVerify", null, null, "POST", {
            email: t
          })
        },
        requestMobilePhoneVerify: function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
              mobilePhoneNumber: t
            };
          return e.validateToken && (n.validate_token = e.validateToken), u("requestMobilePhoneVerify", null, null, "POST", n, e)
        },
        requestPasswordResetBySmsCode: function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
              mobilePhoneNumber: t
            };
          return e.validateToken && (n.validate_token = e.validateToken), u("requestPasswordResetBySmsCode", null, null, "POST", n, e)
        },
        resetPasswordBySmsCode: function(t, e) {
          return u("resetPasswordBySmsCode", null, t, "PUT", {
            password: e
          })
        },
        verifyMobilePhone: function(t) {
          return u("verifyMobilePhone", null, t, "POST", null)
        },
        requestLoginSmsCode: function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
              mobilePhoneNumber: t
            };
          return e.validateToken && (n.validate_token = e.validateToken), u("requestLoginSmsCode", null, null, "POST", n, e)
        },
        currentAsync: function() {
          return t._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), l.resolve(null)) : t.User._currentUser ? l.resolve(t.User._currentUser) : t.User._currentUserMatchesDisk ? l.resolve(t.User._currentUser) : t.localStorage.getItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function(e) {
            if (!e) return null;
            t.User._currentUserMatchesDisk = !0, t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
            var n = JSON.parse(e);
            return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser
          })
        },
        current: function() {
          if (t._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;
          if (t.User._currentUser) return t.User._currentUser;
          if (t.User._currentUserMatchesDisk) return t.User._currentUser;
          t.User._currentUserMatchesDisk = !0;
          var e = t.localStorage.getItem(t._getAVPath(t.User._CURRENT_USER_KEY));
          if (!e) return null;
          t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
          var n = JSON.parse(e);
          return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser
        },
        _saveCurrentUser: function(e) {
          var n;
          return n = t.User._currentUser !== e ? t.User.logOut() : l.resolve(), n.then(function() {
            e._isCurrentUser = !0, t.User._currentUser = e;
            var n = e._toFullJSON();
            return n._id = e.id, n._sessionToken = e._sessionToken, t.localStorage.setItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function() {
              return t.User._currentUserMatchesDisk = !0, t._refreshSubscriptionId()
            })
          })
        },
        _registerAuthenticationProvider: function(e) {
          t.User._authProviders[e.getAuthType()] = e, !t._config.disableCurrentUser && t.User.current() && t.User.current()._synchronizeAuthData(e.getAuthType())
        },
        _logInWith: function(e, n, r) {
          return t.Object._create("_User")._linkWith(e, n, r)
        }
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(7)("leancloud:query"),
      o = n(1),
      s = n(4),
      a = n(2),
      u = a._request,
      c = a.request,
      l = n(3),
      h = l.ensureArray,
      f = l.transformFetchOptions,
      d = function(t, e) {
        if (void 0 === t) throw new Error(e)
      };
    t.exports = function(t) {
      t.Query = function(e) {
        r.isString(e) && (e = t.Object._getSubclass(e)), this.objectClass = e, this.className = e.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._extraOptions = {}
      }, t.Query.or = function() {
        var e = r.toArray(arguments),
          n = null;
        t._arrayEach(e, function(t) {
          if (r.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class")
        });
        var i = new t.Query(n);
        return i._orQuery(e), i
      }, t.Query.and = function() {
        var e = r.toArray(arguments),
          n = null;
        t._arrayEach(e, function(t) {
          if (r.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class")
        });
        var i = new t.Query(n);
        return i._andQuery(e), i
      }, t.Query.doCloudQuery = function(e, n, i) {
        var o = {
          cql: e
        };
        return r.isArray(n) ? o.pvalues = n : i = n, u("cloudQuery", null, null, "GET", o, i).then(function(e) {
          var n = new t.Query(e.className);
          return {
            results: r.map(e.results, function(t) {
              var r = n._newObject(e);
              return r._finishFetch && r._finishFetch(n._processResult(t), !0), r
            }),
            count: e.count,
            className: e.className
          }
        })
      }, t.Query._extend = t._extend, r.extend(t.Query.prototype, {
        _processResult: function(t) {
          return t
        },
        get: function(t, e) {
          if (!t) {
            throw new s(s.OBJECT_NOT_FOUND, "Object not found.")
          }
          var n = this._newObject();
          n.id = t;
          var i = this.toJSON(),
            o = {};
          return i.keys && (o.keys = i.keys), i.include && (o.include = i.include), i.includeACL && (o.includeACL = i.includeACL), u("classes", this.className, t, "GET", f(o), e).then(function(t) {
            if (r.isEmpty(t)) throw new s(s.OBJECT_NOT_FOUND, "Object not found.");
            return n._finishFetch(n.parse(t), !0), n
          })
        },
        toJSON: function() {
          var e = {
            where: this._where
          };
          return this._include.length > 0 && (e.include = this._include.join(",")), this._select.length > 0 && (e.keys = this._select.join(",")), void 0 !== this._includeACL && (e.returnACL = this._includeACL), this._limit >= 0 && (e.limit = this._limit), this._skip > 0 && (e.skip = this._skip), void 0 !== this._order && (e.order = this._order), t._objectEach(this._extraOptions, function(t, n) {
            e[n] = t
          }), e
        },
        _newObject: function(e) {
          return e && e.className ? new t.Object(e.className) : new this.objectClass
        },
        _createRequest: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.toJSON(),
            e = arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/classes/" + this.className;
          if (encodeURIComponent(JSON.stringify(t)).length > 2e3) {
            return c({
              path: "/batch",
              method: "POST",
              data: {
                requests: [{
                  method: "GET",
                  path: "/1.1" + n,
                  params: t
                }]
              },
              authOptions: e
            }).then(function(t) {
              var e = t[0];
              if (e.success) return e.success;
              var n = new Error(e.error.error || "Unknown batch error");
              throw n.code = e.error.code, n
            })
          }
          return c({
            method: "GET",
            path: n,
            query: t,
            authOptions: e
          })
        },
        _parseResponse: function(t) {
          var e = this;
          return r.map(t.results, function(n) {
            var r = e._newObject(t);
            return r._finishFetch && r._finishFetch(e._processResult(n), !0), r
          })
        },
        find: function(t) {
          return this._createRequest(void 0, t).then(this._parseResponse.bind(this))
        },
        scan: function() {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.orderedBy,
            s = e.batchSize,
            a = arguments[1],
            c = this.toJSON();
          i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete c.limit), n && (c.scan_key = n), s && (c.limit = s);
          var l = o.resolve([]),
            h = void 0,
            f = !1;
          return {
            next: function() {
              return l = l.then(function(e) {
                return f ? [] : e.length > 1 ? e : h || 0 === e.length ? u("scan/classes", t.className, null, "GET", h ? r.extend({}, c, {
                  cursor: h
                }) : c, a).then(function(e) {
                  return h = e.cursor, t._parseResponse(e)
                }).then(function(t) {
                  return t.length || (f = !0), e.concat(t)
                }) : (f = !0, e)
              }), l.then(function(t) {
                return t.shift()
              }).then(function(t) {
                return {
                  value: t,
                  done: f
                }
              })
            }
          }
        },
        destroyAll: function(e) {
          return this.find(e).then(function(n) {
            return t.Object.destroyAll(n, e)
          })
        },
        count: function(t) {
          var e = this.toJSON();
          return e.limit = 0, e.count = 1, this._createRequest(e, t).then(function(t) {
            return t.count
          })
        },
        first: function(t) {
          var e = this,
            n = this.toJSON();
          return n.limit = 1, this._createRequest(n, t).then(function(t) {
            return r.map(t.results, function(t) {
              var n = e._newObject();
              return n._finishFetch && n._finishFetch(e._processResult(t), !0), n
            })[0]
          })
        },
        skip: function(t) {
          return d(t, "undefined is not a valid skip value"), this._skip = t, this
        },
        limit: function(t) {
          return d(t, "undefined is not a valid limit value"), this._limit = t, this
        },
        equalTo: function(e, n) {
          return d(e, "undefined is not a valid key"), d(n, "undefined is not a valid value"), this._where[e] = t._encode(n), this
        },
        _addCondition: function(e, n, r) {
          return d(e, "undefined is not a valid condition key"), d(n, "undefined is not a valid condition"), d(r, "undefined is not a valid condition value"), this._where[e] || (this._where[e] = {}), this._where[e][n] = t._encode(r), this
        },
        sizeEqualTo: function(t, e) {
          return this._addCondition(t, "$size", e), this
        },
        notEqualTo: function(t, e) {
          return this._addCondition(t, "$ne", e), this
        },
        lessThan: function(t, e) {
          return this._addCondition(t, "$lt", e), this
        },
        greaterThan: function(t, e) {
          return this._addCondition(t, "$gt", e), this
        },
        lessThanOrEqualTo: function(t, e) {
          return this._addCondition(t, "$lte", e), this
        },
        greaterThanOrEqualTo: function(t, e) {
          return this._addCondition(t, "$gte", e), this
        },
        containedIn: function(t, e) {
          return this._addCondition(t, "$in", e), this
        },
        notContainedIn: function(t, e) {
          return this._addCondition(t, "$nin", e), this
        },
        containsAll: function(t, e) {
          return this._addCondition(t, "$all", e), this
        },
        exists: function(t) {
          return this._addCondition(t, "$exists", !0), this
        },
        doesNotExist: function(t) {
          return this._addCondition(t, "$exists", !1), this
        },
        matches: function(t, e, n) {
          return this._addCondition(t, "$regex", e), n || (n = ""), e.ignoreCase && (n += "i"), e.multiline && (n += "m"), n && n.length && this._addCondition(t, "$options", n), this
        },
        matchesQuery: function(t, e) {
          var n = e.toJSON();
          return n.className = e.className, this._addCondition(t, "$inQuery", n), this
        },
        doesNotMatchQuery: function(t, e) {
          var n = e.toJSON();
          return n.className = e.className, this._addCondition(t, "$notInQuery", n), this
        },
        matchesKeyInQuery: function(t, e, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(t, "$select", {
            key: e,
            query: r
          }), this
        },
        doesNotMatchKeyInQuery: function(t, e, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(t, "$dontSelect", {
            key: e,
            query: r
          }), this
        },
        _orQuery: function(t) {
          var e = r.map(t, function(t) {
            return t.toJSON().where
          });
          return this._where.$or = e, this
        },
        _andQuery: function(t) {
          var e = r.map(t, function(t) {
            return t.toJSON().where
          });
          return this._where.$and = e, this
        },
        _quote: function(t) {
          return "\\Q" + t.replace("\\E", "\\E\\\\E\\Q") + "\\E"
        },
        contains: function(t, e) {
          return this._addCondition(t, "$regex", this._quote(e)), this
        },
        startsWith: function(t, e) {
          return this._addCondition(t, "$regex", "^" + this._quote(e)), this
        },
        endsWith: function(t, e) {
          return this._addCondition(t, "$regex", this._quote(e) + "$"), this
        },
        ascending: function(t) {
          return d(t, "undefined is not a valid key"), this._order = t, this
        },
        addAscending: function(t) {
          return d(t, "undefined is not a valid key"), this._order ? this._order += "," + t : this._order = t, this
        },
        descending: function(t) {
          return d(t, "undefined is not a valid key"), this._order = "-" + t, this
        },
        addDescending: function(t) {
          return d(t, "undefined is not a valid key"), this._order ? this._order += ",-" + t : this._order = "-" + t, this
        },
        near: function(e, n) {
          return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), this._addCondition(e, "$nearSphere", n), this
        },
        withinRadians: function(t, e, n) {
          return this.near(t, e), this._addCondition(t, "$maxDistance", n), this
        },
        withinMiles: function(t, e, n) {
          return this.withinRadians(t, e, n / 3958.8)
        },
        withinKilometers: function(t, e, n) {
          return this.withinRadians(t, e, n / 6371)
        },
        withinGeoBox: function(e, n, r) {
          return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), r instanceof t.GeoPoint || (r = new t.GeoPoint(r)), this._addCondition(e, "$within", {
            $box: [n, r]
          }), this
        },
        include: function(t) {
          var e = this;
          return d(t, "undefined is not a valid key"), r(arguments).forEach(function(t) {
            e._include = e._include.concat(h(t))
          }), this
        },
        includeACL: function() {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return this._includeACL = t, this
        },
        select: function(t) {
          var e = this;
          return d(t, "undefined is not a valid key"), r(arguments).forEach(function(t) {
            e._select = e._select.concat(h(t))
          }), this
        },
        each: function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this._order || this._skip || this._limit >= 0) {
            var i = new Error("Cannot iterate on a query with sort, skip, or limit.");
            return o.reject(i)
          }
          var s = new t.Query(this.objectClass);
          s._limit = n.batchSize || 100, s._where = r.clone(this._where), s._include = r.clone(this._include), s.ascending("objectId");
          var a = !1;
          return o._continueWhile(function() {
            return !a
          }, function() {
            return s.find(n).then(function(t) {
              var n = o.resolve();
              return r.each(t, function(t) {
                n = n.then(function() {
                  return e(t)
                })
              }), n.then(function() {
                t.length >= s._limit ? s.greaterThan("objectId", t[t.length - 1].id) : a = !0
              })
            })
          })
        },
        subscribe: function(e) {
          return t.LiveQuery.init(this, e)
        }
      }), t.FriendShipQuery = t.Query._extend({
        _objectClass: t.User,
        _newObject: function() {
          return new t.User
        },
        _processResult: function(t) {
          if (t && t[this._friendshipTag]) {
            var e = t[this._friendshipTag];
            return "Pointer" === e.__type && "_User" === e.className && (delete e.__type, delete e.className), e
          }
          return null
        }
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(66),
      o = n(1),
      s = n(3),
      a = s.inherits,
      u = n(2),
      c = u.request,
      l = function(t, e) {
        return c({
          method: "POST",
          path: "/LiveQuery/subscribe",
          data: {
            query: t,
            id: e
          }
        })
      };
    t.exports = function(t) {
      var e = function() {
        if (!t._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query")
      };
      t.LiveQuery = a(i, {
        constructor: function(t, e, n, r) {
          var o = this;
          i.apply(this), this.id = t, this._client = e, this._client.register(this), this._queryJSON = n, this._subscriptionId = r, this._onMessage = this._dispatch.bind(this), this._onReconnect = function() {
            l(o._queryJSON, o._subscriptionId).catch(function(t) {
              return console.error("LiveQuery resubscribe error: " + t.message)
            })
          }, e.on("message", this._onMessage), e.on("reconnect", this._onReconnect)
        },
        _dispatch: function(e) {
          var n = this;
          e.forEach(function(e) {
            var i = e.op,
              o = e.object,
              s = e.query_id,
              a = e.updatedKeys;
            if (s === n.id) {
              var u = t.parseJSON(r.extend({
                __type: "_File" === o.className ? "File" : "Object"
              }, o));
              a ? n.emit(i, u, a) : n.emit(i, u)
            }
          })
        },
        unsubscribe: function() {
          var t = this._client;
          return t.off("message", this._onMessage), t.off("reconnect", this._onReconnect), t.deregister(this), c({
            method: "POST",
            path: "/LiveQuery/unsubscribe",
            data: {
              id: t.id,
              query_id: this.id
            }
          })
        }
      }, {
        init: function(n) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = r.subscriptionId,
            s = void 0 === i ? t._getSubscriptionId() : i;
          if (e(), !(n instanceof t.Query)) throw new TypeError("LiveQuery must be inited with a Query");
          return o.resolve(s).then(function(e) {
            return t._config.realtime.createLiveQueryClient(e).then(function(r) {
              var i = n.toJSON(),
                o = i.where,
                s = i.keys,
                a = i.returnACL,
                u = {
                  where: o,
                  keys: s,
                  returnACL: a,
                  className: n.className
                },
                c = l(u, e).then(function(n) {
                  var i = n.query_id;
                  return new t.LiveQuery(i, r, u, e)
                }).finally(function() {
                  r.deregister(c)
                });
              return r.register(c), c
            })
          })
        },
        pause: function() {
          return e(), t._config.realtime.pause()
        },
        resume: function() {
          return e(), t._config.realtime.resume()
        }
      })
    }
  }, function(t, e, n) {
    "use strict";

    function r() {}

    function i(t, e, n) {
      this.fn = t, this.context = e, this.once = n || !1
    }

    function o() {
      this._events = new r, this._eventsCount = 0
    }
    var s = Object.prototype.hasOwnProperty,
      a = "~";
    Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (a = !1)), o.prototype.eventNames = function() {
      var t, e, n = [];
      if (0 === this._eventsCount) return n;
      for (e in t = this._events) s.call(t, e) && n.push(a ? e.slice(1) : e);
      return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
    }, o.prototype.listeners = function(t, e) {
      var n = a ? a + t : t,
        r = this._events[n];
      if (e) return !!r;
      if (!r) return [];
      if (r.fn) return [r.fn];
      for (var i = 0, o = r.length, s = new Array(o); i < o; i++) s[i] = r[i].fn;
      return s
    }, o.prototype.emit = function(t, e, n, r, i, o) {
      var s = a ? a + t : t;
      if (!this._events[s]) return !1;
      var u, c, l = this._events[s],
        h = arguments.length;
      if (l.fn) {
        switch (l.once && this.removeListener(t, l.fn, void 0, !0), h) {
          case 1:
            return l.fn.call(l.context), !0;
          case 2:
            return l.fn.call(l.context, e), !0;
          case 3:
            return l.fn.call(l.context, e, n), !0;
          case 4:
            return l.fn.call(l.context, e, n, r), !0;
          case 5:
            return l.fn.call(l.context, e, n, r, i), !0;
          case 6:
            return l.fn.call(l.context, e, n, r, i, o), !0
        }
        for (c = 1, u = new Array(h - 1); c < h; c++) u[c - 1] = arguments[c];
        l.fn.apply(l.context, u)
      } else {
        var f, d = l.length;
        for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), h) {
          case 1:
            l[c].fn.call(l[c].context);
            break;
          case 2:
            l[c].fn.call(l[c].context, e);
            break;
          case 3:
            l[c].fn.call(l[c].context, e, n);
            break;
          case 4:
            l[c].fn.call(l[c].context, e, n, r);
            break;
          default:
            if (!u)
              for (f = 1, u = new Array(h - 1); f < h; f++) u[f - 1] = arguments[f];
            l[c].fn.apply(l[c].context, u)
        }
      }
      return !0
    }, o.prototype.on = function(t, e, n) {
      var r = new i(e, n || this),
        o = a ? a + t : t;
      return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
    }, o.prototype.once = function(t, e, n) {
      var r = new i(e, n || this, !0),
        o = a ? a + t : t;
      return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
    }, o.prototype.removeListener = function(t, e, n, i) {
      var o = a ? a + t : t;
      if (!this._events[o]) return this;
      if (!e) return 0 == --this._eventsCount ? this._events = new r : delete this._events[o], this;
      var s = this._events[o];
      if (s.fn) s.fn !== e || i && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new r : delete this._events[o]);
      else {
        for (var u = 0, c = [], l = s.length; u < l; u++)(s[u].fn !== e || i && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
        c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r : delete this._events[o]
      }
      return this
    }, o.prototype.removeAllListeners = function(t) {
      var e;
      return t ? (e = a ? a + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new r : delete this._events[e])) : (this._events = new r, this._eventsCount = 0), this
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
      return this
    }, o.prefixed = a, o.EventEmitter = o, t.exports = o
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(3),
      o = i.tap;
    t.exports = function(t) {
      t.Captcha = function(t, e) {
        this._options = t, this._authOptions = e, this.url = void 0, this.captchaToken = void 0, this.validateToken = void 0
      }, t.Captcha.prototype.refresh = function() {
        var e = this;
        return t.Cloud._requestCaptcha(this._options, this._authOptions).then(function(t) {
          var n = t.captchaToken,
            i = t.url;
          return r.extend(e, {
            captchaToken: n,
            url: i
          }), i
        })
      }, t.Captcha.prototype.verify = function(e) {
        var n = this;
        return t.Cloud.verifyCaptcha(e, this.captchaToken).then(o(function(t) {
          return n.validateToken = t
        }))
      }, t.Captcha.request = function(e, n) {
        var r = new t.Captcha(e, n);
        return r.refresh().then(function() {
          return r
        })
      }
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(2),
      o = i._request,
      s = i.request,
      a = n(1);
    t.exports = function(t) {
      t.Cloud = t.Cloud || {}, r.extend(t.Cloud, {
        run: function(e, n, r) {
          return s({
            service: "engine",
            method: "POST",
            path: "/functions/" + e,
            data: t._encode(n, null, !0),
            authOptions: r
          }).then(function(e) {
            return t._decode(e).result
          })
        },
        rpc: function(e, n, i) {
          return r.isArray(n) ? a.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : s({
            service: "engine",
            method: "POST",
            path: "/call/" + e,
            data: t._encodeObjectOrArray(n),
            authOptions: i
          }).then(function(e) {
            return t._decode(e).result
          })
        },
        getServerDate: function() {
          return o("date", null, null, "GET").then(function(e) {
            return t._decode(e)
          })
        },
        requestSmsCode: function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (r.isString(t) && (t = {
              mobilePhoneNumber: t
            }), !t.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
          return e.validateToken && (t = r.extend({}, t, {
            validate_token: e.validateToken
          })), o("requestSmsCode", null, null, "POST", t, e)
        },
        verifySmsCode: function(t, e) {
          if (!t) throw new Error("Missing sms code.");
          var n = {};
          return r.isString(e) && (n.mobilePhoneNumber = e), o("verifySmsCode", t, null, "POST", n)
        },
        _requestCaptcha: function(t, e) {
          return o("requestCaptcha", null, null, "GET", t, e).then(function(t) {
            var e = t.captcha_url;
            return {
              captchaToken: t.captcha_token,
              url: e
            }
          })
        },
        requestCaptcha: t.Captcha.request,
        verifyCaptcha: function(t, e) {
          return o("verifyCaptcha", null, null, "POST", {
            captcha_code: t,
            captcha_token: e
          }).then(function(t) {
            return t.validate_token
          })
        }
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(2).request;
    t.exports = function(t) {
      t.Installation = t.Object.extend("_Installation"), t.Push = t.Push || {}, t.Push.send = function(t, e) {
        if (t.where && (t.where = t.where.toJSON().where), t.where && t.cql) throw new Error("Both where and cql can't be set");
        if (t.push_time && (t.push_time = t.push_time.toJSON()), t.expiration_time && (t.expiration_time = t.expiration_time.toJSON()), t.expiration_time && t.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
        return r({
          service: "push",
          method: "POST",
          path: "/push",
          data: t,
          authOptions: e
        })
      }
    }
  }, function(t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      i = n(0),
      o = n(1),
      s = n(2)._request,
      a = n(3),
      u = a.getSessionToken;
    t.exports = function(t) {
      var e = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return u(e) ? t.User._fetchUserBySessionToken(u(e)) : t.User.currentAsync()
        },
        n = function(n) {
          return e(n).then(function(e) {
            return t.Object.createWithoutData("_User", e.id)._toPointer()
          })
        };
      t.Status = function(t, e) {
        return this.data = {}, this.inboxType = "default", this.query = null, t && "object" === (void 0 === t ? "undefined" : r(t)) ? this.data = t : (t && (this.data.image = t), e && (this.data.message = e)), this
      }, i.extend(t.Status.prototype, {
        get: function(t) {
          return this.data[t]
        },
        set: function(t, e) {
          return this.data[t] = e, this
        },
        destroy: function(t) {
          return this.id ? s("statuses", null, this.id, "DELETE", t) : o.reject(new Error("The status id is not exists."))
        },
        toObject: function() {
          return this.id ? t.Object.createWithoutData("_Status", this.id) : null
        },
        _getDataJSON: function() {
          var e = i.clone(this.data);
          return t._encode(e)
        },
        send: function() {
          var e = this,
            r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!u(r) && !t.User.current()) throw new Error("Please signin an user.");
          return this.query ? n(r).then(function(t) {
            var n = e.query.toJSON();
            n.className = e.query.className;
            var i = {};
            return i.query = n, e.data = e.data || {}, e.data.source = e.data.source || t, i.data = e._getDataJSON(), i.inboxType = e.inboxType || "default", s("statuses", null, null, "POST", i, r)
          }).then(function(n) {
            return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e
          }) : t.Status.sendStatusToFollowers(this, r)
        },
        _finishFetch: function(e) {
          this.id = e.objectId, this.createdAt = t._parseDate(e.createdAt), this.updatedAt = t._parseDate(e.updatedAt), this.messageId = e.messageId, delete e.messageId, delete e.objectId, delete e.createdAt, delete e.updatedAt, this.data = t._decode(e)
        }
      }), t.Status.sendStatusToFollowers = function(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!u(r) && !t.User.current()) throw new Error("Please signin an user.");
        return n(r).then(function(n) {
          var i = {};
          i.className = "_Follower", i.keys = "follower", i.where = {
            user: n
          };
          var o = {};
          return o.query = i, e.data = e.data || {}, e.data.source = e.data.source || n, o.data = e._getDataJSON(), o.inboxType = e.inboxType || "default", s("statuses", null, null, "POST", o, r).then(function(n) {
            return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e
          })
        })
      }, t.Status.sendPrivateStatus = function(e, r) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!u(o) && !t.User.current()) throw new Error("Please signin an user.");
        if (!r) throw new Error("Invalid target user.");
        var a = i.isString(r) ? r : r.id;
        if (!a) throw new Error("Invalid target user.");
        return n(o).then(function(n) {
          var r = {};
          r.className = "_User", r.where = {
            objectId: a
          };
          var i = {};
          return i.query = r, e.data = e.data || {}, e.data.source = e.data.source || n, i.data = e._getDataJSON(), i.inboxType = "private", e.inboxType = "private", s("statuses", null, null, "POST", i, o).then(function(n) {
            return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e
          })
        })
      }, t.Status.countUnreadStatuses = function(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (a = r), !u(a) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
        return o.resolve(n || e(a)).then(function(e) {
          var n = {};
          return n.inboxType = t._encode(r), n.owner = t._encode(e), s("subscribe/statuses/count", null, null, "GET", n, a)
        })
      }, t.Status.resetUnreadCount = function(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (a = r), !u(a) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
        return o.resolve(n || e(a)).then(function(e) {
          var n = {};
          return n.inboxType = t._encode(r), n.owner = t._encode(e), s("subscribe/statuses/resetUnreadCount", null, null, "POST", n, a)
        })
      }, t.Status.statusQuery = function(e) {
        var n = new t.Query("_Status");
        return e && n.equalTo("source", e), n
      }, t.InboxQuery = t.Query._extend({
        _objectClass: t.Status,
        _sinceId: 0,
        _maxId: 0,
        _inboxType: "default",
        _owner: null,
        _newObject: function() {
          return new t.Status
        },
        _createRequest: function(e, n) {
          return t.InboxQuery.__super__._createRequest.call(this, e, n, "/subscribe/statuses")
        },
        sinceId: function(t) {
          return this._sinceId = t, this
        },
        maxId: function(t) {
          return this._maxId = t, this
        },
        owner: function(t) {
          return this._owner = t, this
        },
        inboxType: function(t) {
          return this._inboxType = t, this
        },
        toJSON: function() {
          var e = t.InboxQuery.__super__.toJSON.call(this);
          return e.owner = t._encode(this._owner), e.inboxType = t._encode(this._inboxType), e.sinceId = t._encode(this._sinceId), e.maxId = t._encode(this._maxId), e
        }
      }), t.Status.inboxQuery = function(e, n) {
        var r = new t.InboxQuery(t.Status);
        return e && (r._owner = e), n && (r._inboxType = n), r
      }
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(2)._request;
    t.exports = function(t) {
      t.SearchSortBuilder = function() {
        this._sortFields = []
      }, r.extend(t.SearchSortBuilder.prototype, {
        _addField: function(t, e, n, r) {
          var i = {};
          return i[t] = {
            order: e || "asc",
            mode: n || "avg",
            missing: "_" + (r || "last")
          }, this._sortFields.push(i), this
        },
        ascending: function(t, e, n) {
          return this._addField(t, "asc", e, n)
        },
        descending: function(t, e, n) {
          return this._addField(t, "desc", e, n)
        },
        whereNear: function(t, e, n) {
          n = n || {};
          var r = {},
            i = {
              lat: e.latitude,
              lon: e.longitude
            },
            o = {
              order: n.order || "asc",
              mode: n.mode || "avg",
              unit: n.unit || "km"
            };
          return o[t] = i, r._geo_distance = o, this._sortFields.push(r), this
        },
        build: function() {
          return JSON.stringify(t._encode(this._sortFields))
        }
      }), t.SearchQuery = t.Query._extend({
        _sid: null,
        _hits: 0,
        _queryString: null,
        _highlights: null,
        _sortBuilder: null,
        _createRequest: function(t, e) {
          return i("search/select", null, null, "GET", t || this.toJSON(), e)
        },
        sid: function(t) {
          return this._sid = t, this
        },
        queryString: function(t) {
          return this._queryString = t, this
        },
        highlights: function(t) {
          var e;
          return e = t && r.isString(t) ? arguments : t, this._highlights = e, this
        },
        sortBy: function(t) {
          return this._sortBuilder = t, this
        },
        hits: function() {
          return this._hits || (this._hits = 0), this._hits
        },
        _processResult: function(t) {
          return delete t.className, delete t._app_url, delete t._deeplink, t
        },
        hasMore: function() {
          return !this._hitEnd
        },
        reset: function() {
          this._hitEnd = !1, this._sid = null, this._hits = 0
        },
        find: function() {
          var t = this;
          return this._createRequest().then(function(e) {
            return e.sid ? (t._oldSid = t._sid, t._sid = e.sid) : (t._sid = null, t._hitEnd = !0), t._hits = e.hits || 0, r.map(e.results, function(n) {
              n.className && (e.className = n.className);
              var r = t._newObject(e);
              return r.appURL = n._app_url, r._finishFetch(t._processResult(n), !0), r
            })
          })
        },
        toJSON: function() {
          var e = t.SearchQuery.__super__.toJSON.call(this);
          if (delete e.where, this.className && (e.clazz = this.className), this._sid && (e.sid = this._sid), !this._queryString) throw new Error("Please set query string.");
          if (e.q = this._queryString, this._highlights && (e.highlights = this._highlights.join(",")), this._sortBuilder && e.order) throw new Error("sort and order can not be set at same time.");
          return this._sortBuilder && (e.sort = this._sortBuilder.build()), e
        }
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(4),
      o = n(2),
      s = o.request,
      a = n(1);
    t.exports = function(t) {
      t.Insight = t.Insight || {}, r.extend(t.Insight, {
        startJob: function(e, n) {
          if (!e || !e.sql) throw new Error("Please provide the sql to run the job.");
          var r = {
            jobConfig: e,
            appId: t.applicationId
          };
          return s({
            path: "/bigquery/jobs",
            method: "POST",
            data: t._encode(r, null, !0),
            authOptions: n,
            signKey: !1
          }).then(function(e) {
            return t._decode(e).id
          })
        },
        on: function(t, e) {}
      }), t.Insight.JobQuery = function(t, e) {
        if (!t) throw new Error("Please provide the job id.");
        this.id = t, this.className = e, this._skip = 0, this._limit = 100
      }, r.extend(t.Insight.JobQuery.prototype, {
        skip: function(t) {
          return this._skip = t, this
        },
        limit: function(t) {
          return this._limit = t, this
        },
        find: function(t) {
          var e = {
            skip: this._skip,
            limit: this._limit
          };
          return s({
            path: "/bigquery/jobs/" + this.id,
            method: "GET",
            query: e,
            authOptions: t,
            signKey: !1
          }).then(function(t) {
            return t.error ? a.reject(new i(t.code, t.error)) : a.resolve(t)
          })
        }
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(2),
      o = i._request,
      s = n(5),
      a = function(t) {
        return "string" == typeof t ? t : "function" == typeof t.getPayload ? JSON.stringify(t.getPayload()) : JSON.stringify(t)
      };
    t.exports = s.Object.extend("_Conversation", {
      constructor: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        s.Object.prototype.constructor.call(this, null, null), this.set("name", t), void 0 !== e.isSystem && this.set("sys", !!e.isSystem), void 0 !== e.isTransient && this.set("tr", !!e.isTransient)
      },
      getCreator: function() {
        return this.get("c")
      },
      getLastMessageAt: function() {
        return this.get("lm")
      },
      getMembers: function() {
        return this.get("m")
      },
      addMember: function(t) {
        return this.add("m", t)
      },
      getMutedMembers: function() {
        return this.get("mu")
      },
      getName: function() {
        return this.get("name")
      },
      isTransient: function() {
        return this.get("tr")
      },
      isSystem: function() {
        return this.get("sys")
      },
      send: function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = {
            from_peer: t,
            conv_id: this.id,
            transient: !1,
            message: a(e)
          };
        return void 0 !== n.toClients && (i.to_peers = n.toClients), void 0 !== n.transient && (i.transient = !!n.transient), void 0 !== n.pushData && (i.push_data = n.pushData), o("rtm", "messages", null, "POST", i, r)
      },
      broadcast: function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          s = {
            from_peer: t,
            conv_id: this.id,
            message: a(e)
          };
        if (void 0 !== n.pushData && (s.push = n.pushData), void 0 !== n.validTill) {
          var u = n.validTill;
          r.isDate(u) && (u = u.getTime()), n.valid_till = u
        }
        return o("rtm", "broadcast", null, "POST", s, i)
      }
    })
  }, function(t, e, n) {
    "use strict";

    function r(t) {
      var e = t.name,
        n = t.value,
        r = t.version;
      this.name = e, this.value = n, this.version = r
    }
    var i = n(0),
      o = n(1),
      s = n(2),
      a = s.request,
      u = n(3),
      c = u.ensureArray,
      l = u.parseDate,
      h = n(5);
    h.LeaderboardVersionChangeInterval = {
      NEVER: "never",
      DAY: "day",
      WEEK: "week",
      MONTH: "month"
    }, h.LeaderboardOrder = {
      ASCENDING: "ascending",
      DESCENDING: "descending"
    }, h.LeaderboardUpdateStrategy = {
      BETTER: "better",
      LAST: "last",
      SUM: "sum"
    };
    var f = function(t) {
      var e = h._decode(t);
      return new r({
        name: e.statisticName,
        value: e.statisticValue,
        version: e.version
      })
    };
    h.Leaderboard = function(t) {
      this.statisticName = t, this.order = void 0, this.updateStrategy = void 0, this.versionChangeInterval = void 0, this.version = void 0, this.nextResetAt = void 0, this.createdAt = void 0
    };
    var d = h.Leaderboard;
    h.Leaderboard.createWithoutData = function(t) {
      return new d(t)
    }, h.Leaderboard.createLeaderboard = function(t, e) {
      var n = t.statisticName,
        r = t.order,
        i = t.versionChangeInterval,
        o = t.updateStrategy;
      return a({
        method: "POST",
        path: "/leaderboard/leaderboards",
        data: {
          statisticName: n,
          order: r,
          versionChangeInterval: i,
          updateStrategy: o
        },
        authOptions: e
      }).then(function(t) {
        return new d(n)._finishFetch(t)
      })
    }, h.Leaderboard.getLeaderboard = function(t, e) {
      return d.createWithoutData(t).fetch(e)
    }, h.Leaderboard.getStatistics = function(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e.statisticNames,
        r = arguments[2];
      return o.resolve().then(function() {
        if (!t || !t.id) throw new Error("user must be an AV.User");
        return a({
          method: "GET",
          path: "/leaderboard/users/" + t.id + "/statistics",
          query: {
            statistics: n ? c(n).join(",") : void 0
          },
          authOptions: r
        }).then(function(t) {
          return t.results.map(f)
        })
      })
    }, h.Leaderboard.updateStatistics = function(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return o.resolve().then(function() {
        if (!t || !t.id) throw new Error("user must be an AV.User");
        var r = i.map(e, function(t, e) {
            return {
              statisticName: e,
              statisticValue: t
            }
          }),
          o = n.overwrite;
        return a({
          method: "POST",
          path: "/leaderboard/users/" + t.id + "/statistics",
          query: {
            overwrite: o ? 1 : void 0
          },
          data: r,
          authOptions: n
        }).then(function(t) {
          return t.results.map(f)
        })
      })
    }, i.extend(d.prototype, {
      _finishFetch: function(t) {
        var e = this;
        return i.forEach(t, function(t, n) {
          "updatedAt" !== n && "objectId" !== n && ("expiredAt" === n && (n = "nextResetAt"), "createdAt" === n && (t = l(t)), t && "Date" === t.__type && (t = l(t.iso)), e[n] = t)
        }), this
      },
      fetch: function(t) {
        var e = this;
        return a({
          method: "GET",
          path: "/leaderboard/leaderboards/" + this.statisticName,
          authOptions: t
        }).then(function(t) {
          return e._finishFetch(t)
        })
      },
      _getResults: function(t, e, n) {
        var r = t.skip,
          i = t.limit,
          o = t.selectUserKeys,
          s = t.includeStatistics,
          u = t.version;
        return a({
          method: "GET",
          path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (n ? "/" + n : ""),
          query: {
            skip: r,
            limit: i,
            includeUser: o ? c(o).join(",") : void 0,
            includeStatistics: s ? c(s).join(",") : void 0,
            version: u
          },
          authOptions: e
        }).then(function(t) {
          return t.results.map(function(t) {
            var e = h._decode(t),
              n = e.user,
              r = e.statisticValue,
              i = e.rank,
              o = e.statistics;
            return {
              user: n,
              value: r,
              rank: i,
              includedStatistics: (void 0 === o ? [] : o).map(f)
            }
          })
        })
      },
      getResults: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.skip,
          n = t.limit,
          r = t.selectUserKeys,
          i = t.includeStatistics,
          o = t.version,
          s = arguments[1];
        return this._getResults({
          skip: e,
          limit: n,
          selectUserKeys: r,
          includeStatistics: i,
          version: o
        }, s)
      },
      getResultsAroundUser: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments[2];
        if (t && "string" != typeof t.id) return this.getResultsAroundUser(void 0, t, e);
        var r = e.limit,
          i = e.selectUserKeys,
          o = e.includeStatistics,
          s = e.version;
        return this._getResults({
          limit: r,
          selectUserKeys: i,
          includeStatistics: o,
          version: s
        }, n, t ? t.id : "self")
      },
      _update: function(t, e) {
        var n = this;
        return a({
          method: "PUT",
          path: "/leaderboard/leaderboards/" + this.statisticName,
          data: t,
          authOptions: e
        }).then(function(t) {
          return n._finishFetch(t)
        })
      },
      updateVersionChangeInterval: function(t, e) {
        return this._update({
          versionChangeInterval: t
        }, e)
      },
      updateUpdateStrategy: function(t, e) {
        return this._update({
          updateStrategy: t
        }, e)
      },
      reset: function(t) {
        var e = this;
        return a({
          method: "PUT",
          path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
          authOptions: t
        }).then(function(t) {
          return e._finishFetch(t)
        })
      },
      destroy: function(t) {
        return h.request({
          method: "DELETE",
          path: "/leaderboard/leaderboards/" + this.statisticName,
          authOptions: t
        }).then(function() {})
      },
      getArchives: function() {
        var t = this,
          e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.skip,
          r = e.limit,
          i = arguments[1];
        return a({
          method: "GET",
          path: "/leaderboard/leaderboards/" + this.statisticName + "/archives",
          query: {
            skip: n,
            limit: r
          },
          authOptions: i
        }).then(function(e) {
          return e.results.map(function(e) {
            var n = e.version,
              r = e.status,
              i = e.url,
              o = e.activatedAt,
              s = e.deactivatedAt;
            return {
              statisticName: t.statisticName,
              version: n,
              status: r,
              url: i,
              activatedAt: l(o.iso),
              deactivatedAt: l(s.iso)
            }
          })
        })
      }
    })
  }])
});
//# sourceMappingURL=av-weapp-min.js.map