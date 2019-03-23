<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList :cities="cities" :hotCities="hotCities" :letter="letter"></CityList>
    <CityAlphabet :cities="cities" @change="handleLetterChange"></CityAlphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityAlphabet from './components/Alphabet'
  import CityList from './components/List'

  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    methods: {
      getCityInfo() {
        axios.get('/api/city.json').then(this.handleGetCityInfoSuccess)
      },
      handleGetCityInfoSuccess(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      },
      handleLetterChange(letter) {
        this.letter = letter;
      }
    },
    mounted() {
      this.getCityInfo();
    }
  }
</script>

<style lang="stylus" scoped>

</style>
