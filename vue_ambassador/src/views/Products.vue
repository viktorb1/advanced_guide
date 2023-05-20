<template>
    <div class="col-md-12 mb-4 input-group">
        <input class="form-control" placeholder="Search" @keyup="search(($event.target as HTMLInputElement).value)" />
        <div class="input-group-append">
            <select class="form-select" @change="sort(($event.target as HTMLInputElement).value)">
                <option>Select</option>
                <option value="asc">Price Ascending</option>
                <option value="desc">Price Descending</option>
            </select>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="product in products" :key="product.id">
            <div class="card shadow-sm">
                <img :src="product.image" height="200" />
                <div class="card-body">
                    <p class="card-text">{{ product.title }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-body-secondary">${{ product.price }}</small>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { Filter, Product } from 'types';



const props = defineProps<{
    products: Product[];
    filters: Filter;
}>()

const emit = defineEmits(['set-filters'])

const search = (s: string) => {
    emit('set-filters', {
        ...props.filters,
        s
    })
}

const sort = (sort: string) => {
    emit('set-filters', {
        ...props.filters,
        sort
    })
}

</script>