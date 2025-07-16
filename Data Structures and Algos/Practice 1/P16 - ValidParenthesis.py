class Solution:
    def isValid(self, s: str) -> bool:
        stack1=[]
        for i in s:
            if i=='(' or i=='{' or i=='[':
                stack1.append(i)
            else:
                if len(stack1)==0:
                    return False
                elif (i==')' and stack1[-1]=='(') or (i=='}' and stack1[-1]=='{') or (i==']' and stack1[-1]=='['):
                    stack1.pop()
                else:
                    return False
        if len(stack1) == 0:
            return True
        return False

        