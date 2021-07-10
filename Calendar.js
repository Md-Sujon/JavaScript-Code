var MonthName = "April"
var StartingDay = 0;
var Day = 31;
console.log("Calendar Of Month",MonthName);
console.log("Sun  Mon  Tue  Wed  Thu  Fri  Sat");


for (var i = 0; i <5; i++) {
    var DayRow = "";
    for (var j = 1; j <=7; j++) {
        var currentDay = 7*i + j-StartingDay;
        if(currentDay > Day){
            break;
        };

        if(currentDay<1){
       currentDay =" "
        }
         if(currentDay>9){
            DayRow += currentDay + "   ";
         }else{
            DayRow += currentDay + "    ";
         }


        
        
    }
    console.log(DayRow)
}



// for(var i = 0; i < 5; i++) {
//     var DayRow= "";
//     for(var j = 1; j <= 7;j++){
//         var CurrentDay = 7*i+j-StartingDay;
//       if(CurrentDay > Day){
//           break;
//       };

// if(CurrentDay<1){
//     CurrentDay =" ";
// }

//       if(CurrentDay>9){
//         DayRow += CurrentDay+"   ";
//       }else{
//         DayRow += CurrentDay+"    ";
//       }
        

//     }console.log(DayRow);
// }