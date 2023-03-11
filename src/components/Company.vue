<template>
  <div class="container mt-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Number</th>
          <th>Tashkilotlar Nomi</th>
          <th>Skladlar soni</th>
          <th>Tovarlar soni</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in company.datas" :key="data.id">
          <td>{{ data.id }}</td>
          <td><RouterLink :to="'/store/' + data.id">{{ data.company_name }}</RouterLink></td>
          <td>{{ company.store.filter(el=>el.company_id===data.id).map(el=>el.count)[0] ?? 0 }}</td>
          <td>{{ company.product.filter(el=>el.company_id===data.id).map(el=>el.count)[0] ?? 0 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Company',
  data() {
    return {
      company:[],
    }
  },
  methods: {
    async getRegion(id){
      axios.get(`http://intercontinental/api/company/getCompany.php?id=${id}`).then(res=>this.company=res.data)
    },
    
  },
  
  mounted() {
    this.getRegion(this.$route.params.id)
  },
}
</script>

<style>
  
</style>