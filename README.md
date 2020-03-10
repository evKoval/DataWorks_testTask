Tests tasks for DataWorks interview.

4 tasks completed including:
  1) calendar of the month for selected date
  2) Creation of "spiral" matrix with selected dimensions(width, height) = number of cells in each direction
  3) Bracket pairs validation
  4) Generator of 2 arrays with predefined summs
  
Each task can be selected by clicking corresponding tab on top of the page.

  1) Calendar creates calendar of the month for date entered in input.
Valid date formats are [dd.mm.yyyy, dd-mm-yyyy, dd/mm/yyyy].
Valid values for years - [1600-9999]. Default date is 10.03.2020.
Input date is required.

  2) Spiral matrix creates 2-dimensional array filled with integers in ascending order clockwisely.
Number of cells in horizontal and vertical directions are defined by user. Default values are 20x20.
Valid inputs for dimensions are integers from 0 to 100. Both input fields are required.
Filling direction is highlighted with fading out background color.

  3) Bracket validator checks for correct bracket pairs and its' order in entered by user phrase.
Bracket pairs participating in validation are selected by selecting corresponding checkboxes.
Custom bracket pair can be entered in input fields. Custom bracket(opening or closing) can be only 1 symbol long.
Default bracket expression is "(1+2*[3-4]/{5+6})", default validating brackets are "()". 
Current problem: 'd', 's', 'w' values doesn't work because of the same group names in regular expression syntax 
and the way regular expression is composed(with screening symbol "\" before each bracket).
Can be solved by avoiding screening symbols and handling "[]" case separately.
Multi symbol bracket pairs can be fixed with grouping syntax("(expression)") of regular expressions.

4) Generates 2 arrays of binary values [0, 1] with user defined length and summs of elements.
Valid values: 
        - arrays length L [1-1000]
        - summ of elements in first(second) array 0 < M(N) <= L
        - array of summs of first and second arrays' elements with the same indices Sn. Sn length = L. Sn elements can be [0-2].
        Summ of Sn elements must be equal to M + N. Quntity of "2" values in Sn must be less or equal to the smallest of M, N.
All input fields are required. Default values are L = 20, M,N = 15, Sn = "22221121112121212121".
