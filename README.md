[toc]

# SDU-Openlab-Accessment-II-2

###### Language: English

Creator: qwq0867

Started date: Oct 8th,2022.

Name: Dark Mode for Balduck

The latest version: 1.0.1

Description: A plugin for Chrome with some simple functions such as provide a dark mode for bilibili.

**User Manual**

    When using bilibili , you can click the plugin to see its menu. Click the switch button to make the web page dark. If you want to restore , just click again. Now this function is available on bilibili home page and video player.

*Notice: When you turn off the dark mode, every page except for the page you're watching now will be refreshed!*

    The plugin also provide the function of changing playback speed. Just input your custom speed and press enter, your custom speed will be put in the playback speed list of the player.

**Project Folder Structure**

_locales: Provide language support.

dist: The folder for binary files (.crx). The files in the folder can be applied separately in your Chrome/Edge.

func: The folder for some JavaScript source code files which provide functional support. They will be executed in the web page.

res: The folder for resource files, such as .png files.

---

###### Language:  Simplified Chinese/简体中文

创建者：WYX

开写日期：2022年10月8日

插件名称（暂定）：给Balduck的黑♂暗插件

最新版本：1.0.0

简单描述：一个可以添加倍速和提供暗黑模式的Chrome插件（仅适配 b 站）

**使用指南**

    在 b 站相关网页中，单击该插件即可唤出插件菜单，你可以点击开关符号来打开暗黑模式使网站变为深色。如果想要关闭它，只需再次点击即可。目前该项功能仅支持于 b 站主站和视频播放页面（且处理些许不完善）。

*请注意：当关闭暗黑模式时，除了你所看的标签页以外的 b 站相关页面将被自动刷新！*

    该插件也提供了播放器改变倍速的功能。你可以在文本框中输入你想要添加的倍速然后按回车，倍速选项就添加到播放器的倍速列表里啦！

**文件目录结构**

_locales: 提供语言支持（只有中文）。

dist:存储打包好的二进制文件，可能能拿到谷歌内核浏览器里直接用。

func: 用于存储提供功能的JavaScript脚本文件（不是用于插件运行）。这些文件将被注入至网页。

res：资源文件，主要存储开关图片等。
