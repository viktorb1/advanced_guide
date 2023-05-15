<template>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>

        <nav class="my-2 my-md-0 mr-md-3">
            <router-link to="/profile" class="p-2 text-white text-decoration-none">Hello, {{ props.user?.first_name }}{{
                props.user?.last_name }}
            </router-link>
            <a href="#" class="p-2 text-white text-decoration-none" @click="logout">Sign out</a>
        </nav>
    </header>
</template>

<script setup lang="ts">

import axios from "axios"
import { useRouter } from "vue-router";

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    is_ambassador: boolean;
}

const router = useRouter()

const props = defineProps<{
    user: User | null
}>()

const logout = async () => {
    await axios.post("logout", {}, { withCredentials: true })
    await router.push("/login")
}

</script>