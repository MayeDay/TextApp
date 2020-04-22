import Route from '@ember/routing/route';

export default class HomeRoute extends Route {

   async model(){
        return{
             title: 'Welcome to Hangman!',
             by: 'By Electotron'


        }
    };
}
