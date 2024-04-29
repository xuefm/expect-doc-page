(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{352:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"img/docker%5C450977-20190512115951746-136143052.png",alt:"img"}})]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Docker image for springboot application")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# VERSION 0.0.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Author: bolingcavalry")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### 基础镜像，使用alpine操作系统，openjkd使用8u201")]),t._v("\nFROM openjdk:8u201-jdk-alpine3.9\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#作者")]),t._v("\nMAINTAINER BolingCavalry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("zq2599@gmail.com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#系统编码")]),t._v("\nENV "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("LANG")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("C.UTF-8 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("LC_ALL")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("C.UTF-8\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#声明一个挂载点，容器内此路径会对应宿主机的某个文件夹")]),t._v("\nVOLUME /tmp\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#应用构建成功后的jar文件被复制到镜像内，名字也改成了app.jar")]),t._v("\nADD target/dockerplugindemo-0.0.1-SNAPSHOT.jar app.jar\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动容器时的进程")]),t._v("\nENTRYPOINT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-jar"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/app.jar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#暴露8080端口")]),t._v("\nEXPOSE "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);