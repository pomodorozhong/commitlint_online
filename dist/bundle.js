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
    Formatter.prototype.format = function (type, scope, subject, body, footer) {
        var out = "";
        out += type;
        if (scope != "") {
            out += "(" + scope + ")";
        }
        out += ": " + subject;
        out += body == "" ? "" : "<br><br>" + body;
        out += footer == "" ? "" : "<br><br>" + footer;
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
        function userInputed() {
            self.presenter.toFormat();
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
    return View;
}());
exports.View = View;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyIsInNyYy9tb2RlbC9mb3JtYXR0ZXIudHMiLCJzcmMvcHJlc2VudGVyL3ByZXNlbnRlci50cyIsInNyYy92aWV3L3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLG1EQUFpRDtBQUVqRCxJQUFJLFNBQVMsR0FBZSxJQUFJLHFCQUFTLEVBQUUsQ0FBQzs7Ozs7QUNENUM7SUFDSTtJQUNBLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQ0ksSUFBWSxFQUNaLEtBQWEsRUFDYixPQUFlLEVBQ2YsSUFBWSxFQUNaLE1BQWM7UUFFZCxJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7UUFFckIsR0FBRyxJQUFJLElBQUksQ0FBQztRQUNaLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNiLEdBQUcsSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUM1QjtRQUNELEdBQUcsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0MsR0FBRyxJQUFJLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUUvQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTCxnQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlksOEJBQVM7Ozs7O0FDQXRCLHFDQUFtQztBQUVuQyxnREFBK0M7QUFFL0M7SUFJSTtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7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QUNELHlCQUFVLEdBQVY7UUFDSSxJQUFJLEtBQUssR0FDYSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELHNCQUFPLEdBQVA7UUFDSSxJQUFJLEtBQUssR0FDYSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELHdCQUFTLEdBQVQ7UUFDSSxJQUFJLEtBQUssR0FDYSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1RCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQXZKQSxBQXVKQyxJQUFBO0FBdkpZLG9CQUFJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgSVByZXNlbnRlciB9IGZyb20gXCIuL2ludGVyZmFjZS9wcmVzZW50ZXIvcHJlc2VudGVyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgUHJlc2VudGVyIH0gZnJvbSBcIi4vcHJlc2VudGVyL3ByZXNlbnRlclwiXG5cbnZhciBwcmVzZW50ZXI6IElQcmVzZW50ZXIgPSBuZXcgUHJlc2VudGVyKCk7IiwiaW1wb3J0IHsgSUZvcm1hdHRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2UvbW9kZWwvZm9ybWF0dGVyLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0dGVyIGltcGxlbWVudHMgSUZvcm1hdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgZm9ybWF0KFxuICAgICAgICB0eXBlOiBzdHJpbmcsXG4gICAgICAgIHNjb3BlOiBzdHJpbmcsXG4gICAgICAgIHN1YmplY3Q6IHN0cmluZyxcbiAgICAgICAgYm9keTogc3RyaW5nLFxuICAgICAgICBmb290ZXI6IHN0cmluZ1xuICAgICk6IHN0cmluZyB7XG4gICAgICAgIGxldCBvdXQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgb3V0ICs9IHR5cGU7XG4gICAgICAgIGlmIChzY29wZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBvdXQgKz0gXCIoXCIgKyBzY29wZSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICAgIG91dCArPSBcIjogXCIgKyBzdWJqZWN0O1xuICAgICAgICBvdXQgKz0gYm9keSA9PSBcIlwiID8gXCJcIiA6IFwiPGJyPjxicj5cIiArIGJvZHk7XG4gICAgICAgIG91dCArPSBmb290ZXIgPT0gXCJcIiA/IFwiXCIgOiBcIjxicj48YnI+XCIgKyBmb290ZXI7XG5cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59IiwiaW1wb3J0IHsgSVByZXNlbnRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2UvcHJlc2VudGVyL3ByZXNlbnRlci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElWaWV3IH0gZnJvbSBcIi4uL2ludGVyZmFjZS92aWV3L3ZpZXcuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4uL3ZpZXcvdmlld1wiXG5pbXBvcnQgeyBJRm9ybWF0dGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9tb2RlbC9mb3JtYXR0ZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBGb3JtYXR0ZXIgfSBmcm9tIFwiLi4vbW9kZWwvZm9ybWF0dGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBQcmVzZW50ZXIgaW1wbGVtZW50cyBJUHJlc2VudGVyIHtcbiAgICBwcml2YXRlIHZpZXc6IElWaWV3O1xuICAgIHByaXZhdGUgZm9ybWF0dGVyOiBJRm9ybWF0dGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KGRvY3VtZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXIgPSBuZXcgRm9ybWF0dGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgLy8gU3luYyBWaWV3IGFuZCBNb2RlbFxuICAgIGluaXRpYWxpemUoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICB0b0Zvcm1hdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWV3LmRpc3BsYXlGb3JtYXR0ZWRUZXh0KFxuICAgICAgICAgICAgdGhpcy5mb3JtYXR0ZXIuZm9ybWF0KFxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmdldFNjb3BlKCksXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmdldFN1YmplY3QoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRGb290ZXIoKSkpO1xuICAgIH1cblxuICAgIHRvQ2hlY2tSdWxlKCk6IHZvaWQgeyB9XG59IiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlL3ZpZXcvdmlldy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElQcmVzZW50ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlL3ByZXNlbnRlci9wcmVzZW50ZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBQcmVzZW50ZXIgfSBmcm9tIFwiLi4vcHJlc2VudGVyL3ByZXNlbnRlclwiO1xuXG5leHBvcnQgY2xhc3MgVmlldyBpbXBsZW1lbnRzIElWaWV3IHtcbiAgICBET006IERvY3VtZW50O1xuICAgIHByZXNlbnRlcjogSVByZXNlbnRlcjtcbiAgICBjb25zdHJ1Y3RvcihET006IERvY3VtZW50LCBwcmVzZW50ZXI6IFByZXNlbnRlcikge1xuICAgICAgICB0aGlzLnByZXNlbnRlciA9IHByZXNlbnRlcjtcbiAgICAgICAgdGhpcy5ET00gPSBET007XG4gICAgICAgIHRoaXMuRE9NXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkZGxfdHlwZVwiKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXNlcklucHV0ZWQpO1xuICAgICAgICB0aGlzLkRPTVxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwidHh0X3Njb3BlXCIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVzZXJJbnB1dGVkKTtcbiAgICAgICAgdGhpcy5ET01cbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcInR4dF9zdWJqZWN0XCIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVzZXJJbnB1dGVkKTtcbiAgICAgICAgdGhpcy5ET01cbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcInR4YV9ib2R5XCIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHVzZXJJbnB1dGVkKTtcbiAgICAgICAgdGhpcy5ET01cbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcInR4YV9mb290ZXJcIilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdXNlcklucHV0ZWQpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBFdmVudCBIYW5kbGVyXG4gICAgICAgIGZ1bmN0aW9uIHVzZXJJbnB1dGVkKCkge1xuICAgICAgICAgICAgc2VsZi5wcmVzZW50ZXIudG9Gb3JtYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIoKTtcbiAgICAgICAgdGhpcy5zZXRUeXBlcygpO1xuICAgIH1cblxuICAgIHNldFR5cGVzKCk6IHZvaWQge1xuICAgICAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPVxuICAgICAgICAgICAgPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ET00uZ2V0RWxlbWVudEJ5SWQoXCJkZGxfdHlwZVwiKTtcblxuICAgICAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnZmVhdOKcqCcpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICAgICAgXG4gICAgICAgIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ2ZpePCfkJsnKSk7XG4gICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgICAgIFxuICAgICAgICBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdwZXJm4pqh77iPJykpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuICAgICAgICBcbiAgICAgICAgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgndGVzdOKchScpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICAgICAgXG4gICAgICAgIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ2RvY3Pwn5OdJykpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuICAgICAgICBcbiAgICAgICAgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgncmVmYWN0b3LimbvvuI8nKSk7XG4gICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgICAgIFxuICAgICAgICBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdzdHlsZfCfkoQnKSk7XG4gICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgICAgIFxuICAgICAgICBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdyZXZlcnTwn5SZJykpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuICAgICAgICBcbiAgICAgICAgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnYnVpbGTwn5OmJykpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuICAgICAgICBcbiAgICAgICAgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnY29uZmln8J+UpycpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICAgICAgXG4gICAgICAgIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ2dpdPCfkJknKSk7XG4gICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgICAgIFxuICAgICAgICBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdjaG9yZeKame+4jycpKTtcbiAgICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICAgICAgXG4gICAgICAgIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ2luaXTwn46JJykpO1xuICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuICAgICAgICBcbiAgICAgICAgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgncHVibGlzaPCfmoAnKSk7XG4gICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdCk7ICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRQbGFjZWhvbGRlcigpOiB2b2lkIHtcbiAgICAgICAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID1cbiAgICAgICAgICAgIDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuRE9NLmdldEVsZW1lbnRCeUlkKFwiZGRsX3R5cGVcIik7XG4gICAgICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc8dHlwZT4nKSk7XG4gICAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdCk7XG5cbiAgICAgICAgaW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLkRPTS5nZXRFbGVtZW50QnlJZChcInR4dF9zY29wZVwiKTtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIjxzY29wZT5cIlxuXG4gICAgICAgIGlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ET00uZ2V0RWxlbWVudEJ5SWQoXCJ0eHRfc3ViamVjdFwiKTtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIjxzdWJqZWN0PlwiXG5cbiAgICAgICAgaW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLkRPTS5nZXRFbGVtZW50QnlJZChcInR4YV9ib2R5XCIpO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiPGJvZHk+XCJcblxuICAgICAgICBpbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuRE9NLmdldEVsZW1lbnRCeUlkKFwidHhhX2Zvb3RlclwiKTtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcIjxmb290ZXI+XCJcblxuICAgIH1cblxuICAgIC8vIERPTSBNYW5pcHVsYXRpb25cbiAgICBkaXNwbGF5Rm9ybWF0dGVkVGV4dCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ET00uZ2V0RWxlbWVudEJ5SWQoXCJwX2Zvcm1hdHRlZFwiKS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cblxuICAgIGRpc3BsYXlXYXJuaW5nKHRleHQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgfVxuXG5cbiAgICAvLyBET00gQWNjZXNzaW5nXG4gICAgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPVxuICAgICAgICAgICAgPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ET00uZ2V0RWxlbWVudEJ5SWQoXCJkZGxfdHlwZVwiKTtcbiAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgIH1cbiAgICBnZXRTY29wZSgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPVxuICAgICAgICAgICAgPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ET00uZ2V0RWxlbWVudEJ5SWQoXCJ0eHRfc2NvcGVcIik7XG4gICAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgICB9XG4gICAgZ2V0U3ViamVjdCgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPVxuICAgICAgICAgICAgPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ET00uZ2V0RWxlbWVudEJ5SWQoXCJ0eHRfc3ViamVjdFwiKTtcbiAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgIH1cbiAgICBnZXRCb2R5KCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9XG4gICAgICAgICAgICA8SFRNTElucHV0RWxlbWVudD50aGlzLkRPTS5nZXRFbGVtZW50QnlJZChcInR4YV9ib2R5XCIpO1xuICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gICAgfVxuICAgIGdldEZvb3RlcigpOiBzdHJpbmcge1xuICAgICAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPVxuICAgICAgICAgICAgPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ET00uZ2V0RWxlbWVudEJ5SWQoXCJ0eGFfZm9vdGVyXCIpO1xuICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gICAgfVxufSJdfQ==
