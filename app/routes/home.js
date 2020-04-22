import Route from '@ember/routing/route';

export default class HomeRoute extends Route {

   async model(){
        return{
             title: 'Welcome to Hangman!',
             by: 'By Electotron',
             description: "Hello and welcome to Hangman with Electotron! This game is a simple text based two player game where the first player inputs a word and the second player must guess what the word is. If the second player doesn't guess the correct word before the man is fully drawn then player 1 wins. If they manage to guess the word then player 2 wins!"


        }
    };
}
