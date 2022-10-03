# Find the minimun number of a list without using builtin functions
def find_min(list1):
    m = list1[0]
    for i in list1:
        for j in list1:
            if j < i:
                m = j
    print(m)

arr = [5,0,-3,6,-1]
find_min(arr)