# ethereum
首先打开客户端，使用以下命令打开：
./geth --identity "rpc etherum" --datadir "../../chain"  --nodiscover --rpc --rpcapi "web3,eth,personal,miner,net,db,admin" --rpccorsdomain "*"  --rpcaddr 0.0.0.0 --rpcport 8545 --networkid 666 console 2>>eth_output.log

然后双击打开打开index.html即可与之进行交互

#index.html:
在输入框中输入点击按钮即可，提交完交易之后记得查看block info防止没有打包到区块的情况
