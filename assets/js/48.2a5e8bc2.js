(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{531:function(e,t,v){"use strict";v.r(t);var s=v(28),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"浏览器基础知识点及常考面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器基础知识点及常考面试题"}},[e._v("#")]),e._v(" 浏览器基础知识点及常考面试题")]),e._v(" "),v("p",[e._v("这一章节我们将会来学习浏览器的一些基础知识点，包括：事件机制、跨域、存储相关，这几个知识点也是面试经常会考到的内容。")]),e._v(" "),v("h2",{attrs:{id:"事件机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件机制"}},[e._v("#")]),e._v(" 事件机制")]),e._v(" "),v("blockquote",[v("p",[e._v("涉及面试题：事件的触发过程是怎么样的？知道什么是事件代理嘛？")])]),e._v(" "),v("h3",{attrs:{id:"事件触发三阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件触发三阶段"}},[e._v("#")]),e._v(" 事件触发三阶段")]),e._v(" "),v("p",[e._v("事件触发有三个阶段：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("window")]),e._v(" 往事件触发处传播，遇到注册的捕获事件会触发")]),e._v(" "),v("li",[e._v("传播到事件触发处时触发注册的事件")]),e._v(" "),v("li",[e._v("从事件触发处往 "),v("code",[e._v("window")]),e._v(" 传播，遇到注册的冒泡事件会触发")])]),e._v(" "),v("p",[e._v("事件触发一般来说会按照上面的顺序进行，但是也有特例，"),v("strong",[e._v("如果给一个 "),v("code",[e._v("body")]),e._v(" 中的子节点同时注册冒泡和捕获事件，事件触发会按照注册的顺序执行。")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("// 以下会先打印冒泡然后是捕获\nnode.addEventListener(\n  'click',\n  event => {\n    console.log('冒泡')\n  },\n  false\n)\nnode.addEventListener(\n  'click',\n  event => {\n    console.log('捕获 ')\n  },\n  true\n)\n\n")])])]),v("h3",{attrs:{id:"注册事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注册事件"}},[e._v("#")]),e._v(" 注册事件")]),e._v(" "),v("p",[e._v("通常我们使用 "),v("code",[e._v("addEventListener")]),e._v(" 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 "),v("code",[e._v("useCapture")]),e._v(" 参数来说，该参数默认值为 "),v("code",[e._v("false")]),e._v(" ，"),v("code",[e._v("useCapture")]),e._v(" 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("capture")]),e._v("：布尔值，和 "),v("code",[e._v("useCapture")]),e._v(" 作用一样")]),e._v(" "),v("li",[v("code",[e._v("once")]),e._v("：布尔值，值为 "),v("code",[e._v("true")]),e._v(" 表示该回调只会调用一次，调用后会移除监听")]),e._v(" "),v("li",[v("code",[e._v("passive")]),e._v("：布尔值，表示永远不会调用 "),v("code",[e._v("preventDefault")])])]),e._v(" "),v("p",[e._v("一般来说，如果我们只希望事件只触发在目标上，这时候可以使用 "),v("code",[e._v("stopPropagation")]),e._v(" 来阻止事件的进一步传播。通常我们认为 "),v("code",[e._v("stopPropagation")]),e._v(" 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件。"),v("code",[e._v("stopImmediatePropagation")]),e._v(" 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("node.addEventListener(\n  'click',\n  event => {\n    event.stopImmediatePropagation()\n    console.log('冒泡')\n  },\n  false\n)\n// 点击 node 只会执行上面的函数，该函数不会执行\nnode.addEventListener(\n  'click',\n  event => {\n    console.log('捕获 ')\n  },\n  true\n)\n\n")])])]),v("h3",{attrs:{id:"事件代理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件代理"}},[e._v("#")]),e._v(" 事件代理")]),e._v(" "),v("p",[e._v("如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话"),v("strong",[e._v("应该注册在父节点上")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("<ul id=\"ul\">\n\t<li>1</li>\n    <li>2</li>\n\t<li>3</li>\n\t<li>4</li>\n\t<li>5</li>\n</ul>\n<script>\n\tlet ul = document.querySelector('#ul')\n\tul.addEventListener('click', (event) => {\n\t\tconsole.log(event.target);\n\t})\n<\/script>\n\n")])])]),v("p",[e._v("事件代理的方式相较于直接给目标注册事件来说，有以下优点：")]),e._v(" "),v("ul",[v("li",[e._v("节省内存")]),e._v(" "),v("li",[e._v("不需要给子节点注销事件")])]),e._v(" "),v("h2",{attrs:{id:"跨域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[e._v("#")]),e._v(" 跨域")]),e._v(" "),v("blockquote",[v("p",[e._v("涉及面试题：什么是跨域？为什么浏览器要使用同源策略？你有几种方式可以解决跨域问题？了解预检请求嘛？")])]),e._v(" "),v("p",[e._v("因为浏览器出于安全考虑，有同源策略。也就是说，如果协议、域名或者端口有一个不同就是跨域，Ajax 请求会失败。")]),e._v(" "),v("p",[v("strong",[e._v("那么是出于什么安全考虑才会引入这种机制呢？")]),e._v(" 其实主要是用来防止 CSRF 攻击的。简单点说，CSRF 攻击是利用用户的登录态发起恶意请求。")]),e._v(" "),v("p",[e._v("也就是说，没有同源策略的情况下，A 网站可以被任意其他来源的 Ajax 访问到内容。如果你当前 A 网站还存在登录态，那么对方就可以通过 Ajax 获得你的任何信息。当然跨域并不能完全阻止 CSRF。")]),e._v(" "),v("p",[v("strong",[e._v("然后我们来考虑一个问题，请求跨域了，那么请求到底发出去没有？")]),e._v(" 请求必然是发出去了，但是浏览器拦截了响应。你可能会疑问明明通过表单的方式可以发起跨域请求，为什么 Ajax 就不会。因为归根结底，跨域是为了阻止用户读取到另一个域名下的内容，Ajax 可以获取响应，浏览器认为这不安全，所以拦截了响应。但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。")]),e._v(" "),v("p",[e._v("接下来我们将来学习几种常见的方式来解决跨域的问题。")]),e._v(" "),v("h3",{attrs:{id:"jsonp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[e._v("#")]),e._v(" JSONP")]),e._v(" "),v("p",[e._v("JSONP 的原理很简单，就是利用 "),v("code",[e._v("<script>")]),e._v(" 标签没有跨域限制的漏洞。通过 "),v("code",[e._v("<script>")]),e._v(" 标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('<script src="http://domain/api?param1=a&param2=b&callback=jsonp"><\/script>\n<script>\n    function jsonp(data) {\n    \tconsole.log(data)\n\t}\n<\/script>    \n\n')])])]),v("p",[e._v("JSONP 使用简单且兼容性不错，但是只限于 "),v("code",[e._v("get")]),e._v(" 请求。")]),e._v(" "),v("p",[e._v("在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP，以下是简单实现")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("function jsonp(url, jsonpCallback, success) {\n  let script = document.createElement('script')\n  script.src = url\n  script.async = true\n  script.type = 'text/javascript'\n  window[jsonpCallback] = function(data) {\n    success && success(data)\n  }\n  document.body.appendChild(script)\n}\njsonp('http://xxx', 'callback', function(value) {\n  console.log(value)\n})\n\n")])])]),v("h3",{attrs:{id:"cors"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[e._v("#")]),e._v(" CORS")]),e._v(" "),v("p",[e._v("CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 "),v("code",[e._v("XDomainRequest")]),e._v(" 来实现。")]),e._v(" "),v("p",[e._v("浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。")]),e._v(" "),v("p",[e._v("服务端设置 "),v("code",[e._v("Access-Control-Allow-Origin")]),e._v(" 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。")]),e._v(" "),v("p",[e._v("虽然设置 CORS 和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为"),v("strong",[e._v("简单请求和复杂请求")]),e._v("。")]),e._v(" "),v("h4",{attrs:{id:"简单请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[e._v("#")]),e._v(" 简单请求")]),e._v(" "),v("p",[e._v("以 Ajax 为例，当满足以下条件时，会触发简单请求")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("使用下列方法之一：")]),e._v(" "),v("ul",[v("li",[v("p",[v("code",[e._v("GET")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("HEAD")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("POST")])])])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("Content-Type")]),e._v(" 的值仅限于下列三者之一：")]),e._v(" "),v("ul",[v("li",[v("p",[v("code",[e._v("text/plain")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("multipart/form-data")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("application/x-www-form-urlencoded")])])])])])]),e._v(" "),v("p",[e._v("请求中的任意 "),v("code",[e._v("XMLHttpRequestUpload")]),e._v(" 对象均没有注册任何事件监听器； "),v("code",[e._v("XMLHttpRequestUpload")]),e._v(" 对象可以使用 "),v("code",[e._v("XMLHttpRequest.upload")]),e._v(" 属性访问。")]),e._v(" "),v("h4",{attrs:{id:"复杂请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复杂请求"}},[e._v("#")]),e._v(" 复杂请求")]),e._v(" "),v("p",[e._v("那么很显然，不符合以上条件的请求就肯定是复杂请求了。")]),e._v(" "),v("p",[e._v("对于复杂请求来说，首先会发起一个预检请求，该请求是 "),v("code",[e._v("option")]),e._v(" 方法的，通过该请求来知道服务端是否允许跨域请求。")]),e._v(" "),v("p",[e._v("对于预检请求来说，如果你使用过 Node 来设置 CORS 的话，可能会遇到过这么一个坑。")]),e._v(" "),v("p",[e._v("以下以 express 框架举例：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("app.use((req, res, next) => {\n  res.header('Access-Control-Allow-Origin', '*')\n  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')\n  res.header(\n    'Access-Control-Allow-Headers',\n    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'\n  )\n  next()\n})\n\n")])])]),v("p",[e._v("该请求会验证你的 "),v("code",[e._v("Authorization")]),e._v(" 字段，没有的话就会报错。")]),e._v(" "),v("p",[e._v("当前端发起了复杂请求后，你会发现就算你代码是正确的，返回结果也永远是报错的。因为预检请求也会进入回调中，也会触发 "),v("code",[e._v("next")]),e._v(" 方法，因为预检请求并不包含 "),v("code",[e._v("Authorization")]),e._v(" 字段，所以服务端会报错。")]),e._v(" "),v("p",[e._v("想解决这个问题很简单，只需要在回调中过滤 "),v("code",[e._v("option")]),e._v(" 方法即可")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("res.statusCode = 204\nres.setHeader('Content-Length', '0')\nres.end()\n\n")])])]),v("h3",{attrs:{id:"document-domain"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#document-domain"}},[e._v("#")]),e._v(" document.domain")]),e._v(" "),v("p",[e._v("该方式只能用于"),v("strong",[e._v("二级域名相同")]),e._v("的情况下，比如 "),v("code",[e._v("a.test.com")]),e._v(" 和 "),v("code",[e._v("b.test.com")]),e._v(" 适用于该方式。")]),e._v(" "),v("p",[e._v("只需要给页面添加 "),v("code",[e._v("document.domain = 'test.com'")]),e._v(" 表示二级域名都相同就可以实现跨域")]),e._v(" "),v("h3",{attrs:{id:"postmessage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#postmessage"}},[e._v("#")]),e._v(" postMessage")]),e._v(" "),v("p",[e._v("这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("// 发送消息端\nwindow.parent.postMessage('message', 'http://test.com')\n// 接收消息端\nvar mc = new MessageChannel()\nmc.addEventListener('message', event => {\n  var origin = event.origin || event.originalEvent.origin\n  if (origin === 'http://test.com') {\n    console.log('验证通过')\n  }\n})\n\n")])])]),v("h2",{attrs:{id:"存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[e._v("#")]),e._v(" 存储")]),e._v(" "),v("blockquote",[v("p",[e._v("涉及面试题：有几种方式可以实现存储功能，分别有什么优缺点？什么是 Service Worker？")])]),e._v(" "),v("h3",{attrs:{id:"cookie-localstorage-sessionstorage-indexdb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie-localstorage-sessionstorage-indexdb"}},[e._v("#")]),e._v(" cookie，localStorage，sessionStorage，indexDB")]),e._v(" "),v("p",[e._v("我们先来通过表格学习下这几种存储方式的区别")]),e._v(" "),v("p",[e._v("特性")]),e._v(" "),v("p",[e._v("cookie")]),e._v(" "),v("p",[e._v("localStorage")]),e._v(" "),v("p",[e._v("sessionStorage")]),e._v(" "),v("p",[e._v("indexDB")]),e._v(" "),v("p",[e._v("数据生命周期")]),e._v(" "),v("p",[e._v("一般由服务器生成，可以设置过期时间")]),e._v(" "),v("p",[e._v("除非被清理，否则一直存在")]),e._v(" "),v("p",[e._v("页面关闭就清理")]),e._v(" "),v("p",[e._v("除非被清理，否则一直存在")]),e._v(" "),v("p",[e._v("数据存储大小")]),e._v(" "),v("p",[e._v("4K")]),e._v(" "),v("p",[e._v("5M")]),e._v(" "),v("p",[e._v("5M")]),e._v(" "),v("p",[e._v("无限")]),e._v(" "),v("p",[e._v("与服务端通信")]),e._v(" "),v("p",[e._v("每次都会携带在 header 中，对于请求性能影响")]),e._v(" "),v("p",[e._v("不参与")]),e._v(" "),v("p",[e._v("不参与")]),e._v(" "),v("p",[e._v("不参与")]),e._v(" "),v("p",[e._v("从上表可以看到，"),v("code",[e._v("cookie")]),e._v(" 已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 "),v("code",[e._v("localStorage")]),e._v(" 和 "),v("code",[e._v("sessionStorage")]),e._v(" 。对于不怎么改变的数据尽量使用 "),v("code",[e._v("localStorage")]),e._v(" 存储，否则可以用 "),v("code",[e._v("sessionStorage")]),e._v(" 存储。")]),e._v(" "),v("p",[e._v("对于 "),v("code",[e._v("cookie")]),e._v(" 来说，我们还需要注意安全性。")]),e._v(" "),v("p",[e._v("属性")]),e._v(" "),v("p",[e._v("作用")]),e._v(" "),v("p",[e._v("value")]),e._v(" "),v("p",[e._v("如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识")]),e._v(" "),v("p",[e._v("http-only")]),e._v(" "),v("p",[e._v("不能通过 JS 访问 Cookie，减少 XSS 攻击")]),e._v(" "),v("p",[e._v("secure")]),e._v(" "),v("p",[e._v("只能在协议为 HTTPS 的请求中携带")]),e._v(" "),v("p",[e._v("same-site")]),e._v(" "),v("p",[e._v("规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击")]),e._v(" "),v("h3",{attrs:{id:"service-worker"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[e._v("#")]),e._v(" Service Worker")]),e._v(" "),v("p",[e._v("Service Worker 是运行在浏览器背后的"),v("strong",[e._v("独立线程")]),e._v("，一般可以用来实现缓存功能。使用 Service Worker的话，传输协议必须为 "),v("strong",[e._v("HTTPS")]),e._v("。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。")]),e._v(" "),v("p",[e._v("Service Worker 实现缓存功能一般分为三个步骤：首先需要先注册 Service Worker，然后监听到 "),v("code",[e._v("install")]),e._v(" 事件以后就可以缓存需要的文件，那么在下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存，存在缓存的话就可以直接读取缓存文件，否则就去请求数据。以下是这个步骤的实现：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("// index.js\nif (navigator.serviceWorker) {\n  navigator.serviceWorker\n    .register('sw.js')\n    .then(function(registration) {\n      console.log('service worker 注册成功')\n    })\n    .catch(function(err) {\n      console.log('servcie worker 注册失败')\n    })\n}\n// sw.js\n// 监听 `install` 事件，回调中缓存所需文件\nself.addEventListener('install', e => {\n  e.waitUntil(\n    caches.open('my-cache').then(function(cache) {\n      return cache.addAll(['./index.html', './index.js'])\n    })\n  )\n})\n\n// 拦截所有请求事件\n// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据\nself.addEventListener('fetch', e => {\n  e.respondWith(\n    caches.match(e.request).then(function(response) {\n      if (response) {\n        return response\n      }\n      console.log('fetch source')\n    })\n  )\n})\n\n")])])]),v("p",[e._v("打开页面，可以在开发者工具中的 "),v("code",[e._v("Application")]),e._v(" 看到 Service Worker 已经启动了")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/28/1626b1e8eba68e1c?w=1770&h=722&f=png&s=192277",alt:""}})]),e._v(" "),v("p",[e._v("在 Cache 中也可以发现我们所需的文件已被缓存")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/28/1626b20dfc4fcd26?w=1118&h=728&f=png&s=85610",alt:""}})]),e._v(" "),v("p",[e._v("当我们重新刷新页面可以发现我们缓存的数据是从 Service Worker 中读取的")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/28/1626b20e4f8f3257?w=2818&h=298&f=png&s=74833",alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);