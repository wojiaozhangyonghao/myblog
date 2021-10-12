(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{510:function(t,v,_){"use strict";_.r(v);var a=_(28),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"常用的数据库语句"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的数据库语句"}},[t._v("#")]),t._v(" 常用的数据库语句")]),t._v(" "),_("h2",{attrs:{id:"快速导航"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),_("p",[t._v("正在整理中...")]),t._v(" "),_("blockquote",[_("p",[t._v("需求1: 最近写的一个用户数据统计相关接口，需要用到按照每天进行分组统计。")])]),t._v(" "),_("h2",{attrs:{id:"直接看语句"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#直接看语句"}},[t._v("#")]),t._v(" 直接看语句")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('SELECT DATE_FORMAT( create_time, "%Y-%m-%d" ) ,sum(user_id) FROM orders WHERE order_state=2 GROUP BY DATE_FORMAT( create_time, "%Y-%m-%d" ) ;\n')])])]),_("h2",{attrs:{id:"date-format函数说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#date-format函数说明"}},[t._v("#")]),t._v(" DATE_FORMAT函数说明")]),t._v(" "),_("ul",[_("li",[t._v("语法")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('DATE_FORMAT(date,format)\n\n//上面代码中使用的是\nDATE_FORMAT( create_time, "%Y-%m-%d" )\n')])])]),_("p",[t._v("date 参数是合法的日期。format 规定日期/时间的输出格式。")]),t._v(" "),_("ul",[_("li",[t._v("format可以使用的格式")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("格式")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("%a")]),t._v(" "),_("td",[t._v("缩写星期名")])]),t._v(" "),_("tr",[_("td",[t._v("%b")]),t._v(" "),_("td",[t._v("缩写月名")])]),t._v(" "),_("tr",[_("td",[t._v("%c")]),t._v(" "),_("td",[t._v("月，数值")])]),t._v(" "),_("tr",[_("td",[t._v("%D")]),t._v(" "),_("td",[t._v("带有英文前缀的月中的天")])]),t._v(" "),_("tr",[_("td",[t._v("%d")]),t._v(" "),_("td",[t._v("月的天，数值(00-31)")])]),t._v(" "),_("tr",[_("td",[t._v("%e")]),t._v(" "),_("td",[t._v("月的天，数值(0-31)")])]),t._v(" "),_("tr",[_("td",[t._v("%f")]),t._v(" "),_("td",[t._v("微秒")])]),t._v(" "),_("tr",[_("td",[t._v("%H")]),t._v(" "),_("td",[t._v("小时 (00-23)")])]),t._v(" "),_("tr",[_("td",[t._v("%h")]),t._v(" "),_("td",[t._v("小时 (01-12)")])]),t._v(" "),_("tr",[_("td",[t._v("%I")]),t._v(" "),_("td",[t._v("小时 (01-12)")])]),t._v(" "),_("tr",[_("td",[t._v("%i")]),t._v(" "),_("td",[t._v("分钟，数值(00-59)")])]),t._v(" "),_("tr",[_("td",[t._v("%j")]),t._v(" "),_("td",[t._v("年的天 (001-366)")])]),t._v(" "),_("tr",[_("td",[t._v("%k")]),t._v(" "),_("td",[t._v("小时 (0-23)")])]),t._v(" "),_("tr",[_("td",[t._v("%l")]),t._v(" "),_("td",[t._v("小时 (1-12)")])]),t._v(" "),_("tr",[_("td",[t._v("%M")]),t._v(" "),_("td",[t._v("月名")])]),t._v(" "),_("tr",[_("td",[t._v("%m")]),t._v(" "),_("td",[t._v("月，数值(00-12)")])]),t._v(" "),_("tr",[_("td",[t._v("%p")]),t._v(" "),_("td",[t._v("AM 或 PM")])]),t._v(" "),_("tr",[_("td",[t._v("%r")]),t._v(" "),_("td",[t._v("时间，12-小时（hh:mm:ss AM 或 PM）")])]),t._v(" "),_("tr",[_("td",[t._v("%S")]),t._v(" "),_("td",[t._v("秒(00-59)")])]),t._v(" "),_("tr",[_("td",[t._v("%s")]),t._v(" "),_("td",[t._v("秒(00-59)")])]),t._v(" "),_("tr",[_("td",[t._v("%T")]),t._v(" "),_("td",[t._v("时间, 24-小时 (hh:mm:ss)")])]),t._v(" "),_("tr",[_("td",[t._v("%U")]),t._v(" "),_("td",[t._v("周 (00-53) 星期日是一周的第一天")])]),t._v(" "),_("tr",[_("td",[t._v("%u")]),t._v(" "),_("td",[t._v("周 (00-53) 星期一是一周的第一天")])]),t._v(" "),_("tr",[_("td",[t._v("%V")]),t._v(" "),_("td",[t._v("周 (01-53) 星期日是一周的第一天，与 %X 使用")])]),t._v(" "),_("tr",[_("td",[t._v("%v")]),t._v(" "),_("td",[t._v("周 (01-53) 星期一是一周的第一天，与 %x 使用")])]),t._v(" "),_("tr",[_("td",[t._v("%W")]),t._v(" "),_("td",[t._v("星期名")])]),t._v(" "),_("tr",[_("td",[t._v("%w")]),t._v(" "),_("td",[t._v("周的天 （0=星期日, 6=星期六）")])]),t._v(" "),_("tr",[_("td",[t._v("%X")]),t._v(" "),_("td",[t._v("年，其中的星期日是周的第一天，4 位，与 %V 使用")])]),t._v(" "),_("tr",[_("td",[t._v("%x")]),t._v(" "),_("td",[t._v("年，其中的星期一是周的第一天，4 位，与 %v 使用")])]),t._v(" "),_("tr",[_("td",[t._v("%Y")]),t._v(" "),_("td",[t._v("年，4 位")])]),t._v(" "),_("tr",[_("td",[t._v("%y")]),t._v(" "),_("td",[t._v("年，2 位")])])])]),t._v(" "),_("h2",{attrs:{id:"需求2-查询结果单位换算后保留两位小数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#需求2-查询结果单位换算后保留两位小数"}},[t._v("#")]),t._v(" > 需求2: 查询结果单位换算后保留两位小数")]),t._v(" "),_("h4",{attrs:{id:"数据库表中sale列的值为23456-789"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库表中sale列的值为23456-789"}},[t._v("#")]),t._v(" 数据库表中sale列的值为23456.789")]),t._v(" "),_("ol",[_("li",[t._v("format函数")])]),t._v(" "),_("p",[t._v("说明：format(x,d)是mysql自带的格式化小数函数，format()函数会对小数部分进行四舍五入操作，整数部分从右向左每三位一个逗号进行格式化输出")]),t._v(" "),_("p",[t._v("format函数结果：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("23,456.79\n")])])]),_("ol",{attrs:{start:"2"}},[_("li",[t._v("truncate函数")])]),t._v(" "),_("p",[t._v("说明：truncate(x,d)是mysql自带的函数，truncate()函数会将小数部分d位以后的值直接舍去")]),t._v(" "),_("p",[t._v("truncate函数结果：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("23456.78\n")])])]),_("ol",{attrs:{start:"3"}},[_("li",[t._v("round函数（常用）")])]),t._v(" "),_("p",[t._v("说明：round(x,d)是mysql自带的函数，format()函数会对小数部分进行四舍五入操作，但是不会出现format函数中的带逗号格式")]),t._v(" "),_("p",[t._v("round函数数结果：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("23456.79\n")])])]),_("ol",{attrs:{start:"4"}},[_("li",[t._v("convert函数（常用）")])]),t._v(" "),_("p",[t._v("说明：MySQL 的CAST()和CONVERT()函数可用来获取一个类型的值，并产生另一个类型的值。简单的说就是类型转换。\nCONVERT(xxx,类型)，但是类型是有限制的，下面几种类型")]),t._v(" "),_("ul",[_("li",[t._v("二进制,同带binary前缀的效果 : BINARY")]),t._v(" "),_("li",[t._v("字符型,可带参数 : CHAR()")]),t._v(" "),_("li",[t._v("日期 : DATE")]),t._v(" "),_("li",[t._v("时间: TIME")]),t._v(" "),_("li",[t._v("日期时间型 : DATETIME")]),t._v(" "),_("li",[t._v("浮点数 : DECIMAL")]),t._v(" "),_("li",[t._v("整数 : SIGNED")]),t._v(" "),_("li",[t._v("无符号整数 : UNSIGNED")])]),t._v(" "),_("p",[t._v("根据文初给出的数据，应该是这些写")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("convert(23456.789,decimal(10,2));\n")])])]),_("p",[t._v("convert函数数结果，这里也是四舍五入：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("23456.79\n")])])]),_("p",[t._v("注：解释下dem的意思")]),t._v(" "),_("blockquote",[_("p",[t._v("DECIMAL(10,2)  总共能存10位数字，末尾2位是小数，字段最大值99999999.99（小数点不算在长度内）")])])])}),[],!1,null,null,null);v.default=r.exports}}]);