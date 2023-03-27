/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p1 = head
    let p2 = head
    let count = n

    while(count > 0) {
        p2 = p2.next
        count--
    }

    if(!p2){
        return head.next
    }

    let current = 1
    while(p1) {
        if(current + n === 0 ) {
            p1.next = p1.next.next
            break;
        }else {
            current++
            p1 = p1.next
        }
    }

    return head
};





// @lc code=end

