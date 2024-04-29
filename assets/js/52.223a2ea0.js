(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{382:function(s,t,n){"use strict";n.r(t);var a=n(8),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" nobody")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动进程,通常设置成和cpu的数量相等")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全局错误日志及PID文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log  notice;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log  info;")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pid        logs/nginx.pid;")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#工作模式及连接数上限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("events")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#epoll是多路复用IO(I/O Multiplexing)中的一种方式,")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#仅用于linux2.6以上内核,可以大大提高nginx的性能")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v("   epoll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单个后台worker process进程的最大并发链接数    ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_connections")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并发总数是 worker_processes 和 worker_connections 的乘积")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 即 max_clients = worker_processes * worker_connections")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在设置了反向代理的情况下，max_clients = worker_processes * worker_connections / 4  为什么")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为什么上面反向代理要除以4，应该说是一个经验值")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据以上条件，正常情况下的Nginx Server可以应付的最大连接数为：4 * 8000 = 32000")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# worker_connections 值的设置跟物理内存大小有关")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因为并发受IO约束，max_clients的值须小于系统可以打开的最大文件数")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 而系统可以打开的最大文件数和内存大小成正比，一般1GB内存的机器上可以打开的文件数大约是10万左右")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们来看看360M内存的VPS可以打开的文件句柄数是多少：")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ cat /proc/sys/fs/file-max")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出 34336")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 32000 < 34336，即并发连接总数小于系统可以打开的文件句柄总数，这样就在操作系统可以承受的范围之内")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所以，worker_connections 的值需根据 worker_processes 进程数目和系统可以打开的最大文件总数进行适当地进行设置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使得并发总数小于操作系统可以打开的最大文件数目")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其实质也就是根据主机的物理CPU和内存进行配置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当然，理论上的并发总数可能会和实际有所偏差，因为主机还有其他的工作进程需要消耗系统资源。")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ulimit -SHn 65535")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设定mime类型,类型由mime.type文件定义")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v("    mime.types")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default_type")]),s._v("  application/octet-stream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设定日志格式")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("log_format")]),s._v("  main  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_user")]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time_local]")]),s._v(' "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),s._v("\" '")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$body_bytes_sent")]),s._v(' "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_referer")]),s._v("\" '")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\""),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_user_agent")]),s._v('" "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_x_forwarded_for")]),s._v("\"'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v("  logs/access.log  main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对于普通应用，必须设为 on,")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以平衡磁盘与网络I/O处理速度，降低系统的uptime.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sendfile")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tcp_nopush     on;")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#连接超时时间")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#keepalive_timeout  0;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keepalive_timeout")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tcp_nodelay")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启gzip压缩")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_disable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MSIE [1-6]."')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设定请求缓冲")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("client_header_buffer_size")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128k")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("large_client_header_buffers")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128k")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设定虚拟主机配置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#侦听80端口")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义使用 www.nginx.cn访问")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("  www.nginx.cn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义服务器的默认网站根目录位置")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设定本虚拟主机的访问日志")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v("  logs/nginx.access.log  main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认请求")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            \n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义首页索引文件的名称")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.php index.html index.htm")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   \n\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义错误提示页面")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_page")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v(" /50x.html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" = /50x.html")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#静态文件，nginx自己处理")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ ^/(images|javascript|js|css|flash|media|static)/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            \n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#过期30天，静态文件不怎么更新，过期可以设大一点，")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果频繁更新，则可以设置得小一点。")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("expires")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30d")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PHP 脚本请求全部转发到 FastCGI处理. 使用FastCGI默认配置.")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ .php$")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_pass")]),s._v(" 127.0.0.1:9000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_index")]),s._v(" index.php")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_param")]),s._v("  SCRIPT_FILENAME  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" fastcgi_params")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止访问 .htxxx 文件")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ /.ht")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("deny")]),s._v(" all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);