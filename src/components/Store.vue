<template>
  <div class="container mt-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Number</th>
          <th>Sklad nomi</th>
          <th>Turi</th>
          <th>Tovarlar</th>
          <th>Soni</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in stores.datas" :key="data.id">
          <td>{{ data.id }}</td>
          <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
            <button class="bg-transparent border-0 text-primary text-underline" @click="()=>getId(data.id)">{{ data.store_name }}</button>
          </td>
          <td>
            <select class="form-select"  @change="(e)=>imOrEx=e.target.value">
              <option hidden>Tanlang typeni</option>
              <option value="import">Kirdi</option>
              <option value="export">Chiqdi</option>
            </select>
          </td>
          <td>
            <select class="form-select" @change="(e)=>productId=e.target.value">
              <option hidden>Tanlang Tovarlarni</option>
              <template v-for="prod in stores.product" :key="prod.id">
                <option v-if="data.id === prod.store_id"  :value="prod.id">
                  {{ prod.product_name }}            
                </option>
              </template>
            </select>
          </td>
          <td><input class="form-control" type="number"  @input="(e)=>amount=e.target.value"></td>
          <td>
            <button class="btn btn-outline-dark" @click="getData">Save</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Modal :products="products"/>
</template>

<script>
import axios from 'axios'
import Modal from './StoreDetails.vue'
export default {
  name: 'Store',
  components: {
    Modal
  },
  data() {
    return {
      stores: [],
      imOrEx: null,
      productId: null,
      amount: null,
      products:[]
    }
  },
  methods: {
    async getStore(id) {
      axios.get(`http://intercontinental/api/store/getStore.php?id=${id}`).then(res => {

        this.stores = res.data
      })
    },
    
    getId(id){
      axios.get(`http://intercontinental/api/product/getStoreRelation.php?id=${id}`).then(res => {
        console.log(res.data);
        this.products = res.data
      })
    },
    
    async getData(){
      if (this.imOrEx !== null &&  this.productId != null && this.amount != null) {
        const data = {
          'id': this.productId
        }
        data[this.imOrEx] = this.amount
        axios.post(`http://intercontinental/api/product/editProduct.php`, data)
      }
      
      this.amount=null
      this.productId=null
      this.imOrEx=null
    }
  },

  mounted() {
    this.getStore(this.$route.params.id)
  },
}
</script>

<style></style>