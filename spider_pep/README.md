## 源起

突发奇想, 准备复习一下**物理电学知识**. 

一搜电子教材, 发现人教版电子教材在**新冠疫情期间**, 免费下载(只有下册, 因为疫情耽误了春季教学).

网站很工整, 而且, 可能以后页面会撤下, 遂, 写个**简单爬虫**把所有教材下载下来. 

教材总大小: **10G+**, 家里网还不错, 就没用多线程了.

## 使用

测试平台: macOS 10.15, python 3.7.1

安装依赖: 可能需要 显示指明 **pip3**
```shell
pip install requests
pip install lxml
```

执行脚本: 可能需要 显示指明 **python3**
```python
# 方法 1:
python spider_pep.py

# 方法 2:
chmod +x spider_pep.py
./spider_pep.py
```


## 网站截图
![首页](https://github.com/lyqflnh/MSpider/blob/master/spider_pep/imgs/%E9%A6%96%E9%A1%B5%20-%20%E4%BA%BA%E6%95%99%E7%89%88%E4%B8%AD%E5%B0%8F%E5%AD%A6%E6%95%99%E6%9D%90%E7%94%B5%E5%AD%90%E7%89%88.png)

<br>

![子页面](https://github.com/lyqflnh/MSpider/blob/master/spider_pep/imgs/%E5%AD%90%E9%A1%B5%E9%9D%A2%20-%20%E5%B0%8F%E5%AD%A6%E9%81%93%E5%BE%B7%E4%B8%8E%E6%B3%95%E6%B2%BB%E6%95%99%E7%A7%91%E4%B9%A6.png)