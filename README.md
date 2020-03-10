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
Current problem: 'd', 's', 'w' values doesn't work because of the same group names in regular expression syntax 
and the way regular expression is composed(with screening symbol "\" before each bracket).
Can be solved by avoiding screening symbols and handling "[]" case separately.
Multi symbol bracket pairs can be fixed with grouping syntax("(expression)") of regular expressions.

4) Generates 2 arrays 
