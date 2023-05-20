<template>
    <div>
        <v-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">#</th>
                        <th class="text-left">Code</th>
                        <th class="text-left">Count</th>
                        <th class="text-left">Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="link in links" :key="link.id">
                        <td>{{ link.id }}</td>
                        <td>{{ link.code }}</td>
                        <td>{{ link.orders.length }}</td>
                        <td>$ {{ link.orders.reduce((s: number, o) => s + o.total, 0) }}</td>
                    </tr>
                </tbody>
            </template>
        </v-table>

        <!-- <v-pagination v-model="page" total-visible="7" :length="last_page"></v-pagination> -->
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router"
import axios from "axios"

const route = useRoute()
const links = ref<any[]>([])

onMounted(async () => {
    const { data } = await axios.get(`users/${route.params.id}/links`, { withCredentials: true })
    console.log(data)
    links.value = data

})

</script>