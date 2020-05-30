(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var presenter_1 = require("./presenter/presenter");
var presenter = new presenter_1.Presenter();

},{"./presenter/presenter":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Formatter = (function () {
    function Formatter() {
    }
    Formatter.prototype.baseFormat = function (stringArr) {
        var out;
        var type = stringArr[0], scope = stringArr[1], subject = stringArr[2], body = stringArr[3], footer = stringArr[4];
        type = type.trim();
        scope = scope.trim();
        subject = subject.trim();
        body = body.trim();
        footer = footer.trim();
        out = [type, scope, subject, body, footer];
        return out;
    };
    Formatter.prototype.combinator = function (stringArr, newLineChar) {
        var out = "";
        var type = stringArr[0], scope = stringArr[1], subject = stringArr[2], body = stringArr[3], footer = stringArr[4];
        out += type;
        if (scope != "") {
            out += "(" + scope + ")";
        }
        out += ": " + subject;
        out +=
            body == ""
                ? ""
                : newLineChar + newLineChar + body.split("\n").join(newLineChar);
        out +=
            footer == ""
                ? ""
                : newLineChar + newLineChar + footer.split("\n").join(newLineChar);
        return out;
    };
    Formatter.prototype.format = function (type, scope, subject, body, footer) {
        var _a;
        var out = "";
        _a = this.baseFormat([
            type,
            scope,
            subject,
            body,
            footer,
        ]), type = _a[0], scope = _a[1], subject = _a[2], body = _a[3], footer = _a[4];
        out = this.combinator([type, scope, subject, body, footer], "<br>");
        return out;
    };
    Formatter.prototype.formatWithoutBr = function (type, scope, subject, body, footer) {
        var _a;
        var out = "";
        _a = this.baseFormat([
            type,
            scope,
            subject,
            body,
            footer,
        ]), type = _a[0], scope = _a[1], subject = _a[2], body = _a[3], footer = _a[4];
        out = this.combinator([type, scope, subject, body, footer], "\n");
        return out;
    };
    return Formatter;
}());
exports.Formatter = Formatter;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("../view/view");
var formatter_1 = require("../model/formatter");
var Presenter = (function () {
    function Presenter() {
        this.view = new view_1.View(document, this);
        this.formatter = new formatter_1.Formatter();
        this.initialize();
    }
    Presenter.prototype.initialize = function () {
    };
    Presenter.prototype.toFormat = function () {
        this.view.displayFormattedText(this.formatter.format(this.view.getType(), this.view.getScope(), this.view.getSubject(), this.view.getBody(), this.view.getFooter()));
    };
    Presenter.prototype.toFormatWithoutBr = function () {
        this.view.copyTextToClipboard(this.formatter.formatWithoutBr(this.view.getType(), this.view.getScope(), this.view.getSubject(), this.view.getBody(), this.view.getFooter()));
    };
    Presenter.prototype.toCheckRule = function () { };
    return Presenter;
}());
exports.Presenter = Presenter;

},{"../model/formatter":2,"../view/view":4}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View = (function () {
    function View(DOM, presenter) {
        this.presenter = presenter;
        this.DOM = DOM;
        this.DOM
            .getElementById("ddl_type")
            .addEventListener("change", userInputed);
        this.DOM
            .getElementById("txt_scope")
            .addEventListener("input", userInputed);
        this.DOM
            .getElementById("txt_subject")
            .addEventListener("input", userInputed);
        this.DOM
            .getElementById("txa_body")
            .addEventListener("input", userInputed);
        this.DOM
            .getElementById("txa_footer")
            .addEventListener("input", userInputed);
        var self = this;
        this.DOM
            .getElementById("btn_copy")
            .addEventListener("click", btnClicked);
        function userInputed() {
            self.presenter.toFormat();
        }
        function btnClicked() {
            self.presenter.toFormatWithoutBr();
        }
        this.setPlaceholder();
        this.setTypes();
    }
    View.prototype.setTypes = function () {
        var input = this.DOM.getElementById("ddl_type");
        var opt = document.createElement('option');
        opt.appendChild(document.createTextNode('feat✨'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('fix🐛'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('perf⚡️'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('test✅'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('docs📝'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('refactor♻️'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('style💄'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('revert🔙'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('build📦'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('config🔧'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('git🐙'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('chore⚙️'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('init🎉'));
        input.appendChild(opt);
        opt = document.createElement('option');
        opt.appendChild(document.createTextNode('publish🚀'));
        input.appendChild(opt);
    };
    View.prototype.setPlaceholder = function () {
        var input = this.DOM.getElementById("ddl_type");
        var opt = document.createElement('option');
        opt.disabled = true;
        opt.selected = true;
        opt.appendChild(document.createTextNode('<type>'));
        input.appendChild(opt);
        input = this.DOM.getElementById("txt_scope");
        input.placeholder = "<scope>";
        input = this.DOM.getElementById("txt_subject");
        input.placeholder = "<subject>";
        input = this.DOM.getElementById("txa_body");
        input.placeholder = "<body>";
        input = this.DOM.getElementById("txa_footer");
        input.placeholder = "<footer>";
    };
    View.prototype.displayFormattedText = function (text) {
        this.DOM.getElementById("p_formatted").innerHTML = text;
    };
    View.prototype.displayWarning = function (text) {
    };
    View.prototype.getType = function () {
        var input = this.DOM.getElementById("ddl_type");
        return input.value;
    };
    View.prototype.getScope = function () {
        var input = this.DOM.getElementById("txt_scope");
        return input.value;
    };
    View.prototype.getSubject = function () {
        var input = this.DOM.getElementById("txt_subject");
        return input.value;
    };
    View.prototype.getBody = function () {
        var input = this.DOM.getElementById("txa_body");
        return input.value;
    };
    View.prototype.getFooter = function () {
        var input = this.DOM.getElementById("txa_footer");
        return input.value;
    };
    View.prototype.fallbackCopyTextToClipboard = function (text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        }
        catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    };
    View.prototype.copyTextToClipboard = function (text) {
        if (!navigator.clipboard) {
            this.fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    };
    return View;
}());
exports.View = View;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyIsInNyYy9tb2RlbC9mb3JtYXR0ZXIudHMiLCJzcmMvcHJlc2VudGVyL3ByZXNlbnRlci50cyIsInNyYy92aWV3L3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLG1EQUFpRDtBQUVqRCxJQUFJLFNBQVMsR0FBZSxJQUFJLHFCQUFTLEVBQUUsQ0FBQzs7Ozs7QUNENUM7SUFDRTtJQUFlLENBQUM7SUFHaEIsOEJBQVUsR0FBVixVQUNFLFNBQW1EO1FBRW5ELElBQUksR0FBNkMsQ0FBQztRQUU3QyxJQUFBLG1CQUFJLEVBQUUsb0JBQUssRUFBRSxzQkFBTyxFQUFFLG1CQUFJLEVBQUUscUJBQU0sQ0FBYztRQUVyRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTNDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUdELDhCQUFVLEdBQVYsVUFDRSxTQUFtRCxFQUNuRCxXQUFtQjtRQUVuQixJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7UUFDaEIsSUFBQSxtQkFBSSxFQUFFLG9CQUFLLEVBQUUsc0JBQU8sRUFBRSxtQkFBSSxFQUFFLHFCQUFNLENBQWM7UUFFckQsR0FBRyxJQUFJLElBQUksQ0FBQztRQUNaLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNmLEdBQUcsSUFBSSxHQUFH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QUFLLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEQ7UUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsa0NBQW1CLEdBQW5CLFVBQW9CLElBQUk7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLE9BQU87U0FDVjtRQUNELFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUFFLFVBQVUsR0FBRztZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsV0FBQztBQUFELENBbk1BLEFBbU1DLElBQUE7QUFuTVksb0JBQUkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBJUHJlc2VudGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlL3ByZXNlbnRlci9wcmVzZW50ZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBQcmVzZW50ZXIgfSBmcm9tIFwiLi9wcmVzZW50ZXIvcHJlc2VudGVyXCJcblxudmFyIHByZXNlbnRlcjogSVByZXNlbnRlciA9IG5ldyBQcmVzZW50ZXIoKTsiLCJpbXBvcnQgeyBJRm9ybWF0dGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9tb2RlbC9mb3JtYXR0ZXIuaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXR0ZXIgaW1wbGVtZW50cyBJRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8vIHN0cmluZ0FyciA9W3R5cGUsIHNjb3BlLCBzdWJqZWN0LCBib2R5LCBmb290ZXJdXG4gIGJhc2VGb3JtYXQoXG4gICAgc3RyaW5nQXJyOiBbc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmddXG4gICk6IFtzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZ10ge1xuICAgIGxldCBvdXQ6IFtzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZ107XG5cbiAgICBsZXQgW3R5cGUsIHNjb3BlLCBzdWJqZWN0LCBib2R5LCBmb290ZXJdID0gc3RyaW5nQXJyO1xuXG4gICAgdHlwZSA9IHR5cGUudHJpbSgpO1xuICAgIHNjb3BlID0gc2NvcGUudHJpbSgpO1xuICAgIHN1YmplY3QgPSBzdWJqZWN0LnRyaW0oKTtcbiAgICBib2R5ID0gYm9keS50cmltKCk7XG4gICAgZm9vdGVyID0gZm9vdGVyLnRyaW0oKTtcbiAgICBvdXQgPSBbdHlwZSwgc2NvcGUsIHN1YmplY3QsIGJvZHksIGZvb3Rlcl07XG5cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLy8gc3RyaW5nQXJyID1bdHlwZSwgc2NvcGUsIHN1YmplY3QsIGJvZHksIGZvb3Rlcl1cbiAgY29tYmluYXRvcihcbiAgICBzdHJpbmdBcnI6IFtzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZ10sXG4gICAgbmV3TGluZUNoYXI6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIGxldCBvdXQ6IHN0cmluZyA9IFwiXCI7XG4gICAgbGV0IFt0eXBlLCBzY29wZSwgc3ViamVjdCwgYm9keSwgZm9vdGVyXSA9IHN0cmluZ0FycjtcblxuICAgIG91dCArPSB0eXBlO1xuICAgIGlmIChzY29wZSAhPSBcIlwiKSB7XG4gICAgICBvdXQgKz0gXCIoXCIgKyBzY29wZSArIFwiKVwiO1xuICAgIH1cbiAgICBvdXQgKz0gXCI6IFwiICsgc3ViamVjdDtcbiAgICBvdXQgKz1cbiAgICAgIGJvZHkgPT0gXCJcIlxuICAgICAgICA/IFwiXCJcbiAgICAgICAgOiBuZXdMaW5lQ2hhciArIG5ld0xpbmVDaGFyICsgYm9keS5zcGxpdChcIlxcblwiKS5qb2luKG5ld0xpbmVDaGFyKTtcbiAgICBvdXQgKz1cbiAgICAgIGZvb3RlciA9PSBcIlwiXG4gICAgICAgID8gXCJcIlxuICAgICAgICA6IG5ld0xpbmVDaGFyICsgbmV3TGluZUNoYXIgKyBmb290ZXIuc3BsaXQoXCJcXG5cIikuam9pbihuZXdMaW5lQ2hhcik7XG5cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgZm9ybWF0KFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBzY29wZTogc3RyaW5nLFxuICAgIHN1YmplY3Q6IHN0cmluZyxcbiAgICBib2R5OiBzdHJpbmcsXG4gICAgZm9vdGVyOiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgW3R5cGUsIHNjb3BlLCBzdWJqZWN0LCBib2R5LCBmb290ZXJdID0gdGhpcy5iYXNlRm9ybWF0KFtcbiAgICAgIHR5cGUsXG4gICAgICBzY29wZSxcbiAgICAgIHN1YmplY3QsXG4gICAgICBib2R5LFxuICAgICAgZm9vdGVyLFxuICAgIF0pO1xuXG4gICAgb3V0ID0gdGhpcy5jb21iaW5hdG9yKFt0eXBlLCBzY29wZSwgc3ViamVjdCwgYm9keSwgZm9vdGVyXSwgXCI8YnI+XCIpO1xuXG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGZvcm1hdFdpdGhvdXRCcihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgc2NvcGU6IHN0cmluZyxcbiAgICBzdWJqZWN0OiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxuICAgIGZvb3Rlcjogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgbGV0IG91dDogc3RyaW5nID0gXCJcIjtcblxuICAgIFt0eXBlLCBzY29wZSwgc3ViamVjdCwgYm9keSwgZm9vdGVyXSA9IHRoaXMuYmFzZUZvcm1hdChbXG4gICAgICB0eXBlLFxuICAgICAgc2NvcGUsXG4gICAgICBzdWJqZWN0LFxuICAgICAgYm9keSxcbiAgICAgIGZvb3RlcixcbiAgICBdKTtcblxuICAgIG91dCA9IHRoaXMuY29tYmluYXRvcihbdHlwZSwgc2NvcGUsIHN1YmplY3QsIGJvZHksIGZvb3Rlcl0sIFwiXFxuXCIpO1xuXG4gICAgcmV0dXJuIG91dDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByZXNlbnRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2UvcHJlc2VudGVyL3ByZXNlbnRlci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElWaWV3IH0gZnJvbSBcIi4uL2ludGVyZmFjZS92aWV3L3ZpZXcuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4uL3ZpZXcvdmlld1wiXG5pbXBvcnQgeyBJRm9ybWF0dGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9tb2RlbC9mb3JtYXR0ZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBGb3JtYXR0ZXIgfSBmcm9tIFwiLi4vbW9kZWwvZm9ybWF0dGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBQcmVzZW50ZXIgaW1wbGVtZW50cyBJUHJlc2VudGVyIHtcbiAgICBwcml2YXRlIHZpZXc6IElWaWV3O1xuICAgIHByaXZhdGUgZm9ybWF0dGVyOiBJRm9ybWF0dGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KGRvY3VtZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXIgPSBuZXcgRm9ybWF0dGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgLy8gU3luYyBWaWV3IGFuZCBNb2RlbFxuICAgIGluaXRpYWxpemUoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICB0b0Zvcm1hdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWV3LmRpc3BsYXlGb3JtYXR0ZWRUZXh0KFxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0ZXIuZm9ybWF0KFxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmdldFNjb3BlKCksXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmdldFN1YmplY3QoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRGb290ZXIoKSkpO1xuICAgIH1cblxuICAgIHRvRm9ybWF0V2l0aG91dEJyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXcuY29weVRleHRUb0NsaXBib2FyZChcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVyLmZvcm1hdFdpdGhvdXRCcihcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRTY29wZSgpLFxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRTdWJqZWN0KCksXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmdldEJvZHkoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZ2V0Rm9vdGVyKCkpKTtcbiAgICB9XG5cbiAgICB0b0NoZWNrUnVsZSgpOiB2b2lkIHsgfVxufSIsImltcG9ydCB7IElWaWV3IH0gZnJvbSBcIi4uL2ludGVyZmFjZS92aWV3L3ZpZXcuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJUHJlc2VudGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9wcmVzZW50ZXIvcHJlc2VudGVyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgUHJlc2VudGVyIH0gZnJvbSBcIi4uL3ByZXNlbnRlci9wcmVzZW50ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFZpZXcgaW1wbGVtZW50cyBJVmlldyB7XG4gICAgRE9NOiBEb2N1bWVudDtcbiAgICBwcmVzZW50ZXI6IElQcmVzZW50ZXI7XG4gICAgY29uc3RydWN0b3IoRE9NOiBEb2N1bWVudCwgcHJlc2VudGVyOiBQcmVzZW50ZXIpIHtcbiAgICAgICAgdGhpcy5wcmVzZW50ZXIgPSBwcmVzZW50ZXI7XG4gICAgICAgIHRoaXMuRE9NID0gRE9NO1xuICAgICAgICB0aGlzLkRPTVxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZGRsX3R5cGVcIilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVzZXJJbnB1dGVkKTtcbiAgICAgICAgdGhpcy5ET01cbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcInR4dF9zY29wZVwiKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB1c2VySW5wdXRlZCk7XG4gICAgICAgIHRoaXMuRE9NXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRfc3ViamVjdFwiKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB1c2VySW5wdXRlZCk7XG4gICAgICAgIHRoaXMuRE9NXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ0eGFfYm9keVwiKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB1c2VySW5wdXRlZCk7XG4gICAgICAgIHRoaXMuRE9NXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ0eGFfZm9vdGVyXCIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVzZXJJbnB1dGVkKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuRE9NXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidG5fY29weVwiKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidG5DbGlja2VkKTtcblxuICAgICAgICAvLyBFdmVudCBIYW5kbGVyXG4gICAgICAgIGZ1bmN0aW9uIHVzZXJJbnB1dGVkKCkge1xuICAgICAgICAgICAgc2VsZi5wcmVzZW50ZXIudG9Gb3JtYXQoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBidG5DbGlja2VkKCkge1xuICAgICAgICAgICAgc2VsZi5wcmVzZW50ZXIudG9Gb3JtYXRXaXRob3V0QnIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIoKTtcbiAgICAgICAgdGhpcy5zZXRUeXBlcygpO1xuICAgIH1cblxuICAgIHNldFR5cGVzKCk6IHZvaWQge1xuICAgICAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPVxuICAgICAgICAgICAgPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ET00uZ2V0RWxlbWVudEJ5SWQoXCJkZGxfdHlwZVwiKTtcblxuICAgICAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnZmVhdOKcqCcpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcblxuICAgICAgICBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdmaXjwn5CbJykpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuXG4gICAgICAgIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3BlcmbimqHvuI8nKSk7XG4gICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdCk7XG5cbiAgICAgICAgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgndGVzdOKchScpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcblxuICAgICAgICBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdkb2Nz8J+TnScpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcblxuICAgICAgICBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdyZWZhY3RvcuKZu++4jycpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcblxuICAgICAgICBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdzdHlsZfCfkoQnKSk7XG4gICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdCk7XG5cbiAgICAgICAgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgncmV2ZXJ08J+UmScpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcblxuICAgICAgICBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdidWlsZPCfk6YnKSk7XG4gICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdCk7XG5cbiAgICAgICAgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnY29uZmln8J+UpycpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcblxuICAgICAgICBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdnaXTwn5CZJykpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuXG4gICAgICAgIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ2Nob3Jl4pqZ77iPJykpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuXG4gICAgICAgIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ2luaXTwn46JJykpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuXG4gICAgICAgIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3B1Ymxpc2jwn5qAJykpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cblxuICAgIHNldFBsYWNlaG9sZGVyKCk6IHZvaWQge1xuICAgICAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPVxuICAgICAgICAgICAgPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ET00uZ2V0RWxlbWVudEJ5SWQoXCJkZGxfdHlwZVwiKTtcbiAgICAgICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBvcHQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBvcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzx0eXBlPicpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcblxuICAgICAgICBpbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuRE9NLmdldEVsZW1lbnRCeUlkKFwidHh0X3Njb3BlXCIpO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiPHNjb3BlPlwiXG5cbiAgICAgICAgaW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLkRPTS5nZXRFbGVtZW50QnlJZChcInR4dF9zdWJqZWN0XCIpO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiPHN1YmplY3Q+XCJcblxuICAgICAgICBpbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuRE9NLmdldEVsZW1lbnRCeUlkKFwidHhhX2JvZHlcIik7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCI8Ym9keT5cIlxuXG4gICAgICAgIGlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ET00uZ2V0RWxlbWVudEJ5SWQoXCJ0eGFfZm9vdGVyXCIpO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiPGZvb3Rlcj5cIlxuXG4gICAgfVxuXG4gICAgLy8gRE9NIE1hbmlwdWxhdGlvblxuICAgIGRpc3BsYXlGb3JtYXR0ZWRUZXh0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLkRPTS5nZXRFbGVtZW50QnlJZChcInBfZm9ybWF0dGVkXCIpLmlubmVySFRNTCA9IHRleHQ7XG4gICAgfVxuXG4gICAgZGlzcGxheVdhcm5pbmcodGV4dDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICB9XG5cblxuICAgIC8vIERPTSBBY2Nlc3NpbmdcbiAgICBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9XG4gICAgICAgICAgICA8SFRNTElucHV0RWxlbWVudD50aGlzLkRPTS5nZXRFbGVtZW50QnlJZChcImRkbF90eXBlXCIpO1xuICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gICAgfVxuICAgIGdldFNjb3BlKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9XG4gICAgICAgICAgICA8SFRNTElucHV0RWxlbWVudD50aGlzLkRPTS5nZXRFbGVtZW50QnlJZChcInR4dF9zY29wZVwiKTtcbiAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgIH1cbiAgICBnZXRTdWJqZWN0KCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9XG4gICAgICAgICAgICA8SFRNTElucHV0RWxlbWVudD50aGlzLkRPTS5nZXRFbGVtZW50QnlJZChcInR4dF9zdWJqZWN0XCIpO1xuICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gICAgfVxuICAgIGdldEJvZHkoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID1cbiAgICAgICAgICAgIDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuRE9NLmdldEVsZW1lbnRCeUlkKFwidHhhX2JvZHlcIik7XG4gICAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgICB9XG4gICAgZ2V0Rm9vdGVyKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9XG4gICAgICAgICAgICA8SFRNTElucHV0RWxlbWVudD50aGlzLkRPTS5nZXRFbGVtZW50QnlJZChcInR4YV9mb290ZXJcIik7XG4gICAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgICB9XG5cblxuICAgIGZhbGxiYWNrQ29weVRleHRUb0NsaXBib2FyZCh0ZXh0KSB7XG4gICAgICAgIHZhciB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xuXG4gICAgICAgIC8vIEF2b2lkIHNjcm9sbGluZyB0byBib3R0b21cbiAgICAgICAgdGV4dEFyZWEuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICAgIHRleHRBcmVhLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgdGV4dEFyZWEuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgICAgIHRleHRBcmVhLmZvY3VzKCk7XG4gICAgICAgIHRleHRBcmVhLnNlbGVjdCgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgICAgICB2YXIgbXNnID0gc3VjY2Vzc2Z1bCA/ICdzdWNjZXNzZnVsJyA6ICd1bnN1Y2Nlc3NmdWwnO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhbGxiYWNrOiBDb3B5aW5nIHRleHQgY29tbWFuZCB3YXMgJyArIG1zZyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFsbGJhY2s6IE9vcHMsIHVuYWJsZSB0byBjb3B5JywgZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xuICAgIH1cbiAgICBjb3B5VGV4dFRvQ2xpcGJvYXJkKHRleHQpIHtcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxiYWNrQ29weVRleHRUb0NsaXBib2FyZCh0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3luYzogQ29weWluZyB0byBjbGlwYm9hcmQgd2FzIHN1Y2Nlc3NmdWwhJyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FzeW5jOiBDb3VsZCBub3QgY29weSB0ZXh0OiAnLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19
