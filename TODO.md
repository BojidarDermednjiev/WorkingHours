!====== Actual TODO ======!

<!-- BUGS -->

[] - When working month or day is set, the app is crashing on prev month

<!-- Code things -->

[] - Optimizing the code

<!-- Pages -->

[] - Login page
[] - Creating User || employees || workes
[] - Employee page with the calendar
[] - Admin panel with calendar for adding the graphic for the employee

<!-- Design -->

[] - Responsive design
!====== Business Logic of the app ======!

// --- If working days are 2

<!-- This is for curr month -->

true, true - false,false
false, false - true,true

<!-- This is for next month -->

false, true - true, false
true,false- false, true

// ---- If working days are 3

<!-- This is for curr month -->

true,true,true - false,false,false
false,false,false - true,true,true

<!-- This is for next month -->

false,false,false - true,true,true
true,true,true - false,false,false

false,true,true - true,false,false,false
false,false,true - true,true,false,false,false

true,false,false - false,true,true,true
true,true,false - false,false,true,true,true
