<template>
    <div class="container">
        <header
            class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-3 mb-2 mb-md-0">
                <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><router-link to="/" class="nav-link px-2 link-secondary"
                        exact-active-class="link-dark">Frontend</router-link>
                </li>
                <li><router-link to="/backend" class="nav-link px-2 link-secondary"
                        exact-active-class="link-dark">Backend</router-link></li>
            </ul>
            <div class="col-md-4 text-end" v-if="user">
                <router-link to="/rankings" type="button" class="btn me-2">Rankings</router-link>
                <router-link to="/stats" type="button" class="btn me-2">Stats</router-link>
                <a href="#" type="button" class="btn btn-outline-primary me-2" @click="logout">Logout</a>
                <router-link to="/profile" type="button" class="btn btn-primary">Hello, {{ user.first_name }} {{
                    user.last_name }}</router-link>
            </div>
            <div class="col-md-3 text-end" v-else>
                <router-link to="/login"><button type="button"
                        class="btn btn-outline-primary me-2">Login</button></router-link>
                <router-link to="/register"><button class="btn btn-primary">Sign-up</button></router-link>
            </div>

        </header>
    </div>
</template>


<script setup lang="ts">
import { useUserStore } from "@/stores/userStore"
import { storeToRefs } from "pinia";
import axios from "axios"


const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const logout = async () => {
    console.log(user.value)
    await axios.post("logout")
    userStore.setUser(null)
}

</script>