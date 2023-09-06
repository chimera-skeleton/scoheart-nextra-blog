


# 链表
## 141 环形链表
快慢指针法
``` js
var hasCycle = function (head) {

    if (head === null) return false
    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next

        if (fast === slow) return true
    }
    return false
};
```

## 剑指 Offer 06. 从尾到头打印链表
1. 数组存值，反转数组
``` js
var reversePrint = function (head) {
    const arr = []

    if (head === null) return arr

    let p = head
    while (p.next !== null) {
        arr.push(p.val)
        p = p.next
    }
    arr.push(p.val)

    return arr.reverse()

};
```

2. 反转链表

## 206. 反转链表

## 203. 移除链表元素

## 21 - 合并两个有序链表


