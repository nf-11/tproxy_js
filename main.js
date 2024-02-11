'use strict';


const transparentProxy = require('./transparent_proxy');



async function main()
{
    const proxyHost = '127.0.0.1';
    const proxyPort = 8080;
    const proxiedHostnames = {
        'summonerswar-eu-lb.qpyou.cn': '127.11.12.13', 'summonerswar-gb-lb.qpyou.cn': '127.11.12.14',
        'summonerswar-sea-lb.qpyou.cn': '127.11.12.15', 'summonerswar-jp-lb.qpyou.cn': '127.11.12.16', 
        'summonerswar-kr-lb.qpyou.cn': '127.11.12.17', 'summonerswar-cn-lb.qpyou.cn': '127.11.12.18'};
    for (const hostname in proxiedHostnames)
    {
        const proxy = new transparentProxy.TransparentProxy(hostname, 443, proxyHost, proxyPort);
        const bindAddr = proxiedHostnames[hostname];
        proxy.run(bindAddr, 443);
    };
};

main();
