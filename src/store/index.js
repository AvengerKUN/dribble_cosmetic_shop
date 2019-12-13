import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      userName:"Alexandra!"
    },
    types:[
      {
        typeId:0,
        typeName:'Face',
        selection:false
      },
      {
        typeId:1,
        typeName:'Body',
        selection:false
      },
      {
        typeId:2,
        typeName:'Skin Care1',
        selection:false
      },
      {
        typeId:3,
        typeName:'Skin Care2',
        selection:false
      },
      {
        typeId:4,
        typeName:'Skin Care3',
        selection:false
      },
      {
        typeId:5,
        typeName:'Skin Care4',
        selection:false
      },
      {
        typeId:6,
        typeName:'Skin Care5',
        selection:false
      },
      {
        typeId:7,
        typeName:'Skin Care6',
        selection:false
      },
      {
        typeId:8,
        typeName:'Skin Care7',
        selection:false
      },
      {
        typeId:9,
        typeName:'Skin Care8',
        selection:false
      },
      {
        typeId:10,
        typeName:'Skin Care10',
        selection:false
      },
      {
        typeId:11,
        typeName:'Skin Care11',
        selection:false
      },
      {
        typeId:12,
        typeName:'Skin Care12',
        selection:false
      },
      {
        typeId:13,
        typeName:'Skin Care13',
        selection:false
      },
      {
        typeId:14,
        typeName:'Skin Care14',
        selection:false
      },
    ],
    pieces:[
      {
        id:0,
        img: require('../assets/img1.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#0B1535',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:1,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:2,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:3,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:4,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:5,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:6,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:7,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:8,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:9,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:10,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      },
      {
        id:11,
        img: require('../assets/img2.jpg'),
        images:[
          require('../assets/images1.jpg'),
          require('../assets/images2.jpg'),
          require('../assets/images3.jpg'),
        ],
        title:"Nutri Plumping Lip Balm",
        subTitle:"Ultra-soothing",
        cardTitle:"More than a lip balm",
        color:'#899F7E',
        type:[
          {
            typeId:0,
            typeName:'30ml',
            selection:false
          },
          {
            typeId:1,
            typeName:'50ml',
            selection:false
          },
          {
            typeId:2,
            typeName:'100ml',
            selection:false
          },
          {
            typeId:3,
            typeName:'200ml',
            selection:false
          },
        ],
        dataContents:[
          {
            id:0,
            title:"Description1",
            subTitle:"Detalis1",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          },
          {
            id:1,
            title:"Description2",
            subTitle:"Detalis2",
            content:"Immediately, skin texture is refined, skin is\n" +
                "smooth and radiant. Formulated with Liquoricewith illuminating properties,* the SupraEssence evens out the complexion.\n"
          }
        ]
      }
    ],
    selected:null,
    scrollTop:0
  },
  mutations: {
    setSelected(state,val){
      state.selected = val;
    },
    setScrollTop(state,val){
      state.scrollTop = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
