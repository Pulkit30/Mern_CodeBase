# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverse(self,head):
        if not head:
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

    def reorderList(self, head):
        """
        Do not return anything, modify head in-place instead.
        """
        if not head.next:
            return head
        temp=head
        count=0
        while temp:
            temp=temp.next
            count+=1
        n=count//2
        count=count-n
        k=0
        temp=head
        pre1=None
        while k<count:
            k+=1
            pre1=temp
            temp=temp.next
        temp=self.reverse(temp)
        pre1.next=None
        pre1=head
        while temp:
            p1=pre1
            pre1=pre1.next
            p1.next=temp
            p2=temp
            temp=temp.next
            p2.next=pre1
        return head


        
            
        
        return None
        