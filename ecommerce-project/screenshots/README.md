# 📸 如何添加截图

## 所需的4个截图文件

将这些截图放在 `screenshots/` 目录中（与README.md同级）：

### 1. home-page.png
**首页 - 产品展示**
- 显示产品网格
- 搜索栏和Header
- 至少2个产品卡片

### 2. checkout-page.png  
**购物车 - 结账页面**
- 左侧：订单总结（产品列表、配送选项）
- 右侧：支付总结（价格明细）
- Place Your Order按钮

### 3. orders-page.png
**订单页面 - 订单历史**
- 订单列表
- 显示订单日期、总价、订单ID
- 产品详情

### 4. tracking-page.png
**配送追踪 - 实时进度**
- 进度条（Preparing → Shipped → Delivered）
- 状态标签
- 配送信息

---

## 📷 Mac截图方法

### 方法1：快捷键（推荐）
```
Command + Shift + 4      # 截取选定区域
Command + Shift + 3      # 截取整个屏幕
```
截图自动保存到桌面

### 方法2：使用预览应用
1. 打开预览应用
2. 文件 → 从剪贴板新建 / 从所选部分新建
3. 文件 → 导出
4. 保存到 `screenshots/` 目录

### 方法3：Finder拖拽
1. 截图保存到桌面
2. 在VS Code中右键 `screenshots/` 文件夹
3. 选择 "在Finder中显示"
4. 将截图拖入

---

## 💾 保存截图

1. **命名规则**：
   - `home-page.png`
   - `checkout-page.png`
   - `orders-page.png`
   - `tracking-page.png`

2. **格式要求**：
   - PNG 或 JPG
   - 推荐宽度：1200-1920px
   - 文件大小 < 2MB

3. **完成后**：
   ```bash
   git add screenshots/*.png
   git commit -m "Add project screenshots"
   git push
   ```

---

## ✅ 验证

运行以下命令检查截图是否正确命名：
```bash
ls -la screenshots/
```

应该显示4个PNG/JPG文件：
```
home-page.png
checkout-page.png
orders-page.png
tracking-page.png
```

README.md会自动显示这些截图！
