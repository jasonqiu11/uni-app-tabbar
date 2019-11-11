
### uni-app的版本2.3.7

## 在main.js中处理

```
// #ifdef APP-PLUS
import Tab from '@/components/yll1024335892-tab/yll1024335892-tab.js';
Vue.prototype.Tab=Tab;
// #endif

import store from '@/store/yll1024335892-tab.js';
Vue.prototype.$store=store;
```

## 在App>vue中的onLaunch处理

```
// #ifdef APP-PLUS
		this.Tab.getInstance().create();
		this.Tab.getInstance().show(false);
		this.Tab.getInstance().setOnClickListener(()=>{
			if(this.$store.state.tabIndex!=2 || this.$store.state.tabIndex!='2'){
				uni.switchTab({
					url:"/pages/tabbar/tabbar-3/tabbar-3"
				});
				this.Tab.getInstance().show(false);
				this.$store.commit("setTabIndex",2);
			}
		});
		// #endif
```


## 配置tabbar的配置文件pages.json

```
{
	"pages": [
		//pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/tabbar/tabbar-3/tabbar-3",  
			"style": {
				"navigationBarTitleText": "uni-app"
			}
		},
		{
			"path": "pages/tabbar/tabbar-2/tabbar-2",
			"style": {}
		},
		{
			"path": "pages/tabbar/tabbar-1/tabbar-1",
			"style": {}
		},
		{
			"path": "pages/tabbar/tabbar-4/tabbar-4",
			"style": {}
		},
		{
			"path": "pages/tabbar/tabbar-5/tabbar-5",
			"style": {}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "uni-app",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8"
	},
	"tabBar": {
		"borderStyle": "black",
		"backgroundColor": "#333",
		"color": "#8F8F94",
		"selectedColor": "#f33e54",
		"list": [{
				"pagePath": "pages/tabbar/tabbar-1/tabbar-1",
				"iconPath": "static/img/tabbar/home.png",
				"selectedIconPath": "static/img/tabbar/homeactive.png",
				"text": "首页"
			},
			{
				"pagePath": "pages/tabbar/tabbar-2/tabbar-2",
				"iconPath": "static/img/tabbar/guanzhu.png",
				"selectedIconPath": "static/img/tabbar/guanzhuactive.png",
				"text": "关注"
			},
			//#ifndef H5
			{
				"pagePath": "pages/tabbar/tabbar-3/tabbar-3",
				"iconPath": "static/img/tabbar/blank.png",
				"selectedIconPath": "static/img/blank.png",
				"text": "发布"
			},
			//#endif
			//#ifdef H5
			{
				"pagePath": "pages/tabbar/tabbar-3/tabbar-3",
				"iconPath": "static/img/tabbar/guanzhu.png",
				"selectedIconPath": "static/img/tabbar/guanzhuactive.png",
				"text": "发布"
			},
			//#endif
			{
				"pagePath": "pages/tabbar/tabbar-4/tabbar-4",
				"iconPath": "static/img/tabbar/news.png",
				"selectedIconPath": "static/img/tabbar/newsactive.png",
				"text": "消息"
			},
			{
				"pagePath": "pages/tabbar/tabbar-5/tabbar-5",
				"iconPath": "static/img/tabbar/me.png",
				"selectedIconPath": "static/img/tabbar/meactive.png",
				"text": "我"
			}
		]
	}
}

```


## 在每个tabbar中添加tabbar的触发事件

```
//0是第一个tabbar的下标，其它的异常处理
onTabItemTap(option) {
			if (this.$store.state.tabIndex != 0 || this.$store.state.tabIndex != '0') {
				// #ifdef APP-PLUS
				this.Tab.getInstance().show();
				// #endif
				this.$store.commit("setTabIndex", option.index);
			}
		}
//中间的tabbar的处理
onTabItemTap(option) {
			if(this.$store.state.tabIndex!=2 || this.$store.state.tabIndex!='2'){
				// #ifdef APP-PLUS
				this.Tab.getInstance().show(false);
				// #endif
				this.$store.commit("setTabIndex",option.index);
			}	
		}
```


## 替换中间的图片

- 在文件components/yll1024335892-tab/yll1024335892-tab.js
- defaultBase64是非选中状态的base64的图片
- activeBase64是选中状态的base64的图片