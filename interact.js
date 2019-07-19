var Xblocknum;
var Ablocknum;
var bblocknum1;
var bblocknum2;

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
 function getbalance() {
     var user = $("#address_input1").val();
     web3.eth.getBalance(user,function (error, result) {
         if(!error)alert("your account has:"+result+"Wei");
         else alert("error!");
     });
 }

function blockinfobyhash(hash) {
    var ret = web3.eth.getTransaction(hash,function (error,result) {
        if(!error){
            //alert("good!"+result);
            $("#xblockhash").html("<p>"+"tranaction hash:"+hash+"</p>");
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
            $("#ablockhash").html("<p>"+"tranaction hash:"+hash+"</p>");
            $("#ablockinfo").html("<p>"+"block number:"+result.blockNumber+"</p>"+"<p>"+"block hash:"+result.blockHash+"</p>");
            Ablocknum = result.blockNumber;
            console.log(result);
        }
        else alert("error!");
    })

}

    function Cblockinfobyhsh(hash1,hash2){
        web3.eth.getTransaction(hash1,function (error,result) {
            if(!error){
                //alert("good!"+result);
                console.log(result);
                bblocknum1 = result.blockNumber;

            }
            else alert("error!");
        });
        web3.eth.getTransaction(hash2,function (error,result) {
            if(!error){
                //alert("good!"+result);
                console.log(result);
                bblocknum2 = result.blockNumber;

            }
            else alert("error!");
        });
    }