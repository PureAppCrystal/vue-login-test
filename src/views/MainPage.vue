<template>
    <div>
        <transition :name="transitionName" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>
import RouterMixin from '../mixins/RouterMixin.js'

export default {
    name: 'mainPage',
    
}
</script>