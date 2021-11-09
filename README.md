# [Alphabet](./Alphabet.md)

# [文档](./docs/main.md)

# 计划

- [x] 开发单词转换器的抽象接口，以后的所有转换器得遵循并实现它
- [x] 开发针对单词的 u && uly 之间相互转换的转换器
- [x] 开发针对单词的 u && khan 之间相互转换的转换器
- [x] 提供单词转码器 encode,decode,这个要看齐 uCorrector 的 encode 和 decode
- [x] 接入测试
- [x] 补全测试用例
- [x] 新增分音节功能
- [ ] 完善分音节功能，探索生成音节库

# Bug

- [ ] 单词转换逻辑没有使用边界符号导致的部分单词无法还原正常问题修复 如: bikham
- [ ] uly Hemze 问题，主要是首字母 Hemze 和中间有 hemze 的场景 如: adem reisi

# 开发和发布

## 开发

- 启动本地开发环境

  > yarn start

## 编译

> yarn build

## 测试

> yarn test
