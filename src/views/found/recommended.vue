<template>
    <div class="container" id="shop">
        <div class="main">
            <img width="100%" src="public/img/index1.png" alt="">
            <van-tabs v-model="active" style="background-color: white">
                <van-tab title="标签 1">
                    <ul class="van-ul">
                        <li class="van-li" v-for="(item) in 5">
                            <img src="public/img/index1.png" alt="">
                            <div class="div">二狗子</div>
                            <div class="div2">1中1</div>
                        </li>
                        <li class="van-li">
                            <img src="public/img/index1.png" alt="">
                            <div class="div">更多</div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab title="标签 1">
                    <ul class="van-ul">
                        <li class="van-li" v-for="(item) in 5">
                            <img src="public/img/index1.png" alt="">
                            <div class="div">二狗子</div>
                            <div class="div2">1中1</div>
                        </li>
                        <li class="van-li">
                            <img src="public/img/index1.png" alt="">
                            <div class="div">更多</div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab title="标签 1">
                    <ul class="van-ul">
                        <li class="van-li" v-for="(item) in 5">
                            <img src="public/img/index1.png" alt="">
                            <div class="div">二狗子</div>
                            <div class="div2">1中1</div>
                        </li>
                        <li class="van-li">
                            <img src="public/img/index1.png" alt="">
                            <div class="div">更多</div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab title="标签 2">
                    <ul class="van-ul">
                        <li class="van-li" v-for="(item) in 5">
                            <img src="public/img/index1.png" alt="">
                            <div class="div">狗子</div>
                            <div class="div2">1中1</div>
                        </li>
                        <li class="van-li">
                            <img src="public/img/index1.png" alt="">
                            <div class="div">更多</div>
                        </li>
                    </ul>
                </van-tab>
            </van-tabs>
            <div class="title">
                <h3>精选推荐</h3>
                <van-icon name="arrow"/>
            </div>
            <div class="wrapper">
                <div class="wrapper-top">
                    <div class="left">
                        <img src="https://picsum.photos/50/50" alt/>
                        <div class="left-span">
                            <span class="peo">CUBA才教练</span>
                            <span class="dan">近7单中7单</span>
                        </div>
                    </div>
                    <div class="right">
                        <h3>100%</h3>
                        <p>命中率</p>
                    </div>
                </div>
                <div class="wrapper-center">
                    <h3>冠军联赛 给我冲冲 rng牛逼 ig牛逼 fpx牛逼</h3>
                    <div class="vspk">
                        <div class="left">
                            <span class="xingqi">星期三</span>
                            <span class="zhandui">皇家马德里&nbsp;&nbsp;&nbsp;</span>VS
                            <span>&nbsp;&nbsp;&nbsp;哈哈哈哈哈</span>
                        </div>
                        <div class="right">
                            <span>58金币</span>
                        </div>
                    </div>
                </div>
                <div class="wrapper-bottom">
                    <div class="time">
                        <p>
                            <span>竟足-发布：11-05 22:05</span> |
                            <span>截止：11-05 22:05</span>
                        </p>
                    </div>
                    <div class="num">
                        <img src="../../assets/images/num.png" alt/>
                        <span>315</span>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "recommended",
        props: {},
        data() {
            return {
                active: 2
            };
        },
        computed: {},
        watch: {},
        methods: {}
    };
</script>
<style lang="less" scoped>


    .van-ul {
        display: flex;
        width: 100%;
        margin-top: .2rem;
        background-color: white;
    }

    .van-ul .van-li {
        flex: 1;
        text-align: center;
        padding: .2rem 0 .6rem 0;
    }

    .van-ul .van-li img {
        width: 1rem;
        height: 1rem;
    }

    .van-ul .van-li .div {
        font-size: .3rem;
        line-height: .8rem;
    }

    .van-ul .van-li .div2 {
        width: 1rem;
        margin: 0 auto;
        color: #b93c4a;
        font-size: .2rem;
        border: 1px solid #b93c4a;
        border-radius: 0.1rem;
    }

    .title {
        display: flex;
        padding: 10px 15px 0 15px;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        font-size: 1rem;

        h3 {
            font-size: .45rem;
            font-weight: 500;
            padding-left: 8px;
            border-left: 5px solid #f24a44;
        }

        span {
            color: #ccc;
        }
    }


    .wrapper {
        background: #fff;
        padding: 15px;

        .wrapper-top {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left {
                img {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                }

                .left-span {
                    float: right;
                    line-height: 38px;
                    margin-left: 8px;

                    .dan {
                        padding: 3px;
                        border: 1px solid rgb(121, 155, 151);
                        border-radius: 15px;
                        font-size: 12px;
                        color: rgb(121, 155, 151);
                    }
                }
            }

            .right {
                h3 {
                    color: red;
                }

                p {
                    color: rgb(185, 60, 74);
                    font-size: 14px;
                }
            }
        }

        .wrapper-center {
            margin-top: 10px;

            h3 {
                font-size: 16px;
                font-weight: 500;
            }

            .vspk {
                margin-top: 10px;
                padding: 5px 15px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background-color: rgb(248, 248, 248);
                height: 30px;

                .left {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 80%;
                    font-size: 14px;

                    .xingqi {
                        color: #999;
                    }

                    .zhandui {
                        margin-left: 20px;
                    }
                }

                .right {
                    span {
                        color: rgb(185, 60, 74);
                    }
                }
            }
        }

        .wrapper-bottom {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            color: #999;

            .num {
            }
        }
    }

</style>
