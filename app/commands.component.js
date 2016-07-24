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
            this.$parent.inline += operator;
        },
        callCommand(command){
            switch (command){
                case '=':
                    this.$parent.inline = eval(this.$parent.inline) + "";
                    break;
                case 'C':
                    this.$parent.inline = "";
                    break;
            }
        }
    }
}