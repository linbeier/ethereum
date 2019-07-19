
var Xblock_hash;
var Ablock_hash;

$(document).ready(function(){
        $("#bu").click(function(){
                $.jsonrpc({
                        url:"http://127.0.0.1:8545",
                        method:"eth_accounts",
                        params:[],
                        id:1,
                        success: function (response) {
                                console.log(response);
                        },
                        fault: function (response, errordata) {
                                console.log("fault!");
                                console.log(response);
                                console.log(errordata);
                        },
                        error: function (request, status, error) {
                                console.log("error!");
                                console.log(request);
                                console.log(status);
                                console.log(error);
                        }
                });
        });

        $("#sendX_btn").click(function () {

                var selfaddr = $('#self_addr').val();
                var friendaddr1 = $("#friend_addr1").val();
                var friendaddr2 = $("#friend_addr2").val();
                var emailaddr = $("#email_addr").val();

                $.jsonrpc({
                        url:"http://127.0.0.1:8545",
                        method:"eth_sendTransaction",
                        params:[{
                                from: selfaddr,
                                to: "0x6000000000000000000000000000000000000000",
                                gas: "0x72bf0",
                                gasPrice: "0x9172a",
                                value: "0x1",
                                extraData: "{\"address\": \"" +
                                    selfaddr +
                                    "\",\"type\":\"0x1\",\"ChannelNum\":3,\"ChannelSendNum\":2,\"ChannelRevNum\":1,\"Channels\" : [{\"publicKey\":\"047b6ca1959cf9501fc27cd4296f5b7cfc4818c74c93b2da08b3cc46a1337e36ad7f03be8b666173bd84d5e4c0e06fb19e1b0644c1669a03bd2ad94a390da78736\",\"address\":\"" +
                                    friendaddr1 +
                                    "\",\"is\":1},{\"publicKey\":\"046c29599f6aa30e8b8e9ff2aa172deb334411bb6daa9b996c901860c454e84a310ce0b7b6d75f7f9a81e4e5d3142eb2ffe4bba459acaf6133777bb5bb24b78045\",\"address\":\"" +
                                    friendaddr2 +
                                    "\",\"is\":1},{\"publicKey\":\"" +
                                    emailaddr +
                                    "\",\"address\":\"\",\"is\":0}]}"
                        }],
                        id:1,
                        success: function (response) {
                                //console.log(response);
                                alert("success!");
                                Xblock_hash = response;
                                //blockinfobyhash(response);
                        },
                        fault: function (response, errordata) {
                                alert(response);
                                console.log(errordata);
                        },
                        error: function (request, status, error) {
                                alert(request);
                                console.log(status);
                                console.log(error);
                        }
                });

        });

        $("#sendA_btn").click(function () {

                var newaddr = $("#new_addr").val();

                $.jsonrpc({
                        url:"http://127.0.0.1:8545",
                        method:"eth_sendTransaction",
                        params:[{
                                from: newaddr,
                                to: "0x6000000000000000000000000000000000000000",
                                gas: "0x72bf0",
                                gasPrice: "0x100",
                                value: "0x1",
                                extraData: "{\"address\": \"" +
                                    newaddr +
                                    "\",\"type\":\"0x2\",\"NewAddress\":\"" +
                                    newaddr +
                                    "\",\"XAddress\":\"" +
                                    Xblock_hash +
                                    "\",\"newPublicKey\":\"049ae7abcd67fe410ea16effb795203d0ace28293a4cc42bf174a55c30917fab0f54367d4a3b648f6f670951e70bb33e12cba8231a540b583fd24328770954b386\",\"XBlockNum\":" +
                                    Xblocknum +
                                    ",\"BIndex\":0,\"IsSend\":[{\"is\":0},{\"is\":0},{\"is\":0}]}"
                        }],
                        id:1,
                        success: function (response) {
                                //console.log(response);
                                alert("success!");
                                Ablock_hash = response;

                        },
                        fault: function (response, errordata) {
                                alert(response);
                                console.log(errordata);
                        },
                        error: function (request, status, error) {
                                alert(request);
                                console.log(status);
                                console.log(error);
                        }
                })
        });

        $("#sendC_btn").click(function(){
                var newaddr = $("#new_addr").val();
                var btranaddr1 = $("#B_transaction_addr1").val();
                var btranaddr2 = $("#B_transaction_addr2").val();
                var bvericode1 = $("#B_verified_code1").val();
                var bvericode2 = $("#B_verified_code2").val();

                Cblockinfobyhsh(btranaddr1,btranaddr2);

                $.jsonrpc({
                        url:"http://127.0.0.1:8545",
                        method:"eth_sendTransaction",
                        params:[{
                                from: newaddr,
                                to: "0x6000000000000000000000000000000000000000",
                                gas: "0x72bf0",
                                gasPrice: "0x9172a",
                                value: "0x1",
                                extraData: "{\"address\": \"" +
                                    newaddr +
                                    "\",\"XAddress\":\"" +
                                    Xblock_hash +
                                    "\",\"XBlockNum\":" +
                                    Xblocknum +
                                    ",\"AAddress\":\"" +
                                    Ablock_hash +
                                    "\",\"ABlockNum\":" +
                                    Ablocknum +
                                    ",\"type\":\"0x4\",\"CaptchasNum\":2,\"Captchas\":[{\"Address\":\"" +
                                    btranaddr1 +
                                    "\",\"BlockNum\":" +
                                    bblocknum1 +
                                    ",\"Captcha\":\"" +
                                    bvericode1 +
                                    "\"},{\"Address\":\"" +
                                    btranaddr2 +
                                    "\",\"BlockNum\":" +
                                    bblocknum2 +
                                    ",\"Captcha\":\"" +
                                    bvericode2 +
                                    "\"}]}"
                        }],
                        id:1,
                        success: function (response) {
                                console.log(response);
                                alert("success! please check it");

                        },
                        fault: function (response, errordata) {
                                alert(response);
                                console.log(errordata);
                        },
                        error: function (request, status, error) {
                                alert(request);
                                console.log(status);
                                console.log(error);
                        }
                })
        })
});





