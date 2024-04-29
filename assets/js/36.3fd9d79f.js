(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{367:function(a,t,s){"use strict";s.r(t);var e=s(8),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1、create-table-新建表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、create-table-新建表"}},[a._v("#")]),a._v(" 1、create table -- 新建表")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("create")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n字段名"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" 类型"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("宽度"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 约束条件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n字段名"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" 类型"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("宽度"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 约束条件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n字段名"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" 类型"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("宽度"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 约束条件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在同一张表中，字段名是不能相同的")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 宽度和约束条件是可以选择的")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 字段名和类型是必须要有的")]),a._v("\n")])])]),t("h2",{attrs:{id:"_2、drop-table-删除表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、drop-table-删除表"}},[a._v("#")]),a._v(" 2、drop table -- 删除表")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("drop")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"_3、desc-表名-查看表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、desc-表名-查看表结构"}},[a._v("#")]),a._v(" 3、desc 表名 -- 查看表结构")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看表结构有两种方式：")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("describe")]),a._v(" 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("这种方法和"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("desc")]),a._v(" 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("效果相同；可以查看当前的表结构\n\n虽然"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("desc")]),a._v("命令可以查看表的定义，但是其输出的信息还不够全面，为了得到更全面的表定义信息，有时候就需要查看创建表的"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SQL")]),a._v("语句，使用 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("show")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("create")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" 语法。除了可以看到表定义之外，还可以看到"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("engine")]),a._v("（存储引擎）和"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("charset")]),a._v("（字符集）等信息。（\\G选项的含义是是的记录能够竖向排列，以便更好的显示内容较长的记录。）\n")])])]),t("h2",{attrs:{id:"_4、alter-table-修改表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、alter-table-修改表"}},[a._v("#")]),a._v(" 4、alter table -- 修改表")]),a._v(" "),t("h4",{attrs:{id:"_1-、-alter-table-表名-rename-新表名-修改表名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-、-alter-table-表名-rename-新表名-修改表名"}},[a._v("#")]),a._v(" (1)、 alter table 表名 rename 新表名; --- 修改表名")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("rename")]),a._v(" staff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"_2-、alter-table-表名-charset-编码-修改表的编码方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-、alter-table-表名-charset-编码-修改表的编码方式"}},[a._v("#")]),a._v(" (2)、alter table 表名 charset 编码; --- 修改表的编码方式")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("charset")]),a._v(" utf8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"_3-、alter-table-表名-auto-increment-自增的位置-修改表的自增值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-、alter-table-表名-auto-increment-自增的位置-修改表的自增值"}},[a._v("#")]),a._v(" (3)、alter table 表名 auto_increment 自增的位置; --- 修改表的自增值")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("auto_increment")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"_4-、alter-table-表名-add-字段名-类型-长度-约束-增加字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-、alter-table-表名-add-字段名-类型-长度-约束-增加字段"}},[a._v("#")]),a._v(" (4)、alter table 表名 add 字段名 类型(长度) 约束; --- 增加字段")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("add")]),a._v(" sex "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("enum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'male'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'female'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"_5-、-alter-table-表名-drop-字段名-删除字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-、-alter-table-表名-drop-字段名-删除字段"}},[a._v("#")]),a._v(" (5)、 alter table 表名 drop 字段名; --- 删除字段")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("drop")]),a._v(" sex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"_6-、-alter-table-表名-change-字段名-新名字-类型-长度-约束-修改字段名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-、-alter-table-表名-change-字段名-新名字-类型-长度-约束-修改字段名"}},[a._v("#")]),a._v(" (6)、 alter table 表名 change 字段名 新名字 类型(长度) 约束； --- 修改字段名")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test change name sname "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"_7-、-alter-table-表名-modify-字段名-新类型-新长度-约束-修改字段类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-、-alter-table-表名-modify-字段名-新类型-新长度-约束-修改字段类型"}},[a._v("#")]),a._v(" (7)、 alter table 表名 modify 字段名 新类型(新长度) 约束; --- 修改字段类型")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("modify")]),a._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"_8-、-alter-table-表名-change-旧字段名-新字段名-类型-长度-约束-frist-修改字段的排列顺序为第一个"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-、-alter-table-表名-change-旧字段名-新字段名-类型-长度-约束-frist-修改字段的排列顺序为第一个"}},[a._v("#")]),a._v(" (8)、 alter table 表名 change 旧字段名 新字段名 类型(长度) 约束 frist; -- 修改字段的排列顺序为第一个")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test change sex sex "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("enum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'male'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'female'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("first")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"_9-、-alter-table-表名-change-旧字段名-新字段名-类型-长度-约束-after-字段-修改字段的排列顺序为在字段后面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-、-alter-table-表名-change-旧字段名-新字段名-类型-长度-约束-after-字段-修改字段的排列顺序为在字段后面"}},[a._v("#")]),a._v(" (9)、 alter table 表名 change 旧字段名 新字段名 类型(长度) 约束 after 字段; --- 修改字段的排列顺序为在字段后面")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test change sex sex "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("enum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'male'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'female'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("after")]),a._v(" sname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"_10-、alter-table-表名-add-字段名-类型-长度-约束-frist-添加一个字段位置在第一个"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-、alter-table-表名-add-字段名-类型-长度-约束-frist-添加一个字段位置在第一个"}},[a._v("#")]),a._v(" (10)、alter table 表名 add 字段名 类型(长度) 约束 frist; --- 添加一个字段位置在第一个")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("add")]),a._v(" age "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("first")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h4",{attrs:{id:"_11-、-alter-table-表名-add-字段名-类型-长度-约束-after-字段-添加一个字段在name字段后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-、-alter-table-表名-add-字段名-类型-长度-约束-after-字段-添加一个字段在name字段后"}},[a._v("#")]),a._v(" (11)、 alter table 表名 add 字段名 类型(长度) 约束 after 字段; --- 添加一个字段在name字段后")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("alter")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("add")]),a._v(" hobby "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("after")]),a._v(" cname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);