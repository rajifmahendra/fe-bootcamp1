<template>
    <div class="p-4">
        <section>
            <Banner />
        </section>
        <section class="w-1/2 my-2 flex flex-col gap-2">
            <h1 class="text-2xl font-extrabold">Recommended Products</h1>
            <CardProduct />
        </section>
    </div>
</template>
<script>
import CardProduct from '@/components/HomeComponents/CardProduct.vue';
import Banner from '@/components/HomeComponents/Banner.vue';
export default {
    name: 'HomeIndex',
    components: { CardProduct, Banner }
}
</script>