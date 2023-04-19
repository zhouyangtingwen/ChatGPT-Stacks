<p align="center">
  <img width="150px" src="./public/icon_256X256.png" alt="ChatGPT-Stacks"><br/>
  <h1 align="center">ChatGPT Stacks</h1>
</p>

<p align="center">
  <a href="https://github.com/zhouyangtingwen/chatgpt-stacks/blob/master/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/zhouyangtingwen/chatgpt-stacks"/>
  </a>
  <a href="https://github.com/zhouyangtingwen/chatgpt-stacks/issues">
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" alt="CodeFactor" />
  </a>
  <a href="https://github.com/zhouyangtingwen/ChatGPT-Stacks/actions/workflows/main.yml" rel="nofollow">
    <img src="https://img.shields.io/github/actions/workflow/status/zhouyangtingwen/ChatGPT-Stacks/main.yml?branch=master&logo=Github" alt="Build" />
  </a>
  <a href="https://github.com/zhouyangtingwen/chatgpt-stacks/tags" rel="nofollow">
    <img alt="GitHub tag (latest SemVer pre-release)" src="https://img.shields.io/github/v/tag/zhouyangtingwen/chatgpt-stacks?include_prereleases&label=version"/>
  </a>
  <div align="center">
  
[![Windows Support](https://img.shields.io/badge/Windows-0078D6?style=flat&logo=windows&logoColor=white)](https://github.com/zhouyangtingwen/ChatGPT-Stacks/releases)
[![Windows Support](https://img.shields.io/badge/MACOS-adb8c5?style=flat&logo=macos&logoColor=white)](https://github.com/zhouyangtingwen/ChatGPT-Stacks/releases)
[![Download Counts](https://img.shields.io/github/downloads/zhouyangtingwen/ChatGPT-Stacks/total?style=flat)](https://github.com/zhouyangtingwen/ChatGPT-Stacks/releases)
</div>
<div align="center">
<strong>
<samp>

[English](README.md) · [简体中文](README.zh-Hans.md)
</samp>
</strong>
</div>
  ChatGPT-Stacks 是一个使用 Tauri、Vue3、NAIVE-UI 和 SQLite3 构建的桌面应用程序，可以让您将 ChatGPT 的所有对话永久保存到本地。
  <br/>
  

https://user-images.githubusercontent.com/130919942/232662425-431bc008-b648-4435-8659-7d6f5d8ba346.mp4


</p>

## 介绍

ChatGPT-Stacks 是一个功能强大的桌面应用程序，它使您能够将所有 ChatGPT 对话直接保存并分类到本地 SQLite3 数据库中。您可以随时轻松地组织和查找您的聊天内容。该应用程序具有直观和用户友好的界面，使您能够快速轻松地保存您的 ChatGPT 聊天。<br>ChatGPT-Stacks 也可用作本地知识库📝，使您可以在需要时轻松参考过去的对话和重要信息。使用 ChatGPT-Stacks，您可以放心地根据对您最重要的主题安全地保存和组织所有有价值的聊天内容。

## 特性
- 将所有 ChatGPT 对话直接保存并分类到本地 SQLite3 数据库中 💾
- 可将保存到本地的 ChatGPT 对话进行分类管理 📚
- 暗黑模式 🌌
- 友好的 UI 界面 👬
- 使用简单，10 秒钟极速上手 👌

## 安装
Windows 用户, 请下载 [chatgptstacks_1.0.1_x64_en-US.msi](https://github.com/zhouyangtingwen/ChatGPT-Stacks/releases/download/v1.0.1/chatgptstacks_1.0.1_x64_en-US.msi)（因 Tauri 框架特性，Win7 和 2018 年 4 月版本之前的 Win10 需要安装 Webview2 来支持 ChatGPT-Stacks 的运行，如果运行或下载 Webview2 失败，可以先给我提一个 Issue，我会尽快将补丁包发布）<br>
macOS 用户, 请下载 [chatgptstacks.app.tar.gz](https://github.com/zhouyangtingwen/ChatGPT-Stacks/releases/download/v1.0.1/chatgptstacks.app.tar.gz) 或 [chatgptstacks_1.0.1_x64.dmg](https://github.com/zhouyangtingwen/ChatGPT-Stacks/releases/download/v1.0.1/chatgptstacks_1.0.1_x64.dmg) （如果 M1、M1X、M2 或 macOS 13等用户无法运行，请给我提 Issue，我会尽快发布补丁包）

<table>
    <tr>
        <td>Windows
        </td>
        <td>macOS
        </td>
    </tr>
    <tr>
        <td><img src=https://user-images.githubusercontent.com/130919942/232951179-c2deb94f-cb30-4492-82c0-82aa66cc014a.jpg width=600/></td>
        <td><img src=https://user-images.githubusercontent.com/130919942/232951203-54f3362c-acfe-4faa-8dd8-5c8ad1cf5c42.jpg width=600/></td>
    </tr>
    <tr>
        <td><img src=https://user-images.githubusercontent.com/130919942/232951511-f18fcef9-2f82-4ed4-be1c-030679429561.jpg width=600/></td>
        <td><img src=https://user-images.githubusercontent.com/130919942/232961434-2f7e7441-bac9-417b-b58e-39c76727d458.png width=600/></td>
    </tr>
</table>

## 未来开发计划

### Version 1.1.0
- 将对话保存为 PNG
- 将对话导出为 Markdown，方便导入到 Obsidian and Notion
- 支持在搜索已经保存在本地的对话中，高亮搜索关键字
- 自动更新
- 取消 macOS 的拼写检查（可能提前在 v1.0.2 支持）
- 其他的开发计划在 [这里](https://github.com/zhouyangtingwen/chatgpt-stacks/issues/1). 如果您有更多想法或需求，请在这个 Issue 下面留言 😄

## 贡献
欢迎对 ChatGPT-Stacks 的贡献！在这之前，请看以下步骤：

1. Fork 这个项目
1. 为您的贡献创建一个新分支
1. 做出您的更改
1. 提交 pull requests

## ChatGPT-Stacks 可以帮助到您吗?
如果 ChatGPT-Stacks 帮助到了您，解决了您的痛点或满足了您的需求，请为它点一个 Star🌟 吧！万分感谢！🙏 ChatGPT-Stacks 将继续努力变得更好！
## License
This project is licensed under the terms of the GPL-3.0 license.
