const app = Vue.createApp({
    template: `
        <form autocomplete="off">
            <div>
                <input v-model='name'type="text" name="name" id="name" placeholder="Enter your first name">
            </div>
            <div>
                <input v-model='surname'type="text" name="surname" id="surname" placeholder="Enter your last name">
            </div>
            <div>
                <input v-model='age' type="number" name="age" id="age" placeholder="Enter your age">
            </div>
            <div>
                <button v-on:click="checkAge()" type="submit">Submit</button>
            </div>
        </form>
        <p v-if="isOver18 && mustDisplay">{{successMessage}}</p>
        <p v-if="!isOver18 && mustDisplay">{{failMessage}}</p>

    `,
    data: function(){
        return{
            name: '',
            surname:'',
            age: undefined,
            isOver18:false,
            mustDisplay:false,
            successMessage: `You are over 18`,
            failMessage: `You are under 18`
        }
    },
    methods:{
        checkAge(){
            if(age.value >17){
                this.isOver18 = true;
                this.mustDisplay = true;
            }else{
                this.isOver18 = false;
                this.mustDisplay = true;
            }
        }
    }
})

app.mount("#App");