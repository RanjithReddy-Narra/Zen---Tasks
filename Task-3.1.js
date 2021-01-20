var cat = {
    "name": "Fluffy",
    "activities": ["play", "eat cat food"],
    "catFriends": [
    {
    "name": "bar",
    "activities": ["be grumpy", "eat bread omblet"],
    "weight": 8,
    "furcolor": "white"
    }, 
    {
    "name": "foo",
    "activities": ["sleep", "pre-sleep naps"],
    "weight": 3
    }]
}
   ///Height and weight ////
   cat.height=5;
   cat.weight=10;

   ///Rename cat's Name ///
   cat.name="Fluffyy";

   ///List activities of  cat Friends///
   for(i =0; i< cat.catFriends.length; i++){
    for(j =0; j< cat.catFriends[i].activities.length; j++){
      console.log(cat.catFriends[i].activities[j]);
    }
  }

  ////Print Cat Friend Name's ///

  for (i=0; i<cat.catFriends.length; i++){
          console.log(cat.catFriends[i].name);
  }


////Print's total weight of cat's friends///

var totalWeight = []

for ( i=0 ; i<cat.catFriends.length; i++){
    totalWeight += cat.catFriends[i].weight;
}   
console.log(totalWeight);

//// Activities of all cat's////

var cat1 = cat.activities;
var cat2 = " "
for(i =0; i< cat.catFriends.length; i++){
    for(j =0; j< cat.catFriends[i].activities.length; j++){
      cat2 += cat.catFriends[i].activities[j];
    }
  }
console.log(cat2)
console.log(cat1)


////Adding New Activites////

var newActivities = ['spinning', 'eating'];
    cat.catFriends[0].activities.push(...newActivities);
    cat.catFriends[1].activities.push(...newActivities);

   for(i =0; i< cat.catFriends.length; i++){
    for(j =0; j< cat.catFriends[i].activities.length; j++){
      console.log(cat.catFriends[i].activities[j]);
    }
  }

///Update Fur Color//

cat.catFriends[0].furcolor = "red"

console.log(cat.catFriends[0].furcolor);

console.log(cat.name);