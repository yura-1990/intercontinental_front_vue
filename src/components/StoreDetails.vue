<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Number</th>
                <th>Tovarlar</th>
                <th>Kirdi</th>
                <th>Chiqdi</th>
                <th>Qoldiq</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in products.datas" :key="data.id">
                <td>{{ data.id }}</td>
                <td data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                  <button >{{ data.product_name }}</button>
                </td>
                <td>{{ data.import ?? 0 }}</td>
                <td>{{ data.export ?? 0 }}</td>
                <td>{{ data.import -  data.export}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props:{
    products:{
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>