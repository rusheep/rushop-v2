<template>
    <div>
        <form class="form-signin" @submit.prevent = "signin">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
                <input type="email" class="form-control" v-model = "user.username" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" v-model = "user.password" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      user: {
          username: '' , 
          password: '' , 
      },
    };
  },
  methods: {
      signin() {
        const api = `${process.env.APIPATH}/admin/signin`;
        const vm = this;
        this.$http.post(api , vm.user).then((response) => {
            console.log(response.data);
            if (response.data.success) {
                const token = response.data.token;
                const expired = response.data.expired;
                console.log(token , expired);
                document.cookie = `ruToken = ${token}; expires = ${ new Date(expired) };`;
                vm.$router.push('/admin/products');
            }
        })
      },
  },
};
</script>

<style scoped>
        html,
    body {
    height: 100%;
    }

    body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
    }

    .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    }

    .form-signin .checkbox {
    font-weight: 400;
    }

    .form-signin .form-floating:focus-within {
    z-index: 2;
    }

    .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    }
</style>
