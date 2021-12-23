<template>
  <div>
    <loading :active.sync="isLoading"/>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th width="200">Email</th>
          <th>購買款項</th>
          <th width="120">應付金額</th>
          <th width="100">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item.id">
          <!-- <th scope="row">{{ index + 1 }}</th> -->
          <td>{{ item.create_at }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量： {{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.total | currency }}</td>
          <td>
            <span class="text-success" v-if="item.is_paid">已付款</span>
            <span class="text-danger" v-else>尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>   

<script>
export default {
  data() {
    return {
      isLoading: false,
      orders: [],
    }
  },
  methods: {
    getOrder() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/orders`
      console.log(api)
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then((response) => {
      console.log(response.data)
      vm.orders = response.data.orders;
      vm.isLoading = false
      // qvm.pagination = response.data.pagination
      })
    }
  },
  mounted() {
    this.getOrder()
  },
}
</script>