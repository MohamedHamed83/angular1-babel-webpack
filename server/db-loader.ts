import { database, initializeApp } from "firebase";
import { dbData } from "./data";


let config =  {
  apiKey: "AIzaSyCTtFZ6R8yGR84ViC1sKMqFvm21poZp_sY",
  authDomain: "limitless-b772c.firebaseapp.com",
  databaseURL: "https://limitless-b772c.firebaseio.com",
  storageBucket: "limitless-b772c.appspot.com",
  messagingSenderId: "702010957834"
};
console.log('Initizalizing Firebase database ... ');

initializeApp(config);


const plansRef = database().ref('plans');
const workoutsRef = database().ref('workouts');



dbData.plans.forEach(plan => {

  console.log('adding plan', plan.url);

  const planRef = plansRef.push({
    url: plan.url,
    description: plan.description
  });

  let workoutsKeysPerPlan = [];

  plan.workouts.forEach((workout: any) => {

    console.log('adding workout ', workout.url);

    workoutsKeysPerPlan.push(
      workoutsRef.push({
        workoutName: workout.workoutName,
        group: workout.group,
         week: workout.week,
        duration: workout.duration,
        Reps: workout.Reps,
        Sets: workout.Sets,
        imgUrl: workout.imgUrl,
        planId: planRef.key
      }).key);

  });


  const association = database().ref('workoutsKeysPerPlan');

  const workoutsPerPlans = association.child(planRef.key);

  workoutsKeysPerPlan.forEach(workoutKey => {
    console.log('adding workouts to plans ');

    const workoutPlanAssociation = workoutsPerPlans.child(workoutKey);

    workoutPlanAssociation.set(true);
  });


});
