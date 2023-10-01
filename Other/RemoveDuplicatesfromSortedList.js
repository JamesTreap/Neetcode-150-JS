/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	if (head === null) return head;

	let l = new ListNode(head.val, null);
	let lpointer = l;
	let pointer = head;
	let currval = head.val;

	while (pointer != null) {
		if (pointer.val != currval) {
			currval = pointer.val;
			lpointer.next = new ListNode(currval, null);
			lpointer = lpointer.next;
		}
		pointer = pointer.next;
	}

	return l;
};
