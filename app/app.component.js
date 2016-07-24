import ResultComponent from './result.component';
import NumbersComponent from './numbers.component';
import CommandsComponent from './commands.component';

export default{
    template: require('html!./app.component.html'),
    data: function(){
        return {
            inline: ""
        }
    },
    components: {
        'result-component': ResultComponent,
        'numbers-component': NumbersComponent,
        'commands-component': CommandsComponent
    },
    events: {
        ADD_ELEMENT(element){
            this.inline += element;
        },
        RESULT(){
            this.inline = eval(this.inline) + "";
        },
        CLEAR(){
            this.inline = "";
        }
    }
}

