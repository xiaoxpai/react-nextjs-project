
更新日期：2024年12月18日

- 完成所有事件列表开发
  - 难点： 事件列表项的拆分成组件

![process-20241218.png](doc%2Fprocess-20241218.png)

## 项目名称：NextJS实践

### 项目计划

- / `开始页`
- /events `所有事件列表`
- /events/some-id `单个事件详情`
- /events/...slug `过滤事件列表`

 ![project-folder.png](doc%2Fproject-folder.png)


>项目构建日期：2024年12月17日

```bash
npx create-next-app@latest
```

# 关于分支

`next-init` 项目的初始化分支，仅环境搭建