<script>
// this expects to be placed on a textarea
// it takes the value of the textarea and passed it along as a string
// that way HTML is displayed without Vue parsing it first
// then the output is placed as a <pre><code> combo
export default {
  name: 'pre-code',

  render: function (createElement) {
    return createElement('pre', [
      createElement('code', this.$slots.default)
    ]);
  }
}
</script>

<style lang="scss">
pre {
  margin: 20px 0;
  width: calc(100% - 40px);
}
// for stacked pre-codes
.pre-top {
  margin-bottom: 0;
}
.pre-middle {
  margin-bottom: 0;
  margin-top: 0;
}
.pre-bottom {
  margin-top: 0;
}
</style>
