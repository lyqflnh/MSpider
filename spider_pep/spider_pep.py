#!/usr/bin/python
# -*- coding: utf-8 -*-

import os
import requests
import time
from lxml import etree


home_dir = '人教版中学教材电子版'
home_url = 'https://bp.pep.com.cn/jc/'
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) \
        AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15'
}


def run():

    global home_dir

    # 文件夹已经存在, 添加时间作为 名称后缀
    if os.path.exists(home_dir):

        print('已经存在文件夹:', home_dir, '\n')

        # Debug 用
        time_str = str(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()))
        home_dir = '{0} - {1}'.format(home_dir, time_str)
        print('创建文件夹:', home_dir)
        os.mkdir(home_dir)

    else:
        print('创建工作目录:', home_dir, '\n')
        os.mkdir(home_dir)

    # 请求 首页
    r = requests.get(url=home_url, headers=headers)
    r.encoding = 'utf-8'        # 如果是 ISO-8859-1, 中文会乱码, 修改为 utf-8 解决该问题

    # 获取 第一层 目录 的 Element
    html_element = etree.HTML(r.text)
    cat_a_element_list = html_element.xpath('//h5')             # 每个 h5 中的标题, 对应 home_dir 目录下的一个子目录

    for cat_a_element in cat_a_element_list:

        # 获取 子目录名称
        cat_a_name = cat_a_element.xpath('./text()')[0]

        # 创建 第一层 子目录
        cat_a_path = home_dir + '/' + cat_a_name
        if not os.path.exists(cat_a_name):
            print('创建第一层子目录:', cat_a_name)
            os.mkdir(cat_a_path)

        # 获取 第二层 子目录 的 Element
        cat_b_element_list = cat_a_element.xpath('../..//a')

        for cat_b_element in cat_b_element_list:

            cat_b_name = cat_b_element.xpath('./text()')[0]
            cat_b_url = home_url + cat_b_element.xpath('./@href')[0]        # 直接拼接
            cat_b_url = cat_b_url.replace('/./', '/')                       # 有的环境, 可以不处理, 有的要处理 -_-||

            cat_b_path = cat_a_path + '/' + cat_b_name

            if not os.path.exists(cat_b_path):
                print('    创建第二层子目录:', cat_b_path)
                os.mkdir(cat_b_path)

                # 下载电子书
                download_textbook(cat_b_url, cat_b_path)


def download_textbook(url, path):

    # 获取 html
    r = requests.get(url, headers=headers)
    r.encoding = 'utf-8'

    html_str = r.text

    html_element = etree.HTML(html_str)
    book_element_list = html_element.xpath('//h6')

    for book_element in book_element_list:

        # 获取书名
        book_name = book_element.xpath('./a/text()')[0]

        # 获取下载链接
        download_url = url + book_element.xpath('../div//a[@title="下载"]/@href')[0]      # 直接拼接
        download_url = download_url.replace('/./', '/')                                  # 还是不要自讨苦吃, 都处理一下

        # 开始下载
        print('        下载教材: {0} @ {1} ...'.format(book_name, download_url))

        r = requests.get(download_url, headers=headers)

        file_path = './' + path + '/' + book_name + '.pdf'
        with open(file_path, 'wb') as f:
            f.write(r.content)

        print('        ✅ 下载完成 ✅')

    print('        --------------------------------------')


if __name__ == '__main__':

    start = time.time()
    run()
    end = time.time()
    print('总耗时: {:.1f}s, 大约: {:.1f}min'.format(end - start, (end - start)/60))

    # 629.2s(10.5min), 15-20MB/s, 10GB, 只要网速好, 单线程走到老 ~~~
