<template>
    <b-container fluid>
        <Header></Header>
        <!-- กำหนด ว่าตัวแปร loadData ให้นำมาใช้กับ component นี้  -->
        <!-- โยนค่า loadData เข้าไปใน Postlist ผ่านตัวแปร post -->
        <PostList :posts="loadData"></PostList>
 
    </b-container>
</template>

<script>
//เป็นการ import component มาใช้ใน pages
import Header from '@/components/posts/Header'
import PostList from '@/components/posts/PostList'
export default {
    //การนำ layout มาใช้ คือการ ระบุ layout ในนี้
    layout : "coreLayout",
    components : {
        //ระบุ component ที่ import เข้ามาด้วย
        Header,
        PostList
    },
    computed : {
        // function loadData สำหรับ get ค่า state จาก store มาเพื่อส่งค่าไปทำงานต่อที่ PostList
        // ในตัวอย่างนี้ ชื่อ state คือ getAllPosts
        loadData() {
            return this.$store.getters.getAllPosts 
        }
    }

    // data(){
    //     return {
    //         // สร้างตัวแปร array ที่จัดเก็บ data เพื่อกำหนดค่าที่จะนำไปใช้ใน component
    //         loadData : [
    //            {
    //                 id:"1",
    //                 title:"เที่ยวบ้านช้าง",
    //                 content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    //                 image:"https://cdn.pixabay.com/photo/2016/11/14/03/32/elephant-1822492__340.jpg"
    //            },
    //            {
    //                 id:"2",
    //                 title:"เที่ยวอยุธยา",
    //                 content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    //                 image:"https://cdn.pixabay.com/photo/2016/11/14/03/38/phra-nakhon-si-ayutthaya-1822502_960_720.jpg"
    //            },
    //            {
    //                 id:"3",
    //                 title:"เที่ยวนา",
    //                 content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    //                 image:"https://cdn.pixabay.com/photo/2016/11/08/05/54/agriculture-1807581_960_720.jpg"
    //            },
    //            {
    //                 id:"4",
    //                 title:"เที่ยวอยุธยา",
    //                 content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    //                 image:"https://cdn.pixabay.com/photo/2016/11/14/03/32/elephant-1822492__340.jpg"
    //            },
    //         ]
    //     }
    // }
}
</script>