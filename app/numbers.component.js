export default {
    template: require('html!./numbers.component.html'),
    data: function () {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        }
    },
    methods: {
        addNumber(number){
            this.$parent.inline += number;
        }
    }
}