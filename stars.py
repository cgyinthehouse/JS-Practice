row = 9 
with open('stars.txt', 'w') as f:
    stars = ''
    for i in range(1, row+1):
        if i < row:
            stars += "*" * i + '\n'
        else:
            stars += "*" * i
    f.write(stars)
print(stars)