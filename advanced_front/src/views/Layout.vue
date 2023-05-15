<template>
    <v-app>
        <Nav :user="user" />
        <div class="container-fluid">
            <div class="row">
                <Menu />

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                    <div class="table-responsive">
                        <router-view />
                    </div>
                </main>
            </div>
        </div>
    </v-app>
</template>

<script setup lang="ts">

import Nav from "@/components/Nav.vue"
import Menu from "@/components/Menu.vue"
import { onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
import axios from "axios"

const router = useRouter()
const user = ref(null)

onMounted(async () => {
    try {
        const { data } = await axios.get("user", { withCredentials: true })
        user.value = data
    } catch (e) {
        await router.push("/login")
    }
})

</script>