import Vuex from "vuex"
import axios from "axios"

const createStore = () => {
    //สร้าง store โดยใช้ vuex
    return new Vuex.Store({
        state: {
            //ข้อมูล
            loadData: []
        },
        //mutations เป็นการจัดการข้อมูลภายใน state
        mutations: {
            //ลำดับที่ 2
            //กำหนด state ที่ต้องการทำงาน และ posts ที่ต้องการส่งเข้า state
            setPostState(state,posts) {
                state.loadData = posts
            },
            // addPostState คือ นำค่าจาก form มา แอดเข้าไปใน state
            addPostState(state, post) {
                state.loadData.push(post);
            },
            editPostState(state, editpost) {
                //postIndex คือตำแหน่งของ array ที่เราจะทำการแก้ไข หาได้จากการที่ เอา postid === editpostid ที่ส่งมา
                const postIndex = state.loadData.findIndex(
                    post=>post.id === editpost.id
                )
                state.loadData[postIndex] = editpost.id
            } 
        },
        //ทำงานร่วมกัน backend เรียกใช้ ผ่าน component
        //พอมี actions ก็จะมีการส่งข้อมูล รับข้อมูล จาก api เสร็จแล้วสั่ง commit ไปที่ state
        actions: {
            nuxtServerInit(vuexContext, context) {
                //ลำดับที่ 1
                return axios.get("https://nuxtjslearning.firebaseio.com/posts.json")
                    .then(res => {
                        const data = [];
                        for (const key in res.data) {
                            //  ...res.data ได้ data มากี่ตัวก็โยนไปทั้งหมด อ้างอิง id ตาม key
                            data.push({ ...res.data[key], id: key })
                        }
                        //เมื่อได้ข้อมูลส่งกลับมาแล้ว ให้ส่งค่าไปที่ setPostState ที่เป็น mutation โดยส่ง data ออกไป
                        vuexContext.commit("setPostState", data)
                    }).catch(e => context.error(e));
            },
            //สร้างฟังชันสำหรับการส่งค่าจาก form เพื่อ insert เข้า database ผ่าน store
            addPost(vuexContext, context) {
                //axios เพื่อส่งค่าไปที่ฐานข้อมูล
                //posts.json เป็นคอลเลกชัน ใน database firebase ถ้าใน sql คือ ตาราง db โดยส่ง data postData ไปด้วย
                //context คือค่าที่เราโยนเข้ามาใน addPost โยนมาจาก create.vue
                const createPost = { ...context }
                return axios.
                    post("https://nuxtjslearning.firebaseio.com/posts.json", createPost)
                    .then(response => {
                        console.log(response.data);
                        // vuexContect.commit คือการโยนค่าเข้าไปเพิ่มให้กับ state ทีฟังชัน addPostState โดยกำหนด id ให้ด้วย
                        vuexContext.commit("addPostState", {
                            ...createPost, id: res.data.name
                        })
                        // console.log(response);
                    })
            },
            editPost(vuexContext, post) {
                //post คือค่าที่เราโยนเข้ามาใน editPost
                const createPost = { ...post }
                return axios.
                    put("https://nuxtjslearning.firebaseio.com/posts/" + post.id + ".json", post) //post ตัวนี้คือค่าที่แก้ไขล่าสุด
                    .then(response => {
                       //commit mutation แก้ไขข้อมูล state เพื่อการแสดงผลหน้าเว็ป
                    // ส่ง ค่าpost เข้าไปทำงานในeditPoststate
                        vuexContext.commit("editPostState",post);
                    })
            },
        },
        getters: {
            // นำ state ไปใช้งาน
            //สร้าง function สำหรับดึง stateไปใช้กับทุก component 
            getAllPosts(state) {
                //return state โดยอ้างถึง state ที่ต้องการนำไปใช้งาน ในนี้อ้างถึง state.loadData
                return state.loadData
            }
        }
    })
}

export default createStore