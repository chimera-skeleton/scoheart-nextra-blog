# SQL

## SQL 的种类

- DDL
- DML
- DQL
- DCL

## DCL

### 用户管理

#### 查询用户

```sql
use mysql;
select user, host from user;
-- or
select user, host from mysql.user;
```

#### 创建用户

```sql
create user '用户名'@'主机名' identified by '密码';
```

#### 修改用户

```sql
alter user '用户名'@'主机名' identified by '新密码';

alter user '用户名'@'主机名' identified with mysql_native_password by '<PASSWORD>';
```

#### 删除用户

```sql
drop user '用户名'@'主机名';
```

### 权限管理

#### 查询权限

```sql
show grants for '用户名'@'主机名';

-- 代表可以登录数据库，但是不能对数据库进行任何操作
GRANT USAGE ON *.* TO `scoheart`@`%`
GRANT USAGE ON *.* TO `root`@`%`

-- 代表 来自任何主机的root用户 有 android数据库的所有表的 所有权限
GRANT ALL PRIVILEGES ON `android`.* TO `root`@`%`

-- 代表 来自任何主机的root用户 有 所有数据库的所有表的 所有权限
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, SHUTDOWN, PROCESS, FILE, REFERENCES, INDEX, ALTER, SHOW DATABASES, SUPER, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER, CREATE TABLESPACE, CREATE ROLE, DROP ROLE ON *.* TO `root`@`%` 

GRANT APPLICATION_PASSWORD_ADMIN,AUDIT_ABORT_EXEMPT,AUDIT_ADMIN,AUTHENTICATION_POLICY_ADMIN,BACKUP_ADMIN,BINLOG_ADMIN,BINLOG_ENCRYPTION_ADMIN,CLONE_ADMIN,CONNECTION_ADMIN,ENCRYPTION_KEY_ADMIN,FIREWALL_EXEMPT,FLUSH_OPTIMIZER_COSTS,FLUSH_STATUS,FLUSH_TABLES,FLUSH_USER_RESOURCES,GROUP_REPLICATION_ADMIN,GROUP_REPLICATION_STREAM,INNODB_REDO_LOG_ARCHIVE,INNODB_REDO_LOG_ENABLE,PASSWORDLESS_USER_ADMIN,PERSIST_RO_VARIABLES_ADMIN,REPLICATION_APPLIER,REPLICATION_SLAVE_ADMIN,RESOURCE_GROUP_ADMIN,RESOURCE_GROUP_USER,ROLE_ADMIN,SENSITIVE_VARIABLES_OBSERVER,SERVICE_CONNECTION_ADMIN,SESSION_VARIABLES_ADMIN,SET_USER_ID,SHOW_ROUTINE,SYSTEM_USER,SYSTEM_VARIABLES_ADMIN,TABLE_ENCRYPTION_ADMIN,XA_RECOVER_ADMIN ON *.* TO `root`@`%`
```

#### 授权
```sql
grant 权限 on 数据库名.表名 to '用户名'@'主机名';
```

#### 回收权限
```sql
revoke 权限 on 数据库名.表名 fromb '用户名'@'主机名';
```