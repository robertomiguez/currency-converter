<template>
    <div>
        <div class="flex-grid" v-for="ticker in tickersCalculated" :key="ticker.pair">
            <div class="amount">{{ ticker.ask }}</div>
            <div class="flag">
                <img :src="require(`../assets/${ticker.pair.slice(3,6)}.png`)">
            </div>
            <div class="currency">
                {{ticker.pair.slice(3,6)}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Rates',
  computed: mapGetters({
    tickersCalculated: 'getTickersCalculated'
  })
}
</script>

<style>
.flex-grid {
  display: flex;
  margin: 20px 0px;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
}
.flex-grid .amount {
  width: 180px;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
}
.flex-grid .flag {
  width: 50px;
  text-align: center;
  font-size: 16px;
}
.flex-grid .currency {
  width: 10px;
  text-align: center;
  font-size: 16px;
}
</style>
