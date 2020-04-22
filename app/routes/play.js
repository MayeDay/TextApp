import Route from '@ember/routing/route';

export default class PlayRoute extends Route {

    async model(){

        return [{

            word:'Programming',
            used: false
        },{
            word:'Compiler',
            used: false,
        },{
            word:'Variable',
            used: false,
        },{
            word:'Constructor',
            used: false,
        },{
            word:'Language',
            used: false,
        },{
            word:'Data-Type',
            used: false,
        },{
            word:'Function',
            used: false,

        },{
            word:'Method',
            used: false,
        },{
            word:'String',
            used: false,

        },{
            word:'Package',
            used: false,
        },{
            word:'Route',
            used: false,
        },{
            word:'Component',
            used: false,

        },{
            word:'Recursion',
            used: false,
        },{
            word:'Model',
            used: false,
        },{
            word:'Controller',
            used: false,
        },{
            word:'Client',
            used: false,
        }]


    }
}
