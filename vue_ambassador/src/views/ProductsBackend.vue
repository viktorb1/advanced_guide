<template>
    <Products :products="products" :filters="filters" @set-filters="load" />
</template>

<script setup lang="ts">
import Products from "@/views/Products.vue"
import { ref, onMounted, reactive } from "vue"
import axios from "axios"
import type { Product, Filter } from "types"


const products = ref<Product[]>([])
const filters = reactive<Filter>({
    s: "",
    sort: ""
})

const load = async (f: Filter) => {
    filters.s = f.s
    filters.sort = f.sort
    const arr = []

    if (filters.s) {
        arr.push(`s=${filters.s}`)
    }

    if (filters.sort) {
        arr.push(`sort=${filters.sort}`)
    }

    const { data } = await axios.get(`products/backend?${arr.join('&')}`)
    products.value = data.data
}

onMounted(() => load(filters))

</script>