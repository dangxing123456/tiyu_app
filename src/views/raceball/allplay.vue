<template>
  <div class="container" id="shop">
    <navBar :goback="true" title>
      <div slot="title">
        <span>心田喜悦</span>
        <span>VS</span>
        <span>东京FC</span>
      </div>
      <div class="right" slot="right">
        <span class="fenxi" @click="detail">分析</span>
      </div>
    </navBar>
    <div class="main">
      <h3>胜平负/让球</h3>
      <div class="first">
        <div class="left">
          <p class="p1">{{list.footBallBet.odds_list.hhad.single}}</p>
          <p class="p2">{{list.footBallBet.odds_list.hhad.goalline}}</p>
        </div>

        <div class="right">
          <ul>
            <li
              :ref="'id'+dataIndex+'_0'"
              @click="push('0','0',list.footBallBet.odds_list.had.odds[list.footBallBet.odds_list.had.odds.length-1].h)"
            >
              <span>胜</span>
              <span
                class="s1"
              >{{list.footBallBet.odds_list.had.odds[list.footBallBet.odds_list.had.odds.length-1].h}}</span>
            </li>
            <li
              :ref="'id'+dataIndex+'_1'"
              @click="push('0','1',list.footBallBet.odds_list.had.odds[list.footBallBet.odds_list.had.odds.length-1].d)"
            >
              <span>平</span>
              <span>{{list.footBallBet.odds_list.had.odds[list.footBallBet.odds_list.had.odds.length-1].d}}</span>
            </li>
            <li
              :ref="'id'+dataIndex+'_2'"
              @click="push('0','2',list.footBallBet.odds_list.had.odds[list.footBallBet.odds_list.had.odds.length-1].a)"
            >
              <span>负</span>
              <span>{{list.footBallBet.odds_list.had.odds[list.footBallBet.odds_list.had.odds.length-1].a}}</span>
            </li>
            <li
              :ref="'id'+dataIndex+'_3'"
              @click="push('1','3',list.footBallBet.odds_list.hhad.odds[list.footBallBet.odds_list.hhad.odds.length-1].h)"
            >
              <span>胜</span>
              <span>{{list.footBallBet.odds_list.hhad.odds[list.footBallBet.odds_list.hhad.odds.length-1].h}}</span>
            </li>
            <li
              :ref="'id'+dataIndex+'_4'"
              @click="push('1','4',list.footBallBet.odds_list.hhad.odds[list.footBallBet.odds_list.hhad.odds.length-1].d)"
            >
              <span>平</span>
              <span>{{list.footBallBet.odds_list.hhad.odds[list.footBallBet.odds_list.hhad.odds.length-1].d}}</span>
            </li>
            <li
              :ref="'id'+dataIndex+'_5'"
              @click="push('1','5',list.footBallBet.odds_list.hhad.odds[list.footBallBet.odds_list.hhad.odds.length-1].a)"
            >
              <span>负</span>
              <span>{{list.footBallBet.odds_list.hhad.odds[list.footBallBet.odds_list.hhad.odds.length-1].a}}</span>
            </li>
          </ul>
        </div>
      </div>
      <h3>总进球</h3>
      <div class="second">
        <div class="left">
          <p class="p1">总进球</p>
        </div>
        <div class="right">
          <ul>
            <li
              :ref="'id'+dataIndex+'_6'"
              @click="push('2','6',list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s0)"
            >
              <p>0球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s0}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_7'"
              @click="push('2','7',list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s1)"
            >
              <p>1球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s1}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_8'"
              @click="push('2','8',list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s2)"
            >
              <p>2球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s2}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_9'"
              @click="push('2','9',list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s3)"
            >
              <p>3球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s3}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_10'"
              @click="push('2','10',list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s4)"
            >
              <p>4球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s4}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_11'"
              @click="push('2','11',list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s5)"
            >
              <p>5球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s5}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_12'"
              @click="push('2','12',list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s6)"
            >
              <p>6球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s6}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_13'"
              @click="push('2','13',list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s7)"
            >
              <p>7+球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[list.footBallBet.odds_list.ttg.odds.length-1].s7}}</p>
            </li>
          </ul>
        </div>
      </div>
      <h3>半全场</h3>
      <div class="third">
        <div class="left">
          <p class="p1">半全场</p>
        </div>
        <div class="right">
          <ul>
            <li
              :ref="'id'+dataIndex+'_14'"
              @click="push('3','14',list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].hh)"
            >
              <p>胜胜</p>
              <p>{{list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].hh}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_15'"
              @click="push('3','15',list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].hd)"
            >
              <p>胜平</p>
              <p>{{list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].hd}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_16'"
              @click="push('3','16',list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].ha)"
            >
              <p>胜负</p>
              <p>{{list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].ha}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_17'"
              @click="push('3','17',list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].dh)"
            >
              <p>平胜</p>
              <p>{{list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].dh}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_18'"
              @click="push('3','18',list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].dd)"
            >
              <p>平平</p>
              <p>{{list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].dd}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_19'"
              @click="push('3','19',list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].da)"
            >
              <p>平负</p>
              <p>{{list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].da}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_20'"
              @click="push('3','20',list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].ah)"
            >
              <p>负胜</p>
              <p>{{list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].ah}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_21'"
              @click="push('3','21',list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].ad)"
            >
              <p>负平</p>
              <p>{{list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].ad}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_22'"
              @click="push('3','22',list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].aa)"
            >
              <p>负负</p>
              <p>{{list.footBallBet.odds_list.hafu.odds[list.footBallBet.odds_list.hafu.odds.length-1].aa}}</p>
            </li>
          </ul>
        </div>
      </div>
      <h3>比分</h3>
      <div class="fourth">
        <div class="sheng">
          <div class="left">
            <p class="p1">胜</p>
          </div>
          <div class="right">
            <ul>
              <li
                :ref="'id'+dataIndex+'_23'"
                @click="push('4','23',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0100)"
              >
                <p>1:0</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0100}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_24'"
                @click="push('4','24',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0200)"
              >
                <p>2:0</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0200}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_25'"
                @click="push('4','25',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0201)"
              >
                <p>2:1</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0201}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_26'"
                @click="push('4','26',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0300)"
              >
                <p>3:0</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0300}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_27'"
                @click="push('4','27',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0301)"
              >
                <p>3:1</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0301}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_28'"
                @click="push('4','28',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0302)"
              >
                <p>3:2</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0302}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_29'"
                @click="push('4','29',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0400)"
              >
                <p>4:0</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0400}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_30'"
                @click="push('4','30',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0401)"
              >
                <p>4:1</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0401}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_31'"
                @click="push('4','31',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0402)"
              >
                <p>4:2</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0402}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_32'"
                @click="push('4','32',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0500)"
              >
                <p>5:0</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0500}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_33'"
                @click="push('4','33',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0501)"
              >
                <p>5:1</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0501}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_34'"
                @click="push('4','34',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0502)"
              >
                <p>5:2</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0502}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_35'"
                @click="push('4','35',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].h1)"
              >
                <p>胜其他</p>
                {{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].h1}}
              </li>
            </ul>
          </div>
        </div>
        <div class="ping">
          <div class="left">
            <p class="p1">平</p>
          </div>
          <div class="right">
            <ul>
              <li
                :ref="'id'+dataIndex+'_36'"
                @click="push('4','36',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0000)"
              >
                <p>0:0</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0000}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_37'"
                @click="push('4','37',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0101)"
              >
                <p>1:1</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0101}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_38'"
                @click="push('4','38',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0202)"
              >
                <p>2:2</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0202}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_39'"
                @click="push('4','39',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0303)"
              >
                <p>3:3</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0303}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_40'"
                @click="push('4','40',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].d1)"
              >
                <p>平其他</p>
                {{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].d1}}
              </li>
            </ul>
          </div>
        </div>
        <div class="fu">
          <div class="left bgc">
            <p class="p1">负</p>
          </div>
          <div class="right">
            <ul>
              <li
                :ref="'id'+dataIndex+'_41'"
                @click="push('4','41',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0001)"
              >
                <p>0:1</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0001}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_42'"
                @click="push('4','42',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0002)"
              >
                <p>0:2</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0002}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_43'"
                @click="push('4','43',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0102)"
              >
                <p>1:2</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0102}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_44'"
                @click="push('4','44',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0003)"
              >
                <p>0:3</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0003}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_45'"
                @click="push('4','45',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0103)"
              >
                <p>1:3</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0103}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_46'"
                @click="push('4','46',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0203)"
              >
                <p>2:3</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0203}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_47'"
                @click="push('4','47',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0004)"
              >
                <p>0:4</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0004}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_48'"
                @click="push('4','48',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0104)"
              >
                <p>1:4</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0104}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_49'"
                @click="push('4','49',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0204)"
              >
                <p>2:4</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0204}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_50'"
                @click="push('4','50',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0005)"
              >
                <p>0:5</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0005}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_51'"
                @click="push('4','51',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0105)"
              >
                <p>1:5</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0105}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_52'"
                @click="push('4','52',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0205)"
              >
                <p>2:5</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].b0205}}</p>
              </li>
              <li
                :ref="'id'+dataIndex+'_53'"
                @click="push('4','53',list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].a1)"
              >
                <p>负其他</p>
                <p>{{list.footBallBet.odds_list.crs.odds[list.footBallBet.odds_list.crs.odds.length-1].a1}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="btn">
      <van-button type="default" size="large">取消</van-button>
      <van-button type="danger" size="large" @click="reaply">确定</van-button>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
//引入vuex中 listData
import { mapState } from "vuex";
export default {
  name: "allplay",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      // list: this.$route.query.box
      arr: [[], [], [], [], []],
      betArr: [[], [], [], [], []],
      dataIndex: this.$store.state.listData.index
    };
  },
  computed: {
    ...mapState({
      list: "listData"
    })
  },
  watch: {},
  methods: {
    detail() {
      this.$router.push({
        path: "/matchFenxi"
      });
    },
    push(i1, i2, val) {
      this.$nextTick(function() {
        if (
          this.$refs["id" + this.$store.state.listData.index + "_" + i2]
            .className == "bgColor"
        ) {
          // 删除
          delete this.arr[i1][i2];
          delete this.betArr[i1][i2];
          this.$refs[
            "id" + this.$store.state.listData.index + "_" + i2
          ].className = "";
        } else {
          // 添加
          this.arr[i1][i2] = i2;
          // this.betArr[i1][i2] = this.$refs.children
          this.betArr[i1][i2] = this.$refs[
            "id" + this.$store.state.listData.index + "_" + i2
          ].children[1].innerHTML;
          this.$refs[
            "id" + this.$store.state.listData.index + "_" + i2
          ].className = "bgColor";
        }
      });
    },
    reaply() {
      //去掉索引empty的索引
      for (var i = 0; i <this.arr.length; i++) {
        // if (!arr[j]) {
        //   arr.splice(j, 1);
        //   j--;
        // }
        for (var j = 0; j < this.arr[i].length; j++) {
          //拿到1,2,3,4,5,6,7,8,9
         
          if (!this.arr[i][j]) {
            this.arr[i].splice(j, 1);
            j--;
          }
        }
      }
      //去掉索引为empty的赔率
      for (var i = 0; i <this.betArr.length; i++) {
        // if (!arr[j]) {
        //   arr.splice(j, 1);
        //   j--;
        // }
        for (var j = 0; j < this.betArr[i].length; j++) {
          //拿到1,2,3,4,5,6,7,8,9
          
          if (!this.betArr[i][j]) {
            this.betArr[i].splice(j, 1);
            j--;
          }
        }
      }
      this.$store.state.activeData.push([...this.arr]);
      this.$store.state.betData.push([...this.betArr]);
      console.log(this.arr);
      console.log(this.betArr);
      console.log(this.$store.state.betData);
      console.log(this.$store.state.activeData);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.fenxi {
  color: #ffffff;
  font-size: 14px;
}
.main {
  /deep/ .icon {
    font-size: 12px;
  }
  padding: 0 15px;
  h3 {
    font-size: 16px;
    padding: 15px 0;
    display: inline-block;
  }
  .first {
    font-size: 12px;
    .left {
      float: left;
      width: 10%;
      p {
        height: 35px;
        line-height: 35px;
        text-align: center;
        border: 1px solid #ffffff;
      }
      .p1 {
        background-color: rgb(207, 207, 207);
      }
      .p2 {
        background-color: rgb(230, 55, 55);
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 35px;
          width: 32%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          line-height: 35px;
          color: #4b4949;
        }
      }
    }
  }
  .second {
    font-size: 12px;
    .left {
      float: left;
      width: 10%;
      height: 73px;
      line-height: 16px;
      background-color: rgb(118, 178, 235);
      p {
        height: 82px;
        width: 25px;
        text-align: center;
        font-size: 14px;
        margin: 0 auto;
        color: white;
        padding-top: 15px;
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 35px;
          width: 24%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          color: #4b4949;
          p {
            &:first-child {
              margin-top: 2.5px;
            }
          }
        }
      }
    }
  }
  .third {
    font-size: 12px;
    .left {
      float: left;
      width: 10%;
      height: 110px;
      line-height: 16px;
      background-color: rgb(240, 170, 120);
      p {
        height: 82px;
        width: 25px;
        text-align: center;
        font-size: 14px;
        margin: 0 auto;
        color: white;
        padding-top: 38px;
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 35px;
          width: 32%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          color: #4b4949;
          p {
            &:first-child {
              margin-top: 2.5px;
            }
          }
        }
      }
    }
  }
  .fourth {
    font-size: 12px;
    .sheng,
    .fu {
      .left {
        float: left;
        width: 10%;
        height: 110px;
        line-height: 122px;
        background-color: rgb(236, 152, 147);

        p {
          text-align: center;
          font-size: 14px;
          margin: 0 auto;
          color: white;
        }
      }
      .bgc {
        background-color: rgb(130, 235, 72);
      }
      .right {
        width: 90%;
        float: left;
        ul {
          li {
            display: inline-block;
            height: 35px;
            width: 19%;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;

            color: #4b4949;
            p {
              &:first-child {
                margin-top: 2.5px;
              }
            }
          }
        }
      }
    }
    .ping {
      .left {
        float: left;
        width: 10%;
        height: 36px;

        background-color: rgb(115, 175, 245);
        p {
          text-align: center;
          font-size: 14px;
          margin: 0 auto;
          color: white;
        }
      }
      .right {
        width: 90%;
        float: left;
        ul {
          li {
            display: inline-block;
            height: 35px;
            width: 19%;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;

            color: #4b4949;
          }
        }
      }
    }
  }
}
.bgColor {
  background-color: red;
  color: white !important;
  text-align: center !important;
}
.btn {
  display: flex;
  width: 100%;
}
</style>