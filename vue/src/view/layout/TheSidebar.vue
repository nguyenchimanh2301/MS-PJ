<template>
   <div id="sidebar" class="sidebar">
            <div class="sidebar__box">
                <div class="sidebar__box-home ">
                    <div class=" box__icon--home"></div>
                    <div class="box__text">MISA QLTS</div>
                </div>
                 <div class="sidebar__box--menu">
                    <div class="sidebar__box--icon">
                        <div class="box__icon box__icon--router"></div>
                        <div class="box__text">Tổng quan</div>
                    </div> 
                    <div class="sidebar__box--icon">
                        <div class="box__icon box__icon--car"></div>
                        <div class="box__text">Tài sản</div>
                        <div class="menu__dropdown" v-if="isCollapse"></div>
                    </div>
                    <div class="sidebar__box--icon">
                        <div class="box__icon box__icon--road"></div>
                       <div class="box__text">Tài sản HT-DB</div>
                       <div class="menu__dropdown" v-if="isCollapse"></div>

                    </div>
                    <div class="sidebar__box--icon">
                        <div class="box__icon box__icon--icon"></div>
                        <div class="box__text">Công cụ dụng cụ</div>
                        <div class="menu__dropdown" v-if="isCollapse"></div>
                    </div>
                    <div class="sidebar__box--icon">
                        <div class="box__icon box__icon--book"></div>
                        <div class="box__text">Danh mục</div>
                    </div>
                    <div class="sidebar__box--icon">
                        <div class="box__icon box__icon--search"></div>
                        <div class="box__text">Tra cứu</div>
                        <div class="menu__dropdown" v-if="isCollapse"></div>
                    </div>
                    <div class="sidebar__box--icon">
                        <div class="box__icon 
                        box__icon--chart"></div>
                    <div class="box__text">Báo cáo</div>
                    
                    </div>
                 </div>
                 <div class="sidebar-tongle">
                        <div id="sidebarToggle" class="sidebar__icon--tongle"  @click="collapseSidebar" v-if="isCollapse">
                            <div class="tooltip" >Thu gọn</div>
                        </div>
                        <div id="sidebarToggleOpen" class="sidebar__tongle--open" v-if="!isCollapse" @click="openSidebar">
                            <div id="opensidebar" class="tooltip ">Mở rộng</div>
                        </div>
                 </div>
            </div>
        </div>
</template>

<script>
    export default({
    methods: {
        collapseSidebar(){
            document.getElementById("sidebar").style.width = "85px";
            var arr = Array.from(document.querySelectorAll(".box__text"));
            arr.map((item)=>{
                 item.style.display ='none';
            });
            this.collapse(false);
        },
        openSidebar(){
            document.getElementById("sidebar").style.width = "250px";
            var arr = Array.from(document.querySelectorAll(".box__text"));
            arr.map((item)=>{
                 item.style.display ='block';
            })
            this.collapse(true);
        },
        collapse(collapse){
            this.isCollapse = collapse;
        }
    },
    data() {
        return {
            isCollapse : true,
        }
    },
    })
</script>