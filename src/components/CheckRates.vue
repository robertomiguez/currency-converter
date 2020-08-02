<template>
    <div>
        <div class="wrap">
            <Money class='amount' v-model="amount" v-bind="money" :change="updateTickers(amount)"></Money>
            <Select class="select" :options="currencies" @selected="setSelected"/>
        </div>
        <div class='hint' v-show='amount===0'>Enter an amount to check the rates.</div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Money } from 'v-money'
import Select from '../components/Select'

export default {
  name: 'CheckRates',
  components: {
    Money,
    Select
  },
  data: () => ({
    amount: 0,
    currency: 'BTC',
    money: {
      decimal: '.',
      thousands: ',',
      prefix: '',
      suffix: '',
      precision: 5,
      masked: false
    }
  }),
  methods: {
    ...mapActions([
      'updateTickers',
      'loadTickers'
    ]),
    async setSelected (selected) {
      try {
        this.currency = selected
        await this.loadTickers(this.currency)
        await this.updateTickers(this.amount)
      } catch (error) {
        this.images = []
      }
    }
  },
  computed: mapGetters({
    currencies: 'getCurrenciesId'
  }),
  mounted () {
    this.loadTickers(this.currency)
  }
}
</script>

<style>
.wrap {
  border: 0px;
  width: 350px;
  margin: 8px 0;
  display: inline-block;
  background-color: #f4f8fb;
}
.amount {
  margin-bottom: 15px;
  width: 250px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  font-size: 28px;
  background-color: #f4f8fb;
  border-width: 0;
  outline:none;
}
.select {
    width: 50px;
}
.hint {
  font-size: 0.75em;
  color: darkgray;
  padding-bottom: 5px;
}

@media only screen and (max-width: 600px) {
  .wrap {
    width: 300px;
  }
  .amount {
    width: 200px;
  }
}

</style>
