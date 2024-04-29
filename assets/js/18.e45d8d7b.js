(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{350:function(a,s,t){"use strict";t.r(s);var e=t(8),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("h3",{attrs:{id:"帮助命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#帮助命令"}},[a._v("#")]),a._v(" 帮助命令")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" version    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示docker的版本信息。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" info       "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示docker的系统信息，包括镜像和容器的数量")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" 命令 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#帮助命令")]),a._v("\n")])])]),s("h3",{attrs:{id:"镜像命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像命令"}},[a._v("#")]),a._v(" 镜像命令")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME}")]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#拉取镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images                                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看本地所有镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${IMAGE NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${IMAGE NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${IMAGE NAME}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${FILE NAME}")]),a._v(".tar     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#将镜像保存成文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" load "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${FILE NAME}")]),a._v(".tar                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#从文件加载镜像")]),a._v("\n")])])]),s("h3",{attrs:{id:"容器命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器命令"}},[a._v("#")]),a._v(" 容器命令")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".                                         "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#运行一个容器")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${container name}")]),a._v("                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#设置容器名称")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${host port}")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${container port}")]),a._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#映射主机和容器内的端口")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${env name}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${env value}")]),a._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#添加环境变量")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("                                                "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#后台运行")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${host folder path}")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${container folder path}")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#将主机目录挂在到容器内")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#运行一个以前运行过的容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重启正在运行的容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#停止一个正在运行的容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示运行容器的日志")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("                                             "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#列出当前正在运行的容器")]),a._v("\n    -a, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--all")]),a._v("                                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示所有容器(默认显示正在运行)")]),a._v("\n    -n, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--last")]),a._v(" int                                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示最近创建的容器(包括所有状态)(默认为-1)")]),a._v("\n    -q, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--quiet")]),a._v("                                         "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#只显示数字id")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v("                                             "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除指定容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启动容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重启容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#停止当前正在运行的容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#强制停止当前容器")]),a._v("\n")])])]),s("h5",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),s("h3",{attrs:{id:"查看日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[a._v("#")]),a._v(" 查看日志")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示日志")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tf")]),a._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示日志信息（一直更新）")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tail")]),a._v(" number "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#需要显示日志条数")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tail")]),a._v(" n 容器id "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看n行日志")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ft")]),a._v(" 容器id "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#跟着日志")]),a._v("\n")])])]),s("h3",{attrs:{id:"进入容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[a._v("#")]),a._v(" 进入容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v(" /bin/bash                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#进入容器内")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#一个容器ping另外一个容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#推出当前容器")]),a._v("\nCtrl+Q+P\n")])])]),s("h2",{attrs:{id:"高级命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级命令"}},[a._v("#")]),a._v(" 高级命令")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Advance use ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" inspect "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示容器详细信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"status=exited"')]),a._v("                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示所有退出的容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v("                                                "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示所有容器id")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"status=exited"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v("                                "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示所有退出容器的id")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("                                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重启所有正在运行的容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("                                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#停止所有容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除所有容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"status=exited"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除所有退出的容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("$(")]),a._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" -q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#停止并删除所有容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("                                "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启动所有容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("                              "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除所有镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("top")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CONTAINER NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ID}")]),a._v("                                "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示一个容器的top信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stats                                                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示容器统计信息(正在运行)")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stats "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("                                            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示所有容器的统计信息(包括没有运行的)")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stats "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" --no-stream                                "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示所有容器的统计信息(包括没有运行的) ，只显示一次")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stats --no-stream "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-k8")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v("                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#统计容器信息并以使用流量作为倒序")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" system \n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" system "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("df")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示硬盘占用")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" system events       "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示容器的实时事件")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" system info         "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示系统信息")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" system prune        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#清理文件")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);