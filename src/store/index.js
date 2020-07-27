import Vue from 'vue'
import Vuex from 'vuex'
// import SDK from '@uphold/uphold-sdk-javascript'
import { db } from './db.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickers: [],
    tickersCalculated: []
  },
  actions: {
    // TODO should be this, unfortunately it didn't connect :(

    // loadTickers ({ commit }, currency) {
    //   const sdk = new SDK({
    //     baseUrl: 'https://api-sandbox.uphold.com',
    //     clientId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    //     clientSecret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    //   })

    //   sdk.authorize('code')
    //     .then(() => sdk.getTicker())
    //     .then(tickers => {
    //       const tickers = await tickers.filter(ticker => ticker.pair.slice(0, 3) === currency)
    //       commit('SET_TICKERS', tickers)
    //     })
    // }

    async loadTickers ({ commit }, currency) {
      try {
        const tickers = await db.filter(record => record.pair.slice(0, 3) === currency)
        commit('SET_TICKERS', tickers)
      } catch (error) {
        // TODO Change to friendly message on page
        console.error('Loading error.')
      }
    },
    async updateTickers ({ commit, state }, amount) {
      try {
        if (amount === 0) return
        const tickersCalculated = await [...state.tickers.map(ticker => {
          return { ...ticker, ask: (ticker.ask * amount).toFixed(5) }
        })]
        commit('SET_TICKERS_CALCULATED', tickersCalculated)
      } catch (error) {
        // TODO Change to friendly message on page
        console.error('Filtering error.')
      }
    }
  },
  mutations: {
    SET_TICKERS (state, tickers) {
      state.tickers = tickers
    },
    SET_TICKERS_CALCULATED (state, tickersCalculated) {
      state.tickersCalculated = tickersCalculated
    }
  },
  getters: {
    getTickersCalculated (state) {
      return state.tickersCalculated
    }
  },
  modules: {
  }
})
