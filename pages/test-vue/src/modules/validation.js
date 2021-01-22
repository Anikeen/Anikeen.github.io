module.exports = {
  literal(value) {
    if (value) {
      const reg = /^[a-zA-Zа-яА-ЯёЁ\s\.]+$/;
      const isMatch = reg.test(value)
      
      if (!isMatch) {
        this.name = value.slice(0, -1)
        return false
      }
      return true
    }
    return true
  }
}