var posts=["2023/10/12/2023-10-12/","2023/10/02/2023-10-1/","2023/10/13/2023-10-13/","2023/10/23/2023-10-23/","2023/10/21/2023-10-21/","2023/10/18/2023-10-18/","2023/10/24/2023-10-24/","2023/10/28/2023-10-28/","2023/10/02/2023-10-3/","2023/10/02/2023-10-4/","2023/10/05/2023-10-5/","2023/10/06/2023-10-6/","2023/10/08/2023-10-8/","2023/11/01/2023-11-1/","2023/10/09/2023-10-9/","2023/11/14/JAVA-kali环境搭建/","2023/11/18/BGP/","2023/11/05/LAMP/","2023/11/03/SQL/","2023/11/02/PPP/","2023/11/01/NAT/","2023/11/18/XSS/","2023/11/08/ip基本概念/","2023/10/26/Trojans/","2023/11/14/php/","2023/11/04/ipv6/","2023/11/18/typora学习/","2023/11/27/u盘恢复/","2023/10/29/docker/","2023/10/29/web-tools-2/","2023/10/28/web-tools-1/","2023/10/28/web漏洞实验/","2023/11/14/web漏洞实验3/","2023/11/14/web漏洞实验4/","2023/11/14/web漏洞实验5/","2023/11/25/web漏洞实验6/","2023/11/25/web漏洞实验7/","2023/11/22/代办/","2023/11/09/华为ensp命令配置/","2023/11/14/抓小程序包/","2023/11/18/工具测试/","2023/11/11/策略路由/","2023/11/14/后端漏洞(2)/","2023/11/04/红岩杯/","2023/11/10/数通刷题/","2023/11/04/绿联双模鼠标连接/","2023/11/23/资源/","2023/11/07/路由选择工具/","2023/11/09/路由策略/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };