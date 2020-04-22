import Component from '@glimmer/component';

export default class HangmanStandComponent extends Component {

    logic(list){


        for(var i = 0; i < list.length; i++){
            alert(list[i].word);
        }
    }
}
