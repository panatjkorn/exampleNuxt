<template>
    <b-row class="py-2">
        <!-- title คือค่า prop ที่ set ใน postContent -->
        <!-- การโยน prop เข้ามาทำงานใน component -->
        <PostContent 
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :title="post.title"
            :image="post.image"
            :content="post.content"
            :isAdmin = "isAdmin"
        >
        </PostContent>
    </b-row>
</template>
<script>
// import เพื่อนำ ค่า prop ที่ set ใน PostContent มาใช้งานร่วมกัน
import PostContent from '@/components/posts/PostContent'

export default {
    components: {
        PostContent
    },
    props: {
        //prop ใช้ isAdmin เพื่อทีจะกำหนดว่าถ้าเป็น user ให้แสดงผลคอนเท้นอะไรบ้าง admin แสดงผลคอนเท้นอะไรบ้าง
        //default เป็น false ไม่ได้เป็น admin ในตอนเริ่มต้น 
        isAdmin : {
            type: Boolean,
            default : false
        },
        // สร้างตัวแปล array มาดึงข้อมูลจาก store มาใช้ในการแสดงผล
        // รับค่าจาก pages/posts/index
        posts: {
            type: Array,
            required : true
        }
    }
}
</script>