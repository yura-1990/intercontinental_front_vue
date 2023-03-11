<template>
  <div class="container mt-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Number</th>
          <th>Tumanlar Nomi</th>
          <th>Tashkilotlar soni</th>
          <th>Skladlar soni</th>
          <th>Tovarlar soni</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in district.datas" :key="data.id">
          <td>{{ data.id }}</td>
          <td><RouterLink :to="'/company/' + data.id">{{ data.district_name }}</RouterLink></td>
          <td>{{ district.company.filter(el=>el.district_id===data.id).map(el=>el.count)[0] ?? 0 }}</td>
          <td>{{ district.store.filter(el=>el.district_id===data.id).map(el=>el.count)[0] ?? 0 }}</td>
          <td>{{ district.product.filter(el=>el.district_id===data.id).map(el=>el.count)[0] ?? 0 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'District',
  data() {
    return {
      district:[],
    }
  },
  methods: {
    async getRegion(id){
      axios.get(`http://intercontinental/api/district/getDistrict.php?id=${id}`).then(res=>this.district=res.data)
    },
    
  },
  
  mounted() {
    this.getRegion(this.$route.params.id)
  },
}
</script>

<style>
  
</style>