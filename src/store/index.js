import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import { db } from './db.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickers: [],
    tickersCalculated: [],
    currencies: [
      { id: 'BTC', name: 'bitcoin' },
      { id: 'ETH', name: 'ethereum' },
      { id: 'DASH', name: 'dash' },
      { id: 'BAT', name: 'basic-attention-token' }
    ],
    error: null
  },
  actions: {

    async loadTickers ({ commit, state }, currencyId) {
      try {
        const coinName = state.currencies.filter(currency => currency.id === currencyId)[0].name
        const coin = await axios({
          method: 'get',
          url: `https://api.coingecko.com/api/v3/coins/${coinName}/tickers`,
          params: {
            exchange_ids: 'binance'
          }
        })
        commit('SET_TICKERS', coin.data.tickers.filter(ticker => ticker.base === currencyId))
      } catch (error) {
        commit('SET_ERROR', 'Loading error.')
      }
    },
    async updateTickers ({ commit, state }, amount) {
      try {
        let tickersCalculated = []
        if (amount === 0) {
          commit('SET_TICKERS_CALCULATED', tickersCalculated)
        } else {
          tickersCalculated = await [...state.tickers.map(ticker => {
            return { ...ticker, last: (ticker.last * amount).toFixed(5) }
          })]
        }
        commit('SET_TICKERS_CALCULATED', tickersCalculated)
      } catch (error) {
        commit('SET_ERROR', 'Filtering error.')
      }
    }
  },
  mutations: {
    SET_TICKERS (state, tickers) {
      state.tickers = tickers
    },
    SET_TICKERS_CALCULATED (state, tickersCalculated) {
      state.tickersCalculated = tickersCalculated
    },
    SET_ERROR (state, error) {
      state.error = error
    }
  },
  getters: {
    getTickersCalculated (state) {
      return state.tickersCalculated
    },
    getCurrenciesId (state) {
      return state.currencies.map(currency => currency.id)
    },
    getError (state) {
      return state.error
    }
  },
  modules: {
  }
})
