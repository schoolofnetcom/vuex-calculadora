export default {
    template: require('html!./commands.component.html'),
    data: function () {
        return {
            operators: ['+', '-', '*', '/'],
            commands: ['=', 'C']
        };
    },
    methods: {
        addOperator(operator){
            this.$dispatch('ADD_ELEMENT',operator);
        },
        callCommand(command){
            switch (command){
                case '=':
                    this.$dispatch('RESULT');
                    break;
                case 'C':
                    this.$dispatch('CLEAR');
                    break;
            }
        }
    }
}