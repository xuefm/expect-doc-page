(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{340:function(a,s,t){"use strict";t.r(s);var e=t(8),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"_1、开放端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、开放端口"}},[a._v("#")]),a._v(" 1、开放端口")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5672")]),a._v("/tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开放5672端口")]),a._v("\n\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --remove-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5672")]),a._v("/tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#关闭5672端口")]),a._v("\n\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置立即生效")]),a._v("\n")])])]),s("h3",{attrs:{id:"_2、查看防火墙所有开放的端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看防火墙所有开放的端口"}},[a._v("#")]),a._v(" 2、查看防火墙所有开放的端口")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --list-ports\n")])])]),s("h3",{attrs:{id:"_3-、关闭防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-、关闭防火墙"}},[a._v("#")]),a._v(" 3.、关闭防火墙")]),a._v(" "),s("p",[a._v("如果要开放的端口太多，嫌麻烦，可以关闭防火墙，安全性自行评估")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl stop firewalld.service\n")])])]),s("h3",{attrs:{id:"_4、查看防火墙状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、查看防火墙状态"}},[a._v("#")]),a._v(" 4、查看防火墙状态")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v("\n")])])]),s("h3",{attrs:{id:"_5、查看监听的端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、查看监听的端口"}},[a._v("#")]),a._v(" 5、查看监听的端口")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-lnpt")]),a._v("\n")])])]),s("h3",{attrs:{id:"_6、检查端口被哪个进程占用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、检查端口被哪个进程占用"}},[a._v("#")]),a._v(" 6、检查端口被哪个进程占用")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-lnpt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n")])])]),s("h3",{attrs:{id:"_7、查看进程的详细信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、查看进程的详细信息"}},[a._v("#")]),a._v(" 7、查看进程的详细信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n")])])]),s("h3",{attrs:{id:"_8、中止进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、中止进程"}},[a._v("#")]),a._v(" 8、中止进程")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);