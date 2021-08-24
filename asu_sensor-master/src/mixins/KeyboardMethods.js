const KeyboardMethods = {
    data(){
        return{
            keyboardString: '',
        }
    },
    methods:{
        addLitter(e) {
            this.keyboardString += e
        },
        deleteLitter() {
            this.keyboardString = ''
        },
        spaceLitter() {
            this.keyboardString += ' '
        },
        backspaceLitter() {
            this.keyboardString = this.keyboardString.substr(0, this.keyboardString.length - 1)
        },
    }
}

export default KeyboardMethods
