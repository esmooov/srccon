goog.provide('hello_js.core');
goog.require('cljs.core');
hello_js.core.popup_msg = (function popup_msg(msg){return send_alert(msg);
});
goog.exportSymbol('hello_js.core.popup_msg', hello_js.core.popup_msg);
hello_js.core.popup_msg.call(null,"ClojureScript calling a global function defined in an external JavaScript library");
hello_js.core.popup_msg.call(null,("ClojureScript: the time is now "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()))));
