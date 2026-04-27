import * as e from "react";
import t, { Children as n, Component as r, cloneElement as i, createContext as a, createElement as o, forwardRef as s, isValidElement as c, lazy as l, useCallback as u, useContext as d, useEffect as f, useLayoutEffect as p, useMemo as m, useRef as h, useState as g, useSyncExternalStore as _ } from "react";
import * as v from "react-dom";
import y from "react-dom";
import { Fragment as b, jsx as x, jsxs as S } from "react/jsx-runtime";
import { Calculator as C, CalendarIcon as w, Check as T, CheckIcon as E, ChevronDown as D, ChevronDownIcon as O, ChevronLeft as k, ChevronLeftIcon as A, ChevronRight as j, ChevronRightIcon as M, ChevronUp as N, ChevronUpIcon as P, ChevronsLeft as F, ChevronsRight as I, ChevronsUpDown as ee, Code2 as te, Copy as L, CornerDownLeft as ne, Delete as R, Download as z, Eye as re, EyeOff as ie, File as B, FileText as ae, Folder as oe, FolderOpen as se, GripVertical as ce, Image as le, Inbox as ue, Keyboard as de, Minus as fe, Pause as pe, Pipette as me, Play as he, Plus as ge, RotateCcw as _e, ScanBarcode as ve, Search as ye, SlidersHorizontal as be, Trash2 as xe, TrendingDown as Se, TrendingUp as Ce, Undo2 as we, Upload as Te, X as Ee, XIcon as De } from "lucide-react";
import { Toaster as Oe, toast as ke } from "sonner";
import * as Ae from "recharts";
import { Area as je, AreaChart as Me, Bar as Ne, BarChart as Pe, CartesianGrid as Fe, Cell as Ie, ComposedChart as Le, Legend as Re, Line as ze, LineChart as Be, Pie as Ve, PieChart as He, RadialBar as Ue, RadialBarChart as We, XAxis as Ge, YAxis as Ke } from "recharts";
//#region \0rolldown/runtime.js
var qe = Object.defineProperty, Je = (e, t) => {
	let n = {};
	for (var r in e) qe(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || qe(n, Symbol.toStringTag, { value: "Module" }), n;
};
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function Ye(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = Ye(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function Xe() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ye(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var Ze = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Qe = Xe, $e = (e, t) => (n) => {
	if (t?.variants == null) return Qe(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Ze(t) || Ze(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Qe(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
};
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function et(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function tt(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = et(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : et(e[t], null);
			}
		};
	};
}
function V(...t) {
	return e.useCallback(tt(...t), t);
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function nt(t) {
	let n = /* @__PURE__ */ rt(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(at);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ x(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ x(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
/* @__NO_SIDE_EFFECTS__ */
function rt(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = st(r), a = ot(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? tt(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var it = Symbol("radix.slottable");
function at(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === it;
}
function ot(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function st(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var H = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((t, n) => {
	let r = /* @__PURE__ */ nt(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {});
function ct(e, t) {
	e && v.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var lt = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), ut = "VisuallyHidden", dt = e.forwardRef((e, t) => /* @__PURE__ */ x(H.span, {
	...e,
	ref: t,
	style: {
		...lt,
		...e.style
	}
}));
dt.displayName = ut;
var ft = dt;
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
function pt(t, n) {
	let r = e.createContext(n), i = (t) => {
		let { children: n, ...i } = t, a = e.useMemo(() => i, Object.values(i));
		return /* @__PURE__ */ x(r.Provider, {
			value: a,
			children: n
		});
	};
	i.displayName = t + "Provider";
	function a(i) {
		let a = e.useContext(r);
		if (a) return a;
		if (n !== void 0) return n;
		throw Error(`\`${i}\` must be used within \`${t}\``);
	}
	return [i, a];
}
function mt(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i), o = r.length;
		r = [...r, i];
		let s = (n) => {
			let { scope: r, children: i, ...s } = n, c = r?.[t]?.[o] || a, l = e.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ x(c.Provider, {
				value: l,
				children: i
			});
		};
		s.displayName = n + "Provider";
		function c(r, s) {
			let c = s?.[t]?.[o] || a, l = e.useContext(c);
			if (l) return l;
			if (i !== void 0) return i;
			throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return [s, c];
	}
	let a = () => {
		let n = r.map((t) => e.createContext(t));
		return function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		};
	};
	return a.scopeName = t, [i, ht(a, ...n)];
}
function ht(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = () => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function gt(t) {
	let n = /* @__PURE__ */ _t(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(yt);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ x(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ x(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
/* @__NO_SIDE_EFFECTS__ */
function _t(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = xt(r), a = bt(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? tt(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var vt = Symbol("radix.slottable");
function yt(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === vt;
}
function bt(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function xt(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-collection/dist/index.mjs
function St(e) {
	let n = e + "CollectionProvider", [r, i] = mt(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = (e) => {
		let { scope: n, children: r } = e, i = t.useRef(null), o = t.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ x(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	};
	s.displayName = n;
	let c = e + "CollectionSlot", l = /* @__PURE__ */ gt(c), u = t.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ x(l, {
			ref: V(t, o(c, n).collectionRef),
			children: r
		});
	});
	u.displayName = c;
	let d = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ gt(d), m = t.forwardRef((e, n) => {
		let { scope: r, children: i, ...a } = e, s = t.useRef(null), c = V(n, s), l = o(d, r);
		return t.useEffect(() => (l.itemMap.set(s, {
			ref: s,
			...a
		}), () => void l.itemMap.delete(s))), /* @__PURE__ */ x(p, {
			[f]: "",
			ref: c,
			children: i
		});
	});
	m.displayName = d;
	function h(n) {
		let r = o(e + "CollectionConsumer", n);
		return t.useCallback(() => {
			let e = r.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${f}]`));
			return Array.from(r.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [r.collectionRef, r.itemMap]);
	}
	return [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
typeof window < "u" && window.document && window.document.createElement;
function U(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Ct = globalThis?.document ? e.useLayoutEffect : () => {}, wt = e.useInsertionEffect || Ct;
function Tt({ prop: t, defaultProp: n, onChange: r = () => {}, caller: i }) {
	let [a, o, s] = Et({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0, l = c ? t : a;
	{
		let n = e.useRef(t !== void 0);
		e.useEffect(() => {
			let e = n.current;
			e !== c && console.warn(`${i} is changing from ${e ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), n.current = c;
		}, [c, i]);
	}
	return [l, e.useCallback((e) => {
		if (c) {
			let n = Dt(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
function Et({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return wt(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
function Dt(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
function Ot(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
var kt = (t) => {
	let { present: n, children: r } = t, i = At(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = V(i.ref, Mt(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
};
kt.displayName = "Presence";
function At(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), [s, c] = Ot(t ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return e.useEffect(() => {
		let e = jt(i.current);
		o.current = s === "mounted" ? e : "none";
	}, [s]), Ct(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = jt(e);
			t ? c("MOUNT") : i === "none" || e?.display === "none" ? c("UNMOUNT") : c(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, c]), Ct(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = (r) => {
				let o = jt(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (c("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, s = (e) => {
				e.target === n && (o.current = jt(i.current));
			};
			return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
				t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
			};
		} else c("ANIMATION_END");
	}, [n, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: e.useCallback((e) => {
			i.current = e ? getComputedStyle(e) : null, r(e);
		}, [])
	};
}
function jt(e) {
	return e?.animationName || "none";
}
function Mt(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var Nt = e.useId || (() => void 0), Pt = 0;
function Ft(t) {
	let [n, r] = e.useState(Nt());
	return Ct(() => {
		t || r((e) => e ?? String(Pt++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
//#endregion
//#region node_modules/@radix-ui/react-collapsible/dist/index.mjs
var It = "Collapsible", [Lt, Rt] = mt(It), [zt, Bt] = Lt(It), Vt = e.forwardRef((t, n) => {
	let { __scopeCollapsible: r, open: i, defaultOpen: a, disabled: o, onOpenChange: s, ...c } = t, [l, u] = Tt({
		prop: i,
		defaultProp: a ?? !1,
		onChange: s,
		caller: It
	});
	return /* @__PURE__ */ x(zt, {
		scope: r,
		disabled: o,
		contentId: Ft(),
		open: l,
		onOpenToggle: e.useCallback(() => u((e) => !e), [u]),
		children: /* @__PURE__ */ x(H.div, {
			"data-state": qt(l),
			"data-disabled": o ? "" : void 0,
			...c,
			ref: n
		})
	});
});
Vt.displayName = It;
var Ht = "CollapsibleTrigger", Ut = e.forwardRef((e, t) => {
	let { __scopeCollapsible: n, ...r } = e, i = Bt(Ht, n);
	return /* @__PURE__ */ x(H.button, {
		type: "button",
		"aria-controls": i.contentId,
		"aria-expanded": i.open || !1,
		"data-state": qt(i.open),
		"data-disabled": i.disabled ? "" : void 0,
		disabled: i.disabled,
		...r,
		ref: t,
		onClick: U(e.onClick, i.onOpenToggle)
	});
});
Ut.displayName = Ht;
var Wt = "CollapsibleContent", Gt = e.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Bt(Wt, e.__scopeCollapsible);
	return /* @__PURE__ */ x(kt, {
		present: n || i.open,
		children: ({ present: e }) => /* @__PURE__ */ x(Kt, {
			...r,
			ref: t,
			present: e
		})
	});
});
Gt.displayName = Wt;
var Kt = e.forwardRef((t, n) => {
	let { __scopeCollapsible: r, present: i, children: a, ...o } = t, s = Bt(Wt, r), [c, l] = e.useState(i), u = e.useRef(null), d = V(n, u), f = e.useRef(0), p = f.current, m = e.useRef(0), h = m.current, g = s.open || c, _ = e.useRef(g), v = e.useRef(void 0);
	return e.useEffect(() => {
		let e = requestAnimationFrame(() => _.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), Ct(() => {
		let e = u.current;
		if (e) {
			v.current = v.current || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let t = e.getBoundingClientRect();
			f.current = t.height, m.current = t.width, _.current || (e.style.transitionDuration = v.current.transitionDuration, e.style.animationName = v.current.animationName), l(i);
		}
	}, [s.open, i]), /* @__PURE__ */ x(H.div, {
		"data-state": qt(s.open),
		"data-disabled": s.disabled ? "" : void 0,
		id: s.contentId,
		hidden: !g,
		...o,
		ref: d,
		style: {
			"--radix-collapsible-content-height": p ? `${p}px` : void 0,
			"--radix-collapsible-content-width": h ? `${h}px` : void 0,
			...t.style
		},
		children: g && a
	});
});
function qt(e) {
	return e ? "open" : "closed";
}
var Jt = Vt, Yt = Ut, Xt = Gt, Zt = e.createContext(void 0);
function Qt(t) {
	let n = e.useContext(Zt);
	return t || n || "ltr";
}
//#endregion
//#region node_modules/@radix-ui/react-accordion/dist/index.mjs
var $t = "Accordion", en = [
	"Home",
	"End",
	"ArrowDown",
	"ArrowUp",
	"ArrowLeft",
	"ArrowRight"
], [tn, nn, rn] = St($t), [an, on] = mt($t, [rn, Rt]), sn = Rt(), cn = t.forwardRef((e, t) => {
	let { type: n, ...r } = e, i = r, a = r;
	return /* @__PURE__ */ x(tn.Provider, {
		scope: e.__scopeAccordion,
		children: n === "multiple" ? /* @__PURE__ */ x(mn, {
			...a,
			ref: t
		}) : /* @__PURE__ */ x(pn, {
			...i,
			ref: t
		})
	});
});
cn.displayName = $t;
var [ln, un] = an($t), [dn, fn] = an($t, { collapsible: !1 }), pn = t.forwardRef((e, n) => {
	let { value: r, defaultValue: i, onValueChange: a = () => {}, collapsible: o = !1, ...s } = e, [c, l] = Tt({
		prop: r,
		defaultProp: i ?? "",
		onChange: a,
		caller: $t
	});
	return /* @__PURE__ */ x(ln, {
		scope: e.__scopeAccordion,
		value: t.useMemo(() => c ? [c] : [], [c]),
		onItemOpen: l,
		onItemClose: t.useCallback(() => o && l(""), [o, l]),
		children: /* @__PURE__ */ x(dn, {
			scope: e.__scopeAccordion,
			collapsible: o,
			children: /* @__PURE__ */ x(_n, {
				...s,
				ref: n
			})
		})
	});
}), mn = t.forwardRef((e, n) => {
	let { value: r, defaultValue: i, onValueChange: a = () => {}, ...o } = e, [s, c] = Tt({
		prop: r,
		defaultProp: i ?? [],
		onChange: a,
		caller: $t
	}), l = t.useCallback((e) => c((t = []) => [...t, e]), [c]), u = t.useCallback((e) => c((t = []) => t.filter((t) => t !== e)), [c]);
	return /* @__PURE__ */ x(ln, {
		scope: e.__scopeAccordion,
		value: s,
		onItemOpen: l,
		onItemClose: u,
		children: /* @__PURE__ */ x(dn, {
			scope: e.__scopeAccordion,
			collapsible: !0,
			children: /* @__PURE__ */ x(_n, {
				...o,
				ref: n
			})
		})
	});
}), [hn, gn] = an($t), _n = t.forwardRef((e, n) => {
	let { __scopeAccordion: r, disabled: i, dir: a, orientation: o = "vertical", ...s } = e, c = V(t.useRef(null), n), l = nn(r), u = Qt(a) === "ltr", d = U(e.onKeyDown, (e) => {
		if (!en.includes(e.key)) return;
		let t = e.target, n = l().filter((e) => !e.ref.current?.disabled), r = n.findIndex((e) => e.ref.current === t), i = n.length;
		if (r === -1) return;
		e.preventDefault();
		let a = r, s = i - 1, c = () => {
			a = r + 1, a > s && (a = 0);
		}, d = () => {
			a = r - 1, a < 0 && (a = s);
		};
		switch (e.key) {
			case "Home":
				a = 0;
				break;
			case "End":
				a = s;
				break;
			case "ArrowRight":
				o === "horizontal" && (u ? c() : d());
				break;
			case "ArrowDown":
				o === "vertical" && c();
				break;
			case "ArrowLeft":
				o === "horizontal" && (u ? d() : c());
				break;
			case "ArrowUp":
				o === "vertical" && d();
				break;
		}
		n[a % i].ref.current?.focus();
	});
	return /* @__PURE__ */ x(hn, {
		scope: r,
		disabled: i,
		direction: a,
		orientation: o,
		children: /* @__PURE__ */ x(tn.Slot, {
			scope: r,
			children: /* @__PURE__ */ x(H.div, {
				...s,
				"data-orientation": o,
				ref: c,
				onKeyDown: i ? void 0 : d
			})
		})
	});
}), vn = "AccordionItem", [yn, bn] = an(vn), xn = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, value: r, ...i } = e, a = gn(vn, n), o = un(vn, n), s = sn(n), c = Ft(), l = r && o.value.includes(r) || !1, u = a.disabled || e.disabled;
	return /* @__PURE__ */ x(yn, {
		scope: n,
		open: l,
		disabled: u,
		triggerId: c,
		children: /* @__PURE__ */ x(Jt, {
			"data-orientation": a.orientation,
			"data-state": On(l),
			...s,
			...i,
			ref: t,
			disabled: u,
			open: l,
			onOpenChange: (e) => {
				e ? o.onItemOpen(r) : o.onItemClose(r);
			}
		})
	});
});
xn.displayName = vn;
var Sn = "AccordionHeader", Cn = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = gn($t, n), a = bn(Sn, n);
	return /* @__PURE__ */ x(H.h3, {
		"data-orientation": i.orientation,
		"data-state": On(a.open),
		"data-disabled": a.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
Cn.displayName = Sn;
var wn = "AccordionTrigger", Tn = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = gn($t, n), a = bn(wn, n), o = fn(wn, n), s = sn(n);
	return /* @__PURE__ */ x(tn.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ x(Yt, {
			"aria-disabled": a.open && !o.collapsible || void 0,
			"data-orientation": i.orientation,
			id: a.triggerId,
			...s,
			...r,
			ref: t
		})
	});
});
Tn.displayName = wn;
var En = "AccordionContent", Dn = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = gn($t, n), a = bn(En, n), o = sn(n);
	return /* @__PURE__ */ x(Xt, {
		role: "region",
		"aria-labelledby": a.triggerId,
		"data-orientation": i.orientation,
		...o,
		...r,
		ref: t,
		style: {
			"--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
			"--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
			...e.style
		}
	});
});
Dn.displayName = En;
function On(e) {
	return e ? "open" : "closed";
}
var kn = cn, An = xn, jn = Cn, Mn = Tn, Nn = Dn;
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function Pn(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => (...e) => n.current?.(...e), []);
}
//#endregion
//#region node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function Fn(t, n = globalThis?.document) {
	let r = Pn(t);
	e.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && r(e);
		};
		return n.addEventListener("keydown", e, { capture: !0 }), () => n.removeEventListener("keydown", e, { capture: !0 });
	}, [r, n]);
}
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var In = "DismissableLayer", Ln = "dismissableLayer.update", Rn = "dismissableLayer.pointerDownOutside", zn = "dismissableLayer.focusOutside", Bn, Vn = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), Hn = e.forwardRef((t, n) => {
	let { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = t, u = e.useContext(Vn), [d, f] = e.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = e.useState({}), h = V(n, (e) => f(e)), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(_), y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= v, C = Gn((e) => {
		let t = e.target, n = [...u.branches].some((e) => e.contains(t));
		!S || n || (a?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), w = Kn((e) => {
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p);
	return Fn((e) => {
		y === u.layers.size - 1 && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	}, p), e.useEffect(() => {
		if (d) return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Bn = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), qn(), () => {
			r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Bn);
		};
	}, [
		d,
		p,
		r,
		u
	]), e.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), qn());
	}, [d, u]), e.useEffect(() => {
		let e = () => m({});
		return document.addEventListener(Ln, e), () => document.removeEventListener(Ln, e);
	}, []), /* @__PURE__ */ x(H.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? S ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: U(t.onFocusCapture, w.onFocusCapture),
		onBlurCapture: U(t.onBlurCapture, w.onBlurCapture),
		onPointerDownCapture: U(t.onPointerDownCapture, C.onPointerDownCapture)
	});
});
Hn.displayName = In;
var Un = "DismissableLayerBranch", Wn = e.forwardRef((t, n) => {
	let r = e.useContext(Vn), i = e.useRef(null), a = V(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return r.branches.add(e), () => {
			r.branches.delete(e);
		};
	}, [r.branches]), /* @__PURE__ */ x(H.div, {
		...t,
		ref: a
	});
});
Wn.displayName = Un;
function Gn(t, n = globalThis?.document) {
	let r = Pn(t), i = e.useRef(!1), a = e.useRef(() => {});
	return e.useEffect(() => {
		let e = (e) => {
			if (e.target && !i.current) {
				let t = function() {
					Jn(Rn, r, i, { discrete: !0 });
				}, i = { originalEvent: e };
				e.pointerType === "touch" ? (n.removeEventListener("click", a.current), a.current = t, n.addEventListener("click", a.current, { once: !0 })) : t();
			} else n.removeEventListener("click", a.current);
			i.current = !1;
		}, t = window.setTimeout(() => {
			n.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", a.current);
		};
	}, [n, r]), { onPointerDownCapture: () => i.current = !0 };
}
function Kn(t, n = globalThis?.document) {
	let r = Pn(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = (e) => {
			e.target && !i.current && Jn(zn, r, { originalEvent: e }, { discrete: !1 });
		};
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: () => i.current = !0,
		onBlurCapture: () => i.current = !1
	};
}
function qn() {
	let e = new CustomEvent(Ln);
	document.dispatchEvent(e);
}
function Jn(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? ct(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Yn = "focusScope.autoFocusOnMount", Xn = "focusScope.autoFocusOnUnmount", Zn = {
	bubbles: !1,
	cancelable: !0
}, Qn = "FocusScope", $n = e.forwardRef((t, n) => {
	let { loop: r = !1, trapped: i = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = t, [c, l] = e.useState(null), u = Pn(a), d = Pn(o), f = e.useRef(null), p = V(n, (e) => l(e)), m = e.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	e.useEffect(() => {
		if (i) {
			let e = function(e) {
				if (m.paused || !c) return;
				let t = e.target;
				c.contains(t) ? f.current = t : or(f.current, { select: !0 });
			}, t = function(e) {
				if (m.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (c.contains(t) || or(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && or(c);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return c && r.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		c,
		m.paused
	]), e.useEffect(() => {
		if (c) {
			sr.add(m);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(Yn, Zn);
				c.addEventListener(Yn, u), c.dispatchEvent(t), t.defaultPrevented || (er(ur(nr(c)), { select: !0 }), document.activeElement === e && or(c));
			}
			return () => {
				c.removeEventListener(Yn, u), setTimeout(() => {
					let t = new CustomEvent(Xn, Zn);
					c.addEventListener(Xn, d), c.dispatchEvent(t), t.defaultPrevented || or(e ?? document.body, { select: !0 }), c.removeEventListener(Xn, d), sr.remove(m);
				}, 0);
			};
		}
	}, [
		c,
		u,
		d,
		m
	]);
	let h = e.useCallback((e) => {
		if (!r && !i || m.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = tr(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && or(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && or(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		m.paused
	]);
	return /* @__PURE__ */ x(H.div, {
		tabIndex: -1,
		...s,
		ref: p,
		onKeyDown: h
	});
});
$n.displayName = Qn;
function er(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (or(r, { select: t }), document.activeElement !== n) return;
}
function tr(e) {
	let t = nr(e);
	return [rr(t, e), rr(t.reverse(), e)];
}
function nr(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function rr(e, t) {
	for (let n of e) if (!ir(n, { upTo: t })) return n;
}
function ir(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function ar(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function or(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && ar(e) && t && e.select();
	}
}
var sr = cr();
function cr() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = lr(e, t), e.unshift(t);
		},
		remove(t) {
			e = lr(e, t), e[0]?.resume();
		}
	};
}
function lr(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function ur(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region node_modules/@radix-ui/react-portal/dist/index.mjs
var dr = "Portal", fr = e.forwardRef((t, n) => {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	Ct(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? y.createPortal(/* @__PURE__ */ x(H.div, {
		...i,
		ref: n
	}), s) : null;
});
fr.displayName = dr;
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var pr = 0;
function mr() {
	e.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? hr()), document.body.insertAdjacentElement("beforeend", e[1] ?? hr()), pr++, () => {
			pr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), pr--;
		};
	}, []);
}
function hr() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var gr = function() {
	return gr = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, gr.apply(this, arguments);
};
function _r(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function vr(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var yr = "right-scroll-bar-position", br = "width-before-scroll-bar", xr = "with-scroll-bars-hidden", Sr = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function Cr(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function wr(e, t) {
	var n = g(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var Tr = typeof window < "u" ? e.useLayoutEffect : e.useEffect, Er = /* @__PURE__ */ new WeakMap();
function Dr(e, t) {
	var n = wr(t || null, function(t) {
		return e.forEach(function(e) {
			return Cr(e, t);
		});
	});
	return Tr(function() {
		var t = Er.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Cr(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Cr(e, a);
			});
		}
		Er.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function Or(e) {
	return e;
}
function kr(e, t) {
	t === void 0 && (t = Or);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function Ar(e) {
	e === void 0 && (e = {});
	var t = kr(null);
	return t.options = gr({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var jr = function(t) {
	var n = t.sideCar, r = _r(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, gr({}, r));
};
jr.isSideCarExport = !0;
function Mr(e, t) {
	return e.useMedium(t), jr;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var Nr = Ar(), Pr = function() {}, Fr = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: Pr,
		onWheelCapture: Pr,
		onTouchMoveCapture: Pr
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = _r(t, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = p, C = Dr([r, n]), w = gr(gr({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: Nr,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), gr(gr({}, w), { ref: C })) : e.createElement(y, gr({}, w, {
		className: l,
		ref: C
	}), c));
});
Fr.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Fr.classNames = {
	fullWidth: br,
	zeroRight: yr
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var Ir, Lr = function() {
	if (Ir) return Ir;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function Rr() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Lr();
	return t && e.setAttribute("nonce", t), e;
}
function zr(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Br(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Vr = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Rr()) && (zr(t, n), Br(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Hr = function() {
	var t = Vr();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, Ur = function() {
	var e = Hr();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Wr = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Gr = function(e) {
	return parseInt(e || "", 10) || 0;
}, Kr = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Gr(n),
		Gr(r),
		Gr(i)
	];
}, qr = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Wr;
	var t = Kr(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Jr = Ur(), Yr = "data-scroll-locked", Xr = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${xr} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Yr}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${yr} {
    right: ${s}px ${r};
  }
  
  .${br} {
    margin-right: ${s}px ${r};
  }
  
  .${yr} .${yr} {
    right: 0 ${r};
  }
  
  .${br} .${br} {
    margin-right: 0 ${r};
  }
  
  body[${Yr}] {
    ${Sr}: ${s}px;
  }
`;
}, Zr = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Qr = function() {
	e.useEffect(function() {
		return document.body.setAttribute(Yr, (Zr() + 1).toString()), function() {
			var e = Zr() - 1;
			e <= 0 ? document.body.removeAttribute(Yr) : document.body.setAttribute(Yr, e.toString());
		};
	}, []);
}, $r = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	Qr();
	var o = e.useMemo(function() {
		return qr(a);
	}, [a]);
	return e.createElement(Jr, { styles: Xr(o, !n, a, r ? "" : "!important") });
}, ei = !1;
if (typeof window < "u") try {
	var ti = Object.defineProperty({}, "passive", { get: function() {
		return ei = !0, !0;
	} });
	window.addEventListener("test", ti, ti), window.removeEventListener("test", ti, ti);
} catch {
	ei = !1;
}
var ni = ei ? { passive: !1 } : !1, ri = function(e) {
	return e.tagName === "TEXTAREA";
}, ii = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ri(e) && n[t] === "visible");
}, ai = function(e) {
	return ii(e, "overflowY");
}, oi = function(e) {
	return ii(e, "overflowX");
}, si = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), ui(e, r)) {
			var i = di(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, ci = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, li = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, ui = function(e, t) {
	return e === "v" ? ai(t) : oi(t);
}, di = function(e, t) {
	return e === "v" ? ci(t) : li(t);
}, fi = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, pi = function(e, t, n, r, i) {
	var a = fi(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = di(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && ui(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, mi = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, hi = function(e) {
	return [e.deltaX, e.deltaY];
}, gi = function(e) {
	return e && "current" in e ? e.current : e;
}, _i = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, vi = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, yi = 0, bi = [];
function xi(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(yi++)[0], o = e.useState(Ur)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = vr([t.lockRef.current], (t.shards || []).map(gi), !0).filter(Boolean);
			return e.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), e.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		t.inert,
		t.lockRef.current,
		t.shards
	]);
	var c = e.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = mi(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = si(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = si(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return pi(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (!(!bi.length || bi[bi.length - 1] !== o)) {
			var r = "deltaY" in t ? hi(t) : mi(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && _i(e.delta, r);
			})[0];
			if (i && i.should) {
				t.cancelable && t.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(gi).filter(Boolean).filter(function(e) {
					return e.contains(t.target);
				});
				(a.length > 0 ? c(t, a[0]) : !s.current.noIsolation) && t.cancelable && t.preventDefault();
			}
		}
	}, []), u = e.useCallback(function(e, t, r, i) {
		var a = {
			name: e,
			delta: t,
			target: r,
			should: i,
			shadowParent: Si(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = mi(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, hi(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, mi(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return bi.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, ni), document.addEventListener("touchmove", l, ni), document.addEventListener("touchstart", d, ni), function() {
			bi = bi.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, ni), document.removeEventListener("touchmove", l, ni), document.removeEventListener("touchstart", d, ni);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: vi(a) }) : null, m ? e.createElement($r, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function Si(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Ci = Mr(Nr, xi), wi = e.forwardRef(function(t, n) {
	return e.createElement(Fr, gr({}, t, {
		ref: n,
		sideCar: Ci
	}));
});
wi.classNames = Fr.classNames;
//#endregion
//#region node_modules/aria-hidden/dist/es2015/index.js
var Ti = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Ei = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), Oi = {}, ki = 0, Ai = function(e) {
	return e && (e.host || Ai(e.parentNode));
}, ji = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ai(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Mi = function(e, t, n, r) {
	var i = ji(t, Array.isArray(e) ? e : [e]);
	Oi[n] || (Oi[n] = /* @__PURE__ */ new WeakMap());
	var a = Oi[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Ei.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Ei.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Di.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), ki++, function() {
		o.forEach(function(e) {
			var t = Ei.get(e) - 1, i = a.get(e) - 1;
			Ei.set(e, t), a.set(e, i), t || (Di.has(e) || e.removeAttribute(r), Di.delete(e)), i || e.removeAttribute(n);
		}), ki--, ki || (Ei = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), Oi = {});
	};
}, Ni = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Ti(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Mi(r, i, n, "aria-hidden")) : function() {
		return null;
	};
};
//#endregion
//#region node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function Pi(t) {
	let n = /* @__PURE__ */ Fi(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(Li);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ x(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ x(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
/* @__NO_SIDE_EFFECTS__ */
function Fi(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = zi(r), a = Ri(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? tt(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var Ii = Symbol("radix.slottable");
function Li(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Ii;
}
function Ri(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function zi(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-dialog/dist/index.mjs
var Bi = "Dialog", [Vi, Hi] = mt(Bi), [Ui, Wi] = Vi(Bi), Gi = (t) => {
	let { __scopeDialog: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = t, c = e.useRef(null), l = e.useRef(null), [u, d] = Tt({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Bi
	});
	return /* @__PURE__ */ x(Ui, {
		scope: n,
		triggerRef: c,
		contentRef: l,
		contentId: Ft(),
		titleId: Ft(),
		descriptionId: Ft(),
		open: u,
		onOpenChange: d,
		onOpenToggle: e.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: r
	});
};
Gi.displayName = Bi;
var Ki = "DialogTrigger", qi = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = Wi(Ki, n), a = V(t, i.triggerRef);
	return /* @__PURE__ */ x(H.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": pa(i.open),
		...r,
		ref: a,
		onClick: U(e.onClick, i.onOpenToggle)
	});
});
qi.displayName = Ki;
var Ji = "DialogPortal", [Yi, Xi] = Vi(Ji, { forceMount: void 0 }), Zi = (t) => {
	let { __scopeDialog: n, forceMount: r, children: i, container: a } = t, o = Wi(Ji, n);
	return /* @__PURE__ */ x(Yi, {
		scope: n,
		forceMount: r,
		children: e.Children.map(i, (e) => /* @__PURE__ */ x(kt, {
			present: r || o.open,
			children: /* @__PURE__ */ x(fr, {
				asChild: !0,
				container: a,
				children: e
			})
		}))
	});
};
Zi.displayName = Ji;
var Qi = "DialogOverlay", $i = e.forwardRef((e, t) => {
	let n = Xi(Qi, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = Wi(Qi, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ x(kt, {
		present: r || a.open,
		children: /* @__PURE__ */ x(ta, {
			...i,
			ref: t
		})
	}) : null;
});
$i.displayName = Qi;
var ea = /* @__PURE__ */ Pi("DialogOverlay.RemoveScroll"), ta = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = Wi(Qi, n);
	return /* @__PURE__ */ x(wi, {
		as: ea,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ x(H.div, {
			"data-state": pa(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), na = "DialogContent", ra = e.forwardRef((e, t) => {
	let n = Xi(na, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = Wi(na, e.__scopeDialog);
	return /* @__PURE__ */ x(kt, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ x(ia, {
			...i,
			ref: t
		}) : /* @__PURE__ */ x(aa, {
			...i,
			ref: t
		})
	});
});
ra.displayName = na;
var ia = e.forwardRef((t, n) => {
	let r = Wi(na, t.__scopeDialog), i = e.useRef(null), a = V(n, r.contentRef, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return Ni(e);
	}, []), /* @__PURE__ */ x(oa, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: U(t.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: U(t.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: U(t.onFocusOutside, (e) => e.preventDefault())
	});
}), aa = e.forwardRef((t, n) => {
	let r = Wi(na, t.__scopeDialog), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ x(oa, {
		...t,
		ref: n,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (e) => {
			t.onCloseAutoFocus?.(e), e.defaultPrevented || (i.current || r.triggerRef.current?.focus(), e.preventDefault()), i.current = !1, a.current = !1;
		},
		onInteractOutside: (e) => {
			t.onInteractOutside?.(e), e.defaultPrevented || (i.current = !0, e.detail.originalEvent.type === "pointerdown" && (a.current = !0));
			let n = e.target;
			r.triggerRef.current?.contains(n) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && a.current && e.preventDefault();
		}
	});
}), oa = e.forwardRef((t, n) => {
	let { __scopeDialog: r, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: o, ...s } = t, c = Wi(na, r), l = e.useRef(null), u = V(n, l);
	return mr(), /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x($n, {
		asChild: !0,
		loop: !0,
		trapped: i,
		onMountAutoFocus: a,
		onUnmountAutoFocus: o,
		children: /* @__PURE__ */ x(Hn, {
			role: "dialog",
			id: c.contentId,
			"aria-describedby": c.descriptionId,
			"aria-labelledby": c.titleId,
			"data-state": pa(c.open),
			...s,
			ref: u,
			onDismiss: () => c.onOpenChange(!1)
		})
	}), /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(_a, { titleId: c.titleId }), /* @__PURE__ */ x(ya, {
		contentRef: l,
		descriptionId: c.descriptionId
	})] })] });
}), sa = "DialogTitle", ca = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = Wi(sa, n);
	return /* @__PURE__ */ x(H.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
ca.displayName = sa;
var la = "DialogDescription", ua = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = Wi(la, n);
	return /* @__PURE__ */ x(H.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
ua.displayName = la;
var da = "DialogClose", fa = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = Wi(da, n);
	return /* @__PURE__ */ x(H.button, {
		type: "button",
		...r,
		ref: t,
		onClick: U(e.onClick, () => i.onOpenChange(!1))
	});
});
fa.displayName = da;
function pa(e) {
	return e ? "open" : "closed";
}
var ma = "DialogTitleWarning", [ha, ga] = pt(ma, {
	contentName: na,
	titleName: sa,
	docsSlug: "dialog"
}), _a = ({ titleId: t }) => {
	let n = ga(ma), r = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
	return e.useEffect(() => {
		t && (document.getElementById(t) || console.error(r));
	}, [r, t]), null;
}, va = "DialogDescriptionWarning", ya = ({ contentRef: t, descriptionId: n }) => {
	let r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ga(va).contentName}}.`;
	return e.useEffect(() => {
		let e = t.current?.getAttribute("aria-describedby");
		n && e && (document.getElementById(n) || console.warn(r));
	}, [
		r,
		t,
		n
	]), null;
}, ba = Gi, xa = qi, Sa = Zi, Ca = $i, wa = ra, Ta = ca, Ea = ua, Da = fa, Oa = Symbol("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function ka(e) {
	let t = ({ children: e }) => /* @__PURE__ */ x(b, { children: e });
	return t.displayName = `${e}.Slottable`, t.__radixId = Oa, t;
}
//#endregion
//#region node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var Aa = "AlertDialog", [ja, Ma] = mt(Aa, [Hi]), Na = Hi(), Pa = (e) => {
	let { __scopeAlertDialog: t, ...n } = e;
	return /* @__PURE__ */ x(ba, {
		...Na(t),
		...n,
		modal: !0
	});
};
Pa.displayName = Aa;
var Fa = "AlertDialogTrigger", Ia = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e;
	return /* @__PURE__ */ x(xa, {
		...Na(n),
		...r,
		ref: t
	});
});
Ia.displayName = Fa;
var La = "AlertDialogPortal", Ra = (e) => {
	let { __scopeAlertDialog: t, ...n } = e;
	return /* @__PURE__ */ x(Sa, {
		...Na(t),
		...n
	});
};
Ra.displayName = La;
var za = "AlertDialogOverlay", Ba = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e;
	return /* @__PURE__ */ x(Ca, {
		...Na(n),
		...r,
		ref: t
	});
});
Ba.displayName = za;
var Va = "AlertDialogContent", [Ha, Ua] = ja(Va), Wa = /* @__PURE__ */ ka("AlertDialogContent"), Ga = e.forwardRef((t, n) => {
	let { __scopeAlertDialog: r, children: i, ...a } = t, o = Na(r), s = e.useRef(null), c = V(n, s), l = e.useRef(null);
	return /* @__PURE__ */ x(ha, {
		contentName: Va,
		titleName: Ka,
		docsSlug: "alert-dialog",
		children: /* @__PURE__ */ x(Ha, {
			scope: r,
			cancelRef: l,
			children: /* @__PURE__ */ S(wa, {
				role: "alertdialog",
				...o,
				...a,
				ref: c,
				onOpenAutoFocus: U(a.onOpenAutoFocus, (e) => {
					e.preventDefault(), l.current?.focus({ preventScroll: !0 });
				}),
				onPointerDownOutside: (e) => e.preventDefault(),
				onInteractOutside: (e) => e.preventDefault(),
				children: [/* @__PURE__ */ x(Wa, { children: i }), /* @__PURE__ */ x(eo, { contentRef: s })]
			})
		})
	});
});
Ga.displayName = Va;
var Ka = "AlertDialogTitle", qa = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e;
	return /* @__PURE__ */ x(Ta, {
		...Na(n),
		...r,
		ref: t
	});
});
qa.displayName = Ka;
var Ja = "AlertDialogDescription", Ya = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e;
	return /* @__PURE__ */ x(Ea, {
		...Na(n),
		...r,
		ref: t
	});
});
Ya.displayName = Ja;
var Xa = "AlertDialogAction", Za = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e;
	return /* @__PURE__ */ x(Da, {
		...Na(n),
		...r,
		ref: t
	});
});
Za.displayName = Xa;
var Qa = "AlertDialogCancel", $a = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = Ua(Qa, n), a = Na(n), o = V(t, i);
	return /* @__PURE__ */ x(Da, {
		...a,
		...r,
		ref: o
	});
});
$a.displayName = Qa;
var eo = ({ contentRef: t }) => {
	let n = `\`${Va}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Va}\` by passing a \`${Ja}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Va}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
	return e.useEffect(() => {
		document.getElementById(t.current?.getAttribute("aria-describedby")) || console.warn(n);
	}, [n, t]), null;
}, to = Pa, no = Ra, ro = Ba, io = Ga, ao = Za, oo = $a, so = qa, co = Ya;
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
function lo(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
//#endregion
//#region node_modules/@radix-ui/react-use-size/dist/index.mjs
function uo(t) {
	let [n, r] = e.useState(void 0);
	return Ct(() => {
		if (t) {
			r({
				width: t.offsetWidth,
				height: t.offsetHeight
			});
			let e = new ResizeObserver((e) => {
				if (!Array.isArray(e) || !e.length) return;
				let n = e[0], i, a;
				if ("borderBoxSize" in n) {
					let e = n.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = t.offsetWidth, a = t.offsetHeight;
				r({
					width: i,
					height: a
				});
			});
			return e.observe(t, { box: "border-box" }), () => e.unobserve(t);
		} else r(void 0);
	}, [t]), n;
}
//#endregion
//#region node_modules/@radix-ui/react-checkbox/dist/index.mjs
var fo = "Checkbox", [po, mo] = mt(fo), [ho, go] = po(fo);
function _o(t) {
	let { __scopeCheckbox: n, checked: r, children: i, defaultChecked: a, disabled: o, form: s, name: c, onCheckedChange: l, required: u, value: d = "on", internal_do_not_use_render: f } = t, [p, m] = Tt({
		prop: r,
		defaultProp: a ?? !1,
		onChange: l,
		caller: fo
	}), [h, g] = e.useState(null), [_, v] = e.useState(null), y = e.useRef(!1), b = h ? !!s || !!h.closest("form") : !0, S = {
		checked: p,
		disabled: o,
		setChecked: m,
		control: h,
		setControl: g,
		name: c,
		form: s,
		value: d,
		hasConsumerStoppedPropagationRef: y,
		required: u,
		defaultChecked: Eo(a) ? !1 : a,
		isFormControl: b,
		bubbleInput: _,
		setBubbleInput: v
	};
	return /* @__PURE__ */ x(ho, {
		scope: n,
		...S,
		children: To(f) ? f(S) : i
	});
}
var vo = "CheckboxTrigger", yo = e.forwardRef(({ __scopeCheckbox: t, onKeyDown: n, onClick: r, ...i }, a) => {
	let { control: o, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: p, isFormControl: m, bubbleInput: h } = go(vo, t), g = V(a, d), _ = e.useRef(l);
	return e.useEffect(() => {
		let e = o?.form;
		if (e) {
			let t = () => f(_.current);
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [o, f]), /* @__PURE__ */ x(H.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": Eo(l) ? "mixed" : l,
		"aria-required": u,
		"data-state": Do(l),
		"data-disabled": c ? "" : void 0,
		disabled: c,
		value: s,
		...i,
		ref: g,
		onKeyDown: U(n, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: U(r, (e) => {
			f((e) => Eo(e) ? !0 : !e), h && m && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
});
yo.displayName = vo;
var bo = e.forwardRef((e, t) => {
	let { __scopeCheckbox: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ x(_o, {
		__scopeCheckbox: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(yo, {
			...d,
			ref: t,
			__scopeCheckbox: n
		}), e && /* @__PURE__ */ x(wo, { __scopeCheckbox: n })] })
	});
});
bo.displayName = fo;
var xo = "CheckboxIndicator", So = e.forwardRef((e, t) => {
	let { __scopeCheckbox: n, forceMount: r, ...i } = e, a = go(xo, n);
	return /* @__PURE__ */ x(kt, {
		present: r || Eo(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ x(H.span, {
			"data-state": Do(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t,
			style: {
				pointerEvents: "none",
				...e.style
			}
		})
	});
});
So.displayName = xo;
var Co = "CheckboxBubbleInput", wo = e.forwardRef(({ __scopeCheckbox: t, ...n }, r) => {
	let { control: i, hasConsumerStoppedPropagationRef: a, checked: o, defaultChecked: s, required: c, disabled: l, name: u, value: d, form: f, bubbleInput: p, setBubbleInput: m } = go(Co, t), h = V(r, m), g = lo(o), _ = uo(i);
	e.useEffect(() => {
		let e = p;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !a.current;
		if (g !== o && n) {
			let t = new Event("click", { bubbles: r });
			e.indeterminate = Eo(o), n.call(e, Eo(o) ? !1 : o), e.dispatchEvent(t);
		}
	}, [
		p,
		g,
		o,
		a
	]);
	let v = e.useRef(Eo(o) ? !1 : o);
	return /* @__PURE__ */ x(H.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: s ?? v.current,
		required: c,
		disabled: l,
		name: u,
		value: d,
		form: f,
		...n,
		tabIndex: -1,
		ref: h,
		style: {
			...n.style,
			..._,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
wo.displayName = Co;
function To(e) {
	return typeof e == "function";
}
function Eo(e) {
	return e === "indeterminate";
}
function Do(e) {
	return Eo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Oo = [
	"top",
	"right",
	"bottom",
	"left"
], ko = Math.min, Ao = Math.max, jo = Math.round, Mo = Math.floor, No = (e) => ({
	x: e,
	y: e
}), Po = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Fo(e, t, n) {
	return Ao(e, ko(t, n));
}
function Io(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Lo(e) {
	return e.split("-")[0];
}
function Ro(e) {
	return e.split("-")[1];
}
function zo(e) {
	return e === "x" ? "y" : "x";
}
function Bo(e) {
	return e === "y" ? "height" : "width";
}
function Vo(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Ho(e) {
	return zo(Vo(e));
}
function Uo(e, t, n) {
	n === void 0 && (n = !1);
	let r = Ro(e), i = Ho(e), a = Bo(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Qo(o)), [o, Qo(o)];
}
function Wo(e) {
	let t = Qo(e);
	return [
		Go(e),
		t,
		Go(t)
	];
}
function Go(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Ko = ["left", "right"], qo = ["right", "left"], Jo = ["top", "bottom"], Yo = ["bottom", "top"];
function Xo(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? qo : Ko : t ? Ko : qo;
		case "left":
		case "right": return t ? Jo : Yo;
		default: return [];
	}
}
function Zo(e, t, n, r) {
	let i = Ro(e), a = Xo(Lo(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Go)))), a;
}
function Qo(e) {
	let t = Lo(e);
	return Po[t] + e.slice(t.length);
}
function $o(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function es(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : $o(e);
}
function ts(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function ns(e, t, n) {
	let { reference: r, floating: i } = e, a = Vo(t), o = Ho(t), s = Bo(o), c = Lo(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Ro(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function rs(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Io(t, e), p = es(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = ts(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = ts(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var is = 50, as = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: rs
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = ns(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < is && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = ns(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, os = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Io(e, t) || {};
		if (l == null) return {};
		let d = es(u), f = {
			x: n,
			y: r
		}, p = Ho(i), m = Bo(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = ko(d[_], T), D = ko(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = Fo(O, A, k), M = !c.arrow && Ro(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), ss = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Io(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Lo(r), _ = Vo(o), v = Lo(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Qo(o)] : Wo(o)), x = p !== "none";
			!d && x && b.push(...Zo(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Uo(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Vo(t)) || T.every((e) => Vo(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Vo(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function cs(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function ls(e) {
	return Oo.some((t) => e[t] >= 0);
}
var us = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Io(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = cs(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: ls(e)
					} };
				}
				case "escaped": {
					let e = cs(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: ls(e)
					} };
				}
				default: return {};
			}
		}
	};
}, ds = /* @__PURE__ */ new Set(["left", "top"]);
async function fs(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Lo(n), s = Ro(n), c = Vo(n) === "y", l = ds.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Io(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var ps = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await fs(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, ms = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Io(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Vo(Lo(i)), p = zo(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Fo(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Fo(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, hs = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Io(e, t), u = {
				x: n,
				y: r
			}, d = Vo(i), f = zo(d), p = u[f], m = u[d], h = Io(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = ds.has(Lo(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, gs = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Io(e, t), u = await o.detectOverflow(t, l), d = Lo(i), f = Ro(i), p = Vo(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = ko(h - u[g], v), x = ko(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = Ao(u.left, 0), t = Ao(u.right, 0), n = Ao(u.top, 0), r = Ao(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : Ao(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : Ao(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function _s() {
	return typeof window < "u";
}
function vs(e) {
	return xs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ys(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bs(e) {
	return ((xs(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function xs(e) {
	return _s() ? e instanceof Node || e instanceof ys(e).Node : !1;
}
function Ss(e) {
	return _s() ? e instanceof Element || e instanceof ys(e).Element : !1;
}
function Cs(e) {
	return _s() ? e instanceof HTMLElement || e instanceof ys(e).HTMLElement : !1;
}
function ws(e) {
	return !_s() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ys(e).ShadowRoot;
}
function Ts(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Is(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Es(e) {
	return /^(table|td|th)$/.test(vs(e));
}
function Ds(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Os = /transform|translate|scale|rotate|perspective|filter/, ks = /paint|layout|strict|content/, As = (e) => !!e && e !== "none", js;
function Ms(e) {
	let t = Ss(e) ? Is(e) : e;
	return As(t.transform) || As(t.translate) || As(t.scale) || As(t.rotate) || As(t.perspective) || !Ps() && (As(t.backdropFilter) || As(t.filter)) || Os.test(t.willChange || "") || ks.test(t.contain || "");
}
function Ns(e) {
	let t = Rs(e);
	for (; Cs(t) && !Fs(t);) {
		if (Ms(t)) return t;
		if (Ds(t)) return null;
		t = Rs(t);
	}
	return null;
}
function Ps() {
	return js ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), js;
}
function Fs(e) {
	return /^(html|body|#document)$/.test(vs(e));
}
function Is(e) {
	return ys(e).getComputedStyle(e);
}
function Ls(e) {
	return Ss(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Rs(e) {
	if (vs(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ws(e) && e.host || bs(e);
	return ws(t) ? t.host : t;
}
function zs(e) {
	let t = Rs(e);
	return Fs(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Cs(t) && Ts(t) ? t : zs(t);
}
function Bs(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = zs(e), i = r === e.ownerDocument?.body, a = ys(r);
	if (i) {
		let e = Vs(a);
		return t.concat(a, a.visualViewport || [], Ts(r) ? r : [], e && n ? Bs(e) : []);
	} else return t.concat(r, Bs(r, [], n));
}
function Vs(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Hs(e) {
	let t = Is(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Cs(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = jo(n) !== a || jo(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Us(e) {
	return Ss(e) ? e : e.contextElement;
}
function Ws(e) {
	let t = Us(e);
	if (!Cs(t)) return No(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Hs(t), o = (a ? jo(n.width) : n.width) / r, s = (a ? jo(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Gs = /* @__PURE__ */ No(0);
function Ks(e) {
	let t = ys(e);
	return !Ps() || !t.visualViewport ? Gs : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function qs(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== ys(e) ? !1 : t;
}
function Js(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Us(e), o = No(1);
	t && (r ? Ss(r) && (o = Ws(r)) : o = Ws(e));
	let s = qs(a, n, r) ? Ks(a) : No(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = ys(a), t = r && Ss(r) ? ys(r) : r, n = e, i = Vs(n);
		for (; i && r && t !== n;) {
			let e = Ws(i), t = i.getBoundingClientRect(), r = Is(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = ys(i), i = Vs(n);
		}
	}
	return ts({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Ys(e, t) {
	let n = Ls(e).scrollLeft;
	return t ? t.left + n : Js(bs(e)).left + n;
}
function Xs(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Ys(e, n),
		y: n.top + t.scrollTop
	};
}
function Zs(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = bs(r), s = t ? Ds(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = No(1), u = No(0), d = Cs(r);
	if ((d || !d && !a) && ((vs(r) !== "body" || Ts(o)) && (c = Ls(r)), d)) {
		let e = Js(r);
		l = Ws(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Xs(o, c) : No(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Qs(e) {
	return Array.from(e.getClientRects());
}
function $s(e) {
	let t = bs(e), n = Ls(e), r = e.ownerDocument.body, i = Ao(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ao(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Ys(e), s = -n.scrollTop;
	return Is(r).direction === "rtl" && (o += Ao(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var ec = 25;
function tc(e, t) {
	let n = ys(e), r = bs(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Ps();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Ys(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= ec && (a -= o);
	} else l <= ec && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function nc(e, t) {
	let n = Js(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Cs(e) ? Ws(e) : No(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function rc(e, t, n) {
	let r;
	if (t === "viewport") r = tc(e, n);
	else if (t === "document") r = $s(bs(e));
	else if (Ss(t)) r = nc(t, n);
	else {
		let n = Ks(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return ts(r);
}
function ic(e, t) {
	let n = Rs(e);
	return n === t || !Ss(n) || Fs(n) ? !1 : Is(n).position === "fixed" || ic(n, t);
}
function ac(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Bs(e, [], !1).filter((e) => Ss(e) && vs(e) !== "body"), i = null, a = Is(e).position === "fixed", o = a ? Rs(e) : e;
	for (; Ss(o) && !Fs(o);) {
		let t = Is(o), n = Ms(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Ts(o) && !n && ic(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Rs(o);
	}
	return t.set(e, r), r;
}
function oc(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Ds(t) ? [] : ac(t, this._c) : [].concat(n), r], o = rc(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = rc(t, a[e], i);
		s = Ao(n.top, s), c = ko(n.right, c), l = ko(n.bottom, l), u = Ao(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function sc(e) {
	let { width: t, height: n } = Hs(e);
	return {
		width: t,
		height: n
	};
}
function cc(e, t, n) {
	let r = Cs(t), i = bs(t), a = n === "fixed", o = Js(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = No(0);
	function l() {
		c.x = Ys(i);
	}
	if (r || !r && !a) if ((vs(t) !== "body" || Ts(i)) && (s = Ls(t)), r) {
		let e = Js(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Xs(i, s) : No(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function lc(e) {
	return Is(e).position === "static";
}
function uc(e, t) {
	if (!Cs(e) || Is(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return bs(e) === n && (n = n.ownerDocument.body), n;
}
function dc(e, t) {
	let n = ys(e);
	if (Ds(e)) return n;
	if (!Cs(e)) {
		let t = Rs(e);
		for (; t && !Fs(t);) {
			if (Ss(t) && !lc(t)) return t;
			t = Rs(t);
		}
		return n;
	}
	let r = uc(e, t);
	for (; r && Es(r) && lc(r);) r = uc(r, t);
	return r && Fs(r) && lc(r) && !Ms(r) ? n : r || Ns(e) || n;
}
var fc = async function(e) {
	let t = this.getOffsetParent || dc, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: cc(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function pc(e) {
	return Is(e).direction === "rtl";
}
var mc = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Zs,
	getDocumentElement: bs,
	getClippingRect: oc,
	getOffsetParent: dc,
	getElementRects: fc,
	getClientRects: Qs,
	getDimensions: sc,
	getScale: Ws,
	isElement: Ss,
	isRTL: pc
};
function hc(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function gc(e, t) {
	let n = null, r, i = bs(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Mo(d), h = Mo(i.clientWidth - (u + f)), g = Mo(i.clientHeight - (d + p)), _ = Mo(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Ao(0, ko(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !hc(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function _c(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Us(e), u = i || a ? [...l ? Bs(l) : [], ...t ? Bs(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? gc(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Js(e) : null;
	c && g();
	function g() {
		let t = Js(e);
		h && !hc(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var vc = ps, yc = ms, bc = ss, xc = gs, Sc = us, Cc = os, wc = hs, Tc = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: mc,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return as(e, t, {
		...i,
		platform: a
	});
}, Ec = typeof document < "u" ? p : function() {};
function Dc(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Dc(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Dc(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Oc(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function kc(e, t) {
	let n = Oc(e);
	return Math.round(t * n) / n;
}
function Ac(t) {
	let n = e.useRef(t);
	return Ec(() => {
		n.current = t;
	}), n;
}
function jc(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = t, [d, f] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [p, m] = e.useState(i);
	Dc(p, i) || m(i);
	let [h, g] = e.useState(null), [_, y] = e.useState(null), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, g(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = o || h, C = s || _, w = e.useRef(null), T = e.useRef(null), E = e.useRef(d), D = l != null, O = Ac(l), k = Ac(a), A = Ac(u), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: p
		};
		k.current && (e.platform = k.current), Tc(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !Dc(E.current, t) && (E.current = t, v.flushSync(() => {
				f(t);
			}));
		});
	}, [
		p,
		n,
		r,
		k,
		A
	]);
	Ec(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let M = e.useRef(!1);
	Ec(() => (M.current = !0, () => {
		M.current = !1;
	}), []), Ec(() => {
		if (S && (w.current = S), C && (T.current = C), S && C) {
			if (O.current) return O.current(S, C, j);
			j();
		}
	}, [
		S,
		C,
		j,
		O,
		D
	]);
	let N = e.useMemo(() => ({
		reference: w,
		floating: T,
		setReference: b,
		setFloating: x
	}), [b, x]), P = e.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), F = e.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = kc(P.floating, d.x), n = kc(P.floating, d.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Oc(P.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: r,
			left: t,
			top: n
		};
	}, [
		r,
		c,
		P.floating,
		d.x,
		d.y
	]);
	return e.useMemo(() => ({
		...d,
		update: j,
		refs: N,
		elements: P,
		floatingStyles: F
	}), [
		d,
		j,
		N,
		P,
		F
	]);
}
var Mc = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Cc({
				element: r.current,
				padding: i
			}).fn(n) : r ? Cc({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Nc = (e, t) => {
	let n = vc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Pc = (e, t) => {
	let n = yc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Fc = (e, t) => ({
	fn: wc(e).fn,
	options: [e, t]
}), Ic = (e, t) => {
	let n = bc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Lc = (e, t) => {
	let n = xc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Rc = (e, t) => {
	let n = Sc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, zc = (e, t) => {
	let n = Mc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Bc = "Arrow", Vc = e.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ x(H.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ x("polygon", { points: "0,0 30,0 15,10" })
	});
});
Vc.displayName = Bc;
var Hc = Vc, Uc = "Popper", [Wc, Gc] = mt(Uc), [Kc, qc] = Wc(Uc), Jc = (t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null);
	return /* @__PURE__ */ x(Kc, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		children: r
	});
};
Jc.displayName = Uc;
var Yc = "PopperAnchor", Xc = e.forwardRef((t, n) => {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = qc(Yc, r), s = e.useRef(null), c = V(n, s), l = e.useRef(null);
	return e.useEffect(() => {
		let e = l.current;
		l.current = i?.current || s.current, e !== l.current && o.onAnchorChange(l.current);
	}), i ? null : /* @__PURE__ */ x(H.div, {
		...a,
		ref: c
	});
});
Xc.displayName = Yc;
var Zc = "PopperContent", [Qc, $c] = Wc(Zc), el = e.forwardRef((t, n) => {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = "partial", hideWhenDetached: p = !1, updatePositionStrategy: m = "optimized", onPlaced: h, ...g } = t, _ = qc(Zc, r), [v, y] = e.useState(null), b = V(n, (e) => y(e)), [S, C] = e.useState(null), w = uo(S), T = w?.width ?? 0, E = w?.height ?? 0, D = i + (o === "center" ? "" : "-" + o), O = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, k = Array.isArray(u) ? u : [u], A = k.length > 0, j = {
		padding: O,
		boundary: k.filter(il),
		altBoundary: A
	}, { refs: M, floatingStyles: N, placement: P, isPositioned: F, middlewareData: I } = jc({
		strategy: "fixed",
		placement: D,
		whileElementsMounted: (...e) => _c(...e, { animationFrame: m === "always" }),
		elements: { reference: _.anchor },
		middleware: [
			Nc({
				mainAxis: a + E,
				alignmentAxis: s
			}),
			l && Pc({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === "partial" ? Fc() : void 0,
				...j
			}),
			l && Ic({ ...j }),
			Lc({
				...j,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			S && zc({
				element: S,
				padding: c
			}),
			al({
				arrowWidth: T,
				arrowHeight: E
			}),
			p && Rc({
				strategy: "referenceHidden",
				...j
			})
		]
	}), [ee, te] = ol(P), L = Pn(h);
	Ct(() => {
		F && L?.();
	}, [F, L]);
	let ne = I.arrow?.x, R = I.arrow?.y, z = I.arrow?.centerOffset !== 0, [re, ie] = e.useState();
	return Ct(() => {
		v && ie(window.getComputedStyle(v).zIndex);
	}, [v]), /* @__PURE__ */ x("div", {
		ref: M.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...N,
			transform: F ? N.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: re,
			"--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
			...I.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ x(Qc, {
			scope: r,
			placedSide: ee,
			onArrowChange: C,
			arrowX: ne,
			arrowY: R,
			shouldHideArrow: z,
			children: /* @__PURE__ */ x(H.div, {
				"data-side": ee,
				"data-align": te,
				...g,
				ref: b,
				style: {
					...g.style,
					animation: F ? void 0 : "none"
				}
			})
		})
	});
});
el.displayName = Zc;
var tl = "PopperArrow", nl = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, rl = e.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = $c(tl, n), a = nl[i.placedSide];
	return /* @__PURE__ */ x("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ x(Hc, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
rl.displayName = tl;
function il(e) {
	return e !== null;
}
var al = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = ol(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function ol(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var sl = Jc, cl = Xc, ll = el, ul = rl, dl = "rovingFocusGroup.onEntryFocus", fl = {
	bubbles: !1,
	cancelable: !0
}, pl = "RovingFocusGroup", [ml, hl, gl] = St(pl), [_l, vl] = mt(pl, [gl]), [yl, bl] = _l(pl), xl = e.forwardRef((e, t) => /* @__PURE__ */ x(ml.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ x(ml.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ x(Sl, {
			...e,
			ref: t
		})
	})
}));
xl.displayName = pl;
var Sl = e.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...f } = t, p = e.useRef(null), m = V(n, p), h = Qt(o), [g, _] = Tt({
		prop: s,
		defaultProp: c ?? null,
		onChange: l,
		caller: pl
	}), [v, y] = e.useState(!1), b = Pn(u), S = hl(r), C = e.useRef(!1), [w, T] = e.useState(0);
	return e.useEffect(() => {
		let e = p.current;
		if (e) return e.addEventListener(dl, b), () => e.removeEventListener(dl, b);
	}, [b]), /* @__PURE__ */ x(yl, {
		scope: r,
		orientation: i,
		dir: h,
		loop: a,
		currentTabStopId: g,
		onItemFocus: e.useCallback((e) => _(e), [_]),
		onItemShiftTab: e.useCallback(() => y(!0), []),
		onFocusableItemAdd: e.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: e.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ x(H.div, {
			tabIndex: v || w === 0 ? -1 : 0,
			"data-orientation": i,
			...f,
			ref: m,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: U(t.onMouseDown, () => {
				C.current = !0;
			}),
			onFocus: U(t.onFocus, (e) => {
				let t = !C.current;
				if (e.target === e.currentTarget && t && !v) {
					let t = new CustomEvent(dl, fl);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = S().filter((e) => e.focusable);
						Ol([
							e.find((e) => e.active),
							e.find((e) => e.id === g),
							...e
						].filter(Boolean).map((e) => e.ref.current), d);
					}
				}
				C.current = !1;
			}),
			onBlur: U(t.onBlur, () => y(!1))
		})
	});
}), Cl = "RovingFocusGroupItem", wl = e.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: o, children: s, ...c } = t, l = Ft(), u = o || l, d = bl(Cl, r), f = d.currentTabStopId === u, p = hl(r), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d;
	return e.useEffect(() => {
		if (i) return m(), () => h();
	}, [
		i,
		m,
		h
	]), /* @__PURE__ */ x(ml.ItemSlot, {
		scope: r,
		id: u,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ x(H.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": d.orientation,
			...c,
			ref: n,
			onMouseDown: U(t.onMouseDown, (e) => {
				i ? d.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: U(t.onFocus, () => d.onItemFocus(u)),
			onKeyDown: U(t.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					d.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = Dl(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? kl(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => Ol(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: g != null
			}) : s
		})
	});
});
wl.displayName = Cl;
var Tl = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function El(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function Dl(e, t, n) {
	let r = El(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return Tl[r];
}
function Ol(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function kl(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Al = xl, jl = wl;
//#endregion
//#region node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function Ml(t) {
	let n = /* @__PURE__ */ Nl(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(Fl);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ x(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ x(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
/* @__NO_SIDE_EFFECTS__ */
function Nl(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = Ll(r), a = Il(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? tt(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var Pl = Symbol("radix.slottable");
function Fl(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Pl;
}
function Il(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function Ll(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-menu/dist/index.mjs
var Rl = ["Enter", " "], zl = [
	"ArrowDown",
	"PageUp",
	"Home"
], Bl = [
	"ArrowUp",
	"PageDown",
	"End"
], Vl = [...zl, ...Bl], Hl = {
	ltr: [...Rl, "ArrowRight"],
	rtl: [...Rl, "ArrowLeft"]
}, Ul = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, Wl = "Menu", [Gl, Kl, ql] = St(Wl), [Jl, Yl] = mt(Wl, [
	ql,
	Gc,
	vl
]), Xl = Gc(), Zl = vl(), [Ql, $l] = Jl(Wl), [eu, tu] = Jl(Wl), nu = (t) => {
	let { __scopeMenu: n, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = t, c = Xl(n), [l, u] = e.useState(null), d = e.useRef(!1), f = Pn(o), p = Qt(a);
	return e.useEffect(() => {
		let e = () => {
			d.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => d.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ x(sl, {
		...c,
		children: /* @__PURE__ */ x(Ql, {
			scope: n,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ x(eu, {
				scope: n,
				onClose: e.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: s,
				children: i
			})
		})
	});
};
nu.displayName = Wl;
var ru = "MenuAnchor", iu = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ x(cl, {
		...Xl(n),
		...r,
		ref: t
	});
});
iu.displayName = ru;
var au = "MenuPortal", [ou, su] = Jl(au, { forceMount: void 0 }), cu = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = $l(au, t);
	return /* @__PURE__ */ x(ou, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ x(kt, {
			present: n || a.open,
			children: /* @__PURE__ */ x(fr, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
cu.displayName = au;
var lu = "MenuContent", [uu, du] = Jl(lu), fu = e.forwardRef((e, t) => {
	let n = su(lu, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = $l(lu, e.__scopeMenu), o = tu(lu, e.__scopeMenu);
	return /* @__PURE__ */ x(Gl.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ x(kt, {
			present: r || a.open,
			children: /* @__PURE__ */ x(Gl.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ x(pu, {
					...i,
					ref: t
				}) : /* @__PURE__ */ x(mu, {
					...i,
					ref: t
				})
			})
		})
	});
}), pu = e.forwardRef((t, n) => {
	let r = $l(lu, t.__scopeMenu), i = e.useRef(null), a = V(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return Ni(e);
	}, []), /* @__PURE__ */ x(gu, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: U(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}), mu = e.forwardRef((e, t) => {
	let n = $l(lu, e.__scopeMenu);
	return /* @__PURE__ */ x(gu, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), hu = /* @__PURE__ */ Ml("MenuContent.ScrollLock"), gu = e.forwardRef((t, n) => {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...g } = t, _ = $l(lu, r), v = tu(lu, r), y = Xl(r), b = Zl(r), S = Kl(r), [C, w] = e.useState(null), T = e.useRef(null), E = V(n, T, _.onContentChange), D = e.useRef(0), O = e.useRef(""), k = e.useRef(0), A = e.useRef(null), j = e.useRef("right"), M = e.useRef(0), N = h ? wi : e.Fragment, P = h ? {
		as: hu,
		allowPinchZoom: !0
	} : void 0, F = (e) => {
		let t = O.current + e, n = S().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = ed(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			O.current = t, window.clearTimeout(D.current), t !== "" && (D.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	e.useEffect(() => () => window.clearTimeout(D.current), []), mr();
	let I = e.useCallback((e) => j.current === A.current?.side && nd(e, A.current?.area), []);
	return /* @__PURE__ */ x(uu, {
		scope: r,
		searchRef: O,
		onItemEnter: e.useCallback((e) => {
			I(e) && e.preventDefault();
		}, [I]),
		onItemLeave: e.useCallback((e) => {
			I(e) || (T.current?.focus(), w(null));
		}, [I]),
		onTriggerLeave: e.useCallback((e) => {
			I(e) && e.preventDefault();
		}, [I]),
		pointerGraceTimerRef: k,
		onPointerGraceIntentChange: e.useCallback((e) => {
			A.current = e;
		}, []),
		children: /* @__PURE__ */ x(N, {
			...P,
			children: /* @__PURE__ */ x($n, {
				asChild: !0,
				trapped: a,
				onMountAutoFocus: U(o, (e) => {
					e.preventDefault(), T.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: s,
				children: /* @__PURE__ */ x(Hn, {
					asChild: !0,
					disableOutsidePointerEvents: c,
					onEscapeKeyDown: u,
					onPointerDownOutside: d,
					onFocusOutside: f,
					onInteractOutside: p,
					onDismiss: m,
					children: /* @__PURE__ */ x(Al, {
						asChild: !0,
						...b,
						dir: v.dir,
						orientation: "vertical",
						loop: i,
						currentTabStopId: C,
						onCurrentTabStopIdChange: w,
						onEntryFocus: U(l, (e) => {
							v.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ x(ll, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": Yu(_.open),
							"data-radix-menu-content": "",
							dir: v.dir,
							...y,
							...g,
							ref: E,
							style: {
								outline: "none",
								...g.style
							},
							onKeyDown: U(g.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && F(e.key));
								let i = T.current;
								if (e.target !== i || !Vl.includes(e.key)) return;
								e.preventDefault();
								let a = S().filter((e) => !e.disabled).map((e) => e.ref.current);
								Bl.includes(e.key) && a.reverse(), Qu(a);
							}),
							onBlur: U(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(D.current), O.current = "");
							}),
							onPointerMove: U(t.onPointerMove, rd((e) => {
								let t = e.target, n = M.current !== e.clientX;
								e.currentTarget.contains(t) && n && (j.current = e.clientX > M.current ? "right" : "left", M.current = e.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
fu.displayName = lu;
var _u = "MenuGroup", vu = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ x(H.div, {
		role: "group",
		...r,
		ref: t
	});
});
vu.displayName = _u;
var yu = "MenuLabel", bu = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ x(H.div, {
		...r,
		ref: t
	});
});
bu.displayName = yu;
var xu = "MenuItem", Su = "menu.itemSelect", Cu = e.forwardRef((t, n) => {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = e.useRef(null), s = tu(xu, t.__scopeMenu), c = du(xu, t.__scopeMenu), l = V(n, o), u = e.useRef(!1), d = () => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(Su, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Su, (e) => i?.(e), { once: !0 }), ct(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	};
	return /* @__PURE__ */ x(wu, {
		...a,
		ref: l,
		disabled: r,
		onClick: U(t.onClick, d),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), u.current = !0;
		},
		onPointerUp: U(t.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: U(t.onKeyDown, (e) => {
			let t = c.searchRef.current !== "";
			r || t && e.key === " " || Rl.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
Cu.displayName = xu;
var wu = e.forwardRef((t, n) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = du(xu, r), c = Zl(r), l = e.useRef(null), u = V(n, l), [d, f] = e.useState(!1), [p, m] = e.useState("");
	return e.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ x(Gl.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ x(jl, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ x(H.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: U(t.onPointerMove, rd((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: U(t.onPointerLeave, rd((e) => s.onItemLeave(e))),
				onFocus: U(t.onFocus, () => f(!0)),
				onBlur: U(t.onBlur, () => f(!1))
			})
		})
	});
}), Tu = "MenuCheckboxItem", Eu = e.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ x(Pu, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ x(Cu, {
			role: "menuitemcheckbox",
			"aria-checked": Xu(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Zu(n),
			onSelect: U(i.onSelect, () => r?.(Xu(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Eu.displayName = Tu;
var Du = "MenuRadioGroup", [Ou, ku] = Jl(Du, {
	value: void 0,
	onValueChange: () => {}
}), Au = e.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = Pn(r);
	return /* @__PURE__ */ x(Ou, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ x(vu, {
			...i,
			ref: t
		})
	});
});
Au.displayName = Du;
var ju = "MenuRadioItem", Mu = e.forwardRef((e, t) => {
	let { value: n, ...r } = e, i = ku(ju, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ x(Pu, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ x(Cu, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Zu(a),
			onSelect: U(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
Mu.displayName = ju;
var Nu = "MenuItemIndicator", [Pu, Fu] = Jl(Nu, { checked: !1 }), Iu = e.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Fu(Nu, n);
	return /* @__PURE__ */ x(kt, {
		present: r || Xu(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ x(H.span, {
			...i,
			ref: t,
			"data-state": Zu(a.checked)
		})
	});
});
Iu.displayName = Nu;
var Lu = "MenuSeparator", Ru = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ x(H.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
Ru.displayName = Lu;
var zu = "MenuArrow", Bu = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ x(ul, {
		...Xl(n),
		...r,
		ref: t
	});
});
Bu.displayName = zu;
var Vu = "MenuSub", [Hu, Uu] = Jl(Vu), Wu = (t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = $l(Vu, n), s = Xl(n), [c, l] = e.useState(null), [u, d] = e.useState(null), f = Pn(a);
	return e.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ x(sl, {
		...s,
		children: /* @__PURE__ */ x(Ql, {
			scope: n,
			open: i,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ x(Hu, {
				scope: n,
				contentId: Ft(),
				triggerId: Ft(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
};
Wu.displayName = Vu;
var Gu = "MenuSubTrigger", Ku = e.forwardRef((t, n) => {
	let r = $l(Gu, t.__scopeMenu), i = tu(Gu, t.__scopeMenu), a = Uu(Gu, t.__scopeMenu), o = du(Gu, t.__scopeMenu), s = e.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = e.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	return e.useEffect(() => d, [d]), e.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]), /* @__PURE__ */ x(iu, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ x(wu, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": a.contentId,
			"data-state": Yu(r.open),
			...t,
			ref: tt(n, a.onTriggerChange),
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: U(t.onPointerMove, rd((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: U(t.onPointerLeave, rd((e) => {
				d();
				let t = r.content?.getBoundingClientRect();
				if (t) {
					let n = r.content?.dataset.side, i = n === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: s,
								y: t.bottom
							}
						],
						side: n
					}), window.clearTimeout(c.current), c.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: U(t.onKeyDown, (e) => {
				let n = o.searchRef.current !== "";
				t.disabled || n && e.key === " " || Hl[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
});
Ku.displayName = Gu;
var qu = "MenuSubContent", Ju = e.forwardRef((t, n) => {
	let r = su(lu, t.__scopeMenu), { forceMount: i = r.forceMount, ...a } = t, o = $l(lu, t.__scopeMenu), s = tu(lu, t.__scopeMenu), c = Uu(qu, t.__scopeMenu), l = e.useRef(null), u = V(n, l);
	return /* @__PURE__ */ x(Gl.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ x(kt, {
			present: i || o.open,
			children: /* @__PURE__ */ x(Gl.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ x(gu, {
					id: c.contentId,
					"aria-labelledby": c.triggerId,
					...a,
					ref: u,
					align: "start",
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: U(t.onFocusOutside, (e) => {
						e.target !== c.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: U(t.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: U(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = Ul[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
Ju.displayName = qu;
function Yu(e) {
	return e ? "open" : "closed";
}
function Xu(e) {
	return e === "indeterminate";
}
function Zu(e) {
	return Xu(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Qu(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function $u(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function ed(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = $u(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function td(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function nd(e, t) {
	return t ? td({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function rd(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var id = nu, ad = iu, od = cu, sd = fu, cd = vu, ld = bu, ud = Cu, dd = Eu, fd = Au, pd = Mu, md = Iu, hd = Ru, gd = Bu, _d = Ku, vd = Ju, yd = "DropdownMenu", [bd, xd] = mt(yd, [Yl]), Sd = Yl(), [Cd, wd] = bd(yd), Td = (t) => {
	let { __scopeDropdownMenu: n, children: r, dir: i, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = t, l = Sd(n), u = e.useRef(null), [d, f] = Tt({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: yd
	});
	return /* @__PURE__ */ x(Cd, {
		scope: n,
		triggerId: Ft(),
		triggerRef: u,
		contentId: Ft(),
		open: d,
		onOpenChange: f,
		onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
		modal: c,
		children: /* @__PURE__ */ x(id, {
			...l,
			open: d,
			onOpenChange: f,
			dir: i,
			modal: c,
			children: r
		})
	});
};
Td.displayName = yd;
var Ed = "DropdownMenuTrigger", Dd = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = wd(Ed, n);
	return /* @__PURE__ */ x(ad, {
		asChild: !0,
		...Sd(n),
		children: /* @__PURE__ */ x(H.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: tt(t, a.triggerRef),
			onPointerDown: U(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: U(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
Dd.displayName = Ed;
var Od = "DropdownMenuPortal", kd = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e;
	return /* @__PURE__ */ x(od, {
		...Sd(t),
		...n
	});
};
kd.displayName = Od;
var Ad = "DropdownMenuContent", jd = e.forwardRef((t, n) => {
	let { __scopeDropdownMenu: r, ...i } = t, a = wd(Ad, r), o = Sd(r), s = e.useRef(!1);
	return /* @__PURE__ */ x(sd, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...i,
		ref: n,
		onCloseAutoFocus: U(t.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: U(t.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!a.modal || r) && (s.current = !0);
		}),
		style: {
			...t.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
jd.displayName = Ad;
var Md = "DropdownMenuGroup", Nd = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(cd, {
		...Sd(n),
		...r,
		ref: t
	});
});
Nd.displayName = Md;
var Pd = "DropdownMenuLabel", Fd = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(ld, {
		...Sd(n),
		...r,
		ref: t
	});
});
Fd.displayName = Pd;
var Id = "DropdownMenuItem", Ld = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(ud, {
		...Sd(n),
		...r,
		ref: t
	});
});
Ld.displayName = Id;
var Rd = "DropdownMenuCheckboxItem", zd = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(dd, {
		...Sd(n),
		...r,
		ref: t
	});
});
zd.displayName = Rd;
var Bd = "DropdownMenuRadioGroup", Vd = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(fd, {
		...Sd(n),
		...r,
		ref: t
	});
});
Vd.displayName = Bd;
var Hd = "DropdownMenuRadioItem", Ud = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(pd, {
		...Sd(n),
		...r,
		ref: t
	});
});
Ud.displayName = Hd;
var Wd = "DropdownMenuItemIndicator", Gd = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(md, {
		...Sd(n),
		...r,
		ref: t
	});
});
Gd.displayName = Wd;
var Kd = "DropdownMenuSeparator", qd = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(hd, {
		...Sd(n),
		...r,
		ref: t
	});
});
qd.displayName = Kd;
var Jd = "DropdownMenuArrow", Yd = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(gd, {
		...Sd(n),
		...r,
		ref: t
	});
});
Yd.displayName = Jd;
var Xd = "DropdownMenuSubTrigger", Zd = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(_d, {
		...Sd(n),
		...r,
		ref: t
	});
});
Zd.displayName = Xd;
var Qd = "DropdownMenuSubContent", $d = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ x(vd, {
		...Sd(n),
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
$d.displayName = Qd;
var ef = Td, tf = Dd, nf = kd, rf = jd, af = Ld, of = qd, sf, cf = "HoverCard", [lf, uf] = mt(cf, [Gc]), df = Gc(), [ff, pf] = lf(cf), mf = (t) => {
	let { __scopeHoverCard: n, children: r, open: i, defaultOpen: a, onOpenChange: o, openDelay: s = 700, closeDelay: c = 300 } = t, l = df(n), u = e.useRef(0), d = e.useRef(0), f = e.useRef(!1), p = e.useRef(!1), [m, h] = Tt({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: cf
	}), g = e.useCallback(() => {
		clearTimeout(d.current), u.current = window.setTimeout(() => h(!0), s);
	}, [s, h]), _ = e.useCallback(() => {
		clearTimeout(u.current), !f.current && !p.current && (d.current = window.setTimeout(() => h(!1), c));
	}, [c, h]), v = e.useCallback(() => h(!1), [h]);
	return e.useEffect(() => () => {
		clearTimeout(u.current), clearTimeout(d.current);
	}, []), /* @__PURE__ */ x(ff, {
		scope: n,
		open: m,
		onOpenChange: h,
		onOpen: g,
		onClose: _,
		onDismiss: v,
		hasSelectionRef: f,
		isPointerDownOnContentRef: p,
		children: /* @__PURE__ */ x(sl, {
			...l,
			children: r
		})
	});
};
mf.displayName = cf;
var hf = "HoverCardTrigger", gf = e.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = pf(hf, n);
	return /* @__PURE__ */ x(cl, {
		asChild: !0,
		...df(n),
		children: /* @__PURE__ */ x(H.a, {
			"data-state": i.open ? "open" : "closed",
			...r,
			ref: t,
			onPointerEnter: U(e.onPointerEnter, Ef(i.onOpen)),
			onPointerLeave: U(e.onPointerLeave, Ef(i.onClose)),
			onFocus: U(e.onFocus, i.onOpen),
			onBlur: U(e.onBlur, i.onClose),
			onTouchStart: U(e.onTouchStart, (e) => e.preventDefault())
		})
	});
});
gf.displayName = hf;
var _f = "HoverCardPortal", [vf, yf] = lf(_f, { forceMount: void 0 }), bf = (e) => {
	let { __scopeHoverCard: t, forceMount: n, children: r, container: i } = e, a = pf(_f, t);
	return /* @__PURE__ */ x(vf, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ x(kt, {
			present: n || a.open,
			children: /* @__PURE__ */ x(fr, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
bf.displayName = _f;
var xf = "HoverCardContent", Sf = e.forwardRef((e, t) => {
	let n = yf(xf, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...i } = e, a = pf(xf, e.__scopeHoverCard);
	return /* @__PURE__ */ x(kt, {
		present: r || a.open,
		children: /* @__PURE__ */ x(Cf, {
			"data-state": a.open ? "open" : "closed",
			...i,
			onPointerEnter: U(e.onPointerEnter, Ef(a.onOpen)),
			onPointerLeave: U(e.onPointerLeave, Ef(a.onClose)),
			ref: t
		})
	});
});
Sf.displayName = xf;
var Cf = e.forwardRef((t, n) => {
	let { __scopeHoverCard: r, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, ...c } = t, l = pf(xf, r), u = df(r), d = e.useRef(null), f = V(n, d), [p, m] = e.useState(!1);
	return e.useEffect(() => {
		if (p) {
			let e = document.body;
			return sf = e.style.userSelect || e.style.webkitUserSelect, e.style.userSelect = "none", e.style.webkitUserSelect = "none", () => {
				e.style.userSelect = sf, e.style.webkitUserSelect = sf;
			};
		}
	}, [p]), e.useEffect(() => {
		if (d.current) {
			let e = () => {
				m(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
					document.getSelection()?.toString() !== "" && (l.hasSelectionRef.current = !0);
				});
			};
			return document.addEventListener("pointerup", e), () => {
				document.removeEventListener("pointerup", e), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
			};
		}
	}, [l.isPointerDownOnContentRef, l.hasSelectionRef]), e.useEffect(() => {
		d.current && Df(d.current).forEach((e) => e.setAttribute("tabindex", "-1"));
	}), /* @__PURE__ */ x(Hn, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onInteractOutside: s,
		onEscapeKeyDown: i,
		onPointerDownOutside: a,
		onFocusOutside: U(o, (e) => {
			e.preventDefault();
		}),
		onDismiss: l.onDismiss,
		children: /* @__PURE__ */ x(ll, {
			...u,
			...c,
			onPointerDown: U(c.onPointerDown, (e) => {
				e.currentTarget.contains(e.target) && m(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
			}),
			ref: f,
			style: {
				...c.style,
				userSelect: p ? "text" : void 0,
				WebkitUserSelect: p ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
}), wf = "HoverCardArrow", Tf = e.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e;
	return /* @__PURE__ */ x(ul, {
		...df(n),
		...r,
		ref: t
	});
});
Tf.displayName = wf;
function Ef(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function Df(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
var Of = mf, kf = gf, Af = bf, jf = Sf, Mf = "Label", Nf = e.forwardRef((e, t) => /* @__PURE__ */ x(H.label, {
	...e,
	ref: t,
	onMouseDown: (t) => {
		t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
	}
}));
Nf.displayName = Mf;
var Pf = Nf;
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
function Ff(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function If(t) {
	let n = /* @__PURE__ */ Lf(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(zf);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ x(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ x(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
/* @__NO_SIDE_EFFECTS__ */
function Lf(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = Vf(r), a = Bf(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? tt(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var Rf = Symbol("radix.slottable");
function zf(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Rf;
}
function Bf(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function Vf(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-popover/dist/index.mjs
var Hf = "Popover", [Uf, Wf] = mt(Hf, [Gc]), Gf = Gc(), [Kf, qf] = Uf(Hf), Jf = (t) => {
	let { __scopePopover: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !1 } = t, c = Gf(n), l = e.useRef(null), [u, d] = e.useState(!1), [f, p] = Tt({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Hf
	});
	return /* @__PURE__ */ x(sl, {
		...c,
		children: /* @__PURE__ */ x(Kf, {
			scope: n,
			contentId: Ft(),
			triggerRef: l,
			open: f,
			onOpenChange: p,
			onOpenToggle: e.useCallback(() => p((e) => !e), [p]),
			hasCustomAnchor: u,
			onCustomAnchorAdd: e.useCallback(() => d(!0), []),
			onCustomAnchorRemove: e.useCallback(() => d(!1), []),
			modal: s,
			children: r
		})
	});
};
Jf.displayName = Hf;
var Yf = "PopoverAnchor", Xf = e.forwardRef((t, n) => {
	let { __scopePopover: r, ...i } = t, a = qf(Yf, r), o = Gf(r), { onCustomAnchorAdd: s, onCustomAnchorRemove: c } = a;
	return e.useEffect(() => (s(), () => c()), [s, c]), /* @__PURE__ */ x(cl, {
		...o,
		...i,
		ref: n
	});
});
Xf.displayName = Yf;
var Zf = "PopoverTrigger", Qf = e.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = qf(Zf, n), a = Gf(n), o = V(t, i.triggerRef), s = /* @__PURE__ */ x(H.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": pp(i.open),
		...r,
		ref: o,
		onClick: U(e.onClick, i.onOpenToggle)
	});
	return i.hasCustomAnchor ? s : /* @__PURE__ */ x(cl, {
		asChild: !0,
		...a,
		children: s
	});
});
Qf.displayName = Zf;
var $f = "PopoverPortal", [ep, tp] = Uf($f, { forceMount: void 0 }), np = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = qf($f, t);
	return /* @__PURE__ */ x(ep, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ x(kt, {
			present: n || a.open,
			children: /* @__PURE__ */ x(fr, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
np.displayName = $f;
var rp = "PopoverContent", ip = e.forwardRef((e, t) => {
	let n = tp(rp, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = qf(rp, e.__scopePopover);
	return /* @__PURE__ */ x(kt, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ x(op, {
			...i,
			ref: t
		}) : /* @__PURE__ */ x(sp, {
			...i,
			ref: t
		})
	});
});
ip.displayName = rp;
var ap = /* @__PURE__ */ If("PopoverContent.RemoveScroll"), op = e.forwardRef((t, n) => {
	let r = qf(rp, t.__scopePopover), i = e.useRef(null), a = V(n, i), o = e.useRef(!1);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return Ni(e);
	}, []), /* @__PURE__ */ x(wi, {
		as: ap,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ x(cp, {
			...t,
			ref: a,
			trapFocus: r.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: U(t.onCloseAutoFocus, (e) => {
				e.preventDefault(), o.current || r.triggerRef.current?.focus();
			}),
			onPointerDownOutside: U(t.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				o.current = t.button === 2 || n;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: U(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), sp = e.forwardRef((t, n) => {
	let r = qf(rp, t.__scopePopover), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ x(cp, {
		...t,
		ref: n,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (e) => {
			t.onCloseAutoFocus?.(e), e.defaultPrevented || (i.current || r.triggerRef.current?.focus(), e.preventDefault()), i.current = !1, a.current = !1;
		},
		onInteractOutside: (e) => {
			t.onInteractOutside?.(e), e.defaultPrevented || (i.current = !0, e.detail.originalEvent.type === "pointerdown" && (a.current = !0));
			let n = e.target;
			r.triggerRef.current?.contains(n) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && a.current && e.preventDefault();
		}
	});
}), cp = e.forwardRef((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = qf(rp, n), p = Gf(n);
	return mr(), /* @__PURE__ */ x($n, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ x(Hn, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: u,
			onEscapeKeyDown: s,
			onPointerDownOutside: c,
			onFocusOutside: l,
			onDismiss: () => f.onOpenChange(!1),
			children: /* @__PURE__ */ x(ll, {
				"data-state": pp(f.open),
				role: "dialog",
				id: f.contentId,
				...p,
				...d,
				ref: t,
				style: {
					...d.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), lp = "PopoverClose", up = e.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = qf(lp, n);
	return /* @__PURE__ */ x(H.button, {
		type: "button",
		...r,
		ref: t,
		onClick: U(e.onClick, () => i.onOpenChange(!1))
	});
});
up.displayName = lp;
var dp = "PopoverArrow", fp = e.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e;
	return /* @__PURE__ */ x(ul, {
		...Gf(n),
		...r,
		ref: t
	});
});
fp.displayName = dp;
function pp(e) {
	return e ? "open" : "closed";
}
var mp = Jf, hp = Xf, gp = Qf, _p = np, vp = ip, yp = "Progress", bp = 100, [xp, Sp] = mt(yp), [Cp, wp] = xp(yp), Tp = e.forwardRef((e, t) => {
	let { __scopeProgress: n, value: r = null, max: i, getValueLabel: a = Op, ...o } = e;
	(i || i === 0) && !jp(i) && console.error(Np(`${i}`, "Progress"));
	let s = jp(i) ? i : bp;
	r !== null && !Mp(r, s) && console.error(Pp(`${r}`, "Progress"));
	let c = Mp(r, s) ? r : null, l = Ap(c) ? a(c, s) : void 0;
	return /* @__PURE__ */ x(Cp, {
		scope: n,
		value: c,
		max: s,
		children: /* @__PURE__ */ x(H.div, {
			"aria-valuemax": s,
			"aria-valuemin": 0,
			"aria-valuenow": Ap(c) ? c : void 0,
			"aria-valuetext": l,
			role: "progressbar",
			"data-state": kp(c, s),
			"data-value": c ?? void 0,
			"data-max": s,
			...o,
			ref: t
		})
	});
});
Tp.displayName = yp;
var Ep = "ProgressIndicator", Dp = e.forwardRef((e, t) => {
	let { __scopeProgress: n, ...r } = e, i = wp(Ep, n);
	return /* @__PURE__ */ x(H.div, {
		"data-state": kp(i.value, i.max),
		"data-value": i.value ?? void 0,
		"data-max": i.max,
		...r,
		ref: t
	});
});
Dp.displayName = Ep;
function Op(e, t) {
	return `${Math.round(e / t * 100)}%`;
}
function kp(e, t) {
	return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ap(e) {
	return typeof e == "number";
}
function jp(e) {
	return Ap(e) && !isNaN(e) && e > 0;
}
function Mp(e, t) {
	return Ap(e) && !isNaN(e) && e <= t && e >= 0;
}
function Np(e, t) {
	return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${bp}\`.`;
}
function Pp(e, t) {
	return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${bp} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Fp = Tp, Ip = Dp, Lp = "Radio", [Rp, zp] = mt(Lp), [Bp, Vp] = Rp(Lp), Hp = e.forwardRef((t, n) => {
	let { __scopeRadio: r, name: i, checked: a = !1, required: o, disabled: s, value: c = "on", onCheck: l, form: u, ...d } = t, [f, p] = e.useState(null), m = V(n, (e) => p(e)), h = e.useRef(!1), g = f ? u || !!f.closest("form") : !0;
	return /* @__PURE__ */ S(Bp, {
		scope: r,
		checked: a,
		disabled: s,
		children: [/* @__PURE__ */ x(H.button, {
			type: "button",
			role: "radio",
			"aria-checked": a,
			"data-state": qp(a),
			"data-disabled": s ? "" : void 0,
			disabled: s,
			value: c,
			...d,
			ref: m,
			onClick: U(t.onClick, (e) => {
				a || l?.(), g && (h.current = e.isPropagationStopped(), h.current || e.stopPropagation());
			})
		}), g && /* @__PURE__ */ x(Kp, {
			control: f,
			bubbles: !h.current,
			name: i,
			value: c,
			checked: a,
			required: o,
			disabled: s,
			form: u,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Hp.displayName = Lp;
var Up = "RadioIndicator", Wp = e.forwardRef((e, t) => {
	let { __scopeRadio: n, forceMount: r, ...i } = e, a = Vp(Up, n);
	return /* @__PURE__ */ x(kt, {
		present: r || a.checked,
		children: /* @__PURE__ */ x(H.span, {
			"data-state": qp(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t
		})
	});
});
Wp.displayName = Up;
var Gp = "RadioBubbleInput", Kp = e.forwardRef(({ __scopeRadio: t, control: n, checked: r, bubbles: i = !0, ...a }, o) => {
	let s = e.useRef(null), c = V(s, o), l = lo(r), u = uo(n);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (l !== r && n) {
			let t = new Event("click", { bubbles: i });
			n.call(e, r), e.dispatchEvent(t);
		}
	}, [
		l,
		r,
		i
	]), /* @__PURE__ */ x(H.input, {
		type: "radio",
		"aria-hidden": !0,
		defaultChecked: r,
		...a,
		tabIndex: -1,
		ref: c,
		style: {
			...a.style,
			...u,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
Kp.displayName = Gp;
function qp(e) {
	return e ? "checked" : "unchecked";
}
var Jp = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], Yp = "RadioGroup", [Xp, Zp] = mt(Yp, [vl, zp]), Qp = vl(), $p = zp(), [em, tm] = Xp(Yp), nm = e.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, name: r, defaultValue: i, value: a, required: o = !1, disabled: s = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...f } = e, p = Qp(n), m = Qt(l), [h, g] = Tt({
		prop: a,
		defaultProp: i ?? null,
		onChange: d,
		caller: Yp
	});
	return /* @__PURE__ */ x(em, {
		scope: n,
		name: r,
		required: o,
		disabled: s,
		value: h,
		onValueChange: g,
		children: /* @__PURE__ */ x(Al, {
			asChild: !0,
			...p,
			orientation: c,
			dir: m,
			loop: u,
			children: /* @__PURE__ */ x(H.div, {
				role: "radiogroup",
				"aria-required": o,
				"aria-orientation": c,
				"data-disabled": s ? "" : void 0,
				dir: m,
				...f,
				ref: t
			})
		})
	});
});
nm.displayName = Yp;
var rm = "RadioGroupItem", im = e.forwardRef((t, n) => {
	let { __scopeRadioGroup: r, disabled: i, ...a } = t, o = tm(rm, r), s = o.disabled || i, c = Qp(r), l = $p(r), u = e.useRef(null), d = V(n, u), f = o.value === a.value, p = e.useRef(!1);
	return e.useEffect(() => {
		let e = (e) => {
			Jp.includes(e.key) && (p.current = !0);
		}, t = () => p.current = !1;
		return document.addEventListener("keydown", e), document.addEventListener("keyup", t), () => {
			document.removeEventListener("keydown", e), document.removeEventListener("keyup", t);
		};
	}, []), /* @__PURE__ */ x(jl, {
		asChild: !0,
		...c,
		focusable: !s,
		active: f,
		children: /* @__PURE__ */ x(Hp, {
			disabled: s,
			required: o.required,
			checked: f,
			...l,
			...a,
			name: o.name,
			ref: d,
			onCheck: () => o.onValueChange(a.value),
			onKeyDown: U((e) => {
				e.key === "Enter" && e.preventDefault();
			}),
			onFocus: U(a.onFocus, () => {
				p.current && u.current?.click();
			})
		})
	});
});
im.displayName = rm;
var am = "RadioGroupIndicator", om = e.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, ...r } = e;
	return /* @__PURE__ */ x(Wp, {
		...$p(n),
		...r,
		ref: t
	});
});
om.displayName = am;
var sm = nm, cm = im, lm = om;
//#endregion
//#region node_modules/@radix-ui/react-scroll-area/dist/index.mjs
function um(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
var dm = "ScrollArea", [fm, pm] = mt(dm), [mm, hm] = fm(dm), gm = e.forwardRef((t, n) => {
	let { __scopeScrollArea: r, type: i = "hover", dir: a, scrollHideDelay: o = 600, ...s } = t, [c, l] = e.useState(null), [u, d] = e.useState(null), [f, p] = e.useState(null), [m, h] = e.useState(null), [g, _] = e.useState(null), [v, y] = e.useState(0), [b, S] = e.useState(0), [C, w] = e.useState(!1), [T, E] = e.useState(!1), D = V(n, (e) => l(e)), O = Qt(a);
	return /* @__PURE__ */ x(mm, {
		scope: r,
		type: i,
		dir: O,
		scrollHideDelay: o,
		scrollArea: c,
		viewport: u,
		onViewportChange: d,
		content: f,
		onContentChange: p,
		scrollbarX: m,
		onScrollbarXChange: h,
		scrollbarXEnabled: C,
		onScrollbarXEnabledChange: w,
		scrollbarY: g,
		onScrollbarYChange: _,
		scrollbarYEnabled: T,
		onScrollbarYEnabledChange: E,
		onCornerWidthChange: y,
		onCornerHeightChange: S,
		children: /* @__PURE__ */ x(H.div, {
			dir: O,
			...s,
			ref: D,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": v + "px",
				"--radix-scroll-area-corner-height": b + "px",
				...t.style
			}
		})
	});
});
gm.displayName = dm;
var _m = "ScrollAreaViewport", vm = e.forwardRef((t, n) => {
	let { __scopeScrollArea: r, children: i, nonce: a, ...o } = t, s = hm(_m, r), c = V(n, e.useRef(null), s.onViewportChange);
	return /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: a
	}), /* @__PURE__ */ x(H.div, {
		"data-radix-scroll-area-viewport": "",
		...o,
		ref: c,
		style: {
			overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
			...t.style
		},
		children: /* @__PURE__ */ x("div", {
			ref: s.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children: i
		})
	})] });
});
vm.displayName = _m;
var ym = "ScrollAreaScrollbar", bm = e.forwardRef((t, n) => {
	let { forceMount: r, ...i } = t, a = hm(ym, t.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: s } = a, c = t.orientation === "horizontal";
	return e.useEffect(() => (c ? o(!0) : s(!0), () => {
		c ? o(!1) : s(!1);
	}), [
		c,
		o,
		s
	]), a.type === "hover" ? /* @__PURE__ */ x(xm, {
		...i,
		ref: n,
		forceMount: r
	}) : a.type === "scroll" ? /* @__PURE__ */ x(Sm, {
		...i,
		ref: n,
		forceMount: r
	}) : a.type === "auto" ? /* @__PURE__ */ x(Cm, {
		...i,
		ref: n,
		forceMount: r
	}) : a.type === "always" ? /* @__PURE__ */ x(wm, {
		...i,
		ref: n
	}) : null;
});
bm.displayName = ym;
var xm = e.forwardRef((t, n) => {
	let { forceMount: r, ...i } = t, a = hm(ym, t.__scopeScrollArea), [o, s] = e.useState(!1);
	return e.useEffect(() => {
		let e = a.scrollArea, t = 0;
		if (e) {
			let n = () => {
				window.clearTimeout(t), s(!0);
			}, r = () => {
				t = window.setTimeout(() => s(!1), a.scrollHideDelay);
			};
			return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
				window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r);
			};
		}
	}, [a.scrollArea, a.scrollHideDelay]), /* @__PURE__ */ x(kt, {
		present: r || o,
		children: /* @__PURE__ */ x(Cm, {
			"data-state": o ? "visible" : "hidden",
			...i,
			ref: n
		})
	});
}), Sm = e.forwardRef((t, n) => {
	let { forceMount: r, ...i } = t, a = hm(ym, t.__scopeScrollArea), o = t.orientation === "horizontal", s = Wm(() => l("SCROLL_END"), 100), [c, l] = um("hidden", {
		hidden: { SCROLL: "scrolling" },
		scrolling: {
			SCROLL_END: "idle",
			POINTER_ENTER: "interacting"
		},
		interacting: {
			SCROLL: "interacting",
			POINTER_LEAVE: "idle"
		},
		idle: {
			HIDE: "hidden",
			SCROLL: "scrolling",
			POINTER_ENTER: "interacting"
		}
	});
	return e.useEffect(() => {
		if (c === "idle") {
			let e = window.setTimeout(() => l("HIDE"), a.scrollHideDelay);
			return () => window.clearTimeout(e);
		}
	}, [
		c,
		a.scrollHideDelay,
		l
	]), e.useEffect(() => {
		let e = a.viewport, t = o ? "scrollLeft" : "scrollTop";
		if (e) {
			let n = e[t], r = () => {
				let r = e[t];
				n !== r && (l("SCROLL"), s()), n = r;
			};
			return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r);
		}
	}, [
		a.viewport,
		o,
		l,
		s
	]), /* @__PURE__ */ x(kt, {
		present: r || c !== "hidden",
		children: /* @__PURE__ */ x(wm, {
			"data-state": c === "hidden" ? "hidden" : "visible",
			...i,
			ref: n,
			onPointerEnter: U(t.onPointerEnter, () => l("POINTER_ENTER")),
			onPointerLeave: U(t.onPointerLeave, () => l("POINTER_LEAVE"))
		})
	});
}), Cm = e.forwardRef((t, n) => {
	let r = hm(ym, t.__scopeScrollArea), { forceMount: i, ...a } = t, [o, s] = e.useState(!1), c = t.orientation === "horizontal", l = Wm(() => {
		if (r.viewport) {
			let e = r.viewport.offsetWidth < r.viewport.scrollWidth, t = r.viewport.offsetHeight < r.viewport.scrollHeight;
			s(c ? e : t);
		}
	}, 10);
	return Gm(r.viewport, l), Gm(r.content, l), /* @__PURE__ */ x(kt, {
		present: i || o,
		children: /* @__PURE__ */ x(wm, {
			"data-state": o ? "visible" : "hidden",
			...a,
			ref: n
		})
	});
}), wm = e.forwardRef((t, n) => {
	let { orientation: r = "vertical", ...i } = t, a = hm(ym, t.__scopeScrollArea), o = e.useRef(null), s = e.useRef(0), [c, l] = e.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), u = Lm(c.viewport, c.content), d = {
		...i,
		sizes: c,
		onSizesChange: l,
		hasThumb: u > 0 && u < 1,
		onThumbChange: (e) => o.current = e,
		onThumbPointerUp: () => s.current = 0,
		onThumbPointerDown: (e) => s.current = e
	};
	function f(e, t) {
		return zm(e, s.current, c, t);
	}
	return r === "horizontal" ? /* @__PURE__ */ x(Tm, {
		...d,
		ref: n,
		onThumbPositionChange: () => {
			if (a.viewport && o.current) {
				let e = a.viewport.scrollLeft, t = Bm(e, c, a.dir);
				o.current.style.transform = `translate3d(${t}px, 0, 0)`;
			}
		},
		onWheelScroll: (e) => {
			a.viewport && (a.viewport.scrollLeft = e);
		},
		onDragScroll: (e) => {
			a.viewport && (a.viewport.scrollLeft = f(e, a.dir));
		}
	}) : r === "vertical" ? /* @__PURE__ */ x(Em, {
		...d,
		ref: n,
		onThumbPositionChange: () => {
			if (a.viewport && o.current) {
				let e = a.viewport.scrollTop, t = Bm(e, c);
				o.current.style.transform = `translate3d(0, ${t}px, 0)`;
			}
		},
		onWheelScroll: (e) => {
			a.viewport && (a.viewport.scrollTop = e);
		},
		onDragScroll: (e) => {
			a.viewport && (a.viewport.scrollTop = f(e));
		}
	}) : null;
}), Tm = e.forwardRef((t, n) => {
	let { sizes: r, onSizesChange: i, ...a } = t, o = hm(ym, t.__scopeScrollArea), [s, c] = e.useState(), l = e.useRef(null), u = V(n, l, o.onScrollbarXChange);
	return e.useEffect(() => {
		l.current && c(getComputedStyle(l.current));
	}, [l]), /* @__PURE__ */ x(km, {
		"data-orientation": "horizontal",
		...a,
		ref: u,
		sizes: r,
		style: {
			bottom: 0,
			left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": Rm(r) + "px",
			...t.style
		},
		onThumbPointerDown: (e) => t.onThumbPointerDown(e.x),
		onDragScroll: (e) => t.onDragScroll(e.x),
		onWheelScroll: (e, n) => {
			if (o.viewport) {
				let r = o.viewport.scrollLeft + e.deltaX;
				t.onWheelScroll(r), Hm(r, n) && e.preventDefault();
			}
		},
		onResize: () => {
			l.current && o.viewport && s && i({
				content: o.viewport.scrollWidth,
				viewport: o.viewport.offsetWidth,
				scrollbar: {
					size: l.current.clientWidth,
					paddingStart: Im(s.paddingLeft),
					paddingEnd: Im(s.paddingRight)
				}
			});
		}
	});
}), Em = e.forwardRef((t, n) => {
	let { sizes: r, onSizesChange: i, ...a } = t, o = hm(ym, t.__scopeScrollArea), [s, c] = e.useState(), l = e.useRef(null), u = V(n, l, o.onScrollbarYChange);
	return e.useEffect(() => {
		l.current && c(getComputedStyle(l.current));
	}, [l]), /* @__PURE__ */ x(km, {
		"data-orientation": "vertical",
		...a,
		ref: u,
		sizes: r,
		style: {
			top: 0,
			right: o.dir === "ltr" ? 0 : void 0,
			left: o.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": Rm(r) + "px",
			...t.style
		},
		onThumbPointerDown: (e) => t.onThumbPointerDown(e.y),
		onDragScroll: (e) => t.onDragScroll(e.y),
		onWheelScroll: (e, n) => {
			if (o.viewport) {
				let r = o.viewport.scrollTop + e.deltaY;
				t.onWheelScroll(r), Hm(r, n) && e.preventDefault();
			}
		},
		onResize: () => {
			l.current && o.viewport && s && i({
				content: o.viewport.scrollHeight,
				viewport: o.viewport.offsetHeight,
				scrollbar: {
					size: l.current.clientHeight,
					paddingStart: Im(s.paddingTop),
					paddingEnd: Im(s.paddingBottom)
				}
			});
		}
	});
}), [Dm, Om] = fm(ym), km = e.forwardRef((t, n) => {
	let { __scopeScrollArea: r, sizes: i, hasThumb: a, onThumbChange: o, onThumbPointerUp: s, onThumbPointerDown: c, onThumbPositionChange: l, onDragScroll: u, onWheelScroll: d, onResize: f, ...p } = t, m = hm(ym, r), [h, g] = e.useState(null), _ = V(n, (e) => g(e)), v = e.useRef(null), y = e.useRef(""), b = m.viewport, S = i.content - i.viewport, C = Pn(d), w = Pn(l), T = Wm(f, 10);
	function E(e) {
		v.current && u({
			x: e.clientX - v.current.left,
			y: e.clientY - v.current.top
		});
	}
	return e.useEffect(() => {
		let e = (e) => {
			let t = e.target;
			h?.contains(t) && C(e, S);
		};
		return document.addEventListener("wheel", e, { passive: !1 }), () => document.removeEventListener("wheel", e, { passive: !1 });
	}, [
		b,
		h,
		S,
		C
	]), e.useEffect(w, [i, w]), Gm(h, T), Gm(m.content, T), /* @__PURE__ */ x(Dm, {
		scope: r,
		scrollbar: h,
		hasThumb: a,
		onThumbChange: Pn(o),
		onThumbPointerUp: Pn(s),
		onThumbPositionChange: w,
		onThumbPointerDown: Pn(c),
		children: /* @__PURE__ */ x(H.div, {
			...p,
			ref: _,
			style: {
				position: "absolute",
				...p.style
			},
			onPointerDown: U(t.onPointerDown, (e) => {
				e.button === 0 && (e.target.setPointerCapture(e.pointerId), v.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), E(e));
			}),
			onPointerMove: U(t.onPointerMove, E),
			onPointerUp: U(t.onPointerUp, (e) => {
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = y.current, m.viewport && (m.viewport.style.scrollBehavior = ""), v.current = null;
			})
		})
	});
}), Am = "ScrollAreaThumb", jm = e.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Om(Am, e.__scopeScrollArea);
	return /* @__PURE__ */ x(kt, {
		present: n || i.hasThumb,
		children: /* @__PURE__ */ x(Mm, {
			ref: t,
			...r
		})
	});
}), Mm = e.forwardRef((t, n) => {
	let { __scopeScrollArea: r, style: i, ...a } = t, o = hm(Am, r), s = Om(Am, r), { onThumbPositionChange: c } = s, l = V(n, (e) => s.onThumbChange(e)), u = e.useRef(void 0), d = Wm(() => {
		u.current &&= (u.current(), void 0);
	}, 100);
	return e.useEffect(() => {
		let e = o.viewport;
		if (e) {
			let t = () => {
				d(), u.current || (u.current = Um(e, c), c());
			};
			return c(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [
		o.viewport,
		d,
		c
	]), /* @__PURE__ */ x(H.div, {
		"data-state": s.hasThumb ? "visible" : "hidden",
		...a,
		ref: l,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...i
		},
		onPointerDownCapture: U(t.onPointerDownCapture, (e) => {
			let t = e.target.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top;
			s.onThumbPointerDown({
				x: n,
				y: r
			});
		}),
		onPointerUp: U(t.onPointerUp, s.onThumbPointerUp)
	});
});
jm.displayName = Am;
var Nm = "ScrollAreaCorner", Pm = e.forwardRef((e, t) => {
	let n = hm(Nm, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
	return n.type !== "scroll" && r ? /* @__PURE__ */ x(Fm, {
		...e,
		ref: t
	}) : null;
});
Pm.displayName = Nm;
var Fm = e.forwardRef((t, n) => {
	let { __scopeScrollArea: r, ...i } = t, a = hm(Nm, r), [o, s] = e.useState(0), [c, l] = e.useState(0), u = !!(o && c);
	return Gm(a.scrollbarX, () => {
		let e = a.scrollbarX?.offsetHeight || 0;
		a.onCornerHeightChange(e), l(e);
	}), Gm(a.scrollbarY, () => {
		let e = a.scrollbarY?.offsetWidth || 0;
		a.onCornerWidthChange(e), s(e);
	}), u ? /* @__PURE__ */ x(H.div, {
		...i,
		ref: n,
		style: {
			width: o,
			height: c,
			position: "absolute",
			right: a.dir === "ltr" ? 0 : void 0,
			left: a.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			...t.style
		}
	}) : null;
});
function Im(e) {
	return e ? parseInt(e, 10) : 0;
}
function Lm(e, t) {
	let n = e / t;
	return isNaN(n) ? 0 : n;
}
function Rm(e) {
	let t = Lm(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
	return Math.max(r, 18);
}
function zm(e, t, n, r = "ltr") {
	let i = Rm(n), a = i / 2, o = t || a, s = i - o, c = n.scrollbar.paddingStart + o, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
	return Vm([c, l], d)(e);
}
function Bm(e, t, n = "ltr") {
	let r = Rm(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, o = t.content - t.viewport, s = a - r, c = Ff(e, n === "ltr" ? [0, o] : [o * -1, 0]);
	return Vm([0, o], [0, s])(c);
}
function Vm(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function Hm(e, t) {
	return e > 0 && e < t;
}
var Um = (e, t = () => {}) => {
	let n = {
		left: e.scrollLeft,
		top: e.scrollTop
	}, r = 0;
	return (function i() {
		let a = {
			left: e.scrollLeft,
			top: e.scrollTop
		}, o = n.left !== a.left, s = n.top !== a.top;
		(o || s) && t(), n = a, r = window.requestAnimationFrame(i);
	})(), () => window.cancelAnimationFrame(r);
};
function Wm(t, n) {
	let r = Pn(t), i = e.useRef(0);
	return e.useEffect(() => () => window.clearTimeout(i.current), []), e.useCallback(() => {
		window.clearTimeout(i.current), i.current = window.setTimeout(r, n);
	}, [r, n]);
}
function Gm(e, t) {
	let n = Pn(t);
	Ct(() => {
		let t = 0;
		if (e) {
			let r = new ResizeObserver(() => {
				cancelAnimationFrame(t), t = window.requestAnimationFrame(n);
			});
			return r.observe(e), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
	}, [e, n]);
}
var Km = gm, qm = vm, Jm = Pm;
//#endregion
//#region node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function Ym(t) {
	let n = /* @__PURE__ */ Xm(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(Qm);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ x(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ x(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
/* @__NO_SIDE_EFFECTS__ */
function Xm(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = eh(r), a = $m(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? tt(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var Zm = Symbol("radix.slottable");
function Qm(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Zm;
}
function $m(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function eh(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-select/dist/index.mjs
var th = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], nh = [" ", "Enter"], rh = "Select", [ih, ah, oh] = St(rh), [sh, ch] = mt(rh, [oh, Gc]), lh = Gc(), [uh, dh] = sh(rh), [fh, ph] = sh(rh), mh = (t) => {
	let { __scopeSelect: n, children: r, open: i, defaultOpen: a, onOpenChange: o, value: s, defaultValue: c, onValueChange: l, dir: u, name: d, autoComplete: f, disabled: p, required: m, form: h } = t, g = lh(n), [_, v] = e.useState(null), [y, b] = e.useState(null), [C, w] = e.useState(!1), T = Qt(u), [E, D] = Tt({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: rh
	}), [O, k] = Tt({
		prop: s,
		defaultProp: c,
		onChange: l,
		caller: rh
	}), A = e.useRef(null), j = _ ? h || !!_.closest("form") : !0, [M, N] = e.useState(/* @__PURE__ */ new Set()), P = Array.from(M).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ x(sl, {
		...g,
		children: /* @__PURE__ */ S(uh, {
			required: m,
			scope: n,
			trigger: _,
			onTriggerChange: v,
			valueNode: y,
			onValueNodeChange: b,
			valueNodeHasChildren: C,
			onValueNodeHasChildrenChange: w,
			contentId: Ft(),
			value: O,
			onValueChange: k,
			open: E,
			onOpenChange: D,
			dir: T,
			triggerPointerDownPosRef: A,
			disabled: p,
			children: [/* @__PURE__ */ x(ih.Provider, {
				scope: n,
				children: /* @__PURE__ */ x(fh, {
					scope: t.__scopeSelect,
					onNativeOptionAdd: e.useCallback((e) => {
						N((t) => new Set(t).add(e));
					}, []),
					onNativeOptionRemove: e.useCallback((e) => {
						N((t) => {
							let n = new Set(t);
							return n.delete(e), n;
						});
					}, []),
					children: r
				})
			}), j ? /* @__PURE__ */ S(lg, {
				"aria-hidden": !0,
				required: m,
				tabIndex: -1,
				name: d,
				autoComplete: f,
				value: O,
				onChange: (e) => k(e.target.value),
				disabled: p,
				form: h,
				children: [O === void 0 ? /* @__PURE__ */ x("option", { value: "" }) : null, Array.from(M)]
			}, P) : null]
		})
	});
};
mh.displayName = rh;
var hh = "SelectTrigger", gh = e.forwardRef((t, n) => {
	let { __scopeSelect: r, disabled: i = !1, ...a } = t, o = lh(r), s = dh(hh, r), c = s.disabled || i, l = V(n, s.onTriggerChange), u = ah(r), d = e.useRef("touch"), [f, p, m] = dg((e) => {
		let t = u().filter((e) => !e.disabled), n = fg(t, e, t.find((e) => e.value === s.value));
		n !== void 0 && s.onValueChange(n.value);
	}), h = (e) => {
		c || (s.onOpenChange(!0), m()), e && (s.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ x(cl, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ x(H.button, {
			type: "button",
			role: "combobox",
			"aria-controls": s.contentId,
			"aria-expanded": s.open,
			"aria-required": s.required,
			"aria-autocomplete": "none",
			dir: s.dir,
			"data-state": s.open ? "open" : "closed",
			disabled: c,
			"data-disabled": c ? "" : void 0,
			"data-placeholder": ug(s.value) ? "" : void 0,
			...a,
			ref: l,
			onClick: U(a.onClick, (e) => {
				e.currentTarget.focus(), d.current !== "mouse" && h(e);
			}),
			onPointerDown: U(a.onPointerDown, (e) => {
				d.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (h(e), e.preventDefault());
			}),
			onKeyDown: U(a.onKeyDown, (e) => {
				let t = f.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && p(e.key), !(t && e.key === " ") && th.includes(e.key) && (h(), e.preventDefault());
			})
		})
	});
});
gh.displayName = hh;
var _h = "SelectValue", vh = e.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = dh(_h, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = V(t, c.onValueNodeChange);
	return Ct(() => {
		l(u);
	}, [l, u]), /* @__PURE__ */ x(H.span, {
		...s,
		ref: d,
		style: { pointerEvents: "none" },
		children: ug(c.value) ? /* @__PURE__ */ x(b, { children: o }) : a
	});
});
vh.displayName = _h;
var yh = "SelectIcon", bh = e.forwardRef((e, t) => {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ x(H.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
});
bh.displayName = yh;
var xh = "SelectPortal", Sh = (e) => /* @__PURE__ */ x(fr, {
	asChild: !0,
	...e
});
Sh.displayName = xh;
var Ch = "SelectContent", wh = e.forwardRef((t, n) => {
	let r = dh(Ch, t.__scopeSelect), [i, a] = e.useState();
	if (Ct(() => {
		a(new DocumentFragment());
	}, []), !r.open) {
		let e = i;
		return e ? v.createPortal(/* @__PURE__ */ x(Eh, {
			scope: t.__scopeSelect,
			children: /* @__PURE__ */ x(ih.Slot, {
				scope: t.__scopeSelect,
				children: /* @__PURE__ */ x("div", { children: t.children })
			})
		}), e) : null;
	}
	return /* @__PURE__ */ x(Ah, {
		...t,
		ref: n
	});
});
wh.displayName = Ch;
var Th = 10, [Eh, Dh] = sh(Ch), Oh = "SelectContentImpl", kh = /* @__PURE__ */ Ym("SelectContent.RemoveScroll"), Ah = e.forwardRef((t, n) => {
	let { __scopeSelect: r, position: i = "item-aligned", onCloseAutoFocus: a, onEscapeKeyDown: o, onPointerDownOutside: s, side: c, sideOffset: l, align: u, alignOffset: d, arrowPadding: f, collisionBoundary: p, collisionPadding: m, sticky: h, hideWhenDetached: g, avoidCollisions: _, ...v } = t, y = dh(Ch, r), [b, S] = e.useState(null), [C, w] = e.useState(null), T = V(n, (e) => S(e)), [E, D] = e.useState(null), [O, k] = e.useState(null), A = ah(r), [j, M] = e.useState(!1), N = e.useRef(!1);
	e.useEffect(() => {
		if (b) return Ni(b);
	}, [b]), mr();
	let P = e.useCallback((e) => {
		let [t, ...n] = A().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && C && (C.scrollTop = 0), n === r && C && (C.scrollTop = C.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [A, C]), F = e.useCallback(() => P([E, b]), [
		P,
		E,
		b
	]);
	e.useEffect(() => {
		j && F();
	}, [j, F]);
	let { onOpenChange: I, triggerPointerDownPosRef: ee } = y;
	e.useEffect(() => {
		if (b) {
			let e = {
				x: 0,
				y: 0
			}, t = (t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (ee.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (ee.current?.y ?? 0))
				};
			}, n = (n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : b.contains(n.target) || I(!1), document.removeEventListener("pointermove", t), ee.current = null;
			};
			return ee.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		b,
		I,
		ee
	]), e.useEffect(() => {
		let e = () => I(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [I]);
	let [te, L] = dg((e) => {
		let t = A().filter((e) => !e.disabled), n = fg(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), ne = e.useCallback((e, t, n) => {
		let r = !N.current && !n;
		(y.value !== void 0 && y.value === t || r) && (D(e), r && (N.current = !0));
	}, [y.value]), R = e.useCallback(() => b?.focus(), [b]), z = e.useCallback((e, t, n) => {
		let r = !N.current && !n;
		(y.value !== void 0 && y.value === t || r) && k(e);
	}, [y.value]), re = i === "popper" ? Ph : Mh, ie = re === Ph ? {
		side: c,
		sideOffset: l,
		align: u,
		alignOffset: d,
		arrowPadding: f,
		collisionBoundary: p,
		collisionPadding: m,
		sticky: h,
		hideWhenDetached: g,
		avoidCollisions: _
	} : {};
	return /* @__PURE__ */ x(Eh, {
		scope: r,
		content: b,
		viewport: C,
		onViewportChange: w,
		itemRefCallback: ne,
		selectedItem: E,
		onItemLeave: R,
		itemTextRefCallback: z,
		focusSelectedItem: F,
		selectedItemText: O,
		position: i,
		isPositioned: j,
		searchRef: te,
		children: /* @__PURE__ */ x(wi, {
			as: kh,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ x($n, {
				asChild: !0,
				trapped: y.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: U(a, (e) => {
					y.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ x(Hn, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: o,
					onPointerDownOutside: s,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => y.onOpenChange(!1),
					children: /* @__PURE__ */ x(re, {
						role: "listbox",
						id: y.contentId,
						"data-state": y.open ? "open" : "closed",
						dir: y.dir,
						onContextMenu: (e) => e.preventDefault(),
						...v,
						...ie,
						onPlaced: () => M(!0),
						ref: T,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...v.style
						},
						onKeyDown: U(v.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && L(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = A().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => P(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
Ah.displayName = Oh;
var jh = "SelectItemAlignedPosition", Mh = e.forwardRef((t, n) => {
	let { __scopeSelect: r, onPlaced: i, ...a } = t, o = dh(Ch, r), s = Dh(Ch, r), [c, l] = e.useState(null), [u, d] = e.useState(null), f = V(n, (e) => d(e)), p = ah(r), m = e.useRef(!1), h = e.useRef(!0), { viewport: g, selectedItem: _, selectedItemText: v, focusSelectedItem: y } = s, b = e.useCallback(() => {
		if (o.trigger && o.valueNode && c && u && g && _ && v) {
			let e = o.trigger.getBoundingClientRect(), t = u.getBoundingClientRect(), n = o.valueNode.getBoundingClientRect(), r = v.getBoundingClientRect();
			if (o.dir !== "rtl") {
				let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - Th, d = Ff(a, [Th, Math.max(Th, u - l)]);
				c.style.minWidth = s + "px", c.style.left = d + "px";
			} else {
				let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - Th, d = Ff(a, [Th, Math.max(Th, u - l)]);
				c.style.minWidth = s + "px", c.style.right = d + "px";
			}
			let a = p(), s = window.innerHeight - Th * 2, l = g.scrollHeight, d = window.getComputedStyle(u), f = parseInt(d.borderTopWidth, 10), h = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = f + h + l + b + y, S = Math.min(_.offsetHeight * 5, x), C = window.getComputedStyle(g), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - Th, D = s - E, O = _.offsetHeight / 2, k = _.offsetTop + O, A = f + h + k, j = x - A;
			if (A <= E) {
				let e = a.length > 0 && _ === a[a.length - 1].ref.current;
				c.style.bottom = "0px";
				let t = u.clientHeight - g.offsetTop - g.offsetHeight, n = A + Math.max(D, O + (e ? T : 0) + t + y);
				c.style.height = n + "px";
			} else {
				let e = a.length > 0 && _ === a[0].ref.current;
				c.style.top = "0px";
				let t = Math.max(E, f + g.offsetTop + (e ? w : 0) + O) + j;
				c.style.height = t + "px", g.scrollTop = A - E + g.offsetTop;
			}
			c.style.margin = `${Th}px 0`, c.style.minHeight = S + "px", c.style.maxHeight = s + "px", i?.(), requestAnimationFrame(() => m.current = !0);
		}
	}, [
		p,
		o.trigger,
		o.valueNode,
		c,
		u,
		g,
		_,
		v,
		o.dir,
		i
	]);
	Ct(() => b(), [b]);
	let [S, C] = e.useState();
	return Ct(() => {
		u && C(window.getComputedStyle(u).zIndex);
	}, [u]), /* @__PURE__ */ x(Fh, {
		scope: r,
		contentWrapper: c,
		shouldExpandOnScrollRef: m,
		onScrollButtonChange: e.useCallback((e) => {
			e && h.current === !0 && (b(), y?.(), h.current = !1);
		}, [b, y]),
		children: /* @__PURE__ */ x("div", {
			ref: l,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: S
			},
			children: /* @__PURE__ */ x(H.div, {
				...a,
				ref: f,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...a.style
				}
			})
		})
	});
});
Mh.displayName = jh;
var Nh = "SelectPopperPosition", Ph = e.forwardRef((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = Th, ...a } = e;
	return /* @__PURE__ */ x(ll, {
		...lh(n),
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Ph.displayName = Nh;
var [Fh, Ih] = sh(Ch, {}), Lh = "SelectViewport", Rh = e.forwardRef((t, n) => {
	let { __scopeSelect: r, nonce: i, ...a } = t, o = Dh(Lh, r), s = Ih(Lh, r), c = V(n, o.onViewportChange), l = e.useRef(0);
	return /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ x(ih.Slot, {
		scope: r,
		children: /* @__PURE__ */ x(H.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...a,
			ref: c,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...a.style
			},
			onScroll: U(a.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
				if (r?.current && n) {
					let e = Math.abs(l.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - Th * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				l.current = t.scrollTop;
			})
		})
	})] });
});
Rh.displayName = Lh;
var zh = "SelectGroup", [Bh, Vh] = sh(zh), Hh = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Ft();
	return /* @__PURE__ */ x(Bh, {
		scope: n,
		id: i,
		children: /* @__PURE__ */ x(H.div, {
			role: "group",
			"aria-labelledby": i,
			...r,
			ref: t
		})
	});
});
Hh.displayName = zh;
var Uh = "SelectLabel", Wh = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Vh(Uh, n);
	return /* @__PURE__ */ x(H.div, {
		id: i.id,
		...r,
		ref: t
	});
});
Wh.displayName = Uh;
var Gh = "SelectItem", [Kh, qh] = sh(Gh), Jh = e.forwardRef((t, n) => {
	let { __scopeSelect: r, value: i, disabled: a = !1, textValue: o, ...s } = t, c = dh(Gh, r), l = Dh(Gh, r), u = c.value === i, [d, f] = e.useState(o ?? ""), [p, m] = e.useState(!1), h = V(n, (e) => l.itemRefCallback?.(e, i, a)), g = Ft(), _ = e.useRef("touch"), v = () => {
		a || (c.onValueChange(i), c.onOpenChange(!1));
	};
	if (i === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ x(Kh, {
		scope: r,
		value: i,
		disabled: a,
		textId: g,
		isSelected: u,
		onItemTextChange: e.useCallback((e) => {
			f((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ x(ih.ItemSlot, {
			scope: r,
			value: i,
			disabled: a,
			textValue: d,
			children: /* @__PURE__ */ x(H.div, {
				role: "option",
				"aria-labelledby": g,
				"data-highlighted": p ? "" : void 0,
				"aria-selected": u && p,
				"data-state": u ? "checked" : "unchecked",
				"aria-disabled": a || void 0,
				"data-disabled": a ? "" : void 0,
				tabIndex: a ? void 0 : -1,
				...s,
				ref: h,
				onFocus: U(s.onFocus, () => m(!0)),
				onBlur: U(s.onBlur, () => m(!1)),
				onClick: U(s.onClick, () => {
					_.current !== "mouse" && v();
				}),
				onPointerUp: U(s.onPointerUp, () => {
					_.current === "mouse" && v();
				}),
				onPointerDown: U(s.onPointerDown, (e) => {
					_.current = e.pointerType;
				}),
				onPointerMove: U(s.onPointerMove, (e) => {
					_.current = e.pointerType, a ? l.onItemLeave?.() : _.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: U(s.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && l.onItemLeave?.();
				}),
				onKeyDown: U(s.onKeyDown, (e) => {
					l.searchRef?.current !== "" && e.key === " " || (nh.includes(e.key) && v(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
Jh.displayName = Gh;
var Yh = "SelectItemText", Xh = e.forwardRef((t, n) => {
	let { __scopeSelect: r, className: i, style: a, ...o } = t, s = dh(Yh, r), c = Dh(Yh, r), l = qh(Yh, r), u = ph(Yh, r), [d, f] = e.useState(null), p = V(n, (e) => f(e), l.onItemTextChange, (e) => c.itemTextRefCallback?.(e, l.value, l.disabled)), m = d?.textContent, h = e.useMemo(() => /* @__PURE__ */ x("option", {
		value: l.value,
		disabled: l.disabled,
		children: m
	}, l.value), [
		l.disabled,
		l.value,
		m
	]), { onNativeOptionAdd: g, onNativeOptionRemove: _ } = u;
	return Ct(() => (g(h), () => _(h)), [
		g,
		_,
		h
	]), /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(H.span, {
		id: l.textId,
		...o,
		ref: p
	}), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? v.createPortal(o.children, s.valueNode) : null] });
});
Xh.displayName = Yh;
var Zh = "SelectItemIndicator", Qh = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return qh(Zh, n).isSelected ? /* @__PURE__ */ x(H.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
});
Qh.displayName = Zh;
var $h = "SelectScrollUpButton", eg = e.forwardRef((t, n) => {
	let r = Dh($h, t.__scopeSelect), i = Ih($h, t.__scopeSelect), [a, o] = e.useState(!1), s = V(n, i.onScrollButtonChange);
	return Ct(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				o(t.scrollTop > 0);
			}, t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ x(rg, {
		...t,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
eg.displayName = $h;
var tg = "SelectScrollDownButton", ng = e.forwardRef((t, n) => {
	let r = Dh(tg, t.__scopeSelect), i = Ih(tg, t.__scopeSelect), [a, o] = e.useState(!1), s = V(n, i.onScrollButtonChange);
	return Ct(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				o(Math.ceil(t.scrollTop) < e);
			}, t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ x(rg, {
		...t,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
ng.displayName = tg;
var rg = e.forwardRef((t, n) => {
	let { __scopeSelect: r, onAutoScroll: i, ...a } = t, o = Dh("SelectScrollButton", r), s = e.useRef(null), c = ah(r), l = e.useCallback(() => {
		s.current !== null && (window.clearInterval(s.current), s.current = null);
	}, []);
	return e.useEffect(() => () => l(), [l]), Ct(() => {
		c().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [c]), /* @__PURE__ */ x(H.div, {
		"aria-hidden": !0,
		...a,
		ref: n,
		style: {
			flexShrink: 0,
			...a.style
		},
		onPointerDown: U(a.onPointerDown, () => {
			s.current === null && (s.current = window.setInterval(i, 50));
		}),
		onPointerMove: U(a.onPointerMove, () => {
			o.onItemLeave?.(), s.current === null && (s.current = window.setInterval(i, 50));
		}),
		onPointerLeave: U(a.onPointerLeave, () => {
			l();
		})
	});
}), ig = "SelectSeparator", ag = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ x(H.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
});
ag.displayName = ig;
var og = "SelectArrow", sg = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = lh(n), a = dh(og, n), o = Dh(og, n);
	return a.open && o.position === "popper" ? /* @__PURE__ */ x(ul, {
		...i,
		...r,
		ref: t
	}) : null;
});
sg.displayName = og;
var cg = "SelectBubbleInput", lg = e.forwardRef(({ __scopeSelect: t, value: n, ...r }, i) => {
	let a = e.useRef(null), o = V(i, a), s = lo(n);
	return e.useEffect(() => {
		let e = a.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, r = Object.getOwnPropertyDescriptor(t, "value").set;
		if (s !== n && r) {
			let t = new Event("change", { bubbles: !0 });
			r.call(e, n), e.dispatchEvent(t);
		}
	}, [s, n]), /* @__PURE__ */ x(H.select, {
		...r,
		style: {
			...lt,
			...r.style
		},
		ref: o,
		defaultValue: n
	});
});
lg.displayName = cg;
function ug(e) {
	return e === "" || e === void 0;
}
function dg(t) {
	let n = Pn(t), r = e.useRef(""), i = e.useRef(0), a = e.useCallback((e) => {
		let t = r.current + e;
		n(t), (function e(t) {
			r.current = t, window.clearTimeout(i.current), t !== "" && (i.current = window.setTimeout(() => e(""), 1e3));
		})(t);
	}, [n]), o = e.useCallback(() => {
		r.current = "", window.clearTimeout(i.current);
	}, []);
	return e.useEffect(() => () => window.clearTimeout(i.current), []), [
		r,
		a,
		o
	];
}
function fg(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = pg(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function pg(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var mg = mh, hg = gh, gg = vh, _g = bh, vg = Sh, yg = wh, bg = Rh, xg = Jh, Sg = Xh, Cg = Qh, wg = eg, Tg = ng;
//#endregion
//#region node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function Eg(t) {
	let n = /* @__PURE__ */ Og(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(Ag);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ x(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ x(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
var Dg = /* @__PURE__ */ Eg("Slot");
/* @__NO_SIDE_EFFECTS__ */
function Og(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = Mg(r), a = jg(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? tt(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var kg = Symbol("radix.slottable");
function Ag(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === kg;
}
function jg(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function Mg(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-switch/dist/index.mjs
var Ng = "Switch", [Pg, Fg] = mt(Ng), [Ig, Lg] = Pg(Ng), Rg = e.forwardRef((t, n) => {
	let { __scopeSwitch: r, name: i, checked: a, defaultChecked: o, required: s, disabled: c, value: l = "on", onCheckedChange: u, form: d, ...f } = t, [p, m] = e.useState(null), h = V(n, (e) => m(e)), g = e.useRef(!1), _ = p ? d || !!p.closest("form") : !0, [v, y] = Tt({
		prop: a,
		defaultProp: o ?? !1,
		onChange: u,
		caller: Ng
	});
	return /* @__PURE__ */ S(Ig, {
		scope: r,
		checked: v,
		disabled: c,
		children: [/* @__PURE__ */ x(H.button, {
			type: "button",
			role: "switch",
			"aria-checked": v,
			"aria-required": s,
			"data-state": Ug(v),
			"data-disabled": c ? "" : void 0,
			disabled: c,
			value: l,
			...f,
			ref: h,
			onClick: U(t.onClick, (e) => {
				y((e) => !e), _ && (g.current = e.isPropagationStopped(), g.current || e.stopPropagation());
			})
		}), _ && /* @__PURE__ */ x(Hg, {
			control: p,
			bubbles: !g.current,
			name: i,
			value: l,
			checked: v,
			required: s,
			disabled: c,
			form: d,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Rg.displayName = Ng;
var zg = "SwitchThumb", Bg = e.forwardRef((e, t) => {
	let { __scopeSwitch: n, ...r } = e, i = Lg(zg, n);
	return /* @__PURE__ */ x(H.span, {
		"data-state": Ug(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
Bg.displayName = zg;
var Vg = "SwitchBubbleInput", Hg = e.forwardRef(({ __scopeSwitch: t, control: n, checked: r, bubbles: i = !0, ...a }, o) => {
	let s = e.useRef(null), c = V(s, o), l = lo(r), u = uo(n);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (l !== r && n) {
			let t = new Event("click", { bubbles: i });
			n.call(e, r), e.dispatchEvent(t);
		}
	}, [
		l,
		r,
		i
	]), /* @__PURE__ */ x("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: r,
		...a,
		tabIndex: -1,
		ref: c,
		style: {
			...a.style,
			...u,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
Hg.displayName = Vg;
function Ug(e) {
	return e ? "checked" : "unchecked";
}
var Wg = Rg, Gg = Bg, Kg = "Tabs", [qg, Jg] = mt(Kg, [vl]), Yg = vl(), [Xg, Zg] = qg(Kg), Qg = e.forwardRef((e, t) => {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, u = Qt(s), [d, f] = Tt({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: Kg
	});
	return /* @__PURE__ */ x(Xg, {
		scope: n,
		baseId: Ft(),
		value: d,
		onValueChange: f,
		orientation: o,
		dir: u,
		activationMode: c,
		children: /* @__PURE__ */ x(H.div, {
			dir: u,
			"data-orientation": o,
			...l,
			ref: t
		})
	});
});
Qg.displayName = Kg;
var $g = "TabsList", e_ = e.forwardRef((e, t) => {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, a = Zg($g, n);
	return /* @__PURE__ */ x(Al, {
		asChild: !0,
		...Yg(n),
		orientation: a.orientation,
		dir: a.dir,
		loop: r,
		children: /* @__PURE__ */ x(H.div, {
			role: "tablist",
			"aria-orientation": a.orientation,
			...i,
			ref: t
		})
	});
});
e_.displayName = $g;
var t_ = "TabsTrigger", n_ = e.forwardRef((e, t) => {
	let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e, o = Zg(t_, n), s = Yg(n), c = a_(o.baseId, r), l = o_(o.baseId, r), u = r === o.value;
	return /* @__PURE__ */ x(jl, {
		asChild: !0,
		...s,
		focusable: !i,
		active: u,
		children: /* @__PURE__ */ x(H.button, {
			type: "button",
			role: "tab",
			"aria-selected": u,
			"aria-controls": l,
			"data-state": u ? "active" : "inactive",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			id: c,
			...a,
			ref: t,
			onMouseDown: U(e.onMouseDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 ? o.onValueChange(r) : e.preventDefault();
			}),
			onKeyDown: U(e.onKeyDown, (e) => {
				[" ", "Enter"].includes(e.key) && o.onValueChange(r);
			}),
			onFocus: U(e.onFocus, () => {
				let e = o.activationMode !== "manual";
				!u && !i && e && o.onValueChange(r);
			})
		})
	});
});
n_.displayName = t_;
var r_ = "TabsContent", i_ = e.forwardRef((t, n) => {
	let { __scopeTabs: r, value: i, forceMount: a, children: o, ...s } = t, c = Zg(r_, r), l = a_(c.baseId, i), u = o_(c.baseId, i), d = i === c.value, f = e.useRef(d);
	return e.useEffect(() => {
		let e = requestAnimationFrame(() => f.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ x(kt, {
		present: a || d,
		children: ({ present: e }) => /* @__PURE__ */ x(H.div, {
			"data-state": d ? "active" : "inactive",
			"data-orientation": c.orientation,
			role: "tabpanel",
			"aria-labelledby": l,
			hidden: !e,
			id: u,
			tabIndex: 0,
			...s,
			ref: n,
			style: {
				...t.style,
				animationDuration: f.current ? "0s" : void 0
			},
			children: e && o
		})
	});
});
i_.displayName = r_;
function a_(e, t) {
	return `${e}-trigger-${t}`;
}
function o_(e, t) {
	return `${e}-content-${t}`;
}
var s_ = Qg, c_ = e_, l_ = n_, u_ = i_, d_ = Symbol("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function f_(e) {
	let t = ({ children: e }) => /* @__PURE__ */ x(b, { children: e });
	return t.displayName = `${e}.Slottable`, t.__radixId = d_, t;
}
//#endregion
//#region node_modules/@radix-ui/react-tooltip/dist/index.mjs
var [p_, m_] = mt("Tooltip", [Gc]), h_ = Gc(), g_ = "TooltipProvider", __ = 700, v_ = "tooltip.open", [y_, b_] = p_(g_), x_ = (t) => {
	let { __scopeTooltip: n, delayDuration: r = __, skipDelayDuration: i = 300, disableHoverableContent: a = !1, children: o } = t, s = e.useRef(!0), c = e.useRef(!1), l = e.useRef(0);
	return e.useEffect(() => {
		let e = l.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ x(y_, {
		scope: n,
		isOpenDelayedRef: s,
		delayDuration: r,
		onOpen: e.useCallback(() => {
			window.clearTimeout(l.current), s.current = !1;
		}, []),
		onClose: e.useCallback(() => {
			window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, i);
		}, [i]),
		isPointerInTransitRef: c,
		onPointerInTransitChange: e.useCallback((e) => {
			c.current = e;
		}, []),
		disableHoverableContent: a,
		children: o
	});
};
x_.displayName = g_;
var S_ = "Tooltip", [C_, w_] = p_(S_), T_ = (t) => {
	let { __scopeTooltip: n, children: r, open: i, defaultOpen: a, onOpenChange: o, disableHoverableContent: s, delayDuration: c } = t, l = b_(S_, t.__scopeTooltip), u = h_(n), [d, f] = e.useState(null), p = Ft(), m = e.useRef(0), h = s ?? l.disableHoverableContent, g = c ?? l.delayDuration, _ = e.useRef(!1), [v, y] = Tt({
		prop: i,
		defaultProp: a ?? !1,
		onChange: (e) => {
			e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(v_))) : l.onClose(), o?.(e);
		},
		caller: S_
	}), b = e.useMemo(() => v ? _.current ? "delayed-open" : "instant-open" : "closed", [v]), S = e.useCallback(() => {
		window.clearTimeout(m.current), m.current = 0, _.current = !1, y(!0);
	}, [y]), C = e.useCallback(() => {
		window.clearTimeout(m.current), m.current = 0, y(!1);
	}, [y]), w = e.useCallback(() => {
		window.clearTimeout(m.current), m.current = window.setTimeout(() => {
			_.current = !0, y(!0), m.current = 0;
		}, g);
	}, [g, y]);
	return e.useEffect(() => () => {
		m.current &&= (window.clearTimeout(m.current), 0);
	}, []), /* @__PURE__ */ x(sl, {
		...u,
		children: /* @__PURE__ */ x(C_, {
			scope: n,
			contentId: p,
			open: v,
			stateAttribute: b,
			trigger: d,
			onTriggerChange: f,
			onTriggerEnter: e.useCallback(() => {
				l.isOpenDelayedRef.current ? w() : S();
			}, [
				l.isOpenDelayedRef,
				w,
				S
			]),
			onTriggerLeave: e.useCallback(() => {
				h ? C() : (window.clearTimeout(m.current), m.current = 0);
			}, [C, h]),
			onOpen: S,
			onClose: C,
			disableHoverableContent: h,
			children: r
		})
	});
};
T_.displayName = S_;
var E_ = "TooltipTrigger", D_ = e.forwardRef((t, n) => {
	let { __scopeTooltip: r, ...i } = t, a = w_(E_, r), o = b_(E_, r), s = h_(r), c = V(n, e.useRef(null), a.onTriggerChange), l = e.useRef(!1), u = e.useRef(!1), d = e.useCallback(() => l.current = !1, []);
	return e.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ x(cl, {
		asChild: !0,
		...s,
		children: /* @__PURE__ */ x(H.button, {
			"aria-describedby": a.open ? a.contentId : void 0,
			"data-state": a.stateAttribute,
			...i,
			ref: c,
			onPointerMove: U(t.onPointerMove, (e) => {
				e.pointerType !== "touch" && !u.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), u.current = !0);
			}),
			onPointerLeave: U(t.onPointerLeave, () => {
				a.onTriggerLeave(), u.current = !1;
			}),
			onPointerDown: U(t.onPointerDown, () => {
				a.open && a.onClose(), l.current = !0, document.addEventListener("pointerup", d, { once: !0 });
			}),
			onFocus: U(t.onFocus, () => {
				l.current || a.onOpen();
			}),
			onBlur: U(t.onBlur, a.onClose),
			onClick: U(t.onClick, a.onClose)
		})
	});
});
D_.displayName = E_;
var O_ = "TooltipPortal", [k_, A_] = p_(O_, { forceMount: void 0 }), j_ = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = w_(O_, t);
	return /* @__PURE__ */ x(k_, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ x(kt, {
			present: n || a.open,
			children: /* @__PURE__ */ x(fr, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
j_.displayName = O_;
var M_ = "TooltipContent", N_ = e.forwardRef((e, t) => {
	let n = A_(M_, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = w_(M_, e.__scopeTooltip);
	return /* @__PURE__ */ x(kt, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ x(R_, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ x(P_, {
			side: i,
			...a,
			ref: t
		})
	});
}), P_ = e.forwardRef((t, n) => {
	let r = w_(M_, t.__scopeTooltip), i = b_(M_, t.__scopeTooltip), a = e.useRef(null), o = V(n, a), [s, c] = e.useState(null), { trigger: l, onClose: u } = r, d = a.current, { onPointerInTransitChange: f } = i, p = e.useCallback(() => {
		c(null), f(!1);
	}, [f]), m = e.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = H_(r, V_(r, n.getBoundingClientRect())), a = U_(t.getBoundingClientRect());
		c(G_([...i, ...a])), f(!0);
	}, [f]);
	return e.useEffect(() => () => p(), [p]), e.useEffect(() => {
		if (l && d) {
			let e = (e) => m(e, d), t = (e) => m(e, l);
			return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
				l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t);
			};
		}
	}, [
		l,
		d,
		m,
		p
	]), e.useEffect(() => {
		if (s) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = l?.contains(t) || d?.contains(t), i = !W_(n, s);
				r ? p() : i && (p(), u());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		l,
		d,
		s,
		u,
		p
	]), /* @__PURE__ */ x(R_, {
		...t,
		ref: o
	});
}), [F_, I_] = p_(S_, { isInside: !1 }), L_ = /* @__PURE__ */ f_("TooltipContent"), R_ = e.forwardRef((t, n) => {
	let { __scopeTooltip: r, children: i, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: s, ...c } = t, l = w_(M_, r), u = h_(r), { onClose: d } = l;
	return e.useEffect(() => (document.addEventListener(v_, d), () => document.removeEventListener(v_, d)), [d]), e.useEffect(() => {
		if (l.trigger) {
			let e = (e) => {
				e.target?.contains(l.trigger) && d();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [l.trigger, d]), /* @__PURE__ */ x(Hn, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: o,
		onPointerDownOutside: s,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: d,
		children: /* @__PURE__ */ S(ll, {
			"data-state": l.stateAttribute,
			...u,
			...c,
			ref: n,
			style: {
				...c.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ x(L_, { children: i }), /* @__PURE__ */ x(F_, {
				scope: r,
				isInside: !0,
				children: /* @__PURE__ */ x(ft, {
					id: l.contentId,
					role: "tooltip",
					children: a || i
				})
			})]
		})
	});
});
N_.displayName = M_;
var z_ = "TooltipArrow", B_ = e.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = h_(n);
	return I_(z_, n).isInside ? null : /* @__PURE__ */ x(ul, {
		...i,
		...r,
		ref: t
	});
});
B_.displayName = z_;
function V_(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function H_(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function U_(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function W_(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function G_(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), K_(t);
}
function K_(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var q_ = x_, J_ = T_, Y_ = D_, X_ = j_, Z_ = N_, Q_ = B_, $_ = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, ev = (e, t) => ({
	classGroupId: e,
	validator: t
}), tv = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), nv = "-", rv = [], iv = "arbitrary..", av = (e) => {
	let t = cv(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return sv(e);
			let n = e.split(nv);
			return ov(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? $_(i, t) : t : i || rv;
			}
			return n[e] || rv;
		}
	};
}, ov = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = ov(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(nv) : e.slice(t).join(nv), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, sv = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? iv + r : void 0;
})(), cv = (e) => {
	let { theme: t, classGroups: n } = e;
	return lv(n, t);
}, lv = (e, t) => {
	let n = tv();
	for (let r in e) {
		let i = e[r];
		uv(i, n, r, t);
	}
	return n;
}, uv = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		dv(i, t, n, r);
	}
}, dv = (e, t, n, r) => {
	if (typeof e == "string") {
		fv(e, t, n);
		return;
	}
	if (typeof e == "function") {
		pv(e, t, n, r);
		return;
	}
	mv(e, t, n, r);
}, fv = (e, t, n) => {
	let r = e === "" ? t : hv(t, e);
	r.classGroupId = n;
}, pv = (e, t, n, r) => {
	if (gv(e)) {
		uv(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(ev(n, e));
}, mv = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		uv(o, hv(t, a), n, r);
	}
}, hv = (e, t) => {
	let n = e, r = t.split(nv), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = tv(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, gv = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, _v = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, vv = "!", yv = ":", bv = [], xv = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Sv = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === yv) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(vv) ? (c = s.slice(0, -1), l = !0) : s.startsWith(vv) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return xv(t, l, c, u);
	};
	if (t) {
		let e = t + yv, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : xv(bv, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Cv = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, wv = (e) => ({
	cache: _v(e.cacheSize),
	parseClassName: Sv(e),
	sortModifiers: Cv(e),
	...av(e)
}), Tv = /\s+/, Ev = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(Tv), c = "";
	for (let e = s.length - 1; e >= 0; --e) {
		let t = s[e], { isExternal: l, modifiers: u, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: p } = n(t);
		if (l) {
			c = t + (c.length > 0 ? " " + c : c);
			continue;
		}
		let m = !!p, h = r(m ? f.substring(0, p) : f);
		if (!h) {
			if (!m) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			if (h = r(f), !h) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			m = !1;
		}
		let g = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), _ = d ? g + vv : g, v = _ + h;
		if (o.indexOf(v) > -1) continue;
		o.push(v);
		let y = i(h, m);
		for (let e = 0; e < y.length; ++e) {
			let t = y[e];
			o.push(_ + t);
		}
		c = t + (c.length > 0 ? " " + c : c);
	}
	return c;
}, Dv = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Ov(n)) && (i && (i += " "), i += r);
	return i;
}, Ov = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Ov(e[r])) && (n && (n += " "), n += t);
	return n;
}, kv = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = wv(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Ev(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Dv(...e));
}, Av = [], jv = (e) => {
	let t = (t) => t[e] || Av;
	return t.isThemeGetter = !0, t;
}, Mv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Nv = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Pv = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Fv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Iv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Lv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Rv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Bv = (e) => Pv.test(e), W = (e) => !!e && !Number.isNaN(Number(e)), Vv = (e) => !!e && Number.isInteger(Number(e)), Hv = (e) => e.endsWith("%") && W(e.slice(0, -1)), Uv = (e) => Fv.test(e), Wv = () => !0, Gv = (e) => Iv.test(e) && !Lv.test(e), Kv = () => !1, qv = (e) => Rv.test(e), Jv = (e) => zv.test(e), Yv = (e) => !G(e) && !K(e), Xv = (e) => dy(e, hy, Kv), G = (e) => Mv.test(e), Zv = (e) => dy(e, gy, Gv), Qv = (e) => dy(e, _y, W), $v = (e) => dy(e, yy, Wv), ey = (e) => dy(e, vy, Kv), ty = (e) => dy(e, py, Kv), ny = (e) => dy(e, my, Jv), ry = (e) => dy(e, by, qv), K = (e) => Nv.test(e), iy = (e) => fy(e, gy), ay = (e) => fy(e, vy), oy = (e) => fy(e, py), sy = (e) => fy(e, hy), cy = (e) => fy(e, my), ly = (e) => fy(e, by, !0), uy = (e) => fy(e, yy, !0), dy = (e, t, n) => {
	let r = Mv.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, fy = (e, t, n = !1) => {
	let r = Nv.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, py = (e) => e === "position" || e === "percentage", my = (e) => e === "image" || e === "url", hy = (e) => e === "length" || e === "size" || e === "bg-size", gy = (e) => e === "length", _y = (e) => e === "number", vy = (e) => e === "family-name", yy = (e) => e === "number" || e === "weight", by = (e) => e === "shadow", xy = /* @__PURE__ */ kv(() => {
	let e = jv("color"), t = jv("font"), n = jv("text"), r = jv("font-weight"), i = jv("tracking"), a = jv("leading"), o = jv("breakpoint"), s = jv("container"), c = jv("spacing"), l = jv("radius"), u = jv("shadow"), d = jv("inset-shadow"), f = jv("text-shadow"), p = jv("drop-shadow"), m = jv("blur"), h = jv("perspective"), g = jv("aspect"), _ = jv("ease"), v = jv("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		K,
		G
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		K,
		G,
		c
	], T = () => [
		Bv,
		"full",
		"auto",
		...w()
	], E = () => [
		Vv,
		"none",
		"subgrid",
		K,
		G
	], D = () => [
		"auto",
		{ span: [
			"full",
			Vv,
			K,
			G
		] },
		Vv,
		K,
		G
	], O = () => [
		Vv,
		"auto",
		K,
		G
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		K,
		G
	], A = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], j = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], M = () => ["auto", ...w()], N = () => [
		Bv,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], P = () => [
		Bv,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], F = () => [
		Bv,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], I = () => [
		e,
		K,
		G
	], ee = () => [
		...b(),
		oy,
		ty,
		{ position: [K, G] }
	], te = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], L = () => [
		"auto",
		"cover",
		"contain",
		sy,
		Xv,
		{ size: [K, G] }
	], ne = () => [
		Hv,
		iy,
		Zv
	], R = () => [
		"",
		"none",
		"full",
		l,
		K,
		G
	], z = () => [
		"",
		W,
		iy,
		Zv
	], re = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ie = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], B = () => [
		W,
		Hv,
		oy,
		ty
	], ae = () => [
		"",
		"none",
		m,
		K,
		G
	], oe = () => [
		"none",
		W,
		K,
		G
	], se = () => [
		"none",
		W,
		K,
		G
	], ce = () => [
		W,
		K,
		G
	], le = () => [
		Bv,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [Uv],
			breakpoint: [Uv],
			color: [Wv],
			container: [Uv],
			"drop-shadow": [Uv],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Yv],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [Uv],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [Uv],
			shadow: [Uv],
			spacing: ["px", W],
			text: [Uv],
			"text-shadow": [Uv],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				Bv,
				G,
				K,
				g
			] }],
			container: ["container"],
			columns: [{ columns: [
				W,
				G,
				K,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				Vv,
				"auto",
				K,
				G
			] }],
			basis: [{ basis: [
				Bv,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				W,
				Bv,
				"auto",
				"initial",
				"none",
				G
			] }],
			grow: [{ grow: [
				"",
				W,
				K,
				G
			] }],
			shrink: [{ shrink: [
				"",
				W,
				K,
				G
			] }],
			order: [{ order: [
				Vv,
				"first",
				"last",
				"none",
				K,
				G
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...A(), "normal"] }],
			"justify-items": [{ "justify-items": [...j(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...j()] }],
			"align-content": [{ content: ["normal", ...A()] }],
			"align-items": [{ items: [...j(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...j(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": A() }],
			"place-items": [{ "place-items": [...j(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...j()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: M() }],
			mx: [{ mx: M() }],
			my: [{ my: M() }],
			ms: [{ ms: M() }],
			me: [{ me: M() }],
			mbs: [{ mbs: M() }],
			mbe: [{ mbe: M() }],
			mt: [{ mt: M() }],
			mr: [{ mr: M() }],
			mb: [{ mb: M() }],
			ml: [{ ml: M() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: N() }],
			"inline-size": [{ inline: ["auto", ...P()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...P()] }],
			"max-inline-size": [{ "max-inline": ["none", ...P()] }],
			"block-size": [{ block: ["auto", ...F()] }],
			"min-block-size": [{ "min-block": ["auto", ...F()] }],
			"max-block-size": [{ "max-block": ["none", ...F()] }],
			w: [{ w: [
				s,
				"screen",
				...N()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...N()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...N()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...N()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...N()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				iy,
				Zv
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				uy,
				$v
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Hv,
				G
			] }],
			"font-family": [{ font: [
				ay,
				ey,
				t
			] }],
			"font-features": [{ "font-features": [G] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				K,
				G
			] }],
			"line-clamp": [{ "line-clamp": [
				W,
				"none",
				K,
				Qv
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				K,
				G
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				K,
				G
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: I() }],
			"text-color": [{ text: I() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...re(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				W,
				"from-font",
				"auto",
				K,
				Zv
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				W,
				"auto",
				K,
				G
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				K,
				G
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				K,
				G
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ee() }],
			"bg-repeat": [{ bg: te() }],
			"bg-size": [{ bg: L() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						Vv,
						K,
						G
					],
					radial: [
						"",
						K,
						G
					],
					conic: [
						Vv,
						K,
						G
					]
				},
				cy,
				ny
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: ne() }],
			"gradient-via-pos": [{ via: ne() }],
			"gradient-to-pos": [{ to: ne() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: R() }],
			"rounded-s": [{ "rounded-s": R() }],
			"rounded-e": [{ "rounded-e": R() }],
			"rounded-t": [{ "rounded-t": R() }],
			"rounded-r": [{ "rounded-r": R() }],
			"rounded-b": [{ "rounded-b": R() }],
			"rounded-l": [{ "rounded-l": R() }],
			"rounded-ss": [{ "rounded-ss": R() }],
			"rounded-se": [{ "rounded-se": R() }],
			"rounded-ee": [{ "rounded-ee": R() }],
			"rounded-es": [{ "rounded-es": R() }],
			"rounded-tl": [{ "rounded-tl": R() }],
			"rounded-tr": [{ "rounded-tr": R() }],
			"rounded-br": [{ "rounded-br": R() }],
			"rounded-bl": [{ "rounded-bl": R() }],
			"border-w": [{ border: z() }],
			"border-w-x": [{ "border-x": z() }],
			"border-w-y": [{ "border-y": z() }],
			"border-w-s": [{ "border-s": z() }],
			"border-w-e": [{ "border-e": z() }],
			"border-w-bs": [{ "border-bs": z() }],
			"border-w-be": [{ "border-be": z() }],
			"border-w-t": [{ "border-t": z() }],
			"border-w-r": [{ "border-r": z() }],
			"border-w-b": [{ "border-b": z() }],
			"border-w-l": [{ "border-l": z() }],
			"divide-x": [{ "divide-x": z() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": z() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...re(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...re(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: I() }],
			"border-color-x": [{ "border-x": I() }],
			"border-color-y": [{ "border-y": I() }],
			"border-color-s": [{ "border-s": I() }],
			"border-color-e": [{ "border-e": I() }],
			"border-color-bs": [{ "border-bs": I() }],
			"border-color-be": [{ "border-be": I() }],
			"border-color-t": [{ "border-t": I() }],
			"border-color-r": [{ "border-r": I() }],
			"border-color-b": [{ "border-b": I() }],
			"border-color-l": [{ "border-l": I() }],
			"divide-color": [{ divide: I() }],
			"outline-style": [{ outline: [
				...re(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				W,
				K,
				G
			] }],
			"outline-w": [{ outline: [
				"",
				W,
				iy,
				Zv
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				ly,
				ry
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				ly,
				ry
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: z() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [W, Zv] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": z() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				ly,
				ry
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				W,
				K,
				G
			] }],
			"mix-blend": [{ "mix-blend": [
				...ie(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ie() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [W] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": B() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": B() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": B() }],
			"mask-image-t-to-pos": [{ "mask-t-to": B() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": B() }],
			"mask-image-r-to-pos": [{ "mask-r-to": B() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": B() }],
			"mask-image-b-to-pos": [{ "mask-b-to": B() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": B() }],
			"mask-image-l-to-pos": [{ "mask-l-to": B() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": B() }],
			"mask-image-x-to-pos": [{ "mask-x-to": B() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": B() }],
			"mask-image-y-to-pos": [{ "mask-y-to": B() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [K, G] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": B() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": B() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [W] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": B() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": B() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": I() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": I() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ee() }],
			"mask-repeat": [{ mask: te() }],
			"mask-size": [{ mask: L() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				K,
				G
			] }],
			filter: [{ filter: [
				"",
				"none",
				K,
				G
			] }],
			blur: [{ blur: ae() }],
			brightness: [{ brightness: [
				W,
				K,
				G
			] }],
			contrast: [{ contrast: [
				W,
				K,
				G
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				ly,
				ry
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				W,
				K,
				G
			] }],
			"hue-rotate": [{ "hue-rotate": [
				W,
				K,
				G
			] }],
			invert: [{ invert: [
				"",
				W,
				K,
				G
			] }],
			saturate: [{ saturate: [
				W,
				K,
				G
			] }],
			sepia: [{ sepia: [
				"",
				W,
				K,
				G
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				K,
				G
			] }],
			"backdrop-blur": [{ "backdrop-blur": ae() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				W,
				K,
				G
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				W,
				K,
				G
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				W,
				K,
				G
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				W,
				K,
				G
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				W,
				K,
				G
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				W,
				K,
				G
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				W,
				K,
				G
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				W,
				K,
				G
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				K,
				G
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				W,
				"initial",
				K,
				G
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				K,
				G
			] }],
			delay: [{ delay: [
				W,
				K,
				G
			] }],
			animate: [{ animate: [
				"none",
				v,
				K,
				G
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				K,
				G
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: oe() }],
			"rotate-x": [{ "rotate-x": oe() }],
			"rotate-y": [{ "rotate-y": oe() }],
			"rotate-z": [{ "rotate-z": oe() }],
			scale: [{ scale: se() }],
			"scale-x": [{ "scale-x": se() }],
			"scale-y": [{ "scale-y": se() }],
			"scale-z": [{ "scale-z": se() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ce() }],
			"skew-x": [{ "skew-x": ce() }],
			"skew-y": [{ "skew-y": ce() }],
			transform: [{ transform: [
				K,
				G,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: le() }],
			"translate-x": [{ "translate-x": le() }],
			"translate-y": [{ "translate-y": le() }],
			"translate-z": [{ "translate-z": le() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: I() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: I() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				K,
				G
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				K,
				G
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				W,
				iy,
				Zv,
				Qv
			] }],
			stroke: [{ stroke: ["none", ...I()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/lib/utils.ts
function q(...e) {
	return xy(Xe(e));
}
//#endregion
//#region src/components/ui/button.tsx
var Sy = $e("group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-none",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Cy({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	return /* @__PURE__ */ x(r ? Dg : "button", {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: q(Sy({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/common/LoadingSpinner.tsx
var wy = {
	sm: "h-4 w-4",
	md: "h-8 w-8",
	lg: "h-12 w-12"
}, Ty = ({ size: e = "md", className: t }) => /* @__PURE__ */ x("div", { className: q("animate-spin rounded-full border-2 border-muted border-t-primary", wy[e], t) }), Ey = () => /* @__PURE__ */ x("div", {
	className: "flex h-screen items-center justify-center",
	children: /* @__PURE__ */ x(Ty, { size: "lg" })
}), Dy = s(({ loading: e, prefixIcon: t, suffixIcon: n, children: r, disabled: i, className: a, variant: o, size: s, ...c }, l) => /* @__PURE__ */ S(Cy, {
	ref: l,
	variant: o,
	size: s,
	disabled: i || e,
	className: q(a),
	...c,
	children: [
		e ? /* @__PURE__ */ x(Ty, { size: "sm" }) : t && /* @__PURE__ */ x(t, {}),
		r,
		n && !e && /* @__PURE__ */ x(n, {})
	]
}));
Dy.displayName = "AppButton";
//#endregion
//#region src/components/common/AppSection.tsx
var Oy = {
	1: "grid-cols-1",
	2: "grid-cols-1 sm:grid-cols-2",
	3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
	4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
	5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
	6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
}, ky = ({ title: e, description: t, actions: n, cols: r, children: i, className: a }) => /* @__PURE__ */ S("section", {
	className: q("rounded-lg border bg-card", a),
	children: [(e || t || n) && /* @__PURE__ */ S("div", {
		className: "flex items-center justify-between border-b px-4 py-3",
		children: [/* @__PURE__ */ S("div", { children: [e && /* @__PURE__ */ x("h3", {
			className: "text-sm font-semibold text-foreground",
			children: e
		}), t && /* @__PURE__ */ x("p", {
			className: "mt-0.5 text-xs text-muted-foreground",
			children: t
		})] }), n && /* @__PURE__ */ x("div", {
			className: "flex items-center gap-2",
			children: n
		})]
	}), /* @__PURE__ */ x("div", {
		className: q("p-4", r && `grid gap-4 ${Oy[r]}`),
		children: i
	})]
}), Ay = ({ search: e, grid: t, children: n, noPadding: r, className: i }) => {
	let a = q("flex h-full flex-col gap-3", !r && "p-4", i);
	return n ? /* @__PURE__ */ x("div", {
		className: a,
		children: n
	}) : /* @__PURE__ */ S("div", {
		className: a,
		children: [e && /* @__PURE__ */ x("div", {
			className: "shrink-0",
			children: e
		}), t && /* @__PURE__ */ x("div", {
			className: "min-h-0 flex-1",
			children: t
		})]
	});
}, jy = a(null), My = () => d(jy) ?? {}, Ny = ({ children: e, onSubmit: t, labelAlign: n, labelWidth: r, className: i, ...a }) => {
	let o = {
		labelAlign: n,
		labelWidth: r
	};
	return /* @__PURE__ */ x(jy.Provider, {
		value: o,
		children: /* @__PURE__ */ x("form", {
			onSubmit: (e) => {
				e.preventDefault(), t?.(e);
			},
			className: q("flex flex-col gap-3", i),
			...a,
			children: e
		})
	});
};
//#endregion
//#region src/components/ui/label.tsx
function Py({ className: e, ...t }) {
	return /* @__PURE__ */ x(Pf, {
		"data-slot": "label",
		className: q("flex items-center gap-2 text-xs leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/common/FieldWrapper.tsx
var Fy = ({ label: e, labelAlign: t, labelWidth: n, required: r, error: i, hint: a, children: o, className: s }) => {
	let c = My(), l = t ?? c.labelAlign ?? "left", u = n ?? c.labelWidth;
	if (!e) return /* @__PURE__ */ S("div", {
		className: q("flex flex-col gap-1", s),
		children: [
			o,
			i && /* @__PURE__ */ x("p", {
				className: "text-xs text-destructive",
				children: i
			}),
			!i && a && /* @__PURE__ */ x("p", {
				className: "text-xs text-muted-foreground",
				children: a
			})
		]
	});
	let d = /* @__PURE__ */ S(Py, {
		style: u ? {
			minWidth: u,
			width: u
		} : void 0,
		className: q("shrink-0", (l === "left" || l === "right") && "leading-7", i && "text-destructive"),
		children: [r && /* @__PURE__ */ x("span", {
			className: "mr-0.5 text-destructive",
			children: "*"
		}), e]
	});
	return /* @__PURE__ */ S("div", {
		className: q(l === "left" || l === "right" ? "flex flex-row items-start gap-3" : "flex flex-col gap-1.5", l === "right" && "flex-row-reverse", l === "bottom" && "flex-col-reverse", s),
		children: [d, /* @__PURE__ */ S("div", {
			className: "flex min-w-0 flex-1 flex-col gap-1",
			children: [
				o,
				i && /* @__PURE__ */ x("p", {
					className: "text-xs text-destructive",
					children: i
				}),
				!i && a && /* @__PURE__ */ x("p", {
					className: "text-xs text-muted-foreground",
					children: a
				})
			]
		})]
	});
};
//#endregion
//#region src/components/ui/input.tsx
function Iy({ className: e, type: t, ...n }) {
	return /* @__PURE__ */ x("input", {
		type: t,
		"data-slot": "input",
		className: q("h-7 w-full min-w-0 rounded-none border border-input bg-transparent px-2 py-0.5 text-xs transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 md:text-xs dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", e),
		...n
	});
}
//#endregion
//#region src/components/common/AppInput.tsx
var Ly = s(({ label: e, labelAlign: t, labelWidth: n, required: r, error: i, hint: a, prefixIcon: o, suffixIcon: s, onSuffixClick: c, className: l, ...u }, d) => /* @__PURE__ */ x(Fy, {
	label: e,
	labelAlign: t,
	labelWidth: n,
	required: r,
	error: i,
	hint: a,
	children: /* @__PURE__ */ S("div", {
		className: "relative",
		children: [
			o && /* @__PURE__ */ x("span", {
				className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
				children: /* @__PURE__ */ x(o, { className: "h-3.5 w-3.5" })
			}),
			/* @__PURE__ */ x(Iy, {
				ref: d,
				className: q(o && "pl-9", s && "pr-9", i && "border-destructive focus-visible:ring-destructive", l),
				...u
			}),
			s && /* @__PURE__ */ x("button", {
				type: "button",
				onClick: c,
				className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
				children: /* @__PURE__ */ x(s, { className: "h-3.5 w-3.5" })
			})
		]
	})
}));
Ly.displayName = "AppInput";
//#endregion
//#region src/components/ui/select.tsx
function Ry({ ...e }) {
	return /* @__PURE__ */ x(mg, {
		"data-slot": "select",
		...e
	});
}
function zy({ ...e }) {
	return /* @__PURE__ */ x(gg, {
		"data-slot": "select-value",
		...e
	});
}
function By({ className: e, size: t = "default", children: n, ...r }) {
	return /* @__PURE__ */ S(hg, {
		"data-slot": "select-trigger",
		"data-size": t,
		className: q("flex w-full items-center justify-between gap-1.5 rounded-none border border-input bg-transparent py-1 pr-1.5 pl-2 text-xs whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-7 data-[size=sm]:h-6 data-[size=sm]:rounded-none *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [n, /* @__PURE__ */ x(_g, {
			asChild: !0,
			children: /* @__PURE__ */ x(O, { className: "pointer-events-none size-4 text-muted-foreground" })
		})]
	});
}
function Vy({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ x(vg, { children: /* @__PURE__ */ S(yg, {
		"data-slot": "select-content",
		"data-align-trigger": n === "item-aligned",
		className: q("z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-none text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ x(Uy, {}),
			/* @__PURE__ */ x(bg, {
				"data-position": n,
				className: q("data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)", n === "popper" && ""),
				children: t
			}),
			/* @__PURE__ */ x(Wy, {})
		]
	}) });
}
function Hy({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ S(xg, {
		"data-slot": "select-item",
		className: q("relative flex w-full cursor-default items-center gap-2 rounded-none py-2 pr-8 pl-2 text-xs outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ x("span", {
			className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center",
			children: /* @__PURE__ */ x(Cg, { children: /* @__PURE__ */ x(E, { className: "pointer-events-none" }) })
		}), /* @__PURE__ */ x(Sg, { children: t })]
	});
}
function Uy({ className: e, ...t }) {
	return /* @__PURE__ */ x(wg, {
		"data-slot": "select-scroll-up-button",
		className: q("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: /* @__PURE__ */ x(P, {})
	});
}
function Wy({ className: e, ...t }) {
	return /* @__PURE__ */ x(Tg, {
		"data-slot": "select-scroll-down-button",
		className: q("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: /* @__PURE__ */ x(O, {})
	});
}
//#endregion
//#region src/components/common/AppSelect.tsx
var Gy = "__ALL__", Ky = (e) => e === "" || e === void 0 ? Gy : e, qy = (e) => e === Gy ? "" : e, Jy = ({ label: e, labelAlign: t, labelWidth: n, required: r, error: i, hint: a, options: o, value: s, onChange: c, placeholder: l = "선택하세요", disabled: u, clearable: d, className: f }) => {
	let p = d && s !== void 0 && s !== "" && !u;
	return /* @__PURE__ */ x(Fy, {
		label: e,
		labelAlign: t,
		labelWidth: n,
		required: r,
		error: i,
		hint: a,
		children: /* @__PURE__ */ S("div", {
			className: "relative",
			children: [/* @__PURE__ */ S(Ry, {
				value: Ky(s),
				onValueChange: (e) => c?.(qy(e)),
				disabled: u,
				children: [/* @__PURE__ */ x(By, {
					className: q(i && "border-destructive focus:ring-destructive", p && "pr-8", f),
					children: /* @__PURE__ */ x(zy, { placeholder: l })
				}), /* @__PURE__ */ x(Vy, { children: o.map((e) => /* @__PURE__ */ x(Hy, {
					value: Ky(e.value),
					disabled: e.disabled,
					children: e.label
				}, e.value || Gy)) })]
			}), p && /* @__PURE__ */ x("button", {
				type: "button",
				className: "absolute right-2 top-1/2 -translate-y-1/2 z-10 text-muted-foreground hover:text-foreground",
				onClick: (e) => {
					e.stopPropagation(), c?.("");
				},
				children: /* @__PURE__ */ x(De, { className: "size-3" })
			})]
		})
	});
};
//#endregion
//#region src/components/ui/textarea.tsx
function Yy({ className: e, ...t }) {
	return /* @__PURE__ */ x("textarea", {
		"data-slot": "textarea",
		className: q("flex field-sizing-content min-h-14 w-full rounded-none border border-input bg-transparent px-2 py-1.5 text-xs transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 md:text-xs dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", e),
		...t
	});
}
//#endregion
//#region src/components/common/AppTextarea.tsx
var Xy = s(({ label: e, labelAlign: t, labelWidth: n, required: r, error: i, hint: a, className: o, ...s }, c) => /* @__PURE__ */ x(Fy, {
	label: e,
	labelAlign: t,
	labelWidth: n,
	required: r,
	error: i,
	hint: a,
	children: /* @__PURE__ */ x(Yy, {
		ref: c,
		className: q(i && "border-destructive focus-visible:ring-destructive", o),
		...s
	})
}));
Xy.displayName = "AppTextarea";
//#endregion
//#region src/components/ui/checkbox.tsx
function Zy({ className: e, ...t }) {
	return /* @__PURE__ */ x(bo, {
		"data-slot": "checkbox",
		className: q("peer relative flex size-3.5 shrink-0 items-center justify-center rounded-none border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary", e),
		...t,
		children: /* @__PURE__ */ x(So, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none [&>svg]:size-3",
			children: /* @__PURE__ */ x(E, {})
		})
	});
}
//#endregion
//#region src/components/common/AppCheckbox.tsx
var Qy = ({ id: e, label: t, labelPosition: n = "right", checked: r, onCheckedChange: i, disabled: a, error: o, hint: s, className: c }) => /* @__PURE__ */ S("div", {
	className: q("flex flex-col gap-1", c),
	children: [
		/* @__PURE__ */ S("div", {
			className: "flex items-center gap-2",
			children: [
				t && n === "left" && /* @__PURE__ */ x(Py, {
					htmlFor: e,
					className: q("cursor-pointer", a && "opacity-50", o && "text-destructive"),
					children: t
				}),
				/* @__PURE__ */ x(Zy, {
					id: e,
					checked: r,
					onCheckedChange: (e) => i?.(e === !0),
					disabled: a,
					className: q(o && "border-destructive")
				}),
				t && n === "right" && /* @__PURE__ */ x(Py, {
					htmlFor: e,
					className: q("cursor-pointer", a && "opacity-50", o && "text-destructive"),
					children: t
				})
			]
		}),
		o && /* @__PURE__ */ x("p", {
			className: "text-xs text-destructive",
			children: o
		}),
		!o && s && /* @__PURE__ */ x("p", {
			className: "text-xs text-muted-foreground",
			children: s
		})
	]
}), $y = ({ label: e, labelAlign: t, labelWidth: n, required: r, error: i, hint: a, options: o, value: s = [], onChange: c, layout: l = "horizontal", disabled: u, className: d }) => {
	let f = (e, t) => {
		t ? c?.([...s, e]) : c?.(s.filter((t) => t !== e));
	};
	return /* @__PURE__ */ x(Fy, {
		label: e,
		labelAlign: t,
		labelWidth: n,
		required: r,
		error: i,
		hint: a,
		children: /* @__PURE__ */ x("div", {
			className: q(l === "horizontal" ? "flex flex-row flex-wrap gap-x-4 gap-y-2" : "flex flex-col gap-2", d),
			children: o.map((e) => {
				let t = e.disabled ?? u;
				return /* @__PURE__ */ S("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ x(Zy, {
						id: `chkgrp-${e.value}`,
						checked: s.includes(e.value),
						onCheckedChange: (t) => f(e.value, t === !0),
						disabled: t,
						className: q(i && "border-destructive")
					}), /* @__PURE__ */ x(Py, {
						htmlFor: `chkgrp-${e.value}`,
						className: q("cursor-pointer font-normal", t && "cursor-not-allowed opacity-50", i && "text-destructive"),
						children: e.label
					})]
				}, e.value);
			})
		})
	});
};
//#endregion
//#region src/components/ui/radio-group.tsx
function eb({ className: e, ...t }) {
	return /* @__PURE__ */ x(sm, {
		"data-slot": "radio-group",
		className: q("grid w-full gap-2", e),
		...t
	});
}
function tb({ className: e, ...t }) {
	return /* @__PURE__ */ x(cm, {
		"data-slot": "radio-group-item",
		className: q("group/radio-group-item peer relative flex aspect-square size-3.5 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary", e),
		...t,
		children: /* @__PURE__ */ x(lm, {
			"data-slot": "radio-group-indicator",
			className: "flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ x("span", { className: "absolute top-1/2 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" })
		})
	});
}
//#endregion
//#region src/components/common/AppRadio.tsx
var nb = ({ label: e, labelAlign: t, labelWidth: n, required: r, error: i, hint: a, options: o, value: s, onChange: c, layout: l = "horizontal", disabled: u, className: d }) => /* @__PURE__ */ x(Fy, {
	label: e,
	labelAlign: t,
	labelWidth: n,
	required: r,
	error: i,
	hint: a,
	children: /* @__PURE__ */ x(eb, {
		value: s,
		onValueChange: c,
		disabled: u,
		className: q(l === "horizontal" ? "flex flex-row flex-wrap gap-x-4 gap-y-2" : "flex flex-col gap-2", d),
		children: o.map((e) => /* @__PURE__ */ S("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ x(tb, {
				id: `radio-${e.value}`,
				value: e.value,
				disabled: e.disabled ?? u,
				className: q(i && "border-destructive")
			}), /* @__PURE__ */ x(Py, {
				htmlFor: `radio-${e.value}`,
				className: q("cursor-pointer font-normal", (e.disabled ?? u) && "cursor-not-allowed opacity-50", i && "text-destructive"),
				children: e.label
			})]
		}, e.value))
	})
});
//#endregion
//#region src/components/ui/switch.tsx
function rb({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ x(Wg, {
		"data-slot": "switch",
		"data-size": t,
		className: q("peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50", e),
		...n,
		children: /* @__PURE__ */ x(Gg, {
			"data-slot": "switch-thumb",
			className: "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
		})
	});
}
//#endregion
//#region src/components/common/AppSwitch.tsx
var ib = ({ id: e, label: t, labelPosition: n = "right", checked: r, onCheckedChange: i, disabled: a, error: o, hint: s, className: c }) => /* @__PURE__ */ S("div", {
	className: q("flex flex-col gap-1", c),
	children: [
		/* @__PURE__ */ S("div", {
			className: "flex items-center gap-2",
			children: [
				t && n === "left" && /* @__PURE__ */ x(Py, {
					htmlFor: e,
					className: q("cursor-pointer", a && "opacity-50"),
					children: t
				}),
				/* @__PURE__ */ x(rb, {
					id: e,
					checked: r,
					onCheckedChange: i,
					disabled: a
				}),
				t && n === "right" && /* @__PURE__ */ x(Py, {
					htmlFor: e,
					className: q("cursor-pointer", a && "opacity-50"),
					children: t
				})
			]
		}),
		o && /* @__PURE__ */ x("p", {
			className: "text-xs text-destructive",
			children: o
		}),
		!o && s && /* @__PURE__ */ x("p", {
			className: "text-xs text-muted-foreground",
			children: s
		})
	]
}), ab = $e("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-none border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function ob({ className: e, variant: t = "default", asChild: n = !1, ...r }) {
	return /* @__PURE__ */ x(n ? Dg : "span", {
		"data-slot": "badge",
		"data-variant": t,
		className: q(ab({ variant: t }), e),
		...r
	});
}
//#endregion
//#region src/components/common/AppBadge.tsx
var sb = {
	active: "bg-green-100 text-green-700 border-green-200",
	inactive: "bg-gray-100 text-gray-600 border-gray-200",
	warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
	error: "bg-red-100 text-red-700 border-red-200",
	info: "bg-blue-100 text-blue-700 border-blue-200"
}, cb = ({ children: e, status: t, variant: n, className: r }) => /* @__PURE__ */ x(ob, {
	variant: t ? "outline" : n,
	className: q(t && sb[t], r),
	children: e
});
//#endregion
//#region src/components/ui/card.tsx
function lb({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "card",
		"data-size": t,
		className: q("group/card flex flex-col gap-4 overflow-hidden rounded-none bg-card py-4 text-xs/relaxed text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-2 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none", e),
		...n
	});
}
function ub({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "card-header",
		className: q("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-none px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3", e),
		...t
	});
}
function db({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "card-title",
		className: q("font-heading text-sm font-medium group-data-[size=sm]/card:text-sm", e),
		...t
	});
}
function fb({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "card-description",
		className: q("text-xs/relaxed text-muted-foreground", e),
		...t
	});
}
function pb({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "card-content",
		className: q("px-4 group-data-[size=sm]/card:px-3", e),
		...t
	});
}
function mb({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "card-footer",
		className: q("flex items-center rounded-none border-t p-4 group-data-[size=sm]/card:p-3", e),
		...t
	});
}
//#endregion
//#region src/components/common/AppCard.tsx
var hb = ({ title: e, description: t, children: n, footer: r, className: i, contentClassName: a }) => {
	let o = e || t;
	return /* @__PURE__ */ S(lb, {
		className: q(i),
		children: [
			o && /* @__PURE__ */ S(ub, { children: [e && /* @__PURE__ */ x(db, { children: e }), t && /* @__PURE__ */ x(fb, { children: t })] }),
			/* @__PURE__ */ x(pb, {
				className: q(!o && "pt-6", a),
				children: n
			}),
			r && /* @__PURE__ */ x(mb, { children: r })
		]
	});
};
//#endregion
//#region src/components/ui/dialog.tsx
function gb({ ...e }) {
	return /* @__PURE__ */ x(ba, {
		"data-slot": "dialog",
		...e
	});
}
function _b({ ...e }) {
	return /* @__PURE__ */ x(Sa, {
		"data-slot": "dialog-portal",
		...e
	});
}
function vb({ className: e, ...t }) {
	return /* @__PURE__ */ x(Ca, {
		"data-slot": "dialog-overlay",
		className: q("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function yb({ className: e, children: t, showCloseButton: n = !0, overlayClassName: r, ...i }) {
	return /* @__PURE__ */ S(_b, { children: [/* @__PURE__ */ x(vb, { className: r }), /* @__PURE__ */ S(wa, {
		"data-slot": "dialog-content",
		className: q("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-none bg-popover p-4 text-xs/relaxed text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...i,
		children: [t, n && /* @__PURE__ */ x(Da, {
			"data-slot": "dialog-close",
			asChild: !0,
			children: /* @__PURE__ */ S(Cy, {
				variant: "ghost",
				className: "absolute top-2 right-2",
				size: "icon-sm",
				children: [/* @__PURE__ */ x(De, {}), /* @__PURE__ */ x("span", {
					className: "sr-only",
					children: "Close"
				})]
			})
		})]
	})] });
}
function bb({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "dialog-header",
		className: q("flex flex-col gap-1 text-left", e),
		...t
	});
}
function xb({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ S("div", {
		"data-slot": "dialog-footer",
		className: q("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...r,
		children: [n, t && /* @__PURE__ */ x(Da, {
			asChild: !0,
			children: /* @__PURE__ */ x(Cy, {
				variant: "outline",
				children: "Close"
			})
		})]
	});
}
function Sb({ className: e, ...t }) {
	return /* @__PURE__ */ x(Ta, {
		"data-slot": "dialog-title",
		className: q("font-heading text-sm font-medium", e),
		...t
	});
}
function Cb({ className: e, ...t }) {
	return /* @__PURE__ */ x(Ea, {
		"data-slot": "dialog-description",
		className: q("text-xs/relaxed text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/common/AppDialog.tsx
var wb = {
	sm: "max-w-sm",
	md: "max-w-lg",
	lg: "max-w-2xl",
	xl: "max-w-4xl"
}, Tb = ({ open: e, onClose: t, title: n, description: r, children: i, footer: a, onConfirm: o, confirmLabel: s = "확인", cancelLabel: c = "취소", confirmLoading: l, confirmVariant: u = "default", closeOnOverlayClick: d = !0, size: f = "md", className: p }) => {
	let m = o && !a;
	return /* @__PURE__ */ x(gb, {
		open: e,
		onOpenChange: (e) => !e && d && t(),
		children: /* @__PURE__ */ S(yb, {
			className: q(wb[f], p),
			children: [
				(n || r) && /* @__PURE__ */ S(bb, { children: [n && /* @__PURE__ */ x(Sb, { children: n }), r && /* @__PURE__ */ x(Cb, { children: r })] }),
				i,
				m && o && /* @__PURE__ */ S(xb, { children: [/* @__PURE__ */ x(Dy, {
					variant: "outline",
					onClick: t,
					children: c
				}), /* @__PURE__ */ x(Dy, {
					variant: u,
					loading: l,
					onClick: o,
					children: s
				})] }),
				a && /* @__PURE__ */ x(xb, { children: a })
			]
		})
	});
};
//#endregion
//#region node_modules/@use-gesture/core/dist/maths-0ab39ae9.esm.js
function Eb(e, t, n) {
	return Math.max(t, Math.min(e, n));
}
var Db = {
	toVector(e, t) {
		return e === void 0 && (e = t), Array.isArray(e) ? e : [e, e];
	},
	add(e, t) {
		return [e[0] + t[0], e[1] + t[1]];
	},
	sub(e, t) {
		return [e[0] - t[0], e[1] - t[1]];
	},
	addTo(e, t) {
		e[0] += t[0], e[1] += t[1];
	},
	subTo(e, t) {
		e[0] -= t[0], e[1] -= t[1];
	}
};
function Ob(e, t, n) {
	return t === 0 || Math.abs(t) === Infinity ? e ** (n * 5) : e * t * n / (t + n * e);
}
function kb(e, t, n, r = .15) {
	return r === 0 ? Eb(e, t, n) : e < t ? -Ob(t - e, n - t, r) + t : e > n ? +Ob(e - n, n - t, r) + n : e;
}
function Ab(e, [t, n], [r, i]) {
	let [[a, o], [s, c]] = e;
	return [kb(t, a, o, r), kb(n, s, c, i)];
}
//#endregion
//#region node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js
function jb(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Mb(e) {
	var t = jb(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function Nb(e, t, n) {
	return t = Mb(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Pb(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Fb(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Pb(Object(n), !0).forEach(function(t) {
			Nb(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pb(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Ib = {
	pointer: {
		start: "down",
		change: "move",
		end: "up"
	},
	mouse: {
		start: "down",
		change: "move",
		end: "up"
	},
	touch: {
		start: "start",
		change: "move",
		end: "end"
	},
	gesture: {
		start: "start",
		change: "change",
		end: "end"
	}
};
function Lb(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
var Rb = ["enter", "leave"];
function zb(e = !1, t) {
	return e && !Rb.includes(t);
}
function Bb(e, t = "", n = !1) {
	let r = Ib[e], i = r && r[t] || t;
	return "on" + Lb(e) + Lb(i) + (zb(n, i) ? "Capture" : "");
}
var Vb = ["gotpointercapture", "lostpointercapture"];
function Hb(e) {
	let t = e.substring(2).toLowerCase(), n = !!~t.indexOf("passive");
	n && (t = t.replace("passive", ""));
	let r = Vb.includes(t) ? "capturecapture" : "capture", i = !!~t.indexOf(r);
	return i && (t = t.replace("capture", "")), {
		device: t,
		capture: i,
		passive: n
	};
}
function Ub(e, t = "") {
	let n = Ib[e];
	return e + (n && n[t] || t);
}
function Wb(e) {
	return "touches" in e;
}
function Gb(e) {
	return Wb(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
}
function Kb(e) {
	return Array.from(e.touches).filter((t) => {
		var n, r;
		return t.target === e.currentTarget || ((n = e.currentTarget) == null || (r = n.contains) == null ? void 0 : r.call(n, t.target));
	});
}
function qb(e) {
	return e.type === "touchend" || e.type === "touchcancel" ? e.changedTouches : e.targetTouches;
}
function Jb(e) {
	return Wb(e) ? qb(e)[0] : e;
}
function Yb(e) {
	return Kb(e).map((e) => e.identifier);
}
function Xb(e) {
	let t = Jb(e);
	return Wb(e) ? t.identifier : t.pointerId;
}
function Zb(e) {
	let t = Jb(e);
	return [t.clientX, t.clientY];
}
function Qb(e) {
	let t = {};
	if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
		let { shiftKey: n, altKey: r, metaKey: i, ctrlKey: a } = e;
		Object.assign(t, {
			shiftKey: n,
			altKey: r,
			metaKey: i,
			ctrlKey: a
		});
	}
	return t;
}
function $b(e, ...t) {
	return typeof e == "function" ? e(...t) : e;
}
function ex() {}
function tx(...e) {
	return e.length === 0 ? ex : e.length === 1 ? e[0] : function() {
		let t;
		for (let n of e) t = n.apply(this, arguments) || t;
		return t;
	};
}
function nx(e, t) {
	return Object.assign({}, t, e || {});
}
var rx = 32, ix = class {
	constructor(e, t, n) {
		this.ctrl = e, this.args = t, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
	}
	get state() {
		return this.ctrl.state[this.key];
	}
	set state(e) {
		this.ctrl.state[this.key] = e;
	}
	get shared() {
		return this.ctrl.state.shared;
	}
	get eventStore() {
		return this.ctrl.gestureEventStores[this.key];
	}
	get timeoutStore() {
		return this.ctrl.gestureTimeoutStores[this.key];
	}
	get config() {
		return this.ctrl.config[this.key];
	}
	get sharedConfig() {
		return this.ctrl.config.shared;
	}
	get handler() {
		return this.ctrl.handlers[this.key];
	}
	reset() {
		let { state: e, shared: t, ingKey: n, args: r } = this;
		t[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]], e.args = r, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0;
	}
	start(e) {
		let t = this.state, n = this.config;
		t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? $b(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp);
	}
	computeValues(e) {
		let t = this.state;
		t._values = e, t.values = this.config.transform(e);
	}
	computeInitial() {
		let e = this.state;
		e._initial = e._values, e.initial = e.values;
	}
	compute(e) {
		let { state: t, config: n, shared: r } = this;
		t.args = this.args;
		let i = 0;
		if (e && (t.event = e, n.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, r.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, r.locked = !!document.pointerLockElement, Object.assign(r, Qb(e)), r.down = r.pressed = r.buttons % 2 == 1 || r.touches > 0, i = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
			let e = t._delta.map(Math.abs);
			Db.addTo(t._distance, e);
		}
		this.axisIntent && this.axisIntent(e);
		let [a, o] = t._movement, [s, c] = n.threshold, { _step: l, values: u } = t;
		if (n.hasCustomTransform ? (l[0] === !1 && (l[0] = Math.abs(a) >= s && u[0]), l[1] === !1 && (l[1] = Math.abs(o) >= c && u[1])) : (l[0] === !1 && (l[0] = Math.abs(a) >= s && Math.sign(a) * s), l[1] === !1 && (l[1] = Math.abs(o) >= c && Math.sign(o) * c)), t.intentional = l[0] !== !1 || l[1] !== !1, !t.intentional) return;
		let d = [0, 0];
		if (n.hasCustomTransform) {
			let [e, t] = u;
			d[0] = l[0] === !1 ? 0 : e - l[0], d[1] = l[1] === !1 ? 0 : t - l[1];
		} else d[0] = l[0] === !1 ? 0 : a - l[0], d[1] = l[1] === !1 ? 0 : o - l[1];
		this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
		let f = t.offset, p = t._active && !t._blocked || t.active;
		p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = $b(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
		let [m, h] = t.offset, [[g, _], [v, y]] = t._bounds;
		t.overflow = [m < g ? -1 : +(m > _), h < v ? -1 : +(h > y)], t._movementBound[0] = t.overflow[0] ? t._movementBound[0] === !1 ? t._movement[0] : t._movementBound[0] : !1, t._movementBound[1] = t.overflow[1] ? t._movementBound[1] === !1 ? t._movement[1] : t._movementBound[1] : !1;
		let b = t._active && n.rubberband || [0, 0];
		if (t.offset = Ab(t._bounds, t.offset, b), t.delta = Db.sub(t.offset, f), this.computeMovement(), p && (!t.last || i > rx)) {
			t.delta = Db.sub(t.offset, f);
			let e = t.delta.map(Math.abs);
			Db.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && i > 0 && (t.velocity = [e[0] / i, e[1] / i], t.timeDelta = i);
		}
	}
	emit() {
		let e = this.state, t = this.shared, n = this.config;
		if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
		let r = this.handler(Fb(Fb(Fb({}, t), e), {}, { [this.aliasKey]: e.values }));
		r !== void 0 && (e.memo = r);
	}
	clean() {
		this.eventStore.clean(), this.timeoutStore.clean();
	}
};
function ax([e, t], n) {
	let r = Math.abs(e), i = Math.abs(t);
	if (r > i && r > n) return "x";
	if (i > r && i > n) return "y";
}
var ox = class extends ix {
	constructor(...e) {
		super(...e), Nb(this, "aliasKey", "xy");
	}
	reset() {
		super.reset(), this.state.axis = void 0;
	}
	init() {
		this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
	}
	computeOffset() {
		this.state.offset = Db.add(this.state.lastOffset, this.state.movement);
	}
	computeMovement() {
		this.state.movement = Db.sub(this.state.offset, this.state.lastOffset);
	}
	axisIntent(e) {
		let t = this.state, n = this.config;
		if (!t.axis && e) {
			let r = typeof n.axisThreshold == "object" ? n.axisThreshold[Gb(e)] : n.axisThreshold;
			t.axis = ax(t._movement, r);
		}
		t._blocked = (n.lockDirection || !!n.axis) && !t.axis || !!n.axis && n.axis !== t.axis;
	}
	restrictToAxis(e) {
		if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
			case "x":
				e[1] = 0;
				break;
			case "y":
				e[0] = 0;
				break;
		}
	}
}, sx = (e) => e, cx = .15, lx = {
	enabled(e = !0) {
		return e;
	},
	eventOptions(e, t, n) {
		return Fb(Fb({}, n.shared.eventOptions), e);
	},
	preventDefault(e = !1) {
		return e;
	},
	triggerAllEvents(e = !1) {
		return e;
	},
	rubberband(e = 0) {
		switch (e) {
			case !0: return [cx, cx];
			case !1: return [0, 0];
			default: return Db.toVector(e);
		}
	},
	from(e) {
		if (typeof e == "function") return e;
		if (e != null) return Db.toVector(e);
	},
	transform(e, t, n) {
		let r = e || n.shared.transform;
		if (this.hasCustomTransform = !!r, process.env.NODE_ENV === "development") {
			let e = r || sx;
			return (t) => {
				let n = e(t);
				return (!isFinite(n[0]) || !isFinite(n[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${n[0]},1]`), n;
			};
		}
		return r || sx;
	},
	threshold(e) {
		return Db.toVector(e, 0);
	}
};
process.env.NODE_ENV === "development" && Object.assign(lx, {
	domTarget(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
		return NaN;
	},
	lockDirection(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `lockDirection` option has been merged with `axis`. Use it as in `{ axis: 'lock' }`");
		return NaN;
	},
	initial(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `initial` option has been renamed to `from`.");
		return NaN;
	}
});
var ux = 0, dx = Fb(Fb({}, lx), {}, {
	axis(e, t, { axis: n }) {
		if (this.lockDirection = n === "lock", !this.lockDirection) return n;
	},
	axisThreshold(e = ux) {
		return e;
	},
	bounds(e = {}) {
		if (typeof e == "function") return (t) => dx.bounds(e(t));
		if ("current" in e) return () => e.current;
		if (typeof HTMLElement == "function" && e instanceof HTMLElement) return e;
		let { left: t = -Infinity, right: n = Infinity, top: r = -Infinity, bottom: i = Infinity } = e;
		return [[t, n], [r, i]];
	}
}), fx = {
	ArrowRight: (e, t = 1) => [e * t, 0],
	ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
	ArrowUp: (e, t = 1) => [0, -1 * e * t],
	ArrowDown: (e, t = 1) => [0, e * t]
}, px = class extends ox {
	constructor(...e) {
		super(...e), Nb(this, "ingKey", "dragging");
	}
	reset() {
		super.reset();
		let e = this.state;
		e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this);
	}
	setup() {
		let e = this.state;
		if (e._bounds instanceof HTMLElement) {
			let t = e._bounds.getBoundingClientRect(), n = e.currentTarget.getBoundingClientRect(), r = {
				left: t.left - n.left + e.offset[0],
				right: t.right - n.right + e.offset[0],
				top: t.top - n.top + e.offset[1],
				bottom: t.bottom - n.bottom + e.offset[1]
			};
			e._bounds = dx.bounds(r);
		}
	}
	cancel() {
		let e = this.state;
		e.canceled || (e.canceled = !0, e._active = !1, setTimeout(() => {
			this.compute(), this.emit();
		}, 0));
	}
	setActive() {
		this.state._active = this.state._pointerActive || this.state._keyboardActive;
	}
	clean() {
		this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
	}
	pointerDown(e) {
		let t = this.config, n = this.state;
		if (e.buttons != null && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : t.pointerButtons !== -1 && t.pointerButtons !== e.buttons)) return;
		let r = this.ctrl.setEventIds(e);
		t.pointerCapture && e.target.setPointerCapture(e.pointerId), !(r && r.size > 1 && n._pointerActive) && (this.start(e), this.setupPointer(e), n._pointerId = Xb(e), n._pointerActive = !0, this.computeValues(Zb(e)), this.computeInitial(), t.preventScrollAxis && Gb(e) !== "mouse" ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e));
	}
	startPointerDrag(e) {
		let t = this.state;
		t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit();
	}
	pointerMove(e) {
		let t = this.state, n = this.config;
		if (!t._pointerActive) return;
		let r = Xb(e);
		if (t._pointerId !== void 0 && r !== t._pointerId) return;
		let i = Zb(e);
		if (document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Db.sub(i, t._values), this.computeValues(i)), Db.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional) {
			this.timeoutStore.remove("dragDelay"), t.active = !1, this.startPointerDrag(e);
			return;
		}
		if (n.preventScrollAxis && !t._preventScroll) if (t.axis) if (t.axis === n.preventScrollAxis || n.preventScrollAxis === "xy") {
			t._active = !1, this.clean();
			return;
		} else {
			this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(e);
			return;
		}
		else return;
		this.emit();
	}
	pointerUp(e) {
		this.ctrl.setEventIds(e);
		try {
			this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId);
		} catch {
			process.env.NODE_ENV === "development" && console.warn("[@use-gesture]: If you see this message, it's likely that you're using an outdated version of `@react-three/fiber`. \n\nPlease upgrade to the latest version.");
		}
		let t = this.state, n = this.config;
		if (!t._active || !t._pointerActive) return;
		let r = Xb(e);
		if (t._pointerId !== void 0 && r !== t._pointerId) return;
		this.state._pointerActive = !1, this.setActive(), this.compute(e);
		let [i, a] = t._distance;
		if (t.tap = i <= n.tapsThreshold && a <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
		else {
			let [e, r] = t._delta, [i, a] = t._movement, [o, s] = n.swipe.velocity, [c, l] = n.swipe.distance, u = n.swipe.duration;
			if (t.elapsedTime < u) {
				let n = Math.abs(e / t.timeDelta), u = Math.abs(r / t.timeDelta);
				n > o && Math.abs(i) > c && (t.swipe[0] = Math.sign(e)), u > s && Math.abs(a) > l && (t.swipe[1] = Math.sign(r));
			}
		}
		this.emit();
	}
	pointerClick(e) {
		!this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation());
	}
	setupPointer(e) {
		let t = this.config, n = t.device;
		if (process.env.NODE_ENV === "development") try {
			if (n === "pointer" && t.preventScrollDelay === void 0) {
				let t = "uv" in e ? e.sourceEvent.currentTarget : e.currentTarget;
				window.getComputedStyle(t).touchAction === "auto" && console.warn("[@use-gesture]: The drag target has its `touch-action` style property set to `auto`. It is recommended to add `touch-action: 'none'` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.", t);
			}
		} catch {}
		t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)));
	}
	pointerClean() {
		this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
	}
	preventScroll(e) {
		this.state._preventScroll && e.cancelable && e.preventDefault();
	}
	setupScrollPrevention(e) {
		this.state._preventScroll = !1, mx(e);
		let t = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), { passive: !1 });
		this.eventStore.add(this.sharedConfig.window, "touch", "end", t), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", t), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e);
	}
	setupDelayTrigger(e) {
		this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
			this.state._step = [0, 0], this.startPointerDrag(e);
		}, this.config.delay);
	}
	keyDown(e) {
		let t = fx[e.key];
		if (t) {
			let n = this.state, r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
			this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, Db.addTo(n._movement, n._delta), this.compute(e), this.emit();
		}
	}
	keyUp(e) {
		e.key in fx && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit());
	}
	bind(e) {
		let t = this.config.device;
		e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
			capture: !0,
			passive: !1
		});
	}
};
function mx(e) {
	"persist" in e && typeof e.persist == "function" && e.persist();
}
var hx = typeof window < "u" && window.document && window.document.createElement;
function gx() {
	return hx && "ontouchstart" in window;
}
function _x() {
	return gx() || hx && window.navigator.maxTouchPoints > 1;
}
function vx() {
	return hx && "onpointerdown" in window;
}
function yx() {
	return hx && "exitPointerLock" in window.document;
}
function bx() {
	try {
		return "constructor" in GestureEvent;
	} catch {
		return !1;
	}
}
var xx = {
	isBrowser: hx,
	gesture: bx(),
	touch: gx(),
	touchscreen: _x(),
	pointer: vx(),
	pointerLock: yx()
}, Sx = 250, Cx = 180, wx = .5, Tx = 50, Ex = 250, Dx = 10, Ox = {
	mouse: 0,
	touch: 0,
	pen: 8
}, kx = Fb(Fb({}, dx), {}, {
	device(e, t, { pointer: { touch: n = !1, lock: r = !1, mouse: i = !1 } = {} }) {
		return this.pointerLock = r && xx.pointerLock, xx.touch && n ? "touch" : this.pointerLock ? "mouse" : xx.pointer && !i ? "pointer" : xx.touch ? "touch" : "mouse";
	},
	preventScrollAxis(e, t, { preventScroll: n }) {
		if (this.preventScrollDelay = typeof n == "number" ? n : n || n === void 0 && e ? Sx : void 0, !(!xx.touchscreen || n === !1)) return e || (n === void 0 ? void 0 : "y");
	},
	pointerCapture(e, t, { pointer: { capture: n = !0, buttons: r = 1, keys: i = !0 } = {} }) {
		return this.pointerButtons = r, this.keys = i, !this.pointerLock && this.device === "pointer" && n;
	},
	threshold(e, t, { filterTaps: n = !1, tapsThreshold: r = 3, axis: i = void 0 }) {
		let a = Db.toVector(e, n ? r : +!!i);
		return this.filterTaps = n, this.tapsThreshold = r, a;
	},
	swipe({ velocity: e = wx, distance: t = Tx, duration: n = Ex } = {}) {
		return {
			velocity: this.transform(Db.toVector(e)),
			distance: this.transform(Db.toVector(t)),
			duration: n
		};
	},
	delay(e = 0) {
		switch (e) {
			case !0: return Cx;
			case !1: return 0;
			default: return e;
		}
	},
	axisThreshold(e) {
		return e ? Fb(Fb({}, Ox), e) : Ox;
	},
	keyboardDisplacement(e = Dx) {
		return e;
	}
});
process.env.NODE_ENV === "development" && Object.assign(kx, {
	useTouch(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `useTouch` option has been renamed to `pointer.touch`. Use it as in `{ pointer: { touch: true } }`.");
		return NaN;
	},
	experimental_preventWindowScrollY(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `experimental_preventWindowScrollY` option has been renamed to `preventScroll`.");
		return NaN;
	},
	swipeVelocity(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `swipeVelocity` option has been renamed to `swipe.velocity`. Use it as in `{ swipe: { velocity: 0.5 } }`.");
		return NaN;
	},
	swipeDistance(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `swipeDistance` option has been renamed to `swipe.distance`. Use it as in `{ swipe: { distance: 50 } }`.");
		return NaN;
	},
	swipeDuration(e) {
		if (e !== void 0) throw Error("[@use-gesture]: `swipeDuration` option has been renamed to `swipe.duration`. Use it as in `{ swipe: { duration: 250 } }`.");
		return NaN;
	}
}), Fb(Fb({}, lx), {}, {
	device(e, t, { shared: n, pointer: { touch: r = !1 } = {} }) {
		if (n.target && !xx.touch && xx.gesture) return "gesture";
		if (xx.touch && r) return "touch";
		if (xx.touchscreen) {
			if (xx.pointer) return "pointer";
			if (xx.touch) return "touch";
		}
	},
	bounds(e, t, { scaleBounds: n = {}, angleBounds: r = {} }) {
		let i = (e) => {
			let t = nx($b(n, e), {
				min: -Infinity,
				max: Infinity
			});
			return [t.min, t.max];
		}, a = (e) => {
			let t = nx($b(r, e), {
				min: -Infinity,
				max: Infinity
			});
			return [t.min, t.max];
		};
		return typeof n != "function" && typeof r != "function" ? [i(), a()] : (e) => [i(e), a(e)];
	},
	threshold(e, t, n) {
		return this.lockDirection = n.axis === "lock", Db.toVector(e, this.lockDirection ? [.1, 3] : 0);
	},
	modifierKey(e) {
		return e === void 0 ? "ctrlKey" : e;
	},
	pinchOnWheel(e = !0) {
		return e;
	}
}), Fb(Fb({}, dx), {}, { mouseOnly: (e = !0) => e }), Fb(Fb({}, dx), {}, { mouseOnly: (e = !0) => e });
var Ax = /* @__PURE__ */ new Map(), jx = /* @__PURE__ */ new Map();
function Mx(e) {
	Ax.set(e.key, e.engine), jx.set(e.key, e.resolver);
}
var Nx = {
	key: "drag",
	engine: px,
	resolver: kx
};
//#endregion
//#region node_modules/@use-gesture/core/dist/use-gesture-core.esm.js
function Px(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Fx(e, t) {
	if (e == null) return {};
	var n = Px(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
var Ix = {
	target(e) {
		if (e) return () => "current" in e ? e.current : e;
	},
	enabled(e = !0) {
		return e;
	},
	window(e = xx.isBrowser ? window : void 0) {
		return e;
	},
	eventOptions({ passive: e = !0, capture: t = !1 } = {}) {
		return {
			passive: e,
			capture: t
		};
	},
	transform(e) {
		return e;
	}
}, Lx = [
	"target",
	"eventOptions",
	"window",
	"enabled",
	"transform"
];
function Rx(e = {}, t) {
	let n = {};
	for (let [r, i] of Object.entries(t)) switch (typeof i) {
		case "function":
			if (process.env.NODE_ENV === "development") {
				let t = i.call(n, e[r], r, e);
				Number.isNaN(t) || (n[r] = t);
			} else n[r] = i.call(n, e[r], r, e);
			break;
		case "object":
			n[r] = Rx(e[r], i);
			break;
		case "boolean":
			i && (n[r] = e[r]);
			break;
	}
	return n;
}
function zx(e, t, n = {}) {
	let r = e, { target: i, eventOptions: a, window: o, enabled: s, transform: c } = r, l = Fx(r, Lx);
	if (n.shared = Rx({
		target: i,
		eventOptions: a,
		window: o,
		enabled: s,
		transform: c
	}, Ix), t) {
		let e = jx.get(t);
		n[t] = Rx(Fb({ shared: n.shared }, l), e);
	} else for (let e in l) {
		let t = jx.get(e);
		if (t) n[e] = Rx(Fb({ shared: n.shared }, l[e]), t);
		else if (process.env.NODE_ENV === "development" && ![
			"drag",
			"pinch",
			"scroll",
			"wheel",
			"move",
			"hover"
		].includes(e)) {
			if (e === "domTarget") throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
			console.warn(`[@use-gesture]: Unknown config key \`${e}\` was used. Please read the documentation for further information.`);
		}
	}
	return n;
}
var Bx = class {
	constructor(e, t) {
		Nb(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = e, this._gestureKey = t;
	}
	add(e, t, n, r, i) {
		let a = this._listeners, o = Ub(t, n), s = Fb(Fb({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), i);
		e.addEventListener(o, r, s);
		let c = () => {
			e.removeEventListener(o, r, s), a.delete(c);
		};
		return a.add(c), c;
	}
	clean() {
		this._listeners.forEach((e) => e()), this._listeners.clear();
	}
}, Vx = class {
	constructor() {
		Nb(this, "_timeouts", /* @__PURE__ */ new Map());
	}
	add(e, t, n = 140, ...r) {
		this.remove(e), this._timeouts.set(e, window.setTimeout(t, n, ...r));
	}
	remove(e) {
		let t = this._timeouts.get(e);
		t && window.clearTimeout(t);
	}
	clean() {
		this._timeouts.forEach((e) => void window.clearTimeout(e)), this._timeouts.clear();
	}
}, Hx = class {
	constructor(e) {
		Nb(this, "gestures", /* @__PURE__ */ new Set()), Nb(this, "_targetEventStore", new Bx(this)), Nb(this, "gestureEventStores", {}), Nb(this, "gestureTimeoutStores", {}), Nb(this, "handlers", {}), Nb(this, "config", {}), Nb(this, "pointerIds", /* @__PURE__ */ new Set()), Nb(this, "touchIds", /* @__PURE__ */ new Set()), Nb(this, "state", { shared: {
			shiftKey: !1,
			metaKey: !1,
			ctrlKey: !1,
			altKey: !1
		} }), Wx(this, e);
	}
	setEventIds(e) {
		if (Wb(e)) return this.touchIds = new Set(Yb(e)), this.touchIds;
		if ("pointerId" in e) return e.type === "pointerup" || e.type === "pointercancel" ? this.pointerIds.delete(e.pointerId) : e.type === "pointerdown" && this.pointerIds.add(e.pointerId), this.pointerIds;
	}
	applyHandlers(e, t) {
		this.handlers = e, this.nativeHandlers = t;
	}
	applyConfig(e, t) {
		this.config = zx(e, t, this.config);
	}
	clean() {
		this._targetEventStore.clean();
		for (let e of this.gestures) this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean();
	}
	effect() {
		return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
	}
	bind(...e) {
		let t = this.config.shared, n = {}, r;
		if (!(t.target && (r = t.target(), !r))) {
			if (t.enabled) {
				for (let t of this.gestures) {
					let i = this.config[t], a = Gx(n, i.eventOptions, !!r);
					i.enabled && new (Ax.get(t))(this, e, t).bind(a);
				}
				let i = Gx(n, t.eventOptions, !!r);
				for (let t in this.nativeHandlers) i(t, "", (n) => this.nativeHandlers[t](Fb(Fb({}, this.state.shared), {}, {
					event: n,
					args: e
				})), void 0, !0);
			}
			for (let e in n) n[e] = tx(...n[e]);
			if (!r) return n;
			for (let e in n) {
				let { device: t, capture: i, passive: a } = Hb(e);
				this._targetEventStore.add(r, t, "", n[e], {
					capture: i,
					passive: a
				});
			}
		}
	}
};
function Ux(e, t) {
	e.gestures.add(t), e.gestureEventStores[t] = new Bx(e, t), e.gestureTimeoutStores[t] = new Vx();
}
function Wx(e, t) {
	t.drag && Ux(e, "drag"), t.wheel && Ux(e, "wheel"), t.scroll && Ux(e, "scroll"), t.move && Ux(e, "move"), t.pinch && Ux(e, "pinch"), t.hover && Ux(e, "hover");
}
var Gx = (e, t, n) => (r, i, a, o = {}, s = !1) => {
	let c = o.capture ?? t.capture, l = o.passive ?? t.passive, u = s ? r : Bb(r, i, c);
	n && l && (u += "Passive"), e[u] = e[u] || [], e[u].push(a);
};
//#endregion
//#region node_modules/@use-gesture/react/dist/use-gesture-react.esm.js
function Kx(e, n = {}, r, i) {
	let a = t.useMemo(() => new Hx(e), []);
	if (a.applyHandlers(e, i), a.applyConfig(n, r), t.useEffect(a.effect.bind(a)), t.useEffect(() => a.clean.bind(a), []), n.target === void 0) return a.bind.bind(a);
}
function qx(e, t) {
	return Mx(Nx), Kx({ drag: e }, t || {}, "drag");
}
//#endregion
//#region src/components/common/AppModal.tsx
var Jx = {
	xs: "!max-w-[360px]",
	sm: "!max-w-[480px]",
	md: "!max-w-[640px]",
	lg: "!max-w-[800px]",
	xl: "!max-w-[1024px]",
	"2xl": "!max-w-[1280px]",
	full: "!max-w-[calc(100vw-2rem)] w-full"
}, Yx = {
	view: {
		label: "조회",
		className: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
	},
	create: {
		label: "등록",
		className: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
	},
	edit: {
		label: "수정",
		className: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
	}
}, Xx = ({ open: e, onClose: t, title: n, mode: r, children: i, footer: a, onConfirm: o, confirmLabel: s = "저장", cancelLabel: c = "취소", confirmLoading: l, confirmVariant: u = "default", loading: d = !1, closeOnOverlayClick: p = !1, backdropBlur: m = !0, size: g = "md", maxHeight: _ = "80vh", className: v }) => {
	let y = (o || !a) !== !1 && o !== void 0, C = g === "full", w = h(null), T = h({
		x: 0,
		y: 0
	}), E = h({
		ptrX: 0,
		ptrY: 0,
		posX: 0,
		posY: 0
	});
	f(() => {
		e && (T.current = {
			x: 0,
			y: 0
		}, w.current && (w.current.style.translate = ""));
	}, [e]);
	let D = qx(({ xy: [e, t], first: n, event: r }) => {
		if (r.target.closest("button")) return;
		if (n) {
			E.current = {
				ptrX: e,
				ptrY: t,
				posX: T.current.x,
				posY: T.current.y
			};
			return;
		}
		let i = E.current.posX + (e - E.current.ptrX), a = E.current.posY + (t - E.current.ptrY);
		T.current = {
			x: i,
			y: a
		}, w.current && (w.current.style.translate = `calc(-50% + ${i}px) calc(-50% + ${a}px)`);
	}, {
		filterTaps: !0,
		pointer: { capture: !1 }
	});
	return /* @__PURE__ */ x(gb, {
		open: e,
		onOpenChange: (e) => !e && t(),
		children: /* @__PURE__ */ S(yb, {
			ref: w,
			className: q("flex flex-col gap-0 p-0 overflow-hidden rounded-none transition-none", Jx[g], C ? "h-[calc(100vh-2rem)]" : "", v),
			overlayClassName: q(!m && "!backdrop-blur-none !bg-black/20"),
			style: C ? void 0 : { maxHeight: _ },
			onInteractOutside: (e) => {
				p || e.preventDefault();
			},
			children: [
				/* @__PURE__ */ S("div", {
					className: q("flex items-center gap-2 border-b px-4 py-2.5 shrink-0 select-none", !C && "cursor-grab active:cursor-grabbing"),
					style: C ? void 0 : { touchAction: "none" },
					...C ? {} : D(),
					children: [r && /* @__PURE__ */ x("span", {
						className: q("inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-semibold leading-none", Yx[r].className),
						children: Yx[r].label
					}), /* @__PURE__ */ x(Sb, {
						className: "flex-1 text-sm font-semibold truncate",
						children: n
					})]
				}),
				/* @__PURE__ */ S("div", {
					className: "relative flex-1 overflow-y-auto p-4 min-h-0",
					children: [d && /* @__PURE__ */ x("div", {
						className: "absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-[1px]",
						children: /* @__PURE__ */ x(Ty, { size: "md" })
					}), i]
				}),
				(y || a) && /* @__PURE__ */ x("div", {
					className: "flex items-center justify-end gap-2 border-t px-4 py-2.5 shrink-0",
					children: a ?? /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(Dy, {
						variant: "outline",
						size: "sm",
						onClick: t,
						children: c
					}), /* @__PURE__ */ x(Dy, {
						variant: u,
						size: "sm",
						loading: l,
						onClick: o,
						children: s
					})] })
				})
			]
		})
	});
};
//#endregion
//#region node_modules/@tanstack/table-core/build/lib/index.mjs
function Zx(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Qx(e, t) {
	return (n) => {
		t.setState((t) => ({
			...t,
			[e]: Zx(n, t[e])
		}));
	};
}
function $x(e) {
	return e instanceof Function;
}
function eS(e) {
	return Array.isArray(e) && e.every((e) => typeof e == "number");
}
function tS(e, t) {
	let n = [], r = (e) => {
		e.forEach((e) => {
			n.push(e);
			let i = t(e);
			i != null && i.length && r(i);
		});
	};
	return r(e), n;
}
function J(e, t, n) {
	let r = [], i;
	return (a) => {
		let o;
		n.key && n.debug && (o = Date.now());
		let s = e(a);
		if (!(s.length !== r.length || s.some((e, t) => r[t] !== e))) return i;
		r = s;
		let c;
		if (n.key && n.debug && (c = Date.now()), i = t(...s), n == null || n.onChange == null || n.onChange(i), n.key && n.debug && n != null && n.debug()) {
			let e = Math.round((Date.now() - o) * 100) / 100, t = Math.round((Date.now() - c) * 100) / 100, r = t / 16, i = (e, t) => {
				for (e = String(e); e.length < t;) e = " " + e;
				return e;
			};
			console.info(`%c⏱ ${i(t, 5)} /${i(e, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`, n?.key);
		}
		return i;
	};
}
function Y(e, t, n, r) {
	return {
		debug: () => e?.debugAll ?? e[t],
		key: process.env.NODE_ENV === "development" && n,
		onChange: r
	};
}
function nS(e, t, n, r) {
	let i = {
		id: `${t.id}_${n.id}`,
		row: t,
		column: n,
		getValue: () => t.getValue(r),
		renderValue: () => i.getValue() ?? e.options.renderFallbackValue,
		getContext: J(() => [
			e,
			n,
			t,
			i
		], (e, t, n, r) => ({
			table: e,
			column: t,
			row: n,
			cell: r,
			getValue: r.getValue,
			renderValue: r.renderValue
		}), Y(e.options, "debugCells", "cell.getContext"))
	};
	return e._features.forEach((r) => {
		r.createCell == null || r.createCell(i, n, t, e);
	}, {}), i;
}
function rS(e, t, n, r) {
	let i = {
		...e._getDefaultColumnDef(),
		...t
	}, a = i.accessorKey, o = i.id ?? (a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) ?? (typeof i.header == "string" ? i.header : void 0), s;
	if (i.accessorFn ? s = i.accessorFn : a && (s = a.includes(".") ? (e) => {
		let t = e;
		for (let e of a.split(".")) t = t?.[e], process.env.NODE_ENV !== "production" && t === void 0 && console.warn(`"${e}" in deeply nested key "${a}" returned undefined.`);
		return t;
	} : (e) => e[i.accessorKey]), !o) throw process.env.NODE_ENV === "production" ? Error() : Error(i.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header");
	let c = {
		id: `${String(o)}`,
		accessorFn: s,
		parent: r,
		depth: n,
		columnDef: i,
		columns: [],
		getFlatColumns: J(() => [!0], () => [c, ...c.columns?.flatMap((e) => e.getFlatColumns())], Y(e.options, "debugColumns", "column.getFlatColumns")),
		getLeafColumns: J(() => [e._getOrderColumnsFn()], (e) => {
			var t;
			return (t = c.columns) != null && t.length ? e(c.columns.flatMap((e) => e.getLeafColumns())) : [c];
		}, Y(e.options, "debugColumns", "column.getLeafColumns"))
	};
	for (let t of e._features) t.createColumn == null || t.createColumn(c, e);
	return c;
}
var iS = "debugHeaders";
function aS(e, t, n) {
	let r = {
		id: n.id ?? t.id,
		column: t,
		index: n.index,
		isPlaceholder: !!n.isPlaceholder,
		placeholderId: n.placeholderId,
		depth: n.depth,
		subHeaders: [],
		colSpan: 0,
		rowSpan: 0,
		headerGroup: null,
		getLeafHeaders: () => {
			let e = [], t = (n) => {
				n.subHeaders && n.subHeaders.length && n.subHeaders.map(t), e.push(n);
			};
			return t(r), e;
		},
		getContext: () => ({
			table: e,
			header: r,
			column: t
		})
	};
	return e._features.forEach((t) => {
		t.createHeader == null || t.createHeader(r, e);
	}), r;
}
var oS = { createTable: (e) => {
	e.getHeaderGroups = J(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left,
		e.getState().columnPinning.right
	], (t, n, r, i) => {
		let a = r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], o = i?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], s = n.filter((e) => !(r != null && r.includes(e.id)) && !(i != null && i.includes(e.id)));
		return sS(t, [
			...a,
			...s,
			...o
		], e);
	}, Y(e.options, iS, "getHeaderGroups")), e.getCenterHeaderGroups = J(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left,
		e.getState().columnPinning.right
	], (t, n, r, i) => (n = n.filter((e) => !(r != null && r.includes(e.id)) && !(i != null && i.includes(e.id))), sS(t, n, e, "center")), Y(e.options, iS, "getCenterHeaderGroups")), e.getLeftHeaderGroups = J(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left
	], (t, n, r) => sS(t, r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], e, "left"), Y(e.options, iS, "getLeftHeaderGroups")), e.getRightHeaderGroups = J(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.right
	], (t, n, r) => sS(t, r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], e, "right"), Y(e.options, iS, "getRightHeaderGroups")), e.getFooterGroups = J(() => [e.getHeaderGroups()], (e) => [...e].reverse(), Y(e.options, iS, "getFooterGroups")), e.getLeftFooterGroups = J(() => [e.getLeftHeaderGroups()], (e) => [...e].reverse(), Y(e.options, iS, "getLeftFooterGroups")), e.getCenterFooterGroups = J(() => [e.getCenterHeaderGroups()], (e) => [...e].reverse(), Y(e.options, iS, "getCenterFooterGroups")), e.getRightFooterGroups = J(() => [e.getRightHeaderGroups()], (e) => [...e].reverse(), Y(e.options, iS, "getRightFooterGroups")), e.getFlatHeaders = J(() => [e.getHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Y(e.options, iS, "getFlatHeaders")), e.getLeftFlatHeaders = J(() => [e.getLeftHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Y(e.options, iS, "getLeftFlatHeaders")), e.getCenterFlatHeaders = J(() => [e.getCenterHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Y(e.options, iS, "getCenterFlatHeaders")), e.getRightFlatHeaders = J(() => [e.getRightHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Y(e.options, iS, "getRightFlatHeaders")), e.getCenterLeafHeaders = J(() => [e.getCenterFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), Y(e.options, iS, "getCenterLeafHeaders")), e.getLeftLeafHeaders = J(() => [e.getLeftFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), Y(e.options, iS, "getLeftLeafHeaders")), e.getRightLeafHeaders = J(() => [e.getRightFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), Y(e.options, iS, "getRightLeafHeaders")), e.getLeafHeaders = J(() => [
		e.getLeftHeaderGroups(),
		e.getCenterHeaderGroups(),
		e.getRightHeaderGroups()
	], (e, t, n) => [
		...e[0]?.headers ?? [],
		...t[0]?.headers ?? [],
		...n[0]?.headers ?? []
	].map((e) => e.getLeafHeaders()).flat(), Y(e.options, iS, "getLeafHeaders"));
} };
function sS(e, t, n, r) {
	let i = 0, a = function(e, t) {
		t === void 0 && (t = 1), i = Math.max(i, t), e.filter((e) => e.getIsVisible()).forEach((e) => {
			var n;
			(n = e.columns) != null && n.length && a(e.columns, t + 1);
		}, 0);
	};
	a(e);
	let o = [], s = (e, t) => {
		let i = {
			depth: t,
			id: [r, `${t}`].filter(Boolean).join("_"),
			headers: []
		}, a = [];
		e.forEach((e) => {
			let o = [...a].reverse()[0], s = e.column.depth === i.depth, c, l = !1;
			if (s && e.column.parent ? c = e.column.parent : (c = e.column, l = !0), o && o?.column === c) o.subHeaders.push(e);
			else {
				let i = aS(n, c, {
					id: [
						r,
						t,
						c.id,
						e?.id
					].filter(Boolean).join("_"),
					isPlaceholder: l,
					placeholderId: l ? `${a.filter((e) => e.column === c).length}` : void 0,
					depth: t,
					index: a.length
				});
				i.subHeaders.push(e), a.push(i);
			}
			i.headers.push(e), e.headerGroup = i;
		}), o.push(i), t > 0 && s(a, t - 1);
	};
	s(t.map((e, t) => aS(n, e, {
		depth: i,
		index: t
	})), i - 1), o.reverse();
	let c = (e) => e.filter((e) => e.column.getIsVisible()).map((e) => {
		let t = 0, n = 0, r = [0];
		e.subHeaders && e.subHeaders.length ? (r = [], c(e.subHeaders).forEach((e) => {
			let { colSpan: n, rowSpan: i } = e;
			t += n, r.push(i);
		})) : t = 1;
		let i = Math.min(...r);
		return n += i, e.colSpan = t, e.rowSpan = n, {
			colSpan: t,
			rowSpan: n
		};
	});
	return c(o[0]?.headers ?? []), o;
}
var cS = (e, t, n, r, i, a, o) => {
	let s = {
		id: t,
		index: r,
		original: n,
		depth: i,
		parentId: o,
		_valuesCache: {},
		_uniqueValuesCache: {},
		getValue: (t) => {
			if (s._valuesCache.hasOwnProperty(t)) return s._valuesCache[t];
			let n = e.getColumn(t);
			if (n != null && n.accessorFn) return s._valuesCache[t] = n.accessorFn(s.original, r), s._valuesCache[t];
		},
		getUniqueValues: (t) => {
			if (s._uniqueValuesCache.hasOwnProperty(t)) return s._uniqueValuesCache[t];
			let n = e.getColumn(t);
			if (n != null && n.accessorFn) return n.columnDef.getUniqueValues ? (s._uniqueValuesCache[t] = n.columnDef.getUniqueValues(s.original, r), s._uniqueValuesCache[t]) : (s._uniqueValuesCache[t] = [s.getValue(t)], s._uniqueValuesCache[t]);
		},
		renderValue: (t) => s.getValue(t) ?? e.options.renderFallbackValue,
		subRows: a ?? [],
		getLeafRows: () => tS(s.subRows, (e) => e.subRows),
		getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
		getParentRows: () => {
			let e = [], t = s;
			for (;;) {
				let n = t.getParentRow();
				if (!n) break;
				e.push(n), t = n;
			}
			return e.reverse();
		},
		getAllCells: J(() => [e.getAllLeafColumns()], (t) => t.map((t) => nS(e, s, t, t.id)), Y(e.options, "debugRows", "getAllCells")),
		_getAllCellsByColumnId: J(() => [s.getAllCells()], (e) => e.reduce((e, t) => (e[t.column.id] = t, e), {}), Y(e.options, "debugRows", "getAllCellsByColumnId"))
	};
	for (let t = 0; t < e._features.length; t++) {
		let n = e._features[t];
		n == null || n.createRow == null || n.createRow(s, e);
	}
	return s;
}, lS = { createColumn: (e, t) => {
	e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
		if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
	};
} }, uS = (e, t, n) => {
	var r, i;
	let a = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
	return !!(!((i = e.getValue(t)) == null || (i = i.toString()) == null || (i = i.toLowerCase()) == null) && i.includes(a));
};
uS.autoRemove = (e) => bS(e);
var dS = (e, t, n) => {
	var r;
	return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
dS.autoRemove = (e) => bS(e);
var fS = (e, t, n) => {
	var r;
	return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === n?.toLowerCase();
};
fS.autoRemove = (e) => bS(e);
var pS = (e, t, n) => e.getValue(t)?.includes(n);
pS.autoRemove = (e) => bS(e);
var mS = (e, t, n) => !n.some((n) => {
	var r;
	return !((r = e.getValue(t)) != null && r.includes(n));
});
mS.autoRemove = (e) => bS(e) || !(e != null && e.length);
var hS = (e, t, n) => n.some((n) => e.getValue(t)?.includes(n));
hS.autoRemove = (e) => bS(e) || !(e != null && e.length);
var gS = (e, t, n) => e.getValue(t) === n;
gS.autoRemove = (e) => bS(e);
var _S = (e, t, n) => e.getValue(t) == n;
_S.autoRemove = (e) => bS(e);
var vS = (e, t, n) => {
	let [r, i] = n, a = e.getValue(t);
	return a >= r && a <= i;
};
vS.resolveFilterValue = (e) => {
	let [t, n] = e, r = typeof t == "number" ? t : parseFloat(t), i = typeof n == "number" ? n : parseFloat(n), a = t === null || Number.isNaN(r) ? -Infinity : r, o = n === null || Number.isNaN(i) ? Infinity : i;
	if (a > o) {
		let e = a;
		a = o, o = e;
	}
	return [a, o];
}, vS.autoRemove = (e) => bS(e) || bS(e[0]) && bS(e[1]);
var yS = {
	includesString: uS,
	includesStringSensitive: dS,
	equalsString: fS,
	arrIncludes: pS,
	arrIncludesAll: mS,
	arrIncludesSome: hS,
	equals: gS,
	weakEquals: _S,
	inNumberRange: vS
};
function bS(e) {
	return e == null || e === "";
}
var xS = {
	getDefaultColumnDef: () => ({ filterFn: "auto" }),
	getInitialState: (e) => ({
		columnFilters: [],
		...e
	}),
	getDefaultOptions: (e) => ({
		onColumnFiltersChange: Qx("columnFilters", e),
		filterFromLeafRows: !1,
		maxLeafRowFilterDepth: 100
	}),
	createColumn: (e, t) => {
		e.getAutoFilterFn = () => {
			let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
			return typeof n == "string" ? yS.includesString : typeof n == "number" ? yS.inNumberRange : typeof n == "boolean" || typeof n == "object" && n ? yS.equals : Array.isArray(n) ? yS.arrIncludes : yS.weakEquals;
		}, e.getFilterFn = () => $x(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : t.options.filterFns?.[e.columnDef.filterFn] ?? yS[e.columnDef.filterFn], e.getCanFilter = () => (e.columnDef.enableColumnFilter ?? !0) && (t.options.enableColumnFilters ?? !0) && (t.options.enableFilters ?? !0) && !!e.accessorFn, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
			var n;
			return (n = t.getState().columnFilters) == null || (n = n.find((t) => t.id === e.id)) == null ? void 0 : n.value;
		}, e.getFilterIndex = () => t.getState().columnFilters?.findIndex((t) => t.id === e.id) ?? -1, e.setFilterValue = (n) => {
			t.setColumnFilters((t) => {
				let r = e.getFilterFn(), i = t?.find((t) => t.id === e.id), a = Zx(n, i ? i.value : void 0);
				if (SS(r, a, e)) return t?.filter((t) => t.id !== e.id) ?? [];
				let o = {
					id: e.id,
					value: a
				};
				return i ? t?.map((t) => t.id === e.id ? o : t) ?? [] : t != null && t.length ? [...t, o] : [o];
			});
		};
	},
	createRow: (e, t) => {
		e.columnFilters = {}, e.columnFiltersMeta = {};
	},
	createTable: (e) => {
		e.setColumnFilters = (t) => {
			let n = e.getAllLeafColumns();
			e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange((e) => Zx(t, e)?.filter((e) => {
				let t = n.find((t) => t.id === e.id);
				return !(t && SS(t.getFilterFn(), e.value, t));
			}));
		}, e.resetColumnFilters = (t) => {
			e.setColumnFilters(t ? [] : e.initialState?.columnFilters ?? []);
		}, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
	}
};
function SS(e, t, n) {
	return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || t === void 0 || typeof t == "string" && !t;
}
var CS = {
	sum: (e, t, n) => n.reduce((t, n) => {
		let r = n.getValue(e);
		return t + (typeof r == "number" ? r : 0);
	}, 0),
	min: (e, t, n) => {
		let r;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r > n || r === void 0 && n >= n) && (r = n);
		}), r;
	},
	max: (e, t, n) => {
		let r;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r < n || r === void 0 && n >= n) && (r = n);
		}), r;
	},
	extent: (e, t, n) => {
		let r, i;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r === void 0 ? n >= n && (r = i = n) : (r > n && (r = n), i < n && (i = n)));
		}), [r, i];
	},
	mean: (e, t) => {
		let n = 0, r = 0;
		if (t.forEach((t) => {
			let i = t.getValue(e);
			i != null && (i = +i) >= i && (++n, r += i);
		}), n) return r / n;
	},
	median: (e, t) => {
		if (!t.length) return;
		let n = t.map((t) => t.getValue(e));
		if (!eS(n)) return;
		if (n.length === 1) return n[0];
		let r = Math.floor(n.length / 2), i = n.sort((e, t) => e - t);
		return n.length % 2 == 0 ? (i[r - 1] + i[r]) / 2 : i[r];
	},
	unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
	uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
	count: (e, t) => t.length
}, wS = {
	getDefaultColumnDef: () => ({
		aggregatedCell: (e) => {
			var t;
			return ((t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) ?? null;
		},
		aggregationFn: "auto"
	}),
	getInitialState: (e) => ({
		grouping: [],
		...e
	}),
	getDefaultOptions: (e) => ({
		onGroupingChange: Qx("grouping", e),
		groupedColumnMode: "reorder"
	}),
	createColumn: (e, t) => {
		e.toggleGrouping = () => {
			t.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((t) => t !== e.id) : [...t ?? [], e.id]);
		}, e.getCanGroup = () => (e.columnDef.enableGrouping ?? !0) && (t.options.enableGrouping ?? !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue), e.getIsGrouped = () => t.getState().grouping?.includes(e.id), e.getGroupedIndex = () => t.getState().grouping?.indexOf(e.id), e.getToggleGroupingHandler = () => {
			let t = e.getCanGroup();
			return () => {
				t && e.toggleGrouping();
			};
		}, e.getAutoAggregationFn = () => {
			let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
			if (typeof n == "number") return CS.sum;
			if (Object.prototype.toString.call(n) === "[object Date]") return CS.extent;
		}, e.getAggregationFn = () => {
			if (!e) throw Error();
			return $x(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : t.options.aggregationFns?.[e.columnDef.aggregationFn] ?? CS[e.columnDef.aggregationFn];
		};
	},
	createTable: (e) => {
		e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
			e.setGrouping(t ? [] : e.initialState?.grouping ?? []);
		}, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
	},
	createRow: (e, t) => {
		e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
			if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
			let r = t.getColumn(n);
			return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
		}, e._groupingValuesCache = {};
	},
	createCell: (e, t, n, r) => {
		e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
			var t;
			return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((t = n.subRows) != null && t.length);
		};
	}
};
function TS(e, t, n) {
	if (!(t != null && t.length) || !n) return e;
	let r = e.filter((e) => !t.includes(e.id));
	return n === "remove" ? r : [...t.map((t) => e.find((e) => e.id === t)).filter(Boolean), ...r];
}
var ES = {
	getInitialState: (e) => ({
		columnOrder: [],
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnOrderChange: Qx("columnOrder", e) }),
	createColumn: (e, t) => {
		e.getIndex = J((e) => [LS(t, e)], (t) => t.findIndex((t) => t.id === e.id), Y(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => LS(t, n)[0]?.id === e.id, e.getIsLastColumn = (n) => {
			let r = LS(t, n);
			return r[r.length - 1]?.id === e.id;
		};
	},
	createTable: (e) => {
		e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
			e.setColumnOrder(t ? [] : e.initialState.columnOrder ?? []);
		}, e._getOrderColumnsFn = J(() => [
			e.getState().columnOrder,
			e.getState().grouping,
			e.options.groupedColumnMode
		], (e, t, n) => (r) => {
			let i = [];
			if (!(e != null && e.length)) i = r;
			else {
				let t = [...e], n = [...r];
				for (; n.length && t.length;) {
					let e = t.shift(), r = n.findIndex((t) => t.id === e);
					r > -1 && i.push(n.splice(r, 1)[0]);
				}
				i = [...i, ...n];
			}
			return TS(i, t, n);
		}, Y(e.options, "debugTable", "_getOrderColumnsFn"));
	}
}, DS = () => ({
	left: [],
	right: []
}), OS = {
	getInitialState: (e) => ({
		columnPinning: DS(),
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnPinningChange: Qx("columnPinning", e) }),
	createColumn: (e, t) => {
		e.pin = (n) => {
			let r = e.getLeafColumns().map((e) => e.id).filter(Boolean);
			t.setColumnPinning((e) => n === "right" ? {
				left: (e?.left ?? []).filter((e) => !(r != null && r.includes(e))),
				right: [...(e?.right ?? []).filter((e) => !(r != null && r.includes(e))), ...r]
			} : n === "left" ? {
				left: [...(e?.left ?? []).filter((e) => !(r != null && r.includes(e))), ...r],
				right: (e?.right ?? []).filter((e) => !(r != null && r.includes(e)))
			} : {
				left: (e?.left ?? []).filter((e) => !(r != null && r.includes(e))),
				right: (e?.right ?? []).filter((e) => !(r != null && r.includes(e)))
			});
		}, e.getCanPin = () => e.getLeafColumns().some((e) => (e.columnDef.enablePinning ?? !0) && (t.options.enableColumnPinning ?? t.options.enablePinning ?? !0)), e.getIsPinned = () => {
			let n = e.getLeafColumns().map((e) => e.id), { left: r, right: i } = t.getState().columnPinning, a = n.some((e) => r?.includes(e)), o = n.some((e) => i?.includes(e));
			return a ? "left" : o ? "right" : !1;
		}, e.getPinnedIndex = () => {
			var n;
			let r = e.getIsPinned();
			return r ? ((n = t.getState().columnPinning) == null || (n = n[r]) == null ? void 0 : n.indexOf(e.id)) ?? -1 : 0;
		};
	},
	createRow: (e, t) => {
		e.getCenterVisibleCells = J(() => [
			e._getAllVisibleCells(),
			t.getState().columnPinning.left,
			t.getState().columnPinning.right
		], (e, t, n) => {
			let r = [...t ?? [], ...n ?? []];
			return e.filter((e) => !r.includes(e.column.id));
		}, Y(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = J(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (e, t) => (t ?? []).map((t) => e.find((e) => e.column.id === t)).filter(Boolean).map((e) => ({
			...e,
			position: "left"
		})), Y(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = J(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (e, t) => (t ?? []).map((t) => e.find((e) => e.column.id === t)).filter(Boolean).map((e) => ({
			...e,
			position: "right"
		})), Y(t.options, "debugRows", "getRightVisibleCells"));
	},
	createTable: (e) => {
		e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => e.setColumnPinning(t ? DS() : e.initialState?.columnPinning ?? DS()), e.getIsSomeColumnsPinned = (t) => {
			let n = e.getState().columnPinning;
			return t ? !!n[t]?.length : !!(n.left?.length || n.right?.length);
		}, e.getLeftLeafColumns = J(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (e, t) => (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean), Y(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = J(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (e, t) => (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean), Y(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = J(() => [
			e.getAllLeafColumns(),
			e.getState().columnPinning.left,
			e.getState().columnPinning.right
		], (e, t, n) => {
			let r = [...t ?? [], ...n ?? []];
			return e.filter((e) => !r.includes(e.id));
		}, Y(e.options, "debugColumns", "getCenterLeafColumns"));
	}
};
function kS(e) {
	return e || (typeof document < "u" ? document : null);
}
var AS = {
	size: 150,
	minSize: 20,
	maxSize: 2 ** 53 - 1
}, jS = () => ({
	startOffset: null,
	startSize: null,
	deltaOffset: null,
	deltaPercentage: null,
	isResizingColumn: !1,
	columnSizingStart: []
}), MS = {
	getDefaultColumnDef: () => AS,
	getInitialState: (e) => ({
		columnSizing: {},
		columnSizingInfo: jS(),
		...e
	}),
	getDefaultOptions: (e) => ({
		columnResizeMode: "onEnd",
		columnResizeDirection: "ltr",
		onColumnSizingChange: Qx("columnSizing", e),
		onColumnSizingInfoChange: Qx("columnSizingInfo", e)
	}),
	createColumn: (e, t) => {
		e.getSize = () => {
			let n = t.getState().columnSizing[e.id];
			return Math.min(Math.max(e.columnDef.minSize ?? AS.minSize, n ?? e.columnDef.size ?? AS.size), e.columnDef.maxSize ?? AS.maxSize);
		}, e.getStart = J((e) => [
			e,
			LS(t, e),
			t.getState().columnSizing
		], (t, n) => n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0), Y(t.options, "debugColumns", "getStart")), e.getAfter = J((e) => [
			e,
			LS(t, e),
			t.getState().columnSizing
		], (t, n) => n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0), Y(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
			t.setColumnSizing((t) => {
				let { [e.id]: n, ...r } = t;
				return r;
			});
		}, e.getCanResize = () => (e.columnDef.enableResizing ?? !0) && (t.options.enableColumnResizing ?? !0), e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
	},
	createHeader: (e, t) => {
		e.getSize = () => {
			let t = 0, n = (e) => {
				e.subHeaders.length ? e.subHeaders.forEach(n) : t += e.column.getSize() ?? 0;
			};
			return n(e), t;
		}, e.getStart = () => {
			if (e.index > 0) {
				let t = e.headerGroup.headers[e.index - 1];
				return t.getStart() + t.getSize();
			}
			return 0;
		}, e.getResizeHandler = (n) => {
			let r = t.getColumn(e.column.id), i = r?.getCanResize();
			return (a) => {
				if (!r || !i || (a.persist == null || a.persist(), FS(a) && a.touches && a.touches.length > 1)) return;
				let o = e.getSize(), s = e ? e.getLeafHeaders().map((e) => [e.column.id, e.column.getSize()]) : [[r.id, r.getSize()]], c = FS(a) ? Math.round(a.touches[0].clientX) : a.clientX, l = {}, u = (e, n) => {
					typeof n == "number" && (t.setColumnSizingInfo((e) => {
						let r = t.options.columnResizeDirection === "rtl" ? -1 : 1, i = (n - (e?.startOffset ?? 0)) * r, a = Math.max(i / (e?.startSize ?? 0), -.999999);
						return e.columnSizingStart.forEach((e) => {
							let [t, n] = e;
							l[t] = Math.round(Math.max(n + n * a, 0) * 100) / 100;
						}), {
							...e,
							deltaOffset: i,
							deltaPercentage: a
						};
					}), (t.options.columnResizeMode === "onChange" || e === "end") && t.setColumnSizing((e) => ({
						...e,
						...l
					})));
				}, d = (e) => u("move", e), f = (e) => {
					u("end", e), t.setColumnSizingInfo((e) => ({
						...e,
						isResizingColumn: !1,
						startOffset: null,
						startSize: null,
						deltaOffset: null,
						deltaPercentage: null,
						columnSizingStart: []
					}));
				}, p = kS(n), m = {
					moveHandler: (e) => d(e.clientX),
					upHandler: (e) => {
						p?.removeEventListener("mousemove", m.moveHandler), p?.removeEventListener("mouseup", m.upHandler), f(e.clientX);
					}
				}, h = {
					moveHandler: (e) => (e.cancelable && (e.preventDefault(), e.stopPropagation()), d(e.touches[0].clientX), !1),
					upHandler: (e) => {
						p?.removeEventListener("touchmove", h.moveHandler), p?.removeEventListener("touchend", h.upHandler), e.cancelable && (e.preventDefault(), e.stopPropagation()), f(e.touches[0]?.clientX);
					}
				}, g = PS() ? { passive: !1 } : !1;
				FS(a) ? (p?.addEventListener("touchmove", h.moveHandler, g), p?.addEventListener("touchend", h.upHandler, g)) : (p?.addEventListener("mousemove", m.moveHandler, g), p?.addEventListener("mouseup", m.upHandler, g)), t.setColumnSizingInfo((e) => ({
					...e,
					startOffset: c,
					startSize: o,
					deltaOffset: 0,
					deltaPercentage: 0,
					columnSizingStart: s,
					isResizingColumn: r.id
				}));
			};
		};
	},
	createTable: (e) => {
		e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
			e.setColumnSizing(t ? {} : e.initialState.columnSizing ?? {});
		}, e.resetHeaderSizeInfo = (t) => {
			e.setColumnSizingInfo(t ? jS() : e.initialState.columnSizingInfo ?? jS());
		}, e.getTotalSize = () => e.getHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getLeftTotalSize = () => e.getLeftHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getCenterTotalSize = () => e.getCenterHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getRightTotalSize = () => e.getRightHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0;
	}
}, NS = null;
function PS() {
	if (typeof NS == "boolean") return NS;
	let e = !1;
	try {
		let t = { get passive() {
			return e = !0, !1;
		} }, n = () => {};
		window.addEventListener("test", n, t), window.removeEventListener("test", n);
	} catch {
		e = !1;
	}
	return NS = e, NS;
}
function FS(e) {
	return e.type === "touchstart";
}
var IS = {
	getInitialState: (e) => ({
		columnVisibility: {},
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnVisibilityChange: Qx("columnVisibility", e) }),
	createColumn: (e, t) => {
		e.toggleVisibility = (n) => {
			e.getCanHide() && t.setColumnVisibility((t) => ({
				...t,
				[e.id]: n ?? !e.getIsVisible()
			}));
		}, e.getIsVisible = () => {
			let n = e.columns;
			return (n.length ? n.some((e) => e.getIsVisible()) : t.getState().columnVisibility?.[e.id]) ?? !0;
		}, e.getCanHide = () => (e.columnDef.enableHiding ?? !0) && (t.options.enableHiding ?? !0), e.getToggleVisibilityHandler = () => (t) => {
			e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
		};
	},
	createRow: (e, t) => {
		e._getAllVisibleCells = J(() => [e.getAllCells(), t.getState().columnVisibility], (e) => e.filter((e) => e.column.getIsVisible()), Y(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = J(() => [
			e.getLeftVisibleCells(),
			e.getCenterVisibleCells(),
			e.getRightVisibleCells()
		], (e, t, n) => [
			...e,
			...t,
			...n
		], Y(t.options, "debugRows", "getVisibleCells"));
	},
	createTable: (e) => {
		let t = (t, n) => J(() => [n(), n().filter((e) => e.getIsVisible()).map((e) => e.id).join("_")], (e) => e.filter((e) => e.getIsVisible == null ? void 0 : e.getIsVisible()), Y(e.options, "debugColumns", t));
		e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
			e.setColumnVisibility(t ? {} : e.initialState.columnVisibility ?? {});
		}, e.toggleAllColumnsVisible = (t) => {
			t ??= !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((e, n) => ({
				...e,
				[n.id]: t || !(n.getCanHide != null && n.getCanHide())
			}), {}));
		}, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((e) => !(e.getIsVisible != null && e.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((e) => e.getIsVisible == null ? void 0 : e.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
			e.toggleAllColumnsVisible(t.target?.checked);
		};
	}
};
function LS(e, t) {
	return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
var RS = { createTable: (e) => {
	e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
		if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
	};
} }, zS = {
	getInitialState: (e) => ({
		globalFilter: void 0,
		...e
	}),
	getDefaultOptions: (e) => ({
		onGlobalFilterChange: Qx("globalFilter", e),
		globalFilterFn: "auto",
		getColumnCanGlobalFilter: (t) => {
			var n;
			let r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
			return typeof r == "string" || typeof r == "number";
		}
	}),
	createColumn: (e, t) => {
		e.getCanGlobalFilter = () => (e.columnDef.enableGlobalFilter ?? !0) && (t.options.enableGlobalFilter ?? !0) && (t.options.enableFilters ?? !0) && ((t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) ?? !0) && !!e.accessorFn;
	},
	createTable: (e) => {
		e.getGlobalAutoFilterFn = () => yS.includesString, e.getGlobalFilterFn = () => {
			let { globalFilterFn: t } = e.options;
			return $x(t) ? t : t === "auto" ? e.getGlobalAutoFilterFn() : e.options.filterFns?.[t] ?? yS[t];
		}, e.setGlobalFilter = (t) => {
			e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
		}, e.resetGlobalFilter = (t) => {
			e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
		};
	}
}, BS = {
	getInitialState: (e) => ({
		expanded: {},
		...e
	}),
	getDefaultOptions: (e) => ({
		onExpandedChange: Qx("expanded", e),
		paginateExpandedRows: !0
	}),
	createTable: (e) => {
		let t = !1, n = !1;
		e._autoResetExpanded = () => {
			if (!t) {
				e._queue(() => {
					t = !0;
				});
				return;
			}
			if (e.options.autoResetAll ?? e.options.autoResetExpanded ?? !e.options.manualExpanding) {
				if (n) return;
				n = !0, e._queue(() => {
					e.resetExpanded(), n = !1;
				});
			}
		}, e.setExpanded = (t) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(t), e.toggleAllRowsExpanded = (t) => {
			t ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
		}, e.resetExpanded = (t) => {
			e.setExpanded(t ? {} : e.initialState?.expanded ?? {});
		}, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((e) => e.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (t) => {
			t.persist == null || t.persist(), e.toggleAllRowsExpanded();
		}, e.getIsSomeRowsExpanded = () => {
			let t = e.getState().expanded;
			return t === !0 || Object.values(t).some(Boolean);
		}, e.getIsAllRowsExpanded = () => {
			let t = e.getState().expanded;
			return typeof t == "boolean" ? t === !0 : !(!Object.keys(t).length || e.getRowModel().flatRows.some((e) => !e.getIsExpanded()));
		}, e.getExpandedDepth = () => {
			let t = 0;
			return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((e) => {
				let n = e.split(".");
				t = Math.max(t, n.length);
			}), t;
		}, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
	},
	createRow: (e, t) => {
		e.toggleExpanded = (n) => {
			t.setExpanded((r) => {
				let i = r === !0 ? !0 : !!(r != null && r[e.id]), a = {};
				if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
					a[e] = !0;
				}) : a = r, n ??= !i, !i && n) return {
					...a,
					[e.id]: !0
				};
				if (i && !n) {
					let { [e.id]: t, ...n } = a;
					return n;
				}
				return r;
			});
		}, e.getIsExpanded = () => {
			let n = t.getState().expanded;
			return !!((t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) ?? (n === !0 || n?.[e.id]));
		}, e.getCanExpand = () => {
			var n;
			return (t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) ?? ((t.options.enableExpanding ?? !0) && !!((n = e.subRows) != null && n.length));
		}, e.getIsAllParentsExpanded = () => {
			let n = !0, r = e;
			for (; n && r.parentId;) r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
			return n;
		}, e.getToggleExpandedHandler = () => {
			let t = e.getCanExpand();
			return () => {
				t && e.toggleExpanded();
			};
		};
	}
}, VS = 0, HS = 10, US = () => ({
	pageIndex: VS,
	pageSize: HS
}), WS = {
	getInitialState: (e) => ({
		...e,
		pagination: {
			...US(),
			...e?.pagination
		}
	}),
	getDefaultOptions: (e) => ({ onPaginationChange: Qx("pagination", e) }),
	createTable: (e) => {
		let t = !1, n = !1;
		e._autoResetPageIndex = () => {
			if (!t) {
				e._queue(() => {
					t = !0;
				});
				return;
			}
			if (e.options.autoResetAll ?? e.options.autoResetPageIndex ?? !e.options.manualPagination) {
				if (n) return;
				n = !0, e._queue(() => {
					e.resetPageIndex(), n = !1;
				});
			}
		}, e.setPagination = (t) => e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange((e) => Zx(t, e)), e.resetPagination = (t) => {
			e.setPagination(t ? US() : e.initialState.pagination ?? US());
		}, e.setPageIndex = (t) => {
			e.setPagination((n) => {
				let r = Zx(t, n.pageIndex), i = e.options.pageCount === void 0 || e.options.pageCount === -1 ? 2 ** 53 - 1 : e.options.pageCount - 1;
				return r = Math.max(0, Math.min(r, i)), {
					...n,
					pageIndex: r
				};
			});
		}, e.resetPageIndex = (t) => {
			var n;
			e.setPageIndex(t ? VS : ((n = e.initialState) == null || (n = n.pagination) == null ? void 0 : n.pageIndex) ?? VS);
		}, e.resetPageSize = (t) => {
			var n;
			e.setPageSize(t ? HS : ((n = e.initialState) == null || (n = n.pagination) == null ? void 0 : n.pageSize) ?? HS);
		}, e.setPageSize = (t) => {
			e.setPagination((e) => {
				let n = Math.max(1, Zx(t, e.pageSize)), r = e.pageSize * e.pageIndex, i = Math.floor(r / n);
				return {
					...e,
					pageIndex: i,
					pageSize: n
				};
			});
		}, e.setPageCount = (t) => e.setPagination((n) => {
			let r = Zx(t, e.options.pageCount ?? -1);
			return typeof r == "number" && (r = Math.max(-1, r)), {
				...n,
				pageCount: r
			};
		}), e.getPageOptions = J(() => [e.getPageCount()], (e) => {
			let t = [];
			return e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t;
		}, Y(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
			let { pageIndex: t } = e.getState().pagination, n = e.getPageCount();
			return n === -1 ? !0 : n === 0 ? !1 : t < n - 1;
		}, e.previousPage = () => e.setPageIndex((e) => e - 1), e.nextPage = () => e.setPageIndex((e) => e + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => e.options.pageCount ?? Math.ceil(e.getRowCount() / e.getState().pagination.pageSize), e.getRowCount = () => e.options.rowCount ?? e.getPrePaginationRowModel().rows.length;
	}
}, GS = () => ({
	top: [],
	bottom: []
}), KS = {
	getInitialState: (e) => ({
		rowPinning: GS(),
		...e
	}),
	getDefaultOptions: (e) => ({ onRowPinningChange: Qx("rowPinning", e) }),
	createRow: (e, t) => {
		e.pin = (n, r, i) => {
			let a = r ? e.getLeafRows().map((e) => {
				let { id: t } = e;
				return t;
			}) : [], o = i ? e.getParentRows().map((e) => {
				let { id: t } = e;
				return t;
			}) : [], s = new Set([
				...o,
				e.id,
				...a
			]);
			t.setRowPinning((e) => n === "bottom" ? {
				top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
				bottom: [...(e?.bottom ?? []).filter((e) => !(s != null && s.has(e))), ...Array.from(s)]
			} : n === "top" ? {
				top: [...(e?.top ?? []).filter((e) => !(s != null && s.has(e))), ...Array.from(s)],
				bottom: (e?.bottom ?? []).filter((e) => !(s != null && s.has(e)))
			} : {
				top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
				bottom: (e?.bottom ?? []).filter((e) => !(s != null && s.has(e)))
			});
		}, e.getCanPin = () => {
			let { enableRowPinning: n, enablePinning: r } = t.options;
			return typeof n == "function" ? n(e) : n ?? r ?? !0;
		}, e.getIsPinned = () => {
			let n = [e.id], { top: r, bottom: i } = t.getState().rowPinning, a = n.some((e) => r?.includes(e)), o = n.some((e) => i?.includes(e));
			return a ? "top" : o ? "bottom" : !1;
		}, e.getPinnedIndex = () => {
			let n = e.getIsPinned();
			return n ? ((n === "top" ? t.getTopRows() : t.getBottomRows())?.map((e) => {
				let { id: t } = e;
				return t;
			}))?.indexOf(e.id) ?? -1 : -1;
		};
	},
	createTable: (e) => {
		e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => e.setRowPinning(t ? GS() : e.initialState?.rowPinning ?? GS()), e.getIsSomeRowsPinned = (t) => {
			let n = e.getState().rowPinning;
			return t ? !!n[t]?.length : !!(n.top?.length || n.bottom?.length);
		}, e._getPinnedRows = (t, n, r) => (e.options.keepPinnedRows ?? !0 ? (n ?? []).map((t) => {
			let n = e.getRow(t, !0);
			return n.getIsAllParentsExpanded() ? n : null;
		}) : (n ?? []).map((e) => t.find((t) => t.id === e))).filter(Boolean).map((e) => ({
			...e,
			position: r
		})), e.getTopRows = J(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), Y(e.options, "debugRows", "getTopRows")), e.getBottomRows = J(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), Y(e.options, "debugRows", "getBottomRows")), e.getCenterRows = J(() => [
			e.getRowModel().rows,
			e.getState().rowPinning.top,
			e.getState().rowPinning.bottom
		], (e, t, n) => {
			let r = new Set([...t ?? [], ...n ?? []]);
			return e.filter((e) => !r.has(e.id));
		}, Y(e.options, "debugRows", "getCenterRows"));
	}
}, qS = {
	getInitialState: (e) => ({
		rowSelection: {},
		...e
	}),
	getDefaultOptions: (e) => ({
		onRowSelectionChange: Qx("rowSelection", e),
		enableRowSelection: !0,
		enableMultiRowSelection: !0,
		enableSubRowSelection: !0
	}),
	createTable: (e) => {
		e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => e.setRowSelection(t ? {} : e.initialState.rowSelection ?? {}), e.toggleAllRowsSelected = (t) => {
			e.setRowSelection((n) => {
				t = t === void 0 ? !e.getIsAllRowsSelected() : t;
				let r = { ...n }, i = e.getPreGroupedRowModel().flatRows;
				return t ? i.forEach((e) => {
					e.getCanSelect() && (r[e.id] = !0);
				}) : i.forEach((e) => {
					delete r[e.id];
				}), r;
			});
		}, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
			let r = t === void 0 ? !e.getIsAllPageRowsSelected() : t, i = { ...n };
			return e.getRowModel().rows.forEach((t) => {
				JS(i, t.id, r, !0, e);
			}), i;
		}), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = J(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? YS(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, Y(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = J(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? YS(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, Y(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = J(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? YS(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, Y(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
			let t = e.getFilteredRowModel().flatRows, { rowSelection: n } = e.getState(), r = !!(t.length && Object.keys(n).length);
			return r && t.some((e) => e.getCanSelect() && !n[e.id]) && (r = !1), r;
		}, e.getIsAllPageRowsSelected = () => {
			let t = e.getPaginationRowModel().flatRows.filter((e) => e.getCanSelect()), { rowSelection: n } = e.getState(), r = !!t.length;
			return r && t.some((e) => !n[e.id]) && (r = !1), r;
		}, e.getIsSomeRowsSelected = () => {
			let t = Object.keys(e.getState().rowSelection ?? {}).length;
			return t > 0 && t < e.getFilteredRowModel().flatRows.length;
		}, e.getIsSomePageRowsSelected = () => {
			let t = e.getPaginationRowModel().flatRows;
			return e.getIsAllPageRowsSelected() ? !1 : t.filter((e) => e.getCanSelect()).some((e) => e.getIsSelected() || e.getIsSomeSelected());
		}, e.getToggleAllRowsSelectedHandler = () => (t) => {
			e.toggleAllRowsSelected(t.target.checked);
		}, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
			e.toggleAllPageRowsSelected(t.target.checked);
		};
	},
	createRow: (e, t) => {
		e.toggleSelected = (n, r) => {
			let i = e.getIsSelected();
			t.setRowSelection((a) => {
				if (n = n === void 0 ? !i : n, e.getCanSelect() && i === n) return a;
				let o = { ...a };
				return JS(o, e.id, n, r?.selectChildren ?? !0, t), o;
			});
		}, e.getIsSelected = () => {
			let { rowSelection: n } = t.getState();
			return XS(e, n);
		}, e.getIsSomeSelected = () => {
			let { rowSelection: n } = t.getState();
			return ZS(e, n) === "some";
		}, e.getIsAllSubRowsSelected = () => {
			let { rowSelection: n } = t.getState();
			return ZS(e, n) === "all";
		}, e.getCanSelect = () => typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : t.options.enableRowSelection ?? !0, e.getCanSelectSubRows = () => typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : t.options.enableSubRowSelection ?? !0, e.getCanMultiSelect = () => typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : t.options.enableMultiRowSelection ?? !0, e.getToggleSelectedHandler = () => {
			let t = e.getCanSelect();
			return (n) => {
				t && e.toggleSelected(n.target?.checked);
			};
		};
	}
}, JS = (e, t, n, r, i) => {
	var a;
	let o = i.getRow(t, !0);
	n ? (o.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]), o.getCanSelect() && (e[t] = !0)) : delete e[t], r && (a = o.subRows) != null && a.length && o.getCanSelectSubRows() && o.subRows.forEach((t) => JS(e, t.id, n, r, i));
};
function YS(e, t) {
	let n = e.getState().rowSelection, r = [], i = {}, a = function(e, t) {
		return e.map((e) => {
			var t;
			let o = XS(e, n);
			if (o && (r.push(e), i[e.id] = e), (t = e.subRows) != null && t.length && (e = {
				...e,
				subRows: a(e.subRows)
			}), o) return e;
		}).filter(Boolean);
	};
	return {
		rows: a(t.rows),
		flatRows: r,
		rowsById: i
	};
}
function XS(e, t) {
	return t[e.id] ?? !1;
}
function ZS(e, t, n) {
	var r;
	if (!((r = e.subRows) != null && r.length)) return !1;
	let i = !0, a = !1;
	return e.subRows.forEach((e) => {
		if (!(a && !i) && (e.getCanSelect() && (XS(e, t) ? a = !0 : i = !1), e.subRows && e.subRows.length)) {
			let n = ZS(e, t);
			n === "all" ? a = !0 : (n === "some" && (a = !0), i = !1);
		}
	}), i ? "all" : a ? "some" : !1;
}
var QS = /([0-9]+)/gm, $S = (e, t, n) => sC(oC(e.getValue(n)).toLowerCase(), oC(t.getValue(n)).toLowerCase()), eC = (e, t, n) => sC(oC(e.getValue(n)), oC(t.getValue(n))), tC = (e, t, n) => aC(oC(e.getValue(n)).toLowerCase(), oC(t.getValue(n)).toLowerCase()), nC = (e, t, n) => aC(oC(e.getValue(n)), oC(t.getValue(n))), rC = (e, t, n) => {
	let r = e.getValue(n), i = t.getValue(n);
	return r > i ? 1 : r < i ? -1 : 0;
}, iC = (e, t, n) => aC(e.getValue(n), t.getValue(n));
function aC(e, t) {
	return e === t ? 0 : e > t ? 1 : -1;
}
function oC(e) {
	return typeof e == "number" ? isNaN(e) || e === Infinity || e === -Infinity ? "" : String(e) : typeof e == "string" ? e : "";
}
function sC(e, t) {
	let n = e.split(QS).filter(Boolean), r = t.split(QS).filter(Boolean);
	for (; n.length && r.length;) {
		let e = n.shift(), t = r.shift(), i = parseInt(e, 10), a = parseInt(t, 10), o = [i, a].sort();
		if (isNaN(o[0])) {
			if (e > t) return 1;
			if (t > e) return -1;
			continue;
		}
		if (isNaN(o[1])) return isNaN(i) ? -1 : 1;
		if (i > a) return 1;
		if (a > i) return -1;
	}
	return n.length - r.length;
}
var cC = {
	alphanumeric: $S,
	alphanumericCaseSensitive: eC,
	text: tC,
	textCaseSensitive: nC,
	datetime: rC,
	basic: iC
}, lC = [
	oS,
	IS,
	ES,
	OS,
	lS,
	xS,
	RS,
	zS,
	{
		getInitialState: (e) => ({
			sorting: [],
			...e
		}),
		getDefaultColumnDef: () => ({
			sortingFn: "auto",
			sortUndefined: 1
		}),
		getDefaultOptions: (e) => ({
			onSortingChange: Qx("sorting", e),
			isMultiSortEvent: (e) => e.shiftKey
		}),
		createColumn: (e, t) => {
			e.getAutoSortingFn = () => {
				let n = t.getFilteredRowModel().flatRows.slice(10), r = !1;
				for (let t of n) {
					let n = t?.getValue(e.id);
					if (Object.prototype.toString.call(n) === "[object Date]") return cC.datetime;
					if (typeof n == "string" && (r = !0, n.split(QS).length > 1)) return cC.alphanumeric;
				}
				return r ? cC.text : cC.basic;
			}, e.getAutoSortDir = () => typeof t.getFilteredRowModel().flatRows[0]?.getValue(e.id) == "string" ? "asc" : "desc", e.getSortingFn = () => {
				if (!e) throw Error();
				return $x(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : t.options.sortingFns?.[e.columnDef.sortingFn] ?? cC[e.columnDef.sortingFn];
			}, e.toggleSorting = (n, r) => {
				let i = e.getNextSortingOrder(), a = n != null;
				t.setSorting((o) => {
					let s = o?.find((t) => t.id === e.id), c = o?.findIndex((t) => t.id === e.id), l = [], u, d = a ? n : i === "desc";
					return u = o != null && o.length && e.getCanMultiSort() && r ? s ? "toggle" : "add" : o != null && o.length && c !== o.length - 1 ? "replace" : s ? "toggle" : "replace", u === "toggle" && (a || i || (u = "remove")), u === "add" ? (l = [...o, {
						id: e.id,
						desc: d
					}], l.splice(0, l.length - (t.options.maxMultiSortColCount ?? 2 ** 53 - 1))) : l = u === "toggle" ? o.map((t) => t.id === e.id ? {
						...t,
						desc: d
					} : t) : u === "remove" ? o.filter((t) => t.id !== e.id) : [{
						id: e.id,
						desc: d
					}], l;
				});
			}, e.getFirstSortDir = () => e.columnDef.sortDescFirst ?? t.options.sortDescFirst ?? e.getAutoSortDir() === "desc" ? "desc" : "asc", e.getNextSortingOrder = (n) => {
				let r = e.getFirstSortDir(), i = e.getIsSorted();
				return i ? i !== r && (t.options.enableSortingRemoval ?? !0) && (!n || (t.options.enableMultiRemove ?? !0)) ? !1 : i === "desc" ? "asc" : "desc" : r;
			}, e.getCanSort = () => (e.columnDef.enableSorting ?? !0) && (t.options.enableSorting ?? !0) && !!e.accessorFn, e.getCanMultiSort = () => e.columnDef.enableMultiSort ?? t.options.enableMultiSort ?? !!e.accessorFn, e.getIsSorted = () => {
				let n = t.getState().sorting?.find((t) => t.id === e.id);
				return n ? n.desc ? "desc" : "asc" : !1;
			}, e.getSortIndex = () => t.getState().sorting?.findIndex((t) => t.id === e.id) ?? -1, e.clearSorting = () => {
				t.setSorting((t) => t != null && t.length ? t.filter((t) => t.id !== e.id) : []);
			}, e.getToggleSortingHandler = () => {
				let n = e.getCanSort();
				return (r) => {
					n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
				};
			};
		},
		createTable: (e) => {
			e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
				e.setSorting(t ? [] : e.initialState?.sorting ?? []);
			}, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
		}
	},
	wS,
	BS,
	WS,
	KS,
	qS,
	MS
];
function uC(e) {
	process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
	let t = [...lC, ...e._features ?? []], n = { _features: t }, r = n._features.reduce((e, t) => Object.assign(e, t.getDefaultOptions == null ? void 0 : t.getDefaultOptions(n)), {}), i = (e) => n.options.mergeOptions ? n.options.mergeOptions(r, e) : {
		...r,
		...e
	}, a = { ...e.initialState ?? {} };
	n._features.forEach((e) => {
		a = (e.getInitialState == null ? void 0 : e.getInitialState(a)) ?? a;
	});
	let o = [], s = !1, c = {
		_features: t,
		options: {
			...r,
			...e
		},
		initialState: a,
		_queue: (e) => {
			o.push(e), s || (s = !0, Promise.resolve().then(() => {
				for (; o.length;) o.shift()();
				s = !1;
			}).catch((e) => setTimeout(() => {
				throw e;
			})));
		},
		reset: () => {
			n.setState(n.initialState);
		},
		setOptions: (e) => {
			n.options = i(Zx(e, n.options));
		},
		getState: () => n.options.state,
		setState: (e) => {
			n.options.onStateChange == null || n.options.onStateChange(e);
		},
		_getRowId: (e, t, r) => (n.options.getRowId == null ? void 0 : n.options.getRowId(e, t, r)) ?? `${r ? [r.id, t].join(".") : t}`,
		getCoreRowModel: () => (n._getCoreRowModel ||= n.options.getCoreRowModel(n), n._getCoreRowModel()),
		getRowModel: () => n.getPaginationRowModel(),
		getRow: (e, t) => {
			let r = (t ? n.getPrePaginationRowModel() : n.getRowModel()).rowsById[e];
			if (!r && (r = n.getCoreRowModel().rowsById[e], !r)) throw process.env.NODE_ENV === "production" ? Error() : Error(`getRow could not find row with ID: ${e}`);
			return r;
		},
		_getDefaultColumnDef: J(() => [n.options.defaultColumn], (e) => (e ??= {}, {
			header: (e) => {
				let t = e.header.column.columnDef;
				return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
			},
			cell: (e) => {
				var t;
				return ((t = e.renderValue()) == null || t.toString == null ? void 0 : t.toString()) ?? null;
			},
			...n._features.reduce((e, t) => Object.assign(e, t.getDefaultColumnDef == null ? void 0 : t.getDefaultColumnDef()), {}),
			...e
		}), Y(e, "debugColumns", "_getDefaultColumnDef")),
		_getColumnDefs: () => n.options.columns,
		getAllColumns: J(() => [n._getColumnDefs()], (e) => {
			let t = function(e, r, i) {
				return i === void 0 && (i = 0), e.map((e) => {
					let a = rS(n, e, i, r), o = e;
					return a.columns = o.columns ? t(o.columns, a, i + 1) : [], a;
				});
			};
			return t(e);
		}, Y(e, "debugColumns", "getAllColumns")),
		getAllFlatColumns: J(() => [n.getAllColumns()], (e) => e.flatMap((e) => e.getFlatColumns()), Y(e, "debugColumns", "getAllFlatColumns")),
		_getAllFlatColumnsById: J(() => [n.getAllFlatColumns()], (e) => e.reduce((e, t) => (e[t.id] = t, e), {}), Y(e, "debugColumns", "getAllFlatColumnsById")),
		getAllLeafColumns: J(() => [n.getAllColumns(), n._getOrderColumnsFn()], (e, t) => t(e.flatMap((e) => e.getLeafColumns())), Y(e, "debugColumns", "getAllLeafColumns")),
		getColumn: (e) => {
			let t = n._getAllFlatColumnsById()[e];
			return process.env.NODE_ENV !== "production" && !t && console.error(`[Table] Column with id '${e}' does not exist.`), t;
		}
	};
	Object.assign(n, c);
	for (let e = 0; e < n._features.length; e++) {
		let t = n._features[e];
		t == null || t.createTable == null || t.createTable(n);
	}
	return n;
}
function dC() {
	return (e) => J(() => [e.options.data], (t) => {
		let n = {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, r = function(t, i, a) {
			i === void 0 && (i = 0);
			let o = [];
			for (let c = 0; c < t.length; c++) {
				let l = cS(e, e._getRowId(t[c], c, a), t[c], c, i, void 0, a?.id);
				if (n.flatRows.push(l), n.rowsById[l.id] = l, o.push(l), e.options.getSubRows) {
					var s;
					l.originalSubRows = e.options.getSubRows(t[c], c), (s = l.originalSubRows) != null && s.length && (l.subRows = r(l.originalSubRows, i + 1, l));
				}
			}
			return o;
		};
		return n.rows = r(t), n;
	}, Y(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function fC(e) {
	let t = [], n = (e) => {
		var r;
		t.push(e), (r = e.subRows) != null && r.length && e.getIsExpanded() && e.subRows.forEach(n);
	};
	return e.rows.forEach(n), {
		rows: t,
		flatRows: e.flatRows,
		rowsById: e.rowsById
	};
}
function pC(e, t, n) {
	return n.options.filterFromLeafRows ? mC(e, t, n) : hC(e, t, n);
}
function mC(e, t, n) {
	let r = [], i = {}, a = n.options.maxLeafRowFilterDepth ?? 100, o = function(e, s) {
		s === void 0 && (s = 0);
		let c = [];
		for (let u = 0; u < e.length; u++) {
			var l;
			let d = e[u], f = cS(n, d.id, d.original, d.index, d.depth, void 0, d.parentId);
			if (f.columnFilters = d.columnFilters, (l = d.subRows) != null && l.length && s < a) {
				if (f.subRows = o(d.subRows, s + 1), d = f, t(d) && !f.subRows.length) {
					c.push(d), i[d.id] = d, r.push(d);
					continue;
				}
				if (t(d) || f.subRows.length) {
					c.push(d), i[d.id] = d, r.push(d);
					continue;
				}
			} else d = f, t(d) && (c.push(d), i[d.id] = d, r.push(d));
		}
		return c;
	};
	return {
		rows: o(e),
		flatRows: r,
		rowsById: i
	};
}
function hC(e, t, n) {
	let r = [], i = {}, a = n.options.maxLeafRowFilterDepth ?? 100, o = function(e, s) {
		s === void 0 && (s = 0);
		let c = [];
		for (let u = 0; u < e.length; u++) {
			let d = e[u];
			if (t(d)) {
				var l;
				if ((l = d.subRows) != null && l.length && s < a) {
					let e = cS(n, d.id, d.original, d.index, d.depth, void 0, d.parentId);
					e.subRows = o(d.subRows, s + 1), d = e;
				}
				c.push(d), r.push(d), i[d.id] = d;
			}
		}
		return c;
	};
	return {
		rows: o(e),
		flatRows: r,
		rowsById: i
	};
}
function gC() {
	return (e) => J(() => [
		e.getPreFilteredRowModel(),
		e.getState().columnFilters,
		e.getState().globalFilter
	], (t, n, r) => {
		if (!t.rows.length || !(n != null && n.length) && !r) {
			for (let e = 0; e < t.flatRows.length; e++) t.flatRows[e].columnFilters = {}, t.flatRows[e].columnFiltersMeta = {};
			return t;
		}
		let i = [], a = [];
		(n ?? []).forEach((t) => {
			let n = e.getColumn(t.id);
			if (!n) return;
			let r = n.getFilterFn();
			if (!r) {
				process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${n.id}.`);
				return;
			}
			i.push({
				id: t.id,
				filterFn: r,
				resolvedValue: (r.resolveFilterValue == null ? void 0 : r.resolveFilterValue(t.value)) ?? t.value
			});
		});
		let o = (n ?? []).map((e) => e.id), s = e.getGlobalFilterFn(), c = e.getAllLeafColumns().filter((e) => e.getCanGlobalFilter());
		r && s && c.length && (o.push("__global__"), c.forEach((e) => {
			a.push({
				id: e.id,
				filterFn: s,
				resolvedValue: (s.resolveFilterValue == null ? void 0 : s.resolveFilterValue(r)) ?? r
			});
		}));
		let l, u;
		for (let e = 0; e < t.flatRows.length; e++) {
			let n = t.flatRows[e];
			if (n.columnFilters = {}, i.length) for (let e = 0; e < i.length; e++) {
				l = i[e];
				let t = l.id;
				n.columnFilters[t] = l.filterFn(n, t, l.resolvedValue, (e) => {
					n.columnFiltersMeta[t] = e;
				});
			}
			if (a.length) {
				for (let e = 0; e < a.length; e++) {
					u = a[e];
					let t = u.id;
					if (u.filterFn(n, t, u.resolvedValue, (e) => {
						n.columnFiltersMeta[t] = e;
					})) {
						n.columnFilters.__global__ = !0;
						break;
					}
				}
				n.columnFilters.__global__ !== !0 && (n.columnFilters.__global__ = !1);
			}
		}
		return pC(t.rows, (e) => {
			for (let t = 0; t < o.length; t++) if (e.columnFilters[o[t]] === !1) return !1;
			return !0;
		}, e);
	}, Y(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function _C(e) {
	return (e) => J(() => [
		e.getState().pagination,
		e.getPrePaginationRowModel(),
		e.options.paginateExpandedRows ? void 0 : e.getState().expanded
	], (t, n) => {
		if (!n.rows.length) return n;
		let { pageSize: r, pageIndex: i } = t, { rows: a, flatRows: o, rowsById: s } = n, c = r * i, l = c + r;
		a = a.slice(c, l);
		let u;
		u = e.options.paginateExpandedRows ? {
			rows: a,
			flatRows: o,
			rowsById: s
		} : fC({
			rows: a,
			flatRows: o,
			rowsById: s
		}), u.flatRows = [];
		let d = (e) => {
			u.flatRows.push(e), e.subRows.length && e.subRows.forEach(d);
		};
		return u.rows.forEach(d), u;
	}, Y(e.options, "debugTable", "getPaginationRowModel"));
}
function vC() {
	return (e) => J(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
		if (!n.rows.length || !(t != null && t.length)) return n;
		let r = e.getState().sorting, i = [], a = r.filter((t) => e.getColumn(t.id)?.getCanSort()), o = {};
		a.forEach((t) => {
			let n = e.getColumn(t.id);
			n && (o[t.id] = {
				sortUndefined: n.columnDef.sortUndefined,
				invertSorting: n.columnDef.invertSorting,
				sortingFn: n.getSortingFn()
			});
		});
		let s = (e) => {
			let t = e.map((e) => ({ ...e }));
			return t.sort((e, t) => {
				for (let n = 0; n < a.length; n += 1) {
					let r = a[n], i = o[r.id], s = i.sortUndefined, c = r?.desc ?? !1, l = 0;
					if (s) {
						let n = e.getValue(r.id), i = t.getValue(r.id), a = n === void 0, o = i === void 0;
						if (a || o) {
							if (s === "first") return a ? -1 : 1;
							if (s === "last") return a ? 1 : -1;
							l = a && o ? 0 : a ? s : -s;
						}
					}
					if (l === 0 && (l = i.sortingFn(e, t, r.id)), l !== 0) return c && (l *= -1), i.invertSorting && (l *= -1), l;
				}
				return e.index - t.index;
			}), t.forEach((e) => {
				var t;
				i.push(e), (t = e.subRows) != null && t.length && (e.subRows = s(e.subRows));
			}), t;
		};
		return {
			rows: s(n.rows),
			flatRows: i,
			rowsById: n.rowsById
		};
	}, Y(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
//#endregion
//#region node_modules/@tanstack/react-table/build/lib/index.mjs
function yC(t, n) {
	return t ? bC(t) ? /* @__PURE__ */ e.createElement(t, n) : t : null;
}
function bC(e) {
	return xC(e) || typeof e == "function" || SC(e);
}
function xC(e) {
	return typeof e == "function" && (() => {
		let t = Object.getPrototypeOf(e);
		return t.prototype && t.prototype.isReactComponent;
	})();
}
function SC(e) {
	return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function CC(t) {
	let n = {
		state: {},
		onStateChange: () => {},
		renderFallbackValue: null,
		...t
	}, [r] = e.useState(() => ({ current: uC(n) })), [i, a] = e.useState(() => r.current.initialState);
	return r.current.setOptions((e) => ({
		...e,
		...t,
		state: {
			...i,
			...t.state
		},
		onStateChange: (e) => {
			a(e), t.onStateChange == null || t.onStateChange(e);
		}
	})), r.current;
}
//#endregion
//#region src/components/common/AppTable.tsx
function wC({ columns: e, data: t, pagination: n = !0, pageSize: r = 10, loading: i, emptyMessage: a = "데이터가 없습니다.", className: o }) {
	let [s, c] = g([]), l = CC({
		data: t,
		columns: e,
		state: { sorting: s },
		onSortingChange: c,
		getCoreRowModel: dC(),
		getSortedRowModel: vC(),
		...n && { getPaginationRowModel: _C() },
		initialState: { pagination: { pageSize: r } }
	});
	return /* @__PURE__ */ S("div", {
		className: q("flex flex-col gap-2", o),
		children: [/* @__PURE__ */ x("div", {
			className: "rounded-md border border-table-border",
			children: /* @__PURE__ */ S("table", {
				className: "w-full",
				style: { fontSize: "var(--table-font-size)" },
				children: [/* @__PURE__ */ x("thead", {
					className: "border-b border-table-border bg-table-header",
					children: l.getHeaderGroups().map((e) => /* @__PURE__ */ x("tr", { children: e.headers.map((e) => {
						let t = e.column.getCanSort(), n = e.column.getIsSorted();
						return /* @__PURE__ */ x("th", {
							onClick: t ? e.column.getToggleSortingHandler() : void 0,
							className: q("px-4 py-3 text-left font-medium text-table-header-foreground", t && "cursor-pointer select-none hover:text-foreground"),
							children: /* @__PURE__ */ S("div", {
								className: "flex items-center gap-1",
								children: [yC(e.column.columnDef.header, e.getContext()), t && /* @__PURE__ */ x("span", {
									className: "text-muted-foreground",
									children: x(n === "asc" ? N : n === "desc" ? D : ee, { className: "h-3 w-3" })
								})]
							})
						}, e.id);
					}) }, e.id))
				}), /* @__PURE__ */ x("tbody", { children: i ? /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ x("td", {
					colSpan: e.length,
					className: "py-12 text-center text-muted-foreground",
					children: "로딩 중..."
				}) }) : l.getRowModel().rows.length === 0 ? /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ x("td", {
					colSpan: e.length,
					className: "py-12 text-center text-muted-foreground",
					children: a
				}) }) : l.getRowModel().rows.map((e) => /* @__PURE__ */ x("tr", {
					className: "border-b border-table-border bg-table-row text-table-row-foreground transition-colors hover:bg-table-row-hover",
					children: e.getVisibleCells().map((e) => /* @__PURE__ */ x("td", {
						className: "px-4",
						style: { height: "var(--table-row-height)" },
						children: yC(e.column.columnDef.cell, e.getContext())
					}, e.id))
				}, e.id)) })]
			})
		}), n && /* @__PURE__ */ S("div", {
			className: "flex items-center justify-between text-sm",
			children: [/* @__PURE__ */ S("span", {
				className: "text-muted-foreground",
				children: [
					"총 ",
					t.length,
					"건 / ",
					l.getPageCount(),
					"페이지"
				]
			}), /* @__PURE__ */ S("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ x(Dy, {
						variant: "outline",
						size: "sm",
						onClick: () => l.firstPage(),
						disabled: !l.getCanPreviousPage(),
						children: "<<"
					}),
					/* @__PURE__ */ x(Dy, {
						variant: "outline",
						size: "sm",
						onClick: () => l.previousPage(),
						disabled: !l.getCanPreviousPage(),
						children: "<"
					}),
					/* @__PURE__ */ S("span", {
						className: "px-3 py-1",
						children: [
							l.getState().pagination.pageIndex + 1,
							" / ",
							l.getPageCount()
						]
					}),
					/* @__PURE__ */ x(Dy, {
						variant: "outline",
						size: "sm",
						onClick: () => l.nextPage(),
						disabled: !l.getCanNextPage(),
						children: ">"
					}),
					/* @__PURE__ */ x(Dy, {
						variant: "outline",
						size: "sm",
						onClick: () => l.lastPage(),
						disabled: !l.getCanNextPage(),
						children: ">>"
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/components/common/AppFormField.tsx
var TC = ({ children: e, className: t, ...n }) => /* @__PURE__ */ x(Fy, {
	className: t,
	...n,
	children: e
}), EC = class extends r {
	constructor(e) {
		super(e), this.state = { hasError: !1 };
	}
	static getDerivedStateFromError(e) {
		return {
			hasError: !0,
			error: e
		};
	}
	componentDidCatch(e, t) {
		console.error("ErrorBoundary caught:", e, t);
	}
	render() {
		return this.state.hasError ? this.props.fallback ?? /* @__PURE__ */ S("div", {
			className: "flex h-screen flex-col items-center justify-center gap-4",
			children: [
				/* @__PURE__ */ x("h2", {
					className: "text-xl font-semibold text-destructive",
					children: "오류가 발생했습니다."
				}),
				/* @__PURE__ */ x("p", {
					className: "text-sm text-muted-foreground",
					children: this.state.error?.message
				}),
				/* @__PURE__ */ x("button", {
					className: "rounded bg-primary px-4 py-2 text-sm text-primary-foreground",
					onClick: () => this.setState({ hasError: !1 }),
					children: "다시 시도"
				})
			]
		}) : this.props.children;
	}
}, DC = ({ position: e = "top-center" }) => /* @__PURE__ */ x(Oe, {
	position: e,
	richColors: !0
});
//#endregion
//#region src/components/ui/tabs.tsx
function OC({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ x(s_, {
		"data-slot": "tabs",
		"data-orientation": t,
		className: q("group/tabs flex gap-2 data-horizontal:flex-col", e),
		...n
	});
}
var kC = $e("group/tabs-list inline-flex w-fit items-center justify-center rounded-none p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function AC({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ x(c_, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: q(kC({ variant: t }), e),
		...n
	});
}
function jC({ className: e, ...t }) {
	return /* @__PURE__ */ x(l_, {
		"data-slot": "tabs-trigger",
		className: q("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-none border border-transparent px-1.5 py-0.5 text-xs font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start group-data-vertical/tabs:py-[calc(--spacing(1.25))] hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", e),
		...t
	});
}
function MC({ className: e, ...t }) {
	return /* @__PURE__ */ x(u_, {
		"data-slot": "tabs-content",
		className: q("flex-1 text-xs/relaxed outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/common/AppTabs.tsx
var NC = 52, PC = ({ defaultValue: e, value: t, onValueChange: n, items: r, variant: i = "default", className: a, listClassName: o, contentClassName: s }) => {
	let [c, l] = g(t ?? e ?? r[0]?.value ?? ""), u = t ?? c, d = (e) => {
		l(e), n?.(e);
	}, p = h(null), m = h(null), [_, v] = g(0), [y, b] = g([]), [C, w] = g(!1), T = h(null);
	f(() => {
		let e = p.current;
		if (!e) return;
		let t = new ResizeObserver(([e]) => v(e.contentRect.width));
		return t.observe(e), v(e.getBoundingClientRect().width), () => t.disconnect();
	}, []), f(() => {
		let e = m.current;
		if (!e) return;
		let t = Array.from(e.children);
		t.length === r.length && b(t.map((e) => e.getBoundingClientRect().width));
	}, [r]), f(() => {
		let e = (e) => {
			T.current && !T.current.contains(e.target) && w(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []);
	let E = r.length;
	if (_ && y.length === r.length && y.reduce((e, t) => e + t, 0) > _) {
		let e = _ - NC, t = 0;
		E = 0;
		for (let n = 0; n < r.length; n++) {
			let r = y[n] ?? 80;
			if (t + r > e) {
				E = n;
				break;
			}
			t += r, E = n + 1;
		}
		E < 1 && (E = 1);
	}
	let O = r.slice(0, E), k = r.slice(E), A = k.some((e) => e.value === u), j = k.length > 0;
	return /* @__PURE__ */ S(OC, {
		value: u,
		onValueChange: d,
		className: a,
		children: [
			/* @__PURE__ */ x("div", {
				ref: m,
				style: {
					position: "fixed",
					top: -9999,
					left: 0,
					visibility: "hidden",
					pointerEvents: "none"
				},
				className: "flex p-[3px]",
				"aria-hidden": !0,
				children: r.map((e) => /* @__PURE__ */ x("div", {
					className: "inline-flex items-center px-1.5 py-0.5 text-xs font-medium whitespace-nowrap border border-transparent",
					children: e.label
				}, e.value))
			}),
			/* @__PURE__ */ S("div", {
				ref: p,
				className: "relative",
				children: [/* @__PURE__ */ x("div", {
					className: "overflow-hidden",
					style: { paddingRight: j ? NC : 0 },
					children: /* @__PURE__ */ x(AC, {
						variant: i,
						className: q("min-w-full", o),
						children: O.map((e) => /* @__PURE__ */ x(jC, {
							value: e.value,
							disabled: e.disabled,
							children: e.label
						}, e.value))
					})
				}), j && /* @__PURE__ */ S("div", {
					ref: T,
					className: "absolute right-0 top-0 bottom-0 flex items-center",
					children: [/* @__PURE__ */ S("button", {
						onClick: () => w((e) => !e),
						className: q("flex items-center gap-0.5 rounded-none px-2 h-7 text-xs font-medium border transition-colors", A ? "bg-background text-foreground border-border" : "bg-muted text-muted-foreground border-transparent hover:bg-accent hover:text-accent-foreground"),
						children: [/* @__PURE__ */ S("span", { children: ["+", k.length] }), /* @__PURE__ */ x(D, { className: q("h-3 w-3 transition-transform", C && "rotate-180") })]
					}), C && /* @__PURE__ */ x("div", {
						className: "absolute right-0 top-full z-50 mt-1 min-w-[140px] max-h-64 overflow-y-auto rounded-none border bg-popover shadow-md",
						children: k.map((e) => /* @__PURE__ */ x("button", {
							disabled: e.disabled,
							onClick: () => {
								d(e.value), w(!1);
							},
							className: q("flex w-full items-center px-3 py-1.5 text-left text-xs transition-colors", e.value === u ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground disabled:opacity-50"),
							children: e.label
						}, e.value))
					})]
				})]
			}),
			r.map((e) => /* @__PURE__ */ x(MC, {
				value: e.value,
				className: s,
				children: e.content
			}, e.value))
		]
	});
}, FC = ({ defaultValue: e, value: t, onValueChange: n, items: r, variant: i = "default", overflow: a = "more", className: o, listClassName: s, contentClassName: c }) => a === "more" ? /* @__PURE__ */ x(PC, {
	defaultValue: e,
	value: t,
	onValueChange: n,
	items: r,
	variant: i,
	className: o,
	listClassName: s,
	contentClassName: c
}) : /* @__PURE__ */ S(OC, {
	defaultValue: e ?? r[0]?.value,
	value: t,
	onValueChange: n,
	className: o,
	children: [/* @__PURE__ */ x("div", {
		className: q(a === "scroll" && "overflow-x-auto scrollbar-thin"),
		children: /* @__PURE__ */ x(AC, {
			variant: i,
			className: q(a === "scroll" && "w-max min-w-full", a === "wrap" && "h-auto flex-wrap w-full", s),
			children: r.map((e) => /* @__PURE__ */ x(jC, {
				value: e.value,
				disabled: e.disabled,
				children: e.label
			}, e.value))
		})
	}), r.map((e) => /* @__PURE__ */ x(MC, {
		value: e.value,
		className: c,
		children: e.content
	}, e.value))]
});
//#endregion
//#region src/components/ui/sheet.tsx
function IC({ ...e }) {
	return /* @__PURE__ */ x(ba, {
		"data-slot": "sheet",
		...e
	});
}
function LC({ ...e }) {
	return /* @__PURE__ */ x(Sa, {
		"data-slot": "sheet-portal",
		...e
	});
}
function RC({ className: e, ...t }) {
	return /* @__PURE__ */ x(Ca, {
		"data-slot": "sheet-overlay",
		className: q("fixed inset-0 z-50 bg-black/10 text-xs/relaxed duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function zC({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ S(LC, { children: [/* @__PURE__ */ x(RC, {}), /* @__PURE__ */ S(wa, {
		"data-slot": "sheet-content",
		"data-side": n,
		className: q("fixed z-50 flex flex-col bg-popover bg-clip-padding text-xs/relaxed text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", e),
		...i,
		children: [t, r && /* @__PURE__ */ x(Da, {
			"data-slot": "sheet-close",
			asChild: !0,
			children: /* @__PURE__ */ S(Cy, {
				variant: "ghost",
				className: "absolute top-3 right-3",
				size: "icon-sm",
				children: [/* @__PURE__ */ x(De, {}), /* @__PURE__ */ x("span", {
					className: "sr-only",
					children: "Close"
				})]
			})
		})]
	})] });
}
function BC({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "sheet-header",
		className: q("flex flex-col gap-0.5 p-4", e),
		...t
	});
}
function VC({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "sheet-footer",
		className: q("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function HC({ className: e, ...t }) {
	return /* @__PURE__ */ x(Ta, {
		"data-slot": "sheet-title",
		className: q("font-heading text-sm font-medium text-foreground", e),
		...t
	});
}
function UC({ className: e, ...t }) {
	return /* @__PURE__ */ x(Ea, {
		"data-slot": "sheet-description",
		className: q("text-xs/relaxed text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/common/AppSheet.tsx
var WC = ({ open: e, onClose: t, title: n, description: r, children: i, side: a = "right", onConfirm: o, confirmLabel: s = "확인", cancelLabel: c = "취소", confirmLoading: l }) => /* @__PURE__ */ x(IC, {
	open: e,
	onOpenChange: (e) => !e && t(),
	children: /* @__PURE__ */ S(zC, {
		side: a,
		children: [
			(n || r) && /* @__PURE__ */ S(BC, { children: [n && /* @__PURE__ */ x(HC, { children: n }), r && /* @__PURE__ */ x(UC, { children: r })] }),
			i,
			o && /* @__PURE__ */ S(VC, { children: [/* @__PURE__ */ x(Dy, {
				variant: "outline",
				onClick: t,
				children: c
			}), /* @__PURE__ */ x(Dy, {
				loading: l,
				onClick: o,
				children: s
			})] })
		]
	})
});
//#endregion
//#region src/components/ui/alert-dialog.tsx
function GC({ ...e }) {
	return /* @__PURE__ */ x(to, {
		"data-slot": "alert-dialog",
		...e
	});
}
function KC({ ...e }) {
	return /* @__PURE__ */ x(no, {
		"data-slot": "alert-dialog-portal",
		...e
	});
}
function qC({ className: e, ...t }) {
	return /* @__PURE__ */ x(ro, {
		"data-slot": "alert-dialog-overlay",
		className: q("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function JC({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ S(KC, { children: [/* @__PURE__ */ x(qC, {}), /* @__PURE__ */ x(io, {
		"data-slot": "alert-dialog-content",
		"data-size": t,
		className: q("group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-none bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...n
	})] });
}
function YC({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "alert-dialog-header",
		className: q("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", e),
		...t
	});
}
function XC({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "alert-dialog-footer",
		className: q("flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", e),
		...t
	});
}
function ZC({ className: e, ...t }) {
	return /* @__PURE__ */ x(so, {
		"data-slot": "alert-dialog-title",
		className: q("font-heading text-sm font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", e),
		...t
	});
}
function QC({ className: e, ...t }) {
	return /* @__PURE__ */ x(co, {
		"data-slot": "alert-dialog-description",
		className: q("text-xs/relaxed text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", e),
		...t
	});
}
function $C({ className: e, variant: t = "default", size: n = "default", ...r }) {
	return /* @__PURE__ */ x(Cy, {
		variant: t,
		size: n,
		asChild: !0,
		children: /* @__PURE__ */ x(ao, {
			"data-slot": "alert-dialog-action",
			className: q(e),
			...r
		})
	});
}
function ew({ className: e, variant: t = "outline", size: n = "default", ...r }) {
	return /* @__PURE__ */ x(Cy, {
		variant: t,
		size: n,
		asChild: !0,
		children: /* @__PURE__ */ x(oo, {
			"data-slot": "alert-dialog-cancel",
			className: q(e),
			...r
		})
	});
}
//#endregion
//#region src/components/common/AppAlertDialog.tsx
var tw = ({ open: e, onClose: t, onConfirm: n, title: r = "확인", description: i, confirmLabel: a = "확인", cancelLabel: o = "취소", variant: s = "default" }) => /* @__PURE__ */ x(GC, {
	open: e,
	onOpenChange: (e) => !e && t(),
	children: /* @__PURE__ */ S(JC, { children: [/* @__PURE__ */ S(YC, { children: [/* @__PURE__ */ x(ZC, { children: r }), i && /* @__PURE__ */ x(QC, { children: i })] }), /* @__PURE__ */ S(XC, { children: [/* @__PURE__ */ x(ew, {
		onClick: t,
		children: o
	}), /* @__PURE__ */ x($C, {
		onClick: n,
		className: s === "destructive" ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : "",
		children: a
	})] })] })
});
//#endregion
//#region src/components/ui/tooltip.tsx
function nw({ delayDuration: e = 0, ...t }) {
	return /* @__PURE__ */ x(q_, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function rw({ ...e }) {
	return /* @__PURE__ */ x(J_, {
		"data-slot": "tooltip",
		...e
	});
}
function iw({ ...e }) {
	return /* @__PURE__ */ x(Y_, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function aw({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ x(X_, { children: /* @__PURE__ */ S(Z_, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: q("z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-none bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-none data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r,
		children: [n, /* @__PURE__ */ x(Q_, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-none bg-foreground fill-foreground" })]
	}) });
}
//#endregion
//#region src/components/common/AppTooltip.tsx
var ow = ({ content: e, children: t, side: n = "top" }) => /* @__PURE__ */ x(nw, { children: /* @__PURE__ */ S(rw, { children: [/* @__PURE__ */ x(iw, {
	asChild: !0,
	children: t
}), /* @__PURE__ */ x(aw, {
	side: n,
	children: e
})] }) });
//#endregion
//#region src/components/ui/skeleton.tsx
function sw({ className: e, ...t }) {
	return /* @__PURE__ */ x("div", {
		"data-slot": "skeleton",
		className: q("animate-pulse rounded-none bg-muted", e),
		...t
	});
}
//#endregion
//#region src/components/common/AppSkeleton.tsx
var cw = ({ rows: e = 5, className: t }) => /* @__PURE__ */ x("div", {
	className: q("flex flex-col gap-2", t),
	children: Array.from({ length: e }).map((e, t) => /* @__PURE__ */ x(sw, { className: "h-9 w-full" }, t))
});
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function lw({ ...e }) {
	return /* @__PURE__ */ x(ef, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function uw({ ...e }) {
	return /* @__PURE__ */ x(tf, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function dw({ className: e, align: t = "start", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ x(nf, { children: /* @__PURE__ */ x(rf, {
		"data-slot": "dropdown-menu-content",
		sideOffset: n,
		align: t,
		className: q("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-none text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", e),
		...r
	}) });
}
function fw({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ x(af, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: q("group/dropdown-menu-item relative flex cursor-default items-center gap-2 rounded-none px-2 py-2 text-xs outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", e),
		...r
	});
}
function pw({ className: e, ...t }) {
	return /* @__PURE__ */ x(of, {
		"data-slot": "dropdown-menu-separator",
		className: q("-mx-1 h-px bg-border", e),
		...t
	});
}
//#endregion
//#region src/components/common/AppDropdownMenu.tsx
var mw = ({ trigger: e, items: t }) => /* @__PURE__ */ S(lw, { children: [/* @__PURE__ */ x(uw, {
	asChild: !0,
	children: e
}), /* @__PURE__ */ x(dw, {
	align: "end",
	children: t.map((e, t) => /* @__PURE__ */ S(b, { children: [e.separator && t !== 0 && /* @__PURE__ */ x(pw, {}, `sep-${t}`), /* @__PURE__ */ S(fw, {
		onClick: e.onClick,
		className: e.variant === "destructive" ? "text-destructive focus:text-destructive" : "",
		children: [e.icon && /* @__PURE__ */ x(e.icon, { className: "mr-2 h-4 w-4" }), e.label]
	}, e.label)] }))
})] }), hw = 365.2425, gw = 6048e5, _w = 864e5, vw = 6e4, yw = 36e5, bw = 1e3, xw = 3600 * 24;
xw * 7, xw * hw / 12 * 3;
var Sw = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/date-fns/constructFrom.js
function Cw(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && Sw in e ? e[Sw](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/date-fns/toDate.js
function X(e, t) {
	return Cw(t || e, e);
}
//#endregion
//#region node_modules/date-fns/addDays.js
function ww(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(t) ? Cw(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/date-fns/addMonths.js
function Tw(e, t, n) {
	let r = X(e, n?.in);
	if (isNaN(t)) return Cw(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = Cw(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region node_modules/date-fns/_lib/defaultOptions.js
var Ew = {};
function Dw() {
	return Ew;
}
//#endregion
//#region node_modules/date-fns/startOfWeek.js
function Ow(e, t) {
	let n = Dw(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = X(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/date-fns/startOfISOWeek.js
function kw(e, t) {
	return Ow(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/date-fns/getISOWeekYear.js
function Aw(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = Cw(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = kw(i), o = Cw(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = kw(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function jw(e) {
	let t = X(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeDates.js
function Mw(e, ...t) {
	let n = Cw.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/date-fns/startOfDay.js
function Nw(e, t) {
	let n = X(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarDays.js
function Pw(e, t, n) {
	let [r, i] = Mw(n?.in, e, t), a = Nw(r), o = Nw(i), s = +a - jw(a), c = +o - jw(o);
	return Math.round((s - c) / _w);
}
//#endregion
//#region node_modules/date-fns/startOfISOWeekYear.js
function Fw(e, t) {
	let n = Aw(e, t), r = Cw(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), kw(r);
}
//#endregion
//#region node_modules/date-fns/addWeeks.js
function Iw(e, t, n) {
	return ww(e, t * 7, n);
}
//#endregion
//#region node_modules/date-fns/addYears.js
function Lw(e, t, n) {
	return Tw(e, t * 12, n);
}
//#endregion
//#region node_modules/date-fns/max.js
function Rw(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = Cw.bind(null, e));
		let t = X(e, r);
		(!n || n < t || isNaN(+t)) && (n = t);
	}), Cw(r, n || NaN);
}
//#endregion
//#region node_modules/date-fns/min.js
function zw(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = Cw.bind(null, e));
		let t = X(e, r);
		(!n || n > t || isNaN(+t)) && (n = t);
	}), Cw(r, n || NaN);
}
//#endregion
//#region node_modules/date-fns/isSameDay.js
function Bw(e, t, n) {
	let [r, i] = Mw(n?.in, e, t);
	return +Nw(r) == +Nw(i);
}
//#endregion
//#region node_modules/date-fns/isDate.js
function Vw(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/date-fns/isValid.js
function Hw(e) {
	return !(!Vw(e) && typeof e != "number" || isNaN(+X(e)));
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarMonths.js
function Uw(e, t, n) {
	let [r, i] = Mw(n?.in, e, t), a = r.getFullYear() - i.getFullYear(), o = r.getMonth() - i.getMonth();
	return a * 12 + o;
}
//#endregion
//#region node_modules/date-fns/endOfMonth.js
function Ww(e, t) {
	let n = X(e, t?.in), r = n.getMonth();
	return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeInterval.js
function Gw(e, t) {
	let [n, r] = Mw(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region node_modules/date-fns/eachMonthOfInterval.js
function Kw(e, t) {
	let { start: n, end: r } = Gw(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setDate(1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(Cw(n, o)), o.setMonth(o.getMonth() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/date-fns/startOfMonth.js
function qw(e, t) {
	let n = X(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/endOfYear.js
function Jw(e, t) {
	let n = X(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/date-fns/startOfYear.js
function Yw(e, t) {
	let n = X(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/date-fns/eachYearOfInterval.js
function Xw(e, t) {
	let { start: n, end: r } = Gw(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setMonth(0, 1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(Cw(n, o)), o.setFullYear(o.getFullYear() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/date-fns/endOfWeek.js
function Zw(e, t) {
	let n = Dw(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = X(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region node_modules/date-fns/endOfISOWeek.js
function Qw(e, t) {
	return Zw(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var $w = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, eT = (e, t, n) => {
	let r, i = $w[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function tT(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var nT = {
	date: tT({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: tT({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: tT({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, rT = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, iT = (e, t, n, r) => rT[e];
//#endregion
//#region node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function aT(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var oT = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: aT({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: aT({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: aT({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: aT({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: aT({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchFn.js
function sT(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? lT(s, (e) => e.test(o)) : cT(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function cT(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function lT(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function uT(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
//#endregion
//#region node_modules/date-fns/locale/en-US.js
var dT = {
	code: "en-US",
	formatDistance: eT,
	formatLong: nT,
	formatRelative: iT,
	localize: oT,
	match: {
		ordinalNumber: uT({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: sT({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: sT({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: sT({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: sT({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: sT({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/date-fns/getDayOfYear.js
function fT(e, t) {
	let n = X(e, t?.in);
	return Pw(n, Yw(n)) + 1;
}
//#endregion
//#region node_modules/date-fns/getISOWeek.js
function pT(e, t) {
	let n = X(e, t?.in), r = kw(n) - +Fw(n);
	return Math.round(r / gw) + 1;
}
//#endregion
//#region node_modules/date-fns/getWeekYear.js
function mT(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = Dw(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = Cw(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Ow(o, t), c = Cw(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Ow(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/date-fns/startOfWeekYear.js
function hT(e, t) {
	let n = Dw(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = mT(e, t), a = Cw(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Ow(a, t);
}
//#endregion
//#region node_modules/date-fns/getWeek.js
function gT(e, t) {
	let n = X(e, t?.in), r = Ow(n, t) - +hT(n, t);
	return Math.round(r / gw) + 1;
}
//#endregion
//#region node_modules/date-fns/_lib/addLeadingZeros.js
function _T(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/date-fns/_lib/format/lightFormatters.js
var vT = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return _T(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : _T(n + 1, 2);
	},
	d(e, t) {
		return _T(e.getDate(), t.length);
	},
	a(e, t) {
		let n = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.toUpperCase();
			case "aaa": return n;
			case "aaaaa": return n[0];
			default: return n === "am" ? "a.m." : "p.m.";
		}
	},
	h(e, t) {
		return _T(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return _T(e.getHours(), t.length);
	},
	m(e, t) {
		return _T(e.getMinutes(), t.length);
	},
	s(e, t) {
		return _T(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return _T(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, yT = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, bT = {
	G: function(e, t, n) {
		let r = +(e.getFullYear() > 0);
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(r, { width: "abbreviated" });
			case "GGGGG": return n.era(r, { width: "narrow" });
			default: return n.era(r, { width: "wide" });
		}
	},
	y: function(e, t, n) {
		if (t === "yo") {
			let t = e.getFullYear(), r = t > 0 ? t : 1 - t;
			return n.ordinalNumber(r, { unit: "year" });
		}
		return vT.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = mT(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? _T(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : _T(a, t.length);
	},
	R: function(e, t) {
		return _T(Aw(e), t.length);
	},
	u: function(e, t) {
		return _T(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return _T(r, 2);
			case "Qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "QQQ": return n.quarter(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "q": return String(r);
			case "qq": return _T(r, 2);
			case "qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "qqq": return n.quarter(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "M":
			case "MM": return vT.M(e, t);
			case "Mo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "MMM": return n.month(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return n.month(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "L": return String(r + 1);
			case "LL": return _T(r + 1, 2);
			case "Lo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "LLL": return n.month(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return n.month(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(e, t, n, r) {
		let i = gT(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : _T(i, t.length);
	},
	I: function(e, t, n) {
		let r = pT(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : _T(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : vT.d(e, t);
	},
	D: function(e, t, n) {
		let r = fT(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : _T(r, t.length);
	},
	E: function(e, t, n) {
		let r = e.getDay();
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "e": return String(a);
			case "ee": return _T(a, 2);
			case "eo": return n.ordinalNumber(a, { unit: "day" });
			case "eee": return n.day(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return n.day(i, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(i, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "c": return String(a);
			case "cc": return _T(a, t.length);
			case "co": return n.ordinalNumber(a, { unit: "day" });
			case "ccc": return n.day(i, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return n.day(i, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(i, {
				width: "short",
				context: "standalone"
			});
			default: return n.day(i, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(e, t, n) {
		let r = e.getDay(), i = r === 0 ? 7 : r;
		switch (t) {
			case "i": return String(i);
			case "ii": return _T(i, t.length);
			case "io": return n.ordinalNumber(i, { unit: "day" });
			case "iii": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(e, t, n) {
		let r = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return n.dayPeriod(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r === 12 ? yT.noon : r === 0 ? yT.midnight : r / 12 >= 1 ? "pm" : "am", t) {
			case "b":
			case "bb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r >= 17 ? yT.evening : r >= 12 ? yT.afternoon : r >= 4 ? yT.morning : yT.night, t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(e, t, n) {
		if (t === "ho") {
			let t = e.getHours() % 12;
			return t === 0 && (t = 12), n.ordinalNumber(t, { unit: "hour" });
		}
		return vT.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : vT.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : _T(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : _T(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : vT.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : vT.s(e, t);
	},
	S: function(e, t) {
		return vT.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return ST(r);
			case "XXXX":
			case "XX": return CT(r);
			default: return CT(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return ST(r);
			case "xxxx":
			case "xx": return CT(r);
			default: return CT(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + xT(r, ":");
			default: return "GMT" + CT(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + xT(r, ":");
			default: return "GMT" + CT(r, ":");
		}
	},
	t: function(e, t, n) {
		return _T(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return _T(+e, t.length);
	}
};
function xT(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + _T(a, 2);
}
function ST(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + _T(Math.abs(e) / 60, 2) : CT(e, t);
}
function CT(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = _T(Math.trunc(r / 60), 2), a = _T(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/date-fns/_lib/format/longFormatters.js
var wT = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, TT = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, ET = {
	p: TT,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return wT(e, t);
		let a;
		switch (r) {
			case "P":
				a = t.dateTime({ width: "short" });
				break;
			case "PP":
				a = t.dateTime({ width: "medium" });
				break;
			case "PPP":
				a = t.dateTime({ width: "long" });
				break;
			default:
				a = t.dateTime({ width: "full" });
				break;
		}
		return a.replace("{{date}}", wT(r, t)).replace("{{time}}", TT(i, t));
	}
}, DT = /^D+$/, OT = /^Y+$/, kT = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function AT(e) {
	return DT.test(e);
}
function jT(e) {
	return OT.test(e);
}
function MT(e, t, n) {
	let r = NT(e, t, n);
	if (console.warn(r), kT.includes(e)) throw RangeError(r);
}
function NT(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/date-fns/format.js
var PT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, FT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, IT = /^'([^]*?)'?$/, LT = /''/g, RT = /[a-zA-Z]/;
function zT(e, t, n) {
	let r = Dw(), i = n?.locale ?? r.locale ?? dT, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = X(e, n?.in);
	if (!Hw(s)) throw RangeError("Invalid time value");
	let c = t.match(FT).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = ET[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(PT).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: BT(e)
		};
		if (bT[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(RT)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
		return {
			isToken: !1,
			value: e
		};
	});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = {
		firstWeekContainsDate: a,
		weekStartsOn: o,
		locale: i
	};
	return c.map((r) => {
		if (!r.isToken) return r.value;
		let a = r.value;
		(!n?.useAdditionalWeekYearTokens && jT(a) || !n?.useAdditionalDayOfYearTokens && AT(a)) && MT(a, t, String(e));
		let o = bT[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function BT(e) {
	let t = e.match(IT);
	return t ? t[1].replace(LT, "'") : e;
}
//#endregion
//#region node_modules/date-fns/getDaysInMonth.js
function VT(e, t) {
	let n = X(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = Cw(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region node_modules/date-fns/getDefaultOptions.js
function HT() {
	return Object.assign({}, Dw());
}
//#endregion
//#region node_modules/date-fns/getISODay.js
function UT(e, t) {
	let n = X(e, t?.in).getDay();
	return n === 0 ? 7 : n;
}
//#endregion
//#region node_modules/date-fns/getMonth.js
function WT(e, t) {
	return X(e, t?.in).getMonth();
}
//#endregion
//#region node_modules/date-fns/getYear.js
function GT(e, t) {
	return X(e, t?.in).getFullYear();
}
//#endregion
//#region node_modules/date-fns/isAfter.js
function KT(e, t) {
	return +X(e) > +X(t);
}
//#endregion
//#region node_modules/date-fns/isBefore.js
function qT(e, t) {
	return +X(e) < +X(t);
}
//#endregion
//#region node_modules/date-fns/transpose.js
function JT(e, t) {
	let n = YT(t) ? new t(0) : Cw(t, 0);
	return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}
function YT(e) {
	return typeof e == "function" && e.prototype?.constructor === e;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/Setter.js
var XT = 10, ZT = class {
	subPriority = 0;
	validate(e, t) {
		return !0;
	}
}, QT = class extends ZT {
	constructor(e, t, n, r, i) {
		super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = r, i && (this.subPriority = i);
	}
	validate(e, t) {
		return this.validateValue(e, this.value, t);
	}
	set(e, t, n) {
		return this.setValue(e, t, this.value, n);
	}
}, $T = class extends ZT {
	priority = XT;
	subPriority = -1;
	constructor(e, t) {
		super(), this.context = e || ((e) => Cw(t, e));
	}
	set(e, t) {
		return t.timestampIsSet ? e : Cw(e, JT(e, this.context));
	}
}, Z = class {
	run(e, t, n, r) {
		let i = this.parse(e, t, n, r);
		return i ? {
			setter: new QT(i.value, this.validate, this.set, this.priority, this.subPriority),
			rest: i.rest
		} : null;
	}
	validate(e, t, n) {
		return !0;
	}
}, eE = class extends Z {
	priority = 140;
	parse(e, t, n) {
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
			case "GGGGG": return n.era(e, { width: "narrow" });
			default: return n.era(e, { width: "wide" }) || n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
		}
	}
	set(e, t, n) {
		return t.era = n, e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"R",
		"u",
		"t",
		"T"
	];
}, tE = {
	month: /^(1[0-2]|0?\d)/,
	date: /^(3[0-1]|[0-2]?\d)/,
	dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
	week: /^(5[0-3]|[0-4]?\d)/,
	hour23h: /^(2[0-3]|[0-1]?\d)/,
	hour24h: /^(2[0-4]|[0-1]?\d)/,
	hour11h: /^(1[0-1]|0?\d)/,
	hour12h: /^(1[0-2]|0?\d)/,
	minute: /^[0-5]?\d/,
	second: /^[0-5]?\d/,
	singleDigit: /^\d/,
	twoDigits: /^\d{1,2}/,
	threeDigits: /^\d{1,3}/,
	fourDigits: /^\d{1,4}/,
	anyDigitsSigned: /^-?\d+/,
	singleDigitSigned: /^-?\d/,
	twoDigitsSigned: /^-?\d{1,2}/,
	threeDigitsSigned: /^-?\d{1,3}/,
	fourDigitsSigned: /^-?\d{1,4}/
}, nE = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/date-fns/parse/_lib/utils.js
function rE(e, t) {
	return e && {
		value: t(e.value),
		rest: e.rest
	};
}
function iE(e, t) {
	let n = t.match(e);
	return n ? {
		value: parseInt(n[0], 10),
		rest: t.slice(n[0].length)
	} : null;
}
function aE(e, t) {
	let n = t.match(e);
	if (!n) return null;
	if (n[0] === "Z") return {
		value: 0,
		rest: t.slice(1)
	};
	let r = n[1] === "+" ? 1 : -1, i = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
	return {
		value: r * (i * yw + a * vw + o * bw),
		rest: t.slice(n[0].length)
	};
}
function oE(e) {
	return iE(tE.anyDigitsSigned, e);
}
function sE(e, t) {
	switch (e) {
		case 1: return iE(tE.singleDigit, t);
		case 2: return iE(tE.twoDigits, t);
		case 3: return iE(tE.threeDigits, t);
		case 4: return iE(tE.fourDigits, t);
		default: return iE(RegExp("^\\d{1," + e + "}"), t);
	}
}
function cE(e, t) {
	switch (e) {
		case 1: return iE(tE.singleDigitSigned, t);
		case 2: return iE(tE.twoDigitsSigned, t);
		case 3: return iE(tE.threeDigitsSigned, t);
		case 4: return iE(tE.fourDigitsSigned, t);
		default: return iE(RegExp("^-?\\d{1," + e + "}"), t);
	}
}
function lE(e) {
	switch (e) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function uE(e, t) {
	let n = t > 0, r = n ? t : 1 - t, i;
	if (r <= 50) i = e || 100;
	else {
		let t = r + 50, n = Math.trunc(t / 100) * 100, a = e >= t % 100;
		i = e + n - (a ? 100 : 0);
	}
	return n ? i : 1 - i;
}
function dE(e) {
	return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/YearParser.js
var fE = class extends Z {
	priority = 130;
	incompatibleTokens = [
		"Y",
		"R",
		"u",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "yy"
		});
		switch (t) {
			case "y": return rE(sE(4, e), r);
			case "yo": return rE(n.ordinalNumber(e, { unit: "year" }), r);
			default: return rE(sE(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n) {
		let r = e.getFullYear();
		if (n.isTwoDigitYear) {
			let t = uE(n.year, r);
			return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
		}
		let i = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
}, pE = class extends Z {
	priority = 130;
	parse(e, t, n) {
		let r = (e) => ({
			year: e,
			isTwoDigitYear: t === "YY"
		});
		switch (t) {
			case "Y": return rE(sE(4, e), r);
			case "Yo": return rE(n.ordinalNumber(e, { unit: "year" }), r);
			default: return rE(sE(t.length, e), r);
		}
	}
	validate(e, t) {
		return t.isTwoDigitYear || t.year > 0;
	}
	set(e, t, n, r) {
		let i = mT(e, r);
		if (n.isTwoDigitYear) {
			let t = uE(n.year, i);
			return e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ow(e, r);
		}
		let a = !("era" in t) || t.era === 1 ? n.year : 1 - n.year;
		return e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ow(e, r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
}, mE = class extends Z {
	priority = 130;
	parse(e, t) {
		return cE(t === "R" ? 4 : t.length, e);
	}
	set(e, t, n) {
		let r = Cw(e, 0);
		return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), kw(r);
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, hE = class extends Z {
	priority = 130;
	parse(e, t) {
		return cE(t === "u" ? 4 : t.length, e);
	}
	set(e, t, n) {
		return e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"R",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, gE = class extends Z {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "Q":
			case "QQ": return sE(t.length, e);
			case "Qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "QQQ": return n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "formatting"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.quarter(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, _E = class extends Z {
	priority = 120;
	parse(e, t, n) {
		switch (t) {
			case "q":
			case "qq": return sE(t.length, e);
			case "qo": return n.ordinalNumber(e, { unit: "quarter" });
			case "qqq": return n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(e, {
				width: "wide",
				context: "standalone"
			}) || n.quarter(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.quarter(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 4;
	}
	set(e, t, n) {
		return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, vE = class extends Z {
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"L",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "M": return rE(iE(tE.month, e), r);
			case "MM": return rE(sE(2, e), r);
			case "Mo": return rE(n.ordinalNumber(e, { unit: "month" }), r);
			case "MMM": return n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			case "MMMMM": return n.month(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(e, {
				width: "wide",
				context: "formatting"
			}) || n.month(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.month(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
}, yE = class extends Z {
	priority = 110;
	parse(e, t, n) {
		let r = (e) => e - 1;
		switch (t) {
			case "L": return rE(iE(tE.month, e), r);
			case "LL": return rE(sE(2, e), r);
			case "Lo": return rE(n.ordinalNumber(e, { unit: "month" }), r);
			case "LLL": return n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			case "LLLLL": return n.month(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(e, {
				width: "wide",
				context: "standalone"
			}) || n.month(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.month(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/date-fns/setWeek.js
function bE(e, t, n) {
	let r = X(e, n?.in), i = gT(r, n) - t;
	return r.setDate(r.getDate() - i * 7), X(r, n?.in);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var xE = class extends Z {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "w": return iE(tE.week, e);
			case "wo": return n.ordinalNumber(e, { unit: "week" });
			default: return sE(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n, r) {
		return Ow(bE(e, n, r), r);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/date-fns/setISOWeek.js
function SE(e, t, n) {
	let r = X(e, n?.in), i = pT(r, n) - t;
	return r.setDate(r.getDate() - i * 7), r;
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var CE = class extends Z {
	priority = 100;
	parse(e, t, n) {
		switch (t) {
			case "I": return iE(tE.week, e);
			case "Io": return n.ordinalNumber(e, { unit: "week" });
			default: return sE(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 53;
	}
	set(e, t, n) {
		return kw(SE(e, n));
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
}, wE = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], TE = [
	31,
	29,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], EE = class extends Z {
	priority = 90;
	subPriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "d": return iE(tE.date, e);
			case "do": return n.ordinalNumber(e, { unit: "date" });
			default: return sE(t.length, e);
		}
	}
	validate(e, t) {
		let n = dE(e.getFullYear()), r = e.getMonth();
		return n ? t >= 1 && t <= TE[r] : t >= 1 && t <= wE[r];
	}
	set(e, t, n) {
		return e.setDate(n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, DE = class extends Z {
	priority = 90;
	subpriority = 1;
	parse(e, t, n) {
		switch (t) {
			case "D":
			case "DD": return iE(tE.dayOfYear, e);
			case "Do": return n.ordinalNumber(e, { unit: "date" });
			default: return sE(t.length, e);
		}
	}
	validate(e, t) {
		return dE(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
	}
	set(e, t, n) {
		return e.setMonth(0, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"E",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/date-fns/setDay.js
function OE(e, t, n) {
	let r = Dw(), i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = X(e, n?.in), o = a.getDay(), s = (t % 7 + 7) % 7, c = 7 - i;
	return ww(a, t < 0 || t > 6 ? t - (o + c) % 7 : (s + c) % 7 - (o + c) % 7, n);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/DayParser.js
var kE = class extends Z {
	priority = 90;
	parse(e, t, n) {
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEE": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = OE(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
}, AE = class extends Z {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "e":
			case "ee": return rE(sE(t.length, e), i);
			case "eo": return rE(n.ordinalNumber(e, { unit: "day" }), i);
			case "eee": return n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeee": return n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = OE(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"c",
		"t",
		"T"
	];
}, jE = class extends Z {
	priority = 90;
	parse(e, t, n, r) {
		let i = (e) => {
			let t = Math.floor((e - 1) / 7) * 7;
			return (e + r.weekStartsOn + 6) % 7 + t;
		};
		switch (t) {
			case "c":
			case "cc": return rE(sE(t.length, e), i);
			case "co": return rE(n.ordinalNumber(e, { unit: "day" }), i);
			case "ccc": return n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "ccccc": return n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.day(e, {
				width: "wide",
				context: "standalone"
			}) || n.day(e, {
				width: "abbreviated",
				context: "standalone"
			}) || n.day(e, {
				width: "short",
				context: "standalone"
			}) || n.day(e, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 6;
	}
	set(e, t, n, r) {
		return e = OE(e, n, r), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"e",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/date-fns/setISODay.js
function ME(e, t, n) {
	let r = X(e, n?.in);
	return ww(r, t - UT(r, n), n);
}
//#endregion
//#region node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var NE = class extends Z {
	priority = 90;
	parse(e, t, n) {
		let r = (e) => e === 0 ? 7 : e;
		switch (t) {
			case "i":
			case "ii": return sE(t.length, e);
			case "io": return n.ordinalNumber(e, { unit: "day" });
			case "iii": return rE(n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiii": return rE(n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			case "iiiiii": return rE(n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
			default: return rE(n.day(e, {
				width: "wide",
				context: "formatting"
			}) || n.day(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.day(e, {
				width: "short",
				context: "formatting"
			}) || n.day(e, {
				width: "narrow",
				context: "formatting"
			}), r);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 7;
	}
	set(e, t, n) {
		return e = ME(e, n), e.setHours(0, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"E",
		"e",
		"c",
		"t",
		"T"
	];
}, PE = class extends Z {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "a":
			case "aa":
			case "aaa": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "aaaaa": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(lE(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, FE = class extends Z {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "b":
			case "bb":
			case "bbb": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "bbbbb": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(lE(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
}, IE = class extends Z {
	priority = 80;
	parse(e, t, n) {
		switch (t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(e, {
				width: "wide",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "abbreviated",
				context: "formatting"
			}) || n.dayPeriod(e, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(e, t, n) {
		return e.setHours(lE(n), 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
}, LE = class extends Z {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "h": return iE(tE.hour12h, e);
			case "ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return sE(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 12;
	}
	set(e, t, n) {
		let r = e.getHours() >= 12;
		return r && n < 12 ? e.setHours(n + 12, 0, 0, 0) : !r && n === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"H",
		"K",
		"k",
		"t",
		"T"
	];
}, RE = class extends Z {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "H": return iE(tE.hour23h, e);
			case "Ho": return n.ordinalNumber(e, { unit: "hour" });
			default: return sE(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 23;
	}
	set(e, t, n) {
		return e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"K",
		"k",
		"t",
		"T"
	];
}, zE = class extends Z {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "K": return iE(tE.hour11h, e);
			case "Ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return sE(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 11;
	}
	set(e, t, n) {
		return e.getHours() >= 12 && n < 12 ? e.setHours(n + 12, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"h",
		"H",
		"k",
		"t",
		"T"
	];
}, BE = class extends Z {
	priority = 70;
	parse(e, t, n) {
		switch (t) {
			case "k": return iE(tE.hour24h, e);
			case "ko": return n.ordinalNumber(e, { unit: "hour" });
			default: return sE(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 1 && t <= 24;
	}
	set(e, t, n) {
		let r = n <= 24 ? n % 24 : n;
		return e.setHours(r, 0, 0, 0), e;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"H",
		"K",
		"t",
		"T"
	];
}, VE = class extends Z {
	priority = 60;
	parse(e, t, n) {
		switch (t) {
			case "m": return iE(tE.minute, e);
			case "mo": return n.ordinalNumber(e, { unit: "minute" });
			default: return sE(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setMinutes(n, 0, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, HE = class extends Z {
	priority = 50;
	parse(e, t, n) {
		switch (t) {
			case "s": return iE(tE.second, e);
			case "so": return n.ordinalNumber(e, { unit: "second" });
			default: return sE(t.length, e);
		}
	}
	validate(e, t) {
		return t >= 0 && t <= 59;
	}
	set(e, t, n) {
		return e.setSeconds(n, 0), e;
	}
	incompatibleTokens = ["t", "T"];
}, UE = class extends Z {
	priority = 30;
	parse(e, t) {
		return rE(sE(t.length, e), (e) => Math.trunc(e * 10 ** (-t.length + 3)));
	}
	set(e, t, n) {
		return e.setMilliseconds(n), e;
	}
	incompatibleTokens = ["t", "T"];
}, WE = class extends Z {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "X": return aE(nE.basicOptionalMinutes, e);
			case "XX": return aE(nE.basic, e);
			case "XXXX": return aE(nE.basicOptionalSeconds, e);
			case "XXXXX": return aE(nE.extendedOptionalSeconds, e);
			default: return aE(nE.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : Cw(e, e.getTime() - jw(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
}, GE = class extends Z {
	priority = 10;
	parse(e, t) {
		switch (t) {
			case "x": return aE(nE.basicOptionalMinutes, e);
			case "xx": return aE(nE.basic, e);
			case "xxxx": return aE(nE.basicOptionalSeconds, e);
			case "xxxxx": return aE(nE.extendedOptionalSeconds, e);
			default: return aE(nE.extended, e);
		}
	}
	set(e, t, n) {
		return t.timestampIsSet ? e : Cw(e, e.getTime() - jw(e) - n);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
}, KE = class extends Z {
	priority = 40;
	parse(e) {
		return oE(e);
	}
	set(e, t, n) {
		return [Cw(e, n * 1e3), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, qE = class extends Z {
	priority = 20;
	parse(e) {
		return oE(e);
	}
	set(e, t, n) {
		return [Cw(e, n), { timestampIsSet: !0 }];
	}
	incompatibleTokens = "*";
}, JE = {
	G: new eE(),
	y: new fE(),
	Y: new pE(),
	R: new mE(),
	u: new hE(),
	Q: new gE(),
	q: new _E(),
	M: new vE(),
	L: new yE(),
	w: new xE(),
	I: new CE(),
	d: new EE(),
	D: new DE(),
	E: new kE(),
	e: new AE(),
	c: new jE(),
	i: new NE(),
	a: new PE(),
	b: new FE(),
	B: new IE(),
	h: new LE(),
	H: new RE(),
	K: new zE(),
	k: new BE(),
	m: new VE(),
	s: new HE(),
	S: new UE(),
	X: new WE(),
	x: new GE(),
	t: new KE(),
	T: new qE()
}, YE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, XE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ZE = /^'([^]*?)'?$/, QE = /''/g, $E = /\S/, eD = /[a-zA-Z]/;
function tD(e, t, n, r) {
	let i = () => Cw(r?.in || n, NaN), a = HT(), o = r?.locale ?? a.locale ?? dT, s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, c = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
	if (!t) return e ? i() : X(n, r?.in);
	let l = {
		firstWeekContainsDate: s,
		weekStartsOn: c,
		locale: o
	}, u = [new $T(r?.in, n)], d = t.match(XE).map((e) => {
		let t = e[0];
		if (t in ET) {
			let n = ET[t];
			return n(e, o.formatLong);
		}
		return e;
	}).join("").match(YE), f = [];
	for (let n of d) {
		!r?.useAdditionalWeekYearTokens && jT(n) && MT(n, t, e), !r?.useAdditionalDayOfYearTokens && AT(n) && MT(n, t, e);
		let a = n[0], s = JE[a];
		if (s) {
			let { incompatibleTokens: t } = s;
			if (Array.isArray(t)) {
				let e = f.find((e) => t.includes(e.token) || e.token === a);
				if (e) throw RangeError(`The format string mustn't contain \`${e.fullToken}\` and \`${n}\` at the same time`);
			} else if (s.incompatibleTokens === "*" && f.length > 0) throw RangeError(`The format string mustn't contain \`${n}\` and any other token at the same time`);
			f.push({
				token: a,
				fullToken: n
			});
			let r = s.run(e, n, o.match, l);
			if (!r) return i();
			u.push(r.setter), e = r.rest;
		} else {
			if (a.match(eD)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
			if (n === "''" ? n = "'" : a === "'" && (n = nD(n)), e.indexOf(n) === 0) e = e.slice(n.length);
			else return i();
		}
	}
	if (e.length > 0 && $E.test(e)) return i();
	let p = u.map((e) => e.priority).sort((e, t) => t - e).filter((e, t, n) => n.indexOf(e) === t).map((e) => u.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map((e) => e[0]), m = X(n, r?.in);
	if (isNaN(+m)) return i();
	let h = {};
	for (let e of p) {
		if (!e.validate(m, l)) return i();
		let t = e.set(m, h, l);
		Array.isArray(t) ? (m = t[0], Object.assign(h, t[1])) : m = t;
	}
	return m;
}
function nD(e) {
	return e.match(ZE)[1].replace(QE, "'");
}
//#endregion
//#region node_modules/date-fns/isSameMonth.js
function rD(e, t, n) {
	let [r, i] = Mw(n?.in, e, t);
	return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth();
}
//#endregion
//#region node_modules/date-fns/isSameYear.js
function iD(e, t, n) {
	let [r, i] = Mw(n?.in, e, t);
	return r.getFullYear() === i.getFullYear();
}
//#endregion
//#region node_modules/date-fns/setMonth.js
function aD(e, t, n) {
	let r = X(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = Cw(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = VT(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region node_modules/date-fns/setYear.js
function oD(e, t, n) {
	let r = X(e, n?.in);
	return isNaN(+r) ? Cw(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region node_modules/date-fns/subYears.js
function sD(e, t, n) {
	return Lw(e, -t, n);
}
//#endregion
//#region node_modules/date-fns/locale/ko/_lib/formatDistance.js
var cD = {
	lessThanXSeconds: {
		one: "1초 미만",
		other: "{{count}}초 미만"
	},
	xSeconds: {
		one: "1초",
		other: "{{count}}초"
	},
	halfAMinute: "30초",
	lessThanXMinutes: {
		one: "1분 미만",
		other: "{{count}}분 미만"
	},
	xMinutes: {
		one: "1분",
		other: "{{count}}분"
	},
	aboutXHours: {
		one: "약 1시간",
		other: "약 {{count}}시간"
	},
	xHours: {
		one: "1시간",
		other: "{{count}}시간"
	},
	xDays: {
		one: "1일",
		other: "{{count}}일"
	},
	aboutXWeeks: {
		one: "약 1주",
		other: "약 {{count}}주"
	},
	xWeeks: {
		one: "1주",
		other: "{{count}}주"
	},
	aboutXMonths: {
		one: "약 1개월",
		other: "약 {{count}}개월"
	},
	xMonths: {
		one: "1개월",
		other: "{{count}}개월"
	},
	aboutXYears: {
		one: "약 1년",
		other: "약 {{count}}년"
	},
	xYears: {
		one: "1년",
		other: "{{count}}년"
	},
	overXYears: {
		one: "1년 이상",
		other: "{{count}}년 이상"
	},
	almostXYears: {
		one: "거의 1년",
		other: "거의 {{count}}년"
	}
}, lD = (e, t, n) => {
	let r, i = cD[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? r + " 후" : r + " 전" : r;
}, uD = {
	date: tT({
		formats: {
			full: "y년 M월 d일 EEEE",
			long: "y년 M월 d일",
			medium: "y.MM.dd",
			short: "y.MM.dd"
		},
		defaultWidth: "full"
	}),
	time: tT({
		formats: {
			full: "a H시 mm분 ss초 zzzz",
			long: "a H:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: tT({
		formats: {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
}, dD = {
	lastWeek: "'지난' eeee p",
	yesterday: "'어제' p",
	today: "'오늘' p",
	tomorrow: "'내일' p",
	nextWeek: "'다음' eeee p",
	other: "P"
}, fD = {
	code: "ko",
	formatDistance: lD,
	formatLong: uD,
	formatRelative: (e, t, n, r) => dD[e],
	localize: {
		ordinalNumber: (e, t) => {
			let n = Number(e);
			switch (String(t?.unit)) {
				case "minute":
				case "second": return String(n);
				case "date": return n + "일";
				default: return n + "번째";
			}
		},
		era: aT({
			values: {
				narrow: ["BC", "AD"],
				abbreviated: ["BC", "AD"],
				wide: ["기원전", "서기"]
			},
			defaultWidth: "wide"
		}),
		quarter: aT({
			values: {
				narrow: [
					"1",
					"2",
					"3",
					"4"
				],
				abbreviated: [
					"Q1",
					"Q2",
					"Q3",
					"Q4"
				],
				wide: [
					"1분기",
					"2분기",
					"3분기",
					"4분기"
				]
			},
			defaultWidth: "wide",
			argumentCallback: (e) => e - 1
		}),
		month: aT({
			values: {
				narrow: [
					"1",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7",
					"8",
					"9",
					"10",
					"11",
					"12"
				],
				abbreviated: [
					"1월",
					"2월",
					"3월",
					"4월",
					"5월",
					"6월",
					"7월",
					"8월",
					"9월",
					"10월",
					"11월",
					"12월"
				],
				wide: [
					"1월",
					"2월",
					"3월",
					"4월",
					"5월",
					"6월",
					"7월",
					"8월",
					"9월",
					"10월",
					"11월",
					"12월"
				]
			},
			defaultWidth: "wide"
		}),
		day: aT({
			values: {
				narrow: [
					"일",
					"월",
					"화",
					"수",
					"목",
					"금",
					"토"
				],
				short: [
					"일",
					"월",
					"화",
					"수",
					"목",
					"금",
					"토"
				],
				abbreviated: [
					"일",
					"월",
					"화",
					"수",
					"목",
					"금",
					"토"
				],
				wide: [
					"일요일",
					"월요일",
					"화요일",
					"수요일",
					"목요일",
					"금요일",
					"토요일"
				]
			},
			defaultWidth: "wide"
		}),
		dayPeriod: aT({
			values: {
				narrow: {
					am: "오전",
					pm: "오후",
					midnight: "자정",
					noon: "정오",
					morning: "아침",
					afternoon: "오후",
					evening: "저녁",
					night: "밤"
				},
				abbreviated: {
					am: "오전",
					pm: "오후",
					midnight: "자정",
					noon: "정오",
					morning: "아침",
					afternoon: "오후",
					evening: "저녁",
					night: "밤"
				},
				wide: {
					am: "오전",
					pm: "오후",
					midnight: "자정",
					noon: "정오",
					morning: "아침",
					afternoon: "오후",
					evening: "저녁",
					night: "밤"
				}
			},
			defaultWidth: "wide",
			formattingValues: {
				narrow: {
					am: "오전",
					pm: "오후",
					midnight: "자정",
					noon: "정오",
					morning: "아침",
					afternoon: "오후",
					evening: "저녁",
					night: "밤"
				},
				abbreviated: {
					am: "오전",
					pm: "오후",
					midnight: "자정",
					noon: "정오",
					morning: "아침",
					afternoon: "오후",
					evening: "저녁",
					night: "밤"
				},
				wide: {
					am: "오전",
					pm: "오후",
					midnight: "자정",
					noon: "정오",
					morning: "아침",
					afternoon: "오후",
					evening: "저녁",
					night: "밤"
				}
			},
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: uT({
			matchPattern: /^(\d+)(일|번째)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: sT({
			matchPatterns: {
				narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(기원전|서기)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^(bc|기원전)/i, /^(ad|서기)/i] },
			defaultParseWidth: "any"
		}),
		quarter: sT({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234]사?분기/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: sT({
			matchPatterns: {
				narrow: /^(1[012]|[123456789])/,
				abbreviated: /^(1[012]|[123456789])월/i,
				wide: /^(1[012]|[123456789])월/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/^1월?$/,
				/^2/,
				/^3/,
				/^4/,
				/^5/,
				/^6/,
				/^7/,
				/^8/,
				/^9/,
				/^10/,
				/^11/,
				/^12/
			] },
			defaultParseWidth: "any"
		}),
		day: sT({
			matchPatterns: {
				narrow: /^[일월화수목금토]/,
				short: /^[일월화수목금토]/,
				abbreviated: /^[일월화수목금토]/,
				wide: /^[일월화수목금토]요일/
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/^일/,
				/^월/,
				/^화/,
				/^수/,
				/^목/,
				/^금/,
				/^토/
			] },
			defaultParseWidth: "any"
		}),
		dayPeriod: sT({
			matchPatterns: { any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i },
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^(am|오전)/i,
				pm: /^(pm|오후)/i,
				midnight: /^자정/i,
				noon: /^정오/i,
				morning: /^아침/i,
				afternoon: /^오후/i,
				evening: /^저녁/i,
				night: /^밤/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region src/components/ui/popover.tsx
function pD({ ...e }) {
	return /* @__PURE__ */ x(mp, {
		"data-slot": "popover",
		...e
	});
}
function mD({ ...e }) {
	return /* @__PURE__ */ x(gp, {
		"data-slot": "popover-trigger",
		...e
	});
}
function hD({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ x(_p, { children: /* @__PURE__ */ x(vp, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: q("z-50 flex w-72 origin-(--radix-popover-content-transform-origin) flex-col gap-2.5 rounded-none bg-popover p-2.5 text-xs text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r
	}) });
}
function gD({ ...e }) {
	return /* @__PURE__ */ x(hp, {
		"data-slot": "popover-anchor",
		...e
	});
}
//#endregion
//#region node_modules/@date-fns/tz/tzName/index.js
function _D(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region node_modules/@date-fns/tz/tzOffset/index.js
var vD = {}, yD = {};
function bD(e, t) {
	try {
		let n = (vD[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in yD ? yD[n] : SD(n, n.split(":"));
	} catch {
		if (e in yD) return yD[e];
		let t = e?.match(xD);
		return t ? SD(e, t.slice(1)) : NaN;
	}
}
var xD = /([+-]\d\d):?(\d\d)?/;
function SD(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return yD[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
//#endregion
//#region node_modules/@date-fns/tz/date/mini.js
var CD = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(bD(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), DD(this, NaN), TD(this)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -bD(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), TD(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, wD = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!wD.test(e)) return;
	let t = e.replace(wD, "$1UTC");
	CD.prototype[t] && (e.startsWith("get") ? CD.prototype[e] = function() {
		return this.internal[t]();
	} : (CD.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), ED(this), +this;
	}, CD.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), TD(this), +this;
	}));
});
function TD(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-bD(e.timeZone, e) * 60));
}
function ED(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), DD(e);
}
function DD(e) {
	let t = bD(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
	r.setUTCHours(r.getUTCHours() - 1);
	let i = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = i - -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), o = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
	a && o && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
	let s = i - n;
	s && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + s);
	let c = /* @__PURE__ */ new Date(+e);
	c.setUTCSeconds(0);
	let l = i > 0 ? c.getSeconds() : (c.getSeconds() - 60) % 60, u = Math.round(-(bD(e.timeZone, e) * 60)) % 60;
	(u || l) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + u), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + u + l));
	let d = bD(e.timeZone, e), f = d > 0 ? Math.floor(d) : Math.ceil(d), p = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - f, m = f !== n, h = p - s;
	if (m && h) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + h);
		let t = bD(e.timeZone, e), n = f - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + n), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n));
	}
}
//#endregion
//#region node_modules/@date-fns/tz/date/index.js
var OD = class e extends CD {
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	toISOString() {
		let [e, t, n] = this.tzComponents(), r = `${e}${t}:${n}`;
		return this.internal.toISOString().slice(0, -1) + r;
	}
	toString() {
		return `${this.toDateString()} ${this.toTimeString()}`;
	}
	toDateString() {
		let [e, t, n, r] = this.internal.toUTCString().split(" ");
		return `${e?.slice(0, -1)} ${n} ${t} ${r}`;
	}
	toTimeString() {
		let e = this.internal.toUTCString().split(" ")[4], [t, n, r] = this.tzComponents();
		return `${e} GMT${t}${n}${r} (${_D(this.timeZone, this)})`;
	}
	toLocaleString(e, t) {
		return Date.prototype.toLocaleString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleDateString(e, t) {
		return Date.prototype.toLocaleDateString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleTimeString(e, t) {
		return Date.prototype.toLocaleTimeString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	tzComponents() {
		let e = this.getTimezoneOffset();
		return [
			e > 0 ? "-" : "+",
			String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"),
			String(Math.abs(e) % 60).padStart(2, "0")
		];
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, kD = 5, AD = 4;
function jD(e, t) {
	let n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, i = t.addDays(e, -r + 1), a = t.addDays(i, kD * 7 - 1);
	return t.getMonth(e) === t.getMonth(a) ? kD : AD;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
function MD(e, t) {
	let n = t.startOfMonth(e), r = n.getDay();
	return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
function ND(e, t) {
	let n = MD(e, t), r = jD(e, t);
	return t.addDays(n, r * 7 - 1);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/locale/en-US.js
var PD = {
	...dT,
	labels: {
		labelDayButton: (e, t, n, r) => {
			let i;
			i = r && typeof r.format == "function" ? r.format.bind(r) : (e, t) => zT(e, t, {
				locale: dT,
				...n
			});
			let a = i(e, "PPPP");
			return t.today && (a = `Today, ${a}`), t.selected && (a = `${a}, selected`), a;
		},
		labelMonthDropdown: "Choose the Month",
		labelNext: "Go to the Next Month",
		labelPrevious: "Go to the Previous Month",
		labelWeekNumber: (e) => `Week ${e}`,
		labelYearDropdown: "Choose the Year",
		labelGrid: (e, t, n) => {
			let r;
			return r = n && typeof n.format == "function" ? n.format.bind(n) : (e, n) => zT(e, n, {
				locale: dT,
				...t
			}), r(e, "LLLL yyyy");
		},
		labelGridcell: (e, t, n, r) => {
			let i;
			i = r && typeof r.format == "function" ? r.format.bind(r) : (e, t) => zT(e, t, {
				locale: dT,
				...n
			});
			let a = i(e, "PPPP");
			return t?.today && (a = `Today, ${a}`), a;
		},
		labelNav: "Navigation bar",
		labelWeekNumberHeader: "Week Number",
		labelWeekday: (e, t, n) => {
			let r;
			return r = n && typeof n.format == "function" ? n.format.bind(n) : (e, n) => zT(e, n, {
				locale: dT,
				...t
			}), r(e, "cccc");
		}
	}
}, FD = class e {
	constructor(e, t) {
		this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? OD.tz(this.options.timeZone) : new this.Date(), this.newDate = (e, t, n) => this.overrides?.newDate ? this.overrides.newDate(e, t, n) : this.options.timeZone ? new OD(e, t, n, this.options.timeZone) : new Date(e, t, n), this.addDays = (e, t) => this.overrides?.addDays ? this.overrides.addDays(e, t) : ww(e, t), this.addMonths = (e, t) => this.overrides?.addMonths ? this.overrides.addMonths(e, t) : Tw(e, t), this.addWeeks = (e, t) => this.overrides?.addWeeks ? this.overrides.addWeeks(e, t) : Iw(e, t), this.addYears = (e, t) => this.overrides?.addYears ? this.overrides.addYears(e, t) : Lw(e, t), this.differenceInCalendarDays = (e, t) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(e, t) : Pw(e, t), this.differenceInCalendarMonths = (e, t) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(e, t) : Uw(e, t), this.eachMonthOfInterval = (e) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(e) : Kw(e), this.eachYearOfInterval = (e) => {
			let t = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(e) : Xw(e), n = new Set(t.map((e) => this.getYear(e)));
			if (n.size === t.length) return t;
			let r = [];
			return n.forEach((e) => {
				r.push(new Date(e, 0, 1));
			}), r;
		}, this.endOfBroadcastWeek = (e) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(e) : ND(e, this), this.endOfISOWeek = (e) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(e) : Qw(e), this.endOfMonth = (e) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(e) : Ww(e), this.endOfWeek = (e, t) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(e, t) : Zw(e, this.options), this.endOfYear = (e) => this.overrides?.endOfYear ? this.overrides.endOfYear(e) : Jw(e), this.format = (e, t, n) => {
			let r = this.overrides?.format ? this.overrides.format(e, t, this.options) : zT(e, t, this.options);
			return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(r) : r;
		}, this.getISOWeek = (e) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(e) : pT(e), this.getMonth = (e, t) => this.overrides?.getMonth ? this.overrides.getMonth(e, this.options) : WT(e, this.options), this.getYear = (e, t) => this.overrides?.getYear ? this.overrides.getYear(e, this.options) : GT(e, this.options), this.getWeek = (e, t) => this.overrides?.getWeek ? this.overrides.getWeek(e, this.options) : gT(e, this.options), this.isAfter = (e, t) => this.overrides?.isAfter ? this.overrides.isAfter(e, t) : KT(e, t), this.isBefore = (e, t) => this.overrides?.isBefore ? this.overrides.isBefore(e, t) : qT(e, t), this.isDate = (e) => this.overrides?.isDate ? this.overrides.isDate(e) : Vw(e), this.isSameDay = (e, t) => this.overrides?.isSameDay ? this.overrides.isSameDay(e, t) : Bw(e, t), this.isSameMonth = (e, t) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(e, t) : rD(e, t), this.isSameYear = (e, t) => this.overrides?.isSameYear ? this.overrides.isSameYear(e, t) : iD(e, t), this.max = (e) => this.overrides?.max ? this.overrides.max(e) : Rw(e), this.min = (e) => this.overrides?.min ? this.overrides.min(e) : zw(e), this.setMonth = (e, t) => this.overrides?.setMonth ? this.overrides.setMonth(e, t) : aD(e, t), this.setYear = (e, t) => this.overrides?.setYear ? this.overrides.setYear(e, t) : oD(e, t), this.startOfBroadcastWeek = (e, t) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(e, this) : MD(e, this), this.startOfDay = (e) => this.overrides?.startOfDay ? this.overrides.startOfDay(e) : Nw(e), this.startOfISOWeek = (e) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(e) : kw(e), this.startOfMonth = (e) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(e) : qw(e), this.startOfWeek = (e, t) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(e, this.options) : Ow(e, this.options), this.startOfYear = (e) => this.overrides?.startOfYear ? this.overrides.startOfYear(e) : Yw(e), this.options = {
			locale: PD,
			...e
		}, this.overrides = t;
	}
	getDigitMap() {
		let { numerals: e = "latn" } = this.options, t = new Intl.NumberFormat("en-US", { numberingSystem: e }), n = {};
		for (let e = 0; e < 10; e++) n[e.toString()] = t.format(e);
		return n;
	}
	replaceDigits(e) {
		let t = this.getDigitMap();
		return e.replace(/\d/g, (e) => t[e] || e);
	}
	formatNumber(e) {
		return this.replaceDigits(e.toString());
	}
	getMonthYearOrder() {
		let t = this.options.locale?.code;
		return t && e.yearFirstLocales.has(t) ? "year-first" : "month-first";
	}
	formatMonthYear(t) {
		let { locale: n, timeZone: r, numerals: i } = this.options, a = n?.code;
		if (a && e.yearFirstLocales.has(a)) try {
			return new Intl.DateTimeFormat(a, {
				month: "long",
				year: "numeric",
				timeZone: r,
				numberingSystem: i
			}).format(t);
		} catch {}
		let o = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
		return this.format(t, o);
	}
};
FD.yearFirstLocales = new Set([
	"eu",
	"hu",
	"ja",
	"ja-Hira",
	"ja-JP",
	"ko",
	"ko-KR",
	"lt",
	"lt-LT",
	"lv",
	"lv-LV",
	"mn",
	"mn-MN",
	"zh",
	"zh-CN",
	"zh-HK",
	"zh-TW"
]);
var ID = new FD(), LD = class {
	constructor(e, t, n = ID) {
		this.date = e, this.displayMonth = t, this.outside = !!(t && !n.isSameMonth(e, t)), this.dateLib = n, this.isoDate = n.format(e, "yyyy-MM-dd"), this.displayMonthId = n.format(t, "yyyy-MM"), this.dateMonthId = n.format(e, "yyyy-MM");
	}
	isEqualTo(e) {
		return this.dateLib.isSameDay(e.date, this.date) && this.dateLib.isSameMonth(e.displayMonth, this.displayMonth);
	}
}, RD = class {
	constructor(e, t) {
		this.date = e, this.weeks = t;
	}
}, zD = class {
	constructor(e, t) {
		this.days = t, this.weekNumber = e;
	}
};
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Button.js
function BD(e) {
	return t.createElement("button", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
function VD(e) {
	return t.createElement("span", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Chevron.js
function HD(e) {
	let { size: n = 24, orientation: r = "left", className: i } = e;
	return t.createElement("svg", {
		className: i,
		width: n,
		height: n,
		viewBox: "0 0 24 24"
	}, r === "up" && t.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }), r === "down" && t.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }), r === "left" && t.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }), r === "right" && t.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" }));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Day.js
function UD(e) {
	let { day: n, modifiers: r, ...i } = e;
	return t.createElement("td", { ...i });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/DayButton.js
function WD(e) {
	let { day: n, modifiers: r, ...i } = e, a = t.useRef(null);
	return t.useEffect(() => {
		r.focused && a.current?.focus();
	}, [r.focused]), t.createElement("button", {
		ref: a,
		...i
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/UI.js
var Q;
(function(e) {
	e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(Q ||= {});
var GD;
(function(e) {
	e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(GD ||= {});
var KD;
(function(e) {
	e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(KD ||= {});
var qD;
(function(e) {
	e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(qD ||= {});
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Dropdown.js
function JD(e) {
	let { options: n, className: r, components: i, classNames: a, ...o } = e, s = [a[Q.Dropdown], r].join(" "), c = n?.find(({ value: e }) => e === o.value);
	return t.createElement("span", {
		"data-disabled": o.disabled,
		className: a[Q.DropdownRoot]
	}, t.createElement(i.Select, {
		className: s,
		...o
	}, n?.map(({ value: e, label: n, disabled: r }) => t.createElement(i.Option, {
		key: e,
		value: e,
		disabled: r
	}, n))), t.createElement("span", {
		className: a[Q.CaptionLabel],
		"aria-hidden": !0
	}, c?.label, t.createElement(i.Chevron, {
		orientation: "down",
		size: 18,
		className: a[Q.Chevron]
	})));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/DropdownNav.js
function YD(e) {
	return t.createElement("div", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Footer.js
function XD(e) {
	return t.createElement("div", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Month.js
function ZD(e) {
	let { calendarMonth: n, displayIndex: r, ...i } = e;
	return t.createElement("div", { ...i }, e.children);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/MonthCaption.js
function QD(e) {
	let { calendarMonth: n, displayIndex: r, ...i } = e;
	return t.createElement("div", { ...i });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/MonthGrid.js
function $D(e) {
	return t.createElement("table", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Months.js
function eO(e) {
	return t.createElement("div", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/useDayPicker.js
var tO = a(void 0);
function nO() {
	let e = d(tO);
	if (e === void 0) throw Error("useDayPicker() must be used within a custom component.");
	return e;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
function rO(e) {
	let { components: n } = nO();
	return t.createElement(n.Dropdown, { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Nav.js
function iO(e) {
	let { onPreviousClick: n, onNextClick: r, previousMonth: i, nextMonth: a, ...o } = e, { components: s, classNames: c, labels: { labelPrevious: l, labelNext: d } } = nO(), f = u((e) => {
		a && r?.(e);
	}, [a, r]), p = u((e) => {
		i && n?.(e);
	}, [i, n]);
	return t.createElement("nav", { ...o }, t.createElement(s.PreviousMonthButton, {
		type: "button",
		className: c[Q.PreviousMonthButton],
		tabIndex: i ? void 0 : -1,
		"aria-disabled": i ? void 0 : !0,
		"aria-label": l(i),
		onClick: p
	}, t.createElement(s.Chevron, {
		disabled: i ? void 0 : !0,
		className: c[Q.Chevron],
		orientation: "left"
	})), t.createElement(s.NextMonthButton, {
		type: "button",
		className: c[Q.NextMonthButton],
		tabIndex: a ? void 0 : -1,
		"aria-disabled": a ? void 0 : !0,
		"aria-label": d(a),
		onClick: f
	}, t.createElement(s.Chevron, {
		disabled: a ? void 0 : !0,
		orientation: "right",
		className: c[Q.Chevron]
	})));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
function aO(e) {
	let { components: n } = nO();
	return t.createElement(n.Button, { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Option.js
function oO(e) {
	return t.createElement("option", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
function sO(e) {
	let { components: n } = nO();
	return t.createElement(n.Button, { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Root.js
function cO(e) {
	let { rootRef: n, ...r } = e;
	return t.createElement("div", {
		...r,
		ref: n
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Select.js
function lO(e) {
	return t.createElement("select", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Week.js
function uO(e) {
	let { week: n, ...r } = e;
	return t.createElement("tr", { ...r });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Weekday.js
function dO(e) {
	return t.createElement("th", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Weekdays.js
function fO(e) {
	return t.createElement("thead", { "aria-hidden": !0 }, t.createElement("tr", { ...e }));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/WeekNumber.js
function pO(e) {
	let { week: n, ...r } = e;
	return t.createElement("th", { ...r });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
function mO(e) {
	return t.createElement("th", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Weeks.js
function hO(e) {
	return t.createElement("tbody", { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
function gO(e) {
	let { components: n } = nO();
	return t.createElement(n.Dropdown, { ...e });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/custom-components.js
var _O = /* @__PURE__ */ Je({
	Button: () => BD,
	CaptionLabel: () => VD,
	Chevron: () => HD,
	Day: () => UD,
	DayButton: () => WD,
	Dropdown: () => JD,
	DropdownNav: () => YD,
	Footer: () => XD,
	Month: () => ZD,
	MonthCaption: () => QD,
	MonthGrid: () => $D,
	Months: () => eO,
	MonthsDropdown: () => rO,
	Nav: () => iO,
	NextMonthButton: () => aO,
	Option: () => oO,
	PreviousMonthButton: () => sO,
	Root: () => cO,
	Select: () => lO,
	Week: () => uO,
	WeekNumber: () => pO,
	WeekNumberHeader: () => mO,
	Weekday: () => dO,
	Weekdays: () => fO,
	Weeks: () => hO,
	YearsDropdown: () => gO
});
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
function vO(e, t, n = !1, r = ID) {
	let { from: i, to: a } = e, { differenceInCalendarDays: o, isSameDay: s } = r;
	return i && a ? (o(a, i) < 0 && ([i, a] = [a, i]), o(t, i) >= +!!n && o(a, t) >= +!!n) : !n && a ? s(a, t) : !n && i ? s(i, t) : !1;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/typeguards.js
function yO(e) {
	return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function bO(e) {
	return !!(e && typeof e == "object" && "from" in e);
}
function xO(e) {
	return !!(e && typeof e == "object" && "after" in e);
}
function SO(e) {
	return !!(e && typeof e == "object" && "before" in e);
}
function CO(e) {
	return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function wO(e, t) {
	return Array.isArray(e) && e.every(t.isDate);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
function TO(e, t, n = ID) {
	let r = Array.isArray(t) ? t : [t], { isSameDay: i, differenceInCalendarDays: a, isAfter: o } = n;
	return r.some((t) => {
		if (typeof t == "boolean") return t;
		if (n.isDate(t)) return i(e, t);
		if (wO(t, n)) return t.some((t) => i(e, t));
		if (bO(t)) return vO(t, e, !1, n);
		if (CO(t)) return Array.isArray(t.dayOfWeek) ? t.dayOfWeek.includes(e.getDay()) : t.dayOfWeek === e.getDay();
		if (yO(t)) {
			let n = a(t.before, e), r = a(t.after, e), i = n > 0, s = r < 0;
			return o(t.before, t.after) ? s && i : i || s;
		}
		return xO(t) ? a(e, t.after) > 0 : SO(t) ? a(t.before, e) > 0 : typeof t == "function" ? t(e) : !1;
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
function EO(e, t, n, r, i) {
	let { disabled: a, hidden: o, modifiers: s, showOutsideDays: c, broadcastCalendar: l, today: u = i.today() } = t, { isSameDay: d, isSameMonth: f, startOfMonth: p, isBefore: m, endOfMonth: h, isAfter: g } = i, _ = n && p(n), v = r && h(r), y = {
		[GD.focused]: [],
		[GD.outside]: [],
		[GD.disabled]: [],
		[GD.hidden]: [],
		[GD.today]: []
	}, b = {};
	for (let t of e) {
		let { date: e, displayMonth: n } = t, r = !!(n && !f(e, n)), p = !!(_ && m(e, _)), h = !!(v && g(e, v)), x = !!(a && TO(e, a, i)), S = !!(o && TO(e, o, i)) || p || h || !l && !c && r || l && c === !1 && r, C = d(e, u);
		r && y.outside.push(t), x && y.disabled.push(t), S && y.hidden.push(t), C && y.today.push(t), s && Object.keys(s).forEach((n) => {
			let r = s?.[n];
			r && TO(e, r, i) && (b[n] ? b[n].push(t) : b[n] = [t]);
		});
	}
	return (e) => {
		let t = {
			[GD.focused]: !1,
			[GD.disabled]: !1,
			[GD.hidden]: !1,
			[GD.outside]: !1,
			[GD.today]: !1
		}, n = {};
		for (let n in y) t[n] = y[n].some((t) => t === e);
		for (let t in b) n[t] = b[t].some((t) => t === e);
		return {
			...t,
			...n
		};
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
function DO(e, t, n = {}) {
	return Object.entries(e).filter(([, e]) => e === !0).reduce((e, [r]) => (n[r] ? e.push(n[r]) : t[GD[r]] ? e.push(t[GD[r]]) : t[KD[r]] && e.push(t[KD[r]]), e), [t[Q.Day]]);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getComponents.js
function OO(e) {
	return {
		..._O,
		...e
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
function kO(e) {
	let t = {
		"data-mode": e.mode ?? void 0,
		"data-required": "required" in e ? e.required : void 0,
		"data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
		"data-week-numbers": e.showWeekNumber || void 0,
		"data-broadcast-calendar": e.broadcastCalendar || void 0,
		"data-nav-layout": e.navLayout || void 0
	};
	return Object.entries(e).forEach(([e, n]) => {
		e.startsWith("data-") && (t[e] = n);
	}), t;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
function AO() {
	let e = {};
	for (let t in Q) e[Q[t]] = `rdp-${Q[t]}`;
	for (let t in GD) e[GD[t]] = `rdp-${GD[t]}`;
	for (let t in KD) e[KD[t]] = `rdp-${KD[t]}`;
	for (let t in qD) e[qD[t]] = `rdp-${qD[t]}`;
	return e;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
function jO(e, t, n) {
	return (n ?? new FD(t)).formatMonthYear(e);
}
var MO = jO;
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatDay.js
function NO(e, t, n) {
	return (n ?? new FD(t)).format(e, "d");
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
function PO(e, t = ID) {
	return t.format(e, "LLLL");
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
function FO(e, t, n) {
	return (n ?? new FD(t)).format(e, "cccccc");
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
function IO(e, t = ID) {
	return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
function LO() {
	return "";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
function RO(e, t = ID) {
	return t.format(e, "yyyy");
}
var zO = RO, BO = /* @__PURE__ */ Je({
	formatCaption: () => jO,
	formatDay: () => NO,
	formatMonthCaption: () => MO,
	formatMonthDropdown: () => PO,
	formatWeekNumber: () => IO,
	formatWeekNumberHeader: () => LO,
	formatWeekdayName: () => FO,
	formatYearCaption: () => zO,
	formatYearDropdown: () => RO
});
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
function VO(e) {
	return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
		...BO,
		...e
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
function HO(e, t, n, r) {
	let i = (r ?? new FD(n)).format(e, "PPPP");
	return t.today && (i = `Today, ${i}`), t.selected && (i = `${i}, selected`), i;
}
var UO = HO;
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelGrid.js
function WO(e, t, n) {
	return (n ?? new FD(t)).formatMonthYear(e);
}
var GO = WO;
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
function KO(e, t, n, r) {
	let i = (r ?? new FD(n)).format(e, "PPPP");
	return t?.today && (i = `Today, ${i}`), i;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
function qO(e) {
	return "Choose the Month";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelNav.js
function JO() {
	return "";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelNext.js
var YO = "Go to the Next Month";
function XO(e, t) {
	return YO;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
function ZO(e) {
	return "Go to the Previous Month";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
function QO(e, t, n) {
	return (n ?? new FD(t)).format(e, "cccc");
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
function $O(e, t) {
	return `Week ${e}`;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
function ek(e) {
	return "Week Number";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
function tk(e) {
	return "Choose the Year";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/index.js
var nk = /* @__PURE__ */ Je({
	labelCaption: () => GO,
	labelDay: () => UO,
	labelDayButton: () => HO,
	labelGrid: () => WO,
	labelGridcell: () => KO,
	labelMonthDropdown: () => qO,
	labelNav: () => JO,
	labelNext: () => XO,
	labelPrevious: () => ZO,
	labelWeekNumber: () => $O,
	labelWeekNumberHeader: () => ek,
	labelWeekday: () => QO,
	labelYearDropdown: () => tk
}), rk = (e, t, n) => t || (n ? typeof n == "function" ? n : (...e) => n : e);
function ik(e, t) {
	let n = t.locale?.labels ?? {};
	return {
		...nk,
		...e ?? {},
		labelDayButton: rk(HO, e?.labelDayButton, n.labelDayButton),
		labelMonthDropdown: rk(qO, e?.labelMonthDropdown, n.labelMonthDropdown),
		labelNext: rk(XO, e?.labelNext, n.labelNext),
		labelPrevious: rk(ZO, e?.labelPrevious, n.labelPrevious),
		labelWeekNumber: rk($O, e?.labelWeekNumber, n.labelWeekNumber),
		labelYearDropdown: rk(tk, e?.labelYearDropdown, n.labelYearDropdown),
		labelGrid: rk(WO, e?.labelGrid, n.labelGrid),
		labelGridcell: rk(KO, e?.labelGridcell, n.labelGridcell),
		labelNav: rk(JO, e?.labelNav, n.labelNav),
		labelWeekNumberHeader: rk(ek, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
		labelWeekday: rk(QO, e?.labelWeekday, n.labelWeekday)
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
function ak(e, t, n, r, i) {
	let { startOfMonth: a, startOfYear: o, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = i;
	return c({
		start: o(e),
		end: s(e)
	}).map((e) => {
		let o = r.formatMonthDropdown(e, i);
		return {
			value: l(e),
			label: o,
			disabled: t && e < a(t) || n && e > a(n) || !1
		};
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
function ok(e, t = {}, n = {}) {
	let r = { ...t?.[Q.Day] };
	return Object.entries(e).filter(([, e]) => e === !0).forEach(([e]) => {
		r = {
			...r,
			...n?.[e]
		};
	}), r;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
function sk(e, t, n, r) {
	let i = r ?? e.today(), a = n ? e.startOfBroadcastWeek(i, e) : t ? e.startOfISOWeek(i) : e.startOfWeek(i), o = [];
	for (let t = 0; t < 7; t++) {
		let n = e.addDays(a, t);
		o.push(n);
	}
	return o;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
function ck(e, t, n, r, i = !1) {
	if (!e || !t) return;
	let { startOfYear: a, endOfYear: o, eachYearOfInterval: s, getYear: c } = r, l = s({
		start: a(e),
		end: o(t)
	});
	return i && l.reverse(), l.map((e) => {
		let t = n.formatYearDropdown(e, r);
		return {
			value: c(e),
			label: t,
			disabled: !1
		};
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/noonDateLib.js
function lk(e, t = {}) {
	let { weekStartsOn: n, locale: r } = t, i = n ?? r?.options?.weekStartsOn ?? 0, a = (t) => {
		let n = typeof t == "number" || typeof t == "string" ? new Date(t) : t;
		return new OD(n.getFullYear(), n.getMonth(), n.getDate(), 12, 0, 0, e);
	}, o = (e) => {
		let t = a(e);
		return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
	};
	return {
		today: () => a(OD.tz(e)),
		newDate: (t, n, r) => new OD(t, n, r, 12, 0, 0, e),
		startOfDay: (e) => a(e),
		startOfWeek: (e, t) => {
			let n = a(e), r = t?.weekStartsOn ?? i, o = (n.getDay() - r + 7) % 7;
			return n.setDate(n.getDate() - o), n;
		},
		startOfISOWeek: (e) => {
			let t = a(e), n = (t.getDay() - 1 + 7) % 7;
			return t.setDate(t.getDate() - n), t;
		},
		startOfMonth: (e) => {
			let t = a(e);
			return t.setDate(1), t;
		},
		startOfYear: (e) => {
			let t = a(e);
			return t.setMonth(0, 1), t;
		},
		endOfWeek: (e, t) => {
			let n = a(e), r = (((t?.weekStartsOn ?? i) + 6) % 7 - n.getDay() + 7) % 7;
			return n.setDate(n.getDate() + r), n;
		},
		endOfISOWeek: (e) => {
			let t = a(e), n = (7 - t.getDay()) % 7;
			return t.setDate(t.getDate() + n), t;
		},
		endOfMonth: (e) => {
			let t = a(e);
			return t.setMonth(t.getMonth() + 1, 0), t;
		},
		endOfYear: (e) => {
			let t = a(e);
			return t.setMonth(11, 31), t;
		},
		eachMonthOfInterval: (t) => {
			let n = a(t.start), r = a(t.end), i = [], o = new OD(n.getFullYear(), n.getMonth(), 1, 12, 0, 0, e), s = r.getFullYear() * 12 + r.getMonth();
			for (; o.getFullYear() * 12 + o.getMonth() <= s;) i.push(new OD(o, e)), o.setMonth(o.getMonth() + 1, 1);
			return i;
		},
		addDays: (e, t) => {
			let n = a(e);
			return n.setDate(n.getDate() + t), n;
		},
		addWeeks: (e, t) => {
			let n = a(e);
			return n.setDate(n.getDate() + t * 7), n;
		},
		addMonths: (e, t) => {
			let n = a(e);
			return n.setMonth(n.getMonth() + t), n;
		},
		addYears: (e, t) => {
			let n = a(e);
			return n.setFullYear(n.getFullYear() + t), n;
		},
		eachYearOfInterval: (t) => {
			let n = a(t.start), r = a(t.end), i = [], o = new OD(n.getFullYear(), 0, 1, 12, 0, 0, e);
			for (; o.getFullYear() <= r.getFullYear();) i.push(new OD(o, e)), o.setFullYear(o.getFullYear() + 1, 0, 1);
			return i;
		},
		getWeek: (e, t) => gT(o(e), {
			weekStartsOn: t?.weekStartsOn ?? i,
			firstWeekContainsDate: t?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
		}),
		getISOWeek: (e) => pT(o(e)),
		differenceInCalendarDays: (e, t) => Pw(o(e), o(t)),
		differenceInCalendarMonths: (e, t) => Uw(o(e), o(t))
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/useAnimation.js
var uk = (e) => e instanceof HTMLElement ? e : null, dk = (e) => [...e.querySelectorAll("[data-animated-month]") ?? []], fk = (e) => uk(e.querySelector("[data-animated-month]")), pk = (e) => uk(e.querySelector("[data-animated-caption]")), mk = (e) => uk(e.querySelector("[data-animated-weeks]")), hk = (e) => uk(e.querySelector("[data-animated-nav]")), gk = (e) => uk(e.querySelector("[data-animated-weekdays]"));
function _k(e, t, { classNames: n, months: r, focused: i, dateLib: a }) {
	let o = h(null), s = h(r), c = h(!1);
	p(() => {
		let l = s.current;
		if (s.current = r, !t || !e.current || !(e.current instanceof HTMLElement) || r.length === 0 || l.length === 0 || r.length !== l.length) return;
		let u = a.isSameMonth(r[0].date, l[0].date), d = a.isAfter(r[0].date, l[0].date), f = d ? n[qD.caption_after_enter] : n[qD.caption_before_enter], p = d ? n[qD.weeks_after_enter] : n[qD.weeks_before_enter], m = o.current, h = e.current.cloneNode(!0);
		if (h instanceof HTMLElement ? (dk(h).forEach((e) => {
			if (!(e instanceof HTMLElement)) return;
			let t = fk(e);
			t && e.contains(t) && e.removeChild(t);
			let n = pk(e);
			n && n.classList.remove(f);
			let r = mk(e);
			r && r.classList.remove(p);
		}), o.current = h) : o.current = null, c.current || u || i) return;
		let g = m instanceof HTMLElement ? dk(m) : [], _ = dk(e.current);
		if (_?.every((e) => e instanceof HTMLElement) && g && g.every((e) => e instanceof HTMLElement)) {
			c.current = !0;
			let t = [];
			e.current.style.isolation = "isolate";
			let r = hk(e.current);
			r && (r.style.zIndex = "1"), _.forEach((i, a) => {
				let o = g[a];
				if (!o) return;
				i.style.position = "relative", i.style.overflow = "hidden";
				let s = pk(i);
				s && s.classList.add(f);
				let l = mk(i);
				l && l.classList.add(p);
				let u = () => {
					c.current = !1, e.current && (e.current.style.isolation = ""), r && (r.style.zIndex = ""), s && s.classList.remove(f), l && l.classList.remove(p), i.style.position = "", i.style.overflow = "", i.contains(o) && i.removeChild(o);
				};
				t.push(u), o.style.pointerEvents = "none", o.style.position = "absolute", o.style.overflow = "hidden", o.setAttribute("aria-hidden", "true");
				let m = gk(o);
				m && (m.style.opacity = "0");
				let h = pk(o);
				h && (h.classList.add(d ? n[qD.caption_before_exit] : n[qD.caption_after_exit]), h.addEventListener("animationend", u));
				let _ = mk(o);
				_ && _.classList.add(d ? n[qD.weeks_before_exit] : n[qD.weeks_after_exit]), i.insertBefore(o, i.firstChild);
			});
		}
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getDates.js
function vk(e, t, n, r) {
	let i = e[0], a = e[e.length - 1], { ISOWeek: o, fixedWeeks: s, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: d, endOfBroadcastWeek: f, endOfISOWeek: p, endOfMonth: m, endOfWeek: h, isAfter: g, startOfBroadcastWeek: _, startOfISOWeek: v, startOfWeek: y } = r, b = c ? _(i, r) : o ? v(i) : y(i), x = c ? f(a) : o ? p(m(a)) : h(m(a)), S = t && (c ? f(t) : o ? p(t) : h(t)), C = u(S && g(x, S) ? S : x, b), w = d(a, i) + 1, T = [];
	for (let e = 0; e <= C; e++) {
		let t = l(b, e);
		T.push(t);
	}
	let E = (c ? 35 : 42) * w;
	if (s && T.length < E) {
		let e = E - T.length;
		for (let t = 0; t < e; t++) {
			let e = l(T[T.length - 1], 1);
			T.push(e);
		}
	}
	return T;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getDays.js
function yk(e) {
	let t = [];
	return e.reduce((e, n) => {
		let r = n.weeks.reduce((e, t) => e.concat(t.days.slice()), t.slice());
		return e.concat(r.slice());
	}, t.slice());
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
function bk(e, t, n, r) {
	let { numberOfMonths: i = 1 } = n, a = [];
	for (let n = 0; n < i; n++) {
		let i = r.addMonths(e, n);
		if (t && i > t) break;
		a.push(i);
	}
	return a;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
function xk(e, t, n, r) {
	let { month: i, defaultMonth: a, today: o = r.today(), numberOfMonths: s = 1 } = e, c = i || a || o, { differenceInCalendarMonths: l, addMonths: u, startOfMonth: d } = r;
	return n && l(n, c) < s - 1 && (c = u(n, -1 * (s - 1))), t && l(c, t) < 0 && (c = t), d(c);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getMonths.js
function Sk(e, t, n, r) {
	let { addDays: i, endOfBroadcastWeek: a, endOfISOWeek: o, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: d, startOfISOWeek: f, startOfWeek: p } = r, m = e.reduce((e, m) => {
		let h = n.broadcastCalendar ? d(m, r) : n.ISOWeek ? f(m) : p(m), g = n.broadcastCalendar ? a(m) : n.ISOWeek ? o(s(m)) : c(s(m)), _ = t.filter((e) => e >= h && e <= g), v = n.broadcastCalendar ? 35 : 42;
		if (n.fixedWeeks && _.length < v) {
			let e = t.filter((e) => {
				let t = v - _.length;
				return e > g && e <= i(g, t);
			});
			_.push(...e);
		}
		let y = new RD(m, _.reduce((e, t) => {
			let i = n.ISOWeek ? l(t) : u(t), a = e.find((e) => e.weekNumber === i), o = new LD(t, m, r);
			return a ? a.days.push(o) : e.push(new zD(i, [o])), e;
		}, []));
		return e.push(y), e;
	}, []);
	return n.reverseMonths ? m.reverse() : m;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
function Ck(e, t) {
	let { startMonth: n, endMonth: r } = e, { startOfYear: i, startOfDay: a, startOfMonth: o, endOfMonth: s, addYears: c, endOfYear: l, newDate: u, today: d } = t, { fromYear: f, toYear: p, fromMonth: m, toMonth: h } = e;
	!n && m && (n = m), !n && f && (n = t.newDate(f, 0, 1)), !r && h && (r = h), !r && p && (r = u(p, 11, 31));
	let g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
	return n ? n = o(n) : f ? n = u(f, 0, 1) : !n && g && (n = i(c(e.today ?? d(), -100))), r ? r = s(r) : p ? r = u(p, 11, 31) : !r && g && (r = l(e.today ?? d())), [n && a(n), r && a(r)];
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
function wk(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a = 1 } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a : 1, u = o(e);
	if (!t || !(c(t, e) < a)) return s(u, l);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
function Tk(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a ?? 1 : 1, u = o(e);
	if (!t || !(c(u, t) <= 0)) return s(u, -l);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
function Ek(e) {
	return e.reduce((e, t) => e.concat(t.weeks.slice()), [].slice());
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
function Dk(e, t) {
	let [n, r] = g(e);
	return [t === void 0 ? n : t, r];
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/useCalendar.js
function Ok(e, t) {
	let [n, r] = Ck(e, t), { startOfMonth: i, endOfMonth: a } = t, o = xk(e, n, r, t), [s, c] = Dk(o, e.month ? o : void 0);
	f(() => {
		c(xk(e, n, r, t));
	}, [e.timeZone]);
	let { months: l, weeks: u, days: d, previousMonth: p, nextMonth: h } = m(() => {
		let i = bk(s, r, { numberOfMonths: e.numberOfMonths }, t), o = Sk(i, vk(i, e.endMonth ? a(e.endMonth) : void 0, {
			ISOWeek: e.ISOWeek,
			fixedWeeks: e.fixedWeeks,
			broadcastCalendar: e.broadcastCalendar
		}, t), {
			broadcastCalendar: e.broadcastCalendar,
			fixedWeeks: e.fixedWeeks,
			ISOWeek: e.ISOWeek,
			reverseMonths: e.reverseMonths
		}, t);
		return {
			months: o,
			weeks: Ek(o),
			days: yk(o),
			previousMonth: Tk(s, n, e, t),
			nextMonth: wk(s, r, e, t)
		};
	}, [
		t,
		s.getTime(),
		r?.getTime(),
		n?.getTime(),
		e.disableNavigation,
		e.broadcastCalendar,
		e.endMonth?.getTime(),
		e.fixedWeeks,
		e.ISOWeek,
		e.numberOfMonths,
		e.pagedNavigation,
		e.reverseMonths
	]), { disableNavigation: g, onMonthChange: _ } = e, v = (e) => u.some((t) => t.days.some((t) => t.isEqualTo(e))), y = (e) => {
		if (g) return;
		let t = i(e);
		n && t < i(n) && (t = i(n)), r && t > i(r) && (t = i(r)), c(t), _?.(t);
	};
	return {
		months: l,
		weeks: u,
		days: d,
		navStart: n,
		navEnd: r,
		previousMonth: p,
		nextMonth: h,
		goToMonth: y,
		goToDay: (e) => {
			v(e) || y(e.date);
		}
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var kk;
(function(e) {
	e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(kk ||= {});
function Ak(e) {
	return !e[GD.disabled] && !e[GD.hidden] && !e[GD.outside];
}
function jk(e, t, n, r) {
	let i, a = -1;
	for (let o of e) {
		let e = t(o);
		Ak(e) && (e[GD.focused] && a < kk.FocusedModifier ? (i = o, a = kk.FocusedModifier) : r?.isEqualTo(o) && a < kk.LastFocused ? (i = o, a = kk.LastFocused) : n(o.date) && a < kk.Selected ? (i = o, a = kk.Selected) : e[GD.today] && a < kk.Today && (i = o, a = kk.Today));
	}
	return i ||= e.find((e) => Ak(t(e))), i;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
function Mk(e, t, n, r, i, a, o) {
	let { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: d, addYears: f, endOfBroadcastWeek: p, endOfISOWeek: m, endOfWeek: h, max: g, min: _, startOfBroadcastWeek: v, startOfISOWeek: y, startOfWeek: b } = o, x = {
		day: l,
		week: d,
		month: u,
		year: f,
		startOfWeek: (e) => c ? v(e, o) : s ? y(e) : b(e),
		endOfWeek: (e) => c ? p(e) : s ? m(e) : h(e)
	}[e](n, t === "after" ? 1 : -1);
	return t === "before" && r ? x = g([r, x]) : t === "after" && i && (x = _([i, x])), x;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
function Nk(e, t, n, r, i, a, o, s = 0) {
	if (s > 365) return;
	let c = Mk(e, t, n.date, r, i, a, o), l = !!(a.disabled && TO(c, a.disabled, o)), u = !!(a.hidden && TO(c, a.hidden, o)), d = new LD(c, c, o);
	return !l && !u ? d : Nk(e, t, d, r, i, a, o, s + 1);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/useFocus.js
function Pk(e, t, n, r, i) {
	let { autoFocus: a } = e, [o, s] = g(), c = jk(t.days, n, r || (() => !1), o), [l, u] = g(a ? c : void 0);
	return {
		isFocusTarget: (e) => !!c?.isEqualTo(e),
		setFocused: u,
		focused: l,
		blur: () => {
			s(l), u(void 0);
		},
		moveFocus: (n, r) => {
			if (!l) return;
			let a = Nk(n, r, l, t.navStart, t.navEnd, e, i);
			a && (e.disableNavigation && !t.days.some((e) => e.isEqualTo(a)) || (t.goToDay(a), u(a)));
		}
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/selection/useMulti.js
function Fk(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = Dk(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t, l = (e) => s?.some((t) => c(t, e)) ?? !1, { min: u, max: d } = e;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = [...s ?? []];
			if (l(e)) {
				if (s?.length === u || r && s?.length === 1) return;
				a = s?.filter((t) => !c(t, e));
			} else a = s?.length === d ? [e] : [...a, e];
			return i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: l
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/addToRange.js
function Ik(e, t, n = 0, r = 0, i = !1, a = ID) {
	let { from: o, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: u } = a, d;
	if (!o && !s) d = {
		from: e,
		to: n > 0 ? void 0 : e
	};
	else if (o && !s) d = c(o, e) ? n === 0 ? {
		from: o,
		to: e
	} : i ? {
		from: o,
		to: void 0
	} : void 0 : u(e, o) ? {
		from: e,
		to: o
	} : {
		from: o,
		to: e
	};
	else if (o && s) if (c(o, e) && c(s, e)) d = i ? {
		from: o,
		to: s
	} : void 0;
	else if (c(o, e)) d = {
		from: o,
		to: n > 0 ? void 0 : e
	};
	else if (c(s, e)) d = {
		from: e,
		to: n > 0 ? void 0 : e
	};
	else if (u(e, o)) d = {
		from: e,
		to: s
	};
	else if (l(e, o)) d = {
		from: o,
		to: e
	};
	else if (l(e, s)) d = {
		from: o,
		to: e
	};
	else throw Error("Invalid range");
	if (d?.from && d?.to) {
		let t = a.differenceInCalendarDays(d.to, d.from);
		(r > 0 && t > r || n > 1 && t < n) && (d = {
			from: e,
			to: void 0
		});
	}
	return d;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
function Lk(e, t, n = ID) {
	let r = Array.isArray(t) ? t : [t], i = e.from, a = n.differenceInCalendarDays(e.to, e.from), o = Math.min(a, 6);
	for (let e = 0; e <= o; e++) {
		if (r.includes(i.getDay())) return !0;
		i = n.addDays(i, 1);
	}
	return !1;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
function Rk(e, t, n = ID) {
	return vO(e, t.from, !1, n) || vO(e, t.to, !1, n) || vO(t, e.from, !1, n) || vO(t, e.to, !1, n);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
function zk(e, t, n = ID) {
	let r = Array.isArray(t) ? t : [t];
	if (r.filter((e) => typeof e != "function").some((t) => typeof t == "boolean" ? t : n.isDate(t) ? vO(e, t, !1, n) : wO(t, n) ? t.some((t) => vO(e, t, !1, n)) : bO(t) ? t.from && t.to ? Rk(e, {
		from: t.from,
		to: t.to
	}, n) : !1 : CO(t) ? Lk(e, t.dayOfWeek, n) : yO(t) ? n.isAfter(t.before, t.after) ? Rk(e, {
		from: n.addDays(t.after, 1),
		to: n.addDays(t.before, -1)
	}, n) : TO(e.from, t, n) || TO(e.to, t, n) : xO(t) || SO(t) ? TO(e.from, t, n) || TO(e.to, t, n) : !1)) return !0;
	let i = r.filter((e) => typeof e == "function");
	if (i.length) {
		let t = e.from, r = n.differenceInCalendarDays(e.to, e.from);
		for (let e = 0; e <= r; e++) {
			if (i.some((e) => e(t))) return !0;
			t = n.addDays(t, 1);
		}
	}
	return !1;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/selection/useRange.js
function Bk(e, t) {
	let { disabled: n, excludeDisabled: r, resetOnSelect: i, selected: a, required: o, onSelect: s } = e, [c, l] = Dk(a, s ? a : void 0), u = s ? a : c;
	return {
		selected: u,
		select: (a, c, d) => {
			let { min: f, max: p } = e, m;
			if (a) {
				let e = u?.from, n = u?.to, r = !!e && !!n, s = !!e && !!n && t.isSameDay(e, n) && t.isSameDay(a, e);
				m = i && (r || !u?.from) ? !o && s ? void 0 : {
					from: a,
					to: void 0
				} : Ik(a, u, f, p, o, t);
			}
			return r && n && m?.from && m.to && zk({
				from: m.from,
				to: m.to
			}, n, t) && (m.from = a, m.to = void 0), s || l(m), s?.(m, a, c, d), m;
		},
		isSelected: (e) => u && vO(u, e, !1, t)
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/selection/useSingle.js
function Vk(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = Dk(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = e;
			return !r && s && s && c(e, s) && (a = void 0), i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: (e) => s ? c(s, e) : !1
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/useSelection.js
function Hk(e, t) {
	let n = Vk(e, t), r = Fk(e, t), i = Bk(e, t);
	switch (e.mode) {
		case "single": return n;
		case "multiple": return r;
		case "range": return i;
		default: return;
	}
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/toTimeZone.js
function Uk(e, t) {
	return e instanceof OD && e.timeZone === t ? e : new OD(e, t);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/convertMatchersToTimeZone.js
function Wk(e, t, n) {
	if (!n) return Uk(e, t);
	let r = Uk(e, t), i = new OD(r.getFullYear(), r.getMonth(), r.getDate(), 12, 0, 0, t);
	return new Date(i.getTime());
}
function Gk(e, t, n) {
	return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Wk(e, t, n) : Array.isArray(e) ? e.map((e) => e instanceof Date ? Wk(e, t, n) : e) : bO(e) ? {
		...e,
		from: e.from ? Uk(e.from, t) : e.from,
		to: e.to ? Uk(e.to, t) : e.to
	} : yO(e) ? {
		before: Wk(e.before, t, n),
		after: Wk(e.after, t, n)
	} : xO(e) ? { after: Wk(e.after, t, n) } : SO(e) ? { before: Wk(e.before, t, n) } : e;
}
function Kk(e, t, n) {
	return e && (Array.isArray(e) ? e.map((e) => Gk(e, t, n)) : Gk(e, t, n));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/DayPicker.js
function qk(e) {
	let n = e, r = n.timeZone;
	if (r && (n = {
		...e,
		timeZone: r
	}, n.today &&= Uk(n.today, r), n.month &&= Uk(n.month, r), n.defaultMonth &&= Uk(n.defaultMonth, r), n.startMonth &&= Uk(n.startMonth, r), n.endMonth &&= Uk(n.endMonth, r), n.mode === "single" && n.selected ? n.selected = Uk(n.selected, r) : n.mode === "multiple" && n.selected ? n.selected = n.selected?.map((e) => Uk(e, r)) : n.mode === "range" && n.selected && (n.selected = {
		from: n.selected.from ? Uk(n.selected.from, r) : n.selected.from,
		to: n.selected.to ? Uk(n.selected.to, r) : n.selected.to
	}), n.disabled !== void 0 && (n.disabled = Kk(n.disabled, r)), n.hidden !== void 0 && (n.hidden = Kk(n.hidden, r)), n.modifiers)) {
		let e = {};
		Object.keys(n.modifiers).forEach((t) => {
			e[t] = Kk(n.modifiers?.[t], r);
		}), n.modifiers = e;
	}
	let { components: i, formatters: a, labels: o, dateLib: s, locale: c, classNames: l } = m(() => {
		let e = {
			...PD,
			...n.locale
		}, t = n.broadcastCalendar ? 1 : n.weekStartsOn, r = n.noonSafe && n.timeZone ? lk(n.timeZone, {
			weekStartsOn: t,
			locale: e
		}) : void 0, i = n.dateLib && r ? {
			...r,
			...n.dateLib
		} : n.dateLib ?? r, a = new FD({
			locale: e,
			weekStartsOn: t,
			firstWeekContainsDate: n.firstWeekContainsDate,
			useAdditionalWeekYearTokens: n.useAdditionalWeekYearTokens,
			useAdditionalDayOfYearTokens: n.useAdditionalDayOfYearTokens,
			timeZone: n.timeZone,
			numerals: n.numerals
		}, i);
		return {
			dateLib: a,
			components: OO(n.components),
			formatters: VO(n.formatters),
			labels: ik(n.labels, a.options),
			locale: e,
			classNames: {
				...AO(),
				...n.classNames
			}
		};
	}, [
		n.locale,
		n.broadcastCalendar,
		n.weekStartsOn,
		n.firstWeekContainsDate,
		n.useAdditionalWeekYearTokens,
		n.useAdditionalDayOfYearTokens,
		n.timeZone,
		n.numerals,
		n.dateLib,
		n.noonSafe,
		n.components,
		n.formatters,
		n.labels,
		n.classNames
	]);
	n.today || (n = {
		...n,
		today: s.today()
	});
	let { captionLayout: d, mode: f, navLayout: p, numberOfMonths: g = 1, onDayBlur: _, onDayClick: v, onDayFocus: y, onDayKeyDown: b, onDayMouseEnter: x, onDayMouseLeave: S, onNextClick: C, onPrevClick: w, showWeekNumber: T, styles: E } = n, { formatCaption: D, formatDay: O, formatMonthDropdown: k, formatWeekNumber: A, formatWeekNumberHeader: j, formatWeekdayName: M, formatYearDropdown: N } = a, P = Ok(n, s), { days: F, months: I, navStart: ee, navEnd: te, previousMonth: L, nextMonth: ne, goToMonth: R } = P, z = EO(F, n, ee, te, s), { isSelected: re, select: ie, selected: B } = Hk(n, s) ?? {}, { blur: ae, focused: oe, isFocusTarget: se, moveFocus: ce, setFocused: le } = Pk(n, P, z, re ?? (() => !1), s), { labelDayButton: ue, labelGridcell: de, labelGrid: fe, labelMonthDropdown: pe, labelNav: me, labelPrevious: he, labelNext: ge, labelWeekday: _e, labelWeekNumber: ve, labelWeekNumberHeader: ye, labelYearDropdown: be } = o, xe = m(() => sk(s, n.ISOWeek, n.broadcastCalendar, n.today), [
		s,
		n.ISOWeek,
		n.broadcastCalendar,
		n.today
	]), Se = f !== void 0 || v !== void 0, Ce = u(() => {
		L && (R(L), w?.(L));
	}, [
		L,
		R,
		w
	]), we = u(() => {
		ne && (R(ne), C?.(ne));
	}, [
		R,
		ne,
		C
	]), Te = u((e, t) => (n) => {
		n.preventDefault(), n.stopPropagation(), le(e), !t.disabled && (ie?.(e.date, t, n), v?.(e.date, t, n));
	}, [
		ie,
		v,
		le
	]), Ee = u((e, t) => (n) => {
		le(e), y?.(e.date, t, n);
	}, [y, le]), De = u((e, t) => (n) => {
		ae(), _?.(e.date, t, n);
	}, [ae, _]), Oe = u((e, t) => (r) => {
		let i = {
			ArrowLeft: [r.shiftKey ? "month" : "day", n.dir === "rtl" ? "after" : "before"],
			ArrowRight: [r.shiftKey ? "month" : "day", n.dir === "rtl" ? "before" : "after"],
			ArrowDown: [r.shiftKey ? "year" : "week", "after"],
			ArrowUp: [r.shiftKey ? "year" : "week", "before"],
			PageUp: [r.shiftKey ? "year" : "month", "before"],
			PageDown: [r.shiftKey ? "year" : "month", "after"],
			Home: ["startOfWeek", "before"],
			End: ["endOfWeek", "after"]
		};
		if (i[r.key]) {
			r.preventDefault(), r.stopPropagation();
			let [e, t] = i[r.key];
			ce(e, t);
		}
		b?.(e.date, t, r);
	}, [
		ce,
		b,
		n.dir
	]), ke = u((e, t) => (n) => {
		x?.(e.date, t, n);
	}, [x]), Ae = u((e, t) => (n) => {
		S?.(e.date, t, n);
	}, [S]), je = u((e) => (t) => {
		let n = Number(t.target.value);
		R(s.setMonth(s.startOfMonth(e), n));
	}, [s, R]), Me = u((e) => (t) => {
		let n = Number(t.target.value);
		R(s.setYear(s.startOfMonth(e), n));
	}, [s, R]), { className: Ne, style: Pe } = m(() => ({
		className: [l[Q.Root], n.className].filter(Boolean).join(" "),
		style: {
			...E?.[Q.Root],
			...n.style
		}
	}), [
		l,
		n.className,
		n.style,
		E
	]), Fe = kO(n), Ie = h(null);
	_k(Ie, !!n.animate, {
		classNames: l,
		months: I,
		focused: oe,
		dateLib: s
	});
	let Le = {
		dayPickerProps: n,
		selected: B,
		select: ie,
		isSelected: re,
		months: I,
		nextMonth: ne,
		previousMonth: L,
		goToMonth: R,
		getModifiers: z,
		components: i,
		classNames: l,
		styles: E,
		labels: o,
		formatters: a
	};
	return t.createElement(tO.Provider, { value: Le }, t.createElement(i.Root, {
		rootRef: n.animate ? Ie : void 0,
		className: Ne,
		style: Pe,
		dir: n.dir,
		id: n.id,
		lang: n.lang ?? c.code,
		nonce: n.nonce,
		title: n.title,
		role: n.role,
		"aria-label": n["aria-label"],
		"aria-labelledby": n["aria-labelledby"],
		...Fe
	}, t.createElement(i.Months, {
		className: l[Q.Months],
		style: E?.[Q.Months]
	}, !n.hideNavigation && !p && t.createElement(i.Nav, {
		"data-animated-nav": n.animate ? "true" : void 0,
		className: l[Q.Nav],
		style: E?.[Q.Nav],
		"aria-label": me(),
		onPreviousClick: Ce,
		onNextClick: we,
		previousMonth: L,
		nextMonth: ne
	}), I.map((e, r) => t.createElement(i.Month, {
		"data-animated-month": n.animate ? "true" : void 0,
		className: l[Q.Month],
		style: E?.[Q.Month],
		key: r,
		displayIndex: r,
		calendarMonth: e
	}, p === "around" && !n.hideNavigation && r === 0 && t.createElement(i.PreviousMonthButton, {
		type: "button",
		className: l[Q.PreviousMonthButton],
		tabIndex: L ? void 0 : -1,
		"aria-disabled": L ? void 0 : !0,
		"aria-label": he(L),
		onClick: Ce,
		"data-animated-button": n.animate ? "true" : void 0
	}, t.createElement(i.Chevron, {
		disabled: L ? void 0 : !0,
		className: l[Q.Chevron],
		orientation: n.dir === "rtl" ? "right" : "left"
	})), t.createElement(i.MonthCaption, {
		"data-animated-caption": n.animate ? "true" : void 0,
		className: l[Q.MonthCaption],
		style: E?.[Q.MonthCaption],
		calendarMonth: e,
		displayIndex: r
	}, d?.startsWith("dropdown") ? t.createElement(i.DropdownNav, {
		className: l[Q.Dropdowns],
		style: E?.[Q.Dropdowns]
	}, (() => {
		let r = d === "dropdown" || d === "dropdown-months" ? t.createElement(i.MonthsDropdown, {
			key: "month",
			className: l[Q.MonthsDropdown],
			"aria-label": pe(),
			classNames: l,
			components: i,
			disabled: !!n.disableNavigation,
			onChange: je(e.date),
			options: ak(e.date, ee, te, a, s),
			style: E?.[Q.Dropdown],
			value: s.getMonth(e.date)
		}) : t.createElement("span", { key: "month" }, k(e.date, s)), o = d === "dropdown" || d === "dropdown-years" ? t.createElement(i.YearsDropdown, {
			key: "year",
			className: l[Q.YearsDropdown],
			"aria-label": be(s.options),
			classNames: l,
			components: i,
			disabled: !!n.disableNavigation,
			onChange: Me(e.date),
			options: ck(ee, te, a, s, !!n.reverseYears),
			style: E?.[Q.Dropdown],
			value: s.getYear(e.date)
		}) : t.createElement("span", { key: "year" }, N(e.date, s));
		return s.getMonthYearOrder() === "year-first" ? [o, r] : [r, o];
	})(), t.createElement("span", {
		role: "status",
		"aria-live": "polite",
		style: {
			border: 0,
			clip: "rect(0 0 0 0)",
			height: "1px",
			margin: "-1px",
			overflow: "hidden",
			padding: 0,
			position: "absolute",
			width: "1px",
			whiteSpace: "nowrap",
			wordWrap: "normal"
		}
	}, D(e.date, s.options, s))) : t.createElement(i.CaptionLabel, {
		className: l[Q.CaptionLabel],
		role: "status",
		"aria-live": "polite"
	}, D(e.date, s.options, s))), p === "around" && !n.hideNavigation && r === g - 1 && t.createElement(i.NextMonthButton, {
		type: "button",
		className: l[Q.NextMonthButton],
		tabIndex: ne ? void 0 : -1,
		"aria-disabled": ne ? void 0 : !0,
		"aria-label": ge(ne),
		onClick: we,
		"data-animated-button": n.animate ? "true" : void 0
	}, t.createElement(i.Chevron, {
		disabled: ne ? void 0 : !0,
		className: l[Q.Chevron],
		orientation: n.dir === "rtl" ? "left" : "right"
	})), r === g - 1 && p === "after" && !n.hideNavigation && t.createElement(i.Nav, {
		"data-animated-nav": n.animate ? "true" : void 0,
		className: l[Q.Nav],
		style: E?.[Q.Nav],
		"aria-label": me(),
		onPreviousClick: Ce,
		onNextClick: we,
		previousMonth: L,
		nextMonth: ne
	}), t.createElement(i.MonthGrid, {
		role: "grid",
		"aria-multiselectable": f === "multiple" || f === "range",
		"aria-label": fe(e.date, s.options, s) || void 0,
		className: l[Q.MonthGrid],
		style: E?.[Q.MonthGrid]
	}, !n.hideWeekdays && t.createElement(i.Weekdays, {
		"data-animated-weekdays": n.animate ? "true" : void 0,
		className: l[Q.Weekdays],
		style: E?.[Q.Weekdays]
	}, T && t.createElement(i.WeekNumberHeader, {
		"aria-label": ye(s.options),
		className: l[Q.WeekNumberHeader],
		style: E?.[Q.WeekNumberHeader],
		scope: "col"
	}, j()), xe.map((e) => t.createElement(i.Weekday, {
		"aria-label": _e(e, s.options, s),
		className: l[Q.Weekday],
		key: String(e),
		style: E?.[Q.Weekday],
		scope: "col"
	}, M(e, s.options, s)))), t.createElement(i.Weeks, {
		"data-animated-weeks": n.animate ? "true" : void 0,
		className: l[Q.Weeks],
		style: E?.[Q.Weeks]
	}, e.weeks.map((e) => t.createElement(i.Week, {
		className: l[Q.Week],
		key: e.weekNumber,
		style: E?.[Q.Week],
		week: e
	}, T && t.createElement(i.WeekNumber, {
		week: e,
		style: E?.[Q.WeekNumber],
		"aria-label": ve(e.weekNumber, { locale: c }),
		className: l[Q.WeekNumber],
		scope: "row",
		role: "rowheader"
	}, A(e.weekNumber, s)), e.days.map((e) => {
		let { date: r } = e, a = z(e);
		if (a[GD.focused] = !a.hidden && !!oe?.isEqualTo(e), a[KD.selected] = re?.(r) || a.selected, bO(B)) {
			let { from: e, to: t } = B;
			a[KD.range_start] = !!(e && t && s.isSameDay(r, e)), a[KD.range_end] = !!(e && t && s.isSameDay(r, t)), a[KD.range_middle] = vO(B, r, !0, s);
		}
		let o = ok(a, E, n.modifiersStyles), c = DO(a, l, n.modifiersClassNames), u = !Se && !a.hidden ? de(r, a, s.options, s) : void 0;
		return t.createElement(i.Day, {
			key: `${e.isoDate}_${e.displayMonthId}`,
			day: e,
			modifiers: a,
			className: c.join(" "),
			style: o,
			role: "gridcell",
			"aria-selected": a.selected || void 0,
			"aria-label": u,
			"data-day": e.isoDate,
			"data-month": e.outside ? e.dateMonthId : void 0,
			"data-selected": a.selected || void 0,
			"data-disabled": a.disabled || void 0,
			"data-hidden": a.hidden || void 0,
			"data-outside": e.outside || void 0,
			"data-focused": a.focused || void 0,
			"data-today": a.today || void 0
		}, !a.hidden && Se ? t.createElement(i.DayButton, {
			className: l[Q.DayButton],
			style: E?.[Q.DayButton],
			type: "button",
			day: e,
			modifiers: a,
			disabled: !a.focused && a.disabled || void 0,
			"aria-disabled": a.focused && a.disabled || void 0,
			tabIndex: se(e) ? 0 : -1,
			"aria-label": ue(r, a, s.options, s),
			onClick: Te(e, a),
			onBlur: De(e, a),
			onFocus: Ee(e, a),
			onKeyDown: Oe(e, a),
			onMouseEnter: ke(e, a),
			onMouseLeave: Ae(e, a)
		}, O(r, s.options, s)) : !a.hidden && O(e.date, s.options, s));
	})))))))), n.footer && t.createElement(i.Footer, {
		className: l[Q.Footer],
		style: E?.[Q.Footer],
		role: "status",
		"aria-live": "polite"
	}, n.footer)));
}
//#endregion
//#region src/components/ui/calendar.tsx
function Jk({ className: e, classNames: t, showOutsideDays: n = !0, captionLayout: r = "label", buttonVariant: i = "ghost", locale: a, formatters: o, components: s, ...c }) {
	let l = AO();
	return /* @__PURE__ */ x(qk, {
		showOutsideDays: n,
		className: q("group/calendar bg-background p-2 [--cell-size:--spacing(7)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, e),
		captionLayout: r,
		locale: a,
		formatters: {
			formatMonthDropdown: (e) => e.toLocaleString(a?.code, { month: "short" }),
			...o
		},
		classNames: {
			root: q("w-fit", l.root),
			months: q("relative flex flex-col gap-4 md:flex-row", l.months),
			month: q("flex w-full flex-col gap-4", l.month),
			nav: q("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", l.nav),
			button_previous: q(Sy({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", l.button_previous),
			button_next: q(Sy({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", l.button_next),
			month_caption: q("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", l.month_caption),
			dropdowns: q("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", l.dropdowns),
			dropdown_root: q("relative rounded-(--cell-radius)", l.dropdown_root),
			dropdown: q("absolute inset-0 bg-popover opacity-0", l.dropdown),
			caption_label: q("font-medium select-none", r === "label" ? "text-sm" : "flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground", l.caption_label),
			table: "w-full border-collapse",
			weekdays: q("flex", l.weekdays),
			weekday: q("flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none", l.weekday),
			week: q("mt-2 flex w-full", l.week),
			week_number_header: q("w-(--cell-size) select-none", l.week_number_header),
			week_number: q("text-[0.8rem] text-muted-foreground select-none", l.week_number),
			day: q("group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)", c.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)", l.day),
			range_start: q("relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted", l.range_start),
			range_middle: q("rounded-none", l.range_middle),
			range_end: q("relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted", l.range_end),
			today: q("rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none", l.today),
			outside: q("text-muted-foreground aria-selected:text-muted-foreground", l.outside),
			disabled: q("text-muted-foreground opacity-50", l.disabled),
			hidden: q("invisible", l.hidden),
			...t
		},
		components: {
			Root: ({ className: e, rootRef: t, ...n }) => /* @__PURE__ */ x("div", {
				"data-slot": "calendar",
				ref: t,
				className: q(e),
				...n
			}),
			Chevron: ({ className: e, orientation: t, ...n }) => x(t === "left" ? A : t === "right" ? M : O, {
				className: q("size-4", e),
				...n
			}),
			DayButton: ({ ...e }) => /* @__PURE__ */ x(Yk, {
				locale: a,
				...e
			}),
			WeekNumber: ({ children: e, ...t }) => /* @__PURE__ */ x("td", {
				...t,
				children: /* @__PURE__ */ x("div", {
					className: "flex size-(--cell-size) items-center justify-center text-center",
					children: e
				})
			}),
			...s
		},
		...c
	});
}
function Yk({ className: t, day: n, modifiers: r, locale: i, ...a }) {
	let o = AO(), s = e.useRef(null);
	return e.useEffect(() => {
		r.focused && s.current?.focus();
	}, [r.focused]), /* @__PURE__ */ x(Cy, {
		ref: s,
		variant: "ghost",
		size: "icon",
		"data-day": n.date.toLocaleDateString(i?.code),
		"data-selected-single": r.selected && !r.range_start && !r.range_end && !r.range_middle,
		"data-range-start": r.range_start,
		"data-range-end": r.range_end,
		"data-range-middle": r.range_middle,
		className: q("relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70", o.day, t),
		...a
	});
}
//#endregion
//#region src/components/common/AppDatePicker.tsx
var Xk = /* @__PURE__ */ new Date(), Zk = {
	captionLayout: "dropdown",
	startMonth: sD(Xk, 10),
	endMonth: Lw(Xk, 10),
	locale: fD
}, Qk = [
	"yyyyMMdd",
	"yyyy-MM-dd",
	"yyyy.MM.dd"
], $k = (e) => {
	let t = e.trim();
	for (let e of Qk) {
		let n = tD(t, e, /* @__PURE__ */ new Date());
		if (Hw(n)) return n;
	}
	return null;
}, eA = (e) => {
	let [t, n] = g(!1), { label: r, labelAlign: i, required: a, placeholder: o, disabled: s, error: c, hint: l, clearable: u, inputable: d } = e, f = tA(e), p = u && f !== null && !s, m = e.mode === "single" ? e.value : void 0, [_, v] = g(m ? zT(m, "yyyy-MM-dd") : ""), y = h(m);
	y.current !== m && (y.current = m, v(m ? zT(m, "yyyy-MM-dd") : ""));
	let C = e.mode === "range" ? e.value?.from : void 0, T = e.mode === "range" ? e.value?.to : void 0, [E, D] = g(C ? zT(C, "yyyy-MM-dd") : ""), [O, k] = g(T ? zT(T, "yyyy-MM-dd") : ""), A = h(C), j = h(T);
	A.current !== C && (A.current = C, D(C ? zT(C, "yyyy-MM-dd") : "")), j.current !== T && (j.current = T, k(T ? zT(T, "yyyy-MM-dd") : ""));
	let M = (t) => {
		if (e.mode !== "single") return;
		let n = $k(t);
		n ? (e.onChange?.(n), v(zT(n, "yyyy-MM-dd"))) : v(m ? zT(m, "yyyy-MM-dd") : "");
	}, N = (t) => {
		if (e.mode !== "range") return;
		let n = $k(t);
		n ? (e.onChange?.({
			...e.value,
			from: n
		}), D(zT(n, "yyyy-MM-dd"))) : D(C ? zT(C, "yyyy-MM-dd") : "");
	}, P = (t) => {
		if (e.mode !== "range") return;
		let n = $k(t);
		n ? (e.onChange?.({
			from: e.value?.from,
			to: n
		}), k(zT(n, "yyyy-MM-dd"))) : k(T ? zT(T, "yyyy-MM-dd") : "");
	}, F = () => {
		(e.mode === "single" || e.mode === "range" || e.mode === "week" || e.mode === "year-month") && e.onChange?.(void 0);
	}, I = d && (e.mode === "single" || e.mode === "range"), ee = e.mode === "week" ? rA(e.value) : void 0, te = /* @__PURE__ */ S(b, { children: [
		e.mode === "single" && /* @__PURE__ */ x(Jk, {
			mode: "single",
			selected: e.value,
			defaultMonth: e.value,
			onSelect: (t) => {
				e.onChange?.(t), n(!1);
			},
			initialFocus: !0,
			...Zk
		}),
		e.mode === "range" && /* @__PURE__ */ x(Jk, {
			mode: "range",
			selected: e.value,
			defaultMonth: e.value?.from,
			onSelect: (t) => e.onChange?.(t),
			numberOfMonths: 2,
			initialFocus: !0,
			...Zk
		}),
		e.mode === "week" && /* @__PURE__ */ x(Jk, {
			mode: "range",
			selected: ee,
			defaultMonth: ee?.from,
			onDayClick: (t) => {
				e.onChange?.({
					year: Aw(t),
					week: pT(t)
				}), n(!1);
			},
			initialFocus: !0,
			...Zk
		}),
		e.mode === "year-month" && /* @__PURE__ */ x(oA, {
			value: e.value,
			onChange: (t) => {
				e.onChange?.(t), n(!1);
			}
		})
	] });
	return /* @__PURE__ */ x(Fy, {
		label: r,
		labelAlign: i,
		required: a,
		error: c,
		hint: l,
		children: /* @__PURE__ */ S(pD, {
			open: t,
			onOpenChange: n,
			children: [I ? /* @__PURE__ */ x(gD, {
				asChild: !0,
				children: /* @__PURE__ */ S("div", {
					className: q("flex h-7 w-full items-center border border-input bg-transparent text-xs transition-colors", "focus-within:border-ring focus-within:ring-1 focus-within:ring-ring/50", s && "cursor-not-allowed opacity-50", c && "border-destructive focus-within:ring-destructive/50"),
					children: [
						/* @__PURE__ */ x("button", {
							type: "button",
							disabled: s,
							className: "pl-2 pr-1 flex-shrink-0 text-muted-foreground hover:text-foreground disabled:pointer-events-none",
							onClick: () => n(!0),
							children: /* @__PURE__ */ x(w, { className: "h-4 w-4" })
						}),
						e.mode === "single" ? /* @__PURE__ */ x("input", {
							type: "text",
							disabled: s,
							value: _,
							onChange: (e) => v(e.target.value),
							onBlur: () => M(_),
							onKeyDown: (e) => {
								e.key === "Enter" && M(_);
							},
							placeholder: o || "YYYY-MM-DD",
							className: "flex-1 min-w-0 bg-transparent outline-none placeholder:text-muted-foreground"
						}) : /* @__PURE__ */ S(b, { children: [
							/* @__PURE__ */ x("input", {
								type: "text",
								disabled: s,
								value: E,
								onChange: (e) => D(e.target.value),
								onBlur: () => N(E),
								onKeyDown: (e) => {
									e.key === "Enter" && N(E);
								},
								placeholder: "YYYY-MM-DD",
								className: "w-[84px] min-w-0 bg-transparent outline-none placeholder:text-muted-foreground"
							}),
							/* @__PURE__ */ x("span", {
								className: "px-1 flex-shrink-0 text-muted-foreground",
								children: "~"
							}),
							/* @__PURE__ */ x("input", {
								type: "text",
								disabled: s,
								value: O,
								onChange: (e) => k(e.target.value),
								onBlur: () => P(O),
								onKeyDown: (e) => {
									e.key === "Enter" && P(O);
								},
								placeholder: "YYYY-MM-DD",
								className: "flex-1 min-w-0 bg-transparent outline-none placeholder:text-muted-foreground"
							})
						] }),
						p && /* @__PURE__ */ x("button", {
							type: "button",
							className: "pr-2 pl-1 flex-shrink-0 text-muted-foreground hover:text-foreground disabled:pointer-events-none",
							onClick: F,
							children: /* @__PURE__ */ x(De, { className: "h-3 w-3" })
						})
					]
				})
			}) : /* @__PURE__ */ x(mD, {
				asChild: !0,
				children: /* @__PURE__ */ S(Cy, {
					variant: "outline",
					disabled: s,
					className: q("w-full justify-start text-left font-normal", !f && "text-muted-foreground", c && "border-destructive"),
					children: [
						/* @__PURE__ */ x(w, { className: "mr-2 h-4 w-4" }),
						/* @__PURE__ */ x("span", {
							className: "flex-1 truncate",
							children: f ?? (o || nA(e.mode))
						}),
						p && /* @__PURE__ */ x("span", {
							className: "ml-auto flex-shrink-0 p-0.5 text-muted-foreground hover:text-foreground",
							onPointerDown: (e) => e.stopPropagation(),
							onClick: (e) => {
								e.stopPropagation(), F();
							},
							children: /* @__PURE__ */ x(De, { className: "h-3 w-3" })
						})
					]
				})
			}), /* @__PURE__ */ x(hD, {
				className: "w-auto p-0",
				align: "start",
				children: te
			})]
		})
	});
}, tA = (e) => {
	if (e.mode === "single") return e.value ? zT(e.value, "yyyy-MM-dd", { locale: fD }) : null;
	if (e.mode === "range") {
		let { from: t, to: n } = e.value ?? {};
		return t && n ? `${zT(t, "yyyy-MM-dd")} ~ ${zT(n, "yyyy-MM-dd")}` : t ? `${zT(t, "yyyy-MM-dd")} ~` : null;
	}
	return e.mode === "week" ? e.value ? `${e.value.year}년 ${e.value.week}주차` : null : e.mode === "year-month" && e.value ? `${e.value.year}년 ${e.value.month}월` : null;
}, nA = (e) => e === "range" ? "기간 선택" : e === "week" ? "주차 선택" : e === "year-month" ? "연월 선택" : "날짜 선택", rA = (e) => {
	if (!e) return;
	let t = oD(SE(/* @__PURE__ */ new Date(), e.week), e.year);
	return {
		from: kw(t),
		to: Qw(t)
	};
}, iA = Array.from({ length: 12 }, (e, t) => t + 1), aA = Array.from({ length: 10 }, (e, t) => (/* @__PURE__ */ new Date()).getFullYear() - 2 + t), oA = ({ value: e, onChange: t }) => {
	let n = e ?? {
		year: (/* @__PURE__ */ new Date()).getFullYear(),
		month: (/* @__PURE__ */ new Date()).getMonth() + 1
	};
	return /* @__PURE__ */ x("div", {
		className: "p-3 flex flex-col gap-3",
		children: /* @__PURE__ */ S("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ x("select", {
				className: "flex-1 border rounded px-2 py-1 text-sm bg-background",
				value: n.year,
				onChange: (e) => t({
					...n,
					year: Number(e.target.value)
				}),
				children: aA.map((e) => /* @__PURE__ */ S("option", {
					value: e,
					children: [e, "년"]
				}, e))
			}), /* @__PURE__ */ x("select", {
				className: "flex-1 border rounded px-2 py-1 text-sm bg-background",
				value: n.month,
				onChange: (e) => t({
					...n,
					month: Number(e.target.value)
				}),
				children: iA.map((e) => /* @__PURE__ */ S("option", {
					value: e,
					children: [e, "월"]
				}, e))
			})]
		})
	});
};
//#endregion
//#region src/components/ui/accordion.tsx
function sA({ className: e, ...t }) {
	return /* @__PURE__ */ x(kn, {
		"data-slot": "accordion",
		className: q("flex w-full flex-col", e),
		...t
	});
}
function cA({ className: e, ...t }) {
	return /* @__PURE__ */ x(An, {
		"data-slot": "accordion-item",
		className: q("not-last:border-b", e),
		...t
	});
}
function lA({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ x(jn, {
		className: "flex",
		children: /* @__PURE__ */ S(Mn, {
			"data-slot": "accordion-trigger",
			className: q("group/accordion-trigger relative flex flex-1 items-start justify-between rounded-none border border-transparent py-2.5 text-left text-xs font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground", e),
			...n,
			children: [
				t,
				/* @__PURE__ */ x(O, {
					"data-slot": "accordion-trigger-icon",
					className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				}),
				/* @__PURE__ */ x(P, {
					"data-slot": "accordion-trigger-icon",
					className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				})
			]
		})
	});
}
function uA({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ x(Nn, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-xs data-open:animate-accordion-down data-closed:animate-accordion-up",
		...n,
		children: /* @__PURE__ */ x("div", {
			className: q("h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", e),
			children: t
		})
	});
}
//#endregion
//#region src/components/common/AppAccordion.tsx
var dA = ({ items: e, type: t = "single", defaultValue: n, value: r, onValueChange: i, variant: a = "default", className: o }) => {
	let s = r !== void 0;
	return /* @__PURE__ */ x(sA, {
		...t === "single" ? {
			type: "single",
			...s ? {
				value: r,
				onValueChange: i
			} : { defaultValue: n },
			collapsible: !0
		} : {
			type: "multiple",
			...s ? {
				value: r,
				onValueChange: i
			} : { defaultValue: n }
		},
		className: q("w-full", a === "default" && "border rounded-none divide-y", o),
		children: e.map((e) => /* @__PURE__ */ S(cA, {
			value: e.value,
			disabled: e.disabled,
			children: [/* @__PURE__ */ x(lA, {
				className: "px-3",
				children: e.label
			}), /* @__PURE__ */ x(uA, { children: /* @__PURE__ */ x("div", {
				className: "mx-3 border-l-2 border-l-border pl-3 pb-3 border-b border-b-border/60",
				children: e.content
			}) })]
		}, e.value))
	});
};
//#endregion
//#region node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function fA(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function pA(e) {
	return fA(e) || Array.isArray(e);
}
function mA() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function hA(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !pA(r) || !pA(i) ? r === i : hA(r, i);
	});
}
function gA(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function _A(e, t) {
	if (e.length !== t.length) return !1;
	let n = gA(e), r = gA(t);
	return n.every((e, t) => {
		let n = r[t];
		return hA(e, n);
	});
}
//#endregion
//#region node_modules/embla-carousel/esm/embla-carousel.esm.js
function vA(e) {
	return typeof e == "number";
}
function yA(e) {
	return typeof e == "string";
}
function bA(e) {
	return typeof e == "boolean";
}
function xA(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function SA(e) {
	return Math.abs(e);
}
function CA(e) {
	return Math.sign(e);
}
function wA(e, t) {
	return SA(e - t);
}
function TA(e, t) {
	return e === 0 || t === 0 || SA(e) <= SA(t) ? 0 : SA(wA(SA(e), SA(t)) / e);
}
function EA(e) {
	return Math.round(e * 100) / 100;
}
function DA(e) {
	return MA(e).map(Number);
}
function OA(e) {
	return e[kA(e)];
}
function kA(e) {
	return Math.max(0, e.length - 1);
}
function AA(e, t) {
	return t === kA(e);
}
function jA(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function MA(e) {
	return Object.keys(e);
}
function NA(e, t) {
	return [e, t].reduce((e, t) => (MA(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = xA(r) && xA(i) ? NA(r, i) : i;
	}), e), {});
}
function PA(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function FA(e, t) {
	let n = {
		start: r,
		center: i,
		end: a
	};
	function r() {
		return 0;
	}
	function i(e) {
		return a(e) / 2;
	}
	function a(e) {
		return t - e;
	}
	function o(r, i) {
		return yA(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function IA() {
	let e = [];
	function t(t, n, i, a = { passive: !0 }) {
		let o;
		if ("addEventListener" in t) t.addEventListener(n, i, a), o = () => t.removeEventListener(n, i, a);
		else {
			let e = t;
			e.addListener(i), o = () => e.removeListener(i);
		}
		return e.push(o), r;
	}
	function n() {
		e = e.filter((e) => e());
	}
	let r = {
		add: t,
		clear: n
	};
	return r;
}
function LA(e, t, n, r) {
	let i = IA(), a = 1e3 / 60, o = null, s = 0, c = 0;
	function l() {
		i.add(e, "visibilitychange", () => {
			e.hidden && m();
		});
	}
	function u() {
		p(), i.clear();
	}
	function d(e) {
		if (!c) return;
		o || (o = e, n(), n());
		let i = e - o;
		for (o = e, s += i; s >= a;) n(), s -= a;
		r(s / a), c &&= t.requestAnimationFrame(d);
	}
	function f() {
		c ||= t.requestAnimationFrame(d);
	}
	function p() {
		t.cancelAnimationFrame(c), o = null, s = 0, c = 0;
	}
	function m() {
		o = null, s = 0;
	}
	return {
		init: l,
		destroy: u,
		start: f,
		stop: p,
		update: n,
		render: r
	};
}
function RA(e, t) {
	let n = t === "rtl", r = e === "y", i = r ? "y" : "x", a = r ? "x" : "y", o = !r && n ? -1 : 1, s = u(), c = d();
	function l(e) {
		let { height: t, width: n } = e;
		return r ? t : n;
	}
	function u() {
		return r ? "top" : n ? "right" : "left";
	}
	function d() {
		return r ? "bottom" : n ? "left" : "right";
	}
	function f(e) {
		return e * o;
	}
	return {
		scroll: i,
		cross: a,
		startEdge: s,
		endEdge: c,
		measureSize: l,
		direction: f
	};
}
function zA(e = 0, t = 0) {
	let n = SA(e - t);
	function r(t) {
		return t < e;
	}
	function i(e) {
		return e > t;
	}
	function a(e) {
		return r(e) || i(e);
	}
	function o(n) {
		return a(n) ? r(n) ? e : t : n;
	}
	function s(e) {
		return n ? e - n * Math.ceil((e - t) / n) : e;
	}
	return {
		length: n,
		max: t,
		min: e,
		constrain: o,
		reachedAny: a,
		reachedMax: i,
		reachedMin: r,
		removeOffset: s
	};
}
function BA(e, t, n) {
	let { constrain: r } = zA(0, e), i = e + 1, a = o(t);
	function o(e) {
		return n ? SA((i + e) % i) : r(e);
	}
	function s() {
		return a;
	}
	function c(e) {
		return a = o(e), d;
	}
	function l(e) {
		return u().set(s() + e);
	}
	function u() {
		return BA(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function VA(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, x = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], S = { passive: !1 }, C = IA(), w = IA(), T = zA(50, 225).constrain(p.measure(20)), E = {
		mouse: 300,
		touch: 400
	}, D = {
		mouse: 500,
		touch: 600
	}, O = m ? 43 : 25, k = !1, A = 0, j = 0, M = !1, N = !1, P = !1, F = !1;
	function I(e) {
		if (!v) return;
		function n(t) {
			(bA(v) || v(e, t)) && z(t);
		}
		let r = t;
		C.add(r, "dragstart", (e) => e.preventDefault(), S).add(r, "touchmove", () => void 0, S).add(r, "touchend", () => void 0).add(r, "touchstart", n).add(r, "mousedown", n).add(r, "touchcancel", ie).add(r, "contextmenu", ie).add(r, "click", B, !0);
	}
	function ee() {
		C.clear(), w.clear();
	}
	function te() {
		let e = F ? n : t;
		w.add(e, "touchmove", re, S).add(e, "touchend", ie).add(e, "mousemove", re, S).add(e, "mouseup", ie);
	}
	function L(e) {
		let t = e.nodeName || "";
		return x.includes(t);
	}
	function ne() {
		return (m ? D : E)[F ? "mouse" : "touch"];
	}
	function R(e, t) {
		let n = d.add(CA(e) * -1), r = u.byDistance(e, !m).distance;
		return m || SA(e) < T ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function z(e) {
		let t = PA(e, r);
		F = t, P = m && t && !e.buttons && k, k = wA(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (L(e.target) || (M = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), te(), A = a.readPoint(e), j = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function re(e) {
		if (!PA(e, r) && e.touches.length >= 2) return ie(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = wA(t, A), c = wA(n, j);
		if (!N && !F && (!e.cancelable || (N = o > c, !N))) return ie(e);
		let u = a.pointerMove(e);
		o > h && (P = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function ie(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * ne(), r = R(b(n), t), i = TA(n, r), o = O - 10 * i, s = _ + i / 50;
		N = !1, M = !1, w.clear(), l.useDuration(o).useFriction(s), c.distance(r, !m), F = !1, f.emit("pointerUp");
	}
	function B(e) {
		P &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function ae() {
		return M;
	}
	return {
		init: I,
		destroy: ee,
		pointerDown: ae
	};
}
function HA(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (PA(n, t) ? n : n.touches[0])[i];
	}
	function o(e) {
		return n = e, r = e, a(e);
	}
	function s(e) {
		let t = a(e) - a(r), o = i(e) - i(n) > 170;
		return r = e, o && (n = e), t;
	}
	function c(e) {
		if (!n || !r) return 0;
		let t = a(r) - a(n), o = i(e) - i(n), s = i(e) - i(r) > 170, c = t / o;
		return o && !s && SA(c) > .1 ? c : 0;
	}
	return {
		pointerDown: o,
		pointerMove: s,
		pointerUp: c,
		readPoint: a
	};
}
function UA() {
	function e(e) {
		let { offsetTop: t, offsetLeft: n, offsetWidth: r, offsetHeight: i } = e;
		return {
			top: t,
			right: n + r,
			bottom: t + i,
			left: n,
			width: r,
			height: i
		};
	}
	return { measure: e };
}
function WA(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function GA(e, t, n, r, i, a, o) {
	let s = [e].concat(r), c, l, u = [], d = !1;
	function f(e) {
		return i.measureSize(o.measure(e));
	}
	function p(i) {
		if (!a) return;
		l = f(e), u = r.map(f);
		function o(n) {
			for (let a of n) {
				if (d) return;
				let n = a.target === e, o = r.indexOf(a.target), s = n ? l : u[o];
				if (SA(f(n ? e : r[o]) - s) >= .5) {
					i.reInit(), t.emit("resize");
					break;
				}
			}
		}
		c = new ResizeObserver((e) => {
			(bA(a) || a(i, e)) && o(e);
		}), n.requestAnimationFrame(() => {
			s.forEach((e) => c.observe(e));
		});
	}
	function m() {
		d = !0, c && c.disconnect();
	}
	return {
		init: p,
		destroy: m
	};
}
function KA(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = CA(a), d = u, x;
	}
	function p() {
		return SA(r.get() - t.get()) < .001;
	}
	function m() {
		return c;
	}
	function h() {
		return s;
	}
	function g() {
		return o;
	}
	function _() {
		return y(i);
	}
	function v() {
		return b(a);
	}
	function y(e) {
		return c = e, x;
	}
	function b(e) {
		return l = e, x;
	}
	let x = {
		direction: h,
		duration: m,
		velocity: g,
		seek: f,
		settled: p,
		useBaseFriction: v,
		useBaseDuration: _,
		useFriction: b,
		useDuration: y
	};
	return x;
}
function qA(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = zA(.1, .99), c = !1;
	function l() {
		return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
	}
	function u(i) {
		if (!l()) return;
		let c = SA(e[e.reachedMin(t.get()) ? "min" : "max"] - t.get()), u = n.get() - t.get(), d = s.constrain(c / o);
		n.subtract(u * d), !i && SA(u) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
	}
	function d(e) {
		c = !e;
	}
	return {
		shouldConstrain: l,
		constrain: u,
		toggleActive: d
	};
}
function JA(e, t, n, r, i) {
	let a = zA(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return wA(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = OA(o);
		return zA(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = AA(n, t);
			return s ? i : c || l(r, o) ? r : l(i, o) ? i : o;
		}).map((e) => parseFloat(e.toFixed(3)));
	}
	function f() {
		if (t <= e + i) return [a.max];
		if (r === "keepSnaps") return o;
		let { min: n, max: c } = s;
		return o.slice(n, c);
	}
	return {
		snapsContained: c,
		scrollContainLimit: s
	};
}
function YA(e, t, n) {
	let r = t[0];
	return { limit: zA(n ? r - e : OA(t), r) };
}
function XA(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = zA(t.min + i, t.max + i);
	function s(e) {
		return e === 1 ? o(n.get()) : e === -1 ? a(n.get()) : !1;
	}
	function c(t) {
		if (!s(t)) return;
		let n = t * -1 * e;
		r.forEach((e) => e.add(n));
	}
	return { loop: c };
}
function ZA(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function QA(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => OA(e)[o] - e[0][a]).map(SA);
	}
	function f() {
		return r.map((e) => n[a] - e[a]).map((e) => -SA(e));
	}
	function p() {
		return s(l).map((e) => e[0]).map((e, t) => e + c[t]);
	}
	return {
		snaps: l,
		snapsAligned: u
	};
}
function $A(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = AA(n, t);
			return r ? jA(OA(n[0]) + 1) : i ? jA(kA(a) - OA(n)[0] + 1, OA(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function ej(e, t, n, r, i) {
	let { reachedAny: a, removeOffset: o, constrain: s } = r;
	function c(e) {
		return e.concat().sort((e, t) => SA(e) - SA(t))[0];
	}
	function l(n) {
		let r = e ? o(n) : s(n), { index: i } = t.map((e, t) => ({
			diff: u(e - r, 0),
			index: t
		})).sort((e, t) => SA(e.diff) - SA(t.diff))[0];
		return {
			index: i,
			distance: r
		};
	}
	function u(t, r) {
		let i = [
			t,
			t + n,
			t - n
		];
		if (!e) return t;
		if (!r) return c(i);
		let a = i.filter((e) => CA(e) === r);
		return a.length ? c(a) : OA(i) - n;
	}
	function d(e, n) {
		return {
			index: e,
			distance: u(t[e] - i.get(), n)
		};
	}
	function f(n, r) {
		let o = i.get() + n, { index: s, distance: c } = l(o), d = !e && a(o);
		return !r || d ? {
			index: s,
			distance: n
		} : {
			index: s,
			distance: n + u(t[s] - c, 0)
		};
	}
	return {
		byDistance: f,
		byIndex: d,
		shortcut: u
	};
}
function tj(e, t, n, r, i, a, o) {
	function s(i) {
		let s = i.distance, c = i.index !== t.get();
		a.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), c && (n.set(t.get()), t.set(i.index), o.emit("select"));
	}
	function c(e, t) {
		s(i.byDistance(e, t));
	}
	function l(e, n) {
		let r = t.clone().set(e);
		s(i.byIndex(r.get(), n));
	}
	return {
		distance: c,
		index: l
	};
}
function nj(e, t, n, r, i, a, o, s) {
	let c = {
		passive: !0,
		capture: !0
	}, l = 0;
	function u(u) {
		if (!s) return;
		function f(t) {
			if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
			o.emit("slideFocusStart"), e.scrollLeft = 0;
			let a = n.findIndex((e) => e.includes(t));
			vA(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(bA(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function rj(e) {
	let t = e;
	function n() {
		return t;
	}
	function r(e) {
		t = o(e);
	}
	function i(e) {
		t += o(e);
	}
	function a(e) {
		t -= o(e);
	}
	function o(e) {
		return vA(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function ij(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = EA(e.direction(t));
		o !== i && (r.transform = n(o), i = o);
	}
	function l(e) {
		a = !e;
	}
	function u() {
		a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
	}
	return {
		clear: u,
		to: c,
		toggleActive: l
	};
}
function aj(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = DA(i), d = DA(i).reverse(), f = _().concat(v());
	function p(e, t) {
		return e.reduce((e, t) => e - i[t], t);
	}
	function m(e, t) {
		return e.reduce((e, n) => p(e, t) > 0 ? e.concat([n]) : e, []);
	}
	function h(e) {
		return a.map((n, i) => ({
			start: n - r[i] + l + e,
			end: n + t - l + e
		}));
	}
	function g(t, r, i) {
		let a = h(r);
		return t.map((t) => {
			let r = i ? 0 : -n, o = i ? n : 0, l = i ? "end" : "start", u = a[t][l];
			return {
				index: t,
				loopPoint: u,
				slideLocation: rj(-1),
				translate: ij(e, c[t]),
				target: () => s.get() > u ? r : o
			};
		});
	}
	function _() {
		let e = o[0];
		return g(m(d, e), n, !1);
	}
	function v() {
		return g(m(u, t - o[0] - 1), -n, !0);
	}
	function y() {
		return f.every(({ index: e }) => p(u.filter((t) => t !== e), t) <= .1);
	}
	function b() {
		f.forEach((e) => {
			let { target: t, translate: n, slideLocation: r } = e, i = t();
			i !== r.get() && (n.to(i), r.set(i));
		});
	}
	function x() {
		f.forEach((e) => e.translate.clear());
	}
	return {
		canLoop: y,
		clear: x,
		loop: b,
		loopPoints: f
	};
}
function oj(e, t, n) {
	let r, i = !1;
	function a(a) {
		if (!n) return;
		function o(e) {
			for (let n of e) if (n.type === "childList") {
				a.reInit(), t.emit("slidesChanged");
				break;
			}
		}
		r = new MutationObserver((e) => {
			i || (bA(n) || n(a, e)) && o(e);
		}), r.observe(e, { childList: !0 });
	}
	function o() {
		r && r.disconnect(), i = !0;
	}
	return {
		init: a,
		destroy: o
	};
}
function sj(e, t, n, r) {
	let i = {}, a = null, o = null, s, c = !1;
	function l() {
		s = new IntersectionObserver((e) => {
			c || (e.forEach((e) => {
				let n = t.indexOf(e.target);
				i[n] = e;
			}), a = null, o = null, n.emit("slidesInView"));
		}, {
			root: e.parentElement,
			threshold: r
		}), t.forEach((e) => s.observe(e));
	}
	function u() {
		s && s.disconnect(), c = !0;
	}
	function d(e) {
		return MA(i).reduce((t, n) => {
			let r = parseInt(n), { isIntersecting: a } = i[r];
			return (e && a || !e && !a) && t.push(r), t;
		}, []);
	}
	function f(e = !0) {
		if (e && a) return a;
		if (!e && o) return o;
		let t = d(e);
		return e && (a = t), e || (o = t), t;
	}
	return {
		init: l,
		destroy: u,
		get: f
	};
}
function cj(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return SA(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(OA(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = AA(n, t);
			return r ? f[t] + u : i ? f[t] + d : n[t + 1][s] - e[s];
		}).map(SA);
	}
	return {
		slideSizes: f,
		slideSizesWithGaps: p,
		startGap: u,
		endGap: d
	};
}
function lj(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = vA(n);
	function p(e, t) {
		return DA(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? DA(e).reduce((n, f, p) => {
			let m = OA(n) || 0, h = m === 0, g = f === kA(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = SA(v - (!r && g ? d(s) : 0) - (_ + y));
			return p && b > t + c && n.push(f), g && n.push(e.length), n;
		}, []).map((t, n, r) => {
			let i = Math.max(r[n - 1] || 0);
			return e.slice(i, t);
		}) : [];
	}
	function h(e) {
		return f ? p(e, n) : m(e);
	}
	return { groupSlides: h };
}
function uj(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = UA(), w = C.measure(t), T = n.map(C.measure), E = RA(c, l), D = E.measureSize(w), O = WA(D), k = FA(s, D), A = !d && !!v, { slideSizes: j, slideSizesWithGaps: M, startGap: N, endGap: P } = cj(E, w, T, n, d || !!v, i), F = lj(E, D, g, d, w, T, N, P, 2), { snaps: I, snapsAligned: ee } = QA(E, k, w, T, F), te = -OA(I) + OA(M), { snapsContained: L, scrollContainLimit: ne } = JA(D, te, ee, v, 2), R = A ? L : ee, { limit: z } = YA(te, R, d), re = BA(kA(R), u, d), ie = re.clone(), B = DA(n), ae = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, oe = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, se = LA(r, i, () => ae(Se), (e) => oe(Se, e)), ce = .68, le = R[re.get()], ue = rj(le), de = rj(le), fe = rj(le), pe = rj(le), me = KA(ue, fe, de, pe, f, ce), he = ej(d, R, te, z, pe), ge = tj(se, re, ie, me, he, pe, o), _e = ZA(z), ve = IA(), ye = sj(t, n, o, h), { slideRegistry: be } = $A(A, v, R, ne, F, B), xe = nj(e, n, be, ge, me, ve, o, S), Se = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: se,
		axis: E,
		dragHandler: VA(E, e, r, i, pe, HA(E, i), ue, se, ge, me, he, re, o, O, p, m, _, ce, x),
		eventStore: ve,
		percentOfView: O,
		index: re,
		indexPrevious: ie,
		limit: z,
		location: ue,
		offsetLocation: fe,
		previousLocation: de,
		options: a,
		resizeHandler: GA(t, o, i, n, E, y, C),
		scrollBody: me,
		scrollBounds: qA(z, fe, pe, me, O),
		scrollLooper: XA(te, z, fe, [
			ue,
			fe,
			de,
			pe
		]),
		scrollProgress: _e,
		scrollSnapList: R.map(_e.get),
		scrollSnaps: R,
		scrollTarget: he,
		scrollTo: ge,
		slideLooper: aj(E, D, te, j, M, I, R, fe, n),
		slideFocus: xe,
		slidesHandler: oj(t, o, b),
		slidesInView: ye,
		slideIndexes: B,
		slideRegistry: be,
		slidesToScroll: F,
		target: pe,
		translate: ij(E, t)
	};
	return Se;
}
function dj() {
	let e = {}, t;
	function n(e) {
		t = e;
	}
	function r(t) {
		return e[t] || [];
	}
	function i(e) {
		return r(e).forEach((n) => n(t, e)), c;
	}
	function a(t, n) {
		return e[t] = r(t).concat([n]), c;
	}
	function o(t, n) {
		return e[t] = r(t).filter((e) => e !== n), c;
	}
	function s() {
		e = {};
	}
	let c = {
		init: n,
		emit: i,
		off: o,
		on: a,
		clear: s
	};
	return c;
}
var fj = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: !1,
	dragThreshold: 10,
	loop: !1,
	skipSnaps: !1,
	duration: 25,
	startIndex: 0,
	active: !0,
	watchDrag: !0,
	watchResize: !0,
	watchSlides: !0,
	watchFocus: !0
};
function pj(e) {
	function t(e, t) {
		return NA(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, MA(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => MA(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function mj(e) {
	let t = [];
	function n(n, r) {
		return t = r.filter(({ options: t }) => e.optionsAtMedia(t).active !== !1), t.forEach((t) => t.init(n, e)), r.reduce((e, t) => Object.assign(e, { [t.name]: t }), {});
	}
	function r() {
		t = t.filter((e) => e.destroy());
	}
	return {
		init: n,
		destroy: r
	};
}
function hj(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = pj(i), o = mj(a), s = IA(), c = dj(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = D, g = !1, _, v = l(fj, hj.globalOptions), y = l(v), b = [], x, S, C;
	function w() {
		let { container: t, slides: n } = y;
		S = (yA(t) ? e.querySelector(t) : t) || e.children[0];
		let r = yA(n) ? S.querySelectorAll(n) : n;
		C = [].slice.call(r || S.children);
	}
	function T(t) {
		let n = uj(e, S, C, r, i, t, c);
		return t.loop && !n.slideLooper.canLoop() ? T(Object.assign({}, t, { loop: !1 })) : n;
	}
	function E(e, t) {
		g || (v = l(v, e), y = u(v), b = t || b, w(), _ = T(y), d([v, ...b.map(({ options: e }) => e)]).forEach((e) => s.add(e, "change", D)), y.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(ae), _.eventHandler.init(ae), _.resizeHandler.init(ae), _.slidesHandler.init(ae), _.options.loop && _.slideLooper.loop(), S.offsetParent && C.length && _.dragHandler.init(ae), x = o.init(ae, b)));
	}
	function D(e, t) {
		let n = ee();
		O(), E(l({ startIndex: n }, e), t), c.emit("reInit");
	}
	function O() {
		_.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), o.destroy(), s.clear();
	}
	function k() {
		g || (g = !0, s.clear(), O(), c.emit("destroy"), c.clear());
	}
	function A(e, t, n) {
		!y.active || g || (_.scrollBody.useBaseFriction().useDuration(t === !0 ? 0 : y.duration), _.scrollTo.index(e, n || 0));
	}
	function j(e) {
		A(_.index.add(1).get(), e, -1);
	}
	function M(e) {
		A(_.index.add(-1).get(), e, 1);
	}
	function N() {
		return _.index.add(1).get() !== ee();
	}
	function P() {
		return _.index.add(-1).get() !== ee();
	}
	function F() {
		return _.scrollSnapList;
	}
	function I() {
		return _.scrollProgress.get(_.offsetLocation.get());
	}
	function ee() {
		return _.index.get();
	}
	function te() {
		return _.indexPrevious.get();
	}
	function L() {
		return _.slidesInView.get();
	}
	function ne() {
		return _.slidesInView.get(!1);
	}
	function R() {
		return x;
	}
	function z() {
		return _;
	}
	function re() {
		return e;
	}
	function ie() {
		return S;
	}
	function B() {
		return C;
	}
	let ae = {
		canScrollNext: N,
		canScrollPrev: P,
		containerNode: ie,
		internalEngine: z,
		destroy: k,
		off: p,
		on: f,
		emit: m,
		plugins: R,
		previousScrollSnap: te,
		reInit: h,
		rootNode: re,
		scrollNext: j,
		scrollPrev: M,
		scrollProgress: I,
		scrollSnapList: F,
		scrollTo: A,
		selectedScrollSnap: ee,
		slideNodes: B,
		slidesInView: L,
		slidesNotInView: ne
	};
	return E(t, n), setTimeout(() => c.emit("init"), 0), ae;
}
hj.globalOptions = void 0;
//#endregion
//#region node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
function gj(e = {}, t = []) {
	let n = h(e), r = h(t), [i, a] = g(), [o, s] = g(), c = u(() => {
		i && i.reInit(n.current, r.current);
	}, [i]);
	return f(() => {
		hA(n.current, e) || (n.current = e, c());
	}, [e, c]), f(() => {
		_A(r.current, t) || (r.current = t, c());
	}, [t, c]), f(() => {
		if (mA() && o) {
			hj.globalOptions = gj.globalOptions;
			let e = hj(o, n.current, r.current);
			return a(e), () => e.destroy();
		} else a(void 0);
	}, [o, a]), [s, i];
}
gj.globalOptions = void 0;
//#endregion
//#region src/components/ui/carousel.tsx
var _j = e.createContext(null);
function vj() {
	let t = e.useContext(_j);
	if (!t) throw Error("useCarousel must be used within a <Carousel />");
	return t;
}
function yj({ orientation: t = "horizontal", opts: n, setApi: r, plugins: i, className: a, children: o, ...s }) {
	let [c, l] = gj({
		...n,
		axis: t === "horizontal" ? "x" : "y"
	}, i), [u, d] = e.useState(!1), [f, p] = e.useState(!1), m = e.useCallback((e) => {
		e && (d(e.canScrollPrev()), p(e.canScrollNext()));
	}, []), h = e.useCallback(() => {
		l?.scrollPrev();
	}, [l]), g = e.useCallback(() => {
		l?.scrollNext();
	}, [l]), _ = e.useCallback((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), h()) : e.key === "ArrowRight" && (e.preventDefault(), g());
	}, [h, g]);
	return e.useEffect(() => {
		!l || !r || r(l);
	}, [l, r]), e.useEffect(() => {
		if (l) return m(l), l.on("reInit", m), l.on("select", m), () => {
			l?.off("select", m);
		};
	}, [l, m]), /* @__PURE__ */ x(_j.Provider, {
		value: {
			carouselRef: c,
			api: l,
			opts: n,
			orientation: t || (n?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev: h,
			scrollNext: g,
			canScrollPrev: u,
			canScrollNext: f
		},
		children: /* @__PURE__ */ x("div", {
			onKeyDownCapture: _,
			className: q("relative", a),
			role: "region",
			"aria-roledescription": "carousel",
			"data-slot": "carousel",
			...s,
			children: o
		})
	});
}
function bj({ className: e, ...t }) {
	let { carouselRef: n, orientation: r } = vj();
	return /* @__PURE__ */ x("div", {
		ref: n,
		className: "overflow-hidden",
		"data-slot": "carousel-content",
		children: /* @__PURE__ */ x("div", {
			className: q("flex", r === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
			...t
		})
	});
}
function xj({ className: e, ...t }) {
	let { orientation: n } = vj();
	return /* @__PURE__ */ x("div", {
		role: "group",
		"aria-roledescription": "slide",
		"data-slot": "carousel-item",
		className: q("min-w-0 shrink-0 grow-0 basis-full", n === "horizontal" ? "pl-4" : "pt-4", e),
		...t
	});
}
function Sj({ className: e, variant: t = "outline", size: n = "icon-sm", ...r }) {
	let { orientation: i, scrollPrev: a, canScrollPrev: o } = vj();
	return /* @__PURE__ */ S(Cy, {
		"data-slot": "carousel-previous",
		variant: t,
		size: n,
		className: q("absolute touch-manipulation", i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", e),
		disabled: !o,
		onClick: a,
		...r,
		children: [/* @__PURE__ */ x(A, {}), /* @__PURE__ */ x("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
}
function Cj({ className: e, variant: t = "outline", size: n = "icon-sm", ...r }) {
	let { orientation: i, scrollNext: a, canScrollNext: o } = vj();
	return /* @__PURE__ */ S(Cy, {
		"data-slot": "carousel-next",
		variant: t,
		size: n,
		className: q("absolute touch-manipulation", i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", e),
		disabled: !o,
		onClick: a,
		...r,
		children: [/* @__PURE__ */ x(M, {}), /* @__PURE__ */ x("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
}
//#endregion
//#region src/components/common/AppCarousel.tsx
var wj = ({ items: e, orientation: t = "horizontal", basis: n = "basis-full", showDots: r = !1, loop: i = !1, className: a, itemClassName: o }) => {
	let [s, c] = g(), [l, d] = g(0), [p, m] = g(0), h = u((e) => {
		e && (d(e.selectedScrollSnap()), m(e.scrollSnapList().length));
	}, []);
	return f(() => {
		if (s) return s.on("select", h), () => {
			s.off("select", h);
		};
	}, [s, h]), /* @__PURE__ */ S("div", {
		className: q("flex flex-col gap-2", a),
		children: [/* @__PURE__ */ S(yj, {
			opts: { loop: i },
			orientation: t,
			setApi: c,
			className: "w-full",
			children: [
				/* @__PURE__ */ x(bj, { children: e.map((e, t) => /* @__PURE__ */ x(xj, {
					className: q(n, o),
					children: e
				}, t)) }),
				/* @__PURE__ */ x(Sj, {}),
				/* @__PURE__ */ x(Cj, {})
			]
		}), r && p > 1 && /* @__PURE__ */ x("div", {
			className: "flex justify-center gap-1.5",
			children: Array.from({ length: p }).map((e, t) => /* @__PURE__ */ x("button", {
				className: q("h-1.5 rounded-full transition-all", t === l ? "w-4 bg-primary" : "w-1.5 bg-muted-foreground/30"),
				onClick: () => s?.scrollTo(t)
			}, t))
		})]
	});
}, Tj = {
	success: ke.success,
	error: ke.error,
	warning: ke.warning,
	info: ke.info
}, Ej = {
	show: ({ type: e, title: t, description: n, duration: r }) => Tj[e](t, {
		description: n,
		duration: r
	}),
	success: (e, t, n) => ke.success(e, {
		description: t,
		duration: n
	}),
	error: (e, t, n) => ke.error(e, {
		description: t,
		duration: n
	}),
	warning: (e, t, n) => ke.warning(e, {
		description: t,
		duration: n
	}),
	info: (e, t, n) => ke.info(e, {
		description: t,
		duration: n
	}),
	promise: (e, t) => ke.promise(e, t)
}, Dj = ({ children: e, className: t }) => {
	let r = n.toArray(e).filter(c), a = r.length;
	return /* @__PURE__ */ x("div", {
		className: q("flex", t),
		children: r.map((e, t) => {
			let n = t === 0, r = t === a - 1, o = !n && !r;
			return i(e, { className: q(e.props.className, !n && "-ml-px", n && "rounded-r-none", r && "rounded-l-none", o && "rounded-none", "hover:z-10 focus:z-10") });
		})
	});
}, Oj = ({ label: e, labelAlign: t, labelWidth: n, required: r, error: i, hint: a, options: o, value: s = [], onChange: c, placeholder: l = "선택하세요", maxTags: u = 3, showSelectAll: d = !1, maxCount: p, disabled: m, className: _ }) => {
	let [v, y] = g(!1), C = h(null), [w, T] = g();
	f(() => {
		v && C.current && T(C.current.offsetWidth);
	}, [v]);
	let E = (e) => {
		if (c) if (s.includes(e)) c(s.filter((t) => t !== e));
		else {
			if (p !== void 0 && s.length >= p) return;
			c([...s, e]);
		}
	}, O = () => {
		let e = o.filter((e) => !e.disabled).map((e) => e.value);
		c?.(p === void 0 ? e : e.slice(0, p));
	}, k = () => c?.([]), A = (e, t) => {
		t.stopPropagation(), c?.(s.filter((t) => t !== e));
	}, j = o.filter((e) => s.includes(e.value)), M = j.slice(0, u), N = j.length - u;
	return /* @__PURE__ */ x(Fy, {
		label: e,
		labelAlign: t,
		labelWidth: n,
		required: r,
		error: i,
		hint: a,
		children: /* @__PURE__ */ S(pD, {
			open: v,
			onOpenChange: m ? void 0 : y,
			children: [/* @__PURE__ */ x(mD, {
				asChild: !0,
				children: /* @__PURE__ */ S("button", {
					ref: C,
					type: "button",
					disabled: m,
					className: q("flex h-7 w-full min-w-0 items-center gap-1 rounded-none border bg-background px-2 text-xs ring-offset-background", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", i && "border-destructive", _),
					children: [/* @__PURE__ */ x("div", {
						className: "flex flex-1 flex-wrap gap-1 overflow-hidden",
						children: s.length === 0 ? /* @__PURE__ */ x("span", {
							className: "text-muted-foreground",
							children: l
						}) : /* @__PURE__ */ S(b, { children: [M.map((e) => /* @__PURE__ */ S("span", {
							className: "inline-flex items-center gap-0.5 rounded bg-accent px-1.5 py-0.5 text-[10px] leading-none",
							children: [e.label, /* @__PURE__ */ x("button", {
								type: "button",
								className: "hover:text-destructive",
								onClick: (t) => A(e.value, t),
								children: /* @__PURE__ */ x(Ee, { className: "size-2.5" })
							})]
						}, e.value)), N > 0 && /* @__PURE__ */ S("span", {
							className: "text-muted-foreground text-[10px]",
							children: [
								"외 ",
								N,
								"개"
							]
						})] })
					}), /* @__PURE__ */ x(D, { className: q("size-3.5 shrink-0 text-muted-foreground transition-transform", v && "rotate-180") })]
				})
			}), /* @__PURE__ */ S(hD, {
				className: "flex flex-col p-0 overflow-hidden max-h-56",
				style: { width: w },
				align: "start",
				onOpenAutoFocus: (e) => e.preventDefault(),
				children: [d && /* @__PURE__ */ S("div", {
					className: "flex shrink-0 gap-2 border-b px-2 py-1.5",
					children: [
						/* @__PURE__ */ x("button", {
							type: "button",
							className: "text-[10px] text-primary hover:underline",
							onClick: O,
							children: "전체 선택"
						}),
						/* @__PURE__ */ x("span", {
							className: "text-muted-foreground",
							children: "|"
						}),
						/* @__PURE__ */ x("button", {
							type: "button",
							className: "text-[10px] text-muted-foreground hover:underline",
							onClick: k,
							children: "전체 해제"
						})
					]
				}), /* @__PURE__ */ x("div", {
					className: "min-h-0 flex-1 overflow-y-auto py-1",
					children: o.map((e) => /* @__PURE__ */ S("label", {
						className: q("flex cursor-pointer items-center gap-2 px-2 py-1.5 text-xs hover:bg-accent", e.disabled && "pointer-events-none opacity-50"),
						children: [/* @__PURE__ */ x(Zy, {
							checked: s.includes(e.value),
							onCheckedChange: () => E(e.value),
							disabled: e.disabled
						}), e.label]
					}, e.value))
				})]
			})]
		})
	});
};
//#endregion
//#region src/components/ui/hover-card.tsx
function kj({ ...e }) {
	return /* @__PURE__ */ x(Of, {
		"data-slot": "hover-card",
		...e
	});
}
function Aj({ ...e }) {
	return /* @__PURE__ */ x(kf, {
		"data-slot": "hover-card-trigger",
		...e
	});
}
function jj({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ x(Af, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ x(jf, {
			"data-slot": "hover-card-content",
			align: t,
			sideOffset: n,
			className: q("z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-none bg-popover p-2.5 text-xs/relaxed text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
			...r
		})
	});
}
//#endregion
//#region src/components/common/AppHoverCard.tsx
var Mj = ({ trigger: e, children: t, width: n = 256, side: r = "bottom", align: i = "center", sideOffset: a = 6, openDelay: o = 300, closeDelay: s = 200, className: c }) => /* @__PURE__ */ S(kj, {
	openDelay: o,
	closeDelay: s,
	children: [/* @__PURE__ */ x(Aj, {
		asChild: !0,
		children: e
	}), /* @__PURE__ */ x(jj, {
		side: r,
		align: i,
		sideOffset: a,
		className: q("flex flex-col gap-1.5", c),
		style: { width: n },
		children: t
	})]
});
//#endregion
//#region src/components/ui/progress.tsx
function Nj({ className: e, value: t, ...n }) {
	return /* @__PURE__ */ x(Fp, {
		"data-slot": "progress",
		className: q("relative flex h-1 w-full items-center overflow-x-hidden rounded-none bg-muted", e),
		...n,
		children: /* @__PURE__ */ x(Ip, {
			"data-slot": "progress-indicator",
			className: "size-full flex-1 bg-primary transition-all",
			style: { transform: `translateX(-${100 - (t || 0)}%)` }
		})
	});
}
//#endregion
//#region src/components/common/AppProgress.tsx
var Pj = {
	default: "[&>[data-slot=progress-indicator]]:bg-primary",
	success: "[&>[data-slot=progress-indicator]]:bg-green-500",
	warning: "[&>[data-slot=progress-indicator]]:bg-yellow-500",
	destructive: "[&>[data-slot=progress-indicator]]:bg-destructive"
}, Fj = {
	sm: "h-1",
	md: "h-1.5",
	lg: "h-2.5"
}, Ij = ({ value: e, max: t = 100, variant: n = "default", size: r = "md", showLabel: i = !1, label: a, className: o }) => {
	let s = Math.min(100, Math.max(0, e / t * 100)), c = a ?? `${Math.round(s)}%`;
	return /* @__PURE__ */ S("div", {
		className: q("flex items-center gap-2", o),
		children: [/* @__PURE__ */ x(Nj, {
			value: s,
			className: q(Fj[r], Pj[n], "flex-1")
		}), (i || a) && /* @__PURE__ */ x("span", {
			className: "text-xs tabular-nums text-muted-foreground shrink-0 w-10 text-right",
			children: c
		})]
	});
};
//#endregion
//#region src/components/ui/scroll-area.tsx
function Lj({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ S(Km, {
		"data-slot": "scroll-area",
		className: q("relative", e),
		...n,
		children: [
			/* @__PURE__ */ x(qm, {
				"data-slot": "scroll-area-viewport",
				className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
				children: t
			}),
			/* @__PURE__ */ x(Rj, {}),
			/* @__PURE__ */ x(Jm, {})
		]
	});
}
function Rj({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ x(bm, {
		"data-slot": "scroll-area-scrollbar",
		"data-orientation": t,
		orientation: t,
		className: q("flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent", e),
		...n,
		children: /* @__PURE__ */ x(jm, {
			"data-slot": "scroll-area-thumb",
			className: "relative flex-1 rounded-none bg-border"
		})
	});
}
//#endregion
//#region src/components/common/AppScrollArea.tsx
var zj = ({ children: e, height: t, width: n, orientation: r = "vertical", className: i }) => {
	let a = {};
	return t !== void 0 && (a.height = typeof t == "number" ? `${t}px` : t), n !== void 0 && (a.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ S(Lj, {
		className: q("rounded-none", i),
		style: a,
		children: [
			e,
			(r === "horizontal" || r === "both") && /* @__PURE__ */ x(Rj, { orientation: "horizontal" }),
			r === "both" && /* @__PURE__ */ x(Rj, { orientation: "vertical" })
		]
	});
};
//#endregion
//#region src/components/common/AppFileUpload.tsx
function Bj(e) {
	return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Vj(e) {
	return e.type.startsWith("image/") ? le : e.type.includes("pdf") || e.type.includes("text") ? ae : B;
}
var Hj = ({ accept: e, multiple: t = !1, maxSize: n, maxFiles: r, value: i = [], onChange: a, disabled: o = !1, error: s, hint: c, label: l, labelAlign: d, labelWidth: f, required: p }) => {
	let m = h(null), [_, v] = g(!1), [y, b] = g(null), C = u((e) => {
		if (!e || o) return;
		b(null);
		let s = [...i], c = null;
		Array.from(e).forEach((e) => {
			if (n && e.size > n) {
				c = `"${e.name}"의 크기(${Bj(e.size)})가 최대 허용 크기(${Bj(n)})를 초과합니다.`;
				return;
			}
			if (r && s.length >= r) {
				c = `최대 ${r}개까지 업로드할 수 있습니다.`;
				return;
			}
			!t && s.length >= 1 && s.splice(0, s.length), s.push(e);
		}), c && b(c), a?.(s);
	}, [
		i,
		a,
		o,
		n,
		r,
		t
	]), w = (e) => {
		let t = i.filter((t, n) => n !== e);
		a?.(t);
	}, T = (e) => {
		e.preventDefault(), v(!1), C(e.dataTransfer.files);
	}, E = s ?? y ?? void 0;
	return /* @__PURE__ */ x(Fy, {
		label: l,
		labelAlign: d,
		labelWidth: f,
		required: p,
		error: E,
		hint: c,
		children: /* @__PURE__ */ S("div", {
			className: "flex flex-col gap-1.5",
			children: [
				/* @__PURE__ */ S("div", {
					role: "button",
					tabIndex: o ? -1 : 0,
					"aria-disabled": o,
					onClick: () => !o && m.current?.click(),
					onKeyDown: (e) => {
						!o && (e.key === "Enter" || e.key === " ") && m.current?.click();
					},
					onDragOver: (e) => {
						e.preventDefault(), o || v(!0);
					},
					onDragLeave: () => v(!1),
					onDrop: T,
					className: q("flex flex-col items-center justify-center gap-1.5 rounded-none border-2 border-dashed px-4 py-5 text-center transition-colors", _ ? "border-primary bg-primary/5" : "border-border bg-muted/30", o ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:border-primary/60 hover:bg-primary/5", E && "border-destructive"),
					children: [
						/* @__PURE__ */ x(Te, { className: "h-5 w-5 text-muted-foreground" }),
						/* @__PURE__ */ x("p", {
							className: "text-xs text-muted-foreground",
							children: "클릭하거나 파일을 여기에 드래그하세요"
						}),
						(e || n || r) && /* @__PURE__ */ x("p", {
							className: "text-[10px] text-muted-foreground/70",
							children: [
								e && `허용: ${e}`,
								n && `최대 ${Bj(n)}`,
								r && `최대 ${r}개`
							].filter(Boolean).join("  ·  ")
						})
					]
				}),
				i.length > 0 && /* @__PURE__ */ x("ul", {
					className: "flex flex-col gap-1",
					children: i.map((e, t) => /* @__PURE__ */ S("li", {
						className: "flex items-center gap-2 rounded-none border bg-background px-3 py-1.5 text-xs",
						children: [
							/* @__PURE__ */ x(Vj(e), { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
							/* @__PURE__ */ x("span", {
								className: "flex-1 truncate",
								children: e.name
							}),
							/* @__PURE__ */ x("span", {
								className: "shrink-0 text-muted-foreground",
								children: Bj(e.size)
							}),
							!o && /* @__PURE__ */ x("button", {
								type: "button",
								onClick: () => w(t),
								className: "ml-1 shrink-0 rounded text-muted-foreground hover:text-destructive",
								children: /* @__PURE__ */ x(Ee, { className: "h-3 w-3" })
							})
						]
					}, `${e.name}-${t}`))
				}),
				/* @__PURE__ */ x("input", {
					ref: m,
					type: "file",
					accept: e,
					multiple: t,
					disabled: o,
					className: "hidden",
					onChange: (e) => {
						C(e.target.files), e.target.value = "";
					}
				})
			]
		})
	});
}, Uj = s(({ label: e, labelAlign: t, labelWidth: n, required: r, error: i, hint: a, value: o, onChange: s, min: c, max: l, step: d = 1, comma: f, showStepper: p, className: m, disabled: h, ...g }, _) => {
	let v = u((e) => {
		let t = e;
		return c !== void 0 && (t = Math.max(c, t)), l !== void 0 && (t = Math.min(l, t)), t;
	}, [c, l]), y = (e) => {
		let t = e.target.value.replace(/,/g, "");
		if (t === "" || t === "-") {
			s?.("");
			return;
		}
		let n = Number(t);
		isNaN(n) || s?.(v(n));
	}, b = (e) => {
		s?.(v((typeof o == "number" ? o : 0) + d * e));
	}, C = f && typeof o == "number" ? o.toLocaleString() : o ?? "";
	return /* @__PURE__ */ x(Fy, {
		label: e,
		labelAlign: t,
		labelWidth: n,
		required: r,
		error: i,
		hint: a,
		children: /* @__PURE__ */ S("div", {
			className: "flex items-center gap-0",
			children: [
				p && /* @__PURE__ */ x("button", {
					type: "button",
					tabIndex: -1,
					disabled: h || c !== void 0 && typeof o == "number" && o <= c,
					onClick: () => b(-1),
					className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-l-md border border-r-0 bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none transition-colors",
					children: /* @__PURE__ */ x(fe, { className: "h-3 w-3" })
				}),
				/* @__PURE__ */ x(Iy, {
					ref: _,
					inputMode: "numeric",
					value: C,
					onChange: y,
					disabled: h,
					className: q("text-right tabular-nums", p && "rounded-none", m),
					...g
				}),
				p && /* @__PURE__ */ x("button", {
					type: "button",
					tabIndex: -1,
					disabled: h || l !== void 0 && typeof o == "number" && o >= l,
					onClick: () => b(1),
					className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-r-md border border-l-0 bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none transition-colors",
					children: /* @__PURE__ */ x(ge, { className: "h-3 w-3" })
				})
			]
		})
	});
});
Uj.displayName = "AppNumberInput";
//#endregion
//#region src/components/common/AppSearchInput.tsx
var Wj = s(({ onSearch: e, onClear: t, value: n, onChange: r, className: i, placeholder: a = "검색", ...o }, s) => {
	let [c, l] = g(""), u = n !== void 0, d = u ? n : c, f = (e) => {
		u || l(e.target.value), r?.(e);
	}, p = () => {
		e?.(d);
	}, m = () => {
		u || l(""), t?.(), e?.("");
	};
	return /* @__PURE__ */ S("div", {
		className: q("relative", i),
		children: [
			/* @__PURE__ */ x("button", {
				type: "button",
				onClick: p,
				className: "absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
				children: /* @__PURE__ */ x(ye, { className: "h-3.5 w-3.5" })
			}),
			/* @__PURE__ */ x(Iy, {
				ref: s,
				value: d,
				onChange: f,
				onKeyDown: (e) => {
					e.key === "Enter" && (e.preventDefault(), p());
				},
				placeholder: a,
				className: "pl-7 pr-7",
				...o
			}),
			d && /* @__PURE__ */ x("button", {
				type: "button",
				onClick: m,
				className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
				children: /* @__PURE__ */ x(Ee, { className: "h-3.5 w-3.5" })
			})
		]
	});
});
Wj.displayName = "AppSearchInput";
//#endregion
//#region src/components/common/AppTreeView.tsx
var Gj = ({ data: e, selectedId: t, onSelect: n, defaultExpanded: r = [], showIcons: i = !0, className: a }) => {
	let [o, s] = g(new Set(r)), c = u((e) => {
		s((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, []), l = (e, r) => {
		let a = e.children && e.children.length > 0, s = o.has(e.id), u = e.id === t;
		return /* @__PURE__ */ S("div", { children: [/* @__PURE__ */ S("button", {
			type: "button",
			disabled: e.disabled,
			onClick: () => {
				a && c(e.id), n?.(e);
			},
			className: q("flex w-full items-center gap-1 rounded-sm px-1.5 py-1 text-xs transition-colors", u ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground", e.disabled && "opacity-50 pointer-events-none"),
			style: { paddingLeft: r * 16 + 4 },
			children: [
				/* @__PURE__ */ x("span", {
					className: "flex h-4 w-4 shrink-0 items-center justify-center",
					children: a ? /* @__PURE__ */ x(j, { className: q("h-3.5 w-3.5 transition-transform", s && "rotate-90") }) : /* @__PURE__ */ x("span", { className: "w-3.5" })
				}),
				i && /* @__PURE__ */ x("span", {
					className: "flex h-4 w-4 shrink-0 items-center justify-center text-muted-foreground",
					children: e.icon ?? x(a ? s ? se : oe : B, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ x("span", {
					className: "truncate",
					children: e.label
				})
			]
		}), a && s && /* @__PURE__ */ x("div", { children: e.children.map((e) => l(e, r + 1)) })] }, e.id);
	};
	return /* @__PURE__ */ x("div", {
		className: q("flex flex-col", a),
		children: e.map((e) => l(e, 0))
	});
};
//#endregion
//#region src/components/common/AppDraggableTree.tsx
function Kj(e, t) {
	return e.some((e) => e.id === t || Kj(e.children ?? [], t));
}
function qj(e, t) {
	let n = null, r = (e) => e.reduce((e, i) => (i.id === t ? n = i : e.push(i.children ? {
		...i,
		children: r(i.children)
	} : i), e), []);
	return [r(e), n];
}
function Jj(e, t, n, r) {
	let i = [];
	for (let a of e) a.id === t ? n === "before" ? i.push(r, a) : n === "after" ? i.push(a, r) : i.push({
		...a,
		children: [...a.children ?? [], r]
	}) : i.push(a.children ? {
		...a,
		children: Jj(a.children, t, n, r)
	} : a);
	return i;
}
var Yj = ({ data: e, onChange: t, selectedId: n, onSelect: r, defaultExpanded: i = [], showIcons: a = !0, className: o }) => {
	let [s, c] = g(new Set(i)), [l, u] = g(null), [d, f] = g(null), p = h(null), m = (e) => c((t) => {
		let n = new Set(t);
		return n.has(e) ? n.delete(e) : n.add(e), n;
	}), _ = (e, t) => {
		p.current = t, u(t), e.dataTransfer.effectAllowed = "move";
	}, v = (t, n) => {
		t.preventDefault(), t.stopPropagation();
		let r = p.current;
		if (!r || r === n || Kj(e.flatMap((e) => e.children ?? []), n) && Kj((() => {
			let t = (e) => e.find((e) => e.id === r) ?? e.reduce((e, n) => e ?? t(n.children ?? []), null);
			return t(e)?.children ?? [];
		})(), n)) return;
		let i = t.currentTarget.getBoundingClientRect(), a = (t.clientY - i.top) / i.height, o = a < .28 ? "before" : a > .72 ? "after" : "into";
		t.dataTransfer.dropEffect = "move", f({
			id: n,
			pos: o
		});
	}, y = (n, r) => {
		n.preventDefault(), n.stopPropagation();
		let i = p.current;
		if (!i || i === r || !d || d.id !== r) return;
		let [a, o] = qj(e, i);
		o && (t(Jj(a, r, d.pos, o)), u(null), f(null), p.current = null);
	}, b = () => {
		u(null), f(null), p.current = null;
	}, C = (e, t) => {
		let i = (e.children?.length ?? 0) > 0, o = s.has(e.id), c = e.id === n, u = e.id === l, f = d?.id === e.id && d.pos === "before", p = d?.id === e.id && d.pos === "after", h = d?.id === e.id && d.pos === "into", g = t * 14 + 4;
		return /* @__PURE__ */ S("div", {
			className: q(u && "opacity-30"),
			children: [
				f && /* @__PURE__ */ x("div", {
					className: "h-0.5 rounded-full bg-primary",
					style: { marginLeft: g + 18 }
				}),
				/* @__PURE__ */ S("div", {
					draggable: !e.disabled,
					onDragStart: (t) => _(t, e.id),
					onDragOver: (t) => v(t, e.id),
					onDrop: (t) => y(t, e.id),
					onDragEnd: b,
					onClick: () => {
						i && m(e.id), r?.(e);
					},
					role: "button",
					tabIndex: e.disabled ? -1 : 0,
					onKeyDown: (t) => {
						(t.key === "Enter" || t.key === " ") && (t.preventDefault(), i && m(e.id), r?.(e));
					},
					className: q("group flex w-full cursor-pointer select-none items-center gap-1 rounded-sm py-1 pr-2 text-xs transition-colors", c ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground", h && "outline outline-1 outline-primary bg-primary/10", e.disabled && "pointer-events-none opacity-50"),
					style: { paddingLeft: g },
					children: [
						/* @__PURE__ */ x(ce, { className: q("h-3 w-3 shrink-0 transition-opacity", c ? "opacity-60" : "opacity-0 group-hover:opacity-40") }),
						/* @__PURE__ */ x("span", {
							className: "flex h-4 w-4 shrink-0 items-center justify-center",
							children: i ? /* @__PURE__ */ x(j, { className: q("h-3.5 w-3.5 transition-transform", o && "rotate-90") }) : /* @__PURE__ */ x("span", { className: "w-3.5" })
						}),
						a && /* @__PURE__ */ x("span", {
							className: q("flex h-4 w-4 shrink-0 items-center justify-center", c ? "text-primary-foreground/70" : "text-muted-foreground"),
							children: e.icon ?? x(i ? o ? se : oe : B, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ x("span", {
							className: "truncate",
							children: e.label
						})
					]
				}),
				p && /* @__PURE__ */ x("div", {
					className: "h-0.5 rounded-full bg-primary",
					style: { marginLeft: g + 18 }
				}),
				i && o && /* @__PURE__ */ x("div", { children: e.children.map((e) => C(e, t + 1)) })
			]
		}, e.id);
	};
	return /* @__PURE__ */ x("div", {
		className: q("flex flex-col", o),
		children: e.map((e) => C(e, 0))
	});
}, Xj = ({ steps: e, activeStep: t, orientation: n = "horizontal", className: r }) => n === "vertical" ? /* @__PURE__ */ x("div", {
	className: q("flex flex-col", r),
	children: e.map((n, r) => {
		let i = r < t, a = r === t, o = r === e.length - 1;
		return /* @__PURE__ */ S("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ S("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ x("div", {
					className: q("flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors", i && "bg-primary text-primary-foreground", a && "border-2 border-primary text-primary", !i && !a && "border border-border text-muted-foreground"),
					children: i ? /* @__PURE__ */ x(T, { className: "h-3.5 w-3.5" }) : r + 1
				}), !o && /* @__PURE__ */ x("div", { className: q("w-px flex-1 min-h-6", i ? "bg-primary" : "bg-border") })]
			}), /* @__PURE__ */ S("div", {
				className: q("pt-0.5", !o && "pb-4"),
				children: [/* @__PURE__ */ x("p", {
					className: q("text-xs font-medium", a ? "text-primary" : i ? "text-foreground" : "text-muted-foreground"),
					children: n.label
				}), n.description && /* @__PURE__ */ x("p", {
					className: "text-[10px] text-muted-foreground mt-0.5",
					children: n.description
				})]
			})]
		}, r);
	})
}) : /* @__PURE__ */ x("div", {
	className: q("flex items-start", r),
	children: e.map((n, r) => {
		let i = r < t, a = r === t, o = r === e.length - 1;
		return /* @__PURE__ */ S("div", {
			className: "flex flex-1 flex-col items-center",
			children: [/* @__PURE__ */ S("div", {
				className: "flex w-full items-center",
				children: [
					/* @__PURE__ */ x("div", { className: q("h-px flex-1", r === 0 ? "bg-transparent" : i ? "bg-primary" : "bg-border") }),
					/* @__PURE__ */ x("div", {
						className: q("flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors", i && "bg-primary text-primary-foreground", a && "border-2 border-primary text-primary", !i && !a && "border border-border text-muted-foreground"),
						children: i ? /* @__PURE__ */ x(T, { className: "h-3.5 w-3.5" }) : r + 1
					}),
					/* @__PURE__ */ x("div", { className: q("h-px flex-1", o ? "bg-transparent" : i ? "bg-primary" : "bg-border") })
				]
			}), /* @__PURE__ */ S("div", {
				className: "mt-1.5 text-center px-1",
				children: [/* @__PURE__ */ x("p", {
					className: q("text-xs font-medium", a ? "text-primary" : i ? "text-foreground" : "text-muted-foreground"),
					children: n.label
				}), n.description && /* @__PURE__ */ x("p", {
					className: "text-[10px] text-muted-foreground mt-0.5",
					children: n.description
				})]
			})]
		}, r);
	})
}), Zj = {
	default: "bg-muted text-muted-foreground",
	blue: "bg-blue-100 text-blue-600",
	green: "bg-green-100 text-green-600",
	yellow: "bg-yellow-100 text-yellow-600",
	red: "bg-red-100 text-red-600"
}, Qj = ({ title: e, value: t, unit: n, change: r, changeLabel: i, icon: a, iconColor: o = "default", className: s }) => {
	let c = r !== void 0 && r > 0, l = r !== void 0 && r < 0;
	return /* @__PURE__ */ x(lb, {
		className: q(s),
		children: /* @__PURE__ */ S(pb, {
			className: "flex items-start gap-3 pt-4",
			children: [a && /* @__PURE__ */ x("div", {
				className: q("flex h-9 w-9 shrink-0 items-center justify-center rounded-md", Zj[o]),
				children: /* @__PURE__ */ x(a, { className: "h-4.5 w-4.5" })
			}), /* @__PURE__ */ S("div", {
				className: "flex-1 min-w-0",
				children: [
					/* @__PURE__ */ x("p", {
						className: "text-xs text-muted-foreground truncate",
						children: e
					}),
					/* @__PURE__ */ S("div", {
						className: "flex items-baseline gap-1 mt-0.5",
						children: [/* @__PURE__ */ x("span", {
							className: "text-xl font-bold tabular-nums leading-none",
							children: t
						}), n && /* @__PURE__ */ x("span", {
							className: "text-xs text-muted-foreground",
							children: n
						})]
					}),
					r !== void 0 && /* @__PURE__ */ S("div", {
						className: "flex items-center gap-1 mt-1.5",
						children: [
							c && /* @__PURE__ */ x(Ce, { className: "h-3 w-3 text-green-600" }),
							l && /* @__PURE__ */ x(Se, { className: "h-3 w-3 text-red-600" }),
							/* @__PURE__ */ S("span", {
								className: q("text-[10px] font-medium tabular-nums", c && "text-green-600", l && "text-red-600", !c && !l && "text-muted-foreground"),
								children: [
									c && "+",
									r,
									"%"
								]
							}),
							i && /* @__PURE__ */ x("span", {
								className: "text-[10px] text-muted-foreground",
								children: i
							})
						]
					})
				]
			})]
		})
	});
}, $j = ({ items: e, value: t, onChange: n, leftTitle: r = "선택 가능", rightTitle: i = "선택됨", showSearch: a = !0, height: o = 240, className: s }) => {
	let [c, l] = g(/* @__PURE__ */ new Set()), [u, d] = g(/* @__PURE__ */ new Set()), [f, p] = g(""), [h, _] = g(""), v = m(() => new Set(t), [t]), y = m(() => e.filter((e) => !v.has(e.value)), [e, v]), b = m(() => e.filter((e) => v.has(e.value)), [e, v]), C = m(() => f ? y.filter((e) => e.label.toLowerCase().includes(f.toLowerCase())) : y, [y, f]), w = m(() => h ? b.filter((e) => e.label.toLowerCase().includes(h.toLowerCase())) : b, [b, h]), T = (e, t) => {
		e((e) => {
			let n = new Set(e);
			return n.has(t) ? n.delete(t) : n.add(t), n;
		});
	}, E = () => {
		n([...t, ...c]), l(/* @__PURE__ */ new Set());
	}, D = () => {
		n(t.filter((e) => !u.has(e))), d(/* @__PURE__ */ new Set());
	}, O = () => {
		n(e.filter((e) => !e.disabled).map((e) => e.value)), l(/* @__PURE__ */ new Set());
	}, A = () => {
		n([]), d(/* @__PURE__ */ new Set());
	}, M = (e, t, n, r, i, s) => /* @__PURE__ */ S("div", {
		className: "flex flex-1 flex-col border rounded-md overflow-hidden min-w-0",
		children: [
			/* @__PURE__ */ S("div", {
				className: "flex items-center justify-between border-b bg-muted/40 px-2.5 py-1.5",
				children: [/* @__PURE__ */ x("span", {
					className: "text-xs font-medium",
					children: r
				}), /* @__PURE__ */ S("span", {
					className: "text-[10px] text-muted-foreground",
					children: [t.size > 0 && `${t.size}/`, e.length]
				})]
			}),
			a && /* @__PURE__ */ x("div", {
				className: "border-b px-2 py-1.5",
				children: /* @__PURE__ */ S("div", {
					className: "relative",
					children: [/* @__PURE__ */ x(ye, { className: "absolute left-1.5 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" }), /* @__PURE__ */ x(Iy, {
						value: i,
						onChange: (e) => s(e.target.value),
						placeholder: "검색",
						className: "h-6 pl-6 text-xs"
					})]
				})
			}),
			/* @__PURE__ */ x("div", {
				className: "flex-1 overflow-y-auto",
				style: { maxHeight: o },
				children: e.length === 0 ? /* @__PURE__ */ x("div", {
					className: "flex items-center justify-center h-full text-xs text-muted-foreground py-4",
					children: "항목 없음"
				}) : e.map((e) => /* @__PURE__ */ S("label", {
					className: q("flex items-center gap-2 px-2.5 py-1 text-xs cursor-pointer hover:bg-accent transition-colors", e.disabled && "opacity-50 pointer-events-none", t.has(e.value) && "bg-accent/60"),
					children: [/* @__PURE__ */ x("input", {
						type: "checkbox",
						checked: t.has(e.value),
						disabled: e.disabled,
						onChange: () => T(n, e.value),
						className: "h-3.5 w-3.5 rounded border-border"
					}), /* @__PURE__ */ x("span", {
						className: "truncate",
						children: e.label
					})]
				}, e.value))
			})
		]
	});
	return /* @__PURE__ */ S("div", {
		className: q("flex items-stretch gap-2", s),
		children: [
			M(C, c, l, r, f, p),
			/* @__PURE__ */ S("div", {
				className: "flex flex-col items-center justify-center gap-1 shrink-0",
				children: [
					/* @__PURE__ */ x("button", {
						type: "button",
						disabled: c.size === 0,
						onClick: E,
						className: "flex h-6 w-6 items-center justify-center rounded border bg-background hover:bg-accent disabled:opacity-50 disabled:pointer-events-none transition-colors",
						children: /* @__PURE__ */ x(j, { className: "h-3.5 w-3.5" })
					}),
					/* @__PURE__ */ x("button", {
						type: "button",
						onClick: O,
						className: "flex h-6 w-6 items-center justify-center rounded border bg-background hover:bg-accent transition-colors",
						children: /* @__PURE__ */ x(I, { className: "h-3.5 w-3.5" })
					}),
					/* @__PURE__ */ x("button", {
						type: "button",
						onClick: A,
						className: "flex h-6 w-6 items-center justify-center rounded border bg-background hover:bg-accent transition-colors",
						children: /* @__PURE__ */ x(F, { className: "h-3.5 w-3.5" })
					}),
					/* @__PURE__ */ x("button", {
						type: "button",
						disabled: u.size === 0,
						onClick: D,
						className: "flex h-6 w-6 items-center justify-center rounded border bg-background hover:bg-accent disabled:opacity-50 disabled:pointer-events-none transition-colors",
						children: /* @__PURE__ */ x(k, { className: "h-3.5 w-3.5" })
					})
				]
			}),
			M(w, u, d, i, h, _)
		]
	});
}, eM = ({ trigger: e, children: t, side: n = "bottom", align: r = "start", width: i, className: a, open: o, onOpenChange: s }) => /* @__PURE__ */ S(pD, {
	open: o,
	onOpenChange: s,
	children: [/* @__PURE__ */ x(mD, {
		asChild: !0,
		children: e
	}), /* @__PURE__ */ x(hD, {
		side: n,
		align: r,
		style: i ? { width: i } : void 0,
		className: q(a),
		children: t
	})]
}), tM = {
	sm: "h-6 w-6 text-[10px]",
	md: "h-8 w-8 text-xs",
	lg: "h-10 w-10 text-sm"
}, nM = [
	"bg-blue-100 text-blue-700",
	"bg-green-100 text-green-700",
	"bg-yellow-100 text-yellow-700",
	"bg-purple-100 text-purple-700",
	"bg-pink-100 text-pink-700",
	"bg-cyan-100 text-cyan-700",
	"bg-orange-100 text-orange-700"
];
function rM(e) {
	let t = e.trim().split(/\s+/);
	return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : e.slice(0, 2).toUpperCase();
}
function iM(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
	return nM[Math.abs(t) % nM.length];
}
var aM = ({ src: e, name: t, size: n = "md", className: r }) => {
	let i = t ? rM(t) : "?", a = t ? iM(t) : "bg-muted text-muted-foreground";
	return /* @__PURE__ */ x("div", {
		className: q("inline-flex shrink-0 items-center justify-center rounded-full font-medium select-none overflow-hidden", tM[n], !e && a, r),
		title: t,
		children: e ? /* @__PURE__ */ x("img", {
			src: e,
			alt: t ?? "",
			className: "h-full w-full object-cover"
		}) : i
	});
}, oM = ({ label: e, labelAlign: t, labelWidth: n, required: r, error: i, hint: a, value: o, onChange: s, placeholder: c = "입력 후 Enter", maxTags: l, allowDuplicates: u = !1, disabled: d, className: f }) => {
	let [p, m] = g(""), _ = h(null), v = (e) => {
		let t = e.trim();
		t && (!u && o.includes(t) || l && o.length >= l || (s([...o, t]), m("")));
	}, y = (e) => {
		s(o.filter((t, n) => n !== e));
	};
	return /* @__PURE__ */ x(Fy, {
		label: e,
		labelAlign: t,
		labelWidth: n,
		required: r,
		error: i,
		hint: a,
		children: /* @__PURE__ */ S("div", {
			onClick: () => _.current?.focus(),
			className: q("flex min-h-[28px] flex-wrap items-center gap-1 rounded-md border bg-background px-2 py-1 text-xs transition-colors", "focus-within:ring-1 focus-within:ring-ring", d && "opacity-50 pointer-events-none", i && "border-destructive", f),
			children: [o.map((e, t) => /* @__PURE__ */ S("span", {
				className: "inline-flex items-center gap-0.5 rounded bg-muted px-1.5 py-0.5 text-xs",
				children: [e, !d && /* @__PURE__ */ x("button", {
					type: "button",
					onClick: (e) => {
						e.stopPropagation(), y(t);
					},
					className: "flex h-3 w-3 items-center justify-center rounded-sm hover:bg-foreground/10 transition-colors",
					children: /* @__PURE__ */ x(Ee, { className: "h-2.5 w-2.5" })
				})]
			}, `${e}-${t}`)), /* @__PURE__ */ x("input", {
				ref: _,
				value: p,
				onChange: (e) => m(e.target.value),
				onKeyDown: (e) => {
					e.nativeEvent.isComposing || (e.key === "Enter" ? (e.preventDefault(), v(p)) : e.key === "Backspace" && !p && o.length > 0 && y(o.length - 1));
				},
				onBlur: () => v(p),
				placeholder: o.length === 0 ? c : "",
				disabled: d,
				className: "flex-1 min-w-[60px] bg-transparent outline-none text-xs placeholder:text-muted-foreground"
			})]
		})
	});
}, sM = ({ icon: e = ue, title: t = "데이터가 없습니다", description: n, action: r, className: i }) => /* @__PURE__ */ S("div", {
	className: q("flex flex-col items-center justify-center gap-2 py-12 text-center", i),
	children: [
		/* @__PURE__ */ x("div", {
			className: "flex h-12 w-12 items-center justify-center rounded-full bg-muted",
			children: /* @__PURE__ */ x(e, { className: "h-6 w-6 text-muted-foreground" })
		}),
		/* @__PURE__ */ x("p", {
			className: "text-sm font-medium text-foreground",
			children: t
		}),
		n && /* @__PURE__ */ x("p", {
			className: "text-xs text-muted-foreground max-w-xs",
			children: n
		}),
		r && /* @__PURE__ */ x("div", {
			className: "mt-2",
			children: r
		})
	]
}), cM = [
	"#ef4444",
	"#f97316",
	"#f59e0b",
	"#eab308",
	"#84cc16",
	"#22c55e",
	"#14b8a6",
	"#06b6d4",
	"#3b82f6",
	"#6366f1",
	"#8b5cf6",
	"#a855f7",
	"#d946ef",
	"#ec4899",
	"#f43f5e",
	"#64748b"
], lM = ({ label: e, labelAlign: t, labelWidth: n, required: r, error: i, hint: a, value: o = "#3b82f6", onChange: s, presets: c = cM, allowCustom: l = !0, disabled: u, className: d }) => {
	let [p, m] = g(!1), _ = h(null);
	return f(() => {
		let e = (e) => {
			_.current && !_.current.contains(e.target) && m(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), /* @__PURE__ */ x(Fy, {
		label: e,
		labelAlign: t,
		labelWidth: n,
		required: r,
		error: i,
		hint: a,
		children: /* @__PURE__ */ S("div", {
			ref: _,
			className: q("relative inline-block", d),
			children: [/* @__PURE__ */ S("button", {
				type: "button",
				disabled: u,
				onClick: () => m((e) => !e),
				className: q("flex h-7 items-center gap-1.5 rounded-md border px-2 text-xs transition-colors hover:bg-accent", u && "opacity-50 pointer-events-none"),
				children: [/* @__PURE__ */ x("span", {
					className: "h-4 w-4 shrink-0 rounded border",
					style: { backgroundColor: o }
				}), /* @__PURE__ */ x("span", {
					className: "tabular-nums text-muted-foreground uppercase",
					children: o
				})]
			}), p && /* @__PURE__ */ S("div", {
				className: "absolute left-0 top-full z-50 mt-1 rounded-md border bg-popover p-2 shadow-md",
				children: [/* @__PURE__ */ x("div", {
					className: "grid grid-cols-8 gap-1",
					children: c.map((e) => /* @__PURE__ */ x("button", {
						type: "button",
						onClick: () => {
							s?.(e), m(!1);
						},
						className: q("h-5 w-5 rounded border transition-transform hover:scale-110", o === e && "ring-2 ring-primary ring-offset-1"),
						style: { backgroundColor: e },
						title: e
					}, e))
				}), l && /* @__PURE__ */ S("div", {
					className: "mt-2 flex items-center gap-1.5 border-t pt-2",
					children: [
						/* @__PURE__ */ x(me, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
						/* @__PURE__ */ x("input", {
							type: "color",
							value: o,
							onChange: (e) => s?.(e.target.value),
							className: "h-5 w-5 cursor-pointer border-0 p-0 bg-transparent"
						}),
						/* @__PURE__ */ x("input", {
							type: "text",
							value: o,
							onChange: (e) => {
								let t = e.target.value;
								/^#[0-9a-fA-F]{0,6}$/.test(t) && s?.(t);
							},
							className: "flex-1 rounded border bg-background px-1.5 py-0.5 text-xs tabular-nums uppercase w-[70px]",
							maxLength: 7
						})
					]
				})]
			})]
		})
	});
};
//#endregion
//#region src/components/common/AppKPI.tsx
function uM(e) {
	return e >= .9 ? "#22c55e" : e >= .7 ? "#f59e0b" : "#ef4444";
}
var dM = ({ value: e, target: t, label: n, unit: r = "%", size: i = 120, autoColor: a = !0, color: o, className: s }) => {
	let c = t > 0 ? Math.min(e / t, 1) : 0, l = Math.round(c * 100), u = o ?? (a ? uM(c) : "#3b82f6"), d = i * .08, f = (i - d) / 2, p = Math.PI * f, m = p * (1 - c);
	return /* @__PURE__ */ S("div", {
		className: q("flex flex-col items-center", s),
		children: [
			/* @__PURE__ */ S("svg", {
				width: i,
				height: i * .6,
				viewBox: `0 0 ${i} ${i * .6}`,
				children: [
					/* @__PURE__ */ x("path", {
						d: `M ${d / 2} ${i * .55} A ${f} ${f} 0 0 1 ${i - d / 2} ${i * .55}`,
						fill: "none",
						stroke: "currentColor",
						strokeWidth: d,
						className: "text-muted/30",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ x("path", {
						d: `M ${d / 2} ${i * .55} A ${f} ${f} 0 0 1 ${i - d / 2} ${i * .55}`,
						fill: "none",
						stroke: u,
						strokeWidth: d,
						strokeDasharray: p,
						strokeDashoffset: m,
						strokeLinecap: "round",
						className: "transition-all duration-500"
					}),
					/* @__PURE__ */ S("text", {
						x: i / 2,
						y: i * .48,
						textAnchor: "middle",
						className: "fill-foreground font-bold",
						style: { fontSize: i * .22 },
						children: [l, /* @__PURE__ */ x("tspan", {
							style: { fontSize: i * .12 },
							children: r
						})]
					})
				]
			}),
			n && /* @__PURE__ */ x("p", {
				className: "text-xs text-muted-foreground mt-1",
				children: n
			}),
			/* @__PURE__ */ S("p", {
				className: "text-[10px] text-muted-foreground tabular-nums",
				children: [
					e.toLocaleString(),
					" / ",
					t.toLocaleString()
				]
			})
		]
	});
}, fM = ({ value: e, type: t = "text", options: n, readOnly: r, align: i, render: a, row: o, hasError: s, onSave: c }) => {
	let [l, u] = g(!1), [d, p] = g(String(e ?? "")), m = h(null);
	if (f(() => {
		l && m.current?.focus();
	}, [l]), t === "checkbox") return /* @__PURE__ */ x("div", {
		className: "flex items-center justify-center",
		children: /* @__PURE__ */ x("input", {
			type: "checkbox",
			checked: !!e,
			disabled: r,
			onChange: (e) => c(e.target.checked),
			className: "h-3.5 w-3.5 rounded border-border cursor-pointer"
		})
	});
	if (!l) {
		let c = a ? a({
			value: e,
			row: o
		}) : t === "select" ? n?.find((t) => t.value === String(e ?? ""))?.label ?? String(e ?? "") : t === "number" ? e !== void 0 && e !== "" ? Number(e).toLocaleString() : "" : String(e ?? "");
		return /* @__PURE__ */ x("div", {
			onClick: () => {
				r || (p(String(e ?? "")), u(!0));
			},
			className: q("min-h-[24px] px-1 py-0.5 -mx-1 rounded-sm text-xs cursor-text", !r && "hover:bg-accent/50", r && "cursor-default text-muted-foreground", i === "right" && "text-right tabular-nums", i === "center" && "text-center", s && "ring-1 ring-destructive rounded"),
			children: c || /* @__PURE__ */ x("span", {
				className: "text-muted-foreground/50",
				children: "—"
			})
		});
	}
	let _ = (e) => {
		u(!1), c(t === "number" ? e === "" ? "" : Number(e) : e);
	};
	return t === "select" ? /* @__PURE__ */ S("select", {
		ref: m,
		value: d,
		onChange: (e) => _(e.target.value),
		onBlur: () => _(d),
		className: q("w-full rounded border bg-background px-1 py-0.5 text-xs outline-none focus:ring-1 focus:ring-ring", s && "border-destructive"),
		children: [/* @__PURE__ */ x("option", {
			value: "",
			children: "선택"
		}), n?.map((e) => /* @__PURE__ */ x("option", {
			value: e.value,
			children: e.label
		}, e.value))]
	}) : /* @__PURE__ */ x("input", {
		ref: m,
		type: t === "number" ? "number" : "text",
		value: d,
		onChange: (e) => p(e.target.value),
		onBlur: () => _(d),
		onKeyDown: (e) => {
			e.nativeEvent.isComposing || (e.key === "Enter" && _(d), e.key === "Escape" && u(!1));
		},
		className: q("w-full rounded border bg-background px-1 py-0.5 text-xs outline-none focus:ring-1 focus:ring-ring", i === "right" && "text-right tabular-nums", s && "border-destructive")
	});
};
function pM(e, t, n) {
	let r = [...e], [i] = r.splice(t, 1);
	return r.splice(n, 0, i), r;
}
function mM(e, t) {
	let n = new Blob(["﻿" + t], { type: "text/csv;charset=utf-8;" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e, i.click(), URL.revokeObjectURL(r);
}
function hM(e, t) {
	let n = /* @__PURE__ */ new Map(), r = 0;
	for (; r < e.length;) {
		let i = r + 1;
		for (; i < e.length && e[i][t] === e[r][t];) i++;
		n.set(r, i - r);
		for (let e = r + 1; e < i; e++) n.set(e, 0);
		r = i;
	}
	return n;
}
function gM({ columns: e, onColumnsChange: t, data: n, onChange: r, createRow: i, addable: a = !1, deletable: o = !1, reorderable: s = !1, columnReorderable: c = !1, columnResizable: l = !1, selectable: d = !1, selectedRows: p, onSelectedRowsChange: _, sortable: v = !1, serverSort: y = !1, onSortChange: b, filterable: C = !1, serverFilter: w = !1, onFilterChange: T, pagination: E = !1, pageSize: O = 10, serverPagination: k = !1, totalCount: A, onPageChange: j, onRowClick: M, onRowDoubleClick: P, exportable: F = !1, exportFileName: I = "data", actions: te, maxRows: L, height: ne, maxHeight: R, showRowNumber: B = !1, emptyMessage: ae = "데이터가 없습니다.", loading: oe = !1, rowClassName: se, columnToggle: le = !1, className: ue }) {
	let [de, fe] = g([]), [pe, me] = g([]), [he, _e] = g([]), [ve, Se] = g(null), [Ce, Te] = g(null), [De, Oe] = g(/* @__PURE__ */ new Set()), [ke, Ae] = g({
		pageIndex: 0,
		pageSize: O
	}), je = h(null), Me = h(null), Ne = h(null), [Pe, Fe] = g(/* @__PURE__ */ new Set()), Ie = m(() => p ? new Set(p) : Pe, [p, Pe]), Le = u((e) => {
		if (_) {
			let t = e(Ie);
			_(Array.from(t));
		} else Fe(e);
	}, [Ie, _]), [Re, ze] = g(e), Be = h(e);
	Be.current !== e && (Be.current = e, ze(e));
	let Ve = t ? e : Re, [He, Ue] = g(null), [We, Ge] = g(null), [Ke, qe] = g(null), [Je, Ye] = g(null), [Xe, Ze] = g({}), Qe = h(null);
	f(() => {
		let e = (e) => {
			if (!Qe.current) return;
			let t = e.clientX - Qe.current.startX, n = Math.max(40, Qe.current.startW + t);
			Ze((e) => ({
				...e,
				[Qe.current.key]: n
			}));
		}, t = () => {
			Qe.current = null;
		};
		return document.addEventListener("mousemove", e), document.addEventListener("mouseup", t), () => {
			document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", t);
		};
	}, []), f(() => {
		if (!ve) return;
		let e = (e) => {
			je.current && !je.current.contains(e.target) && Se(null);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [ve]), f(() => {
		if (!Ce) return;
		let e = (e) => {
			Me.current && !Me.current.contains(e.target) && Te(null);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [Ce]);
	let $e = h(T);
	$e.current = T;
	let et = h(b);
	et.current = b, f(() => {
		w && $e.current?.(he.filter((e) => e.value !== "" && e.value !== void 0).map((e) => ({
			key: e.id,
			value: String(e.value)
		})));
	}, [he, w]), f(() => {
		y && et.current?.(pe.map((e) => ({
			key: e.id,
			direction: e.desc ? "desc" : "asc"
		})));
	}, [pe, y]);
	let tt = h(j);
	tt.current = j, f(() => {
		k && tt.current?.(ke.pageIndex, ke.pageSize);
	}, [ke, k]);
	let V = m(() => le ? Ve.filter((e) => !De.has(e.accessorKey)) : Ve, [
		Ve,
		De,
		le
	]), nt = m(() => {
		let e = {};
		for (let t of V) t.mergeRows && (e[t.accessorKey] = hM(n, t.accessorKey));
		return e;
	}, [n, V]), rt = u(() => {
		fe((e) => [...e.slice(-19), n]);
	}, [n]), it = () => {
		if (de.length === 0) return;
		let e = de[de.length - 1];
		fe((e) => e.slice(0, -1)), r?.(e);
	}, at = u((e, t, i) => {
		rt();
		let a = n.map((n, r) => r === e ? {
			...n,
			[t]: i
		} : n);
		r?.(a);
	}, [
		n,
		r,
		rt
	]), ot = () => {
		if (L && n.length >= L) return;
		rt();
		let t = i ? i() : Object.fromEntries(e.map((e) => [e.accessorKey, ""]));
		r?.([...n, t]);
	}, st = (e) => {
		rt(), r?.(n.filter((t, n) => n !== e));
	}, H = () => {
		Ie.size !== 0 && (rt(), r?.(n.filter((e, t) => !Ie.has(t))), Le(() => /* @__PURE__ */ new Set()));
	}, ct = (e, t) => {
		Ue(t), e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/plain", String(t));
	}, lt = (e, t) => {
		e.preventDefault(), e.dataTransfer.dropEffect = "move", Ge(t);
	}, ut = (e, t) => {
		e.preventDefault(), He !== null && He !== t && (rt(), r?.(pM(n, He, t))), Ue(null), Ge(null);
	}, dt = () => {
		Ue(null), Ge(null);
	}, ft = (e, t) => {
		qe(t), e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/plain", String(t));
	}, pt = (e, t) => {
		e.preventDefault(), e.dataTransfer.dropEffect = "move", Ye(t);
	}, mt = (e, n) => {
		if (e.preventDefault(), Ke !== null && Ke !== n) {
			let e = pM(Ve, Ke, n);
			t ? t(e) : ze(e);
		}
		qe(null), Ye(null);
	}, ht = () => {
		qe(null), Ye(null);
	}, gt = () => {
		let e = C && !w ? wt.getFilteredRowModel().rows.map((e) => e.original) : n, t = [V.map((e) => e.header), ...e.map((e) => V.map((t) => {
			let n = e[t.accessorKey];
			return t.type === "select" ? t.options?.find((e) => e.value === String(n ?? ""))?.label ?? String(n ?? "") : t.type === "checkbox" ? n ? "Y" : "N" : String(n ?? "");
		}))].map((e) => e.map((e) => `"${e.replace(/"/g, "\"\"")}"`).join(",")).join("\n");
		mM(`${I}.csv`, t);
	};
	f(() => {
		if (!r) return;
		let t = (t) => {
			let a = document.activeElement;
			if (!Ne.current?.contains(a) || a && (a.tagName === "INPUT" || a.tagName === "SELECT" || a.tagName === "TEXTAREA")) return;
			let o = t.clipboardData?.getData("text/plain");
			if (!o) return;
			let s = o.split("\n").filter((e) => e.trim()).map((e) => e.split("	"));
			if (s.length === 0) return;
			rt();
			let c = s.map((t) => {
				let n = i ? i() : Object.fromEntries(e.map((e) => [e.accessorKey, ""]));
				return e.forEach((e, r) => {
					if (r < t.length) {
						let i = t[r].trim();
						n[e.accessorKey] = e.type === "number" ? i === "" ? "" : Number(i) : e.type === "checkbox" ? i === "Y" || i === "true" || i === "1" : i;
					}
				}), n;
			});
			L && n.length + c.length > L ? r([...n, ...c.slice(0, L - n.length)]) : r([...n, ...c]);
		};
		return document.addEventListener("paste", t), () => document.removeEventListener("paste", t);
	}, [
		n,
		r,
		e,
		i,
		rt,
		L
	]);
	let _t = [], vt = h([]);
	d && _t.push({
		id: "_select",
		size: 32,
		header: "",
		cell: ({ row: e }) => /* @__PURE__ */ x("input", {
			type: "checkbox",
			checked: Ie.has(e.index),
			onChange: () => {
				Le((t) => {
					let n = new Set(t);
					return n.has(e.index) ? n.delete(e.index) : n.add(e.index), n;
				});
			},
			className: "h-3.5 w-3.5 rounded border-border cursor-pointer"
		})
	}), s && _t.push({
		id: "_drag",
		header: "",
		size: 28,
		cell: () => /* @__PURE__ */ x("span", {
			className: "flex items-center justify-center cursor-grab active:cursor-grabbing text-muted-foreground/50 hover:text-muted-foreground",
			children: /* @__PURE__ */ x(ce, { className: "h-3.5 w-3.5" })
		})
	});
	let yt = V.map((e) => ({
		accessorKey: e.accessorKey,
		header: e.header,
		size: Xe[e.accessorKey] ?? e.width,
		minSize: e.minWidth,
		enableSorting: (v || y) && e.sortable !== !1,
		enableColumnFilter: C && e.filterable !== !1,
		filterFn: "includesString",
		cell: ({ row: t }) => /* @__PURE__ */ x(fM, {
			value: t.original[e.accessorKey],
			type: e.type,
			options: e.options,
			readOnly: e.readOnly || !r,
			align: e.align,
			render: e.render,
			row: t.original,
			hasError: e.required && (t.original[e.accessorKey] === "" || t.original[e.accessorKey] === void 0 || t.original[e.accessorKey] === null),
			onSave: (n) => at(t.index, e.accessorKey, n)
		})
	})), bt = [];
	o && bt.push({
		id: "_delete",
		header: "",
		size: 36,
		cell: ({ row: e }) => /* @__PURE__ */ x("button", {
			type: "button",
			onClick: () => st(e.index),
			className: "flex h-5 w-5 items-center justify-center rounded-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
			children: /* @__PURE__ */ x(xe, { className: "h-3 w-3" })
		})
	});
	let xt = [
		..._t,
		...yt,
		...bt
	], St = _t.length, U = m(() => new Set(V.filter((e) => e.sticky).map((e) => e.accessorKey)), [V]), Ct = m(() => {
		let e = {}, t = 0;
		for (let e of _t) t += e.size ?? 40;
		for (let n of V) n.sticky && (e[n.accessorKey] = t, t += Xe[n.accessorKey] ?? n.width ?? 100);
		return e;
	}, [
		V,
		Xe,
		_t.length
	]), wt = CC({
		data: n,
		columns: xt,
		state: {
			sorting: pe,
			columnFilters: he,
			...k && { pagination: ke }
		},
		onSortingChange: me,
		onColumnFiltersChange: _e,
		...k && { onPaginationChange: (e) => {
			Ae(typeof e == "function" ? e(ke) : e);
		} },
		getCoreRowModel: dC(),
		...v && !y && { getSortedRowModel: vC() },
		...E && !k && { getPaginationRowModel: _C() },
		...C && !w && { getFilteredRowModel: gC() },
		...k && {
			manualPagination: !0,
			pageCount: A === void 0 ? -1 : Math.ceil(A / ke.pageSize)
		},
		initialState: { pagination: { pageSize: O } }
	});
	vt.current = (C && !w ? wt.getFilteredRowModel().rows : wt.getCoreRowModel().rows).map((e) => e.index);
	let Tt = wt.getRowModel().rows;
	return /* @__PURE__ */ S("div", {
		ref: Ne,
		className: q("flex flex-col gap-2", ue),
		children: [
			/* @__PURE__ */ S("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ S("div", {
					className: "flex items-center gap-1",
					children: [
						a && r && /* @__PURE__ */ x(Dy, {
							variant: "outline",
							size: "sm",
							prefixIcon: ge,
							onClick: ot,
							disabled: L !== void 0 && n.length >= L,
							children: "행 추가"
						}),
						d && o && Ie.size > 0 && r && /* @__PURE__ */ S(Dy, {
							variant: "destructive",
							size: "sm",
							prefixIcon: xe,
							onClick: H,
							children: [
								"선택 삭제 (",
								Ie.size,
								")"
							]
						}),
						de.length > 0 && r && /* @__PURE__ */ x(Dy, {
							variant: "ghost",
							size: "sm",
							prefixIcon: we,
							onClick: it,
							children: "실행취소"
						}),
						le && /* @__PURE__ */ x(Dy, {
							variant: "ghost",
							size: "sm",
							prefixIcon: be,
							onClick: (e) => {
								let t = e.currentTarget.getBoundingClientRect();
								Te((e) => e ? null : t);
							},
							children: "열 설정"
						})
					]
				}), /* @__PURE__ */ S("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ S("span", {
							className: "text-xs text-muted-foreground tabular-nums",
							children: [
								d && Ie.size > 0 && `${Ie.size}개 선택 / `,
								C && he.length > 0 && /* @__PURE__ */ S("span", { children: [
									"필터",
									" ",
									w ? `${he.length}개 활성` : `${wt.getFilteredRowModel().rows.length}건`,
									" ",
									/* @__PURE__ */ x("button", {
										type: "button",
										onClick: () => _e([]),
										className: "text-primary hover:underline",
										children: "초기화"
									})
								] }),
								L && `최대 ${L}행`
							]
						}),
						te && /* @__PURE__ */ x("div", {
							className: "flex items-center gap-1",
							children: te
						}),
						F && /* @__PURE__ */ x(Dy, {
							variant: "ghost",
							size: "sm",
							prefixIcon: z,
							onClick: gt,
							children: "내보내기"
						})
					]
				})]
			}),
			/* @__PURE__ */ x("div", {
				className: "rounded-md border overflow-auto relative",
				style: {
					...ne ? { height: ne } : {},
					...R ? { maxHeight: R } : {}
				},
				children: /* @__PURE__ */ S("table", {
					className: "w-full border-collapse",
					style: { fontSize: "var(--table-font-size)" },
					children: [/* @__PURE__ */ x("thead", {
						className: "border-b border-table-border bg-table-header sticky top-0 z-20",
						children: wt.getHeaderGroups().map((e) => /* @__PURE__ */ S("tr", { children: [B && /* @__PURE__ */ x("th", {
							className: "w-10 px-3 py-2 text-xs font-medium text-table-header-foreground text-center",
							children: "#"
						}), e.headers.map((e, t) => {
							if (e.id === "_select") {
								let t = vt.current, n = t.length > 0 && t.every((e) => Ie.has(e)), r = t.some((e) => Ie.has(e)) && !n;
								return /* @__PURE__ */ x("th", {
									style: { width: 32 },
									className: "px-2 py-2 text-center",
									children: /* @__PURE__ */ x("input", {
										type: "checkbox",
										checked: n,
										ref: (e) => {
											e && (e.indeterminate = r);
										},
										onChange: () => {
											Le(n ? () => /* @__PURE__ */ new Set() : () => new Set(t));
										},
										className: "h-3.5 w-3.5 rounded border-border cursor-pointer"
									})
								}, e.id);
							}
							let n = t - St, r = n >= 0 && n < V.length, i = r ? V[n] : null, a = c && r, o = e.column.getCanSort(), s = e.column.getIsSorted(), u = i && U.has(i.accessorKey), d = i ? Ct[i.accessorKey] : void 0;
							return /* @__PURE__ */ x("th", {
								style: {
									width: e.column.getSize() || void 0,
									...u ? {
										position: "sticky",
										left: d,
										zIndex: 30
									} : {}
								},
								draggable: !!a,
								onDragStart: a ? (e) => ft(e, n) : void 0,
								onDragOver: a ? (e) => pt(e, n) : void 0,
								onDrop: a ? (e) => mt(e, n) : void 0,
								onDragEnd: a ? ht : void 0,
								className: q("px-3 py-2 text-center text-xs font-medium text-table-header-foreground whitespace-nowrap", a && "cursor-grab active:cursor-grabbing select-none", o && "cursor-pointer select-none hover:text-foreground", u && "bg-table-header", Ke !== null && r && Je === n && Ke !== n && (Ke < n ? "border-r-2 border-r-primary" : "border-l-2 border-l-primary"), Ke !== null && r && Ke === n && "opacity-40"),
								onClick: o ? e.column.getToggleSortingHandler() : void 0,
								children: /* @__PURE__ */ S("div", {
									className: "flex items-center justify-center relative",
									children: [
										/* @__PURE__ */ x("span", {
											className: "truncate",
											children: yC(e.column.columnDef.header, e.getContext())
										}),
										/* @__PURE__ */ S("span", {
											className: "absolute right-0 flex items-center gap-0.5",
											children: [C && r && i && i.filterable !== !1 && /* @__PURE__ */ x("button", {
												type: "button",
												onClick: (e) => {
													e.stopPropagation();
													let t = e.currentTarget.getBoundingClientRect();
													Se((e) => e?.key === i.accessorKey ? null : {
														key: i.accessorKey,
														rect: t
													});
												},
												className: q("flex items-center justify-center rounded-sm h-4 w-4 transition-colors flex-shrink-0", ve?.key === i.accessorKey || he.some((e) => e.id === i.accessorKey && e.value) ? "text-primary" : "text-muted-foreground/40 hover:text-muted-foreground"),
												children: /* @__PURE__ */ x(ye, { className: "h-3 w-3" })
											}), o && /* @__PURE__ */ x("span", {
												className: "text-muted-foreground",
												children: s === "asc" ? /* @__PURE__ */ x(N, { className: "h-3 w-3" }) : s === "desc" ? /* @__PURE__ */ x(D, { className: "h-3 w-3" }) : /* @__PURE__ */ x(ee, { className: "h-3 w-3 opacity-30" })
											})]
										}),
										l && r && /* @__PURE__ */ x("div", {
											onMouseDown: (e) => {
												e.stopPropagation(), e.preventDefault(), Qe.current = {
													key: i.accessorKey,
													startX: e.clientX,
													startW: Xe[i.accessorKey] ?? i.width ?? 100
												};
											},
											className: "absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary/40 active:bg-primary/60"
										})
									]
								})
							}, e.id);
						})] }, e.id))
					}), /* @__PURE__ */ x("tbody", { children: oe ? Array.from({ length: Math.min(O, 8) }).map((e, t) => /* @__PURE__ */ S("tr", {
						className: "border-b",
						children: [B && /* @__PURE__ */ x("td", {
							className: "px-3 py-2 w-10",
							children: /* @__PURE__ */ x("div", { className: "h-3 rounded bg-muted animate-pulse" })
						}), xt.map((e, n) => /* @__PURE__ */ x("td", {
							className: "px-3 py-2",
							children: /* @__PURE__ */ x("div", {
								className: "h-3 rounded bg-muted animate-pulse",
								style: { width: `${60 + (t * 7 + n * 13) % 30}%` }
							})
						}, n))]
					}, t)) : Tt.length === 0 ? /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ S("td", {
						colSpan: xt.length + +!!B,
						className: "py-8 text-center text-xs text-muted-foreground",
						children: [
							ae,
							" ",
							a && r && " \"행 추가\" 버튼을 클릭하세요."
						]
					}) }) : Tt.map((e, t) => {
						let n = e.index, r = Ie.has(n), i = E ? wt.getState().pagination.pageIndex * wt.getState().pagination.pageSize + t + 1 : t + 1;
						return /* @__PURE__ */ S("tr", {
							draggable: s,
							onDragStart: s ? (e) => ct(e, n) : void 0,
							onDragOver: s ? (e) => lt(e, n) : void 0,
							onDrop: s ? (e) => ut(e, n) : void 0,
							onDragEnd: s ? dt : void 0,
							onClick: M ? () => M(e.original, n) : void 0,
							onDoubleClick: P ? () => P(e.original, n) : void 0,
							className: q("border-b border-table-border bg-table-row text-table-row-foreground transition-colors", (M || P) && "cursor-pointer", r ? "bg-table-row-selected" : "hover:bg-table-row-hover", se?.(e.original, n), He !== null && We === n && He !== n && (He < n ? "border-b-2 border-b-primary" : "border-t-2 border-t-primary"), He !== null && He === n && "opacity-40"),
							children: [B && /* @__PURE__ */ x("td", {
								className: "px-3 text-[10px] text-table-header-foreground tabular-nums text-center w-10",
								style: { height: "var(--table-row-height)" },
								children: i
							}), e.getVisibleCells().map((e, t) => {
								let r = t - St, i = r >= 0 && r < V.length ? V[r] : null;
								if (i?.mergeRows) {
									let t = nt[i.accessorKey];
									if (t) {
										let r = t.get(n) ?? 1;
										if (r === 0) return null;
										let a = U.has(i.accessorKey), o = Ct[i.accessorKey];
										return /* @__PURE__ */ x("td", {
											rowSpan: r,
											className: q("px-3 border-b border-table-border", a && "sticky bg-background"),
											style: a ? {
												height: "var(--table-row-height)",
												left: o,
												zIndex: 10
											} : { height: "var(--table-row-height)" },
											children: yC(e.column.columnDef.cell, e.getContext())
										}, e.id);
									}
								}
								let a = i && U.has(i.accessorKey), o = i ? Ct[i.accessorKey] : void 0;
								return /* @__PURE__ */ x("td", {
									className: q("px-3", a && "sticky bg-background"),
									style: a ? {
										height: "var(--table-row-height)",
										left: o,
										zIndex: 10
									} : { height: "var(--table-row-height)" },
									children: yC(e.column.columnDef.cell, e.getContext())
								}, e.id);
							})]
						}, e.id);
					}) })]
				})
			}),
			(E || k) && /* @__PURE__ */ S("div", {
				className: "flex items-center text-sm relative",
				children: [
					/* @__PURE__ */ S("span", {
						className: "text-xs text-muted-foreground tabular-nums",
						children: [
							"총",
							" ",
							k ? A ?? n.length : w ? n.length : wt.getFilteredRowModel().rows.length,
							"건"
						]
					}),
					/* @__PURE__ */ S("div", {
						className: "absolute left-1/2 -translate-x-1/2 flex items-center gap-1",
						children: [
							/* @__PURE__ */ x(Dy, {
								variant: "outline",
								size: "sm",
								onClick: () => wt.firstPage(),
								disabled: !wt.getCanPreviousPage(),
								children: "<<"
							}),
							/* @__PURE__ */ x(Dy, {
								variant: "outline",
								size: "sm",
								onClick: () => wt.previousPage(),
								disabled: !wt.getCanPreviousPage(),
								children: "<"
							}),
							(() => {
								let e = wt.getState().pagination.pageIndex, t = wt.getPageCount(), n = Math.max(0, e - 2), r = Math.min(t, n + 5);
								return n = Math.max(0, r - 5), Array.from({ length: r - n }, (e, t) => n + t).map((t) => /* @__PURE__ */ x(Dy, {
									variant: t === e ? "default" : "outline",
									size: "sm",
									onClick: () => wt.setPageIndex(t),
									children: t + 1
								}, t));
							})(),
							/* @__PURE__ */ x(Dy, {
								variant: "outline",
								size: "sm",
								onClick: () => wt.nextPage(),
								disabled: !wt.getCanNextPage(),
								children: ">"
							}),
							/* @__PURE__ */ x(Dy, {
								variant: "outline",
								size: "sm",
								onClick: () => wt.lastPage(),
								disabled: !wt.getCanNextPage(),
								children: ">>"
							})
						]
					}),
					/* @__PURE__ */ S("div", {
						className: "ml-auto flex items-center gap-1",
						children: [/* @__PURE__ */ x("span", {
							className: "text-xs text-muted-foreground",
							children: "표시"
						}), /* @__PURE__ */ x("select", {
							value: k ? ke.pageSize : wt.getState().pagination.pageSize,
							onChange: (e) => {
								let t = Number(e.target.value);
								k ? Ae({
									pageIndex: 0,
									pageSize: t
								}) : wt.setPageSize(t);
							},
							className: "h-7 rounded border bg-background px-1 text-xs outline-none cursor-pointer",
							children: [
								10,
								20,
								50,
								100
							].map((e) => /* @__PURE__ */ S("option", {
								value: e,
								children: [e, "개"]
							}, e))
						})]
					})
				]
			}),
			Ce && /* @__PURE__ */ S("div", {
				ref: Me,
				style: {
					position: "fixed",
					top: Ce.bottom + 4,
					left: Ce.left,
					zIndex: 9999
				},
				className: "bg-background border rounded-md shadow-lg p-2 min-w-[160px]",
				children: [/* @__PURE__ */ S("div", {
					className: "flex items-center justify-between mb-1.5",
					children: [/* @__PURE__ */ x("span", {
						className: "text-xs font-medium",
						children: "열 표시"
					}), /* @__PURE__ */ x("button", {
						type: "button",
						onClick: () => Oe(/* @__PURE__ */ new Set()),
						className: "text-[10px] text-primary hover:underline",
						children: "전체 표시"
					})]
				}), /* @__PURE__ */ x("div", {
					className: "space-y-0.5",
					children: e.map((e) => {
						let t = De.has(e.accessorKey);
						return /* @__PURE__ */ S("label", {
							className: "flex items-center gap-2 px-1 py-1 rounded-sm hover:bg-muted/50 cursor-pointer",
							children: [
								/* @__PURE__ */ x("input", {
									type: "checkbox",
									checked: !t,
									onChange: () => {
										Oe((n) => {
											let r = new Set(n);
											return t ? r.delete(e.accessorKey) : r.add(e.accessorKey), r;
										});
									},
									className: "h-3 w-3 rounded border-border"
								}),
								/* @__PURE__ */ x("span", {
									className: "text-xs",
									children: e.header
								}),
								t ? /* @__PURE__ */ x(ie, { className: "h-3 w-3 ml-auto text-muted-foreground/50" }) : /* @__PURE__ */ x(re, { className: "h-3 w-3 ml-auto text-muted-foreground/30" })
							]
						}, e.accessorKey);
					})
				})]
			}),
			ve && (() => {
				let e = V.find((e) => e.accessorKey === ve.key), t = wt.getAllColumns().find((e) => e.id === ve.key);
				return !e || !t ? null : /* @__PURE__ */ S("div", {
					ref: je,
					style: {
						position: "fixed",
						top: ve.rect.bottom + 4,
						left: ve.rect.left,
						zIndex: 9999
					},
					className: "bg-background border rounded-md shadow-lg p-2 min-w-[180px]",
					children: [/* @__PURE__ */ S("div", {
						className: "flex items-center gap-1 mb-1.5",
						children: [/* @__PURE__ */ x("span", {
							className: "text-xs font-medium flex-1 truncate",
							children: e.header
						}), /* @__PURE__ */ x("button", {
							type: "button",
							onClick: () => {
								t.setFilterValue(void 0), Se(null);
							},
							className: "h-4 w-4 flex items-center justify-center rounded-sm text-muted-foreground hover:text-foreground",
							title: "초기화 후 닫기",
							children: /* @__PURE__ */ x(Ee, { className: "h-3 w-3" })
						})]
					}), e.type === "select" ? /* @__PURE__ */ S("select", {
						value: t.getFilterValue() ?? "",
						onChange: (e) => t.setFilterValue(e.target.value || void 0),
						className: "w-full h-6 rounded border bg-background px-1 text-xs outline-none",
						autoFocus: !0,
						children: [/* @__PURE__ */ x("option", {
							value: "",
							children: "전체"
						}), e.options?.map((e) => /* @__PURE__ */ x("option", {
							value: e.value,
							children: e.label
						}, e.value))]
					}) : /* @__PURE__ */ S("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ x("input", {
							type: "text",
							value: t.getFilterValue() ?? "",
							onChange: (e) => t.setFilterValue(e.target.value || void 0),
							placeholder: "필터 입력...",
							className: "flex-1 h-6 rounded border bg-background px-1 text-xs outline-none focus:ring-1 focus:ring-ring",
							autoFocus: !0,
							onKeyDown: (e) => {
								(e.key === "Enter" || e.key === "Escape") && Se(null);
							}
						}), t.getFilterValue() && /* @__PURE__ */ x("button", {
							type: "button",
							onClick: () => t.setFilterValue(void 0),
							className: "h-4 w-4 flex items-center justify-center text-muted-foreground hover:text-foreground flex-shrink-0",
							children: /* @__PURE__ */ x(Ee, { className: "h-3 w-3" })
						})]
					})]
				});
			})()
		]
	});
}
//#endregion
//#region src/components/common/AppGuide.tsx
var _M = ({ children: e }) => /* @__PURE__ */ x("div", {
	className: "rounded-md border border-border/50 bg-muted/20 p-4",
	children: /* @__PURE__ */ x("div", {
		className: "space-y-4 text-xs leading-relaxed text-muted-foreground",
		children: e
	})
});
_M.Subsection = ({ title: e, children: t, type: n = "default" }) => /* @__PURE__ */ S("div", { children: [/* @__PURE__ */ S("div", {
	className: q("mb-1.5 flex items-center gap-1.5 font-semibold", n === "warning" && "text-orange-600 dark:text-orange-400", n === "info" && "text-blue-600 dark:text-blue-400"),
	children: [
		n === "warning" && "⚠️",
		n === "info" && "ℹ️",
		/* @__PURE__ */ x("span", { children: e })
	]
}), /* @__PURE__ */ x("div", {
	className: q("ml-5 space-y-1 text-muted-foreground/85", typeof t == "string" ? "whitespace-pre-line" : ""),
	children: t
})] });
//#endregion
//#region node_modules/prism-react-renderer/dist/index.mjs
var vM = Object.create, yM = Object.defineProperty, bM = Object.defineProperties, xM = Object.getOwnPropertyDescriptor, SM = Object.getOwnPropertyDescriptors, CM = Object.getOwnPropertyNames, wM = Object.getOwnPropertySymbols, TM = Object.getPrototypeOf, EM = Object.prototype.hasOwnProperty, DM = Object.prototype.propertyIsEnumerable, OM = (e, t, n) => t in e ? yM(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, kM = (e, t) => {
	for (var n in t ||= {}) EM.call(t, n) && OM(e, n, t[n]);
	if (wM) for (var n of wM(t)) DM.call(t, n) && OM(e, n, t[n]);
	return e;
}, AM = (e, t) => bM(e, SM(t)), jM = (e, t) => {
	var n = {};
	for (var r in e) EM.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && wM) for (var r of wM(e)) t.indexOf(r) < 0 && DM.call(e, r) && (n[r] = e[r]);
	return n;
}, MM = (e, t) => function() {
	return t || (0, e[CM(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, NM = (e, t) => {
	for (var n in t) yM(e, n, {
		get: t[n],
		enumerable: !0
	});
}, PM = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (let i of CM(t)) !EM.call(e, i) && i !== n && yM(e, i, {
		get: () => t[i],
		enumerable: !(r = xM(t, i)) || r.enumerable
	});
	return e;
}, $ = ((e, t, n) => (n = e == null ? {} : vM(TM(e)), PM(t || !e || !e.__esModule ? yM(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)))(MM({ "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e, t) {
	var n = function() {
		var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, t = 0, n = {}, r = {
			util: {
				encode: function e(t) {
					return t instanceof i ? new i(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				type: function(e) {
					return Object.prototype.toString.call(e).slice(8, -1);
				},
				objId: function(e) {
					return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
				},
				clone: function e(t, n) {
					n ||= {};
					var i, a;
					switch (r.util.type(t)) {
						case "Object":
							if (a = r.util.objId(t), n[a]) return n[a];
							for (var o in i = {}, n[a] = i, t) t.hasOwnProperty(o) && (i[o] = e(t[o], n));
							return i;
						case "Array": return a = r.util.objId(t), n[a] ? n[a] : (i = [], n[a] = i, t.forEach(function(t, r) {
							i[r] = e(t, n);
						}), i);
						default: return t;
					}
				},
				getLanguage: function(t) {
					for (; t;) {
						var n = e.exec(t.className);
						if (n) return n[1].toLowerCase();
						t = t.parentElement;
					}
					return "none";
				},
				setLanguage: function(t, n) {
					t.className = t.className.replace(RegExp(e, "gi"), ""), t.classList.add("language-" + n);
				},
				isActive: function(e, t, n) {
					for (var r = "no-" + t; e;) {
						var i = e.classList;
						if (i.contains(t)) return !0;
						if (i.contains(r)) return !1;
						e = e.parentElement;
					}
					return !!n;
				}
			},
			languages: {
				plain: n,
				plaintext: n,
				text: n,
				txt: n,
				extend: function(e, t) {
					var n = r.util.clone(r.languages[e]);
					for (var i in t) n[i] = t[i];
					return n;
				},
				insertBefore: function(e, t, n, i) {
					i ||= r.languages;
					var a = i[e], o = {};
					for (var s in a) if (a.hasOwnProperty(s)) {
						if (s == t) for (var c in n) n.hasOwnProperty(c) && (o[c] = n[c]);
						n.hasOwnProperty(s) || (o[s] = a[s]);
					}
					var l = i[e];
					return i[e] = o, r.languages.DFS(r.languages, function(t, n) {
						n === l && t != e && (this[t] = o);
					}), o;
				},
				DFS: function e(t, n, i, a) {
					a ||= {};
					var o = r.util.objId;
					for (var s in t) if (t.hasOwnProperty(s)) {
						n.call(t, s, t[s], i || s);
						var c = t[s], l = r.util.type(c);
						l === "Object" && !a[o(c)] ? (a[o(c)] = !0, e(c, n, null, a)) : l === "Array" && !a[o(c)] && (a[o(c)] = !0, e(c, n, s, a));
					}
				}
			},
			plugins: {},
			highlight: function(e, t, n) {
				var a = {
					code: e,
					grammar: t,
					language: n
				};
				if (r.hooks.run("before-tokenize", a), !a.grammar) throw Error("The language \"" + a.language + "\" has no grammar.");
				return a.tokens = r.tokenize(a.code, a.grammar), r.hooks.run("after-tokenize", a), i.stringify(r.util.encode(a.tokens), a.language);
			},
			tokenize: function(e, t) {
				var n = t.rest;
				if (n) {
					for (var r in n) t[r] = n[r];
					delete t.rest;
				}
				var i = new s();
				return c(i, i.head, e), o(e, i, t, i.head, 0), u(i);
			},
			hooks: {
				all: {},
				add: function(e, t) {
					var n = r.hooks.all;
					n[e] = n[e] || [], n[e].push(t);
				},
				run: function(e, t) {
					var n = r.hooks.all[e];
					if (!(!n || !n.length)) for (var i = 0, a; a = n[i++];) a(t);
				}
			},
			Token: i
		};
		function i(e, t, n, r) {
			this.type = e, this.content = t, this.alias = n, this.length = (r || "").length | 0;
		}
		i.stringify = function e(t, n) {
			if (typeof t == "string") return t;
			if (Array.isArray(t)) {
				var i = "";
				return t.forEach(function(t) {
					i += e(t, n);
				}), i;
			}
			var a = {
				type: t.type,
				content: e(t.content, n),
				tag: "span",
				classes: ["token", t.type],
				attributes: {},
				language: n
			}, o = t.alias;
			o && (Array.isArray(o) ? Array.prototype.push.apply(a.classes, o) : a.classes.push(o)), r.hooks.run("wrap", a);
			var s = "";
			for (var c in a.attributes) s += " " + c + "=\"" + (a.attributes[c] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + a.tag + " class=\"" + a.classes.join(" ") + "\"" + s + ">" + a.content + "</" + a.tag + ">";
		};
		function a(e, t, n, r) {
			e.lastIndex = t;
			var i = e.exec(n);
			if (i && r && i[1]) {
				var a = i[1].length;
				i.index += a, i[0] = i[0].slice(a);
			}
			return i;
		}
		function o(e, t, n, s, u, d) {
			for (var f in n) if (!(!n.hasOwnProperty(f) || !n[f])) {
				var p = n[f];
				p = Array.isArray(p) ? p : [p];
				for (var m = 0; m < p.length; ++m) {
					if (d && d.cause == f + "," + m) return;
					var h = p[m], g = h.inside, _ = !!h.lookbehind, v = !!h.greedy, y = h.alias;
					if (v && !h.pattern.global) {
						var b = h.pattern.toString().match(/[imsuy]*$/)[0];
						h.pattern = RegExp(h.pattern.source, b + "g");
					}
					for (var x = h.pattern || h, S = s.next, C = u; S !== t.tail && !(d && C >= d.reach); C += S.value.length, S = S.next) {
						var w = S.value;
						if (t.length > e.length) return;
						if (!(w instanceof i)) {
							var T = 1, E;
							if (v) {
								if (E = a(x, C, e, _), !E || E.index >= e.length) break;
								var D = E.index, O = E.index + E[0].length, k = C;
								for (k += S.value.length; D >= k;) S = S.next, k += S.value.length;
								if (k -= S.value.length, C = k, S.value instanceof i) continue;
								for (var A = S; A !== t.tail && (k < O || typeof A.value == "string"); A = A.next) T++, k += A.value.length;
								T--, w = e.slice(C, k), E.index -= C;
							} else if (E = a(x, 0, w, _), !E) continue;
							var D = E.index, j = E[0], M = w.slice(0, D), N = w.slice(D + j.length), P = C + w.length;
							d && P > d.reach && (d.reach = P);
							var F = S.prev;
							M && (F = c(t, F, M), C += M.length), l(t, F, T);
							var I = new i(f, g ? r.tokenize(j, g) : j, y, j);
							if (S = c(t, F, I), N && c(t, S, N), T > 1) {
								var ee = {
									cause: f + "," + m,
									reach: P
								};
								o(e, t, n, S.prev, C, ee), d && ee.reach > d.reach && (d.reach = ee.reach);
							}
						}
					}
				}
			}
		}
		function s() {
			var e = {
				value: null,
				prev: null,
				next: null
			}, t = {
				value: null,
				prev: e,
				next: null
			};
			e.next = t, this.head = e, this.tail = t, this.length = 0;
		}
		function c(e, t, n) {
			var r = t.next, i = {
				value: n,
				prev: t,
				next: r
			};
			return t.next = i, r.prev = i, e.length++, i;
		}
		function l(e, t, n) {
			for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
			t.next = r, r.prev = t, e.length -= i;
		}
		function u(e) {
			for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
			return t;
		}
		return r;
	}();
	t.exports = n, n.default = n;
} })());
$.languages.markup = {
	comment: {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: !0
	},
	prolog: {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: !0
	},
	doctype: {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: !0,
		inside: {
			"internal-subset": {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: !0,
				greedy: !0,
				inside: null
			},
			string: {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: !0
			},
			punctuation: /^<!|>$|[[\]]/,
			"doctype-tag": /^DOCTYPE/i,
			name: /[^\s<>'"]+/
		}
	},
	cdata: {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: !0
	},
	tag: {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: !0,
		inside: {
			tag: {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					punctuation: /^<\/?/,
					namespace: /^[^\s>\/:]+:/
				}
			},
			"special-attr": [],
			"attr-value": {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: { punctuation: [{
					pattern: /^=/,
					alias: "attr-equals"
				}, {
					pattern: /^(\s*)["']|["']$/,
					lookbehind: !0
				}] }
			},
			punctuation: /\/?>/,
			"attr-name": {
				pattern: /[^\s>\/]+/,
				inside: { namespace: /^[^\s>\/:]+:/ }
			}
		}
	},
	entity: [{
		pattern: /&[\da-z]{1,8};/i,
		alias: "named-entity"
	}, /&#x?[\da-f]{1,8};/i]
}, $.languages.markup.tag.inside["attr-value"].inside.entity = $.languages.markup.entity, $.languages.markup.doctype.inside["internal-subset"].inside = $.languages.markup, $.hooks.add("wrap", function(e) {
	e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty($.languages.markup.tag, "addInlined", { value: function(e, t) {
	var n = {}, n = (n["language-" + t] = {
		pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
		lookbehind: !0,
		inside: $.languages[t]
	}, n.cdata = /^<!\[CDATA\[|\]\]>$/i, { "included-cdata": {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		inside: n
	} }), t = (n["language-" + t] = {
		pattern: /[\s\S]+/,
		inside: $.languages[t]
	}, {});
	t[e] = {
		pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)".replace(/__/g, function() {
			return e;
		}), "i"),
		lookbehind: !0,
		greedy: !0,
		inside: n
	}, $.languages.insertBefore("markup", "cdata", t);
} }), Object.defineProperty($.languages.markup.tag, "addAttribute", { value: function(e, t) {
	$.languages.markup.tag.inside["special-attr"].push({
		pattern: RegExp("(^|[\"'\\s])(?:" + e + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
		lookbehind: !0,
		inside: {
			"attr-name": /^[^\s=]+/,
			"attr-value": {
				pattern: /=[\s\S]+/,
				inside: {
					value: {
						pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
						lookbehind: !0,
						alias: [t, "language-" + t],
						inside: $.languages[t]
					},
					punctuation: [{
						pattern: /^=/,
						alias: "attr-equals"
					}, /"|'/]
				}
			}
		}
	});
} }), $.languages.html = $.languages.markup, $.languages.mathml = $.languages.markup, $.languages.svg = $.languages.markup, $.languages.xml = $.languages.extend("markup", {}), $.languages.ssml = $.languages.xml, $.languages.atom = $.languages.xml, $.languages.rss = $.languages.xml, function(e) {
	var t = {
		pattern: /\\[\\(){}[\]^$+*?|.]/,
		alias: "escape"
	}, n = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, r = "(?:[^\\\\-]|" + n.source + ")", r = RegExp(r + "-" + r), i = {
		pattern: /(<|')[^<>']+(?=[>']$)/,
		lookbehind: !0,
		alias: "variable"
	};
	e.languages.regex = {
		"char-class": {
			pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
			lookbehind: !0,
			inside: {
				"char-class-negation": {
					pattern: /(^\[)\^/,
					lookbehind: !0,
					alias: "operator"
				},
				"char-class-punctuation": {
					pattern: /^\[|\]$/,
					alias: "punctuation"
				},
				range: {
					pattern: r,
					inside: {
						escape: n,
						"range-punctuation": {
							pattern: /-/,
							alias: "operator"
						}
					}
				},
				"special-escape": t,
				"char-set": {
					pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
					alias: "class-name"
				},
				escape: n
			}
		},
		"special-escape": t,
		"char-set": {
			pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
			alias: "class-name"
		},
		backreference: [{
			pattern: /\\(?![123][0-7]{2})[1-9]/,
			alias: "keyword"
		}, {
			pattern: /\\k<[^<>']+>/,
			alias: "keyword",
			inside: { "group-name": i }
		}],
		anchor: {
			pattern: /[$^]|\\[ABbGZz]/,
			alias: "function"
		},
		escape: n,
		group: [{
			pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
			alias: "punctuation",
			inside: { "group-name": i }
		}, {
			pattern: /\)/,
			alias: "punctuation"
		}],
		quantifier: {
			pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
			alias: "number"
		},
		alternation: {
			pattern: /\|/,
			alias: "keyword"
		}
	};
}($), $.languages.clike = {
	comment: [{
		pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
		lookbehind: !0,
		greedy: !0
	}, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: !0,
		greedy: !0
	}],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0
	},
	"class-name": {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: !0,
		inside: { punctuation: /[.\\]/ }
	},
	keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	boolean: /\b(?:false|true)\b/,
	function: /\b\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	punctuation: /[{}[\];(),.:]/
}, $.languages.javascript = $.languages.extend("clike", {
	"class-name": [$.languages.clike["class-name"], {
		pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
		lookbehind: !0
	}],
	keyword: [{
		pattern: /((?:^|\})\s*)catch\b/,
		lookbehind: !0
	}, {
		pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
		lookbehind: !0
	}],
	function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	number: {
		pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
		lookbehind: !0
	},
	operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), $.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, $.languages.insertBefore("javascript", "keyword", {
	regex: {
		pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))"),
		lookbehind: !0,
		greedy: !0,
		inside: {
			"regex-source": {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: !0,
				alias: "language-regex",
				inside: $.languages.regex
			},
			"regex-delimiter": /^\/|\/$/,
			"regex-flags": /^[a-z]+$/
		}
	},
	"function-variable": {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: "function"
	},
	parameter: [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: !0,
			inside: $.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: !0,
			inside: $.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: !0,
			inside: $.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: !0,
			inside: $.languages.javascript
		}
	],
	constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), $.languages.insertBefore("javascript", "string", {
	hashbang: {
		pattern: /^#!.*/,
		greedy: !0,
		alias: "comment"
	},
	"template-string": {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: !0,
		inside: {
			"template-punctuation": {
				pattern: /^`|`$/,
				alias: "string"
			},
			interpolation: {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: !0,
				inside: {
					"interpolation-punctuation": {
						pattern: /^\$\{|\}$/,
						alias: "punctuation"
					},
					rest: $.languages.javascript
				}
			},
			string: /[\s\S]+/
		}
	},
	"string-property": {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: !0,
		greedy: !0,
		alias: "property"
	}
}), $.languages.insertBefore("javascript", "operator", { "literal-property": {
	pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
	lookbehind: !0,
	alias: "property"
} }), $.languages.markup && ($.languages.markup.tag.addInlined("script", "javascript"), $.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), $.languages.js = $.languages.javascript, $.languages.actionscript = $.languages.extend("javascript", {
	keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
	operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
}), $.languages.actionscript["class-name"].alias = "function", delete $.languages.actionscript.parameter, delete $.languages.actionscript["literal-property"], $.languages.markup && $.languages.insertBefore("actionscript", "string", { xml: {
	pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
	lookbehind: !0,
	inside: $.languages.markup
} }), function(e) {
	var t = /#(?!\{).+/, n = {
		pattern: /#\{[^}]+\}/,
		alias: "variable"
	};
	e.languages.coffeescript = e.languages.extend("javascript", {
		comment: t,
		string: [{
			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
			greedy: !0
		}, {
			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
			greedy: !0,
			inside: { interpolation: n }
		}],
		keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
		"class-member": {
			pattern: /@(?!\d)\w+/,
			alias: "variable"
		}
	}), e.languages.insertBefore("coffeescript", "comment", {
		"multiline-comment": {
			pattern: /###[\s\S]+?###/,
			alias: "comment"
		},
		"block-regex": {
			pattern: /\/{3}[\s\S]*?\/{3}/,
			alias: "regex",
			inside: {
				comment: t,
				interpolation: n
			}
		}
	}), e.languages.insertBefore("coffeescript", "string", {
		"inline-javascript": {
			pattern: /`(?:\\[\s\S]|[^\\`])*`/,
			inside: {
				delimiter: {
					pattern: /^`|`$/,
					alias: "punctuation"
				},
				script: {
					pattern: /[\s\S]+/,
					alias: "language-javascript",
					inside: e.languages.javascript
				}
			}
		},
		"multiline-string": [{
			pattern: /'''[\s\S]*?'''/,
			greedy: !0,
			alias: "string"
		}, {
			pattern: /"""[\s\S]*?"""/,
			greedy: !0,
			alias: "string",
			inside: { interpolation: n }
		}]
	}), e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
}($), function(e) {
	var t = e.languages.javadoclike = {
		parameter: {
			pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
			lookbehind: !0
		},
		keyword: {
			pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
			lookbehind: !0
		},
		punctuation: /[{}]/
	};
	Object.defineProperty(t, "addSupport", { value: function(t, n) {
		(t = typeof t == "string" ? [t] : t).forEach(function(t) {
			var r = function(e) {
				e.inside ||= {}, e.inside.rest = n;
			}, i = "doc-comment";
			if (a = e.languages[t]) {
				var a, o = a[i];
				if ((o ||= (a = e.languages.insertBefore(t, "comment", { "doc-comment": {
					pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
					lookbehind: !0,
					alias: "comment"
				} }))[i]) instanceof RegExp && (o = a[i] = { pattern: o }), Array.isArray(o)) for (var s = 0, c = o.length; s < c; s++) o[s] instanceof RegExp && (o[s] = { pattern: o[s] }), r(o[s]);
				else r(o);
			}
		});
	} }), t.addSupport([
		"java",
		"javascript",
		"php"
	], t);
}($), function(e) {
	var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, t = (e.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + t.source + ")*?(?:;|(?=\\s*\\{))"),
			inside: {
				rule: /^@[\w-]+/,
				"selector-function-argument": {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: !0,
					alias: "selector"
				},
				keyword: {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: !0
				}
			}
		},
		url: {
			pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\\r\\n()\"']|\\\\[\\s\\S])*)\\)", "i"),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/,
				string: {
					pattern: RegExp("^" + t.source + "$"),
					alias: "url"
				}
			}
		},
		selector: {
			pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
			lookbehind: !0
		},
		string: {
			pattern: t,
			greedy: !0
		},
		property: {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: !0
		},
		important: /!important\b/i,
		function: {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: !0
		},
		punctuation: /[(){};:,]/
	}, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
	t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
}($), function(e) {
	var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, t = (e.languages.css.selector = {
		pattern: e.languages.css.selector.pattern,
		lookbehind: !0,
		inside: t = {
			"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
			"pseudo-class": /:[-\w]+/,
			class: /\.[-\w]+/,
			id: /#[-\w]+/,
			attribute: {
				pattern: RegExp("\\[(?:[^[\\]\"']|" + t.source + ")*\\]"),
				greedy: !0,
				inside: {
					punctuation: /^\[|\]$/,
					"case-sensitivity": {
						pattern: /(\s)[si]$/i,
						lookbehind: !0,
						alias: "keyword"
					},
					namespace: {
						pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
						lookbehind: !0,
						inside: { punctuation: /\|$/ }
					},
					"attr-name": {
						pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
						lookbehind: !0
					},
					"attr-value": [t, {
						pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
						lookbehind: !0
					}],
					operator: /[|~*^$]?=/
				}
			},
			"n-th": [{
				pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
				lookbehind: !0,
				inside: {
					number: /[\dn]+/,
					operator: /[+-]/
				}
			}, {
				pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
				lookbehind: !0
			}],
			combinator: />|\+|~|\|\|/,
			punctuation: /[(),]/
		}
	}, e.languages.css.atrule.inside["selector-function-argument"].inside = t, e.languages.insertBefore("css", "property", { variable: {
		pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
		lookbehind: !0
	} }), {
		pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
		lookbehind: !0
	}), n = {
		pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
		lookbehind: !0
	};
	e.languages.insertBefore("css", "function", {
		operator: {
			pattern: /(\s)[+\-*\/](?=\s)/,
			lookbehind: !0
		},
		hexcode: {
			pattern: /\B#[\da-f]{3,8}\b/i,
			alias: "color"
		},
		color: [{
			pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
			lookbehind: !0
		}, {
			pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
			inside: {
				unit: t,
				number: n,
				function: /[\w-]+(?=\()/,
				punctuation: /[(),]/
			}
		}],
		entity: /\\[\da-f]{1,8}/i,
		unit: t,
		number: n
	});
}($), function(e) {
	var t = /[*&][^\s[\]{},]+/, n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, r = "(?:" + n.source + "(?:[ 	]+" + t.source + ")?|" + t.source + "(?:[ 	]+" + n.source + ")?)", i = "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \\t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g, function() {
		return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]";
	}), a = "\"(?:[^\"\\\\\\r\\n]|\\\\.)*\"|'(?:[^'\\\\\\r\\n]|\\\\.)*'";
	function o(e, t) {
		t = (t || "").replace(/m/g, "") + "m";
		var n = "([:\\-,[{]\\s*(?:\\s<<prop>>[ \\t]+)?)(?:<<value>>)(?=[ \\t]*(?:$|,|\\]|\\}|(?:[\\r\\n]\\s*)?#))".replace(/<<prop>>/g, function() {
			return r;
		}).replace(/<<value>>/g, function() {
			return e;
		});
		return RegExp(n, t);
	}
	e.languages.yaml = {
		scalar: {
			pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \\t]+)?[|>])[ \\t]*(?:((?:\\r?\\n|\\r)[ \\t]+)\\S[^\\r\\n]*(?:\\2[^\\r\\n]+)*)".replace(/<<prop>>/g, function() {
				return r;
			})),
			lookbehind: !0,
			alias: "string"
		},
		comment: /#.*/,
		key: {
			pattern: RegExp("((?:^|[:\\-,[{\\r\\n?])[ \\t]*(?:<<prop>>[ \\t]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g, function() {
				return r;
			}).replace(/<<key>>/g, function() {
				return "(?:" + i + "|" + a + ")";
			})),
			lookbehind: !0,
			greedy: !0,
			alias: "atrule"
		},
		directive: {
			pattern: /(^[ \t]*)%.+/m,
			lookbehind: !0,
			alias: "important"
		},
		datetime: {
			pattern: o("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \\t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \\t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),
			lookbehind: !0,
			alias: "number"
		},
		boolean: {
			pattern: o("false|true", "i"),
			lookbehind: !0,
			alias: "important"
		},
		null: {
			pattern: o("null|~", "i"),
			lookbehind: !0,
			alias: "important"
		},
		string: {
			pattern: o(a),
			lookbehind: !0,
			greedy: !0
		},
		number: {
			pattern: o("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"),
			lookbehind: !0
		},
		tag: n,
		important: t,
		punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
	}, e.languages.yml = e.languages.yaml;
}($), function(e) {
	var t = "(?:\\\\.|[^\\\\\\n\\r]|(?:\\n|\\r\\n?)(?![\\r\\n]))";
	function n(e) {
		return e = e.replace(/<inner>/g, function() {
			return t;
		}), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + e + ")");
	}
	var r = "(?:\\\\.|``(?:[^`\\r\\n]|`(?!`))+``|`[^`\\r\\n]+`|[^\\\\|\\r\\n`])+", i = "\\|?__(?:\\|__)+\\|?(?:(?:\\n|\\r\\n?)|(?![\\s\\S]))".replace(/__/g, function() {
		return r;
	}), a = "\\|?[ \\t]*:?-{3,}:?[ \\t]*(?:\\|[ \\t]*:?-{3,}:?[ \\t]*)+\\|?(?:\\n|\\r\\n?)", o = (e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
		"front-matter-block": {
			pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
			lookbehind: !0,
			greedy: !0,
			inside: {
				punctuation: /^---|---$/,
				"front-matter": {
					pattern: /\S+(?:\s+\S+)*/,
					alias: ["yaml", "language-yaml"],
					inside: e.languages.yaml
				}
			}
		},
		blockquote: {
			pattern: /^>(?:[\t ]*>)*/m,
			alias: "punctuation"
		},
		table: {
			pattern: RegExp("^" + i + a + "(?:" + i + ")*", "m"),
			inside: {
				"table-data-rows": {
					pattern: RegExp("^(" + i + a + ")(?:" + i + ")*$"),
					lookbehind: !0,
					inside: {
						"table-data": {
							pattern: RegExp(r),
							inside: e.languages.markdown
						},
						punctuation: /\|/
					}
				},
				"table-line": {
					pattern: RegExp("^(" + i + ")" + a + "$"),
					lookbehind: !0,
					inside: { punctuation: /\||:?-{3,}:?/ }
				},
				"table-header-row": {
					pattern: RegExp("^" + i + "$"),
					inside: {
						"table-header": {
							pattern: RegExp(r),
							alias: "important",
							inside: e.languages.markdown
						},
						punctuation: /\|/
					}
				}
			}
		},
		code: [{
			pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
			lookbehind: !0,
			alias: "keyword"
		}, {
			pattern: /^```[\s\S]*?^```$/m,
			greedy: !0,
			inside: {
				"code-block": {
					pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
					lookbehind: !0
				},
				"code-language": {
					pattern: /^(```).+/,
					lookbehind: !0
				},
				punctuation: /```/
			}
		}],
		title: [{
			pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
			alias: "important",
			inside: { punctuation: /==+$|--+$/ }
		}, {
			pattern: /(^\s*)#.+/m,
			lookbehind: !0,
			alias: "important",
			inside: { punctuation: /^#+|#+$/ }
		}],
		hr: {
			pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
			lookbehind: !0,
			alias: "punctuation"
		},
		list: {
			pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
			lookbehind: !0,
			alias: "punctuation"
		},
		"url-reference": {
			pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
			inside: {
				variable: {
					pattern: /^(!?\[)[^\]]+/,
					lookbehind: !0
				},
				string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
				punctuation: /^[\[\]!:]|[<>]/
			},
			alias: "url"
		},
		bold: {
			pattern: n("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				content: {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: !0,
					inside: {}
				},
				punctuation: /\*\*|__/
			}
		},
		italic: {
			pattern: n("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				content: {
					pattern: /(^.)[\s\S]+(?=.$)/,
					lookbehind: !0,
					inside: {}
				},
				punctuation: /[*_]/
			}
		},
		strike: {
			pattern: n("(~~?)(?:(?!~)<inner>)+\\2"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				content: {
					pattern: /(^~~?)[\s\S]+(?=\1$)/,
					lookbehind: !0,
					inside: {}
				},
				punctuation: /~~?/
			}
		},
		"code-snippet": {
			pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
			lookbehind: !0,
			greedy: !0,
			alias: ["code", "keyword"]
		},
		url: {
			pattern: n("!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\\t ]+\"(?:\\\\.|[^\"\\\\])*\")?\\)|[ \\t]?\\[(?:(?!\\])<inner>)+\\])"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				operator: /^!/,
				content: {
					pattern: /(^\[)[^\]]+(?=\])/,
					lookbehind: !0,
					inside: {}
				},
				variable: {
					pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
					lookbehind: !0
				},
				url: {
					pattern: /(^\]\()[^\s)]+/,
					lookbehind: !0
				},
				string: {
					pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
					lookbehind: !0
				}
			}
		}
	}), [
		"url",
		"bold",
		"italic",
		"strike"
	].forEach(function(t) {
		[
			"url",
			"bold",
			"italic",
			"strike",
			"code-snippet"
		].forEach(function(n) {
			t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n]);
		});
	}), e.hooks.add("after-tokenize", function(e) {
		e.language !== "markdown" && e.language !== "md" || function e(t) {
			if (t && typeof t != "string") for (var n = 0, r = t.length; n < r; n++) {
				var i, a = t[n];
				a.type === "code" ? (i = a.content[1], a = a.content[3], i && a && i.type === "code-language" && a.type === "code-block" && typeof i.content == "string" && (i = i.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), i = "language-" + (i = (/[a-z][\w-]*/i.exec(i) || [""])[0].toLowerCase()), a.alias ? typeof a.alias == "string" ? a.alias = [a.alias, i] : a.alias.push(i) : a.alias = [i])) : e(a.content);
			}
		}(e.tokens);
	}), e.hooks.add("wrap", function(t) {
		if (t.type === "code-block") {
			for (var n = "", r = 0, i = t.classes.length; r < i; r++) {
				var a = t.classes[r], a = /language-(.+)/.exec(a);
				if (a) {
					n = a[1];
					break;
				}
			}
			var l, u = e.languages[n];
			u ? t.content = e.highlight(function(e) {
				return e = e.replace(o, ""), e = e.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(e, t) {
					var n;
					return (t = t.toLowerCase())[0] === "#" ? (n = t[1] === "x" ? parseInt(t.slice(2), 16) : Number(t.slice(1)), c(n)) : s[t] || e;
				});
			}(t.content), u, n) : n && n !== "none" && e.plugins.autoloader && (l = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(0x2386f26fc10000 * Math.random()), t.attributes.id = l, e.plugins.autoloader.loadLanguages(n, function() {
				var t = document.getElementById(l);
				t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n));
			}));
		}
	}), RegExp(e.languages.markup.tag.pattern.source, "gi")), s = {
		amp: "&",
		lt: "<",
		gt: ">",
		quot: "\""
	}, c = String.fromCodePoint || String.fromCharCode;
	e.languages.md = e.languages.markdown;
}($), $.languages.graphql = {
	comment: /#.*/,
	description: {
		pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
		greedy: !0,
		alias: "string",
		inside: { "language-markdown": {
			pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
			lookbehind: !0,
			inside: $.languages.markdown
		} }
	},
	string: {
		pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
		greedy: !0
	},
	number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	boolean: /\b(?:false|true)\b/,
	variable: /\$[a-z_]\w*/i,
	directive: {
		pattern: /@[a-z_]\w*/i,
		alias: "function"
	},
	"attr-name": {
		pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
		greedy: !0
	},
	"atom-input": {
		pattern: /\b[A-Z]\w*Input\b/,
		alias: "class-name"
	},
	scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
	constant: /\b[A-Z][A-Z_\d]*\b/,
	"class-name": {
		pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
		lookbehind: !0
	},
	fragment: {
		pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
		lookbehind: !0,
		alias: "function"
	},
	"definition-mutation": {
		pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
		lookbehind: !0,
		alias: "function"
	},
	"definition-query": {
		pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
		lookbehind: !0,
		alias: "function"
	},
	keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
	operator: /[!=|&]|\.{3}/,
	"property-query": /\w+(?=\s*\()/,
	object: /\w+(?=\s*\{)/,
	punctuation: /[!(){}\[\]:=,]/,
	property: /\w+/
}, $.hooks.add("after-tokenize", function(e) {
	if (e.language === "graphql") for (var t = e.tokens.filter(function(e) {
		return typeof e != "string" && e.type !== "comment" && e.type !== "scalar";
	}), n = 0; n < t.length;) {
		var r = t[n++];
		if (r.type === "keyword" && r.content === "mutation") {
			var i = [];
			if (d(["definition-mutation", "punctuation"]) && u(1).content === "(") {
				n += 2;
				var a = f(/^\($/, /^\)$/);
				if (a === -1) continue;
				for (; n < a; n++) {
					var o = u(0);
					o.type === "variable" && (p(o, "variable-input"), i.push(o.content));
				}
				n = a + 1;
			}
			if (d(["punctuation", "property-query"]) && u(0).content === "{" && (n++, p(u(0), "property-mutation"), 0 < i.length)) {
				var s = f(/^\{$/, /^\}$/);
				if (s !== -1) for (var c = n; c < s; c++) {
					var l = t[c];
					l.type === "variable" && 0 <= i.indexOf(l.content) && p(l, "variable-input");
				}
			}
		}
	}
	function u(e) {
		return t[n + e];
	}
	function d(e, t) {
		t ||= 0;
		for (var n = 0; n < e.length; n++) {
			var r = u(n + t);
			if (!r || r.type !== e[n]) return;
		}
		return 1;
	}
	function f(e, r) {
		for (var i = 1, a = n; a < t.length; a++) {
			var o = t[a], s = o.content;
			if (o.type === "punctuation" && typeof s == "string") {
				if (e.test(s)) i++;
				else if (r.test(s) && --i === 0) return a;
			}
		}
		return -1;
	}
	function p(e, t) {
		var n = e.alias;
		n ? Array.isArray(n) || (e.alias = n = [n]) : e.alias = n = [], n.push(t);
	}
}), $.languages.sql = {
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
		lookbehind: !0
	},
	variable: [{
		pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
		greedy: !0
	}, /@[\w.$]+/],
	string: {
		pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
		greedy: !0,
		lookbehind: !0
	},
	identifier: {
		pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
		greedy: !0,
		lookbehind: !0,
		inside: { punctuation: /^`|`$/ }
	},
	function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
	keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
	boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
	number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
	operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
	punctuation: /[;[\]()`,.]/
}, function(e) {
	var t = e.languages.javascript["template-string"], n = t.pattern.source, r = t.inside.interpolation, i = r.inside["interpolation-punctuation"], a = r.pattern.source;
	function o(t, r) {
		if (e.languages[t]) return {
			pattern: RegExp("((?:" + r + ")\\s*)" + n),
			lookbehind: !0,
			greedy: !0,
			inside: {
				"template-punctuation": {
					pattern: /^`|`$/,
					alias: "string"
				},
				"embedded-code": {
					pattern: /[\s\S]+/,
					alias: t
				}
			}
		};
	}
	function s(t, n, r) {
		return t = {
			code: t,
			grammar: n,
			language: r
		}, e.hooks.run("before-tokenize", t), t.tokens = e.tokenize(t.code, t.grammar), e.hooks.run("after-tokenize", t), t.tokens;
	}
	function c(t, n, o) {
		var c = e.tokenize(t, { interpolation: {
			pattern: RegExp(a),
			lookbehind: !0
		} }), l = 0, u = {}, c = s(c.map(function(e) {
			if (typeof e == "string") return e;
			for (var n, r, e = e.content; t.indexOf((r = l++, n = "___" + o.toUpperCase() + "_" + r + "___")) !== -1;);
			return u[n] = e, n;
		}).join(""), n, o), d = Object.keys(u);
		return l = 0, function t(n) {
			for (var a = 0; a < n.length; a++) {
				if (l >= d.length) return;
				var o, c, f, p, m, h, g, _ = n[a];
				typeof _ == "string" || typeof _.content == "string" ? (o = d[l], (g = (h = typeof _ == "string" ? _ : _.content).indexOf(o)) !== -1 && (++l, c = h.substring(0, g), m = u[o], f = void 0, (p = {})["interpolation-punctuation"] = i, (p = e.tokenize(m, p)).length === 3 && ((f = [1, 1]).push.apply(f, s(p[1], e.languages.javascript, "javascript")), p.splice.apply(p, f)), f = new e.Token("interpolation", p, r.alias, m), p = h.substring(g + o.length), m = [], c && m.push(c), m.push(f), p && (t(h = [p]), m.push.apply(m, h)), typeof _ == "string" ? (n.splice.apply(n, [a, 1].concat(m)), a += m.length - 1) : _.content = m)) : (g = _.content, t(Array.isArray(g) ? g : [g]));
			}
		}(c), new e.Token(o, c, "language-" + o, t);
	}
	e.languages.javascript["template-string"] = [
		o("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),
		o("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),
		o("svg", "\\bsvg"),
		o("markdown", "\\b(?:markdown|md)"),
		o("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),
		o("sql", "\\bsql"),
		t
	].filter(Boolean);
	var l = {
		javascript: !0,
		js: !0,
		typescript: !0,
		ts: !0,
		jsx: !0,
		tsx: !0
	};
	function u(e) {
		return typeof e == "string" ? e : Array.isArray(e) ? e.map(u).join("") : u(e.content);
	}
	e.hooks.add("after-tokenize", function(t) {
		t.language in l && function t(n) {
			for (var r = 0, i = n.length; r < i; r++) {
				var a, o, s, l = n[r];
				typeof l != "string" && (a = l.content, Array.isArray(a) ? l.type === "template-string" ? (l = a[1], a.length === 3 && typeof l != "string" && l.type === "embedded-code" && (o = u(l), l = l.alias, l = Array.isArray(l) ? l[0] : l, s = e.languages[l]) && (a[1] = c(o, s, l))) : t(a) : typeof a != "string" && t([a]));
			}
		}(t.tokens);
	});
}($), function(e) {
	e.languages.typescript = e.languages.extend("javascript", {
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: !0,
			greedy: !0,
			inside: null
		},
		builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
	}), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
	var t = e.languages.extend("typescript", {});
	delete t["class-name"], e.languages.typescript["class-name"].inside = t, e.languages.insertBefore("typescript", "function", {
		decorator: {
			pattern: /@[$\w\xA0-\uFFFF]+/,
			inside: {
				at: {
					pattern: /^@/,
					alias: "operator"
				},
				function: /^[\s\S]+/
			}
		},
		"generic-function": {
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
			greedy: !0,
			inside: {
				function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
				generic: {
					pattern: /<[\s\S]+/,
					alias: "class-name",
					inside: t
				}
			}
		}
	}), e.languages.ts = e.languages.typescript;
}($), function(e) {
	var t = e.languages.javascript, n = "\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})+\\}", r = "(@(?:arg|argument|param|property)\\s+(?:" + n + "\\s+)?)";
	e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: {
		pattern: RegExp(r + "(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)"),
		lookbehind: !0,
		inside: { punctuation: /\./ }
	} }), e.languages.insertBefore("jsdoc", "keyword", {
		"optional-parameter": {
			pattern: RegExp(r + "\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)"),
			lookbehind: !0,
			inside: {
				parameter: {
					pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
					lookbehind: !0,
					inside: { punctuation: /\./ }
				},
				code: {
					pattern: /(=)[\s\S]*(?=\]$)/,
					lookbehind: !0,
					inside: t,
					alias: "language-javascript"
				},
				punctuation: /[=[\]]/
			}
		},
		"class-name": [{
			pattern: RegExp("(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*".replace(/<TYPE>/g, function() {
				return n;
			})),
			lookbehind: !0,
			inside: { punctuation: /\./ }
		}, {
			pattern: RegExp("(@[a-z]+\\s+)" + n),
			lookbehind: !0,
			inside: {
				string: t.string,
				number: t.number,
				boolean: t.boolean,
				keyword: e.languages.typescript.keyword,
				operator: /=>|\.\.\.|[&|?:*]/,
				punctuation: /[.,;=<>{}()[\]]/
			}
		}],
		example: {
			pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
			lookbehind: !0,
			inside: { code: {
				pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
				lookbehind: !0,
				inside: t,
				alias: "language-javascript"
			} }
		}
	}), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
}($), function(e) {
	e.languages.flow = e.languages.extend("javascript", {}), e.languages.insertBefore("flow", "keyword", { type: [{
		pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
		alias: "class-name"
	}] }), e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete e.languages.flow.parameter, e.languages.insertBefore("flow", "operator", { "flow-punctuation": {
		pattern: /\{\||\|\}/,
		alias: "punctuation"
	} }), Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]), e.languages.flow.keyword.unshift({
		pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
		lookbehind: !0
	}, {
		pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
		lookbehind: !0
	});
}($), $.languages.n4js = $.languages.extend("javascript", { keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/ }), $.languages.insertBefore("n4js", "constant", { annotation: {
	pattern: /@+\w+/,
	alias: "operator"
} }), $.languages.n4jsd = $.languages.n4js, function(e) {
	function t(e, t) {
		return RegExp(e.replace(/<ID>/g, function() {
			return "(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*";
		}), t);
	}
	e.languages.insertBefore("javascript", "function-variable", { "method-variable": {
		pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source),
		lookbehind: !0,
		alias: [
			"function-variable",
			"method",
			"function",
			"property-access"
		]
	} }), e.languages.insertBefore("javascript", "function", { method: {
		pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source),
		lookbehind: !0,
		alias: ["function", "property-access"]
	} }), e.languages.insertBefore("javascript", "constant", { "known-class-name": [{
		pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
		alias: "class-name"
	}, {
		pattern: /\b(?:[A-Z]\w*)Error\b/,
		alias: "class-name"
	}] }), e.languages.insertBefore("javascript", "keyword", {
		imports: {
			pattern: t("(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)"),
			lookbehind: !0,
			inside: e.languages.javascript
		},
		exports: {
			pattern: t("(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})"),
			lookbehind: !0,
			inside: e.languages.javascript
		}
	}), e.languages.javascript.keyword.unshift({
		pattern: /\b(?:as|default|export|from|import)\b/,
		alias: "module"
	}, {
		pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
		alias: "control-flow"
	}, {
		pattern: /\bnull\b/,
		alias: ["null", "nil"]
	}, {
		pattern: /\bundefined\b/,
		alias: "nil"
	}), e.languages.insertBefore("javascript", "operator", {
		spread: {
			pattern: /\.{3}/,
			alias: "operator"
		},
		arrow: {
			pattern: /=>/,
			alias: "operator"
		}
	}), e.languages.insertBefore("javascript", "punctuation", {
		"property-access": {
			pattern: t("(\\.\\s*)#?<ID>"),
			lookbehind: !0
		},
		"maybe-class-name": {
			pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
			lookbehind: !0
		},
		dom: {
			pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
			alias: "variable"
		},
		console: {
			pattern: /\bconsole(?=\s*\.)/,
			alias: "class-name"
		}
	});
	for (var n = [
		"function",
		"function-variable",
		"method",
		"method-variable",
		"property-access"
	], r = 0; r < n.length; r++) {
		var i = n[r], a = e.languages.javascript[i], i = (a = e.util.type(a) === "RegExp" ? e.languages.javascript[i] = { pattern: a } : a).inside || {};
		(a.inside = i)["maybe-class-name"] = /^[A-Z][\s\S]*/;
	}
}($), function(e) {
	var t = e.util.clone(e.languages.javascript), n = "(?:\\s|\\/\\/.*(?!.)|\\/\\*(?:[^*]|\\*(?!\\/))\\*\\/)", r = "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})", i = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
	function a(e, t) {
		return e = e.replace(/<S>/g, function() {
			return n;
		}).replace(/<BRACES>/g, function() {
			return r;
		}).replace(/<SPREAD>/g, function() {
			return i;
		}), RegExp(e, t);
	}
	i = a(i).source, e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = a("<\\/?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[\\s\\S]|[^\\\\\"])*\"|'(?:\\\\[\\s\\S]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\\/?)?>"), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = t.comment, e.languages.insertBefore("inside", "attr-name", { spread: {
		pattern: a("<SPREAD>"),
		inside: e.languages.jsx
	} }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", { script: {
		pattern: a("=<BRACES>"),
		alias: "language-javascript",
		inside: {
			"script-punctuation": {
				pattern: /^=(?=\{)/,
				alias: "punctuation"
			},
			rest: e.languages.jsx
		}
	} }, e.languages.jsx.tag);
	function o(t) {
		for (var n = [], r = 0; r < t.length; r++) {
			var i = t[r], a = !1;
			typeof i != "string" && (i.type === "tag" && i.content[0] && i.content[0].type === "tag" ? i.content[0].content[0].content === "</" ? 0 < n.length && n[n.length - 1].tagName === s(i.content[0].content[1]) && n.pop() : i.content[i.content.length - 1].content !== "/>" && n.push({
				tagName: s(i.content[0].content[1]),
				openedBraces: 0
			}) : 0 < n.length && i.type === "punctuation" && i.content === "{" ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && i.type === "punctuation" && i.content === "}" ? n[n.length - 1].openedBraces-- : a = !0), (a || typeof i == "string") && 0 < n.length && n[n.length - 1].openedBraces === 0 && (a = s(i), r < t.length - 1 && (typeof t[r + 1] == "string" || t[r + 1].type === "plain-text") && (a += s(t[r + 1]), t.splice(r + 1, 1)), 0 < r && (typeof t[r - 1] == "string" || t[r - 1].type === "plain-text") && (a = s(t[r - 1]) + a, t.splice(r - 1, 1), r--), t[r] = new e.Token("plain-text", a, null, a)), i.content && typeof i.content != "string" && o(i.content);
		}
	}
	var s = function(e) {
		return e ? typeof e == "string" ? e : typeof e.content == "string" ? e.content : e.content.map(s).join("") : "";
	};
	e.hooks.add("after-tokenize", function(e) {
		e.language !== "jsx" && e.language !== "tsx" || o(e.tokens);
	});
}($), function(e) {
	var t = e.util.clone(e.languages.typescript), t = (e.languages.tsx = e.languages.extend("jsx", t), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag);
	t.pattern = RegExp("(^|[^\\w$]|(?=<\\/))(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = !0;
}($), $.languages.swift = {
	comment: {
		pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
		lookbehind: !0,
		greedy: !0
	},
	"string-literal": [{
		pattern: RegExp("(^|[^\"#])(?:\"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\\r\\n|[^(])|[^\\\\\\r\\n\"])*\"|\"\"\"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\\"]|\"(?!\"\"))*\"\"\")(?![\"#])"),
		lookbehind: !0,
		greedy: !0,
		inside: {
			interpolation: {
				pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
				lookbehind: !0,
				inside: null
			},
			"interpolation-punctuation": {
				pattern: /^\)|\\\($/,
				alias: "punctuation"
			},
			punctuation: /\\(?=[\r\n])/,
			string: /[\s\S]+/
		}
	}, {
		pattern: RegExp("(^|[^\"#])(#+)(?:\"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\\r\\n|[^#])|[^\\\\\\r\\n])*?\"|\"\"\"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?\"\"\")\\2"),
		lookbehind: !0,
		greedy: !0,
		inside: {
			interpolation: {
				pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
				lookbehind: !0,
				inside: null
			},
			"interpolation-punctuation": {
				pattern: /^\)|\\#+\($/,
				alias: "punctuation"
			},
			string: /[\s\S]+/
		}
	}],
	directive: {
		pattern: RegExp("#(?:(?:elseif|if)\\b(?:[ 	]*(?:![ \\t]*)?(?:\\b\\w+\\b(?:[ \\t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \\t]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)"),
		alias: "property",
		inside: {
			"directive-name": /^#\w+/,
			boolean: /\b(?:false|true)\b/,
			number: /\b\d+(?:\.\d+)*\b/,
			operator: /!|&&|\|\||[<>]=?/,
			punctuation: /[(),]/
		}
	},
	literal: {
		pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
		alias: "constant"
	},
	"other-directive": {
		pattern: /#\w+\b/,
		alias: "property"
	},
	attribute: {
		pattern: /@\w+/,
		alias: "atrule"
	},
	"function-definition": {
		pattern: /(\bfunc\s+)\w+/,
		lookbehind: !0,
		alias: "function"
	},
	label: {
		pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
		lookbehind: !0,
		alias: "important"
	},
	keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
	boolean: /\b(?:false|true)\b/,
	nil: {
		pattern: /\bnil\b/,
		alias: "constant"
	},
	"short-argument": /\$\d+\b/,
	omit: {
		pattern: /\b_\b/,
		alias: "keyword"
	},
	number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
	"class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
	function: /\b[a-z_]\w*(?=\s*\()/i,
	constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
	operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
	punctuation: /[{}[\]();,.:\\]/
}, $.languages.swift["string-literal"].forEach(function(e) {
	e.inside.interpolation.inside = $.languages.swift;
}), function(e) {
	e.languages.kotlin = e.languages.extend("clike", {
		keyword: {
			pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
			lookbehind: !0
		},
		function: [{
			pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
			greedy: !0
		}, {
			pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
			lookbehind: !0,
			greedy: !0
		}],
		number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
		operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
	}), delete e.languages.kotlin["class-name"];
	var t = {
		"interpolation-punctuation": {
			pattern: /^\$\{?|\}$/,
			alias: "punctuation"
		},
		expression: {
			pattern: /[\s\S]+/,
			inside: e.languages.kotlin
		}
	};
	e.languages.insertBefore("kotlin", "string", {
		"string-literal": [{
			pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
			alias: "multiline",
			inside: {
				interpolation: {
					pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
					inside: t
				},
				string: /[\s\S]+/
			}
		}, {
			pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
			alias: "singleline",
			inside: {
				interpolation: {
					pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
					lookbehind: !0,
					inside: t
				},
				string: /[\s\S]+/
			}
		}],
		char: {
			pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
			greedy: !0
		}
	}), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", { annotation: {
		pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
		alias: "builtin"
	} }), e.languages.insertBefore("kotlin", "function", { label: {
		pattern: /\b\w+@|@\w+\b/,
		alias: "symbol"
	} }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
}($), $.languages.c = $.languages.extend("clike", {
	comment: {
		pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: !0
	},
	string: {
		pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
		greedy: !0
	},
	"class-name": {
		pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
		lookbehind: !0
	},
	keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
	function: /\b[a-z_]\w*(?=\s*\()/i,
	number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
	operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
}), $.languages.insertBefore("c", "string", { char: {
	pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
	greedy: !0
} }), $.languages.insertBefore("c", "string", { macro: {
	pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
	lookbehind: !0,
	greedy: !0,
	alias: "property",
	inside: {
		string: [{
			pattern: /^(#\s*include\s*)<[^>]+>/,
			lookbehind: !0
		}, $.languages.c.string],
		char: $.languages.c.char,
		comment: $.languages.c.comment,
		"macro-name": [{
			pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
			lookbehind: !0
		}, {
			pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
			lookbehind: !0,
			alias: "function"
		}],
		directive: {
			pattern: /^(#\s*)[a-z]+/,
			lookbehind: !0,
			alias: "keyword"
		},
		"directive-hash": /^#/,
		punctuation: /##|\\(?=[\r\n])/,
		expression: {
			pattern: /\S[\s\S]*/,
			inside: $.languages.c
		}
	}
} }), $.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete $.languages.c.boolean, $.languages.objectivec = $.languages.extend("c", {
	string: {
		pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
		greedy: !0
	},
	keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
	operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
}), delete $.languages.objectivec["class-name"], $.languages.objc = $.languages.objectivec, $.languages.reason = $.languages.extend("clike", {
	string: {
		pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
		greedy: !0
	},
	"class-name": /\b[A-Z]\w*/,
	keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
	operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
}), $.languages.insertBefore("reason", "class-name", {
	char: {
		pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
		greedy: !0
	},
	constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
	label: {
		pattern: /\b[a-z]\w*(?=::)/,
		alias: "symbol"
	}
}), delete $.languages.reason.function, function(e) {
	for (var t = "\\/\\*(?:[^*/]|\\*(?!\\/)|\\/(?!\\*)|<self>)*\\*\\/", n = 0; n < 2; n++) t = t.replace(/<self>/g, function() {
		return t;
	});
	t = t.replace(/<self>/g, function() {
		return "[^\\s\\S]";
	}), e.languages.rust = {
		comment: [{
			pattern: RegExp("(^|[^\\\\])" + t),
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: !0,
			greedy: !0
		}],
		string: {
			pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
			greedy: !0
		},
		char: {
			pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
			greedy: !0
		},
		attribute: {
			pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
			greedy: !0,
			alias: "attr-name",
			inside: { string: null }
		},
		"closure-params": {
			pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
			lookbehind: !0,
			greedy: !0,
			inside: {
				"closure-punctuation": {
					pattern: /^\||\|$/,
					alias: "punctuation"
				},
				rest: null
			}
		},
		"lifetime-annotation": {
			pattern: /'\w+/,
			alias: "symbol"
		},
		"fragment-specifier": {
			pattern: /(\$\w+:)[a-z]+/,
			lookbehind: !0,
			alias: "punctuation"
		},
		variable: /\$\w+/,
		"function-definition": {
			pattern: /(\bfn\s+)\w+/,
			lookbehind: !0,
			alias: "function"
		},
		"type-definition": {
			pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
			lookbehind: !0,
			alias: "class-name"
		},
		"module-declaration": [{
			pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
			lookbehind: !0,
			alias: "namespace"
		}, {
			pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
			lookbehind: !0,
			alias: "namespace",
			inside: { punctuation: /::/ }
		}],
		keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
		function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
		macro: {
			pattern: /\b\w+!/,
			alias: "property"
		},
		constant: /\b[A-Z_][A-Z_\d]+\b/,
		"class-name": /\b[A-Z]\w*\b/,
		namespace: {
			pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
			inside: { punctuation: /::/ }
		},
		number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
		boolean: /\b(?:false|true)\b/,
		punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
		operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
	}, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
}($), $.languages.go = $.languages.extend("clike", {
	string: {
		pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
		lookbehind: !0,
		greedy: !0
	},
	keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
	boolean: /\b(?:_|false|iota|nil|true)\b/,
	number: [
		/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
		/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
		/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
	],
	operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
	builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
}), $.languages.insertBefore("go", "string", { char: {
	pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
	greedy: !0
} }), delete $.languages.go["class-name"], function(e) {
	var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g, function() {
		return t.source;
	});
	e.languages.cpp = e.languages.extend("c", {
		"class-name": [
			{
				pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, function() {
					return t.source;
				})),
				lookbehind: !0
			},
			/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
			/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
			/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
		],
		keyword: t,
		number: {
			pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
			greedy: !0
		},
		operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
		boolean: /\b(?:false|true)\b/
	}), e.languages.insertBefore("cpp", "string", {
		module: {
			pattern: RegExp("(\\b(?:import|module)\\s+)(?:\"(?:\\\\(?:\\r\\n|[\\s\\S])|[^\"\\\\\\r\\n])*\"|<[^<>\\r\\n]*>|" + "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g, function() {
				return n;
			}) + ")"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				string: /^[<"][\s\S]+/,
				operator: /:/,
				punctuation: /\./
			}
		},
		"raw-string": {
			pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
			alias: "string",
			greedy: !0
		}
	}), e.languages.insertBefore("cpp", "keyword", { "generic-function": {
		pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
		inside: {
			function: /^\w+/,
			generic: {
				pattern: /<[\s\S]+/,
				alias: "class-name",
				inside: e.languages.cpp
			}
		}
	} }), e.languages.insertBefore("cpp", "operator", { "double-colon": {
		pattern: /::/,
		alias: "punctuation"
	} }), e.languages.insertBefore("cpp", "class-name", { "base-clause": {
		pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
		lookbehind: !0,
		greedy: !0,
		inside: e.languages.extend("cpp", {})
	} }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
}($), $.languages.python = {
	comment: {
		pattern: /(^|[^\\])#.*/,
		lookbehind: !0,
		greedy: !0
	},
	"string-interpolation": {
		pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
		greedy: !0,
		inside: {
			interpolation: {
				pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
				lookbehind: !0,
				inside: {
					"format-spec": {
						pattern: /(:)[^:(){}]+(?=\}$)/,
						lookbehind: !0
					},
					"conversion-option": {
						pattern: /![sra](?=[:}]$)/,
						alias: "punctuation"
					},
					rest: null
				}
			},
			string: /[\s\S]+/
		}
	},
	"triple-quoted-string": {
		pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
		greedy: !0,
		alias: "string"
	},
	string: {
		pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: !0
	},
	function: {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: !0
	},
	"class-name": {
		pattern: /(\bclass\s+)\w+/i,
		lookbehind: !0
	},
	decorator: {
		pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
		lookbehind: !0,
		alias: ["annotation", "punctuation"],
		inside: { punctuation: /\./ }
	},
	keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
	builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
	boolean: /\b(?:False|None|True)\b/,
	number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
	operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
	punctuation: /[{}[\];(),.:]/
}, $.languages.python["string-interpolation"].inside.interpolation.inside.rest = $.languages.python, $.languages.py = $.languages.python, $.languages.json = {
	property: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: !0,
		greedy: !0
	},
	string: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: !0,
		greedy: !0
	},
	comment: {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: !0
	},
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],]/,
	operator: /:/,
	boolean: /\b(?:false|true)\b/,
	null: {
		pattern: /\bnull\b/,
		alias: "keyword"
	}
}, $.languages.webmanifest = $.languages.json;
var FM = {};
NM(FM, {
	dracula: () => IM,
	duotoneDark: () => LM,
	duotoneLight: () => RM,
	github: () => zM,
	gruvboxMaterialDark: () => tN,
	gruvboxMaterialLight: () => nN,
	jettwaveDark: () => ZM,
	jettwaveLight: () => QM,
	nightOwl: () => BM,
	nightOwlLight: () => VM,
	oceanicNext: () => UM,
	okaidia: () => WM,
	oneDark: () => $M,
	oneLight: () => eN,
	palenight: () => GM,
	shadesOfPurple: () => KM,
	synthwave84: () => qM,
	ultramin: () => JM,
	vsDark: () => YM,
	vsLight: () => XM
});
var IM = {
	plain: {
		color: "#F8F8F2",
		backgroundColor: "#282A36"
	},
	styles: [
		{
			types: [
				"prolog",
				"constant",
				"builtin"
			],
			style: { color: "rgb(189, 147, 249)" }
		},
		{
			types: ["inserted", "function"],
			style: { color: "rgb(80, 250, 123)" }
		},
		{
			types: ["deleted"],
			style: { color: "rgb(255, 85, 85)" }
		},
		{
			types: ["changed"],
			style: { color: "rgb(255, 184, 108)" }
		},
		{
			types: ["punctuation", "symbol"],
			style: { color: "rgb(248, 248, 242)" }
		},
		{
			types: [
				"string",
				"char",
				"tag",
				"selector"
			],
			style: { color: "rgb(255, 121, 198)" }
		},
		{
			types: ["keyword", "variable"],
			style: {
				color: "rgb(189, 147, 249)",
				fontStyle: "italic"
			}
		},
		{
			types: ["comment"],
			style: { color: "rgb(98, 114, 164)" }
		},
		{
			types: ["attr-name"],
			style: { color: "rgb(241, 250, 140)" }
		}
	]
}, LM = {
	plain: {
		backgroundColor: "#2a2734",
		color: "#9a86fd"
	},
	styles: [
		{
			types: [
				"comment",
				"prolog",
				"doctype",
				"cdata",
				"punctuation"
			],
			style: { color: "#6c6783" }
		},
		{
			types: ["namespace"],
			style: { opacity: .7 }
		},
		{
			types: [
				"tag",
				"operator",
				"number"
			],
			style: { color: "#e09142" }
		},
		{
			types: ["property", "function"],
			style: { color: "#9a86fd" }
		},
		{
			types: [
				"tag-id",
				"selector",
				"atrule-id"
			],
			style: { color: "#eeebff" }
		},
		{
			types: ["attr-name"],
			style: { color: "#c4b9fe" }
		},
		{
			types: [
				"boolean",
				"string",
				"entity",
				"url",
				"attr-value",
				"keyword",
				"control",
				"directive",
				"unit",
				"statement",
				"regex",
				"atrule",
				"placeholder",
				"variable"
			],
			style: { color: "#ffcc99" }
		},
		{
			types: ["deleted"],
			style: { textDecorationLine: "line-through" }
		},
		{
			types: ["inserted"],
			style: { textDecorationLine: "underline" }
		},
		{
			types: ["italic"],
			style: { fontStyle: "italic" }
		},
		{
			types: ["important", "bold"],
			style: { fontWeight: "bold" }
		},
		{
			types: ["important"],
			style: { color: "#c4b9fe" }
		}
	]
}, RM = {
	plain: {
		backgroundColor: "#faf8f5",
		color: "#728fcb"
	},
	styles: [
		{
			types: [
				"comment",
				"prolog",
				"doctype",
				"cdata",
				"punctuation"
			],
			style: { color: "#b6ad9a" }
		},
		{
			types: ["namespace"],
			style: { opacity: .7 }
		},
		{
			types: [
				"tag",
				"operator",
				"number"
			],
			style: { color: "#063289" }
		},
		{
			types: ["property", "function"],
			style: { color: "#b29762" }
		},
		{
			types: [
				"tag-id",
				"selector",
				"atrule-id"
			],
			style: { color: "#2d2006" }
		},
		{
			types: ["attr-name"],
			style: { color: "#896724" }
		},
		{
			types: [
				"boolean",
				"string",
				"entity",
				"url",
				"attr-value",
				"keyword",
				"control",
				"directive",
				"unit",
				"statement",
				"regex",
				"atrule"
			],
			style: { color: "#728fcb" }
		},
		{
			types: ["placeholder", "variable"],
			style: { color: "#93abdc" }
		},
		{
			types: ["deleted"],
			style: { textDecorationLine: "line-through" }
		},
		{
			types: ["inserted"],
			style: { textDecorationLine: "underline" }
		},
		{
			types: ["italic"],
			style: { fontStyle: "italic" }
		},
		{
			types: ["important", "bold"],
			style: { fontWeight: "bold" }
		},
		{
			types: ["important"],
			style: { color: "#896724" }
		}
	]
}, zM = {
	plain: {
		color: "#393A34",
		backgroundColor: "#f6f8fa"
	},
	styles: [
		{
			types: [
				"comment",
				"prolog",
				"doctype",
				"cdata"
			],
			style: {
				color: "#999988",
				fontStyle: "italic"
			}
		},
		{
			types: ["namespace"],
			style: { opacity: .7 }
		},
		{
			types: ["string", "attr-value"],
			style: { color: "#e3116c" }
		},
		{
			types: ["punctuation", "operator"],
			style: { color: "#393A34" }
		},
		{
			types: [
				"entity",
				"url",
				"symbol",
				"number",
				"boolean",
				"variable",
				"constant",
				"property",
				"regex",
				"inserted"
			],
			style: { color: "#36acaa" }
		},
		{
			types: [
				"atrule",
				"keyword",
				"attr-name",
				"selector"
			],
			style: { color: "#00a4db" }
		},
		{
			types: [
				"function",
				"deleted",
				"tag"
			],
			style: { color: "#d73a49" }
		},
		{
			types: ["function-variable"],
			style: { color: "#6f42c1" }
		},
		{
			types: [
				"tag",
				"selector",
				"keyword"
			],
			style: { color: "#00009f" }
		}
	]
}, BM = {
	plain: {
		color: "#d6deeb",
		backgroundColor: "#011627"
	},
	styles: [
		{
			types: ["changed"],
			style: {
				color: "rgb(162, 191, 252)",
				fontStyle: "italic"
			}
		},
		{
			types: ["deleted"],
			style: {
				color: "rgba(239, 83, 80, 0.56)",
				fontStyle: "italic"
			}
		},
		{
			types: ["inserted", "attr-name"],
			style: {
				color: "rgb(173, 219, 103)",
				fontStyle: "italic"
			}
		},
		{
			types: ["comment"],
			style: {
				color: "rgb(99, 119, 119)",
				fontStyle: "italic"
			}
		},
		{
			types: ["string", "url"],
			style: { color: "rgb(173, 219, 103)" }
		},
		{
			types: ["variable"],
			style: { color: "rgb(214, 222, 235)" }
		},
		{
			types: ["number"],
			style: { color: "rgb(247, 140, 108)" }
		},
		{
			types: [
				"builtin",
				"char",
				"constant",
				"function"
			],
			style: { color: "rgb(130, 170, 255)" }
		},
		{
			types: ["punctuation"],
			style: { color: "rgb(199, 146, 234)" }
		},
		{
			types: ["selector", "doctype"],
			style: {
				color: "rgb(199, 146, 234)",
				fontStyle: "italic"
			}
		},
		{
			types: ["class-name"],
			style: { color: "rgb(255, 203, 139)" }
		},
		{
			types: [
				"tag",
				"operator",
				"keyword"
			],
			style: { color: "rgb(127, 219, 202)" }
		},
		{
			types: ["boolean"],
			style: { color: "rgb(255, 88, 116)" }
		},
		{
			types: ["property"],
			style: { color: "rgb(128, 203, 196)" }
		},
		{
			types: ["namespace"],
			style: { color: "rgb(178, 204, 214)" }
		}
	]
}, VM = {
	plain: {
		color: "#403f53",
		backgroundColor: "#FBFBFB"
	},
	styles: [
		{
			types: ["changed"],
			style: {
				color: "rgb(162, 191, 252)",
				fontStyle: "italic"
			}
		},
		{
			types: ["deleted"],
			style: {
				color: "rgba(239, 83, 80, 0.56)",
				fontStyle: "italic"
			}
		},
		{
			types: ["inserted", "attr-name"],
			style: {
				color: "rgb(72, 118, 214)",
				fontStyle: "italic"
			}
		},
		{
			types: ["comment"],
			style: {
				color: "rgb(152, 159, 177)",
				fontStyle: "italic"
			}
		},
		{
			types: [
				"string",
				"builtin",
				"char",
				"constant",
				"url"
			],
			style: { color: "rgb(72, 118, 214)" }
		},
		{
			types: ["variable"],
			style: { color: "rgb(201, 103, 101)" }
		},
		{
			types: ["number"],
			style: { color: "rgb(170, 9, 130)" }
		},
		{
			types: ["punctuation"],
			style: { color: "rgb(153, 76, 195)" }
		},
		{
			types: [
				"function",
				"selector",
				"doctype"
			],
			style: {
				color: "rgb(153, 76, 195)",
				fontStyle: "italic"
			}
		},
		{
			types: ["class-name"],
			style: { color: "rgb(17, 17, 17)" }
		},
		{
			types: ["tag"],
			style: { color: "rgb(153, 76, 195)" }
		},
		{
			types: [
				"operator",
				"property",
				"keyword",
				"namespace"
			],
			style: { color: "rgb(12, 150, 155)" }
		},
		{
			types: ["boolean"],
			style: { color: "rgb(188, 84, 84)" }
		}
	]
}, HM = {
	char: "#D8DEE9",
	comment: "#999999",
	keyword: "#c5a5c5",
	primitive: "#5a9bcf",
	string: "#8dc891",
	variable: "#d7deea",
	boolean: "#ff8b50",
	punctuation: "#5FB3B3",
	tag: "#fc929e",
	function: "#79b6f2",
	className: "#FAC863",
	method: "#6699CC",
	operator: "#fc929e"
}, UM = {
	plain: {
		backgroundColor: "#282c34",
		color: "#ffffff"
	},
	styles: [
		{
			types: ["attr-name"],
			style: { color: HM.keyword }
		},
		{
			types: ["attr-value"],
			style: { color: HM.string }
		},
		{
			types: [
				"comment",
				"block-comment",
				"prolog",
				"doctype",
				"cdata",
				"shebang"
			],
			style: { color: HM.comment }
		},
		{
			types: [
				"property",
				"number",
				"function-name",
				"constant",
				"symbol",
				"deleted"
			],
			style: { color: HM.primitive }
		},
		{
			types: ["boolean"],
			style: { color: HM.boolean }
		},
		{
			types: ["tag"],
			style: { color: HM.tag }
		},
		{
			types: ["string"],
			style: { color: HM.string }
		},
		{
			types: ["punctuation"],
			style: { color: HM.string }
		},
		{
			types: [
				"selector",
				"char",
				"builtin",
				"inserted"
			],
			style: { color: HM.char }
		},
		{
			types: ["function"],
			style: { color: HM.function }
		},
		{
			types: [
				"operator",
				"entity",
				"url",
				"variable"
			],
			style: { color: HM.variable }
		},
		{
			types: ["keyword"],
			style: { color: HM.keyword }
		},
		{
			types: ["atrule", "class-name"],
			style: { color: HM.className }
		},
		{
			types: ["important"],
			style: { fontWeight: "400" }
		},
		{
			types: ["bold"],
			style: { fontWeight: "bold" }
		},
		{
			types: ["italic"],
			style: { fontStyle: "italic" }
		},
		{
			types: ["namespace"],
			style: { opacity: .7 }
		}
	]
}, WM = {
	plain: {
		color: "#f8f8f2",
		backgroundColor: "#272822"
	},
	styles: [
		{
			types: ["changed"],
			style: {
				color: "rgb(162, 191, 252)",
				fontStyle: "italic"
			}
		},
		{
			types: ["deleted"],
			style: {
				color: "#f92672",
				fontStyle: "italic"
			}
		},
		{
			types: ["inserted"],
			style: {
				color: "rgb(173, 219, 103)",
				fontStyle: "italic"
			}
		},
		{
			types: ["comment"],
			style: {
				color: "#8292a2",
				fontStyle: "italic"
			}
		},
		{
			types: ["string", "url"],
			style: { color: "#a6e22e" }
		},
		{
			types: ["variable"],
			style: { color: "#f8f8f2" }
		},
		{
			types: ["number"],
			style: { color: "#ae81ff" }
		},
		{
			types: [
				"builtin",
				"char",
				"constant",
				"function",
				"class-name"
			],
			style: { color: "#e6db74" }
		},
		{
			types: ["punctuation"],
			style: { color: "#f8f8f2" }
		},
		{
			types: ["selector", "doctype"],
			style: {
				color: "#a6e22e",
				fontStyle: "italic"
			}
		},
		{
			types: [
				"tag",
				"operator",
				"keyword"
			],
			style: { color: "#66d9ef" }
		},
		{
			types: ["boolean"],
			style: { color: "#ae81ff" }
		},
		{
			types: ["namespace"],
			style: {
				color: "rgb(178, 204, 214)",
				opacity: .7
			}
		},
		{
			types: ["tag", "property"],
			style: { color: "#f92672" }
		},
		{
			types: ["attr-name"],
			style: { color: "#a6e22e !important" }
		},
		{
			types: ["doctype"],
			style: { color: "#8292a2" }
		},
		{
			types: ["rule"],
			style: { color: "#e6db74" }
		}
	]
}, GM = {
	plain: {
		color: "#bfc7d5",
		backgroundColor: "#292d3e"
	},
	styles: [
		{
			types: ["comment"],
			style: {
				color: "rgb(105, 112, 152)",
				fontStyle: "italic"
			}
		},
		{
			types: ["string", "inserted"],
			style: { color: "rgb(195, 232, 141)" }
		},
		{
			types: ["number"],
			style: { color: "rgb(247, 140, 108)" }
		},
		{
			types: [
				"builtin",
				"char",
				"constant",
				"function"
			],
			style: { color: "rgb(130, 170, 255)" }
		},
		{
			types: ["punctuation", "selector"],
			style: { color: "rgb(199, 146, 234)" }
		},
		{
			types: ["variable"],
			style: { color: "rgb(191, 199, 213)" }
		},
		{
			types: ["class-name", "attr-name"],
			style: { color: "rgb(255, 203, 107)" }
		},
		{
			types: ["tag", "deleted"],
			style: { color: "rgb(255, 85, 114)" }
		},
		{
			types: ["operator"],
			style: { color: "rgb(137, 221, 255)" }
		},
		{
			types: ["boolean"],
			style: { color: "rgb(255, 88, 116)" }
		},
		{
			types: ["keyword"],
			style: { fontStyle: "italic" }
		},
		{
			types: ["doctype"],
			style: {
				color: "rgb(199, 146, 234)",
				fontStyle: "italic"
			}
		},
		{
			types: ["namespace"],
			style: { color: "rgb(178, 204, 214)" }
		},
		{
			types: ["url"],
			style: { color: "rgb(221, 221, 221)" }
		}
	]
}, KM = {
	plain: {
		color: "#9EFEFF",
		backgroundColor: "#2D2A55"
	},
	styles: [
		{
			types: ["changed"],
			style: { color: "rgb(255, 238, 128)" }
		},
		{
			types: ["deleted"],
			style: { color: "rgba(239, 83, 80, 0.56)" }
		},
		{
			types: ["inserted"],
			style: { color: "rgb(173, 219, 103)" }
		},
		{
			types: ["comment"],
			style: {
				color: "rgb(179, 98, 255)",
				fontStyle: "italic"
			}
		},
		{
			types: ["punctuation"],
			style: { color: "rgb(255, 255, 255)" }
		},
		{
			types: ["constant"],
			style: { color: "rgb(255, 98, 140)" }
		},
		{
			types: ["string", "url"],
			style: { color: "rgb(165, 255, 144)" }
		},
		{
			types: ["variable"],
			style: { color: "rgb(255, 238, 128)" }
		},
		{
			types: ["number", "boolean"],
			style: { color: "rgb(255, 98, 140)" }
		},
		{
			types: ["attr-name"],
			style: { color: "rgb(255, 180, 84)" }
		},
		{
			types: [
				"keyword",
				"operator",
				"property",
				"namespace",
				"tag",
				"selector",
				"doctype"
			],
			style: { color: "rgb(255, 157, 0)" }
		},
		{
			types: [
				"builtin",
				"char",
				"constant",
				"function",
				"class-name"
			],
			style: { color: "rgb(250, 208, 0)" }
		}
	]
}, qM = {
	plain: {
		backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
		backgroundImage: "#34294f",
		color: "#f92aad",
		textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
	},
	styles: [
		{
			types: [
				"comment",
				"block-comment",
				"prolog",
				"doctype",
				"cdata"
			],
			style: {
				color: "#495495",
				fontStyle: "italic"
			}
		},
		{
			types: ["punctuation"],
			style: { color: "#ccc" }
		},
		{
			types: [
				"tag",
				"attr-name",
				"namespace",
				"number",
				"unit",
				"hexcode",
				"deleted"
			],
			style: { color: "#e2777a" }
		},
		{
			types: ["property", "selector"],
			style: {
				color: "#72f1b8",
				textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
			}
		},
		{
			types: ["function-name"],
			style: { color: "#6196cc" }
		},
		{
			types: [
				"boolean",
				"selector-id",
				"function"
			],
			style: {
				color: "#fdfdfd",
				textShadow: "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
			}
		},
		{
			types: [
				"class-name",
				"maybe-class-name",
				"builtin"
			],
			style: {
				color: "#fff5f6",
				textShadow: "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
			}
		},
		{
			types: ["constant", "symbol"],
			style: {
				color: "#f92aad",
				textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
			}
		},
		{
			types: [
				"important",
				"atrule",
				"keyword",
				"selector-class"
			],
			style: {
				color: "#f4eee4",
				textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
			}
		},
		{
			types: [
				"string",
				"char",
				"attr-value",
				"regex",
				"variable"
			],
			style: { color: "#f87c32" }
		},
		{
			types: ["parameter"],
			style: { fontStyle: "italic" }
		},
		{
			types: ["entity", "url"],
			style: { color: "#67cdcc" }
		},
		{
			types: ["operator"],
			style: { color: "ffffffee" }
		},
		{
			types: ["important", "bold"],
			style: { fontWeight: "bold" }
		},
		{
			types: ["italic"],
			style: { fontStyle: "italic" }
		},
		{
			types: ["entity"],
			style: { cursor: "help" }
		},
		{
			types: ["inserted"],
			style: { color: "green" }
		}
	]
}, JM = {
	plain: {
		color: "#282a2e",
		backgroundColor: "#ffffff"
	},
	styles: [
		{
			types: ["comment"],
			style: { color: "rgb(197, 200, 198)" }
		},
		{
			types: [
				"string",
				"number",
				"builtin",
				"variable"
			],
			style: { color: "rgb(150, 152, 150)" }
		},
		{
			types: [
				"class-name",
				"function",
				"tag",
				"attr-name"
			],
			style: { color: "rgb(40, 42, 46)" }
		}
	]
}, YM = {
	plain: {
		color: "#9CDCFE",
		backgroundColor: "#1E1E1E"
	},
	styles: [
		{
			types: ["prolog"],
			style: { color: "rgb(0, 0, 128)" }
		},
		{
			types: ["comment"],
			style: { color: "rgb(106, 153, 85)" }
		},
		{
			types: [
				"builtin",
				"changed",
				"keyword",
				"interpolation-punctuation"
			],
			style: { color: "rgb(86, 156, 214)" }
		},
		{
			types: ["number", "inserted"],
			style: { color: "rgb(181, 206, 168)" }
		},
		{
			types: ["constant"],
			style: { color: "rgb(100, 102, 149)" }
		},
		{
			types: ["attr-name", "variable"],
			style: { color: "rgb(156, 220, 254)" }
		},
		{
			types: [
				"deleted",
				"string",
				"attr-value",
				"template-punctuation"
			],
			style: { color: "rgb(206, 145, 120)" }
		},
		{
			types: ["selector"],
			style: { color: "rgb(215, 186, 125)" }
		},
		{
			types: ["tag"],
			style: { color: "rgb(78, 201, 176)" }
		},
		{
			types: ["tag"],
			languages: ["markup"],
			style: { color: "rgb(86, 156, 214)" }
		},
		{
			types: ["punctuation", "operator"],
			style: { color: "rgb(212, 212, 212)" }
		},
		{
			types: ["punctuation"],
			languages: ["markup"],
			style: { color: "#808080" }
		},
		{
			types: ["function"],
			style: { color: "rgb(220, 220, 170)" }
		},
		{
			types: ["class-name"],
			style: { color: "rgb(78, 201, 176)" }
		},
		{
			types: ["char"],
			style: { color: "rgb(209, 105, 105)" }
		}
	]
}, XM = {
	plain: {
		color: "#000000",
		backgroundColor: "#ffffff"
	},
	styles: [
		{
			types: ["comment"],
			style: { color: "rgb(0, 128, 0)" }
		},
		{
			types: ["builtin"],
			style: { color: "rgb(0, 112, 193)" }
		},
		{
			types: [
				"number",
				"variable",
				"inserted"
			],
			style: { color: "rgb(9, 134, 88)" }
		},
		{
			types: ["operator"],
			style: { color: "rgb(0, 0, 0)" }
		},
		{
			types: ["constant", "char"],
			style: { color: "rgb(129, 31, 63)" }
		},
		{
			types: ["tag"],
			style: { color: "rgb(128, 0, 0)" }
		},
		{
			types: ["attr-name"],
			style: { color: "rgb(255, 0, 0)" }
		},
		{
			types: ["deleted", "string"],
			style: { color: "rgb(163, 21, 21)" }
		},
		{
			types: ["changed", "punctuation"],
			style: { color: "rgb(4, 81, 165)" }
		},
		{
			types: ["function", "keyword"],
			style: { color: "rgb(0, 0, 255)" }
		},
		{
			types: ["class-name"],
			style: { color: "rgb(38, 127, 153)" }
		}
	]
}, ZM = {
	plain: {
		color: "#f8fafc",
		backgroundColor: "#011627"
	},
	styles: [
		{
			types: ["prolog"],
			style: { color: "#000080" }
		},
		{
			types: ["comment"],
			style: { color: "#6A9955" }
		},
		{
			types: [
				"builtin",
				"changed",
				"keyword",
				"interpolation-punctuation"
			],
			style: { color: "#569CD6" }
		},
		{
			types: ["number", "inserted"],
			style: { color: "#B5CEA8" }
		},
		{
			types: ["constant"],
			style: { color: "#f8fafc" }
		},
		{
			types: ["attr-name", "variable"],
			style: { color: "#9CDCFE" }
		},
		{
			types: [
				"deleted",
				"string",
				"attr-value",
				"template-punctuation"
			],
			style: { color: "#cbd5e1" }
		},
		{
			types: ["selector"],
			style: { color: "#D7BA7D" }
		},
		{
			types: ["tag"],
			style: { color: "#0ea5e9" }
		},
		{
			types: ["tag"],
			languages: ["markup"],
			style: { color: "#0ea5e9" }
		},
		{
			types: ["punctuation", "operator"],
			style: { color: "#D4D4D4" }
		},
		{
			types: ["punctuation"],
			languages: ["markup"],
			style: { color: "#808080" }
		},
		{
			types: ["function"],
			style: { color: "#7dd3fc" }
		},
		{
			types: ["class-name"],
			style: { color: "#0ea5e9" }
		},
		{
			types: ["char"],
			style: { color: "#D16969" }
		}
	]
}, QM = {
	plain: {
		color: "#0f172a",
		backgroundColor: "#f1f5f9"
	},
	styles: [
		{
			types: ["prolog"],
			style: { color: "#000080" }
		},
		{
			types: ["comment"],
			style: { color: "#6A9955" }
		},
		{
			types: [
				"builtin",
				"changed",
				"keyword",
				"interpolation-punctuation"
			],
			style: { color: "#0c4a6e" }
		},
		{
			types: ["number", "inserted"],
			style: { color: "#B5CEA8" }
		},
		{
			types: ["constant"],
			style: { color: "#0f172a" }
		},
		{
			types: ["attr-name", "variable"],
			style: { color: "#0c4a6e" }
		},
		{
			types: [
				"deleted",
				"string",
				"attr-value",
				"template-punctuation"
			],
			style: { color: "#64748b" }
		},
		{
			types: ["selector"],
			style: { color: "#D7BA7D" }
		},
		{
			types: ["tag"],
			style: { color: "#0ea5e9" }
		},
		{
			types: ["tag"],
			languages: ["markup"],
			style: { color: "#0ea5e9" }
		},
		{
			types: ["punctuation", "operator"],
			style: { color: "#475569" }
		},
		{
			types: ["punctuation"],
			languages: ["markup"],
			style: { color: "#808080" }
		},
		{
			types: ["function"],
			style: { color: "#0e7490" }
		},
		{
			types: ["class-name"],
			style: { color: "#0ea5e9" }
		},
		{
			types: ["char"],
			style: { color: "#D16969" }
		}
	]
}, $M = {
	plain: {
		backgroundColor: "hsl(220, 13%, 18%)",
		color: "hsl(220, 14%, 71%)",
		textShadow: "0 1px rgba(0, 0, 0, 0.3)"
	},
	styles: [
		{
			types: [
				"comment",
				"prolog",
				"cdata"
			],
			style: { color: "hsl(220, 10%, 40%)" }
		},
		{
			types: [
				"doctype",
				"punctuation",
				"entity"
			],
			style: { color: "hsl(220, 14%, 71%)" }
		},
		{
			types: [
				"attr-name",
				"class-name",
				"maybe-class-name",
				"boolean",
				"constant",
				"number",
				"atrule"
			],
			style: { color: "hsl(29, 54%, 61%)" }
		},
		{
			types: ["keyword"],
			style: { color: "hsl(286, 60%, 67%)" }
		},
		{
			types: [
				"property",
				"tag",
				"symbol",
				"deleted",
				"important"
			],
			style: { color: "hsl(355, 65%, 65%)" }
		},
		{
			types: [
				"selector",
				"string",
				"char",
				"builtin",
				"inserted",
				"regex",
				"attr-value"
			],
			style: { color: "hsl(95, 38%, 62%)" }
		},
		{
			types: [
				"variable",
				"operator",
				"function"
			],
			style: { color: "hsl(207, 82%, 66%)" }
		},
		{
			types: ["url"],
			style: { color: "hsl(187, 47%, 55%)" }
		},
		{
			types: ["deleted"],
			style: { textDecorationLine: "line-through" }
		},
		{
			types: ["inserted"],
			style: { textDecorationLine: "underline" }
		},
		{
			types: ["italic"],
			style: { fontStyle: "italic" }
		},
		{
			types: ["important", "bold"],
			style: { fontWeight: "bold" }
		},
		{
			types: ["important"],
			style: { color: "hsl(220, 14%, 71%)" }
		}
	]
}, eN = {
	plain: {
		backgroundColor: "hsl(230, 1%, 98%)",
		color: "hsl(230, 8%, 24%)"
	},
	styles: [
		{
			types: [
				"comment",
				"prolog",
				"cdata"
			],
			style: { color: "hsl(230, 4%, 64%)" }
		},
		{
			types: [
				"doctype",
				"punctuation",
				"entity"
			],
			style: { color: "hsl(230, 8%, 24%)" }
		},
		{
			types: [
				"attr-name",
				"class-name",
				"boolean",
				"constant",
				"number",
				"atrule"
			],
			style: { color: "hsl(35, 99%, 36%)" }
		},
		{
			types: ["keyword"],
			style: { color: "hsl(301, 63%, 40%)" }
		},
		{
			types: [
				"property",
				"tag",
				"symbol",
				"deleted",
				"important"
			],
			style: { color: "hsl(5, 74%, 59%)" }
		},
		{
			types: [
				"selector",
				"string",
				"char",
				"builtin",
				"inserted",
				"regex",
				"attr-value",
				"punctuation"
			],
			style: { color: "hsl(119, 34%, 47%)" }
		},
		{
			types: [
				"variable",
				"operator",
				"function"
			],
			style: { color: "hsl(221, 87%, 60%)" }
		},
		{
			types: ["url"],
			style: { color: "hsl(198, 99%, 37%)" }
		},
		{
			types: ["deleted"],
			style: { textDecorationLine: "line-through" }
		},
		{
			types: ["inserted"],
			style: { textDecorationLine: "underline" }
		},
		{
			types: ["italic"],
			style: { fontStyle: "italic" }
		},
		{
			types: ["important", "bold"],
			style: { fontWeight: "bold" }
		},
		{
			types: ["important"],
			style: { color: "hsl(230, 8%, 24%)" }
		}
	]
}, tN = {
	plain: {
		color: "#ebdbb2",
		backgroundColor: "#292828"
	},
	styles: [
		{
			types: [
				"imports",
				"class-name",
				"maybe-class-name",
				"constant",
				"doctype",
				"builtin",
				"function"
			],
			style: { color: "#d8a657" }
		},
		{
			types: ["property-access"],
			style: { color: "#7daea3" }
		},
		{
			types: ["tag"],
			style: { color: "#e78a4e" }
		},
		{
			types: [
				"attr-name",
				"char",
				"url",
				"regex"
			],
			style: { color: "#a9b665" }
		},
		{
			types: ["attr-value", "string"],
			style: { color: "#89b482" }
		},
		{
			types: [
				"comment",
				"prolog",
				"cdata",
				"operator",
				"inserted"
			],
			style: { color: "#a89984" }
		},
		{
			types: [
				"delimiter",
				"boolean",
				"keyword",
				"selector",
				"important",
				"atrule",
				"property",
				"variable",
				"deleted"
			],
			style: { color: "#ea6962" }
		},
		{
			types: [
				"entity",
				"number",
				"symbol"
			],
			style: { color: "#d3869b" }
		}
	]
}, nN = {
	plain: {
		color: "#654735",
		backgroundColor: "#f9f5d7"
	},
	styles: [
		{
			types: [
				"delimiter",
				"boolean",
				"keyword",
				"selector",
				"important",
				"atrule",
				"property",
				"variable",
				"deleted"
			],
			style: { color: "#af2528" }
		},
		{
			types: [
				"imports",
				"class-name",
				"maybe-class-name",
				"constant",
				"doctype",
				"builtin"
			],
			style: { color: "#b4730e" }
		},
		{
			types: ["string", "attr-value"],
			style: { color: "#477a5b" }
		},
		{
			types: ["property-access"],
			style: { color: "#266b79" }
		},
		{
			types: [
				"function",
				"attr-name",
				"char",
				"url"
			],
			style: { color: "#72761e" }
		},
		{
			types: ["tag"],
			style: { color: "#b94c07" }
		},
		{
			types: [
				"comment",
				"prolog",
				"cdata",
				"operator",
				"inserted"
			],
			style: { color: "#a89984" }
		},
		{
			types: [
				"entity",
				"number",
				"symbol"
			],
			style: { color: "#924f79" }
		}
	]
}, rN = (e) => u((t) => {
	var n = t, { className: r, style: i, line: a } = n;
	let o = AM(kM({}, jM(n, [
		"className",
		"style",
		"line"
	])), { className: Xe("token-line", r) });
	return typeof e == "object" && "plain" in e && (o.style = e.plain), typeof i == "object" && (o.style = kM(kM({}, o.style || {}), i)), o;
}, [e]), iN = (e) => {
	let t = u(({ types: t, empty: n }) => {
		if (e != null) return t.length === 1 && t[0] === "plain" ? n == null ? void 0 : { display: "inline-block" } : t.length === 1 && n != null ? e[t[0]] : Object.assign(n == null ? {} : { display: "inline-block" }, ...t.map((t) => e[t]));
	}, [e]);
	return u((e) => {
		var n = e, { token: r, className: i, style: a } = n;
		let o = AM(kM({}, jM(n, [
			"token",
			"className",
			"style"
		])), {
			className: Xe("token", ...r.types, i),
			children: r.content,
			style: t(r)
		});
		return a != null && (o.style = kM(kM({}, o.style || {}), a)), o;
	}, [t]);
}, aN = /\r\n|\r|\n/, oN = (e) => {
	e.length === 0 ? e.push({
		types: ["plain"],
		content: "\n",
		empty: !0
	}) : e.length === 1 && e[0].content === "" && (e[0].content = "\n", e[0].empty = !0);
}, sN = (e, t) => {
	let n = e.length;
	return n > 0 && e[n - 1] === t ? e : e.concat(t);
}, cN = (e) => {
	let t = [[]], n = [e], r = [0], i = [e.length], a = 0, o = 0, s = [], c = [s];
	for (; o > -1;) {
		for (; (a = r[o]++) < i[o];) {
			let e, l = t[o], u = n[o][a];
			if (typeof u == "string" ? (l = o > 0 ? l : ["plain"], e = u) : (l = sN(l, u.type), u.alias && (l = sN(l, u.alias)), e = u.content), typeof e != "string") {
				o++, t.push(l), n.push(e), r.push(0), i.push(e.length);
				continue;
			}
			let d = e.split(aN), f = d.length;
			s.push({
				types: l,
				content: d[0]
			});
			for (let e = 1; e < f; e++) oN(s), c.push(s = []), s.push({
				types: l,
				content: d[e]
			});
		}
		o--, t.pop(), n.pop(), r.pop(), i.pop();
	}
	return oN(s), c;
}, lN = ({ prism: e, code: t, grammar: n, language: r }) => m(() => {
	if (n == null) return cN([t]);
	let i = {
		code: t,
		grammar: n,
		language: r,
		tokens: []
	};
	return e.hooks.run("before-tokenize", i), i.tokens = e.tokenize(t, n), e.hooks.run("after-tokenize", i), cN(i.tokens);
}, [
	t,
	n,
	r,
	e
]), uN = (e, t) => {
	let { plain: n } = e, r = e.styles.reduce((e, n) => {
		let { languages: r, style: i } = n;
		return r && !r.includes(t) || n.types.forEach((t) => {
			e[t] = kM(kM({}, e[t]), i);
		}), e;
	}, {});
	return r.root = n, r.plain = AM(kM({}, n), { backgroundColor: void 0 }), r;
}, dN = ({ children: e, language: t, code: n, theme: r, prism: i }) => {
	let a = t.toLowerCase(), o = uN(r, a), s = rN(o), c = iN(o), l = i.languages[a];
	return e({
		tokens: lN({
			prism: i,
			language: a,
			code: n,
			grammar: l
		}),
		className: `prism-code language-${a}`,
		style: o == null ? {} : o.root,
		getLineProps: s,
		getTokenProps: c
	});
}, fN = (e) => o(dN, AM(kM({}, e), {
	prism: e.prism || $,
	theme: e.theme || YM,
	code: e.code,
	language: e.language
}));
//#endregion
//#region src/components/common/AppCodePreview.tsx
function pN() {
	return _((e) => {
		let t = new MutationObserver(e);
		return t.observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		}), () => t.disconnect();
	}, () => document.documentElement.classList.contains("dark"), () => !1);
}
function mN(e, t) {
	let n = [[`// @preview-start:${t}`, `// @preview-end:${t}`], [`{/* @preview-start:${t} */}`, `{/* @preview-end:${t} */}`]], r = -1, i = -1, a = 0;
	for (let [t, o] of n) {
		let n = e.indexOf(t), s = e.indexOf(o);
		if (n !== -1 && s !== -1) {
			r = n, i = s, a = t.length;
			break;
		}
	}
	if (r === -1 || i === -1) return "";
	let o = e.slice(r + a, i).split("\n").filter((e, t, n) => !(t === 0 && e.trim() === "" || t === n.length - 1 && e.trim() === "")), s = o.filter((e) => e.trim().length > 0).reduce((e, t) => {
		let n = t.match(/^(\s*)/)?.[1].length ?? 0;
		return Math.min(e, n);
	}, Infinity);
	return o.map((e) => e.slice(s)).join("\n");
}
var hN = ({ children: e, source: t, marker: n, className: r }) => {
	let [i, a] = g("preview"), [o, s] = g(!1), c = mN(t, n);
	return /* @__PURE__ */ S("div", {
		className: q("rounded-md border border-border overflow-hidden", r),
		children: [
			/* @__PURE__ */ S("div", {
				className: "flex items-center justify-between border-b border-border bg-muted/30 px-3",
				children: [/* @__PURE__ */ S("div", {
					className: "flex",
					children: [/* @__PURE__ */ S("button", {
						onClick: () => a("preview"),
						className: q("flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-medium transition-colors", i === "preview" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [/* @__PURE__ */ x(re, { className: "h-3.5 w-3.5" }), "미리보기"]
					}), /* @__PURE__ */ S("button", {
						onClick: () => a("code"),
						className: q("flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-medium transition-colors", i === "code" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [/* @__PURE__ */ x(te, { className: "h-3.5 w-3.5" }), "코드"]
					})]
				}), i === "code" && /* @__PURE__ */ x("button", {
					onClick: () => {
						navigator.clipboard.writeText(c).then(() => {
							s(!0), setTimeout(() => s(!1), 1500);
						});
					},
					className: "flex items-center gap-1 rounded px-2 py-1 text-[11px] text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
					children: o ? /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(T, { className: "h-3 w-3 text-green-500" }), /* @__PURE__ */ x("span", {
						className: "text-green-500",
						children: "복사됨"
					})] }) : /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(L, { className: "h-3 w-3" }), "복사"] })
				})]
			}),
			i === "preview" && /* @__PURE__ */ x("div", {
				className: "p-4",
				children: e
			}),
			i === "code" && /* @__PURE__ */ x("div", {
				className: "relative overflow-auto max-h-[480px] text-[12px] leading-relaxed",
				children: /* @__PURE__ */ x(gN, { code: c })
			})
		]
	});
};
function gN({ code: e }) {
	return /* @__PURE__ */ x(fN, {
		theme: pN() ? FM.nightOwl : FM.github,
		code: e,
		language: "tsx",
		children: ({ style: e, tokens: t, getLineProps: n, getTokenProps: r }) => /* @__PURE__ */ x("pre", {
			className: "m-0 overflow-auto p-4 text-[12px] leading-relaxed",
			style: {
				...e,
				background: "var(--muted)"
			},
			children: t.map((e, t) => /* @__PURE__ */ S("div", {
				...n({ line: e }),
				className: "table-row",
				children: [/* @__PURE__ */ x("span", {
					className: "table-cell select-none pr-4 text-right text-[11px] text-muted-foreground/50 w-8",
					children: t + 1
				}), /* @__PURE__ */ x("span", {
					className: "table-cell",
					children: e.map((e, t) => /* @__PURE__ */ x("span", { ...r({ token: e }) }, t))
				})]
			}, t))
		})
	});
}
//#endregion
//#region src/lib/chartDownload.ts
var _N = (e, t = "chart") => {
	let n = e.current?.querySelector("svg");
	if (!n) return;
	let r = new XMLSerializer().serializeToString(n), i = new Blob([r], { type: "image/svg+xml;charset=utf-8" }), a = URL.createObjectURL(i), { width: o, height: s } = n.getBoundingClientRect(), c = document.createElement("canvas"), l = window.devicePixelRatio || 2;
	c.width = o * l, c.height = s * l;
	let u = c.getContext("2d");
	if (!u) return;
	let d = getComputedStyle(document.documentElement).getPropertyValue("--background").trim();
	u.fillStyle = d ? `oklch(${d})` : "#ffffff", u.fillRect(0, 0, c.width, c.height), u.scale(l, l);
	let f = new Image();
	f.onload = () => {
		u.drawImage(f, 0, 0, o, s), URL.revokeObjectURL(a);
		let e = document.createElement("a");
		e.download = `${t}.png`, e.href = c.toDataURL("image/png"), e.click();
	}, f.src = a;
}, vN = {
	light: "",
	dark: ".dark"
}, yN = {
	width: 320,
	height: 200
}, bN = e.createContext(null);
function xN() {
	let t = e.useContext(bN);
	if (!t) throw Error("useChart must be used within a <ChartContainer />");
	return t;
}
function SN({ id: t, className: n, children: r, config: i, initialDimension: a = yN, ...o }) {
	let s = e.useId(), c = `chart-${t ?? s.replace(/:/g, "")}`;
	return /* @__PURE__ */ x(bN.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ S("div", {
			"data-slot": "chart",
			"data-chart": c,
			className: q("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", n),
			...o,
			children: [/* @__PURE__ */ x(CN, {
				id: c,
				config: i
			}), /* @__PURE__ */ x(Ae.ResponsiveContainer, {
				initialDimension: a,
				children: r
			})]
		})
	});
}
var CN = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([, e]) => e.theme ?? e.color);
	return n.length ? /* @__PURE__ */ x("style", { dangerouslySetInnerHTML: { __html: Object.entries(vN).map(([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
		let r = n.theme?.[t] ?? n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`).join("\n") } }) : null;
}, wN = Ae.Tooltip;
function TN({ active: t, payload: n, className: r, indicator: i = "dot", hideLabel: a = !1, hideIndicator: o = !1, label: s, labelFormatter: c, labelClassName: l, formatter: u, color: d, nameKey: f, labelKey: p }) {
	let { config: m } = xN(), h = e.useMemo(() => {
		if (a || !n?.length) return null;
		let [e] = n, t = DN(m, e, `${p ?? e?.dataKey ?? e?.name ?? "value"}`), r = !p && typeof s == "string" ? m[s]?.label ?? s : t?.label;
		return c ? /* @__PURE__ */ x("div", {
			className: q("font-medium", l),
			children: c(r, n)
		}) : r ? /* @__PURE__ */ x("div", {
			className: q("font-medium", l),
			children: r
		}) : null;
	}, [
		s,
		c,
		n,
		a,
		l,
		m,
		p
	]);
	if (!t || !n?.length) return null;
	let g = n.length === 1 && i !== "dot";
	return /* @__PURE__ */ S("div", {
		className: q("grid min-w-32 items-start gap-1.5 rounded-none border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", r),
		children: [g ? null : h, /* @__PURE__ */ x("div", {
			className: "grid gap-1.5",
			children: n.filter((e) => e.type !== "none").map((e, t) => {
				let n = DN(m, e, `${f ?? e.name ?? e.dataKey ?? "value"}`), r = d ?? e.payload?.fill ?? e.color;
				return /* @__PURE__ */ x("div", {
					className: q("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", i === "dot" && "items-center"),
					children: u && e?.value !== void 0 && e.name ? u(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ S(b, { children: [n?.icon ? /* @__PURE__ */ x(n.icon, {}) : !o && /* @__PURE__ */ x("div", {
						className: q("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
							"h-2.5 w-2.5": i === "dot",
							"w-1": i === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": i === "dashed",
							"my-0.5": g && i === "dashed"
						}),
						style: {
							"--color-bg": r,
							"--color-border": r
						}
					}), /* @__PURE__ */ S("div", {
						className: q("flex flex-1 justify-between leading-none", g ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ S("div", {
							className: "grid gap-1.5",
							children: [g ? h : null, /* @__PURE__ */ x("span", {
								className: "text-muted-foreground",
								children: n?.label ?? e.name
							})]
						}), e.value != null && /* @__PURE__ */ x("span", {
							className: "font-mono font-medium text-foreground tabular-nums",
							children: typeof e.value == "number" ? e.value.toLocaleString() : String(e.value)
						})]
					})] })
				}, t);
			})
		})]
	});
}
Ae.Legend;
function EN({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i }) {
	let { config: a } = xN();
	return n?.length ? /* @__PURE__ */ x("div", {
		className: q("flex items-center justify-center gap-4", r === "top" ? "pb-3" : "pt-3", e),
		children: n.filter((e) => e.type !== "none").map((e, n) => {
			let r = DN(a, e, `${i ?? e.dataKey ?? "value"}`);
			return /* @__PURE__ */ S("div", {
				className: q("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
				children: [r?.icon && !t ? /* @__PURE__ */ x(r.icon, {}) : /* @__PURE__ */ x("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: e.color }
				}), r?.label]
			}, n);
		})
	}) : null;
}
function DN(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
//#endregion
//#region src/components/common/AppBarChart.tsx
var ON = ({ data: e, series: t, xKey: n, title: r, description: i, height: a = 300, layout: o = "vertical", stacked: s = !1, tooltipAnimation: c = !0, downloadable: l = !1, downloadFileName: u = "bar-chart", className: d }) => {
	let f = h(null), p = Object.fromEntries(t.map((e, t) => [e.key, {
		label: e.label,
		color: e.color ?? `var(--chart-${t % 5 + 1})`
	}])), m = o === "horizontal";
	return /* @__PURE__ */ S("div", {
		ref: f,
		className: q("flex flex-col gap-1", d),
		children: [(r || l) && /* @__PURE__ */ S("div", {
			className: "flex items-center justify-between px-1",
			children: [/* @__PURE__ */ S("div", { children: [r && /* @__PURE__ */ x("p", {
				className: "text-sm font-semibold text-card-foreground",
				children: r
			}), i && /* @__PURE__ */ x("p", {
				className: "text-xs text-muted-foreground",
				children: i
			})] }), l && /* @__PURE__ */ x("button", {
				onClick: () => _N(f, u),
				className: "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
				title: "PNG 다운로드",
				children: /* @__PURE__ */ x(z, { className: "h-3.5 w-3.5" })
			})]
		}), /* @__PURE__ */ x(SN, {
			config: p,
			style: { height: a },
			children: /* @__PURE__ */ S(Pe, {
				data: e,
				layout: m ? "vertical" : "horizontal",
				margin: {
					top: 4,
					right: 16,
					bottom: 4,
					left: 0
				},
				children: [
					/* @__PURE__ */ x(Fe, {
						strokeDasharray: "3 3",
						className: "stroke-border",
						vertical: !m,
						horizontal: m
					}),
					m ? /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(Ge, {
						type: "number",
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1
					}), /* @__PURE__ */ x(Ke, {
						dataKey: n,
						type: "category",
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1,
						width: 64
					})] }) : /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x(Ge, {
						dataKey: n,
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1
					}), /* @__PURE__ */ x(Ke, {
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1,
						width: 32
					})] }),
					/* @__PURE__ */ x(wN, {
						content: /* @__PURE__ */ x(TN, {}),
						isAnimationActive: c
					}),
					/* @__PURE__ */ x(Re, { content: /* @__PURE__ */ x(EN, {}) }),
					t.map((e) => /* @__PURE__ */ x(Ne, {
						dataKey: e.key,
						fill: `var(--color-${e.key})`,
						stackId: s ? "stack" : void 0,
						radius: s ? [
							0,
							0,
							0,
							0
						] : [
							3,
							3,
							0,
							0
						]
					}, e.key))
				]
			})
		})]
	});
}, kN = ({ data: e, series: t, xKey: n, title: r, description: i, height: a = 300, tooltipAnimation: o = !0, downloadable: s = !1, downloadFileName: c = "line-chart", className: l }) => {
	let u = h(null), d = Object.fromEntries(t.map((e, t) => [e.key, {
		label: e.label,
		color: e.color ?? `var(--chart-${t % 5 + 1})`
	}]));
	return /* @__PURE__ */ S("div", {
		ref: u,
		className: q("flex flex-col gap-1", l),
		children: [(r || s) && /* @__PURE__ */ S("div", {
			className: "flex items-center justify-between px-1",
			children: [/* @__PURE__ */ S("div", { children: [r && /* @__PURE__ */ x("p", {
				className: "text-sm font-semibold text-card-foreground",
				children: r
			}), i && /* @__PURE__ */ x("p", {
				className: "text-xs text-muted-foreground",
				children: i
			})] }), s && /* @__PURE__ */ x("button", {
				onClick: () => _N(u, c),
				className: "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
				title: "PNG 다운로드",
				children: /* @__PURE__ */ x(z, { className: "h-3.5 w-3.5" })
			})]
		}), /* @__PURE__ */ x(SN, {
			config: d,
			style: { height: a },
			children: /* @__PURE__ */ S(Be, {
				data: e,
				margin: {
					top: 4,
					right: 16,
					bottom: 4,
					left: 0
				},
				children: [
					/* @__PURE__ */ x(Fe, {
						strokeDasharray: "3 3",
						className: "stroke-border"
					}),
					/* @__PURE__ */ x(Ge, {
						dataKey: n,
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1
					}),
					/* @__PURE__ */ x(Ke, {
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1,
						width: 32
					}),
					/* @__PURE__ */ x(wN, {
						content: /* @__PURE__ */ x(TN, {}),
						isAnimationActive: o
					}),
					/* @__PURE__ */ x(Re, { content: /* @__PURE__ */ x(EN, {}) }),
					t.map((e) => /* @__PURE__ */ x(ze, {
						type: "monotone",
						dataKey: e.key,
						stroke: `var(--color-${e.key})`,
						strokeWidth: 2,
						dot: e.dot ?? !1,
						activeDot: { r: 4 }
					}, e.key))
				]
			})
		})]
	});
}, AN = ({ data: e, series: t, xKey: n, title: r, description: i, height: a = 300, stacked: o = !1, downloadable: s = !1, downloadFileName: c = "area-chart", className: l }) => {
	let u = h(null), d = Object.fromEntries(t.map((e, t) => [e.key, {
		label: e.label,
		color: e.color ?? `var(--chart-${t % 5 + 1})`
	}]));
	return /* @__PURE__ */ S("div", {
		ref: u,
		className: q("flex flex-col gap-1", l),
		children: [(r || s) && /* @__PURE__ */ S("div", {
			className: "flex items-center justify-between px-1",
			children: [/* @__PURE__ */ S("div", { children: [r && /* @__PURE__ */ x("p", {
				className: "text-sm font-semibold text-card-foreground",
				children: r
			}), i && /* @__PURE__ */ x("p", {
				className: "text-xs text-muted-foreground",
				children: i
			})] }), s && /* @__PURE__ */ x("button", {
				onClick: () => _N(u, c),
				className: "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
				title: "PNG 다운로드",
				children: /* @__PURE__ */ x(z, { className: "h-3.5 w-3.5" })
			})]
		}), /* @__PURE__ */ x(SN, {
			config: d,
			style: { height: a },
			children: /* @__PURE__ */ S(Me, {
				data: e,
				margin: {
					top: 4,
					right: 16,
					bottom: 4,
					left: 0
				},
				children: [
					/* @__PURE__ */ x("defs", { children: t.map((e, t) => /* @__PURE__ */ S("linearGradient", {
						id: `grad-${e.key}`,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ x("stop", {
							offset: "5%",
							stopColor: e.color ?? `var(--chart-${t % 5 + 1})`,
							stopOpacity: .3
						}), /* @__PURE__ */ x("stop", {
							offset: "95%",
							stopColor: e.color ?? `var(--chart-${t % 5 + 1})`,
							stopOpacity: 0
						})]
					}, e.key)) }),
					/* @__PURE__ */ x(Fe, {
						strokeDasharray: "3 3",
						className: "stroke-border"
					}),
					/* @__PURE__ */ x(Ge, {
						dataKey: n,
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1
					}),
					/* @__PURE__ */ x(Ke, {
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1,
						width: 32
					}),
					/* @__PURE__ */ x(wN, { content: /* @__PURE__ */ x(TN, {}) }),
					/* @__PURE__ */ x(Re, { content: /* @__PURE__ */ x(EN, {}) }),
					t.map((e) => /* @__PURE__ */ x(je, {
						type: "monotone",
						dataKey: e.key,
						stroke: `var(--color-${e.key})`,
						strokeWidth: 2,
						fill: `url(#grad-${e.key})`,
						stackId: o ? "stack" : void 0
					}, e.key))
				]
			})
		})]
	});
}, jN = Math.PI / 180, MN = (e) => {
	let { cx: t, cy: n, midAngle: r, innerRadius: i, outerRadius: a, percent: o } = e;
	if (t == null || n == null || r == null || i == null || a == null || o == null) return null;
	let s = Number(i), c = s + (Number(a) - s) * .5, l = Number(t) + c * Math.cos(-Number(r) * jN), u = Number(n) + c * Math.sin(-Number(r) * jN);
	return Number(o) < .05 ? null : /* @__PURE__ */ x("text", {
		x: l,
		y: u,
		fill: "white",
		textAnchor: "middle",
		dominantBaseline: "central",
		fontSize: 11,
		children: `${(Number(o) * 100).toFixed(0)}%`
	});
}, NN = ({ data: e, donut: t = !1, title: n, description: r, height: i = 300, showLabel: a = !1, downloadable: o = !1, downloadFileName: s = "pie-chart", className: c }) => {
	let l = h(null), u = Object.fromEntries(e.map((e, t) => [e.name, {
		label: e.name,
		color: e.color ?? `var(--chart-${t % 5 + 1})`
	}]));
	return /* @__PURE__ */ S("div", {
		ref: l,
		className: q("flex flex-col gap-1", c),
		children: [(n || o) && /* @__PURE__ */ S("div", {
			className: "flex items-center justify-between px-1",
			children: [/* @__PURE__ */ S("div", { children: [n && /* @__PURE__ */ x("p", {
				className: "text-sm font-semibold text-card-foreground",
				children: n
			}), r && /* @__PURE__ */ x("p", {
				className: "text-xs text-muted-foreground",
				children: r
			})] }), o && /* @__PURE__ */ x("button", {
				onClick: () => _N(l, s),
				className: "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
				title: "PNG 다운로드",
				children: /* @__PURE__ */ x(z, { className: "h-3.5 w-3.5" })
			})]
		}), /* @__PURE__ */ x(SN, {
			config: u,
			style: { height: i },
			children: /* @__PURE__ */ S(He, { children: [
				/* @__PURE__ */ x(Ve, {
					data: e,
					cx: "50%",
					cy: "50%",
					outerRadius: "70%",
					innerRadius: t ? "40%" : 0,
					dataKey: "value",
					nameKey: "name",
					labelLine: !1,
					label: a ? MN : void 0,
					children: e.map((e, t) => /* @__PURE__ */ x(Ie, { fill: e.color ?? `var(--chart-${t % 5 + 1})` }, e.name))
				}),
				/* @__PURE__ */ x(wN, { content: /* @__PURE__ */ x(TN, { nameKey: "name" }) }),
				/* @__PURE__ */ x(Re, { content: /* @__PURE__ */ x(EN, { nameKey: "name" }) })
			] })
		})]
	});
}, PN = ({ data: e, series: t, xKey: n, title: r, description: i, height: a = 300, dualAxis: o = !1, downloadable: s = !1, downloadFileName: c = "composed-chart", className: l }) => {
	let u = h(null), d = Object.fromEntries(t.map((e, t) => [e.key, {
		label: e.label,
		color: e.color ?? `var(--chart-${t % 5 + 1})`
	}]));
	return /* @__PURE__ */ S("div", {
		ref: u,
		className: q("flex flex-col gap-1", l),
		children: [(r || s) && /* @__PURE__ */ S("div", {
			className: "flex items-center justify-between px-1",
			children: [/* @__PURE__ */ S("div", { children: [r && /* @__PURE__ */ x("p", {
				className: "text-sm font-semibold text-card-foreground",
				children: r
			}), i && /* @__PURE__ */ x("p", {
				className: "text-xs text-muted-foreground",
				children: i
			})] }), s && /* @__PURE__ */ x("button", {
				onClick: () => _N(u, c),
				className: "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
				title: "PNG 다운로드",
				children: /* @__PURE__ */ x(z, { className: "h-3.5 w-3.5" })
			})]
		}), /* @__PURE__ */ x(SN, {
			config: d,
			style: { height: a },
			children: /* @__PURE__ */ S(Le, {
				data: e,
				margin: {
					top: 4,
					right: o ? 32 : 16,
					bottom: 4,
					left: 0
				},
				children: [
					/* @__PURE__ */ x(Fe, {
						strokeDasharray: "3 3",
						className: "stroke-border"
					}),
					/* @__PURE__ */ x(Ge, {
						dataKey: n,
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1
					}),
					/* @__PURE__ */ x(Ke, {
						yAxisId: "left",
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1,
						width: 32
					}),
					o && /* @__PURE__ */ x(Ke, {
						yAxisId: "right",
						orientation: "right",
						tick: { fontSize: 11 },
						tickLine: !1,
						axisLine: !1,
						width: 32
					}),
					/* @__PURE__ */ x(wN, { content: /* @__PURE__ */ x(TN, {}) }),
					/* @__PURE__ */ x(Re, { content: /* @__PURE__ */ x(EN, {}) }),
					t.map((e) => {
						let t = o ? e.yAxisId ?? "left" : "left", n = `var(--color-${e.key})`;
						return e.type === "bar" ? /* @__PURE__ */ x(Ne, {
							dataKey: e.key,
							fill: n,
							yAxisId: t,
							radius: [
								3,
								3,
								0,
								0
							]
						}, e.key) : e.type === "area" ? /* @__PURE__ */ x(je, {
							type: "monotone",
							dataKey: e.key,
							stroke: n,
							fill: n,
							fillOpacity: .15,
							yAxisId: t,
							strokeWidth: 2
						}, e.key) : /* @__PURE__ */ x(ze, {
							type: "monotone",
							dataKey: e.key,
							stroke: n,
							yAxisId: t,
							strokeWidth: 2,
							dot: !1
						}, e.key);
					})
				]
			})
		})]
	});
}, FN = ({ data: e, title: t, description: n, height: r = 300, downloadable: i = !1, downloadFileName: a = "radial-chart", className: o }) => {
	let s = h(null), c = e.map((e, t) => ({
		...e,
		name: e.label,
		fill: e.fill ?? `var(--chart-${t % 5 + 1})`
	})), l = Object.fromEntries(e.map((e, t) => [e.label, {
		label: e.label,
		color: e.fill ?? `var(--chart-${t % 5 + 1})`
	}]));
	return /* @__PURE__ */ S("div", {
		ref: s,
		className: q("flex flex-col gap-1", o),
		children: [(t || i) && /* @__PURE__ */ S("div", {
			className: "flex items-center justify-between px-1",
			children: [/* @__PURE__ */ S("div", { children: [t && /* @__PURE__ */ x("p", {
				className: "text-sm font-semibold text-card-foreground",
				children: t
			}), n && /* @__PURE__ */ x("p", {
				className: "text-xs text-muted-foreground",
				children: n
			})] }), i && /* @__PURE__ */ x("button", {
				onClick: () => _N(s, a),
				className: "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
				title: "PNG 다운로드",
				children: /* @__PURE__ */ x(z, { className: "h-3.5 w-3.5" })
			})]
		}), /* @__PURE__ */ x(SN, {
			config: l,
			style: { height: r },
			children: /* @__PURE__ */ S(We, {
				cx: "50%",
				cy: "50%",
				innerRadius: "20%",
				outerRadius: "80%",
				data: c,
				startAngle: 180,
				endAngle: 0,
				children: [
					/* @__PURE__ */ x(Ue, {
						dataKey: "value",
						background: { fill: "var(--muted)" },
						cornerRadius: 4,
						label: {
							position: "insideStart",
							fill: "white",
							fontSize: 11
						}
					}),
					/* @__PURE__ */ x(wN, {
						content: /* @__PURE__ */ x(TN, { nameKey: "label" }),
						cursor: !1
					}),
					/* @__PURE__ */ x(Re, {
						iconSize: 10,
						layout: "vertical",
						verticalAlign: "middle",
						align: "right",
						formatter: (e) => /* @__PURE__ */ x("span", {
							className: "text-xs text-muted-foreground",
							children: e
						})
					})
				]
			})
		})]
	});
}, IN = {
	default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
	secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",
	outline: "border-2 border-border bg-background text-foreground hover:bg-accent active:bg-accent/80",
	ghost: "text-foreground hover:bg-accent active:bg-accent/80",
	destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
	success: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800"
}, LN = s(({ variant: e = "default", loading: t, prefixIcon: n, suffixIcon: r, fullWidth: i, children: a, disabled: o, className: s, ...c }, l) => /* @__PURE__ */ S("button", {
	ref: l,
	disabled: o || t,
	className: q("inline-flex items-center justify-center gap-3 rounded-lg px-6 py-4 text-lg font-semibold transition-colors", "min-h-[56px] min-w-[120px]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", "disabled:pointer-events-none disabled:opacity-40", IN[e], i && "w-full", s),
	...c,
	children: [
		t ? /* @__PURE__ */ x(Ty, { size: "sm" }) : n && /* @__PURE__ */ x(n, { className: "h-6 w-6 shrink-0" }),
		a,
		r && !t && /* @__PURE__ */ x(r, { className: "h-6 w-6 shrink-0" })
	]
}));
LN.displayName = "PopButton";
//#endregion
//#region src/components/pop/PopKeypad.tsx
var RN = ({ value: e, onChange: t, onConfirm: n, label: r, unit: i, maxLength: a = 10, allowDecimal: o = !1, className: s }) => {
	let [c, l] = g(""), d = e ?? c, f = u((n) => {
		e === void 0 && l(n), t?.(n);
	}, [e, t]), p = (e) => {
		if (e === "backspace") f(d.slice(0, -1));
		else if (e === "clear") f("");
		else if (e === ".") {
			if (!o || d.includes(".")) return;
			f(d + ".");
		} else {
			if (d.length >= a) return;
			f(d + e);
		}
	};
	return /* @__PURE__ */ S("div", {
		className: q("flex flex-col gap-3", s),
		children: [
			r && /* @__PURE__ */ x("label", {
				className: "text-base font-semibold text-foreground",
				children: r
			}),
			/* @__PURE__ */ S("div", {
				className: "flex min-h-[64px] items-center justify-end gap-2 rounded-lg border-2 border-border bg-background px-5 py-3",
				children: [/* @__PURE__ */ x("span", {
					className: "text-3xl font-bold tabular-nums text-foreground",
					children: d || /* @__PURE__ */ x("span", {
						className: "text-muted-foreground/40",
						children: "0"
					})
				}), i && /* @__PURE__ */ x("span", {
					className: "text-lg text-muted-foreground",
					children: i
				})]
			}),
			/* @__PURE__ */ S("div", {
				className: "grid grid-cols-3 gap-2",
				children: [
					[
						"7",
						"8",
						"9",
						"4",
						"5",
						"6",
						"1",
						"2",
						"3"
					].map((e) => /* @__PURE__ */ x("button", {
						type: "button",
						onClick: () => p(e),
						className: "flex h-16 items-center justify-center rounded-lg border border-border bg-card text-2xl font-semibold text-card-foreground transition-colors hover:bg-accent active:bg-accent/80",
						children: e
					}, e)),
					/* @__PURE__ */ x("button", {
						type: "button",
						onClick: () => p(o ? "." : "clear"),
						className: "flex h-16 items-center justify-center rounded-lg border border-border bg-card text-2xl font-semibold text-muted-foreground transition-colors hover:bg-accent active:bg-accent/80",
						children: o ? "." : "C"
					}),
					/* @__PURE__ */ x("button", {
						type: "button",
						onClick: () => p("0"),
						className: "flex h-16 items-center justify-center rounded-lg border border-border bg-card text-2xl font-semibold text-card-foreground transition-colors hover:bg-accent active:bg-accent/80",
						children: "0"
					}),
					/* @__PURE__ */ x("button", {
						type: "button",
						onClick: () => p("backspace"),
						className: "flex h-16 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-accent active:bg-accent/80",
						children: /* @__PURE__ */ x(R, { className: "h-6 w-6" })
					})
				]
			}),
			o && /* @__PURE__ */ x("button", {
				type: "button",
				onClick: () => p("clear"),
				className: "flex h-12 items-center justify-center rounded-lg border border-border bg-muted text-base font-medium text-muted-foreground transition-colors hover:bg-accent active:bg-accent/80",
				children: "전체 지우기"
			}),
			n && /* @__PURE__ */ S("button", {
				type: "button",
				onClick: () => n(d),
				className: "flex h-16 items-center justify-center gap-2 rounded-lg bg-primary text-xl font-bold text-primary-foreground transition-colors hover:bg-primary/90 active:bg-primary/80",
				children: [/* @__PURE__ */ x(ne, { className: "h-6 w-6" }), "확인"]
			})
		]
	});
}, zN = ({ onClose: e, onConfirm: t, title: n = "수량 입력", unit: r, initialValue: i = "", maxLength: a, allowDecimal: o }) => {
	let [s, c] = g(i);
	return /* @__PURE__ */ S(b, { children: [
		/* @__PURE__ */ x(bb, { children: /* @__PURE__ */ x(Sb, {
			className: "text-xl font-bold",
			children: n
		}) }),
		/* @__PURE__ */ x(RN, {
			value: s,
			onChange: c,
			unit: r,
			maxLength: a,
			allowDecimal: o
		}),
		/* @__PURE__ */ S("div", {
			className: "mt-1 flex gap-3",
			children: [/* @__PURE__ */ x(LN, {
				variant: "outline",
				fullWidth: !0,
				onClick: e,
				children: "취소"
			}), /* @__PURE__ */ x(LN, {
				fullWidth: !0,
				onClick: () => {
					t(s), e();
				},
				children: "확인"
			})]
		})
	] });
}, BN = ({ open: e, onClose: t, onConfirm: n, title: r, unit: i, initialValue: a, maxLength: o, allowDecimal: s }) => /* @__PURE__ */ x(gb, {
	open: e,
	onOpenChange: (e) => !e && t(),
	children: /* @__PURE__ */ x(yb, {
		className: "max-w-sm p-5",
		children: e && /* @__PURE__ */ x(zN, {
			onClose: t,
			onConfirm: n,
			title: r,
			unit: i,
			initialValue: a,
			maxLength: o,
			allowDecimal: s
		}, String(e) + a)
	})
}), VN = {
	sm: "py-2 px-3 text-sm min-h-[40px]",
	md: "py-3 px-4 text-base min-h-[48px]",
	lg: "py-4 px-4 text-lg min-h-[56px]"
}, HN = s(({ label: e, labelAlign: t = "top", labelWidth: n, size: r = "md", error: i, prefixIcon: a, suffixIcon: o, onSuffixClick: s, keypad: c, className: l, value: u, onChange: d, readOnly: f, ...p }, m) => {
	let [h, _] = g(!1), v = !!c, y = typeof c == "object" ? c : {}, b = v ? C : o, w = v ? () => _(!0) : s, T = () => {
		v && _(!0);
	}, E = (e) => {
		if (d) {
			let t = new Event("input", { bubbles: !0 }), n = { value: e };
			d({
				...t,
				target: n,
				currentTarget: n
			});
		}
	};
	return /* @__PURE__ */ S("div", {
		className: t === "left" && e ? "flex items-start gap-3" : "flex flex-col gap-1.5",
		children: [
			e && /* @__PURE__ */ x("label", {
				className: t === "left" ? "flex-shrink-0 pt-3 text-sm font-semibold text-foreground" : "text-sm font-semibold text-foreground",
				style: t === "left" && n ? { width: `${n}px` } : void 0,
				children: e
			}),
			/* @__PURE__ */ S("div", {
				className: "flex-1 flex flex-col gap-1.5",
				children: [/* @__PURE__ */ S("div", {
					className: "relative",
					children: [
						a && /* @__PURE__ */ x("span", {
							className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground",
							children: /* @__PURE__ */ x(a, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ x("input", {
							ref: m,
							value: u,
							onChange: v ? void 0 : d,
							readOnly: v || f,
							onClick: T,
							className: q("flex w-full rounded-lg border-2 border-border bg-background text-foreground transition-colors", VN[r], "placeholder:text-muted-foreground/60", "focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring", "disabled:cursor-not-allowed disabled:opacity-40", a && "pl-12", b && "pr-12", v && "cursor-pointer", i && "border-destructive focus:ring-destructive", l),
							...p
						}),
						b && /* @__PURE__ */ x("button", {
							type: "button",
							onClick: w,
							className: "absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ x(b, { className: "h-5 w-5" })
						})
					]
				}), i && /* @__PURE__ */ x("span", {
					className: "text-sm text-destructive",
					children: i
				})]
			}),
			v && /* @__PURE__ */ x(BN, {
				open: h,
				onClose: () => _(!1),
				onConfirm: E,
				title: y.title ?? e ?? "숫자 입력",
				unit: y.unit,
				initialValue: String(u ?? ""),
				maxLength: y.maxLength,
				allowDecimal: y.allowDecimal
			})
		]
	});
});
HN.displayName = "PopInput";
//#endregion
//#region src/components/pop/PopSelect.tsx
var UN = {
	sm: "py-2 px-3 text-sm min-h-[40px]",
	md: "py-3 px-4 text-base min-h-[48px]",
	lg: "py-4 px-4 text-lg min-h-[56px]"
}, WN = ({ options: e, value: t, onChange: n, label: r, labelAlign: i = "top", labelWidth: a, size: o = "md", placeholder: s = "선택하세요", error: c, disabled: l = !1, searchable: u = !0, searchPlaceholder: d = "검색...", className: f }) => {
	let [p, h] = g(!1), [_, v] = g(""), y = e.find((e) => e.value === t)?.label, b = m(() => {
		if (!_.trim()) return e;
		let t = _.trim().toLowerCase();
		return e.filter((e) => e.label.toLowerCase().includes(t) || e.value.toLowerCase().includes(t) || e.description?.toLowerCase().includes(t));
	}, [e, _]), C = (e) => {
		e.disabled || (n?.(e.value), h(!1), v(""));
	};
	return /* @__PURE__ */ S("div", {
		className: i === "left" && r ? "flex items-start gap-3" : "flex flex-col gap-1.5",
		children: [
			r && /* @__PURE__ */ x("label", {
				className: i === "left" ? "flex-shrink-0 pt-3 text-sm font-semibold text-foreground" : "text-sm font-semibold text-foreground",
				style: i === "left" && a ? { width: `${a}px` } : void 0,
				children: r
			}),
			/* @__PURE__ */ S("div", {
				className: "flex-1 flex flex-col gap-1.5",
				children: [/* @__PURE__ */ S("button", {
					type: "button",
					onClick: () => {
						l || h(!0);
					},
					disabled: l,
					className: q("flex w-full items-center justify-between rounded-lg border-2 border-border bg-background text-left transition-colors", UN[o], "focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring", "disabled:cursor-not-allowed disabled:opacity-40", c && "border-destructive focus:ring-destructive", f),
					children: [/* @__PURE__ */ x("span", {
						className: q(!y && "text-muted-foreground/60"),
						children: y ?? s
					}), /* @__PURE__ */ x(D, { className: "h-5 w-5 shrink-0 text-muted-foreground" })]
				}), c && /* @__PURE__ */ x("span", {
					className: "text-sm text-destructive",
					children: c
				})]
			}),
			/* @__PURE__ */ x(IC, {
				open: p,
				onOpenChange: (e) => {
					h(e), e || v("");
				},
				children: /* @__PURE__ */ S(zC, {
					side: "bottom",
					showCloseButton: !1,
					className: "max-h-[70vh] rounded-t-2xl",
					children: [
						/* @__PURE__ */ S(BC, {
							className: "gap-3 px-5 pb-0 pt-5",
							children: [/* @__PURE__ */ x("div", { className: "mx-auto h-1.5 w-12 rounded-full bg-muted-foreground/30" }), /* @__PURE__ */ x(HC, {
								className: "text-xl font-bold",
								children: r ?? s
							})]
						}),
						u && e.length > 5 && /* @__PURE__ */ S("div", {
							className: "relative mx-5 mt-3",
							children: [
								/* @__PURE__ */ x(ye, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" }),
								/* @__PURE__ */ x("input", {
									type: "text",
									value: _,
									onChange: (e) => v(e.target.value),
									placeholder: d,
									className: "w-full rounded-lg border-2 border-border bg-background py-3 pl-12 pr-10 text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring",
									autoFocus: !0
								}),
								_ && /* @__PURE__ */ x("button", {
									type: "button",
									onClick: () => v(""),
									className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-accent",
									children: /* @__PURE__ */ x(Ee, { className: "h-5 w-5" })
								})
							]
						}),
						/* @__PURE__ */ x("div", {
							className: "flex-1 overflow-y-auto px-5 py-3",
							children: b.length === 0 ? /* @__PURE__ */ x("div", {
								className: "py-8 text-center text-lg text-muted-foreground",
								children: "검색 결과가 없습니다"
							}) : /* @__PURE__ */ x("div", {
								className: "flex flex-col gap-1.5",
								children: b.map((e) => {
									let n = e.value === t;
									return /* @__PURE__ */ S("button", {
										type: "button",
										onClick: () => C(e),
										disabled: e.disabled,
										className: q("flex min-h-[56px] items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors", n ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent active:bg-accent/80", e.disabled && "cursor-not-allowed opacity-40"),
										children: [/* @__PURE__ */ S("div", {
											className: "flex-1",
											children: [/* @__PURE__ */ x("div", {
												className: q("text-lg font-medium", n && "font-semibold"),
												children: e.label
											}), e.description && /* @__PURE__ */ x("div", {
												className: "mt-0.5 text-sm text-muted-foreground",
												children: e.description
											})]
										}), n && /* @__PURE__ */ x(T, { className: "h-6 w-6 shrink-0 text-primary" })]
									}, e.value);
								})
							})
						})
					]
				})
			})
		]
	});
}, GN = {
	sm: "py-2 px-3 text-sm min-h-[40px]",
	md: "py-3 px-4 text-base min-h-[48px]",
	lg: "py-4 px-4 text-lg min-h-[56px]"
}, KN = ({ options: e, value: t = [], onChange: n, label: r, labelAlign: i = "top", labelWidth: a, size: o = "md", placeholder: s = "선택하세요", error: c, disabled: l = !1, searchable: u = !0, searchPlaceholder: d = "검색...", maxSelection: f, className: p }) => {
	let [h, _] = g(!1), [v, y] = g(""), b = e.filter((e) => t?.includes(e.value)).map((e) => e.label), C = m(() => {
		if (!v.trim()) return e;
		let t = v.trim().toLowerCase();
		return e.filter((e) => e.label.toLowerCase().includes(t) || e.value.toLowerCase().includes(t) || e.description?.toLowerCase().includes(t));
	}, [e, v]), w = (e) => {
		if (e.disabled) return;
		let r = t?.includes(e.value) ? t.filter((t) => t !== e.value) : f && t && t.length >= f ? t : [...t || [], e.value];
		n?.(r);
	}, E = (e) => {
		n?.(t?.filter((t) => t !== e) || []);
	};
	return /* @__PURE__ */ S("div", {
		className: i === "left" && r ? "flex items-start gap-3" : "flex flex-col gap-1.5",
		children: [
			r && /* @__PURE__ */ x("label", {
				className: i === "left" ? "flex-shrink-0 pt-3 text-sm font-semibold text-foreground" : "text-sm font-semibold text-foreground",
				style: i === "left" && a ? { width: `${a}px` } : void 0,
				children: r
			}),
			/* @__PURE__ */ S("div", {
				className: "flex-1 flex flex-col gap-1.5",
				children: [/* @__PURE__ */ S("button", {
					type: "button",
					onClick: () => {
						l || _(!0);
					},
					disabled: l,
					className: q("flex w-full items-center justify-between rounded-lg border-2 border-border bg-background text-left transition-colors", GN[o], "focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring", "disabled:cursor-not-allowed disabled:opacity-40", c && "border-destructive focus:ring-destructive", p),
					children: [/* @__PURE__ */ x("div", {
						className: "flex-1",
						children: b.length === 0 ? /* @__PURE__ */ x("span", {
							className: "text-muted-foreground/60",
							children: s
						}) : /* @__PURE__ */ x("div", {
							className: "flex flex-wrap gap-1.5",
							children: b.map((e, n) => /* @__PURE__ */ S("div", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary",
								children: [e, /* @__PURE__ */ x("button", {
									type: "button",
									onClick: (n) => {
										n.stopPropagation(), E(t?.[b.indexOf(e)] || "");
									},
									className: "text-primary/60 hover:text-primary",
									children: /* @__PURE__ */ x(Ee, { className: "h-3 w-3" })
								})]
							}, n))
						})
					}), /* @__PURE__ */ x(D, { className: "h-5 w-5 shrink-0 text-muted-foreground" })]
				}), c && /* @__PURE__ */ x("span", {
					className: "text-sm text-destructive",
					children: c
				})]
			}),
			/* @__PURE__ */ x(IC, {
				open: h,
				onOpenChange: (e) => {
					_(e), e || y("");
				},
				children: /* @__PURE__ */ S(zC, {
					side: "bottom",
					showCloseButton: !1,
					className: "max-h-[70vh] rounded-t-2xl",
					children: [
						/* @__PURE__ */ S(BC, {
							className: "gap-3 px-5 pb-0 pt-5",
							children: [
								/* @__PURE__ */ x("div", { className: "mx-auto h-1.5 w-12 rounded-full bg-muted-foreground/30" }),
								/* @__PURE__ */ x(HC, {
									className: "text-xl font-bold",
									children: r ?? s
								}),
								f && /* @__PURE__ */ S("p", {
									className: "text-xs text-muted-foreground",
									children: [
										"최대 ",
										f,
										"개까지 선택 가능 (",
										t?.length || 0,
										"/",
										f,
										")"
									]
								})
							]
						}),
						u && e.length > 5 && /* @__PURE__ */ S("div", {
							className: "relative mx-5 mt-3",
							children: [
								/* @__PURE__ */ x(ye, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" }),
								/* @__PURE__ */ x("input", {
									type: "text",
									value: v,
									onChange: (e) => y(e.target.value),
									placeholder: d,
									className: "w-full rounded-lg border-2 border-border bg-background py-3 pl-12 pr-10 text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring",
									autoFocus: !0
								}),
								v && /* @__PURE__ */ x("button", {
									type: "button",
									onClick: () => y(""),
									className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-accent",
									children: /* @__PURE__ */ x(Ee, { className: "h-5 w-5" })
								})
							]
						}),
						/* @__PURE__ */ x("div", {
							className: "flex-1 overflow-y-auto px-5 py-3",
							children: C.length === 0 ? /* @__PURE__ */ x("div", {
								className: "py-8 text-center text-lg text-muted-foreground",
								children: "검색 결과가 없습니다"
							}) : /* @__PURE__ */ x("div", {
								className: "flex flex-col gap-1.5",
								children: C.map((e) => {
									let n = t?.includes(e.value), r = f && t && t.length >= f && !n;
									return /* @__PURE__ */ S("button", {
										type: "button",
										onClick: () => w(e),
										disabled: !!(e.disabled || r),
										className: q("flex min-h-[56px] items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors", n ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent active:bg-accent/80", (e.disabled || r) && "cursor-not-allowed opacity-40"),
										children: [/* @__PURE__ */ S("div", {
											className: "flex-1",
											children: [/* @__PURE__ */ x("div", {
												className: q("text-lg font-medium", n && "font-semibold"),
												children: e.label
											}), e.description && /* @__PURE__ */ x("div", {
												className: "mt-0.5 text-sm text-muted-foreground",
												children: e.description
											})]
										}), n && /* @__PURE__ */ x(T, { className: "h-6 w-6 shrink-0 text-primary" })]
									}, e.value);
								})
							})
						}),
						/* @__PURE__ */ x("div", {
							className: "border-t border-border px-5 py-3",
							children: /* @__PURE__ */ x("button", {
								type: "button",
								onClick: () => _(!1),
								className: "w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
								children: "완료"
							})
						})
					]
				})
			})
		]
	});
}, qN = {
	sm: "py-2 px-3 text-sm min-h-[40px]",
	md: "py-3 px-4 text-base min-h-[48px]",
	lg: "py-4 px-4 text-lg min-h-[56px]"
}, JN = (e, t) => new Date(e, t + 1, 0).getDate(), YN = (e, t) => new Date(e, t, 1).getDay(), XN = (e) => `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`, ZN = (e) => {
	let [t, n, r] = e.split("-").map(Number);
	return new Date(t, n - 1, r);
}, QN = ({ value: e, onChange: t, label: n, labelAlign: r = "top", labelWidth: i, size: a = "md", placeholder: o = "날짜 선택", error: s, hint: c, disabled: l, minDate: u, maxDate: d, className: f }) => {
	let [p, h] = g(!1), _ = /* @__PURE__ */ new Date(), [v, y] = g(e ? ZN(e).getFullYear() : _.getFullYear()), [b, C] = g(e ? ZN(e).getMonth() : _.getMonth()), w = m(() => {
		if (!e) return o;
		let t = ZN(e);
		return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
	}, [e, o]), T = m(() => {
		let e = JN(v, b), t = YN(v, b), n = [], r = JN(v, b - 1);
		for (let e = t - 1; e >= 0; e--) n.push({
			day: r - e,
			isCurrentMonth: !1
		});
		for (let t = 1; t <= e; t++) n.push({
			day: t,
			isCurrentMonth: !0
		});
		let i = 42 - n.length;
		for (let e = 1; e <= i; e++) n.push({
			day: e,
			isCurrentMonth: !1
		});
		return n;
	}, [v, b]), E = (e, t) => {
		if (!t) return !0;
		let n = v, r = b;
		e < 15 && b === 0 && (n = v - 1, r = 11);
		let i = XN(new Date(n, r, e));
		return !!(u && i < u || d && i > d);
	}, D = (e, n) => {
		if (!n || E(e, n)) return;
		let r = v, i = b;
		e < 15 && b === 0 ? (r = v - 1, i = 11) : e > 20 && b === 11 && (r = v + 1, i = 0);
		let a = XN(new Date(r, i, e));
		t?.(a), h(!1);
	};
	return /* @__PURE__ */ S("div", {
		className: r === "left" && n ? "flex items-start gap-3" : "flex flex-col gap-1.5",
		children: [n && /* @__PURE__ */ x("label", {
			className: r === "left" ? "flex-shrink-0 pt-3 text-sm font-semibold text-foreground" : "text-sm font-semibold text-foreground",
			style: r === "left" && i ? { width: `${i}px` } : void 0,
			children: n
		}), /* @__PURE__ */ S("div", {
			className: "flex-1 flex flex-col gap-1.5",
			children: [
				/* @__PURE__ */ x("button", {
					type: "button",
					onClick: () => !l && h(!0),
					disabled: l,
					className: q("flex w-full items-center justify-between rounded-lg border-2 border-border bg-background text-left transition-colors", qN[a], "focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring", "disabled:cursor-not-allowed disabled:opacity-40", s && "border-destructive focus:ring-destructive", f),
					children: /* @__PURE__ */ x("span", {
						className: q(!e && "text-muted-foreground/60"),
						children: w
					})
				}),
				s && /* @__PURE__ */ x("span", {
					className: "text-sm text-destructive",
					children: s
				}),
				c && !s && /* @__PURE__ */ x("span", {
					className: "text-sm text-muted-foreground",
					children: c
				}),
				/* @__PURE__ */ x(IC, {
					open: p,
					onOpenChange: h,
					children: /* @__PURE__ */ S(zC, {
						side: "bottom",
						showCloseButton: !1,
						className: "max-h-[70vh] rounded-t-2xl",
						children: [/* @__PURE__ */ S(BC, {
							className: "gap-3 px-5 pb-0 pt-5",
							children: [/* @__PURE__ */ x("div", { className: "mx-auto h-1.5 w-12 rounded-full bg-muted-foreground/30" }), /* @__PURE__ */ x(HC, {
								className: "text-xl font-bold",
								children: n ?? "날짜 선택"
							})]
						}), /* @__PURE__ */ S("div", {
							className: "mt-4 px-4",
							children: [
								/* @__PURE__ */ S("div", {
									className: "mb-4 flex items-center justify-between",
									children: [
										/* @__PURE__ */ x("button", {
											type: "button",
											onClick: () => {
												b === 0 ? (y(v - 1), C(11)) : C(b - 1);
											},
											className: "rounded-lg p-2 hover:bg-accent",
											children: /* @__PURE__ */ x(k, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ S("div", {
											className: "text-lg font-semibold",
											children: [
												v,
												"년 ",
												String(b + 1).padStart(2, "0"),
												"월"
											]
										}),
										/* @__PURE__ */ x("button", {
											type: "button",
											onClick: () => {
												b === 11 ? (y(v + 1), C(0)) : C(b + 1);
											},
											className: "rounded-lg p-2 hover:bg-accent",
											children: /* @__PURE__ */ x(j, { className: "h-5 w-5" })
										})
									]
								}),
								/* @__PURE__ */ S("div", {
									className: "mb-1 grid grid-cols-7 gap-1 text-center text-sm font-semibold text-muted-foreground",
									children: [
										/* @__PURE__ */ x("div", { children: "일" }),
										/* @__PURE__ */ x("div", { children: "월" }),
										/* @__PURE__ */ x("div", { children: "화" }),
										/* @__PURE__ */ x("div", { children: "수" }),
										/* @__PURE__ */ x("div", { children: "목" }),
										/* @__PURE__ */ x("div", { children: "금" }),
										/* @__PURE__ */ x("div", { children: "토" })
									]
								}),
								/* @__PURE__ */ x("div", {
									className: "grid grid-cols-7 gap-1",
									children: T.map((t, n) => {
										let r = E(t.day, t.isCurrentMonth), i = e && ZN(e).getDate() === t.day && t.isCurrentMonth && v === ZN(e).getFullYear() && b === ZN(e).getMonth();
										return /* @__PURE__ */ x("button", {
											type: "button",
											onClick: () => D(t.day, t.isCurrentMonth),
											disabled: r,
											className: q("h-10 w-full rounded-lg text-sm font-medium transition-colors sm:text-base", t.isCurrentMonth ? i ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent active:bg-accent/80" : "text-muted-foreground/40", r && "cursor-not-allowed opacity-30"),
											children: t.day
										}, n);
									})
								})
							]
						})]
					})
				})
			]
		})]
	});
}, $N = {
	active: "bg-green-100 text-green-800 border-green-300",
	inactive: "bg-gray-100 text-gray-600 border-gray-300",
	warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
	error: "bg-red-100 text-red-800 border-red-300",
	info: "bg-blue-100 text-blue-800 border-blue-300",
	success: "bg-emerald-100 text-emerald-800 border-emerald-300"
}, eP = {
	active: "bg-green-500",
	inactive: "bg-gray-400",
	warning: "bg-yellow-500",
	error: "bg-red-500",
	info: "bg-blue-500",
	success: "bg-emerald-500"
}, tP = ({ children: e, status: t = "info", pulse: n, className: r }) => /* @__PURE__ */ S("span", {
	className: q("inline-flex items-center gap-2 rounded-lg border-2 px-4 py-2 text-base font-semibold", $N[t], r),
	children: [n && /* @__PURE__ */ S("span", {
		className: "relative flex h-3 w-3",
		children: [/* @__PURE__ */ x("span", { className: q("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", eP[t]) }), /* @__PURE__ */ x("span", { className: q("relative inline-flex h-3 w-3 rounded-full", eP[t]) })]
	}), e]
}), nP = ({ title: e, description: t, children: n, footer: r, highlight: i, className: a }) => /* @__PURE__ */ S("div", {
	className: q("rounded-xl border-2 bg-card transition-colors", i ? "border-primary shadow-lg" : "border-border", a),
	children: [
		(e || t) && /* @__PURE__ */ S("div", {
			className: "border-b border-border px-5 py-4",
			children: [e && /* @__PURE__ */ x("h3", {
				className: "text-xl font-bold text-card-foreground",
				children: e
			}), t && /* @__PURE__ */ x("p", {
				className: "mt-1 text-base text-muted-foreground",
				children: t
			})]
		}),
		/* @__PURE__ */ x("div", {
			className: q("px-5 py-4", !e && !t && "pt-5"),
			children: n
		}),
		r && /* @__PURE__ */ x("div", {
			className: "border-t border-border px-5 py-4",
			children: r
		})
	]
}), rP = {
	md: "max-w-lg",
	lg: "max-w-2xl",
	xl: "max-w-4xl"
}, iP = ({ open: e, onClose: t, title: n, description: r, children: i, footer: a, onConfirm: o, confirmLabel: s = "확인", cancelLabel: c = "취소", confirmLoading: l, confirmVariant: u = "default", size: d = "lg", className: f }) => {
	let p = o && !a;
	return /* @__PURE__ */ x(gb, {
		open: e,
		onOpenChange: (e) => !e && t(),
		children: /* @__PURE__ */ S(yb, {
			className: q(rP[d], "p-6", f),
			children: [
				(n || r) && /* @__PURE__ */ S(bb, { children: [n && /* @__PURE__ */ x(Sb, {
					className: "text-2xl font-bold",
					children: n
				}), r && /* @__PURE__ */ x(Cb, {
					className: "text-base",
					children: r
				})] }),
				i && /* @__PURE__ */ x("div", {
					className: "py-2 text-lg",
					children: i
				}),
				p && /* @__PURE__ */ S(xb, {
					className: "flex gap-3 sm:gap-3",
					children: [/* @__PURE__ */ x(LN, {
						variant: "outline",
						onClick: t,
						fullWidth: !0,
						children: c
					}), /* @__PURE__ */ x(LN, {
						variant: u,
						loading: l,
						onClick: o,
						fullWidth: !0,
						children: s
					})]
				}),
				a && /* @__PURE__ */ x(xb, { children: a })
			]
		})
	});
};
//#endregion
//#region src/components/pop/PopTable.tsx
function aP({ columns: e, data: t, onRowClick: n, activeRow: r, emptyMessage: i = "데이터가 없습니다.", className: a }) {
	return /* @__PURE__ */ x("div", {
		className: q("overflow-hidden rounded-xl border-2 border-border", a),
		children: /* @__PURE__ */ S("table", {
			className: "w-full text-base",
			children: [/* @__PURE__ */ x("thead", { children: /* @__PURE__ */ x("tr", {
				className: "border-b-2 border-border bg-muted",
				children: e.map((e) => /* @__PURE__ */ x("th", {
					className: q("px-5 py-4 font-semibold text-muted-foreground", e.align === "center" && "text-center", e.align === "right" && "text-right", !e.align && "text-left"),
					style: e.width ? { width: e.width } : void 0,
					children: e.header
				}, e.key))
			}) }), /* @__PURE__ */ x("tbody", {
				className: "bg-card text-card-foreground",
				children: t.length === 0 ? /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ x("td", {
					colSpan: e.length,
					className: "py-12 text-center text-muted-foreground",
					children: i
				}) }) : t.map((t, i) => {
					let a = r?.(t);
					return /* @__PURE__ */ x("tr", {
						onClick: n ? () => n(t) : void 0,
						className: q("border-t border-border transition-colors", n && "cursor-pointer hover:bg-accent active:bg-accent/80", a && "bg-primary/10 hover:bg-primary/15"),
						children: e.map((e) => /* @__PURE__ */ x("td", {
							className: q("px-5 py-4 text-base", e.align === "center" && "text-center", e.align === "right" && "text-right"),
							children: e.render ? e.render(t[e.key], t) : String(t[e.key] ?? "")
						}, e.key))
					}, i);
				})
			})]
		})
	});
}
//#endregion
//#region src/components/pop/PopTimer.tsx
var oP = (e) => String(e).padStart(2, "0"), sP = (e) => {
	let t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), r = e % 60;
	return t > 0 ? `${oP(t)}:${oP(n)}:${oP(r)}` : `${oP(n)}:${oP(r)}`;
}, cP = ({ mode: e = "stopwatch", targetSeconds: t = 0, autoStart: n = !1, onComplete: r, onTick: i, label: a, className: o }) => {
	let [s, c] = g(e === "countdown" ? t : 0), [l, u] = g(n), d = h(null), p = h(!1);
	f(() => {
		if (!l) {
			d.current && clearInterval(d.current);
			return;
		}
		return d.current = setInterval(() => {
			c((n) => {
				let a = e === "countdown" ? n - 1 : n + 1;
				return i?.(a), e === "countdown" && a <= 0 ? (u(!1), p.current || (p.current = !0, r?.()), 0) : (e === "stopwatch" && t > 0 && a >= t && (p.current || (p.current = !0, r?.())), a);
			});
		}, 1e3), () => {
			d.current && clearInterval(d.current);
		};
	}, [
		l,
		e,
		t,
		r,
		i
	]);
	let m = () => {
		u(!1), c(e === "countdown" ? t : 0), p.current = !1;
	}, _ = e === "stopwatch" && t > 0 && s > t, v = t > 0 ? Math.min(100, (e === "countdown" ? (t - s) / t : s / t) * 100) : 0;
	return /* @__PURE__ */ S("div", {
		className: q("flex flex-col items-center gap-4", o),
		children: [
			a && /* @__PURE__ */ x("div", {
				className: "text-base font-semibold text-muted-foreground",
				children: a
			}),
			/* @__PURE__ */ x("div", {
				className: q("font-mono text-5xl font-bold tabular-nums", _ ? "text-destructive" : "text-foreground"),
				children: sP(s)
			}),
			t > 0 && /* @__PURE__ */ x("div", {
				className: "h-2 w-full max-w-xs overflow-hidden rounded-full bg-muted",
				children: /* @__PURE__ */ x("div", {
					className: q("h-full rounded-full transition-all duration-1000", _ ? "bg-destructive" : v >= 80 ? "bg-yellow-500" : "bg-primary"),
					style: { width: `${Math.min(100, v)}%` }
				})
			}),
			/* @__PURE__ */ S("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ x("button", {
					type: "button",
					onClick: () => u(!l),
					className: q("flex h-14 w-14 items-center justify-center rounded-full text-white transition-colors", l ? "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700" : "bg-primary hover:bg-primary/90 active:bg-primary/80"),
					children: l ? /* @__PURE__ */ x(pe, { className: "h-6 w-6" }) : /* @__PURE__ */ x(he, { className: "ml-0.5 h-6 w-6" })
				}), /* @__PURE__ */ x("button", {
					type: "button",
					onClick: m,
					className: "flex h-14 w-14 items-center justify-center rounded-full border-2 border-border text-muted-foreground transition-colors hover:bg-accent active:bg-accent/80",
					children: /* @__PURE__ */ x(_e, { className: "h-6 w-6" })
				})]
			})
		]
	});
}, lP = {
	default: "bg-primary",
	success: "bg-green-500",
	warning: "bg-yellow-500",
	destructive: "bg-destructive"
}, uP = ({ value: e, max: t = 100, variant: n = "default", label: r, showCount: i, className: a }) => {
	let o = Math.min(100, Math.max(0, e / t * 100)), s = n === "default" ? o >= 100 ? "success" : o >= 80 ? "warning" : "default" : n;
	return /* @__PURE__ */ S("div", {
		className: q("flex flex-col gap-2", a),
		children: [
			/* @__PURE__ */ S("div", {
				className: "flex items-end justify-between",
				children: [r && /* @__PURE__ */ x("span", {
					className: "text-base font-semibold text-foreground",
					children: r
				}), /* @__PURE__ */ S("div", {
					className: "flex items-baseline gap-1",
					children: [/* @__PURE__ */ x("span", {
						className: "text-3xl font-bold tabular-nums text-foreground",
						children: Math.round(o)
					}), /* @__PURE__ */ x("span", {
						className: "text-lg text-muted-foreground",
						children: "%"
					})]
				})]
			}),
			/* @__PURE__ */ x("div", {
				className: "h-4 w-full overflow-hidden rounded-full bg-muted",
				children: /* @__PURE__ */ x("div", {
					className: q("h-full rounded-full transition-all duration-500", lP[s]),
					style: { width: `${o}%` }
				})
			}),
			i && /* @__PURE__ */ S("div", {
				className: "text-right text-base tabular-nums text-muted-foreground",
				children: [
					e,
					" / ",
					t
				]
			})
		]
	});
}, dP = {
	default: {
		active: "bg-primary text-primary-foreground ring-2 ring-primary",
		inactive: "bg-card text-card-foreground border-2 border-border hover:bg-accent active:bg-accent/80"
	},
	success: {
		active: "bg-green-600 text-white ring-2 ring-green-600",
		inactive: "bg-card text-card-foreground border-2 border-border hover:bg-green-50 active:bg-green-100"
	},
	destructive: {
		active: "bg-destructive text-destructive-foreground ring-2 ring-destructive",
		inactive: "bg-card text-card-foreground border-2 border-border hover:bg-red-50 active:bg-red-100"
	},
	warning: {
		active: "bg-yellow-500 text-white ring-2 ring-yellow-500",
		inactive: "bg-card text-card-foreground border-2 border-border hover:bg-yellow-50 active:bg-yellow-100"
	}
}, fP = ({ options: e, value: t, onChange: n, label: r, fullWidth: i, className: a }) => /* @__PURE__ */ S("div", {
	className: q("flex flex-col gap-2", a),
	children: [r && /* @__PURE__ */ x("label", {
		className: "text-base font-semibold text-foreground",
		children: r
	}), /* @__PURE__ */ x("div", {
		className: q("flex gap-2", i && "w-full"),
		children: e.map((e) => {
			let r = e.value === t, a = dP[e.color ?? "default"];
			return /* @__PURE__ */ x("button", {
				type: "button",
				onClick: () => n?.(e.value),
				className: q("inline-flex min-h-[56px] items-center justify-center rounded-lg px-6 py-3 text-lg font-semibold transition-all", r ? a.active : a.inactive, i && "flex-1"),
				children: e.label
			}, e.value);
		})
	})]
}), pP = {
	1: "grid-cols-1",
	2: "grid-cols-2",
	3: "grid-cols-3",
	4: "grid-cols-4"
}, mP = {
	default: "bg-muted text-muted-foreground",
	primary: "bg-primary/10 text-primary",
	success: "bg-green-500/10 text-green-600 dark:text-green-400",
	warning: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
	destructive: "bg-destructive/10 text-destructive"
}, hP = ({ items: e, variant: t = "horizontal", layout: n = "auto", className: r }) => {
	let i = (e) => e.width === void 0 ? n === "equal" && t === "horizontal" ? { flex: 1 } : {} : typeof e.width == "number" ? { width: `${e.width}px` } : { width: e.width };
	return /* @__PURE__ */ x("div", {
		className: q("rounded-xl border-2 border-border bg-card", t === "horizontal" ? "flex flex-wrap" : "grid", t === "vertical" && (pP[Math.min(e.length, 4)] ?? "grid-cols-4"), r),
		children: e.map((n, r) => {
			let a = n.icon, o = mP[n.color ?? "default"], s = r === e.length - 1;
			return /* @__PURE__ */ S("div", {
				className: q("flex items-center gap-3 px-5 py-3.5", t === "horizontal" && !s && "border-r border-border", t === "vertical" && !s && "border-r border-border"),
				style: i(n),
				children: [a && /* @__PURE__ */ x("div", {
					className: q("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", o),
					children: /* @__PURE__ */ x(a, { className: "h-[18px] w-[18px]" })
				}), /* @__PURE__ */ S("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ x("span", {
						className: "text-xs font-medium text-muted-foreground",
						children: n.label
					}), /* @__PURE__ */ x("span", {
						className: "text-base font-bold text-foreground leading-tight",
						children: n.value
					})]
				})]
			}, r);
		})
	});
}, gP = s(({ value: e, onChange: t, onScan: n, label: r, placeholder: i, error: a, disabled: o, defaultMode: s = "scan", scanDelay: c = 100, clearOnScan: l = !1, className: d }, p) => {
	let [m, _] = g(""), [v, y] = g(s), b = e ?? m, C = h(""), w = h(null), T = h(null), E = u((e) => {
		T.current = e, typeof p == "function" ? p(e) : p && (p.current = e);
	}, [p]), D = u((n) => {
		e === void 0 && _(n), t?.(n);
	}, [e, t]), O = u((e) => {
		D(e), n?.(e), l && setTimeout(() => D(""), 0);
	}, [
		D,
		n,
		l
	]);
	f(() => {
		if (v !== "scan") return;
		let e = (e) => {
			if (e.key === "Enter") {
				C.current.length > 0 && (O(C.current), C.current = "");
				return;
			}
			e.key.length === 1 && (C.current += e.key, w.current && clearTimeout(w.current), w.current = setTimeout(() => {
				C.current = "";
			}, c));
		};
		return window.addEventListener("keydown", e), () => {
			window.removeEventListener("keydown", e), w.current && clearTimeout(w.current);
		};
	}, [
		v,
		c,
		O
	]);
	let k = (e) => {
		D(e.target.value);
	}, A = (e) => {
		e.key === "Enter" && b.trim() && (e.preventDefault(), n?.(b.trim()), l ? D("") : T.current?.select());
	}, j = () => {
		D(""), v === "manual" && T.current?.focus();
	}, M = () => {
		let e = v === "scan" ? "manual" : "scan";
		y(e), e === "manual" && setTimeout(() => T.current?.focus(), 0);
	}, N = i ?? (v === "scan" ? "바코드를 스캔하세요" : "직접 입력 후 Enter"), P = b.trim().length > 0;
	return /* @__PURE__ */ S("div", {
		className: q("flex flex-col gap-2", d),
		children: [
			r && /* @__PURE__ */ x("label", {
				className: "text-base font-semibold text-foreground",
				children: r
			}),
			/* @__PURE__ */ S("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ x("span", {
						className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground",
						children: /* @__PURE__ */ x(ve, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ x("input", {
						ref: E,
						value: b,
						onChange: v === "manual" ? k : void 0,
						onKeyDown: v === "manual" ? A : void 0,
						readOnly: v === "scan",
						disabled: o,
						placeholder: N,
						className: q("flex w-full rounded-lg border-2 bg-background pl-12 pr-24 py-3 text-lg text-foreground transition-colors", "min-h-[56px]", "placeholder:text-muted-foreground/60", "focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring", "disabled:cursor-not-allowed disabled:opacity-40", v === "scan" && "cursor-default", a ? "border-destructive focus:ring-destructive" : P ? "border-green-500" : "border-border")
					}),
					/* @__PURE__ */ S("div", {
						className: "absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1",
						children: [P && /* @__PURE__ */ x("button", {
							type: "button",
							onClick: j,
							className: "rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground",
							children: /* @__PURE__ */ x(Ee, { className: "h-5 w-5" })
						}), /* @__PURE__ */ x("button", {
							type: "button",
							onClick: M,
							title: v === "scan" ? "수동 입력으로 전환" : "스캔 모드로 전환",
							className: q("rounded-lg p-2 transition-colors", v === "manual" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
							children: /* @__PURE__ */ x(de, { className: "h-5 w-5" })
						})]
					})
				]
			}),
			/* @__PURE__ */ S("div", {
				className: "flex items-center gap-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ x("span", { className: q("inline-flex h-2 w-2 rounded-full", v === "scan" ? "animate-pulse bg-green-500" : "bg-blue-500") }), v === "scan" ? "스캔 대기중 — 바코드를 스캔하세요" : "수동 입력 모드 — 입력 후 Enter"]
			}),
			a && /* @__PURE__ */ x("span", {
				className: "text-sm text-destructive",
				children: a
			})
		]
	});
});
gP.displayName = "PopScanner";
//#endregion
//#region src/components/pop/PopCounterInput.tsx
var _P = ({ value: e, onChange: t, label: n, unit: r, min: i = 0, max: a = 99999, step: o = 1, disabled: s, className: c }) => {
	let l = () => {
		let n = e - o;
		n >= i && t(n);
	}, u = () => {
		let n = e + o;
		n <= a && t(n);
	}, d = !s && e - o >= i, f = !s && e + o <= a;
	return /* @__PURE__ */ S("div", {
		className: q("flex flex-col gap-2", c),
		children: [
			n && /* @__PURE__ */ x("label", {
				className: "text-base font-semibold text-foreground",
				children: n
			}),
			/* @__PURE__ */ S("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ x("button", {
						type: "button",
						onClick: l,
						disabled: !d,
						className: q("flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-2 transition-colors", d ? "border-border bg-card text-foreground hover:bg-accent active:bg-accent/80" : "border-border/50 bg-muted text-muted-foreground/30 cursor-not-allowed"),
						children: /* @__PURE__ */ x(fe, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ S("div", {
						className: "flex min-h-[64px] min-w-[140px] flex-1 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background px-4",
						children: [/* @__PURE__ */ x("span", {
							className: "text-3xl font-bold tabular-nums text-foreground",
							children: e
						}), r && /* @__PURE__ */ x("span", {
							className: "text-lg text-muted-foreground",
							children: r
						})]
					}),
					/* @__PURE__ */ x("button", {
						type: "button",
						onClick: u,
						disabled: !f,
						className: q("flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-2 transition-colors", f ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80" : "border-border/50 bg-muted text-muted-foreground/30 cursor-not-allowed"),
						children: /* @__PURE__ */ x(ge, { className: "h-7 w-7" })
					})
				]
			}),
			(i > 0 || a < 99999) && /* @__PURE__ */ S("div", {
				className: "text-sm text-muted-foreground",
				children: [
					"범위: ",
					i,
					" ~ ",
					a,
					o !== 1 && ` (단위: ${o})`
				]
			})
		]
	});
}, vP = [
	"ㄱ",
	"ㄲ",
	"ㄴ",
	"ㄷ",
	"ㄸ",
	"ㄹ",
	"ㅁ",
	"ㅂ",
	"ㅃ",
	"ㅅ",
	"ㅆ",
	"ㅇ",
	"ㅈ",
	"ㅉ",
	"ㅊ",
	"ㅋ",
	"ㅌ",
	"ㅍ",
	"ㅎ"
], yP = [
	"ㅏ",
	"ㅐ",
	"ㅑ",
	"ㅒ",
	"ㅓ",
	"ㅔ",
	"ㅕ",
	"ㅖ",
	"ㅗ",
	"ㅘ",
	"ㅙ",
	"ㅚ",
	"ㅛ",
	"ㅜ",
	"ㅝ",
	"ㅞ",
	"ㅟ",
	"ㅠ",
	"ㅡ",
	"ㅢ",
	"ㅣ"
], bP = /* @__PURE__ */ ".ㄱ.ㄲ.ㄳ.ㄴ.ㄵ.ㄶ.ㄷ.ㄹ.ㄺ.ㄻ.ㄼ.ㄽ.ㄾ.ㄿ.ㅀ.ㅁ.ㅂ.ㅄ.ㅅ.ㅆ.ㅇ.ㅈ.ㅊ.ㅋ.ㅌ.ㅍ.ㅎ".split("."), xP = Object.fromEntries(vP.map((e, t) => [e, t])), SP = Object.fromEntries(yP.map((e, t) => [e, t])), CP = {
	ㄱ: 1,
	ㄲ: 2,
	ㄴ: 4,
	ㄷ: 7,
	ㄹ: 8,
	ㅁ: 16,
	ㅂ: 17,
	ㅅ: 19,
	ㅆ: 20,
	ㅇ: 21,
	ㅈ: 22,
	ㅊ: 23,
	ㅋ: 24,
	ㅌ: 25,
	ㅍ: 26,
	ㅎ: 27
}, wP = {
	ㅗ: {
		ㅏ: 9,
		ㅐ: 10,
		ㅣ: 11
	},
	ㅜ: {
		ㅓ: 14,
		ㅔ: 15,
		ㅣ: 16
	},
	ㅡ: { ㅣ: 19 }
}, TP = {
	9: ["ㅗ", "ㅏ"],
	10: ["ㅗ", "ㅐ"],
	11: ["ㅗ", "ㅣ"],
	14: ["ㅜ", "ㅓ"],
	15: ["ㅜ", "ㅔ"],
	16: ["ㅜ", "ㅣ"],
	19: ["ㅡ", "ㅣ"]
}, EP = {
	1: { ㅅ: 3 },
	4: {
		ㅈ: 5,
		ㅎ: 6
	},
	8: {
		ㄱ: 9,
		ㅁ: 10,
		ㅂ: 11,
		ㅅ: 12,
		ㅌ: 13,
		ㅍ: 14,
		ㅎ: 15
	},
	17: { ㅅ: 18 }
}, DP = {
	3: ["ㄱ", "ㅅ"],
	5: ["ㄴ", "ㅈ"],
	6: ["ㄴ", "ㅎ"],
	9: ["ㄹ", "ㄱ"],
	10: ["ㄹ", "ㅁ"],
	11: ["ㄹ", "ㅂ"],
	12: ["ㄹ", "ㅅ"],
	13: ["ㄹ", "ㅌ"],
	14: ["ㄹ", "ㅍ"],
	15: ["ㄹ", "ㅎ"],
	18: ["ㅂ", "ㅅ"]
};
function OP(e, t, n = 0) {
	return String.fromCharCode(44032 + (e * 21 + t) * 28 + n);
}
var kP = {
	cho: null,
	jung: null,
	jong: null
};
function AP({ cho: e, jung: t, jong: n }) {
	return e === null ? "" : t === null ? vP[e] : n === null ? OP(e, t) : OP(e, t, n);
}
function jP(e, t, n) {
	let r = n in SP, i = n in xP;
	if (!r && !i) return {
		committed: e + AP(t) + n,
		state: kP
	};
	if (r) {
		let r = SP[n];
		if (t.cho === null) return {
			committed: e,
			state: {
				cho: 11,
				jung: r,
				jong: null
			}
		};
		if (t.jung === null) return {
			committed: e,
			state: {
				cho: t.cho,
				jung: r,
				jong: null
			}
		};
		if (t.jong === null) {
			let i = wP[yP[t.jung]]?.[n];
			return i === void 0 ? {
				committed: e + OP(t.cho, t.jung),
				state: {
					cho: 11,
					jung: r,
					jong: null
				}
			} : {
				committed: e,
				state: {
					cho: t.cho,
					jung: i,
					jong: null
				}
			};
		}
		let i = DP[t.jong], a, o;
		return i ? (a = i[1], o = CP[i[0]] ?? 0) : (a = bP[t.jong], o = 0), {
			committed: e + OP(t.cho, t.jung, o),
			state: {
				cho: xP[a],
				jung: r,
				jong: null
			}
		};
	}
	if (i) {
		let r = xP[n];
		if (t.cho === null) return {
			committed: e,
			state: {
				cho: r,
				jung: null,
				jong: null
			}
		};
		if (t.jung === null) return {
			committed: e + vP[t.cho],
			state: {
				cho: r,
				jung: null,
				jong: null
			}
		};
		if (t.jong === null) {
			let i = CP[n];
			return i === void 0 ? {
				committed: e + OP(t.cho, t.jung),
				state: {
					cho: r,
					jung: null,
					jong: null
				}
			} : {
				committed: e,
				state: {
					...t,
					jong: i
				}
			};
		}
		let i = EP[t.jong]?.[n];
		return i === void 0 ? {
			committed: e + OP(t.cho, t.jung, t.jong),
			state: {
				cho: r,
				jung: null,
				jong: null
			}
		} : {
			committed: e,
			state: {
				...t,
				jong: i
			}
		};
	}
	return {
		committed: e,
		state: t
	};
}
function MP(e, t) {
	if (t.jong !== null) {
		let n = DP[t.jong];
		return {
			committed: e,
			state: {
				...t,
				jong: n ? CP[n[0]] : null
			}
		};
	}
	if (t.jung !== null) {
		let n = TP[t.jung];
		return {
			committed: e,
			state: {
				...t,
				jung: n ? SP[n[0]] : null
			}
		};
	}
	return t.cho === null ? e.length > 0 ? {
		committed: e.slice(0, -1),
		state: kP
	} : {
		committed: e,
		state: t
	} : {
		committed: e,
		state: kP
	};
}
var NP = [
	[
		"ㅂ",
		"ㅈ",
		"ㄷ",
		"ㄱ",
		"ㅅ",
		"ㅛ",
		"ㅕ",
		"ㅑ",
		"ㅐ",
		"ㅔ"
	],
	[
		"ㅁ",
		"ㄴ",
		"ㅇ",
		"ㄹ",
		"ㅎ",
		"ㅗ",
		"ㅓ",
		"ㅏ",
		"ㅣ"
	],
	[
		"ㅋ",
		"ㅌ",
		"ㅊ",
		"ㅍ",
		"ㅠ",
		"ㅜ",
		"ㅡ"
	]
], PP = [
	[
		"ㅃ",
		"ㅉ",
		"ㄸ",
		"ㄲ",
		"ㅆ",
		"ㅛ",
		"ㅕ",
		"ㅑ",
		"ㅒ",
		"ㅖ"
	],
	[
		"ㅁ",
		"ㄴ",
		"ㅇ",
		"ㄹ",
		"ㅎ",
		"ㅗ",
		"ㅓ",
		"ㅏ",
		"ㅣ"
	],
	[
		"ㅋ",
		"ㅌ",
		"ㅊ",
		"ㅍ",
		"ㅠ",
		"ㅜ",
		"ㅡ"
	]
], FP = [
	[
		"q",
		"w",
		"e",
		"r",
		"t",
		"y",
		"u",
		"i",
		"o",
		"p"
	],
	[
		"a",
		"s",
		"d",
		"f",
		"g",
		"h",
		"j",
		"k",
		"l"
	],
	[
		"z",
		"x",
		"c",
		"v",
		"b",
		"n",
		"m"
	]
], IP = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0"
], LP = ({ onClose: e, onConfirm: t, title: n = "텍스트 입력", initialValue: r = "", maxLength: i }) => {
	let [a, o] = g(r), [s, c] = g(kP), [l, d] = g("ko"), [f, p] = g(!1), m = a + AP(s), h = u((e) => {
		let t = a + AP(s);
		if (!(i && t.length >= i)) if (l === "ko") if (!(e in SP || e in xP)) o(a + AP(s) + e), c(kP);
		else {
			let t = jP(a, s, e);
			o(t.committed), c(t.state);
		}
		else {
			let t = f ? e.toUpperCase() : e;
			o((e) => e + t), c(kP), f && p(!1);
		}
	}, [
		a,
		s,
		l,
		f,
		i
	]), _ = u(() => {
		if (l === "ko") {
			let e = MP(a, s);
			o(e.committed), c(e.state);
		} else o((e) => e.slice(0, -1));
	}, [
		a,
		s,
		l
	]), v = u(() => {
		if (l === "ko") {
			let e = a + AP(s);
			(!i || e.length < i) && (o(e + " "), c(kP));
		} else (!i || a.length < i) && o((e) => e + " ");
	}, [
		a,
		s,
		l,
		i
	]), y = u(() => {
		o(a + AP(s)), c(kP), d((e) => e === "ko" ? "en" : "ko"), p(!1);
	}, [a, s]), C = () => {
		t(a + AP(s)), e();
	}, w = l === "ko" ? f ? PP : NP : FP, T = l === "ko", E = (e, t, n) => /* @__PURE__ */ x("button", {
		onPointerDown: (e) => {
			e.preventDefault(), t();
		},
		className: q("flex flex-1 select-none items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors duration-75 active:bg-muted h-14 text-xl font-medium touch-none cursor-pointer", n),
		children: e
	}, String(e)), D = (e, t, n) => /* @__PURE__ */ x("button", {
		onPointerDown: (e) => {
			e.preventDefault(), t();
		},
		className: q("flex select-none items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground transition-colors duration-75 active:bg-accent h-14 touch-none cursor-pointer", n),
		children: e
	}, String(e));
	return /* @__PURE__ */ S(b, { children: [
		/* @__PURE__ */ S(BC, {
			className: "gap-2 pb-0",
			children: [/* @__PURE__ */ x("div", { className: "mx-auto h-1.5 w-12 rounded-full bg-muted-foreground/30" }), /* @__PURE__ */ x(HC, {
				className: "text-xl font-bold",
				children: n
			})]
		}),
		/* @__PURE__ */ S("div", {
			className: "flex min-h-[3.5rem] items-center rounded-xl border-2 border-primary/40 bg-muted px-5",
			children: [/* @__PURE__ */ x("span", {
				className: "flex-1 font-mono text-2xl tracking-wide text-foreground",
				children: m || /* @__PURE__ */ x("span", {
					className: "text-base text-muted-foreground",
					children: "입력하세요"
				})
			}), i && /* @__PURE__ */ S("span", {
				className: "shrink-0 text-sm text-muted-foreground",
				children: [
					m.length,
					"/",
					i
				]
			})]
		}),
		/* @__PURE__ */ S("div", {
			className: "flex flex-col gap-1.5",
			children: [
				/* @__PURE__ */ x("div", {
					className: "flex gap-1.5",
					children: IP.map((e) => E(e, () => h(e)))
				}),
				/* @__PURE__ */ x("div", {
					className: "flex gap-1.5",
					children: w[0].map((e) => E(e, () => h(e)))
				}),
				/* @__PURE__ */ x("div", {
					className: "flex gap-1.5 px-[3.5%]",
					children: w[1].map((e) => E(e, () => h(e)))
				}),
				/* @__PURE__ */ S("div", {
					className: "flex gap-1.5",
					children: [
						D(/* @__PURE__ */ x("span", {
							className: "text-base font-bold",
							children: f ? "⬆" : "⇧"
						}), () => p((e) => !e), q("w-[9%]", f && "bg-primary text-primary-foreground border-primary")),
						/* @__PURE__ */ x("div", {
							className: "flex flex-1 gap-1.5",
							children: w[2].map((e) => E(e, () => h(e)))
						}),
						D(/* @__PURE__ */ x(R, { className: "h-5 w-5" }), _, "w-[9%]")
					]
				}),
				/* @__PURE__ */ S("div", {
					className: "flex gap-1.5",
					children: [
						D(/* @__PURE__ */ x("span", {
							className: "text-base font-semibold",
							children: T ? "영어" : "한글"
						}), y, "w-[15%] border-2 border-primary bg-primary/10 text-primary active:bg-primary/20"),
						D(/* @__PURE__ */ x("span", {
							className: "text-base text-muted-foreground",
							children: "공백"
						}), v, "flex-1"),
						/* @__PURE__ */ x("button", {
							onPointerDown: (e) => {
								e.preventDefault(), C();
							},
							className: "flex h-14 w-[18%] select-none items-center justify-center rounded-xl bg-primary text-base font-bold text-primary-foreground transition-colors active:bg-primary/90 touch-none cursor-pointer",
							children: "확인"
						})
					]
				})
			]
		})
	] });
}, RP = ({ open: e, onClose: t, onConfirm: n, title: r, initialValue: i, maxLength: a }) => /* @__PURE__ */ x(IC, {
	open: e,
	onOpenChange: (e) => !e && t(),
	children: /* @__PURE__ */ x(zC, {
		side: "bottom",
		showCloseButton: !1,
		className: "flex flex-col gap-3 p-5 rounded-t-2xl",
		children: e && /* @__PURE__ */ x(LP, {
			onClose: t,
			onConfirm: n,
			title: r,
			initialValue: i,
			maxLength: a
		}, String(e) + (i ?? ""))
	})
}), zP = (e, t) => l(() => e().then((e) => ({ default: e[t] })));
//#endregion
export { dA as AppAccordion, tw as AppAlertDialog, AN as AppAreaChart, aM as AppAvatar, cb as AppBadge, ON as AppBarChart, Dy as AppButton, Dj as AppButtonGroup, hb as AppCard, wj as AppCarousel, Qy as AppCheckbox, $y as AppCheckboxGroup, hN as AppCodePreview, lM as AppColorPicker, PN as AppComposedChart, gM as AppDataGrid, eA as AppDatePicker, Tb as AppDialog, Yj as AppDraggableTree, mw as AppDropdownMenu, sM as AppEmptyState, Hj as AppFileUpload, Ny as AppForm, TC as AppFormField, _M as AppGuide, Mj as AppHoverCard, Ly as AppInput, dM as AppKPI, kN as AppLineChart, Xx as AppModal, Oj as AppMultiSelect, Uj as AppNumberInput, Ay as AppPageLayout, NN as AppPieChart, eM as AppPopover, Ij as AppProgress, FN as AppRadialChart, nb as AppRadioGroup, zj as AppScrollArea, Wj as AppSearchInput, ky as AppSection, Jy as AppSelect, WC as AppSheet, cw as AppSkeleton, Qj as AppStatCard, Xj as AppStepper, ib as AppSwitch, wC as AppTable, FC as AppTabs, oM as AppTagInput, Xy as AppTextarea, Ej as AppToast, DC as AppToaster, ow as AppTooltip, $j as AppTransferList, Gj as AppTreeView, EC as ErrorBoundary, Fy as FieldWrapper, Ey as FullPageSpinner, Ty as LoadingSpinner, tP as PopBadge, LN as PopButton, nP as PopCard, _P as PopCounterInput, QN as PopDatePicker, iP as PopDialog, HN as PopInput, RN as PopKeypad, BN as PopKeypadDialog, KN as PopMultiSelect, uP as PopProgress, gP as PopScanner, WN as PopSelect, hP as PopStatusBar, aP as PopTable, RP as PopTextKeypadDialog, cP as PopTimer, fP as PopToggleGroup, q as cn, zP as page };
