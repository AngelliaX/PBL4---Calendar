!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2cfd68d4-c815-4e8d-9ee5-eaf56ddcbeb7",e._sentryDebugIdIdentifier="sentry-dbid-2cfd68d4-c815-4e8d-9ee5-eaf56ddcbeb7")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"2971839"},(self.webpackJsonpSemrush2=self.webpackJsonpSemrush2||[]).push([[4541],{60570:(e,t,r)=>{r.d(t,{d:()=>a});const a=(0,r(48537).$)((()=>localStorage))},34772:(e,t,r)=>{var a=r(60570);const i=document.getElementById("srf-sidebar"),n=null==i?void 0:i.dataset.activeNavItem,l=a.d.getItem("last_sidebar_tk");const s=null==i?void 0:i.querySelector(".srf-report-sidebar-main"),d=null==i?void 0:i.querySelector(".srf-report-sidebar-management");!function(e){var t;e.querySelectorAll("[data-third-level-wrapper]").forEach((e=>{const t=e.querySelector(`[data-nav-item='${n}']`);t?(e.classList.add("js-sidebar-wrapper-link-active"),t.classList.add("srf-report-sidebar-main__third-level__link--active","js-sidebar-wrapper-link-active")):e.remove()})),e.querySelectorAll("[data-non-group-item-wrapper] ").forEach((e=>{const t=e.querySelector(`[data-nav-item='${n}']`);t&&(e.setAttribute("data-is-active",""),t.setAttribute("data-is-active",""),t.classList.add("srf-report-sidebar-main__group-title--active"),t.setAttribute("aria-current","page"))}));const r=e.querySelector("[data-group-is-open-by-default]");let a,i;l&&(a=e.querySelector(`[data-group-id='${l}']`)),a||(a=r);{const t=(d=n,Array.from(e.querySelectorAll(`[data-third-level-wrapper] [data-nav-item='${d}']`))).concat(function(t){return Array.from(e.querySelectorAll(`[data-active-link-wrapper-candidate] [data-nav-item='${t}']`))}(n)),l=function(e,t){e=Array.from(e);for(const r of t){if(!r)continue;const t=e.filter((e=>r.contains(e)));if(t.length>0)return t}return[]}(t,[a,r]);let o;if(o=l.length>0?l[0]:t[0],o){var s;const e=o.closest("[data-active-link-wrapper-candidate]");null==e||e.classList.add("srf-report-sidebar-main__link-wrapper--active","js-sidebar-wrapper-link-active"),null==e||null===(s=e.querySelector(".srf-report-sidebar-main__link"))||void 0===s||s.setAttribute("aria-current","page"),a=o.closest("[data-group-id]"),i=a}else a=r}var d;if(null===(t=a)||void 0===t||t.setAttribute("data-is-open",""),a){const e=a.querySelector(".js-sidebar-group-title");null==e||e.setAttribute("aria-expanded",!0)}if(i){i.setAttribute("data-is-active","");const e=i.querySelector(":scope > .srf-report-sidebar-main__group-title");null==e||e.classList.add("srf-report-sidebar-main__group-title--active")}}(s),d.querySelectorAll(".srf-report-sidebar-management__link-wrapper").forEach((e=>{var t;e.querySelector(`[data-nav-item='${n}']`)&&(e.classList.add("srf-report-sidebar-management__link-wrapper--active"),null===(t=e.querySelector(".srf-report-sidebar-management__link"))||void 0===t||t.setAttribute("aria-current","page"))})),null==i||i.removeAttribute("style")}},e=>{e.O(0,[8537],(()=>{return t=34772,e(e.s=t);var t}));e.O()}]);