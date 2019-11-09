import pytesseract as pt

text = pt.image_to_string('sample.png')

fs = open("text.txt", 'w')
fs.write(text)
fs.close()

# declare the variables that we will be using
discount = 0
subtotal = 0
totalItemsSold = "N/A"
total = 0
tax = 0

with open("text.txt") as fp:
    line = fp.readline().lower()
    #line = checkSpelling(line)
    while line:
        #line = checkSpelling(line)
        list = line.lower().split()
        if "subtotal" in line:
            subtotal = list[-1]
        if "sub total" in line:
            subtotal = list[-1]
        if "item" in line:
            totalItemsSold = list[-1]
        if "discount" in line:
            discount = list[-1]
        if "(h)hst" in line:
            tax = list[-1]
        if "tax" in line:
            tax = list[-1]
        if "total" in line:
            total = list[-1]

        line = fp.readline().lower()


discount = float(''.join(e for e in discount if e.strip('$')))
subtotal = float(''.join(e for e in subtotal if e.strip('$')))
#totalItemsSold = "N/A"
total = float(''.join(e for e in total if e.strip('$')))
tax = float(''.join(e for e in tax if e.strip('$')))

if (total < subtotal):
    total = subtotal

if tax > 0:
    total = subtotal + tax

print("Total items purchased = " + totalItemsSold)
print("Total before tax =  %.2f" %subtotal)
print("Tax = ", tax)
print("Total bill after tax =  %.2f" %total)
print("Total discount = ", float(discount))
