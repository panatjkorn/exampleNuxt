<template>
    <!-- ส่งค่า singlePost ที่ get มาจาก api ไปในไฟล์ SinglePost component  -->
    <SinglePost :post="singlePost"></SinglePost>
</template>
<script>
// สร้าง SinglePost สำหรับการโชว์ข้อมูลแต่ละ post แล้ว import
import SinglePost from '@/components/posts/SinglePost'
import axios from 'axios'
export default {
    layout : "coreLayout",
    components: {
        SinglePost
    },
    //ใช้ asyncData get ข้อมูลจาก db มา ตอนที่มีการกดอ่านโพส
    asyncData(context) {
        return axios.get("https://nuxtjslearning.firebaseio.com/posts/" + context.params.id + ".json")
            .then(res => {
                return {
                    singlePost : {
                        ...res.data,id:context.params.id
                    }
                }
            }).catch(e => context.error(e));
    },
}
</script>