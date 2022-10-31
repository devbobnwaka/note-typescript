import { elements, cssClass } from "../base.js";
export const handleClick = (e) => {
    var _a, _b, _c, _d, _e, _f;
    let element = e.target;
    if (element.classList.contains(cssClass.getStarted)) {
        (_a = elements.overlay) === null || _a === void 0 ? void 0 : _a.classList.add(cssClass.fadeInLeft);
        (_b = elements.overlay) === null || _b === void 0 ? void 0 : _b.classList.remove(cssClass.hide);
        (_c = elements.signup) === null || _c === void 0 ? void 0 : _c.classList.remove(cssClass.hide);
    }
    else if (element.classList.contains(cssClass.signIn)) {
        (_d = elements.overlay) === null || _d === void 0 ? void 0 : _d.classList.add(cssClass.fadeInRight);
        (_e = elements.overlay) === null || _e === void 0 ? void 0 : _e.classList.remove(cssClass.hide);
        (_f = elements.signIn) === null || _f === void 0 ? void 0 : _f.classList.remove(cssClass.hide);
    }
};
export const handleCloseClick = (e) => {
    var _a, _b, _c, _d, _e;
    e.preventDefault();
    let element = e.target;
    if (element.classList.contains(cssClass.close) || element.classList.contains(cssClass.overlay)) {
        (_a = elements.overlay) === null || _a === void 0 ? void 0 : _a.classList.add(cssClass.hide);
        (_b = elements.signup) === null || _b === void 0 ? void 0 : _b.classList.add(cssClass.hide);
        (_c = elements.signIn) === null || _c === void 0 ? void 0 : _c.classList.add(cssClass.hide);
        (_d = elements.overlay) === null || _d === void 0 ? void 0 : _d.classList.remove(cssClass.fadeInLeft);
        (_e = elements.overlay) === null || _e === void 0 ? void 0 : _e.classList.remove(cssClass.fadeInRight);
    }
};
