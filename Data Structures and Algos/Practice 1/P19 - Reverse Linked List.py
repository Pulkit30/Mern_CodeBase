# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head):
        if not head:
            return None
        if not head.next:
            return head
        temp=head
        curr=head.next
        temp.next=None
        while curr:
            r=curr.next
            curr.next=temp
            temp=curr
            curr=r
        return temp












        