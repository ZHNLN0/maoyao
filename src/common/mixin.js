import { mapGetters, mapMutations, mapActions } from 'vuex';

export const searchMixin = {
  data () {
    
  },
  computed: {
    ...mapGetters([
      'citySerchHistory'
    ])
  },
}