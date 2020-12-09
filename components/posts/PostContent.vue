<template>
    <b-col md="3">
        <!-- :title = "title" คือการ v-bind prop -->
        <b-card
            :title="title"
            :img-src="image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
        <!-- การกำหนด prop  -->
            <b-card-text>
                <!-- ทำให้แสดงตัวอักษรได้ 0-50 ตัว พร้อมอ่านเพิ่มเติม -->
                {{ content.slice(0,200)+"...อ่านเพิ่มเติม" }}
            </b-card-text>
            <!-- เรียกใช้งาน function postLink ของ computed -->
            <nuxt-link class="btn btn-success" :to="postLink">
                {{ isAdmin ? 'แก้ไขบทความ' : 'อ่านบทความ'}}
            </nuxt-link>
            <!-- <b-button href="#" variant="primary">อ่านบทความ</b-button> -->
        </b-card>
    </b-col>
</template>

<script>
export default {
    //props การกำหนดค่าเพื่อส่งเข้าไปทำงานใน components โดยการกำหนดที่ที่จะนำตัวแปร prop ไปใช้
    props: {
        id : {
            type:String,   
        },
        title: {
            type:String,
            required : true
        },
        content : {
            type:String,
            required: true
        },
        image: {
            type:String,
            required: true
        },
        //ตัวแปร สำหรับเช็คว่าเป็น admin หรือเปล่า
        isAdmin: {
            type: Boolean,
            required: true
        }
    },
    //ฟังชันสำหรับเช็คว่า ถ้าเป็น admin จะเกิดอะไร หรือ user จะเกิดอะไรตามมา
    computed : {
        // เช็คว่าถ้าเป็น admin ให้ redirect ไปที่ admin/post+ id post นั้นๆ 
        // ถ้าเป็น user ให้ redirect ไปที post/ + id post
        postLink() {
            return this.isAdmin ? '/admin/posts/' + this.id : '/posts/'+ this.id
        }
    }
}
</script>

