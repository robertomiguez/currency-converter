<template>
    <div class="content">
        <div class='title'>Currency Converter</div>
        <div class='description'>{{description}}</div>
        <CheckRates/>
        <Rates/>
    </div>
</template>

<script>
import CheckRates from '../components/CheckRates'
import Rates from '../components/Rates'

export default {
  name: 'Landing',
  components: {
    CheckRates,
    Rates
  },
  data: () => ({
    description: 'Receive competitive and transparent pricing with no hidden spreads. See how we compare.'
  })
}
</script>

<style>

.content {
  background-color: #fff;
  padding-top: 100px;
  height: 200px;
}
.title {
  font-size: 1.875em;
  padding-bottom: 20px;
}
.description {
  color: darkgray;
  text-align: center;
  padding-bottom: 25px;
  margin: auto;
  width: 22em;
}
</style>
