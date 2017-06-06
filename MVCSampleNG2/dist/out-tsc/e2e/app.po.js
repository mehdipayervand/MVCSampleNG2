"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var MySamplePage = (function () {
    function MySamplePage() {
    }
    MySamplePage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    MySamplePage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return MySamplePage;
}());
exports.MySamplePage = MySamplePage;
//# sourceMappingURL=app.po.js.map