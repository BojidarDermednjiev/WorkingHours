!====== Actual TODO ======!

<!-- BUGS -->

[x] - When working month or day is set, the app is crashing on prev month
[x] - For prev year is crashing the app
[] - Calendar is not working when is 1 by 1
<!-- Code things -->

[x] - Optimizing the code

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

2023 + 0 = 20230
2023 + 1 = 20231