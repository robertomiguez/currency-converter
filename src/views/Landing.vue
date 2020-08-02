<template>
    <div class="content">
        <div class='title'>Currency Converter</div>
        <div class='description'>{{description}}</div>
        <CheckRates/>
        <Rates class='rates'/>
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
    description: 'All our data is provided for free, and as-is without any warranty.'
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
  font-weight: 900;
}
.description {
  color: darkgray;
  text-align: center;
  padding-bottom: 25px;
  margin: auto;
  width: 22em;
  font-size: 1.075em;
}
.rates {
  padding-bottom: 50px;
}

@media only screen and (max-width: 600px) {
  .content {
    padding-top: 30px;
    height: 200px;
  }
  .description {
    font-size: 0.875em;
  }
}

</style>
