<template>
  <div class="container mt-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Number</th>
          <th>Viloyat nomi</th>
          <th>Tumanlar soni</th>
          <th>Tashkilotlar soni</th>
          <th>Skladlar soni</th>
          <th>Tovarlar soni</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in regions.datas" :key="data.id">
          <td>{{ data.id }}</td>
          <td><RouterLink :to="'/district/'+data.id">{{ data.region_name }}</RouterLink></td>
          <td>{{ regions.district.filter(el=>el.region_id===data.id).map(el=>el.count)[0] ?? 0 }}</td>
          <td>{{ regions.company.filter(el=>el.region_id===data.id).map(el=>el.count)[0] ?? 0 }}</td>
          <td>{{ regions.store.filter(el=>el.region_id===data.id).map(el=>el.count)[0] ?? 0 }}</td>
          <td>{{ regions.product.filter(el=>el.region_id===data.id).map(el=>el.count)[0] ?? 0 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Home',
  data() {
    return {
      regions:[]
    }
  },
  methods: {
    async getRegion(){
      axios.get('http://intercontinental/api/regions/getRegions.php').then(res=>this.regions=res.data)
    },
    
  },
  
  mounted() {
    this.getRegion()
  },
}
</script>

<style>
  
</style>