var Xblocknum;
var Ablocknum;

    if(typeof window.web3 !== "undefined" && typeof window.web3.currentProvider !== "undefined") {
        var web3 = new Web3(window.web3.currentProvider);
    } else {
        var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }



function unlock() {
    var user = $("#address_input").val();
    var passwd = $("#password_input").val();
    web3.eth.personal.unlockAccount(user,passwd,600,function (error, result) {
        if(!error)alert(result);
        else alert("error!");
    });

}

function blockinfobyhash(hash) {
    var ret = web3.eth.getTransaction(hash,function (error,result) {
        if(!error){
            //alert("good!"+result);
            $("#xblockhash").html(hash);
            $("#xblockinfo").html("<p>"+"block number:"+result.blockNumber+"</p>"+"<p>"+"block hash:"+result.blockHash+"</p>");
            Xblocknum = result.blockNumber;
            console.log(result);
        }
        else alert("error!");
    })

}

function Ablockinfobyhash(hash) {
    var ret = web3.eth.getTransaction(hash,function (error,result) {
        if(!error){
            //alert("good!"+result);
            $("#ablockhash").html(hash);
            $("#ablockinfo").html("<p>"+"block number:"+result.blockNumber+"</p>"+"<p>"+"block hash:"+result.blockHash+"</p>");
            Ablocknum = result.blockNumber;
            console.log(result);
        }
        else alert("error!");
    })

}
