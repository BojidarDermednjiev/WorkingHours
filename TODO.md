29 - Работи
30 - Работи

1 - Почива
2- Почива
3- Работи
-----------
29 - Почива
30 - Работи

1- Работи
2- Почива
3- Почива


Работи, Работи [ж] Почива, Почива
Почива, Почива [ж] Работи, Работи

Почива, Работи [] Работи, Почива
Работи, Почива [] Почива, Работи -

  if (i < workingDay.day - 1 || !workingDay.day || !workingDay.month) {
            if(currMonthDisplay == workingDay.month){
                data.text = "";

            }
          arr.push(data);
          continue;
        }
        const prevMonth = displayWorkingDays[monthIndex - 1]?.days?.slice(-2);

        // Initial values
        if (arr.length == 0 || workingDay.day - 1 == i) {
          data.text = "Работи";

          if (currMonthDisplay !== workingDay.month) {
            if (
              prevMonth[0]?.text == "Работи" &&
              prevMonth[1]?.text == "Работи"
            ) {
              data.text = "Почива";
            }
            if (
              prevMonth[0]?.text == "Почива" &&
              prevMonth[1]?.text == "Почива"
            ) {
              data.text = "Работи";
            }
          }
          arr.push(data);
          doesSkip = true;
          continue;
        }
        // If is skipping days for resting
        if (doesSkip) {
          doesSkip = false;
          data.text = "Работи";
          if (currMonthDisplay !== workingDay.month) {
            if (
              prevMonth[0]?.text == "Работи" &&
              prevMonth[1]?.text == "Работи"
            ) {
              data.text = "Почива";
            }
            if (
              prevMonth[0]?.text == "Почива" &&
              prevMonth[1]?.text == "Почива"
            ) {
              data.text = "Работи";
            }
          }
          arr.push(data);
          continue;
        }
        // Get prev values to check if two days is resting
        const getPrevTwo = arr.slice(-2);
        // Conditianl if the player is resting two days
        const isTwoRestingDays =
          getPrevTwo[0].text == "Почива" && getPrevTwo[1].text == "Почива";

        // If is resting, set up two days for working
        if (isTwoRestingDays) {
          data.text = "Работи";
          doesSkip = true;
        }