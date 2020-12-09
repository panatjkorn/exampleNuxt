<template>
    <b-carousel id="slider"
    controls
    indicators>
        <!-- การเรียก path รูปในโฟลเดอร์ asset ถ้าเขียนใน tag ใน สัญลักษณ์ ~ (ตัวหนอน) -->
        <div v-for="item in items">
            <b-carousel-slide
            :caption="item.caption"
            :text="item.intext"
            :img-src="item.image"
            > </b-carousel-slide>
        </div>
        <!-- <div v-for="item in items">
            <b-carousel-slide
            :caption="item.caption"
            :text="item.intext"
            :img-src="item.image"
            > </b-carousel-slide>
        </div> -->
    </b-carousel>
</template>

<script>
export default {
    data() {
        return {
            items : [
                {
                    // การเรียก path รูปในโฟลเดอร์ asset ถ้าเรียก path ในนี้ให้ใช้ require(@)
                    caption : "ท่องเที่ยวภูเขาไฟ" , 
                    image:require("@/assets/image/1.jpg"),
                    text:"Nulla vitae elit libero, a pharetra augue mollis interdum."
                },
                {
                    caption : "B" , 
                    image:require("@/assets/image/2.jpg"),
                    text:"Nulla vitae elit libero, a pharetra augue mollis interdum."
                },
                {
                    caption : "C" , 
                    image:require("@/assets/image/3.jpg"),
                    text:"Nulla vitae elit libero, a pharetra augue mollis interdum."
                },
                {
                    caption : "D" , 
                    image:require("@/assets/image/4.jpg"),
                    text:"Nulla vitae elit libero, a pharetra augue mollis interdum."
                },
            ]
        }
    }
}
</script>
<style scoped>
h2 {
    color:red;
}
</style>