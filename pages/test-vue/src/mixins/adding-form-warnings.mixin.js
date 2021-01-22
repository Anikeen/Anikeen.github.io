export default {  
  computed: {
    isNameEmpty() {
      return this.$v.name.$dirty && !this.$v.name.required
    },
    hasNameMinLength() {
      return this.$v.name.$dirty && !this.$v.name.minLength
    },
    isLiteral() {
      return this.$v.name.literal
    },
    isPhoneEmpty() {
      return this.$v.phone.$dirty && !this.$v.phone.required
    } ,
    hasPhoneMinLength() {
      return this.$v.phone.$dirty && !this.$v.phone.minLength
    }   
  },  
}