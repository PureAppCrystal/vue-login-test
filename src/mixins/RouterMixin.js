const DEFAULT_TRANSITION = 'fade';
export default {
    data() {
        return {
            transitionName: DEFAULT_TRANSITION
        }
    },
    created() {
        console.log("RouterMixinx")
        this.$router.beforeEach((to, from, next) => {
            let transName = to.meta.transitionName || from.meta.transitionName;
            if (transName === 'slide') {       
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                transName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
            }
            this.transitionName = transName || DEFAULT_TRANSITION;
            next();
        });

    },
}