streams

* sequence of bytes is called streams.
=> every process has three streams 

-> standard In
-> standard OUT
-> standatd ERROR

*by deafault standard input is keyboard and by default standard out is display

PIPING ::__

 The process of connecting standard out of one process to satandard in of other process is called piping.

COMMANDS:-

=> CUT

-> it is used to cut out file selectively.
-> -c-10(range) we can specify how many chars we want from every line and we    can also give different ranges at a time 
-> -f -d ',' we can also cut the lines by using deliminator means if we give comma it will cut the lines till comma by default it will cut till space.
f stands for fields.
EX;- cut -f1 -d ',' finalSrkMovies;
EX:- cut -c-10,(20 - 30) finalSrkMovies

=> sort

-> it is used sort the data
-> -n means numeric it will sort numbers
-> -rn means it will sort in reverse order
-> -R means it will sort randomly however it want
-> -t means it will particulary sort particular field (here fileds represented with k also).
-> -u it is used to remove duplicates and give unique values

=> unique

-> it is used to remove consecutive duplicates
-> -c it will count of data that and which are consecutive it will group and give count other wise it will count it as unique element. 




