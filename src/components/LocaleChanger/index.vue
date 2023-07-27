<template>
  <el-select v-model="$i18n.locale" size="mini" placeholder="lang" class="select">
    <el-option v-for="(lang, i) in langs" :key="`Lang${i}`" :label="lang" :value="lang" />
  </el-select>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data() {
    return { langs: Object.keys(this.$i18n.messages) }
  }
}
</script>

<style>
.select {
  width: 112px;
}
</style>
