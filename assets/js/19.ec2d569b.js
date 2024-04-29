(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{348:function(a,t,s){"use strict";s.r(t);var e=s(8),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"docker-run常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-run常用命令"}},[a._v("#")]),a._v(" docker run常用命令")]),a._v(" "),t("p",[a._v("docker run :创建一个新的容器并运行一个命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("语法：docker run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" IMAGE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("COMMAND"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ARG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h4",{attrs:{id:"_1-options说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-options说明"}},[a._v("#")]),a._v(" 1.OPTIONS说明")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("-t:为容器重新分配一个伪输入终端，通常与 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" 同时使用\n-i:以交互模式运行容器，通常与 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" 同时使用\n-d:后台运行容器，并返回容器ID\n--name:为容器指定一个名称\n-p:端口映射，格式为：主机"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("宿主"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("端口:容器端口\n-v:\t挂载宿主机文件夹，格式为： 宿主机文件夹：容器文件夹\n--link: 添加链接到另一个容器\n-m:设置容器使用内存最大值；\n")])])]),t("h4",{attrs:{id:"_2-使用docker镜像tomcat-latest以后台模式启动一个容器-并将容器命名为mytomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用docker镜像tomcat-latest以后台模式启动一个容器-并将容器命名为mytomcat"}},[a._v("#")]),a._v(" 2.使用docker镜像tomcat:latest以后台模式启动一个容器,并将容器命名为mytomcat")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tid")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mytomcat tomcat:latest\n")])])]),t("h4",{attrs:{id:"_3-使用镜像tomcat-latest以后台模式启动一个容器-并将容器的8080端口映射到宿主机的8080端口。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用镜像tomcat-latest以后台模式启动一个容器-并将容器的8080端口映射到宿主机的8080端口。"}},[a._v("#")]),a._v(" 3.使用镜像tomcat:latest以后台模式启动一个容器,并将容器的8080端口映射到宿主机的8080端口。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tid")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mytomcat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 tomcat:latest\n")])])]),t("h4",{attrs:{id:"_4-使用镜像tomcat-latest以后台模式启动一个容器-并将容器的8080端口映射到宿主机的8080端口-主机的目录-home-映射到容器的-home"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用镜像tomcat-latest以后台模式启动一个容器-并将容器的8080端口映射到宿主机的8080端口-主机的目录-home-映射到容器的-home"}},[a._v("#")]),a._v(" 4.使用镜像tomcat:latest以后台模式启动一个容器,并将容器的8080端口映射到宿主机的8080端口,主机的目录 /home 映射到容器的 /home")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tid")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mytomcat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /home:/home tomcat:latest\n")])])]),t("h4",{attrs:{id:"_5-使用镜像tomcat-latest启动一个容器-在容器内执行-bin-bash命令。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用镜像tomcat-latest启动一个容器-在容器内执行-bin-bash命令。"}},[a._v("#")]),a._v(" 5.使用镜像tomcat:latest启动一个容器,在容器内执行/bin/bash命令。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" tomcat:latest /bin/bash\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);