(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{338:function(a,t,s){"use strict";s.r(t);var r=s(8),n=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"一、基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、基本命令"}},[a._v("#")]),a._v(" 一、基本命令")]),a._v(" "),t("h2",{attrs:{id:"_1-1-关机和重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-关机和重启"}},[a._v("#")]),a._v(" 1.1 关机和重启")]),a._v(" "),t("p",[a._v("关机")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" now     "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#立刻关机")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#5分钟后关机")]),a._v("\npoweroff       立"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#刻关机")]),a._v("\n")])])]),t("p",[a._v("重启")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" now     立刻重启\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("分钟后重启\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v("         立刻重启\n")])])]),t("h2",{attrs:{id:"_1-2-帮助命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-帮助命令"}},[a._v("#")]),a._v(" 1.2 帮助命令")]),a._v(" "),t("p",[a._v("--help命令\nshutdown --help：\nifconfig  --help：查看网卡信息\nman命令（命令说明书）\nman shutdown\n注意：man shutdown打开命令说明书之后，使用按键q退出")]),a._v(" "),t("h1",{attrs:{id:"二、目录操作命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、目录操作命令"}},[a._v("#")]),a._v(" 二、目录操作命令")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("目录")]),a._v(" "),t("th")])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("/bin")]),a._v(" "),t("td",[a._v("存放二进制可执行文件(ls,cat,mkdir等)，常用命令一般都在这里。")])]),a._v(" "),t("tr",[t("td",[a._v("/etc")]),a._v(" "),t("td",[a._v("存放系统管理和配置文件")])]),a._v(" "),t("tr",[t("td",[a._v("/home")]),a._v(" "),t("td",[a._v("存放所有用户文件的根目录，是用户主目录的基点，比如用户user的主目录就是/home/user，可以用~user表示")])]),a._v(" "),t("tr",[t("td",[a._v("/usr")]),a._v(" "),t("td",[a._v("用于存放系统应用程序，比较重要的目录/usr/local 本地系统管理员软件安装目录（安装系统级的应用）。这是最庞大的目录，要用到的应用程序和文件几乎都在这个目录。/usr/x11r6 存放x window的目录/usr/bin 众多的应用程序 /usr/sbin 超级用户的一些管理程序 /usr/doc linux文档 /usr/include linux下开发和编译应用程序所需要的头文件 /usr/lib 常用的动态链接库和软件包的配置文件 /usr/man 帮助文档 /usr/src 源代码，linux内核的源代码就放在/usr/src/linux里 /usr/local/bin 本地增加的命令 /usr/local/lib 本地增加的库")])]),a._v(" "),t("tr",[t("td",[a._v("/opt")]),a._v(" "),t("td",[a._v("额外安装的可选应用程序包所放置的位置。一般情况下，我们可以把tomcat等都安装到这里。")])]),a._v(" "),t("tr",[t("td",[a._v("/proc")]),a._v(" "),t("td",[a._v("虚拟文件系统目录，是系统内存的映射。可直接访问这个目录来获取系统信息。")])]),a._v(" "),t("tr",[t("td",[a._v("/root")]),a._v(" "),t("td",[a._v("超级用户（系统管理员）的主目录（特权阶级^o^）")])]),a._v(" "),t("tr",[t("td",[a._v("/sbin")]),a._v(" "),t("td",[a._v("存放二进制可执行文件，只有root才能访问。这里存放的是系统管理员使用的系统级别的管理命令和程序。如ifconfig等。")])]),a._v(" "),t("tr",[t("td",[a._v("/dev")]),a._v(" "),t("td",[a._v("用于存放设备文件。")])]),a._v(" "),t("tr",[t("td",[a._v("/mnt")]),a._v(" "),t("td",[a._v("系统管理员安装临时文件系统的安装点，系统提供这个目录是让用户临时挂载其他的文件系统。")])]),a._v(" "),t("tr",[t("td",[a._v("/boot")]),a._v(" "),t("td",[a._v("存放用于系统引导时使用的各种文件")])]),a._v(" "),t("tr",[t("td",[a._v("/lib")]),a._v(" "),t("td",[a._v("存放跟文件系统中的程序运行所需要的共享库及内核模块。共享库又叫动态链接共享库，作用类似windows里的.dll文件，存放了根文件系统程序运行所需的共享文件。")])]),a._v(" "),t("tr",[t("td",[a._v("/tmp")]),a._v(" "),t("td",[a._v("用于存放各种临时文件，是公用的临时文件存储点。")])]),a._v(" "),t("tr",[t("td",[a._v("/var")]),a._v(" "),t("td",[a._v("用于存放运行时需要改变数据的文件，也是某些大文件的溢出区，比方说各种服务的日志文件（系统启动日志等。）等。")])]),a._v(" "),t("tr",[t("td",[a._v("/lost+found")]),a._v(" "),t("td",[a._v("这个目录平时是空的，系统非正常关机而留下“无家可归”的文件（windows下叫什么.chk）就在这里")])])])]),a._v(" "),t("h2",{attrs:{id:"_2-1-目录切换-cd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-目录切换-cd"}},[a._v("#")]),a._v(" 2.1 目录切换 cd")]),a._v(" "),t("p",[a._v("命令：cd 目录\ncd /     切换到根目录\ncd /usr     切换到根目录下的usr目录\ncd ../     切换到上一级目录 或者  cd ..\ncd ~     切换到home目录\ncd -     切换到上次访问的目录")]),a._v(" "),t("h2",{attrs:{id:"_2-2-目录查看-ls-al"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-目录查看-ls-al"}},[a._v("#")]),a._v(" 2.2 目录查看 ls [-al]")]),a._v(" "),t("p",[a._v("命令：ls [-al]\nls         查看当前目录下的所有目录和文件\nls -a       查看当前目录下的所有目录和文件（包括隐藏的文件）\nls -l 或 ll    列表查看当前目录下的所有目录和文件（列表查看，显示更多信息）\nls /dir       查看指定目录下的所有目录和文件  如：ls /usr")]),a._v(" "),t("h2",{attrs:{id:"_2-3-目录操作【增-删-改-查】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-目录操作【增-删-改-查】"}},[a._v("#")]),a._v(" 2.3 目录操作【增，删，改，查】")]),a._v(" "),t("h3",{attrs:{id:"_2-3-1-创建目录【增】-mkdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-创建目录【增】-mkdir"}},[a._v("#")]),a._v(" 2.3.1 创建目录【增】 mkdir")]),a._v(" "),t("p",[a._v("命令：mkdir 目录\nmkdir   aaa       在当前目录下创建一个名为aaa的目录\nmkdir   /usr/aaa   在指定目录下创建一个名为aaa的目录")]),a._v(" "),t("h3",{attrs:{id:"_2-3-2-删除目录或文件【删】rm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-删除目录或文件【删】rm"}},[a._v("#")]),a._v(" 2.3.2 删除目录或文件【删】rm")]),a._v(" "),t("p",[a._v("命令：rm [-rf] 目录\n删除文件：\nrm 文件     删除当前目录下的文件\nrm -f 文件   删除当前目录的的文件（不询问）\n删除目录：\nrm -r aaa   递归删除当前目录下的aaa目录\nrm -rf aaa   递归删除当前目录下的aaa目录（不询问）\n全部删除：\nrm -rf *   将当前目录下的所有目录和文件全部删除\nrm -rf /*   【自杀命令！慎用！慎用！慎用！】将根目录下的所有文件全部删除\n注意：rm不仅可以删除目录，也可以删除其他文件或压缩包，为了方便大家的记忆，无论删除任何目录或文件，都直接使用 rm -rf 目录/文件/压缩包")]),a._v(" "),t("h3",{attrs:{id:"_2-3-3-目录修改【改】mv-和-cp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-目录修改【改】mv-和-cp"}},[a._v("#")]),a._v(" 2.3.3 目录修改【改】mv 和 cp")]),a._v(" "),t("p",[a._v("一、重命名目录\n命令：mv 当前目录  新目录\n例如：mv aaa bbb   将目录aaa改为bbb\n注意：mv的语法不仅可以对目录进行重命名而且也可以对各种文件，压缩包等进行   重命名的操作\n二、剪切目录\n命令：mv 目录名称 目录的新位置\n示例：将/usr/tmp目录下的aaa目录剪切到 /usr目录下面   mv /usr/tmp/aaa /usr\n注意：mv语法不仅可以对目录进行剪切操作，对文件和压缩包等都可执行剪切操作\n三、拷贝目录\n命令：cp -r 目录名称 目录拷贝的目标位置  -r代表递归\n示例：将/usr/tmp目录下的aaa目录复制到 /usr目录下面   cp /usr/tmp/aaa  /usr\n注意：cp命令不仅可以拷贝目录还可以拷贝文件，压缩包等，拷贝文件和压缩包时不   用写-r递归")]),a._v(" "),t("h3",{attrs:{id:"_2-3-4-搜索目录【查】find"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-搜索目录【查】find"}},[a._v("#")]),a._v(" 2.3.4 搜索目录【查】find")]),a._v(" "),t("p",[a._v("命令：find 目录 参数 文件名称\n示例：find /usr/tmp -name 'a*'   查找/usr/tmp目录下的所有以a开头的目录或文件")]),a._v(" "),t("h1",{attrs:{id:"三、文件操作命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、文件操作命令"}},[a._v("#")]),a._v(" 三、文件操作命令")]),a._v(" "),t("h2",{attrs:{id:"_3-1-文件操作【增-删-改-查】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-文件操作【增-删-改-查】"}},[a._v("#")]),a._v(" 3.1 文件操作【增，删，改，查】")]),a._v(" "),t("h3",{attrs:{id:"_3-1-1-新建文件【增】touch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-新建文件【增】touch"}},[a._v("#")]),a._v(" 3.1.1 新建文件【增】touch")]),a._v(" "),t("p",[a._v("命令：touch 文件名\n示例：在当前目录创建一个名为aa.txt的文件     touch  aa.txt")]),a._v(" "),t("h3",{attrs:{id:"_3-1-2-删除文件-【删】-rm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-删除文件-【删】-rm"}},[a._v("#")]),a._v(" 3.1.2 删除文件 【删】 rm")]),a._v(" "),t("p",[a._v("命令：rm -rf 文件名")]),a._v(" "),t("h3",{attrs:{id:"_3-1-3-修改文件【改】-vi或vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-修改文件【改】-vi或vim"}},[a._v("#")]),a._v(" 3.1.3 修改文件【改】 vi或vim")]),a._v(" "),t("p",[a._v("【vi编辑器的3种模式】\n基本上vi可以分为三种状态，分别是命令模式（command mode）、插入模式（Insert mode）和底行模式（last line mode），各模式的功能区分如下：")]),a._v(" "),t("ol",[t("li",[a._v("命令行模式command mode）\n控制屏幕光标的移动，字符、字或行的删除，查找，移动复制某区段及进入Insert mode下，或者到 last line mode。\n命令行模式下的常用命令：\n【1】控制光标移动：↑，↓，j\n【2】删除当前行：dd\n【3】查找：/字符\n【4】进入编辑模式：i o a\n【5】进入底行模式：:")]),a._v(" "),t("li",[a._v("编辑模式（Insert mode）\n只有在Insert mode下，才可以做文字输入，按「ESC」键可回到命令行模式。\n编辑模式下常用命令：\n【1】ESC 退出编辑模式到命令行模式；")]),a._v(" "),t("li",[a._v("底行模式（last line mode）\n将文件保存或退出vi，也可以设置编辑环境，如寻找字符串、列出行号……等。\n底行模式下常用命令：\n【1】退出编辑：  :q\n【2】强制退出：  :q!\n【3】保存并退出：  :wq\n"),t("strong",[a._v("打开文件")]),a._v("\n命令：vi 文件名\n示例：打开当前目录下的aa.txt文件   vi aa.txt 或者 vim aa.txt\n注意：使用vi编辑器打开文件后，并不能编辑，因为此时处于命令模式，点击键盘i/a/o进入编辑模式。\n"),t("strong",[a._v("编辑文件")]),a._v("\n使用vi编辑器打开文件后点击按键：i ，a或者o即可进入编辑模式。\ni:在光标所在字符前开始插入\na:在光标所在字符后开始插入\no:在光标所在行的下面另起一新行插入\n"),t("strong",[a._v("保存或者取消编辑")]),a._v("\n保存文件：\n第一步：ESC  进入命令行模式\n第二步：:   进入底行模式\n第三步：wq   保存并退出编辑\n取消编辑：\n第一步：ESC  进入命令行模式\n第二步：:   进入底行模式\n第三步：q!   撤销本次修改并退出编辑")])]),a._v(" "),t("h3",{attrs:{id:"_3-1-4-文件的查看【查】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-文件的查看【查】"}},[a._v("#")]),a._v(" 3.1.4 文件的查看【查】")]),a._v(" "),t("p",[a._v("文件的查看命令：cat/more/less/tail\n"),t("strong",[a._v("cat：看最后一屏")]),a._v("\n示例：使用cat查看/etc/sudo.conf文件，只能显示最后一屏内容\ncat sudo.conf\n"),t("strong",[a._v("more：百分比显示")]),a._v("\n示例：使用more查看/etc/sudo.conf文件，可以显示百分比，回车可以向下一行，空格可以向下一页，q可以退出查看\nmore sudo.conf\n"),t("strong",[a._v("less：翻页查看")]),a._v("\n示例：使用less查看/etc/sudo.conf文件，可以使用键盘上的PgUp和PgDn向上   和向下翻页，q结束查看\nless sudo.conf\n"),t("strong",[a._v("tail：指定行数或者动态查看")]),a._v("\n示例：使用tail -10 查看/etc/sudo.conf文件的后10行，Ctrl+C结束"),t("br"),a._v("\ntail -10 sudo.conf")]),a._v(" "),t("h2",{attrs:{id:"_3-2-权限修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-权限修改"}},[a._v("#")]),a._v(" 3.2 权限修改")]),a._v(" "),t("p",[a._v("rwx：r代表可读，w代表可写，x代表该文件是一个可执行文件，如果rwx任意位置变为-则代表不可读或不可写或不可执行文件。\n示例：给aaa.txt文件权限改为可执行文件权限，aaa.txt文件的权限是-rw-------\n第一位：-就代表是文件，d代表是文件夹\n第一段（3位）：代表拥有者的权限\n第二段（3位）：代表拥有者所在的组，组员的权限\n第三段（最后3位）：代表的是其他用户的权限\n421  421  421\n-  rw-  ---   ---")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("命令：chmod +x aaa.txt\n或者采用8421法\n\n命令：chmod 100 aaa.txt\n")])])]),t("h1",{attrs:{id:"四、压缩文件操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、压缩文件操作"}},[a._v("#")]),a._v(" 四、压缩文件操作")]),a._v(" "),t("h2",{attrs:{id:"_4-1-打包和压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-打包和压缩"}},[a._v("#")]),a._v(" 4.1 打包和压缩")]),a._v(" "),t("p",[a._v("Windows的压缩文件的扩展名  .zip/.rar\nlinux中的打包文件：aa.tar"),t("br"),a._v("\nlinux中的压缩文件：bb.gz"),t("br"),a._v("\nlinux中打包并压缩的文件：.tar.gz\nLinux中的打包文件一般是以.tar结尾的，压缩的命令一般是以.gz结尾的。\n而一般情况下打包和压缩是一起进行的，打包并压缩后的文件的后缀名一般.tar.gz。\n命令：tar -zcvf 打包压缩后的文件名 要打包的文件\n其中：z：调用gzip压缩命令进行压缩\nc：打包文件\nv：显示运行过程\nf：指定文件名\n示例：打包并压缩/usr/tmp 下的所有文件 压缩后的压缩包指定名称为xxx.tar\ntar -zcvf ab.tar aa.txt bb.txt\n或：tar -zcvf ab.tar  *")]),a._v(" "),t("h2",{attrs:{id:"_4-2-解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-解压"}},[a._v("#")]),a._v(" 4.2 解压")]),a._v(" "),t("p",[a._v("命令：tar [-zxvf] 压缩文件"),t("br"),a._v("\n其中：x：代表解压\n示例：将/usr/tmp 下的ab.tar解压到当前目录下\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181108101105208.png",alt:"img"}}),a._v("\n示例：将/usr/tmp 下的ab.tar解压到根目录/usr下\ntar -xvf ab.tar -C /usr------C代表指定解压的位置\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181108101123319.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMzI5MTY3,size_16,color_FFFFFF,t_70",alt:"img"}})]),a._v(" "),t("h1",{attrs:{id:"五、查找命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、查找命令"}},[a._v("#")]),a._v(" 五、查找命令")]),a._v(" "),t("h2",{attrs:{id:"_5-1-grep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-grep"}},[a._v("#")]),a._v(" 5.1 grep")]),a._v(" "),t("p",[a._v("grep命令是一种强大的文本搜索工具\n使用实例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ps -ef | grep sshd  查找指定ssh服务进程 \n\nps -ef | grep sshd | grep -v grep 查找指定服务进程，排除gerp身 \n\nps -ef | grep sshd -c 查找指定进程个数 \n")])])]),t("h2",{attrs:{id:"_5-2-find"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-find"}},[a._v("#")]),a._v(" 5.2 find")]),a._v(" "),t("p",[a._v("find命令在目录结构中搜索文件，并对搜索结果执行指定的操作。\nfind 默认搜索当前目录及其子目录，并且不过滤任何结果（也就是返回所有文件），将它们全都显示在屏幕上。\n使用实例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('find . -name "*.log" -ls  在当前目录查找以.log结尾的文件，并显示详细信息。 \n\nfind /root/ -perm 600   查找/root/目录下权限为600的文件 \n\nfind . -type f -name "*.log"  查找当目录，以.log结尾的普通文件 \n\nfind . -type d | sort   查找当前所有目录并排序 \n\nfind . -size +100M  查找当前目录大于100M的文件\n')])])]),t("h2",{attrs:{id:"_5-3-locate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-locate"}},[a._v("#")]),a._v(" 5.3 locate")]),a._v(" "),t("p",[a._v("locate 让使用者可以很快速的搜寻某个路径。默认每天自动更新一次，所以使用locate 命令查不到最新变动过的文件。为了避免这种情况，可以在使用locate之前，先使用updatedb命令，手动更新数据库。如果数据库中没有查询的数据，则会报出locate: can not stat () `/var/lib/mlocate/mlocate.db': No such file or directory该错误！updatedb即可！\n"),t("strong",[a._v("yum -y install mlocate 如果是精简版CentOS系统需要安装locate命令")]),a._v("\n使用实例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("updatedb\n\nlocate /etc/sh 搜索etc目录下所有以sh开头的文件 \n\nlocate pwd 查找和pwd相关的所有文件\n")])])]),t("h2",{attrs:{id:"_5-4-whereis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-whereis"}},[a._v("#")]),a._v(" 5.4 whereis")]),a._v(" "),t("p",[a._v("whereis命令是定位可执行文件、源代码文件、帮助文件在文件系统中的位置。这些文件的属性应属于原始代码，二进制文件，或是帮助文件。\n使用实例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("whereis ls    将和ls文件相关的文件都查找出来\n")])])]),t("h2",{attrs:{id:"_5-5-which"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-which"}},[a._v("#")]),a._v(" 5.5 which")]),a._v(" "),t("p",[a._v("which命令的作用是在PATH变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。\n使用实例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("which pwd  查找pwd命令所在路径 \n\nwhich java  查找path中java的路径 \n")])])]),t("h1",{attrs:{id:"六、su、sudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、su、sudo"}},[a._v("#")]),a._v(" 六、su、sudo")]),a._v(" "),t("h2",{attrs:{id:"_6-1-su"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-su"}},[a._v("#")]),a._v(" 6.1 su")]),a._v(" "),t("p",[a._v("su用于用户之间的切换。但是切换前的用户依然保持登录状态。如果是root 向普通或虚拟用户切换不需要密码，反之普通用户切换到其它任何用户都需要密码验证。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("su test:切换到test用户，但是路径还是/root目录\n\nsu - test : 切换到test用户，路径变成了/home/test\n\nsu : 切换到root用户，但是路径还是原来的路径\n\nsu - : 切换到root用户，并且路径是/root\n")])])]),t("p",[a._v("su不足：如果某个用户需要使用root权限、则必须要把root密码告诉此用户。\n退出返回之前的用户：exit")]),a._v(" "),t("h2",{attrs:{id:"_6-2-sudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-sudo"}},[a._v("#")]),a._v(" 6.2 sudo")]),a._v(" "),t("p",[a._v("sudo是为所有想使用root权限的普通用户设计的。可以让普通用户具有临时使用root权限的权利。只需输入自己账户的密码即可。\n进入sudo配置文件命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vi /etc/sudoer或者visudo\n案例：\n\n允许hadoop用户以root身份执行各种应用命令，需要输入hadoop用户的密码。\n\nhadoop  ALL=(ALL)   ALL \n\n案例：\n\n只允许hadoop用户以root身份执行ls 、cat命令，并且执行时候免输入密码。 \n\n配置文件中： \n\nhadoop  ALL=NOPASSWD:  /bin/ls, /bin/cat \n")])])]),t("h1",{attrs:{id:"七、系统服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、系统服务"}},[a._v("#")]),a._v(" 七、系统服务")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("service iptables status  --查看iptables服务的状态\nservice iptables start  --开启iptables服务\nservice iptables stop  --停止iptables服务\nservice iptables restart  --重启iptables服务\nchkconfig iptables off  --关闭iptables服务的开机自启动\nchkconfig iptables on  --开启iptables服务的开机自启动\n")])])]),t("h1",{attrs:{id:"八、网络管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、网络管理"}},[a._v("#")]),a._v(" 八、网络管理")]),a._v(" "),t("h2",{attrs:{id:"_8-1-主机名配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-主机名配置"}},[a._v("#")]),a._v(" 8.1 主机名配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[root@node1 ~]# vi /etc/sysconfig/network\nNETWORKING=yes\nHOSTNAME=node1\n")])])]),t("h2",{attrs:{id:"_8-2-ip-地址配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-ip-地址配置"}},[a._v("#")]),a._v(" 8.2 IP 地址配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[root@node1 ~]# vi /etc/sysconfig/network-scripts/ifcfg-eth0\n[root@localhost sysconfig]# vim /etc/sysconfig/network-scripts/ifcfg-ens33\nTYPE=Ethernet\nPROXY_METHOD=none\nBROWSER_ONLY=no\nBOOTPROTO=static\nDEFROUTE=yes\nIPV4_FAILURE_FATAL=no\nNAME=ens33\nNAME=ens33\nUUID=12037371-f4f9-42fc-8fce-90e429330d0c\nDEVICE=ens33\nONBOOT=yes\nIPADDR=192.168.48.10\nNETMASK=255.255.255.0\nGATEWAY=192.168.48.2\nDNS1=114.114.114.114\nDNS2=8.8.8.8\n~\n")])])]),t("h2",{attrs:{id:"_8-3-域名映射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-域名映射"}},[a._v("#")]),a._v(" 8.3 域名映射")]),a._v(" "),t("p",[a._v("/etc/hosts文件用于在通过主机名进行访问时做ip地址解析之用。所以，你想访问一个什么样的主机名，就需要把这个主机名和它对应的ip地址。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[root@node1 ~]# vi /etc/hosts\n#### 在最后加上\n192.168.52.201  node1\n192.168.52.202  node2\n192.168.52.203  node3\n")])])]),t("h1",{attrs:{id:"九、定时任务指令crontab-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、定时任务指令crontab-配置"}},[a._v("#")]),a._v(" 九、定时任务指令crontab 配置")]),a._v(" "),t("p",[a._v("crontab是Unix和Linux用于设置定时任务的指令。通过crontab命令，可以在固定间隔时间,执行指定的系统指令或shell脚本。时间间隔的单位可以是分钟、小时、日、月、周及以上的任意组合。\ncrontab安装：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum install crontabs\n")])])]),t("p",[a._v("服务操作说明：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("service crond start   ## 启动服务 \nservice crond stop    ## 关闭服务 \nservice crond restart ## 重启服务\n")])])]),t("h2",{attrs:{id:"_9-1-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-命令格式"}},[a._v("#")]),a._v(" 9.1 命令格式")]),a._v(" "),t("p",[a._v("crontab [-u user] file\ncrontab [-u user] [ -e | -l | -r ]\n"),t("em",[t("strong",[a._v("参数说明：")])]),a._v("\n**-u user：**用来设定某个用户的crontab服务"),t("br"),a._v("\n**file：**file是命令文件的名字,表示将file做为crontab的任务列表文件\n并载入crontab。\n**-e：**编辑某个用户的crontab文件内容。如果不指定用户，则表示编辑当前\n用户的crontab文件。\n**-l：**显示某个用户的crontab文件内容。如果不指定用户，则表示显示当前\n用户的crontab文件内容。\n**-r：**删除定时任务配置，从/var/spool/cron目录中删除某个用户的crontab\n文件，如果不指定用户，则默认删除当前用户的crontab文件。\n命令示例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("crontab file [-u user] ## 用指定的文件替代目前的crontab\ncrontab -l [-u user]  ## 列出用户目前的crontab\ncrontab -e [-u user]  ## 编辑用户目前的crontab\n")])])]),t("h2",{attrs:{id:"_9-2-配置说明、实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-配置说明、实例"}},[a._v("#")]),a._v(" 9.2 配置说明、实例")]),a._v(" "),t("p",[a._v("命令：*  *   *  *  *  command"),t("br"),a._v("\n解释：分  时  日  月  周  命令\n"),t("strong",[a._v("第1列表示分钟1～59 每分钟用*或者 */1表示")]),t("br"),a._v(" "),t("strong",[a._v("第2列表示小时0～23（0表示0点）")]),a._v(" "),t("strong",[a._v("第3列表示日期1～31")]),t("br"),a._v(" "),t("strong",[a._v("第4列表示月份1～12")]),t("br"),a._v(" "),t("strong",[a._v("第5列标识号星期0～6（0表示星期天）")]),t("br"),a._v(" "),t("strong",[a._v("第6列要运行的命令")]),a._v("\n配置实例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("先打开定时任务所在的文件：\ncrontab -e\n每分钟执行一次date命令 \n*/1 * * * * date >> /root/date.txt\n每晚的21:30重启apache。 \n30 21 * * * service httpd restart\n每月1、10、22日的4 : 45重启apache。  \n45 4 1,10,22 * * service httpd restart\n每周六、周日的1 : 10重启apache。 \n10 1 * * 6,0 service httpd restart\n每天18 : 00至23 : 00之间每隔30分钟重启apache。\n0,30   18-23    *   *   *   service httpd restart\n晚上11点到早上7点之间，每隔一小时重启apache\n*  23-7/1    *   *   *   service httpd restart\n")])])]),t("h1",{attrs:{id:"十、其他命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十、其他命令"}},[a._v("#")]),a._v(" 十、其他命令")]),a._v(" "),t("h2",{attrs:{id:"_10-1-查看当前目录-pwd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-查看当前目录-pwd"}},[a._v("#")]),a._v(" 10.1 查看当前目录：pwd")]),a._v(" "),t("p",[a._v("命令：pwd   查看当前目录路径")]),a._v(" "),t("h2",{attrs:{id:"_10-2-查看进程-ps-ef"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-查看进程-ps-ef"}},[a._v("#")]),a._v(" 10.2 查看进程：ps -ef")]),a._v(" "),t("p",[a._v("命令：ps -ef   查看所有正在运行的进程")]),a._v(" "),t("h2",{attrs:{id:"_10-3-结束进程-kill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-结束进程-kill"}},[a._v("#")]),a._v(" 10.3 结束进程：kill")]),a._v(" "),t("p",[a._v("命令：kill pid 或者 kill -9 pid(强制杀死进程)      pid:进程号")]),a._v(" "),t("h2",{attrs:{id:"_10-4-网络通信命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-网络通信命令"}},[a._v("#")]),a._v(" 10.4 网络通信命令：")]),a._v(" "),t("p",[t("strong",[a._v("ifconfig：查看网卡信息")]),a._v("\n命令：ifconfig 或 ifconfig | more\n"),t("strong",[a._v("ping：查看与某台机器的连接情况")]),a._v("\n命令：ping ip\n"),t("strong",[a._v("netstat -an：查看当前系统端口")]),a._v("\n命令：netstat -an\n搜索指定端口\n命令：netstat -an | grep 8080")]),a._v(" "),t("h2",{attrs:{id:"_10-5-配置网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-5-配置网络"}},[a._v("#")]),a._v(" 10.5 配置网络")]),a._v(" "),t("p",[a._v("命令：setup")]),a._v(" "),t("h2",{attrs:{id:"_10-6-重启网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-6-重启网络"}},[a._v("#")]),a._v(" 10.6 重启网络")]),a._v(" "),t("p",[a._v("命令：service network restart")]),a._v(" "),t("h2",{attrs:{id:"_10-7-切换用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-7-切换用户"}},[a._v("#")]),a._v(" 10.7 切换用户")]),a._v(" "),t("p",[a._v("命令：su - 用户名")]),a._v(" "),t("h2",{attrs:{id:"_10-8-关闭防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-8-关闭防火墙"}},[a._v("#")]),a._v(" 10.8 关闭防火墙")]),a._v(" "),t("p",[a._v("命令：chkconfig iptables off\n或者：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" iptables -L;\n iptables -F;\n service iptables stop\n")])])]),t("h2",{attrs:{id:"_10-9-修改文件权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-9-修改文件权限"}},[a._v("#")]),a._v(" 10.9 修改文件权限")]),a._v(" "),t("p",[a._v("命令：chmod 777")]),a._v(" "),t("h2",{attrs:{id:"_10-10-清屏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-10-清屏"}},[a._v("#")]),a._v(" 10.10 清屏")]),a._v(" "),t("p",[a._v("命令：ctrl + l")]),a._v(" "),t("h2",{attrs:{id:"_10-11-vi模式下快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-11-vi模式下快捷键"}},[a._v("#")]),a._v(" 10.11 vi模式下快捷键")]),a._v(" "),t("p",[a._v("esc后:\n保存并退出快捷键：shift+z+z\n光标跳到最后一行快捷键：shift+g\n删除一行：dd\n复制一行内容：y+y\n粘贴复制的内容：p")])])}),[],!1,null,null,null);t.default=n.exports}}]);