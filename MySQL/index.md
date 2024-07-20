# MySQL
>
> MySQL入门教程
> <https://github.com/jaywcjlove/mysql-tutorial?tab=readme-ov-file>
> MySQL 教程
> <https://www.runoob.com/mysql/mysql-tutorial.html>
> Sequelize 中文文档
> <https://www.sequelize.cn/core-concepts/getting-started>
> typeorm 中文文档
> <https://typeorm.bootcss.com/#%E5%88%86%E6%AD%A5%E6%8C%87%E5%8D%97>
>
## 存储原理
>
> <https://www.chanmufeng.com/posts/storage/MySQL/%E4%B8%BA%E4%BB%80%E4%B9%88MySQL%E7%9A%84%E4%B8%BB%E9%94%AE%E6%9F%A5%E8%AF%A2%E8%BF%99%E4%B9%88%E5%BF%AB.html>

HDD 磁盘中最小存储单位是扇区，扇区是 512 字节
计算机读取时有连续读和缓冲数据的原理，所以一个读最小会读取一个块，块的大小是 4KB，也就是 8 个扇区
在 MySQL 中最小的存储单位是页，页的大小是 16KB，也就是 4 个块 (可以通过 innodb_page_size 参数设置)
也就是说，MySQL 读取数据时，最小读取单位是页，也就是 16KB

在一个数据页中，有页头和页体，页头中存储了一些页的元数据信息，比如页号、页类型、页的大小等
页体中存储了数据，数据是按照 B+ 树的结构存储的

## ORM 工具

- Sequlizejs 是一个基于 promise 的 Node.js ORM，支持 PostgreSQL、MySQL、SQLite 和 MSSQL 等数据库
- TypeORM 是一个基于 TypeScript 的 ORM，支持 PostgreSQL、MySQL、MariaDB、SQLite、MS SQL Server、Oracle、SAP Hana、WebSQL 等数据库
- Mongoose 是一个 MongoDB 的 Node.js ORM

## 执行计划
>
> 这一次，彻底读懂Mysql执行计划
> <https://juejin.cn/post/6844903545607553037>

使用 EXPLAIN 关键字可以查看 SQL 语句的执行计划
执行计划是 MySQL 优化器根据 SQL 语句的执行计划生成的一种执行策略，可以帮助我们分析 SQL 语句的执行效率
执行计划中包含了很多信息，比如表的读取顺序、表的读取方式、表的读取类型、表的读取行数等
`explain extended select * from table_name` 可以查看更详细的执行计划
show warnings 可以查看执行计划的警告信息

## 面试题
>
> Mysql面试题整理
> <https://github.com/silenceboychen/nodejs-interview/blob/master/mysql.md>
