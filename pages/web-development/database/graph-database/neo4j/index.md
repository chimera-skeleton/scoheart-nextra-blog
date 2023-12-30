# neo4j

## 下载安装
``` shell
# CentOS、RedHat、Fedora

# 配置yum源
rpm --import https://debian.neo4j.com/neotechnology.gpg.key
cat << EOF >  /etc/yum.repos.d/neo4j.repo
[neo4j]
name=Neo4j RPM Repository
baseurl=https://yum.neo4j.com/stable/5
enabled=1
gpgcheck=1
EOF

yum install neo4j
```

## 数据库启停
``` shell
neo4j start

neo4j stop
```

## CLI客户端连接
``` shell
cypher-shell -u neo4j -p <passwd>
```