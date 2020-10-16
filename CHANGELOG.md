# [1.0.0](https://gitee.com/silvaq/shirkhan-crx/compare/v0.0.9...v1.0.0) (2020-10-10)

### Bug Fixes

- 修复描边框不显示开关开启时功能失效问题 ([56a42bb](https://gitee.com/silvaq/shirkhan-crx/commits/56a42bb4783184904d64afe04b01b1479d7d72e1))
- 版本更新逻辑 bug 修复,下载文件名不是最新版本问题修复 ([81f8541](https://gitee.com/silvaq/shirkhan-crx/commits/81f854179ddf304313e6324892daaeb3913d6a64))

### Features

- background 和 contentscripts 中使用的支持站点 url 提取成通过配置文件中获取的方式,避免两个地方维护同一份列表 ([20da89c](https://gitee.com/silvaq/shirkhan-crx/commits/20da89cd564dafb9f657313cc124be2e057c3817))
- shirkhan-plugin 之 更新通知新增下载 crx 下载包,通知布局微调 ([6bc6976](https://gitee.com/silvaq/shirkhan-crx/commits/6bc6976d8177df6a92451349f740f3caca78ebef))
- shirkhan-popup 之 update 组件新增下载 crx 包的按钮,下载页面布局微调 ([2d75a7a](https://gitee.com/silvaq/shirkhan-crx/commits/2d75a7abdbf30b5678ccf50dc6494036a8b7965c))
- update version to 0010 ([3908364](https://gitee.com/silvaq/shirkhan-crx/commits/390836435cfb05ca7039e764febb2fdd19f98989))
- wechat 新增对 blockquote 的 rtl 和 ltr 显示(无法处理链接部分!!!) ([9c7e99c](https://gitee.com/silvaq/shirkhan-crx/commits/9c7e99ca6b8067221a863e1169cbbee5599adb4c))
- 为了避免 cross,请求关闭携带 credentials ([7174551](https://gitee.com/silvaq/shirkhan-crx/commits/7174551e29758fb9bbdd646d6ffdc52955f2a2d7))
- 新增对 gitee 和 github 母语内容的正常的支持 ([e34cee1](https://gitee.com/silvaq/shirkhan-crx/commits/e34cee1f7e46ef6a51a8f9be432fe3808d4d1d2b))
- 版本修改成 0.0.11 ([56547cd](https://gitee.com/silvaq/shirkhan-crx/commits/56547cde017df778effa44d9f55c66033a804e0d))
- 版本切换成 v1.0.0,内置请求地址都替换成 learnfans 的专用地址 ([2ecdf1f](https://gitee.com/silvaq/shirkhan-crx/commits/2ecdf1f4e5da2f4a5b1ddc4199e2547f5c3f30ae))

## [0.0.9](https://gitee.com/silvaq/shirkhan-crx/compare/v0.0.8...v0.0.9) (2020-09-21)

### Bug Fixes

- 修复 135editor.com 上 popup 不弹出问题 ([546237e](https://gitee.com/silvaq/shirkhan-crx/commits/546237ee928c705dccd77a08d68478da30d98605))

### Features

- 135 editor 的工具栏不在一行问题修复,版本升级到 009 ([9d685fa](https://gitee.com/silvaq/shirkhan-crx/commits/9d685faac0ba593e5c2a9fa59a7cdad1bb7101ac))
- shirkhan-jquery-plugin 之扩展功能,考虑到对 target 可能需要做更多的自定义提供了回调函数功能(如 letter-spaceing 等情况的特殊处理) ([c1876c1](https://gitee.com/silvaq/shirkhan-crx/commits/c1876c1df9488e2d96b5ae7ef8aa93e6770e9109))
- shirkhan-plugin 之 Update 逻辑使用 shirkhan-popup 的 update 组件 ([ed729e1](https://gitee.com/silvaq/shirkhan-crx/commits/ed729e1b34b0dcc4c924382db22919aab772097e))
- shirkhan-plugin 之 对小蚂蚁微信编辑器新增支持 ([6a7c129](https://gitee.com/silvaq/shirkhan-crx/commits/6a7c1296a105f47df0b5aacfebc1a4389392736d))
- shirkhan-plugin 之 新增 request lib,提取所有请求配置到 config 中,提取所有构件相关的 webpack 的 alias 到一个 middleware 当中 ([5309e29](https://gitee.com/silvaq/shirkhan-crx/commits/5309e29b760ff26aaf5723b3a5150a1c401e59e4))
- shirkhan-plugin 之 新增对新榜微信编辑器的支持 ([baae407](https://gitee.com/silvaq/shirkhan-crx/commits/baae407851edb0e71a4f3619a7dd0f078c5b6647))
- shirkhan-plugin 之 设置了 common,api,config 的 alias, 获取字体列表 api 提取放在 api 目录下 ([dba2e80](https://gitee.com/silvaq/shirkhan-crx/commits/dba2e80c4b90e49d4814423f085d57fb23062184))
- shirkhan-plugin 之 新增对 bj96weiixn 微信编辑器的支持 ([52f862c](https://gitee.com/silvaq/shirkhan-crx/commits/52f862cd4bc78c64169ada1e19c3a058811b6c48))
- shirkhan-popup 之 Update 组件分离 ([f94fd1e](https://gitee.com/silvaq/shirkhan-crx/commits/f94fd1e2850e15ebe7084a4847dc1494c0918a98))
- 新增对 135editor.com 的支持 ([0cde985](https://gitee.com/silvaq/shirkhan-crx/commits/0cde98592d6252af51b44696805058a131f488b1))

## [0.0.8](https://gitee.com/silvaq/shirkhan-crx/compare/f06b52bce4d3733a23d8443cef372067a54f9bad...v0.0.8) (2020-09-15)

### Bug Fixes

- body 无法清除 target flag 问题修复 ([530d37b](https://gitee.com/silvaq/shirkhan-crx/commits/530d37b94c1b2dc871c9042ab4ccdf3cef4324bd))
- popup 没用设置 common 的 alias 导致找不到文件编译失败问题修复 ([2f1638b](https://gitee.com/silvaq/shirkhan-crx/commits/2f1638b04ff416632e9087bf8ad996225aa12c79))
- shirkhan-plugin 因把 css 移植到 assets 中导致的路径和权限不匹配问题修复 ([0483a7e](https://gitee.com/silvaq/shirkhan-crx/commits/0483a7e4ca8ce3d57620679d1703e4330a69df22))
- shirkhan-popup 描边事件和参数没有暴露问题修复 ([698f6a6](https://gitee.com/silvaq/shirkhan-crx/commits/698f6a6a4aacd3413bac1f65e55a4b4b6b6b4d2f))
- 修复微小宝编辑器不支持一件 rtl 功能问题修复 ([323f808](https://gitee.com/silvaq/shirkhan-crx/commits/323f808f1bdfb659fea3220bf39bdb8e21d605ff))
- 字体下载的不是 ttf,下载文件没有后缀问题修复 ([7286665](https://gitee.com/silvaq/shirkhan-crx/commits/72866653eb458be8771f454a8412f321f519b783))
- 字体列表下拉选中字体后选中字体放到第一位,但是 scroll 没回滚回去问题修复 ([ff57b06](https://gitee.com/silvaq/shirkhan-crx/commits/ff57b06cf1fa8f8bc85ca868929d1c4e0bddc904))
- 新增 Border 导致的严重抖动 bug 修复, 微信编辑器换行导致 target 属性被复制问题修复 ([01e3931](https://gitee.com/silvaq/shirkhan-crx/commits/01e3931ec2c4e1d91d0a796c59586294a3edc613))

### Features

- about page 样式微调 ([7c864b6](https://gitee.com/silvaq/shirkhan-crx/commits/7c864b6c8c4f1aecd425570ad1531a37caaaad0f))
- chrome api 分离出放在 shirkhan-utils 中了 ([2058dd8](https://gitee.com/silvaq/shirkhan-crx/commits/2058dd8d513878be4555f5d7f97edc2d2f33354c))
- content-scripts 何在一起的准备工作已完成 ([040acd2](https://gitee.com/silvaq/shirkhan-crx/commits/040acd262c1244e910e2b2e8a170034c09a06284))
- popup 字体不生效问题修复 ([298ddf6](https://gitee.com/silvaq/shirkhan-crx/commits/298ddf66e5f2b28a9c23783441fc327dfec7b68d))
- popup 页面的字体固定,各个区域字体大小调整 ([2699166](https://gitee.com/silvaq/shirkhan-crx/commits/2699166a1706a4ce233191e2b58f2e3db4c532e1))
- readme update ([98d6731](https://gitee.com/silvaq/shirkhan-crx/commits/98d67314866db4189dd6d5881ad16d32766acab8))
- shirkhan-plugin 中的 storage 操作改造成从 shirkhan-utils 中获取 ([060d4a0](https://gitee.com/silvaq/shirkhan-crx/commits/060d4a08558a9f56394b37c1c16031e26101dea9))
- shirkhan-plugin 多个 contentscript 入口合并成一个 ([4506adf](https://gitee.com/silvaq/shirkhan-crx/commits/4506adfaf70753b5a701a44215286dcdc9923b75))
- shirkhan-plugin 字体下载逻辑修改成弹出保存框 ([332d080](https://gitee.com/silvaq/shirkhan-crx/commits/332d080cbe307b96e80cacea34dd7021eeb0d8cd))
- shirkhan-plugin 按照新的 shirkhan-popup 调整来调整 ([759c910](https://gitee.com/silvaq/shirkhan-crx/commits/759c910d3680b298280ca6f20007a9a63b98d440))
- shirkhan-plugin 的 src 下的 css 移植到 assets 下,指定 showPage 的网址使得 popup 正常工作 ([4cff268](https://gitee.com/silvaq/shirkhan-crx/commits/4cff2680935f33e5339f477503a43b6779bc9c7a))
- shirkhan-plugin 中的 common 目录一直到 src 底下,并用相对目录引入修改成全局 alias 来引入,使得将来调整路径方便 ([3015ddb](https://gitee.com/silvaq/shirkhan-crx/commits/3015ddbc228e2c8691397081b80a35ebedb1c0ca))
- shirkhan-plugin 中的 contentscript 以回调的方式进一步改进,移除内部使用的 chrome api ([4358bcd](https://gitee.com/silvaq/shirkhan-crx/commits/4358bcd5054f5314d9ee2e2e36fb51d6df282bc5))
- shirkhan-plugin 中的 popup 构建部分改成 neutrino 自己的 api 来做,不需要自己实现 ([e854c11](https://gitee.com/silvaq/shirkhan-crx/commits/e854c11a54fe1840c779bfad05e717213e7e990a))
- shirkhan-plugin 的 contentscripts 移除,都修改成从@shirkhan/contenscripts 中读取需要的 handler ([0589d4a](https://gitee.com/silvaq/shirkhan-crx/commits/0589d4a6fb28e070ff04a9959e45b3826685e97e))
- shirkhan-plugin 的 popup 组件库改用 shirkhan-popup 库 ([e6e6e2c](https://gitee.com/silvaq/shirkhan-crx/commits/e6e6e2cbff82590ac11c86be2a5aaca0850aa277))
- shirkhan-plugin 的 update 组件不支持 rtl 问题修复 ([738ee5c](https://gitee.com/silvaq/shirkhan-crx/commits/738ee5c3c2e7ac0ee14aaf498af5ac8016589691))
- shirkhan-popup 多个入口文件干掉,只保留一个 index ([dabc168](https://gitee.com/silvaq/shirkhan-crx/commits/dabc168c449be30c0ba20b2e297e942ea5460fe8))
- shirkhan-popup 的 qr 图修改成参数传递 ([35db24f](https://gitee.com/silvaq/shirkhan-crx/commits/35db24f8d089d71db9593787fad4b06b152069f3))
- shirkhan-popup 组件库整体重整修改成逻辑组件 ([cb57ce8](https://gitee.com/silvaq/shirkhan-crx/commits/cb57ce8820df2be4fa7fdf6c53d822b04e8721fc))
- shirkhan-utils 的 chrome storage 中新增更新信息设置器和获取器 ([7b57f7b](https://gitee.com/silvaq/shirkhan-crx/commits/7b57f7b7cad63ec493da26b562e9496d86d77cb4))
- shrikhan-popup 支持 header 和 footer 来扩展布局 ([51217cb](https://gitee.com/silvaq/shirkhan-crx/commits/51217cbe082124c4ed758b66b0ab8dcc921fb0ad))
- 多余的脚本去掉,readme update ([6efa6bc](https://gitee.com/silvaq/shirkhan-crx/commits/6efa6bc4f085dacb2581f8dd1646195ca1819954))
- 当目标为 body 时支持全局控制 rtl,ltr 和 fix, body 的 rtl 行为从以前的 changeDirection 修改成为了 fixContentToRtl ([201010f](https://gitee.com/silvaq/shirkhan-crx/commits/201010f25fc5a28dcb308e0ac2bdca77e6a5e0a7))
- 提示框的文本字体大小去掉,tab 影子调整 ([bba9690](https://gitee.com/silvaq/shirkhan-crx/commits/bba969013e0312c8ef21e1acf4796ac5a1d6b6a3))
- 插件的其他部分也移植过来了 ([4c4baa6](https://gitee.com/silvaq/shirkhan-crx/commits/4c4baa6b8dfa9fd6b2951ec8eddc3911cc62fe58))
- 新增一个定时器,专门监听版本更新 ([685ae85](https://gitee.com/silvaq/shirkhan-crx/commits/685ae855933aed031fc050ee126cc39b1b449169))
- 新增专门编译 background 的配置,新增只有支持页面高亮 icon,其他页面暗色不可用功能 ([a6aecaa](https://gitee.com/silvaq/shirkhan-crx/commits/a6aecaa5bb86a014514e8648d49b3c480e8c2d92))
- 新增了 shrkhan-contentscripts 库,用来分离 contentscripts ([3501742](https://gitee.com/silvaq/shirkhan-crx/commits/3501742d502189837c8fba8f32c02caffbf209d3))
- 新增了更新信息展示组件,新增了更新通知逻辑 ([14e491c](https://gitee.com/silvaq/shirkhan-crx/commits/14e491cfbe2c825c6c6dbedafd8c95366000f2c8))
- 新增了选择器导致闪动问题的修复方案. 但是很严重 bug 就是 用第三方插入元素通过 border 实现的工能都会受到影响 ([806f497](https://gitee.com/silvaq/shirkhan-crx/commits/806f497fd17ef4d5e1b32fe95c82aec07d69e954))
- 更新信息中的下载插件,插件更多消息等功能已完成 ([cb444fa](https://gitee.com/silvaq/shirkhan-crx/commits/cb444fae07e94c82bda9a9b0f670db430aabb7a2))
- 查询版本信息并存储 store 逻辑已完成 ([ec34dc6](https://gitee.com/silvaq/shirkhan-crx/commits/ec34dc6773d376a5923e12bf1f112e249e2054e7))
- 样式微调,搜搜内容没有转成小写导致的搜索区分大小写问题修复 ([c23117f](https://gitee.com/silvaq/shirkhan-crx/commits/c23117fb159153b232359aa3b6c6aeffa33064a9))
- 每个包新增排除 mono-repo 的 node_modules 逻辑 ([52ecfd6](https://gitee.com/silvaq/shirkhan-crx/commits/52ecfd6fd459e9f2956b1949c4708a957c9a83f7))
- 环境准备,放入两个包 ([f06b52b](https://gitee.com/silvaq/shirkhan-crx/commits/f06b52bce4d3733a23d8443cef372067a54f9bad))
- 编译输出目录统一为 dist ([ce14858](https://gitee.com/silvaq/shirkhan-crx/commits/ce14858403e0c5dbe9ff446a2e81c0f318620876))
