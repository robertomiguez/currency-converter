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
  justify-content: center;
  align-items: center;
  margin-right: 150px;
  margin-bottom: 3px;
}
.flex-grid .amount {
  flex: 0 0 350px;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
}
.flex-grid .flag {
  flex: 0 0 45px;
  text-align: center;
  font-size: 16px;
}
.flex-grid .currency {
  flex: 0 0 45px;
  text-align: center;
  font-size: 16px;
}

@media only screen and (max-width: 600px) {
  .flex-grid {
    margin-right: 120px;
  }
  .flex-grid .amount {
    flex: 0 0 270px;
  }
  .flex-grid .flag {
    flex: 0 0 35px;
  }
  .flex-grid .currency {
    font-size: 14px;
    flex: 0 0 35px;
  }
}
</style>
