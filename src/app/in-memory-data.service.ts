import { InMemoryDbService  } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cats = [
      {id: 11, name: 'Mr. Nice', color: 'Calico', hobby: 'Chew on cable.'},
      {id: 12, name: 'Narco', color: 'White', hobby: 'Make funny noise.'},
      {id: 13, name: 'Bombasto', color: 'Tiger', hobby: 'Meow loudly just to annoy owners.'},
      {id: 14, name: 'Celeritas', color: 'Black', hobby: 'Pee in human\'s bed.'},
      {id: 15, name: 'Magneta', color: 'Orange', hobby: 'Lick butt and make a weird face.'},
      {id: 16, name: 'RubberCat', color: 'Grey', hobby: 'Lay on arms while you\'re using the keyboard.'},
      {id: 17, name: 'Dynama', color: 'Toitoiseshell', hobby: 'Run around the house at 4 in the morning.'},
      {id: 18, name: 'Tail Shaker', color: 'Calico', hobby: 'Intently stare at the same spot.'},
      {id: 19, name: 'Cold Magma', color: 'Buff', hobby: 'Plan steps for world domination.'},
      {id: 20, name: 'Tornado', color: 'Tuxedo', hobby: 'Play with food and get confused by dust.'},
      {id: 21, name: 'Hair Factory', color: 'Tiger', hobby: 'Nap all day.'},
      {id: 22, name: 'Squirrel', color: 'Orange', hobby: 'Run up and down stairs.'},
      {id: 23, name: 'Mariachi', color: 'White', hobby: 'Push stuff off a table.'},
      {id: 24, name: 'Panther', color: 'Black', hobby: 'Grab pompom in mouth and put in water dish.'},
      {id: 25, name: 'Sylvester', color: 'Tuxedo', hobby: 'Pose purrfectly to show beauty belly.'},
    ];
    return {cats};
  }
}
