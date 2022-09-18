/<regex>/

matches 'a'
/a/

[A-Z][a-z][a-z][a-z]
[A-Z][a-z]{3}


^ - beginning of string 
$ - end of the string

/^abcd$/ matches abcd
Quantifiers -
    {n} ->match the prev pattern exactly n times
    {n,m}-> between n and m both inclusive
    {n,} -> atleast n times  or n to infinity
    {,m} -> atmax m times. 0 to m times

operators-

    * -> matches the 0 or more occurances prev character
    + -> matches the 1 or more occurances prev character
    . -> match any character
    ? -> 0/1 of prev charater

grouping 
    \d -> match any digit
    \D -> match everything except digit
    \w -> match any word character a-z,A-Z,0-9,_
    \W -> match everything except word character

basic email validator -
^[a-z]\w*\.?\w+@[a-z]{3,}\.[a-z]{2,}$

^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[\w\W]{8,}$
