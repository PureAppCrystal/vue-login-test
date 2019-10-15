<template>
    <div>
        Menu1
        <button id='gotoMain/1' @click='goto'> Menu2 </button>
        
    </div>
</template>


<script>
import RouterMixin from '../mixins/RouterMixin.js'

export default {
    name: 'menu1',
    mixins: [RouterMixin],
    methods: {
        goto: function() {
            this.$router.push('/main/menu2')
        }
    }
}
</script>