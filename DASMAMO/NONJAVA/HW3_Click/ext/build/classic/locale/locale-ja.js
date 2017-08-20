var $jscomp={};$jscomp.scope={};$jscomp.defineProperty=typeof Object.defineProperties=='function'?Object.defineProperty:function(b,c,a){a=(a);if(a.get||a.set){throw new TypeError('ES3 does not support getters and setters.')}if(b==Array.prototype||b==Object.prototype){return}b[c]=a.value};$jscomp.getGlobal=function(a){return typeof window!='undefined'&&window===a?a:typeof global!='undefined'&&global!=null?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(i,f,j,k){if(!f){return}var a=$jscomp.global;var b=i.split('.');for(var e=0;e<b.length-1;e++){var d=b[e];if(!(d in a)){a[d]={}}a=a[d]}var g=b[b.length-1];var h=a[g];var c=f(h);if(c==h||c==null){return}$jscomp.defineProperty(a,g,{configurable:!0,writable:!0,value:c})};$jscomp.polyfill('Array.prototype.copyWithin',function(a){if(a){return a}var b=function(c,b,a){var d=this.length;c=Number(c);b=Number(b);a=Number(a!=null?a:d);if(c<b){a=Math.min(a,d);while(b<a){if(b in this){this[c++]=this[b++]}else {delete this[c++];b++}}}else {a=Math.min(a,d+b-c);c+=a-b;while(a>b){if(--a in this){this[--c]=this[a]}else {delete this[c]}}}return this};return b},'es6-impl','es3');$jscomp.SYMBOL_PREFIX='jscomp_symbol_';$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};if(!$jscomp.global.Symbol){$jscomp.global.Symbol=$jscomp.Symbol}};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return ($jscomp.SYMBOL_PREFIX+(a||'')+$jscomp.symbolCounter_++)};$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;if(!a){a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol('iterator')}if(typeof Array.prototype[a]!='function'){$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}})}$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){if(b<a.length){return {done:!1,value:a[b++]}}else {return {done:!0}}})};$jscomp.iteratorPrototype=function(b){$jscomp.initSymbolIterator();var a={next:b};a[$jscomp.global.Symbol.iterator]=function(){return this};return (a)};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(a,d){$jscomp.initSymbolIterator();if(a instanceof String){a=a+''}var c=0;var b={next:function(){if(c<a.length){var e=c++;return {value:d(e,a[e]),done:!1}}b.next=function(){return {done:!0,value:void 0}};return b.next()}};b[Symbol.iterator]=function(){return b};return b};$jscomp.polyfill('Array.prototype.entries',function(a){if(a){return a}var b=function(){return $jscomp.iteratorFromArray(this,function(a,b){return [a,b]})};return b},'es6-impl','es3');$jscomp.polyfill('Array.prototype.fill',function(a){if(a){return a}var b=function(e,b,a){var c=this.length||0;if(b<0){b=Math.max(0,c+(b))}if(a==null||a>c){a=c}a=Number(a);if(a<0){a=Math.max(0,c+a)}for(var d=Number(b||0);d<a;d++){this[d]=e}return this};return b},'es6-impl','es3');$jscomp.findInternal=function(a,d,e){if(a instanceof String){a=(String(a))}var f=a.length;for(var b=0;b<f;b++){var c=a[b];if(d.call(e,c,b,a)){return {i:b,v:c}}}return {i:-1,v:void 0}};$jscomp.polyfill('Array.prototype.find',function(a){if(a){return a}var b=function(b,a){return $jscomp.findInternal(this,b,a).v};return b},'es6-impl','es3');$jscomp.polyfill('Array.prototype.findIndex',function(a){if(a){return a}var b=function(b,a){return $jscomp.findInternal(this,b,a).i};return b},'es6-impl','es3');$jscomp.polyfill('Array.from',function(a){if(a){return a}var b=function(a,b,f){$jscomp.initSymbolIterator();b=b!=null?b:function(a){return a};var c=[];var e=(a)[Symbol.iterator];if(typeof e=='function'){a=e.call(a);var g;while(!(g=a.next()).done){c.push(b.call((f),g.value))}}else {var h=a.length;for(var d=0;d<h;d++){c.push(b.call((f),a[d]))}}return c};return b},'es6-impl','es3');$jscomp.polyfill('Array.prototype.keys',function(a){if(a){return a}var b=function(){return $jscomp.iteratorFromArray(this,function(a){return a})};return b},'es6-impl','es3');$jscomp.polyfill('Array.of',function(a){if(a){return a}var b=function(a){return Array.from(arguments)};return b},'es6-impl','es3');$jscomp.polyfill('Array.prototype.values',function(a){if(a){return a}var b=function(){return $jscomp.iteratorFromArray(this,function(b,a){return a})};return b},'es6','es3');$jscomp.executeAsyncGenerator=function(a){function passValueToGenerator(b){return a.next(b)}function passErrorToGenerator(b){return a['throw'](b)}return new Promise(function(b,c){function handleGeneratorRecord(a){if(a.done){b(a.value)}else {Promise.resolve(a.value).then(passValueToGenerator,passErrorToGenerator).then(handleGeneratorRecord,c)}}handleGeneratorRecord(a.next())})};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var b=(a)[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator((a))};$jscomp.owns=function(b,a){return Object.prototype.hasOwnProperty.call(b,a)};$jscomp.polyfill('WeakMap',function(c){function isConformant(){if(!c||!Object.seal){return !1}try{var b=Object.seal({});var d=Object.seal({});var a=new (c)([[b,2],[d,3]]);if(a.get(b)!=2||a.get(d)!=3){return !1}a['delete'](b);a.set(d,4);return !a.has(b)&&a.get(d)==4}catch(e){return !1}}if(isConformant()){return c}var a='$jscomp_hidden_'+Math.random().toString().substring(2);function insert(b){if(!$jscomp.owns(b,a)){var c={};$jscomp.defineProperty(b,a,{value:c})}}function patch(a){var b=Object[a];if(b){Object[a]=function(a){insert(a);return b(a)}}}patch('freeze');patch('preventExtensions');patch('seal');var d=0;var b=function(a){this.id_=(d+=Math.random()+1).toString();if(a){$jscomp.initSymbol();$jscomp.initSymbolIterator();var e=$jscomp.makeIterator(a);var b;while(!(b=e.next()).done){var c=b.value;this.set((c[0]),(c[1]))}}};b.prototype.set=function(b,c){insert(b);if(!$jscomp.owns(b,a)){throw new Error('WeakMap key fail: '+b)}b[a][this.id_]=c;return this};b.prototype.get=function(b){return $jscomp.owns(b,a)?b[a][this.id_]:undefined};b.prototype.has=function(b){return $jscomp.owns(b,a)&&$jscomp.owns(b[a],this.id_)};b.prototype['delete']=function(b){if(!$jscomp.owns(b,a)||!$jscomp.owns(b[a],this.id_)){return !1}return delete b[a][this.id_]};return b},'es6-impl','es3');$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.polyfill('Map',function(b){var h=!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!b||!b.prototype.entries||typeof Object.seal!='function'){return !1}try{b=(b);var e=Object.seal({x:4});var c=new b($jscomp.makeIterator([[e,'s']]));if(c.get(e)!='s'||c.size!=1||c.get({x:4})||c.set({x:4},'t')!=c||c.size!=2){return !1}var d=c.entries();var a=d.next();if(a.done||a.value[0]!=e||a.value[1]!='s'){return !1}a=d.next();if(a.done||a.value[0].x!=4||a.value[1]!='t'||!d.next().done){return !1}return !0}catch(k){return !1}}();if(h){return b}$jscomp.initSymbol();$jscomp.initSymbolIterator();var f=new WeakMap();var c=function(){};c.prototype.previous;c.prototype.next;c.prototype.head;c.prototype.key;c.prototype.value;var a=function(a){this.data_={};this.head_=g();this.size=0;if(a){var d=$jscomp.makeIterator(a);var b;while(!(b=d.next()).done){var c=(b).value;this.set((c[0]),(c[1]))}}};a.prototype.set=function(c,b){var a=d(this,c);if(!a.list){a.list=this.data_[a.id]=[]}if(!a.entry){a.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:c,value:b};a.list.push(a.entry);this.head_.previous.next=a.entry;this.head_.previous=a.entry;this.size++}else {a.entry.value=b}return this};a.prototype['delete']=function(b){var a=d(this,b);if(a.entry&&a.list){a.list.splice(a.index,1);if(!a.list.length){delete this.data_[a.id]}a.entry.previous.next=a.entry.next;a.entry.next.previous=a.entry.previous;a.entry.head=null;this.size--;return !0}return !1};a.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=g();this.size=0};a.prototype.has=function(a){return !!d(this,a).entry};a.prototype.get=function(b){var a=d(this,b).entry;return (a&&(a.value))};a.prototype.entries=function(){return e(this,function(a){return [a.key,a.value]})};a.prototype.keys=function(){return e(this,function(a){return a.key})};a.prototype.values=function(){return e(this,function(a){return a.value})};a.prototype.forEach=function(d,c){var e=this.entries();var b;while(!(b=e.next()).done){var a=b.value;d.call((c),(a[1]),(a[0]),this)}};(a.prototype)[Symbol.iterator]=a.prototype.entries;var d=function(f,d){var e=j(d);var a=f.data_[e];if(a&&$jscomp.owns(f.data_,e)){for(var c=0;c<a.length;c++){var b=a[c];if(d!==d&&b.key!==b.key||d===b.key){return {id:e,list:a,index:c,entry:b}}}}return {id:e,list:a,index:-1,entry:undefined}};var e=function(b,c){var a=b.head_;return $jscomp.iteratorPrototype(function(){if(a){while(a.head!=b.head_){a=a.previous}while(a.next!=a.head){a=a.next;return {done:!1,value:c(a)}}a=null}return {done:!0,value:void 0}})};var g=function(){var a={};a.previous=a.next=a.head=a;return a};var i=0;var j=function(a){var b=a&&typeof a;if(b=='object'||b=='function'){a=(a);if(!f.has(a)){var c=''+ ++i;f.set(a,c);return c}return f.get(a)}return 'p_'+a};return a},'es6-impl','es3');$jscomp.polyfill('Math.acosh',function(a){if(a){return a}var b=function(a){a=Number(a);return Math.log(a+Math.sqrt(a*a-1))};return b},'es6-impl','es3');$jscomp.polyfill('Math.asinh',function(a){if(a){return a}var b=function(a){a=Number(a);if(a===0){return a}var b=Math.log(Math.abs(a)+Math.sqrt(a*a+1));return a<0?-b:b};return b},'es6-impl','es3');$jscomp.polyfill('Math.log1p',function(a){if(a){return a}var b=function(a){a=Number(a);if(a<0.25&&a>-0.25){var e=a;var f=1;var b=a;var c=0;var d=1;while(c!=b){e*=a;d*=-1;b=(c=b)+d*e/++f}return b}return Math.log(1+a)};return b},'es6-impl','es3');$jscomp.polyfill('Math.atanh',function(b){if(b){return b}var a=Math.log1p;var c=function(b){b=Number(b);return (a(b)-a(-b))/2};return c},'es6-impl','es3');$jscomp.polyfill('Math.cbrt',function(a){if(a){return a}var b=function(a){if(a===0){return a}a=Number(a);var b=Math.pow(Math.abs(a),1/3);return a<0?-b:b};return b},'es6-impl','es3');$jscomp.polyfill('Math.clz32',function(a){if(a){return a}var b=function(a){a=Number(a)>>>0;if(a===0){return 32}var b=0;if((a&4.29490176E9)===0){a<<=16;b+=16}if((a&4.27819008E9)===0){a<<=8;b+=8}if((a&4.02653184E9)===0){a<<=4;b+=4}if((a&3.221225472E9)===0){a<<=2;b+=2}if((a&2.147483648E9)===0){b++}return b};return b},'es6-impl','es3');$jscomp.polyfill('Math.cosh',function(a){if(a){return a}var b=Math.exp;var c=function(a){a=Number(a);return (b(a)+b(-a))/2};return c},'es6-impl','es3');$jscomp.polyfill('Math.expm1',function(a){if(a){return a}var b=function(a){a=Number(a);if(a<0.25&&a>-0.25){var d=a;var e=1;var b=a;var c=0;while(c!=b){d*=a/++e;b=(c=b)+d}return b}return Math.exp(a)-1};return b},'es6-impl','es3');$jscomp.polyfill('Math.hypot',function(a){if(a){return a}var b=function(b,c,g){b=Number(b);c=Number(c);var a,f,e;var d=Math.max(Math.abs(b),Math.abs(c));for(a=2;a<arguments.length;a++){d=Math.max(d,Math.abs(arguments[a]))}if(d>1.0E100||d<1.0E-100){b=b/d;c=c/d;e=b*b+c*c;for(a=2;a<arguments.length;a++){f=Number(arguments[a])/d;e+=f*f}return Math.sqrt(e)*d}else {e=b*b+c*c;for(a=2;a<arguments.length;a++){f=Number(arguments[a]);e+=f*f}return Math.sqrt(e)}};return b},'es6-impl','es3');$jscomp.polyfill('Math.imul',function(a){if(a){return a}var b=function(a,b){a=Number(a);b=Number(b);var e=a>>>16&65535;var c=a&65535;var f=b>>>16&65535;var d=b&65535;var g=e*d+c*f<<16>>>0;return c*d+g|0};return b},'es6-impl','es3');$jscomp.polyfill('Math.log10',function(a){if(a){return a}var b=function(a){return Math.log(a)/Math.LN10};return b},'es6-impl','es3');$jscomp.polyfill('Math.log2',function(a){if(a){return a}var b=function(a){return Math.log(a)/Math.LN2};return b},'es6-impl','es3');$jscomp.polyfill('Math.sign',function(a){if(a){return a}var b=function(a){a=Number(a);return a===0||isNaN(a)?a:a>0?1:-1};return b},'es6-impl','es3');$jscomp.polyfill('Math.sinh',function(a){if(a){return a}var b=Math.exp;var c=function(a){a=Number(a);if(a===0){return a}return (b(a)-b(-a))/2};return c},'es6-impl','es3');$jscomp.polyfill('Math.tanh',function(a){if(a){return a}var b=function(a){a=Number(a);if(a===0){return a}var b=Math.exp(-2*Math.abs(a));var c=(1-b)/(1+b);return a<0?-c:c};return b},'es6-impl','es3');$jscomp.polyfill('Math.trunc',function(a){if(a){return a}var b=function(a){a=Number(a);if(isNaN(a)||a===Infinity||a===-Infinity||a===0){return a}var b=Math.floor(Math.abs(a));return a<0?-b:b};return b},'es6-impl','es3');$jscomp.polyfill('Number.EPSILON',function(a){return Math.pow(2,-52)},'es6-impl','es3');$jscomp.polyfill('Number.MAX_SAFE_INTEGER',function(){return 9.007199254740991E15},'es6-impl','es3');$jscomp.polyfill('Number.MIN_SAFE_INTEGER',function(){return -9.007199254740991E15},'es6-impl','es3');$jscomp.polyfill('Number.isFinite',function(a){if(a){return a}var b=function(a){if(typeof a!=='number'){return !1}return !isNaN(a)&&a!==Infinity&&a!==-Infinity};return b},'es6-impl','es3');$jscomp.polyfill('Number.isInteger',function(a){if(a){return a}var b=function(a){if(!Number.isFinite(a)){return !1}return a===Math.floor(a)};return b},'es6-impl','es3');$jscomp.polyfill('Number.isNaN',function(a){if(a){return a}var b=function(a){return typeof a==='number'&&isNaN(a)};return b},'es6-impl','es3');$jscomp.polyfill('Number.isSafeInteger',function(a){if(a){return a}var b=function(a){return Number.isInteger(a)&&Math.abs(a)<=Number.MAX_SAFE_INTEGER};return b},'es6-impl','es3');$jscomp.polyfill('Object.assign',function(a){if(a){return a}var b=function(d,e){for(var c=1;c<arguments.length;c++){var a=arguments[c];if(!a){continue}for(var b in a){if($jscomp.owns(a,b)){d[b]=a[b]}}}return d};return b},'es6-impl','es3');$jscomp.polyfill('Object.getOwnPropertySymbols',function(a){if(a){return a}return function(){return []}},'es6-impl','es5');$jscomp.polyfill('Object.is',function(a){if(a){return a}var b=function(a,b){if(a===b){return a!==0||1/a===1/(b)}else {return a!==a&&b!==b}};return b},'es6-impl','es3');$jscomp.polyfill('Object.setPrototypeOf',function(a){if(a){return a}if(typeof ''.__proto__!='object'){return null}var b=function(a,b){a.__proto__=b;if(a.__proto__!==b){throw new TypeError(a+' is not extensible')}return a};return b},'es6','es5');$jscomp.EXPOSE_ASYNC_EXECUTOR=!0;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.polyfill('Promise',function(c){if(c&&!$jscomp.FORCE_POLYFILL_PROMISE){return c}function AsyncExecutor(){this.batch_=null}AsyncExecutor.prototype.asyncExecute=function(a){if(this.batch_==null){this.batch_=[];this.asyncExecuteBatch_()}this.batch_.push(a);return this};AsyncExecutor.prototype.asyncExecuteBatch_=function(){var a=this;this.asyncExecuteFunction(function(){a.executeBatch_()})};var e=$jscomp.global['setTimeout'];AsyncExecutor.prototype.asyncExecuteFunction=function(a){e(a,0)};AsyncExecutor.prototype.executeBatch_=function(){while(this.batch_&&this.batch_.length){var b=this.batch_;this.batch_=[];for(var a=0;a<b.length;++a){var c=b[a];delete b[a];try{c()}catch(f){this.asyncThrow_(f)}}}this.batch_=null};AsyncExecutor.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a})};var b={PENDING:0,FULFILLED:1,REJECTED:2};var a=function(c){this.state_=b.PENDING;this.result_=undefined;this.onSettledCallbacks_=[];var a=this.createResolveAndReject_();try{c(a.resolve,a.reject)}catch(f){a.reject(f)}};a.prototype.createResolveAndReject_=function(){var b=this;var a=!1;function firstCallWins(c){return function(d){if(!a){a=!0;c.call(b,d)}}}return {resolve:firstCallWins(this.resolveTo_),reject:firstCallWins(this.reject_)}};a.prototype.resolveTo_=function(b){if(b===this){this.reject_(new TypeError('A Promise cannot resolve to itself'))}else {if(b instanceof a){this.settleSameAsPromise_((b))}else {if(isObject(b)){this.resolveToNonPromiseObj_((b))}else {this.fulfill_(b)}}}};a.prototype.resolveToNonPromiseObj_=function(b){var a=undefined;try{a=b.then}catch(f){this.reject_(f);return}if(typeof a=='function'){this.settleSameAsThenable_(a,(b))}else {this.fulfill_(b)}};function isObject(a){switch(typeof a){case 'object':return a!=null;case 'function':return !0;default:return !1;}}a.prototype.reject_=function(a){this.settle_(b.REJECTED,a)};a.prototype.fulfill_=function(a){this.settle_(b.FULFILLED,a)};a.prototype.settle_=function(c,a){if(this.state_!=b.PENDING){throw new Error('Cannot settle('+c+', '+a|'): Promise already settled in state'+this.state_)}this.state_=c;this.result_=a;this.executeOnSettledCallbacks_()};a.prototype.executeOnSettledCallbacks_=function(){if(this.onSettledCallbacks_!=null){var b=this.onSettledCallbacks_;for(var a=0;a<b.length;++a){(b[a]).call();b[a]=null}this.onSettledCallbacks_=null}};var d=new AsyncExecutor();a.prototype.settleSameAsPromise_=function(b){var a=this.createResolveAndReject_();b.callWhenSettled_(a.resolve,a.reject)};a.prototype.settleSameAsThenable_=function(b,c){var a=this.createResolveAndReject_();try{b.call(c,a.resolve,a.reject)}catch(f){a.reject(f)}};a.prototype.then=function(e,f){var b;var c;var d=new a(function(a,d){b=a;c=d});function createCallback(a,d){if(typeof a=='function'){return function(d){try{b(a(d))}catch(g){c(g)}}}else {return d}}this.callWhenSettled_(createCallback(e,b),createCallback(f,c));return d};a.prototype['catch']=function(a){return this.then(undefined,a)};a.prototype.callWhenSettled_=function(c,e){var a=this;function callback(){switch(a.state_){case b.FULFILLED:c(a.result_);break;case b.REJECTED:e(a.result_);break;default:throw new Error('Unexpected state: '+a.state_);}}if(this.onSettledCallbacks_==null){d.asyncExecute(callback)}else {this.onSettledCallbacks_.push(function(){d.asyncExecute(callback)})}};a.resolve=function(b){if(b instanceof a){return b}else {return new a(function(a,c){a(b)})}};a.reject=function(b){return new a(function(c,a){a(b)})};a.race=function(b){return new a(function(e,f){var d=$jscomp.makeIterator(b);for(var c=d.next();!c.done;c=d.next()){a.resolve(c.value).callWhenSettled_(e,f)}})};a.all=function(d){var c=$jscomp.makeIterator(d);var b=c.next();if(b.done){return a.resolve([])}else {return new a(function(f,g){var d=[];var e=0;function onFulfilled(a){return function(b){d[a]=b;e--;if(e==0){f(d)}}}do{d.push(undefined);e++;a.resolve(b.value).callWhenSettled_(onFulfilled(d.length-1),g);b=c.next()}while(!b.done)})}};if($jscomp.EXPOSE_ASYNC_EXECUTOR){a['$jscomp$new$AsyncExecutor']=function(){return new AsyncExecutor()}}return a},'es6-impl','es3');$jscomp.polyfill('Reflect.apply',function(a){if(a){return a}var c=Function.prototype.apply;var b=function(d,b,a){return c.call(d,b,a)};return b},'es6','es3');$jscomp.polyfill('Reflect.construct',function(a){if(a){return a}var b=function(b,d,a){if(a===undefined){a=b}var e=a.prototype||Object.prototype;var c=Object.create(e);var f=Reflect.apply(b,c,d);return f||c};return b},'es6','es5');$jscomp.polyfill('Reflect.defineProperty',function(a){if(a){return a}var b=function(d,c,b){try{Object.defineProperty(d,c,b);var a=Object.getOwnPropertyDescriptor(d,c);if(!a){return !1}return a.configurable===(b.configurable||!1)&&a.enumerable===(b.enumerable||!1)&&('value' in a?a.value===b.value&&a.writable===(b.writable||!1):a.get===b.get&&a.set===b.set)}catch(e){return !1}};return b},'es6','es5');$jscomp.polyfill('Reflect.deleteProperty',function(a){if(a){return a}var b=function(b,a){if(!$jscomp.owns(b,a)){return !0}try{return delete b[a]}catch(c){return !1}};return b},'es6','es3');$jscomp.polyfill('Reflect.getOwnPropertyDescriptor',function(a){return a||Object.getOwnPropertyDescriptor},'es6','es5');$jscomp.polyfill('Reflect.getPrototypeOf',function(a){return a||Object.getPrototypeOf},'es6','es5');$jscomp.findDescriptor=function(d,c){var a=d;while(a){var b=Reflect.getOwnPropertyDescriptor(a,c);if(b){return b}a=Reflect.getPrototypeOf(a)}return undefined};$jscomp.polyfill('Reflect.get',function(a){if(a){return a}var b=function(c,b,d){if(arguments.length<=2){return c[b]}var a=$jscomp.findDescriptor(c,b);if(a){return a.get?a.get.call(d):a.value}return undefined};return b},'es6','es5');$jscomp.polyfill('Reflect.has',function(a){if(a){return a}var b=function(b,a){return a in b};return b},'es6','es3');$jscomp.polyfill('Reflect.isExtensible',function(a){if(a){return a}if(typeof Object.isExtensible=='function'){return Object.isExtensible}return function(){return !0}},'es6','es3');$jscomp.polyfill('Reflect.ownKeys',function(b){if(b){return b}var a='jscomp_symbol_';function isSymbol(b){return b.substring(0,a.length)==a}var c=function(d){var e=[];var b=Object.getOwnPropertyNames(d);var c=Object.getOwnPropertySymbols(d);for(var a=0;a<b.length;a++){(isSymbol(b[a])?c:e).push(b[a])}return e.concat(c)};return c},'es6','es5');$jscomp.polyfill('Reflect.preventExtensions',function(a){if(a){return a}if(typeof Object.preventExtensions!='function'){return function(){return !1}}var b=function(a){Object.preventExtensions(a);return !Object.isExtensible(a)};return b},'es6','es3');$jscomp.polyfill('Reflect.set',function(a){if(a){return a}var b=function(a,c,d,e){var b=$jscomp.findDescriptor(a,c);if(!b){if(Reflect.isExtensible(a)){a[c]=d;return !0}return !1}if(b.set){b.set.call(arguments.length>3?e:a,d);return !0}else {if(b.writable&&!Object.isFrozen(a)){a[c]=d;return !0}}return !1};return b},'es6','es5');$jscomp.polyfill('Reflect.setPrototypeOf',function(a){if(a){return a}if(typeof ''.__proto__!='object'){return null}var b=function(a,b){try{a.__proto__=b;return a.__proto__===b}catch(c){return !1}};return b},'es6','es5');$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.polyfill('Set',function(b){var c=!$jscomp.ASSUME_NO_NATIVE_SET&&function(){if(!b||!b.prototype.entries||typeof Object.seal!='function'){return !1}try{b=(b);var d=Object.seal({x:4});var c=new b($jscomp.makeIterator([d]));if(!c.has(d)||c.size!=1||c.add(d)!=c||c.size!=1||c.add({x:4})!=c||c.size!=2){return !1}var e=c.entries();var a=e.next();if(a.done||a.value[0]!=d||a.value[1]!=d){return !1}a=e.next();if(a.done||a.value[0]==d||a.value[0].x!=4||a.value[1]!=a.value[0]){return !1}return e.next().done}catch(f){return !1}}();if(c){return b}$jscomp.initSymbol();$jscomp.initSymbolIterator();var a=function(a){this.map_=new Map();if(a){var d=$jscomp.makeIterator(a);var b;while(!(b=d.next()).done){var c=(b).value;this.add(c)}}this.size=this.map_.size};a.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};a.prototype['delete']=function(b){var a=this.map_['delete'](b);this.size=this.map_.size;return a};a.prototype.clear=function(){this.map_.clear();this.size=0};a.prototype.has=function(a){return this.map_.has(a)};a.prototype.entries=function(){return this.map_.entries()};a.prototype.values=function(){return this.map_.values()};(a.prototype)[Symbol.iterator]=a.prototype.values;a.prototype.forEach=function(b,a){var c=this;this.map_.forEach(function(d){return b.call((a),d,d,c)})};return a},'es6-impl','es3');$jscomp.checkStringArgs=function(a,c,b){if(a==null){throw new TypeError("The 'this' value for String.prototype."+b+' must not be null or undefined')}if(c instanceof RegExp){throw new TypeError('First argument to String.prototype.'+b+' must not be a regular expression')}return a+''};$jscomp.polyfill('String.prototype.codePointAt',function(a){if(a){return a}var b=function(a){var d=$jscomp.checkStringArgs(this,null,'codePointAt');var e=d.length;a=Number(a)||0;if(!(a>=0&&a<e)){return void 0}a=a|0;var b=d.charCodeAt(a);if(b<55296||b>56319||a+1===e){return b}var c=d.charCodeAt(a+1);if(c<56320||c>57343){return b}return (b-55296)*1024+c+9216};return b},'es6-impl','es3');$jscomp.polyfill('String.prototype.endsWith',function(a){if(a){return a}var b=function(a,b){var c=$jscomp.checkStringArgs(this,a,'endsWith');a=a+'';if(b===void 0){b=c.length}var e=Math.max(0,Math.min(b|0,c.length));var d=a.length;while(d>0&&e>0){if(c[--e]!=a[--d]){return !1}}return d<=0};return b},'es6-impl','es3');$jscomp.polyfill('String.fromCodePoint',function(a){if(a){return a}var b=function(d){var b='';for(var c=0;c<arguments.length;c++){var a=Number(arguments[c]);if(a<0||a>1114111||a!==Math.floor(a)){throw new RangeError('invalid_code_point '+a)}if(a<=65535){b+=String.fromCharCode(a)}else {a-=65536;b+=String.fromCharCode(a>>>10&1023|55296);b+=String.fromCharCode(a&1023|56320)}}return b};return b},'es6-impl','es3');$jscomp.polyfill('String.prototype.includes',function(a){if(a){return a}var b=function(a,b){var c=$jscomp.checkStringArgs(this,a,'includes');return c.indexOf(a,b||0)!==-1};return b},'es6-impl','es3');$jscomp.polyfill('String.prototype.repeat',function(a){if(a){return a}var b=function(a){var b=$jscomp.checkStringArgs(this,null,'repeat');if(a<0||a>1342177279){throw new RangeError('Invalid count value')}a=a|0;var c='';while(a){if(a&1){c+=b}if(a>>>=1){b+=b}}return c};return b},'es6-impl','es3');$jscomp.polyfill('String.prototype.startsWith',function(a){if(a){return a}var b=function(a,f){var b=$jscomp.checkStringArgs(this,a,'startsWith');a=a+'';var g=b.length;var d=a.length;var e=Math.max(0,Math.min((f)|0,b.length));var c=0;while(c<d&&e<g){if(b[e++]!=a[c++]){return !1}}return c>=d};return b},'es6-impl','es3');$jscomp.arrayFromIterator=function(c){var b;var a=[];while(!(b=c.next()).done){a.push(b.value)}return a};$jscomp.arrayFromIterable=function(a){if(a instanceof Array){return a}else {return $jscomp.arrayFromIterator($jscomp.makeIterator(a))}};$jscomp.inherits=function(a,b){function tempCtor(){}tempCtor.prototype=b.prototype;a.prototype=new tempCtor();a.prototype.constructor=a;for(var c in b){if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);if(d){Object.defineProperty(a,c,d)}}else {a[c]=b[c]}}};$jscomp.polyfill('WeakSet',function(b){function isConformant(){if(!b||!Object.seal){return !1}try{var c=Object.seal({});var d=Object.seal({});var a=new (b)([c]);if(!a.has(c)||a.has(d)){return !1}a['delete'](c);a.add(d);return !a.has(c)&&a.has(d)}catch(e){return !1}}if(isConformant()){return b}var a=function(a){this.map_=new WeakMap();if(a){$jscomp.initSymbol();$jscomp.initSymbolIterator();var d=$jscomp.makeIterator(a);var b;while(!(b=d.next()).done){var c=b.value;this.add(c)}}};a.prototype.add=function(a){this.map_.set(a,!0);return this};a.prototype.has=function(a){return this.map_.has(a)};a.prototype['delete']=function(a){return this.map_['delete'](a)};return a},'es6-impl','es3');try{if(Array.prototype.values.toString().indexOf('[native code]')==-1){delete Array.prototype.values}}catch(a){}Ext.onReady(function(){var a;if(Ext.Date){Ext.Date.monthNames=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];Ext.Date.getShortMonthName=function(a){return ''+(a+1)};Ext.Date.monthNumbers={1:0,2:1,3:2,4:3,5:4,6:5,7:6,8:7,9:8,10:9,11:10,12:11};Ext.Date.getMonthNumber=function(a){return Ext.Date.monthNumbers[a.substring(0,a.length-1)]};Ext.Date.dayNames=['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'];Ext.Date.getShortDayName=function(a){return Ext.Date.dayNames[a].substring(0,1)};Ext.Date.formatCodes.a="(this.getHours() < 12 ? '午前' : '午後')";Ext.Date.formatCodes.A="(this.getHours() < 12 ? '午前' : '午後')";a={g:1,c:'if (/(午前)/i.test(results[{0}])) {\n'+'if (!h || h == 12) { h = 0; }\n'+'} else { if (!h || h < 12) { h = (h || 0) + 12; }}',s:'(午前|午後)',calcAtEnd:!0};Ext.Date.parseCodes.a=Ext.Date.parseCodes.A=a}if(Ext.util&&Ext.util.Format){Ext.apply(Ext.util.Format,{thousandSeparator:',',decimalSeparator:'.',currencySign:'¥',dateFormat:'Y/m/d'})}});Ext.define('Ext.locale.ja.LoadMask',{override:'Ext.LoadMask',msg:'読み込み中...'});Ext.define('Ext.locale.ja.view.View',{override:'Ext.view.View',emptyText:''});Ext.define('Ext.locale.ja.grid.plugin.DragDrop',{override:'Ext.grid.plugin.DragDrop',dragText:'{0} 行選択'});Ext.define('Ext.locale.ja.view.AbstractView',{override:'Ext.view.AbstractView',loadingText:'読み込み中...'});Ext.define('Ext.locale.ja.picker.Date',{override:'Ext.picker.Date',todayText:'今日',minText:'選択した日付は最小値以下です。',maxText:'選択した日付は最大値以上です。',disabledDaysText:'',disabledDatesText:'',nextText:'次月へ (コントロール+右)',prevText:'前月へ (コントロール+左)',monthYearText:'月選択 (コントロール+上/下で年移動)',todayTip:'{0} (スペースキー)',format:'Y/m/d',startDay:0,ariaTitle:'{0}',ariaTitleDateFormat:'Y年m月d日',longDayFormat:'Y年m月d日',monthYearFormat:'Y年m月'});Ext.define('Ext.locale.ja.picker.Month',{override:'Ext.picker.Month',okText:'&#160;OK&#160;',cancelText:'キャンセル'});Ext.define('Ext.locale.ja.toolbar.Paging',{override:'Ext.PagingToolbar',beforePageText:'ページ',afterPageText:'/ {0}',firstText:'最初のページ',prevText:'前のページ',nextText:'次のページ',lastText:'最後のページ',refreshText:'更新',displayMsg:'{2} 件中 {0} - {1} を表示',emptyMsg:'表示するデータがありません。'});Ext.define('Ext.locale.ja.form.field.Base',{override:'Ext.form.field.Base',invalidText:'フィールドの値が不正です。'});Ext.define('Ext.locale.ja.form.field.Text',{override:'Ext.form.field.Text',minLengthText:'このフィールドの最小値は {0} です。',maxLengthText:'このフィールドの最大値は {0} です。',blankText:'必須項目です。',regexText:'',emptyText:null});Ext.define('Ext.locale.ja.form.field.File',{override:'Ext.form.field.File',buttonText:'参照...'});Ext.define('Ext.locale.ja.form.field.Number',{override:'Ext.form.field.Number',decimalPrecision:2,minText:'このフィールドの最小値は {0} です。',maxText:'このフィールドの最大値は {0} です。',nanText:'{0} は数値ではありません。',negativeText:'負の値は無効です。'});Ext.define('Ext.locale.ja.form.field.Date',{override:'Ext.form.field.Date',disabledDaysText:'無効',disabledDatesText:'無効',minText:'このフィールドの日付は、 {0} 以降の日付に設定してください。',maxText:'このフィールドの日付は、 {0} 以前の日付に設定してください。',invalidText:'{0} は間違った日付入力です。 - 入力形式は「{1}」です。',format:'Y/m/d',altFormats:'y/m/d|m/d/y|m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d'});Ext.define('Ext.locale.ja.form.field.ComboBox',{override:'Ext.form.field.ComboBox',valueNotFoundText:undefined},function(){Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig,{loadingText:'読み込み中...'})});Ext.define('Ext.locale.ja.form.field.VTypes',{override:'Ext.form.field.VTypes',emailText:'メールアドレスを"user@example.com"の形式で入力してください。',urlText:'URLを"http:/'+'/www.example.com"の形式で入力してください。',alphaText:'半角英字と"_"のみです。',alphanumText:'半角英数と"_"のみです。'});Ext.define('Ext.locale.ja.form.field.HtmlEditor',{override:'Ext.form.field.HtmlEditor',createLinkText:'リンクのURLを入力してください:'},function(){Ext.apply(Ext.form.field.HtmlEditor.prototype,{buttonTips:{bold:{title:'太字 (コントロール+B)',text:'選択テキストを太字にします。',cls:Ext.baseCSSPrefix+'html-editor-tip'},italic:{title:'斜体 (コントロール+I)',text:'選択テキストを斜体にします。',cls:Ext.baseCSSPrefix+'html-editor-tip'},underline:{title:'下線 (コントロール+U)',text:'選択テキストに下線を引きます。',cls:Ext.baseCSSPrefix+'html-editor-tip'},increasefontsize:{title:'文字を大きく',text:'フォントサイズを大きくします。',cls:Ext.baseCSSPrefix+'html-editor-tip'},decreasefontsize:{title:'文字を小さく',text:'フォントサイズを小さくします。',cls:Ext.baseCSSPrefix+'html-editor-tip'},backcolor:{title:'文字のハイライト',text:'選択テキストの背景色を変更します。',cls:Ext.baseCSSPrefix+'html-editor-tip'},forecolor:{title:'文字の色',text:'選択テキストの色を変更します。',cls:Ext.baseCSSPrefix+'html-editor-tip'},justifyleft:{title:'左揃え',text:'テキストを左揃えにします。',cls:Ext.baseCSSPrefix+'html-editor-tip'},justifycenter:{title:'中央揃え',text:'テキストを中央揃えにします。',cls:Ext.baseCSSPrefix+'html-editor-tip'},justifyright:{title:'右揃え',text:'テキストを右揃えにします。',cls:Ext.baseCSSPrefix+'html-editor-tip'},insertunorderedlist:{title:'番号なし箇条書き',text:'番号なし箇条書きを開始します。',cls:Ext.baseCSSPrefix+'html-editor-tip'},insertorderedlist:{title:'番号付き箇条書き',text:'番号付き箇条書きを開始します。',cls:Ext.baseCSSPrefix+'html-editor-tip'},createlink:{title:'ハイパーリンク',text:'選択テキストをハイパーリンクにします。',cls:Ext.baseCSSPrefix+'html-editor-tip'},sourceedit:{title:'ソース編集',text:'ソース編集モードに切り替えます。',cls:Ext.baseCSSPrefix+'html-editor-tip'}}})});Ext.define('Ext.locale.ja.grid.header.Container',{override:'Ext.grid.header.Container',sortAscText:'昇順',sortDescText:'降順',columnsText:'カラム'});Ext.define('Ext.locale.ja.grid.column.Date',{override:'Ext.grid.column.Date',format:'Y/m/d'});Ext.define('Ext.locale.ja.grid.GroupingFeature',{override:'Ext.grid.feature.Grouping',emptyGroupText:'(なし)',groupByText:'このカラムでグルーピング',showGroupsText:'グルーピング'});Ext.define('Ext.locale.ja.grid.PropertyColumnModel',{override:'Ext.grid.PropertyColumnModel',nameText:'名称',valueText:'値',dateFormat:'Y/m/d'});Ext.define('Ext.locale.ja.form.field.Time',{override:'Ext.form.field.Time',minText:'このフィールドの時刻は、 {0} 以降の時刻に設定してください。',maxText:'このフィールドの時刻は、 {0} 以前の時刻に設定してください。',invalidText:'{0} は間違った時刻入力です。',format:'g:i A',altFormats:'g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H'});Ext.define('Ext.locale.ja.form.CheckboxGroup',{override:'Ext.form.CheckboxGroup',blankText:'このグループから最低１つのアイテムを選択しなければなりません。'});Ext.define('Ext.locale.ja.form.RadioGroup',{override:'Ext.form.RadioGroup',blankText:'このグループから１つのアイテムを選択しなければなりません。'});Ext.define('Ext.locale.ja.window.MessageBox',{override:'Ext.window.MessageBox',buttonText:{ok:'OK',cancel:'キャンセル',yes:'はい',no:'いいえ'}});Ext.define('Ext.locale.ja.Component',{override:'Ext.Component'});