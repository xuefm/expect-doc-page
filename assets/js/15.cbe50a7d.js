(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{346:function(a,s,t){"use strict";t.r(s);var e=t(8),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-docker容器jar包更新并备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker容器jar包更新并备份"}},[a._v("#")]),a._v(" 1."),s("code",[a._v("docker")]),a._v("容器"),s("code",[a._v("jar")]),a._v("包更新并备份")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#老文件备份名")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dd")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%Y-%m-%d-%H-%M-%S"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#工作目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("work_dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/java\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#备份目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("backups_dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/java/backups\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#新文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("new_file")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$work_dir")]),a._v("/supply-chain-dev.jar\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#日志")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("log_file")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/root/updateService/updateService.log\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#保存备份个数，备份31天数据")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("31")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#docker容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("docker_container")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("supply-chain-service\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#保证文件存在")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$work_dir")]),a._v("/app.jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$new_file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"开始更新系统"')]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#备份老文件")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"备份老文件"')]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$work_dir")]),a._v("/app.jar "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$backups_dir")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$dd")]),a._v(".jar\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#新文件改名")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"新文件改名"')]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$new_file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$work_dir")]),a._v("/app.jar\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#判断现在的备份数量是否大于$number")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("count")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-crt")]),a._v(" $backups_dir/*.jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$count")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-gt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$number")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#找出需要删除的备份")]),a._v("\n        \t"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("delfile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-crt")]),a._v(" $backups_dir/*.jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $9 }'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n        \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除最早生成的备份，只保留number数量的备份")]),a._v("\n        \t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$delfile")]),a._v("\n        \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#写删除文件日志")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"删除文件: '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${delfile}")]),a._v('"')]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" 删除文件: "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${delfile}")]),a._v('"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${log_file}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n\n\n\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"重启系统"')]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart  "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${docker_container}")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"打印日志"')]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${docker_container}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"条件不满足"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n")])])]),s("h2",{attrs:{id:"_2-回滚-与1配合使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-回滚-与1配合使用"}},[a._v("#")]),a._v(" 2.回滚（与1配合使用）")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#工作目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("work_dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/java\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#备份目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("backups_dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/java/backups\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#日志文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("log_file")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/root/rollback.log\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#docker容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("docker_container")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("supply-chain-service\n\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("old_file")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${backups_dir}")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Art")]),a._v(" $backups_dir "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("删除当前文件"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${work_dir}")]),a._v('/app.jar"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("删除当前文件"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${work_dir}")]),a._v('/app.jar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${log_file}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$work_dir")]),a._v("/app.jar\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("复制文件"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${old_file}")]),a._v("到"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${work_dir}")]),a._v('/app.jar"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("复制文件"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${old_file}")]),a._v("到"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${work_dir}")]),a._v('/app.jar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${log_file}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$backups_dir")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Art")]),a._v(" $backups_dir "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" /opt/java/app.jar\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('重新启动服务"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('重新启动服务"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${log_file}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${docker_container}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('查看日志"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${docker_container}")]),a._v("\n")])])]),s("h2",{attrs:{id:"_3-http健康检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-http健康检测"}},[a._v("#")]),a._v(" 3.http健康检测")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#日志保存位置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("log_url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/root/heartbeat.log\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#异常日志位置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("error_log_url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/root/heartbeat_error.log\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#请求地址")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://127.0.0.1:8080/tdd/v1/heartbeat/inspection\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#请求超时时间 单位秒")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("time_out")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#请求间隔时间 单位秒")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("interval_time")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#系统准备时间 单位秒")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("readiness_time")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("120")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#docker容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("docker_container")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("supply-chain-service\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("resp")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("time_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /dev/null "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" %"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("http_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" $url"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$resp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ge")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$resp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-le")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("399")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${url}")]),a._v(' successful"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${log_url}")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${interval_time}")]),a._v("s\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${url}")]),a._v(' failed"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${log_url}")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${url}")]),a._v(' failed"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${error_log_url}")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(' 重启系统"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${log_url}")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(' 重启系统"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${error_log_url}")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${docker_container}")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${readiness_time}")]),a._v("s\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n")])])]),s("p",[a._v("3.1使用 "),s("code",[a._v("nohup")]),a._v(" 命令："),s("code",[a._v("nohup")]),a._v(" 命令可以忽略挂起信号（SIGHUP），允许程序在终端关闭后继续在后台运行。")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("nohup")]),a._v(" 会生成一个 "),s("code",[a._v("nohup.out")]),a._v("文件,该文件会保存执行中的输出")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" xxx.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);