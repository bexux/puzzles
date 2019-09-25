# Python Curry 
# cons(a, b) constructs a pair, 

# and car(pair) and cdr(pair) returns the first and last element of that pair.

# For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4

# Given python implementation of cons:
def cons(a, b):
  def pair(f):
    return f(a, b)
  return pair

# Question: Implement car and cdr
# Solution: pair takes a function and returns function(a,b)
# pass a function into pair that will return either a or b

def car(pair):
  def return_first(a, b):
    return a
  return pair(return_first)

def cdr(pair):
  def return_last(a, b):
    return b
  return pair(return_last)

print(car(cons(3, 4)))
print(cdr(cons(3, 4)))

# Question 2, rewrite in JavaScript:


# function cons(a, b) {
# return function pair(f) { 
#     return f(a, b);
#   }
# }

# function cdr(pair) {
#   function return_last(a, b) {
#       return b
#   }
#   return pair(return_last)
# }

# function car(pair) {
#   function return_first(a, b) {
#       return a
#   }
#   return pair(return_first)
# }

# console.log(cdr(cons(3, 4)))
# console.log(car(cons(3,4)))