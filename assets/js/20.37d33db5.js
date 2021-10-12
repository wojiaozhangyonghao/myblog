(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{504:function(e,s,n){"use strict";n.r(s);var t=n(28),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"redis详细学习-入门篇"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis详细学习-入门篇"}},[e._v("#")]),e._v(" Redis详细学习 入门篇")]),e._v(" "),n("h2",{attrs:{id:"什么是redis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是redis"}},[e._v("#")]),e._v(" 什么是Redis")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("基本概念")]),e._v(" "),n("p",[e._v("redis是一个开源的、使用C语言编写的、支持网络交互的、可基于内存也可持久化的Key-Value数据库（非关系性数据库）。")])]),e._v(" "),n("li",[n("p",[e._v("redis的优势")])])]),e._v(" "),n("ol",[n("li",[n("p",[e._v("速度快，因为数据存在内存中，类似于HashMap，HashMap的优势就是查找和操作的时间复杂度都是O(1)")])]),e._v(" "),n("li",[n("p",[e._v("支持丰富数据类型，支持string，list，set，sorted set，hash")])]),e._v(" "),n("li",[n("p",[e._v("支持事务，操作都是原子性，所谓的原子性就是对数据的更改要么全部执行，要么全部不执行")])]),e._v(" "),n("li",[n("p",[e._v("丰富的特性：可用于缓存，消息，按key设置过期时间，过期后将会自动删除")])])]),e._v(" "),n("h2",{attrs:{id:"redis的应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis的应用场景"}},[e._v("#")]),e._v(" redis的应用场景")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("缓存")]),e._v(" "),n("p",[e._v("(1) 对于一些要返回给前端数据的缓存，当有大量数据库sql操作时候，为了避免每次接口请求都要去查询数据库，可以把一些数据缓存到redis中，这样是直接从内存中获取数据，速度回增快很多。")]),e._v(" "),n("p",[e._v("(2) web端用户，用于登陆缓存session数据，登陆的一些信息存到session中，缓存到redis中")])]),e._v(" "),n("li",[n("p",[e._v("队列")]),e._v(" "),n("p",[e._v("redis中提供了list接口，这个list提供了lpush和rpop，这两个方法具有原子性，可以插入队列元素和弹出队列元素。")])]),e._v(" "),n("li",[n("p",[e._v("数据存储")]),e._v(" "),n("p",[e._v("redis是非关系型数据库，可以把redis直接用于数据存储，提供了增删改查等操作，因为redis有良好的硬盘持久化机制，redis数据就可以定期持久化到硬盘中，保证了redis数据的完整性和安全性。")])]),e._v(" "),n("li",[n("p",[e._v("redis锁实现防刷机制")]),e._v(" "),n("p",[e._v("redis锁可以处理并发问题,redis数据类型中有一个set类型，set类型在存储数据的时候是无序的，而且每个值是不一样的，不能重复，这样就可以快速的查找元素中某个值是否存在，精确的进行增加删除操作。")])])]),e._v(" "),n("p",[e._v("说明:redis使用场景的基本操作会在redis学习(3)-实战篇中讲解")]),e._v(" "),n("h2",{attrs:{id:"redis安装与启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis安装与启动"}},[e._v("#")]),e._v(" redis安装与启动")]),e._v(" "),n("ul",[n("li",[e._v("redis的安装")])]),e._v(" "),n("ol",[n("li",[n("p",[e._v("redis安装比较简单请自行百度")])]),e._v(" "),n("li",[n("p",[e._v("修改redis密码配置")]),e._v(" "),n("p",[e._v("打开 redis.windows.conf 配置文件//window系统是带windows的linux系统是redis.conf\n找到requirepass foobared，把前面的#号去掉，把foobared改成密码\n例如requirepass 123456")]),e._v(" "),n("p",[e._v("注意修改密码后需要重新启动redis服务器")])]),e._v(" "),n("li",[n("p",[e._v("如何修改redis服务后台启动")]),e._v(" "),n("p",[e._v("推荐博客:https://blog.csdn.net/ksdb0468473/article/details/52126009")])])]),e._v(" "),n("ul",[n("li",[e._v("redis的基本命令")])]),e._v(" "),n("ol",[n("li",[n("p",[e._v("检测启动redis客户端命令：")]),e._v(" "),n("p",[e._v("redis-clis")])]),e._v(" "),n("li",[n("p",[e._v("启动redis命令：")]),e._v(" "),n("p",[e._v("./redis-server直接启动redis，有的时候需要启动固定配置文件（重新设置过密码）的redis，例如redis-server redis/redis.windows.conf或者./redis-server ../redis.conf")])]),e._v(" "),n("li",[n("p",[e._v("redis服务相关命令")]),e._v(" "),n("p",[e._v("卸载服务：redis-server --service-uninstall")]),e._v(" "),n("p",[e._v("开启服务：redis-server --service-start")]),e._v(" "),n("p",[e._v("停止服务：redis-server --service-stop")])])]),e._v(" "),n("h2",{attrs:{id:"redis的基本数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis的基本数据类型"}},[e._v("#")]),e._v(" redis的基本数据类型")]),e._v(" "),n("p",[e._v("redis是一种高级的key-value非关系型数据库。，其中value支持五种数据类型：string,List,set,hash,sore set")]),e._v(" "),n("ul",[n("li",[e._v("字符串（string）\nstring存储的元素类型可以是string/int/float，int类型可以进行增加和减少操作。\n代码实际操作过程：")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[root@VM_160_197_centos /]# redis-cli\n127.0.0.1:6379> set string1 koala\nOK\n127.0.0.1:6379> get string1\n"koala"\n127.0.0.1:6379> set string2 2\nOK\n127.0.0.1:6379> get string2\n"2"\n127.0.0.1:6379> incr string2\n(integer) 3\n127.0.0.1:6379> get string2\n"3"\n127.0.0.1:6379> decrby string2 2\n(integer) 1\n127.0.0.1:6379> get string2\n"1"\n')])])]),n("ul",[n("li",[e._v("字符串列表（list）\nlist类型是一个有序的列表，有序表示的是从左到右还是从右到左，而且数据内容是可以重复的。\n代码实际操作过程：")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[root@VM_160_197_centos /]# redis-cli\n127.0.0.1:6379> lpush list1 12\n(integer) 1\n127.0.0.1:6379> lpush list1 13\n(integer) 2\n127.0.0.1:6379> lpush list1 12\n(integer) 3\n127.0.0.1:6379> rpop list1\n"12"\n127.0.0.1:6379> lpush list2 12\n(integer) 1\n127.0.0.1:6379> lpush list2 13\n(integer) 2\n127.0.0.1:6379> lpush list2 12\n(integer) 3\n127.0.0.1:6379> llen list2\n(integer) 3\n127.0.0.1:6379>\n')])])]),n("ul",[n("li",[n("p",[e._v("字符串集合（set）")]),e._v(" "),n("p",[e._v("set类型中提供了无序的方式来存储多个不同的元素，set类型中每个元素的值都不一样，用户可以快速对元素中的值添加删除，检查某些值是否存在，"),n("strong",[e._v("重复的元素是无法继续插入集合的")]),e._v("。\n代码实际操作过程：")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("127.0.0.1:6379> sadd set1 12\n(integer) 1\n127.0.0.1:6379> sadd set1 12\n(integer) 0\n127.0.0.1:6379> scard set1\n(integer) 1\n127.0.0.1:6379> sadd set1 13\n(integer) 1\n127.0.0.1:6379> scard set1\n(integer) 2\n127.0.0.1:6379> sadd set1 13\n(integer) 0\n127.0.0.1:6379> sismember set1 13  //查看13是否在集合中\n(integer) 1\n127.0.0.1:6379> srem set1 13    //从集合中删除13\n")])])]),n("ul",[n("li",[n("p",[e._v("哈希（hash）")]),e._v(" "),n("p",[e._v("hash类型也叫散列类型，存储的时候存的是键值对。查询条数的时候只要是健不一样，就是不同的条数，尽管值是相同的。")])])]),e._v(" "),n("p",[e._v("代码实际操作过程：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[root@VM_160_197_centos /]# redis-cli\n127.0.0.1:6379> hset hash1 key1 12\n(integer) 1\n127.0.0.1:6379> hget hash1 key1\n"12"\n127.0.0.1:6379> hset hash1 key2 13\n(integer) 1\n127.0.0.1:6379> hset hash1 key3 13\n(integer) 1\n127.0.0.1:6379> hlen hash1//查询条数的时候只要是健不一样，就是不同的条数，尽管值是相同的。\n(integer) 3\n127.0.0.1:6379> hset hsah1 key3 14\n(integer) 1\n127.0.0.1:6379> hset hash1 key3 14\n(integer) 0\n127.0.0.1:6379> hget hash1 key3\n"14"\n127.0.0.1:6379> hmget hash1 key1 key2  //同时获取key1和key2的值\n1) "12"\n2) "13"\n')])])]),n("ul",[n("li",[e._v("有序字符串集合（sort set）")])]),e._v(" "),n("p",[e._v("sore set也叫有序分数集，可以把它看作一个排行榜，每一个同学都有自己的分数，且排行榜中还有一个排名的属性，排行属性从0，根据分数不断变大，排行也不断变大。\n，这个类型有点复杂，上一张图吧。")]),e._v(" "),n("p",[e._v("[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-LKwxHrkS-1577524600617)(http://on-img.com/chart_image/5b9b8467e4b015327ae08e1a.png)]")]),e._v(" "),n("p",[n("strong",[e._v("sort set特性")])]),e._v(" "),n("p",[e._v("1）sore set中的值是全局唯一的。")]),e._v(" "),n("p",[e._v("一个值设置了之后，再次设置不会增加，只会覆盖修改。")]),e._v(" "),n("p",[e._v("2）如果有两条分数相同，排名应该怎那么看？\n如果两个分数值形同，会根据值两个元素变量名的字典排序顺序排列先后，可看下方操作代码。")]),e._v(" "),n("p",[e._v("代码实际操作过程：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('127.0.0.1:6379[1]> zadd zset1 10.1 val1 //添加一个值和分数\n(integer) 1\n127.0.0.1:6379[1]> zadd zset1 11.1 val2\n(integer) 1\n127.0.0.1:6379[1]> zadd zset1 9.2 val3\n(integer) 1\n127.0.0.1:6379[1]> zcard zset1 //统计当前key下值的个数\n(integer) 3\n127.0.0.1:6379[1]> zrange zset1 0 2 withscores  //查看0到2的所有值和分数按照排名\n1) "val3"\n2) "9.1999999999999993"\n3) "val1"\n4) "10.1"\n5) "val2"\n6) "11.1"\n127.0.0.1:6379[1]> zrank zset1 val2\n(integer) 2\n127.0.0.1:6379[1]> zadd zset1 12.2 val3 //覆盖iu该val3\n(integer) 0\n127.0.0.1:6379[1]> zrange zset1 0 2 withscores//查看0到2的所有值和分数按照排名\n1) "val1"\n2) "10.1"\n3) "val2"\n4) "11.1"\n5) "val3"\n6) "12.199999999999999"\n127.0.0.1:6379[1]> zadd zset1 12.2 val2\n(integer) 0\n127.0.0.1:6379[1]> zrange zset1 0 2 withscores//这时候有两个分数相同,查看0到2的所有值和分数按照排名\n1) "val1"\n2) "10.1"\n3) "val2"\n4) "12.199999999999999"\n5) "val3"\n6) "12.199999999999999"\n\n')])])]),n("p",[e._v("继续学习，请看进阶篇：https://blog.csdn.net/xgangzai/article/details/82687552")])])}),[],!1,null,null,null);s.default=r.exports}}]);