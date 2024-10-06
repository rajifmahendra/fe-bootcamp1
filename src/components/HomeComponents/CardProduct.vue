<template>
    <div class="p-4 bg-whitesmoke rounded-md w-2/3 border border-black">
        <div class="flex justify-between gap-2 my-2">
            <h1>Product Title</h1>
            <div class="">
                <button class="p-2 text-white bg-green-500 rounded">Button</button>
            </div>
        </div>
        <hr />
        <div class="flex flex-col gap-1">
            <div class="self-center">
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <div class="flex flex-row justify-between w-1/2 self-center">
                <p>Product Price</p>
                <p>Rp. 1000</p>
            </div>
            <div class="flex flex-row justify-between w-1/2 self-center">
                <p>Product Rating</p>
                <p class="text-green-600">5/5</p>
            </div>
        </div>
    </div>
    </template>
    <script>
    export default {
        name: 'CardProducts',
    }
    </script>