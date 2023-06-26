﻿console.log('\n' +
    '                  °°..                  \n' +
    '                 °°°...                 \n' +
    '         °      °°°°....      °         \n' +
    '        *o     °°°°°.....     o*        \n' +
    '        oo.   °°....   ...   .oo        \n' +
    '    °  °oo*   ......     .   *oo°  °    \n' +
    '    o° °ooo   °°°...   ...   ooo° °o    \n' +
    '    oo .ooo°   °°°°°.....   °ooo° oo    \n' +
    '    oo* ooo*    °°°°....    *ooo *oo    \n' +
    '    ooo°°ooo     °°°...     ooo°°ooo    \n' +
    '  o °ooo.*oo°     °°.      °oo*.ooo° o  \n' +
    '  *o *oo* oo*              *oo *oo* oo  \n' +
    '  °oo.°oo°.oo.            .oo°°oo*.oo°  \n' +
    '   ooo.°oo.*o.            .o*.oo°.ooo   \n' +
    '   °ooo.°o*..              ..*o°.ooo°   \n' +
    '    *ooo.°o.                .o°.ooo*    \n' +
    '  °° °ooo..    .°*oooo**.    ..ooo° °°  \n' +
    '   oo°.*oo°  °oooooooooooo°  °oo*.°oo   \n' +
    '    *oo°.°* oooooooooooooooo *°.°oo*    \n' +
    '     °ooo°. oooooooooooooooo .°ooo°     \n' +
    '    ...°*oo*oooooooooooooooo*oo*°...    \n' +
    '    .*o***oooooooooooooooooooo***o*.    \n' +
    '       °**ooo*°°*oooooo*°°*ooo**°       \n' +
    '          *o*    *oooo*    *o*          \n' +
    '          oo°    °o°°o°    °oo          \n' +
    '           .o.  .o.  .o°  .o.           \n' +
    '           *oo*ooo****ooo*oo*           \n' +
    '           °*o°*o*oooo*o*°o*°           \n' +
    '                *.°..°.*                \n' +
    '                                        \n\n\n\n\n')

$(".side-nav").toggleClass("toggled");

const web3 = new Web3(window.ethereum);
let web3inf = new Web3('https://polygon-mumbai.infura.io/v3/f5ec4715ed494400a7aa1a7ea57f5ac6');
let web3alc = new Web3('https://polygon-mumbai.g.alchemy.com/v2/8nHav8t03vbfOzaPVws7Q6Aku_U0I0vY');
let web3ETH = new Web3('https://mainnet.infura.io/v3/f5ec4715ed494400a7aa1a7ea57f5ac6');
let txScanURLPrefix = 'https://mumbai.polygonscan.com/';
let validNetworkID = 80001;
let chainIDRaw = web3.utils.toHex(validNetworkID);
let validChainID = chainIDRaw.toString()

// Contract Addresses
let contractAddress = '0x6B25B629E017B6f0e60F297FeB60B0aDc3DC25f7';
let contractAddressDOOM = '0x2ECF9Ff1B7e1139C4adB521C034CD2874B8bc396';
// let contractAddressKUtils = '0x436C37BE8876016A9670Cc16D81A16135172D09a';
let contractAddressGroupsTokens = '0x22Cc86760343473EB44FEC0a98dC5e40f049398d';
let contractAddressGroups = '0xba9975061FD8EaA82327d25A2C8D8Ac8CB103Ee7';
// let contractAddressMessageData = '0x57F44A175EA6eAF627e5d450bbaEf72dC7aeFd30';
// let contractAddressMessageFormat = '0x14e0306B6211540d4c752AF89Dd09c624AF73193';
// let contractAddressPosts = '0x864e7dB416C35030455E4276A4f98cd32fC3d9De';
let contractAddressHashtags = '0x4aa235b12cB7c3B5EbBB5e9ec098cF0226484F30';
let contractAddressProfiles = '0x9B23F7C6a82822eB46eD037CFb5121f1c5ad3FcB';
let contractAddressLikes = '0xA95006f6e2DA0759BCA62E8AD08D5F3eb7377f12';
let contractAddressTips = '0xbb30d7ddE87cb9eDC8BbA99fa6B2cc25de3B0204';
let contractAddressGroupPosts = '0xb3C286E9683F23da9AdBa2e008618D4347646A94';
let contractAddressHandles = '0xD0dCaE1fE821F1a860413d75E193b6C3a0871fD0';
let contractAddressFollowers = '0xB2b6F4e3Cff5794E0b614698e3bcD9f6C35bc53D';
let contractAddressBlocking = '0x31D9111c8A47045168E28Dfd202addeB056dadaE';
let contractAddressTagged = '0x8A6753a89C66EB6f16d47dbD5CBB3557e5342813';
// let contractAddressGroupMetadata = '0xA16B189336fA7cf5cbB0c9d095f8202e5fdEB2C1';
// let contractAmulets = '0x3753CB80615F8ddc705a4eA8af91e02Cea938964';
// let contractKultists = '0x1417984f4CC5d04F07b854090c8B9e4BC957BD6A';
let contractAddressRaffleTix = '0xEb240D9DDc9482D3d2BFc75b708BB059ca7188f1';
// let contractSOULS = '0xb56225303810e66c71a404DD262B198a0db61f71';
// let contractRewards = '0x540d3B9214C2552dE2E7A3d0907034550BADea98';
// let contractAddressSampleContractHook = '0x5AF1d48Db17A6026929041Df8C3Cc30f19803B55';


// ABIs
const abiKUTHULU = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"},{"indexed":true,"internalType":"address","name":"poster","type":"address"}],"name":"logEraseMsg","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"},{"indexed":true,"internalType":"address","name":"postedBy","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"string[]","name":"hashtags","type":"string[]"},{"indexed":false,"internalType":"address[]","name":"taggedAccounts","type":"address[]"}],"name":"logMsgPostMsg1","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"},{"indexed":true,"internalType":"address","name":"proxy","type":"address"},{"indexed":false,"internalType":"string","name":"uri","type":"string"},{"indexed":false,"internalType":"uint256[5]","name":"attribs","type":"uint256[5]"},{"indexed":false,"internalType":"uint256[]","name":"inGroups","type":"uint256[]"}],"name":"logMsgPostMsg2","type":"event"},{"inputs":[],"name":"Blocking","outputs":[{"internalType":"contract IBlocking","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ContractHook","outputs":[{"internalType":"contract IContractHook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOOM","outputs":[{"internalType":"contract IDOOM","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Groups","outputs":[{"internalType":"contract IGroups","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Hashtags","outputs":[{"internalType":"contract IHashtags","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Likes","outputs":[{"internalType":"contract ILikes","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MessageData","outputs":[{"internalType":"contract IMessageData","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Posts","outputs":[{"internalType":"contract IPosts","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Tagged","outputs":[{"internalType":"contract ITagged","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Tips","outputs":[{"internalType":"contract ITips","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canary","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"costToPost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cutToPoster","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"}],"name":"eraseMsg","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addressToFollow","type":"address"}],"name":"followUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"usrAddress","type":"address"},{"internalType":"uint256","name":"startFrom","type":"uint256"},{"internalType":"bool","name":"getUserComments","type":"bool"},{"internalType":"bool","name":"getUserReposts","type":"bool"}],"name":"getMsgIDsByAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"hashtag","type":"string"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getMsgIDsByHashtag","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"taggedAddress","type":"address"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getMsgIDsByTag","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"msgIDs","type":"uint256[]"},{"internalType":"bool","name":"onlyFollowers","type":"bool"},{"internalType":"address","name":"userToCheck","type":"address"}],"name":"getMsgsByIDs","outputs":[{"internalType":"string[][]","name":"","type":"string[][]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStats","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"uint256","name":"startFrom","type":"uint256"},{"internalType":"bool","name":"isRepost","type":"bool"}],"name":"getSubIDsByPost","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"_paymentToken","type":"address"},{"internalType":"address","name":"_userProfiles","type":"address"},{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_costToPost","type":"uint256"},{"internalType":"uint256","name":"_maxMessageLength","type":"uint256"},{"internalType":"uint256","name":"_maxMsgReturnCount","type":"uint256"},{"internalType":"uint256","name":"_cutToPoster","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxMessageLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMsgReturnCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentToken","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"message","type":"string"},{"internalType":"string[]","name":"_hashtags","type":"string[]"},{"internalType":"address[]","name":"taggedAccounts","type":"address[]"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"uint256[5]","name":"attribs","type":"uint256[5]"},{"internalType":"uint256[]","name":"inGroups","type":"uint256[]"}],"name":"postMsg","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMsgReturnCount","type":"uint256"},{"internalType":"uint256","name":"_maxMessageLength","type":"uint256"}],"name":"setParams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"}],"name":"toggleLike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addressToUnFollow","type":"address"}],"name":"unfollowUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_canary","type":"string"}],"name":"updateCanary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"_payments","type":"address"},{"internalType":"address[]","name":"contracts","type":"address[]"}],"name":"updateContracts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_costToPost","type":"uint256"},{"internalType":"uint256","name":"_cutToPoster","type":"uint256"}],"name":"updateCosts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userProfiles","outputs":[{"internalType":"contract IUserProfiles","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const abiTokens = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"appAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20VotesUpgradeable.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"contractMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"costToMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"handlesAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_app","type":"address"},{"internalType":"address","name":"_handles","type":"address"},{"internalType":"address","name":"_tips","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newVault","type":"address"}],"name":"setVaultAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tipsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"updateTokenCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vaultAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const abiGroupTokens = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"groupID","type":"uint256"},{"indexed":true,"internalType":"string","name":"groupName","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"logMintGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"multiSig","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"logTokenLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"logTokenUnlocked","type":"event"},{"inputs":[],"name":"GroupMetadata","outputs":[{"internalType":"contract IGroupMetadata","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Groups","outputs":[{"internalType":"contract IGroups","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UserProfiles","outputs":[{"internalType":"contract IUserProfiles","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"activateMultiSigLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"multiSigAddress","type":"address"}],"name":"addMultiSigLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"adminUpdateGroupMetadata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"costToMintTier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"groupName","type":"string"}],"name":"getGroupID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getMultiSigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_cost1","type":"uint256"},{"internalType":"uint256","name":"_cost2","type":"uint256"},{"internalType":"uint256","name":"_cost3","type":"uint256"},{"internalType":"uint256","name":"_cost4","type":"uint256"},{"internalType":"uint256","name":"_maxGroupNameSize","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"isOperator","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"groupName","type":"string"}],"name":"isGroupAvailable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"isMultiSigLocked","outputs":[{"internalType":"bool[2]","name":"","type":"bool[2]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastMintBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxGroupNameSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"groupName","type":"string"}],"name":"mintGroup","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"removeMultiSigLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newVault","type":"address"}],"name":"setVaultAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenID","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"address","name":"_groupMemberships","type":"address"},{"internalType":"address","name":"_userProfiles","type":"address"},{"internalType":"address","name":"_groupMetadata","type":"address"}],"name":"updateContracts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier1","type":"uint256"},{"internalType":"uint256","name":"tier2","type":"uint256"},{"internalType":"uint256","name":"tier3","type":"uint256"},{"internalType":"uint256","name":"tier4","type":"uint256"},{"internalType":"uint256","name":"_maxGroupNameSize","type":"uint256"}],"name":"updateDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vaultAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const abiGroups = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"groupID","type":"uint256"},{"indexed":true,"internalType":"address","name":"member","type":"address"}],"name":"logJoinGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"groupID","type":"uint256"},{"indexed":true,"internalType":"address","name":"member","type":"address"}],"name":"logLeaveGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"groupID","type":"uint256"},{"indexed":false,"internalType":"string","name":"groupName","type":"string"}],"name":"logUpdateGroupNameFormat","type":"event"},{"inputs":[],"name":"GroupTokens","outputs":[{"internalType":"contract IGroupTokens","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UserProfiles","outputs":[{"internalType":"contract IUserProfiles","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"},{"internalType":"address","name":"member","type":"address"}],"name":"addMemberToGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"getGroupAddressFromID","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"getGroupColorsFromID","outputs":[{"internalType":"string[3]","name":"","type":"string[3]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"getGroupDetailsFromID","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"groupName","type":"string"}],"name":"getGroupID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"groupAddress","type":"address"}],"name":"getGroupIDFromAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"lookupAddress","type":"address"}],"name":"getGroupMemberships","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"getGroupNameFromID","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"getGroupURIFromID","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"getMembersOfGroupByID","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"groupAddress","type":"address"}],"name":"getOwnerOfGroupByAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"getOwnerOfGroupByID","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"groupAddressToID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"groupDetails","outputs":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"string","name":"groupName","type":"string"},{"internalType":"address","name":"groupAddress","type":"address"},{"internalType":"string","name":"details","type":"string"},{"internalType":"string","name":"uri","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"groupMemberships","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxMembersPerGroup","type":"uint256"},{"internalType":"uint256","name":"_maxDetailsLength","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"groupName","type":"string"}],"name":"isGroupAvailable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"isMemberOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"},{"internalType":"address","name":"member","type":"address"}],"name":"isMemberOfGroupByID","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"leaveGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxDetailsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMembersPerGroup","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"onTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"},{"internalType":"address","name":"member","type":"address"}],"name":"removeMemberFromGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_groupID","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"string","name":"groupName","type":"string"},{"internalType":"address","name":"tokenContractAddress","type":"address"}],"name":"setInitialDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedContracts","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"address","name":"_userProfiles","type":"address"},{"internalType":"address","name":"_groupTokens","type":"address"}],"name":"updateContracts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"},{"internalType":"string","name":"color1","type":"string"},{"internalType":"string","name":"color2","type":"string"},{"internalType":"string","name":"color3","type":"string"}],"name":"updateGroupNFTColors","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"},{"internalType":"string","name":"details","type":"string"}],"name":"updateGroupNFTDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"updateGroupNFTURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"},{"internalType":"string","name":"groupName","type":"string"}],"name":"updateGroupNameFormat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"updateMaxMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateTrustedContract","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const abiProfiles = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":true,"internalType":"string","name":"handle","type":"string"}],"name":"hashtagToVerify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"requester","type":"address"}],"name":"logNewUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":false,"internalType":"string","name":"uri","type":"string"},{"indexed":false,"internalType":"string","name":"avatar","type":"string"},{"indexed":false,"internalType":"string","name":"location","type":"string"},{"indexed":false,"internalType":"string","name":"bio","type":"string"}],"name":"logProfileUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"profileAddress","type":"address"},{"indexed":false,"internalType":"string","name":"metadata","type":"string"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_networkID","type":"uint256"}],"name":"logSaveNFTAvatar","type":"event"},{"inputs":[],"name":"ContractHook","outputs":[{"internalType":"contract IContractHook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Followers","outputs":[{"internalType":"contract IFollowers","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Groups","outputs":[{"internalType":"contract IGroups","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT","outputs":[{"internalType":"contract INFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Rewards","outputs":[{"internalType":"contract IRewards","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addressRequester","type":"address"},{"internalType":"address","name":"addressToFollow","type":"address"}],"name":"followUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"usrAddress","type":"address"}],"name":"getContractHook","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"usrAddress","type":"address"}],"name":"getUserDetails","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxURILength","type":"uint256"},{"internalType":"uint256","name":"_maxBioLength","type":"uint256"},{"internalType":"uint256","name":"_maxFollowing","type":"uint256"},{"internalType":"uint256","name":"_maxLocationLength","type":"uint256"},{"internalType":"uint256","name":"_networkID","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"joinedUserCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxBioLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFollowing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxLocationLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxURILength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"networkID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"posterAddress","type":"address"},{"internalType":"uint256","name":"tipPerTag","type":"uint256"},{"internalType":"address[]","name":"tipReceivers","type":"address[]"},{"internalType":"uint256","name":"isCommentOf","type":"uint256"},{"internalType":"address","name":"tipContract","type":"address"},{"internalType":"uint256","name":"erc20Tips","type":"uint256"},{"internalType":"uint256","name":"msgID","type":"uint256"}],"name":"recordPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"profileAddress","type":"address"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"metadata","type":"string"},{"internalType":"uint256","name":"_networkID","type":"uint256"}],"name":"setAvatar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"}],"name":"setContractHook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"setNFTAsAvatar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"groupAddress","type":"address"},{"internalType":"string","name":"groupName","type":"string"},{"internalType":"uint256","name":"groupID","type":"uint256"},{"internalType":"address","name":"_nftContract","type":"address"}],"name":"setupNewGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addressRequester","type":"address"},{"internalType":"address","name":"addressToUnfollow","type":"address"}],"name":"unfollowUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateApproved","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_followers","type":"address"},{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"address","name":"_groups","type":"address"},{"internalType":"address","name":"_rewards","type":"address"}],"name":"updateContracts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"string","name":"handle","type":"string"},{"internalType":"uint256","name":"verified","type":"uint256"}],"name":"updateHandleVerify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_metadata","type":"string"}],"name":"updateMetadata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"posterAddress","type":"address"},{"internalType":"bool","name":"isComment","type":"bool"}],"name":"updatePostCount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"location","type":"string"},{"internalType":"string","name":"avatar","type":"string"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bioLen","type":"uint256"},{"internalType":"uint256","name":"_uriLen","type":"uint256"},{"internalType":"uint256","name":"_locLen","type":"uint256"},{"internalType":"uint256","name":"_networkID","type":"uint256"}],"name":"updateProfileVars","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"targetAddress","type":"address"},{"internalType":"uint256","name":"tipsReceived","type":"uint256"},{"internalType":"uint256","name":"tipsSent","type":"uint256"}],"name":"updateUserTips","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const abiLikes = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"},{"indexed":true,"internalType":"address","name":"requester","type":"address"}],"name":"logAddLike","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"},{"indexed":true,"internalType":"address","name":"requester","type":"address"}],"name":"logRemoveLike","type":"event"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"address","name":"likedBy","type":"address"}],"name":"addLike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addressToCheck","type":"address"},{"internalType":"uint256","name":"msgID","type":"uint256"}],"name":"checkUserLikeMsg","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"liker","type":"address"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getLikesByAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getLikesFromMsgID","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxItemsReturn","type":"uint256"},{"internalType":"uint256","name":"_maxItemsPerBucket","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"likedByMap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"name":"likedByMapMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"likesMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"likesMapMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxItemsPerBucket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxItemsReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"messageData","outputs":[{"internalType":"contract IMessageData","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"address","name":"likedBy","type":"address"}],"name":"removeLike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"address","name":"_messageData","type":"address"}],"name":"updateContracts","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const abiTips = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"},{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":false,"internalType":"uint256","name":"tips","type":"uint256"}],"name":"logAddTip","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"poster","type":"address"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"logClaimTips","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"taggedAccount","type":"address"},{"indexed":false,"internalType":"uint256","name":"tip","type":"uint256"}],"name":"logTaggedTip","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"taggedAccount","type":"address"},{"indexed":false,"internalType":"uint256","name":"tip","type":"uint256"},{"indexed":false,"internalType":"address","name":"tipContract","type":"address"}],"name":"logTaggedTipERC20","type":"event"},{"inputs":[],"name":"Groups","outputs":[{"internalType":"contract IGroups","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MessageData","outputs":[{"internalType":"contract IMessageData","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UserProfile","outputs":[{"internalType":"contract IUserProfiles","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"taggedAccounts","type":"address[]"},{"internalType":"uint256","name":"erc20Tips","type":"uint256"},{"internalType":"address","name":"tipContract","type":"address"}],"name":"addTaggedTips","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"address","name":"tippedBy","type":"address"},{"internalType":"uint256","name":"tips","type":"uint256"}],"name":"addTip","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"}],"name":"addTipFromPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"checkTips","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"claimTips","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getTippersFromMsgID","outputs":[{"internalType":"string[2][]","name":"","type":"string[2][]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxItemsReturn","type":"uint256"},{"internalType":"uint256","name":"_maxItemsPerBucket","type":"uint256"},{"internalType":"uint256","name":"_cut","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxItemsPerBucket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxItemsReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newVault","type":"address"}],"name":"setVaultAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tipsAmountMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tipsMap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"name":"tipsMapMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"address","name":"_messageData","type":"address"},{"internalType":"address","name":"_userProfile","type":"address"},{"internalType":"address","name":"_groups","type":"address"}],"name":"updateContracts","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const abiGroupPosts = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"groupIDs","type":"uint256[]"}],"name":"logAddPost","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"groupIDs","type":"uint256[]"}],"name":"logRemovePost","type":"event"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"uint256[]","name":"groupIDs","type":"uint256[]"}],"name":"addPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getMsgIDsByGroupID","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"groupPostsMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"groupPostsMapMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxItemsReturn","type":"uint256"},{"internalType":"uint256","name":"_maxItemsPerBucket","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxItemsPerBucket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxItemsReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"uint256[]","name":"groupIDs","type":"uint256[]"}],"name":"removePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"}],"name":"updateContracts","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const abiHandles = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"usrAddress","type":"address"},{"indexed":true,"internalType":"string","name":"handle","type":"string"}],"name":"updateHandle","type":"event"},{"inputs":[],"name":"DOOM","outputs":[{"internalType":"contract IDOOM","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Groups","outputs":[{"internalType":"contract IGroups","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UserProfiles","outputs":[{"internalType":"contract IUserProfiles","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"approved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"handle","type":"string"}],"name":"checkIfAvailable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"costForNameChange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"_paymentToken","type":"address"},{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_costForNameChange","type":"uint256"},{"internalType":"uint256","name":"_maxHandleLength","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentToken","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"_payments","type":"address"},{"internalType":"address","name":"_userProfiles","type":"address"},{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"address","name":"_doom","type":"address"},{"internalType":"address","name":"_groups","type":"address"}],"name":"updateContracts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_costToChangeName","type":"uint256"},{"internalType":"uint256","name":"_maxHandleLength","type":"uint256"}],"name":"updateLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"handle","type":"string"}],"name":"updateUserHandle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"string","name":"handle","type":"string"},{"internalType":"uint256","name":"verified","type":"uint256"}],"name":"updateUserHandleAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"usrHandleMap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const abiFollowers = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"}],"name":"logAddFollower","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"}],"name":"logRemoveFollower","type":"event"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addressRequester","type":"address"},{"internalType":"address","name":"addressTarget","type":"address"}],"name":"addFollower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"followerMap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"name":"followerMapMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"followingMap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"followingMapMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"usrAddress","type":"address"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getFollowers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"usrAddress","type":"address"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getFollowing","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxItemsReturn","type":"uint256"},{"internalType":"uint256","name":"_maxItemsPerBucket","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addressRequester","type":"address"},{"internalType":"address","name":"addressTarget","type":"address"}],"name":"isUserFollowing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxItemsPerBucket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxItemsReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addressRequester","type":"address"},{"internalType":"address","name":"addressTarget","type":"address"}],"name":"removeFollower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"address","name":"_userProfiles","type":"address"}],"name":"updateContracts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userProfiles","outputs":[{"internalType":"contract IUserProfiles","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const abiBlocking = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"profileAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"update","type":"bool"},{"indexed":true,"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"logBlacklistUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"minimumReq","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"indexedgroupID","type":"uint256"}],"name":"logNFTReqUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"profileAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"update","type":"bool"},{"indexed":true,"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"logWhitelistUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"usrAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"flipped","type":"bool"},{"indexed":true,"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"toggleWhiteListLog","type":"event"},{"inputs":[],"name":"Groups","outputs":[{"internalType":"contract IGroups","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"usrAddress","type":"address"},{"internalType":"bool","name":"blackList","type":"bool"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxItemsReturn","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"requesterAddress","type":"address"},{"internalType":"address","name":"targetAddress","type":"address"}],"name":"isAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"requesterAddress","type":"address"},{"internalType":"address","name":"groupAddress","type":"address"}],"name":"isAllowedByNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxItemsReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"toggleWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"toToggle","type":"address"},{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"updateBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"address","name":"_userProfiles","type":"address"},{"internalType":"address","name":"_groups","type":"address"}],"name":"updateContracts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"uint256","name":"minimumReq","type":"uint256"},{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"updateNFTReq","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"toToggle","type":"address"},{"internalType":"uint256","name":"groupID","type":"uint256"}],"name":"updateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userProfiles","outputs":[{"internalType":"contract IUserProfiles","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usrBlockingMap","outputs":[{"internalType":"bool","name":"usingWhitelist","type":"bool"},{"components":[{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"uint256","name":"minimumReq","type":"uint256"}],"internalType":"struct Blocking.ContractProof","name":"contractProof","type":"tuple"}],"stateMutability":"view","type":"function"}];
const abiTagged = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"},{"indexed":true,"internalType":"address","name":"taggedAccount","type":"address"}],"name":"logAddTag","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"},{"indexed":true,"internalType":"address","name":"untaggedAccount","type":"address"}],"name":"logRemoveTag","type":"event"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"address[]","name":"addressesTagged","type":"address[]"}],"name":"addTags","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"usrAddress","type":"address"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getTaggedMsgIDs","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxItemsReturn","type":"uint256"},{"internalType":"uint256","name":"_maxItemsPerBucket","type":"uint256"},{"internalType":"uint256","name":"_maxTaggedAccounts","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxItemsPerBucket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxItemsReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTaggedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"address[]","name":"addressesTagged","type":"address[]"}],"name":"removeTags","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"taggedMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"taggedMapMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxTaggedAccounts","type":"uint256"}],"name":"updateDetails","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const abiHashtags = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"hashtags","type":"string"},{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"}],"name":"logAddHashtag","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"hashtags","type":"string"},{"indexed":true,"internalType":"uint256","name":"msgID","type":"uint256"}],"name":"logRemoveHashtag","type":"event"},{"inputs":[],"name":"KUtils","outputs":[{"internalType":"contract IKUtils","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"string[]","name":"hashtagsToToggle","type":"string[]"}],"name":"addHashtags","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"hashtag","type":"string"},{"internalType":"uint256","name":"startFrom","type":"uint256"}],"name":"getMsgIDsFromHashtag","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"hashtagMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"hashtagMapMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxItemsReturn","type":"uint256"},{"internalType":"uint256","name":"_maxItemsPerBucket","type":"uint256"},{"internalType":"uint256","name":"_maxHashtagLength","type":"uint256"},{"internalType":"uint256","name":"_minHashtagLength","type":"uint256"},{"internalType":"uint256","name":"_maxHashtags","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxHashtagLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxHashtags","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxItemsPerBucket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxItemsReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minHashtagLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"msgID","type":"uint256"},{"internalType":"string[]","name":"hashtagsToToggle","type":"string[]"}],"name":"removeHashtags","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_kutils","type":"address"},{"internalType":"uint256","name":"_maxHashtags","type":"uint256"}],"name":"updateDetails","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const abiRaffleTickets = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"logClaimToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"logMintToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"multiSig","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"logTokenLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"logTokenUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address[]","name":"users","type":"address[]"},{"indexed":true,"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"logUpdateClaimable","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"activateMultiSigLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"multiSigAddress","type":"address"}],"name":"addMultiSigLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"awardTix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"checkTix","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTix","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"costToMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"getMultiSigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhaleSizes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getWhales","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"cost","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"isOperator","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"isMultiSigLocked","outputs":[{"internalType":"bool[2]","name":"","type":"bool[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mintTix","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"removeMultiSigLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newVault","type":"address"}],"name":"setVaultAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tixBaseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenID","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tixCost","type":"uint256"},{"internalType":"uint256","name":"_maxToClaim","type":"uint256"},{"internalType":"string","name":"_tixBaseURI","type":"string"}],"name":"updateDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vaultAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whaleSizes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Contract Interfaces
let contractKUTHULU = new web3inf.eth.Contract(abiKUTHULU, contractAddress);
let contractKUTHULUPub = new web3.eth.Contract(abiKUTHULU, contractAddress);
let contractKUTHULUTokens = new web3inf.eth.Contract(abiTokens, contractAddressDOOM);
let contractKUTHULUTokensPub = new web3.eth.Contract(abiTokens, contractAddressDOOM);
let contractGroupTokens = new web3inf.eth.Contract(abiGroupTokens, contractAddressGroupsTokens);
let contractGroupTokensPub = new web3.eth.Contract(abiGroupTokens, contractAddressGroupsTokens);
let contractGroups = new web3inf.eth.Contract(abiGroups, contractAddressGroups);
let contractGroupsPub = new web3.eth.Contract(abiGroups, contractAddressGroups);
let contractProfiles = new web3inf.eth.Contract(abiProfiles, contractAddressProfiles);
let contractProfilesPub = new web3.eth.Contract(abiProfiles, contractAddressProfiles);
let contractLikes = new web3inf.eth.Contract(abiLikes, contractAddressLikes);
let contractTips = new web3inf.eth.Contract(abiTips, contractAddressTips);
let contractTipsPub = new web3.eth.Contract(abiTips, contractAddressTips);
let contractGroupPosts = new web3inf.eth.Contract(abiGroupPosts, contractAddressGroupPosts);
let contractHandles = new web3inf.eth.Contract(abiHandles, contractAddressHandles);
let contractHandlesPub = new web3.eth.Contract(abiHandles, contractAddressHandles);
let contractFollowers = new web3inf.eth.Contract(abiFollowers, contractAddressFollowers);
let contractBlocking = new web3inf.eth.Contract(abiBlocking, contractAddressBlocking);
let contractBlockingPub = new web3.eth.Contract(abiBlocking, contractAddressBlocking);
let contractTagged = new web3inf.eth.Contract(abiTagged, contractAddressTagged);
let contractHashtags = new web3inf.eth.Contract(abiHashtags, contractAddressHashtags);
let contractRaffleTix = new web3inf.eth.Contract(abiRaffleTickets, contractAddressRaffleTix);
let contractRaffleTixPub = new web3.eth.Contract(abiRaffleTickets, contractAddressRaffleTix);

$('#contractLink').html('<a href="' + txScanURLPrefix + "/address/" + contractAddress + '" target="_blank" style="color:blue;">' + contractAddress + '</a>')

$(".page-loader .loader").delay(0).fadeOut();
$(".page-loader").delay(500).fadeOut("slow");

let walletAddress;
const ethDec = 1000000000000000000;
let walletChainID;

let validWalletConnection = false;
let onBadChain = false;
let userMATICBalance = 0;
let userDOOMBalance = 0;
let costToPost = 0;
let costToUpdateHandle = 0;
let costLike = 0;
let tipsToClaim = 0;
let raffleTixToClaim = 0;
let allowance = 0;
let costToMintTier1 = 0;
let costToMintTier2 = 0;
let costToMintTier3 = 0;
let costToMintTier4 = 0;
let totalMessages = 0;
let totalComments = 0;
let maxMessagesToGet = 25;
let nameCache = {};

let allMessagesPos = 0;

const validImgExt = ['gif','jpg','jpeg','png','webp','svg'];

// Get any query strings
const qs = new URLSearchParams(window.location.search);

window.addEventListener('load', async() => {
    $('#connectWalletToPost').show();
    let startResp = await start();
});

async function start() {

    // Test the Blockchain Provider
    let testCall = await contractKUTHULUTokens.methods.balanceOf('0x0000000000000000000000000000000000000000').call()
        .then(result => {
            console.log('Infura Working');
            return true;
        })
        .catch(err => {
            console.log('Infura Down');
            return false;
        });

    if (!testCall){
        // Try Alchemy
        let testContract = new web3alc.eth.Contract(abiTokens, contractAddressDOOM);

        testCall = await testContract.methods.balanceOf('0x0000000000000000000000000000000000000000').call()
            .then(result => {
                console.log('Switching to Alchemy...');

                switchProvider(web3alc);

                return true;
            })
            .catch(err => {
                console.log('Alchemy Down');
                return false;
            });
    }


    var w = await checkWallet();

    if (validWalletConnection) {
        console.log('Wallet Address: ' + walletAddress);

        $('#myProfile').html('<a class="scroll-to" href="?address=' + walletAddress + '">My Profile</a>');

        tipsToClaim = await contractTips.methods.checkTips(walletAddress).call()
            .then(result => {
                console.log('Tips to Claim: ' + result);
                return result;
            })
            .catch(err => {
                catchError('checkTips', err);
            });

        raffleTixToClaim = await contractRaffleTix.methods.checkTix(walletAddress).call()
            .then(result => {
                console.log('Raffle Tickets to Claim: ' + result);
                return result;
            })
            .catch(err => {
                catchError('contractRaffleTix', err);
            });

        // See if they own any groups
        let buildResp = await buildAsGroup();

        // Show the connect button
        showConnectWalletButtons(false);

    } else {
        // Show the connect button
        showConnectWalletButtons(true);
    }

    // Get costs
    let costsResp = await getCosts();

    // This ends after slots are built
    startLoading('Loading Contract Data...');

    let posts = await getPosts();

    endLoading();
}


function switchProvider(goodProvider){
    contractKUTHULU = new goodProvider.eth.Contract(abiKUTHULU, contractAddress);
    contractKUTHULUTokens = new goodProvider.eth.Contract(abiTokens, contractAddressDOOM);
    contractGroupTokens = new goodProvider.eth.Contract(abiGroupTokens, contractAddressGroupsTokens);
    contractGroups = new goodProvider.eth.Contract(abiGroups, contractAddressGroups);
    contractProfiles = new goodProvider.eth.Contract(abiProfiles, contractAddressProfiles);
    contractLikes = new goodProvider.eth.Contract(abiLikes, contractAddressLikes);
    contractTips = new goodProvider.eth.Contract(abiTips, contractAddressTips);
    contractGroupPosts = new goodProvider.eth.Contract(abiGroupPosts, contractAddressGroupPosts);
    contractHandles = new goodProvider.eth.Contract(abiHandles, contractAddressHandles);
    contractFollowers = new goodProvider.eth.Contract(abiFollowers, contractAddressFollowers);
    contractBlocking = new goodProvider.eth.Contract(abiBlocking, contractAddressBlocking);
    contractTagged = new goodProvider.eth.Contract(abiTagged, contractAddressTagged);
    contractHashtags = new goodProvider.eth.Contract(abiHashtags, contractAddressHashtags);
}


async function checkWallet(attempt) {
    console.log('checking wallet');
    if (typeof window.ethereum !== 'undefined') {

        window.ethereum.on('accountsChanged', function() {
            window.location.reload();
        })

        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });

        window.ethereum.on('disconnect', () => {
            window.location.reload();
        });

        console.log('Wallet event listeners initialized');

        // walletChainID = await window.ethereum.chainId;

        let network = await web3.eth.net.getId();

        console.log('Checking if connected network (' + network + ') = valid network (' + validNetworkID + ')');

        if (network === validNetworkID) {

            walletAddress = await web3.utils.toChecksumAddress(window.ethereum.selectedAddress);

            console.log('wallet address: ', walletAddress);

            if (walletAddress === null || walletAddress === undefined) {
                console.log('First wallet check empty.');
                try {
                    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
                    console.log('Accounts: ', accounts);
                    if (accounts.length >= 0) {
                        walletAddress = web3.utils.toChecksumAddress(accounts[0]);
                        console.log('Retrieved wallet address');
                    }
                } catch (e){
                    console.log('Looks like there is no wallet :/');
                }
            }

            if (walletAddress !== null && walletAddress !== undefined) {

                validWalletConnection = true;
                onBadChain = false;

                let loadedWalletOK = true;

                console.log('MetaMask Connected to: ' + walletAddress);

                // Get their MATIC Balance
                userMATICBalance = await web3.eth.getBalance(walletAddress);

                // Get their DOOM Balance
                userDOOMBalance = await contractKUTHULUTokens.methods.balanceOf(walletAddress).call()
                    .then(result => {
                        console.log('Result:' + result);
                        return result;
                    })
                    .catch(err => {
                        catchError('getDOOMBalance', err);
                        loadedWalletOK = false
                    });

                console.log('MATIC Balance: ', userMATICBalance);
                console.log('DOOM Balance: ', userDOOMBalance);

                // Check DOOM Allowance
                allowance = await contractKUTHULUTokens.methods.allowance(walletAddress, contractAddress).call()
                    .then(result => {
                        console.log('Allowance:' + result);
                        return result;
                    })
                    .catch(err => {
                        catchError('getDOOMBalance', err);
                        loadedWalletOK = false
                    });


                costToPost = await contractKUTHULU.methods.costToPost().call()
                    .then(result => {
                        console.log('Cost to Post:' + result);
                        return result;
                    })
                    .catch(err => {
                        catchError('costToPost', err);
                    });


                if (parseInt(allowance) === 0 && userDOOMBalance > costToPost){
                    $('#postit').hide();
                    $('#approveit').show();
                } else if (userDOOMBalance < costToPost){
                    $('#postit').hide();
                    $('#buyIt').show();
                }

                if (loadedWalletOK) {
                    // Hide the connect button
                    showConnectWalletButtons(false);
                } else {
                    // Show the connect button
                    showConnectWalletButtons(true);
                }
            } else {
                console.log('No Accounts Found');

                catchError('checkWallet', "No accounts found on wallet. Try refreshing?", 1);
1
                // Show the connect button
                showConnectWalletButtons(true);
            }

        } else {
            walletAddress = await web3.utils.toChecksumAddress(window.ethereum.selectedAddress);

            if (walletAddress !== null && walletAddress !== undefined && attempt !== 2) {
                const accounts = await ethereum.request({method: 'eth_requestAccounts'});
                if (walletAddress !== null && walletAddress !== undefined) {
                    let resp = await checkWallet(2);
                }
            } else {
                onBadChain = true;
                showConnectWalletButtons(true);
                console.log("Connected to the wrong network ", walletChainID);
                catchError('checkWallet', 'You\'re connected to the wrong network.<br/>Connect to Polygon and refresh.');
            }

        }
    } else {
        console.log('MetaMask NOT installed');
    }
}

async function connectWallet() {

    // Open MetaMask to connect
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});

    let resp = await checkWallet();
}


function showConnectWalletButtons(onOff){
    if (onOff){
        if (onBadChain){
            $('#mm').html('<span class="walletCon gameFont">Bad Network!</span>');
            let connButtons = '<input type="button" class="walletButton gameFont gameButtonSmall" onclick="connectToPolygon();" value="Connect to Polygon" />';
            connButtons += '<br><input type="button" class="walletButton gameFont gameButtonSmall" style="margin-top:15px;" onclick="connectToPolygon(\'add\');" value="+Polygon Network" />';

            $('#mmConn').html(connButtons);
            $('#connectWalletToPost').hide();
            $('#connectWalletToPolygon').show();
        } else {
            // $('#mm').html('<input type="button" class="walletButton gameFont" onclick="connectWallet()" value="Connect Your Wallet" />');
            $('#connectWalletToPost').show();
        }
        $('#postBox').hide();
    } else {
        $('#mm').html('');
        $('#connectWalletToPost').hide();
        $('#connectWalletToPolygon').hide();

        let shortAddr = makeShortAddress(walletAddress);

        // let mmButtons = '<span class="walletCon gameFont">Wallet Connected : <span style="color:#ad81fc;">' + shortAddr + '</span></span>';
        // mmButtons += '<br><input type="button" class="btn btn-sm btn-style-2 gameFont d-none d-md-block gameButtonSmall" style="margin-top:15px;" onclick="addTokenToMetaMask(\'doom\')" value="✚ DOOM to Wallet" />';

        if (tipsToClaim > 0) {
            let mmButtons = '<div id="claimTipsWrapper"><span class="walletCon gameFont">Tips to Claim : <span style="color:#ad81fc;" id="tipsToClaim">' + web3.utils.fromWei(tipsToClaim) + '</span></span><br>';
            mmButtons += '<input type="button" class="btn btn-sm btn-style-2 gameFont gameButtonSmall" style="margin-top:15px;" onClick="claimTips(0)" value="Claim MATIC Tips!"/></div>';

            $('#mmConn').html(mmButtons);
        }

        if (raffleTixToClaim > 0) {
            let mmButtons = '<div id="claimTixWrapper"><span class="walletCon gameFont"><img src="images/raffleTicketThumb.png" class="fade-in-out" alt="Raffle Ticket" style="margin-bottom:6px;width:180px;" /><br />Raffle Tickets to Claim : <span style="color:#ad81fc;" id="tixToClaim">' + raffleTixToClaim + '</span></span><br>';
            mmButtons += '<input type="button" class="btn btn-sm btn-style-2 gameFont gameButtonSmall" style="margin-top:15px;" onClick="claimTix()" value="Claim Raffle Tix!"/></div>';

            $('#mmConn').append(mmButtons);
        }
    }
}

async function connectToPolygon(m){
    if (m === 'add') {
        let network = await web3.eth.net.getId();
        let netID = network.toString();

        if (netID === validNetworkID) {
            alert("Polygon Network has already been added to Metamask.");
            return;
        } else {
            // params = [{
            //     chainId: validChainID,
            //     chainName: 'Matic Mainnet',
            //     nativeCurrency: {
            //         name: 'MATIC',
            //         symbol: 'MATIC',
            //         decimals: 18
            //     },
            //     rpcUrls: ['https://polygon-rpc.com/'],
            //     blockExplorerUrls: ['https://polygonscan.com/']
            // }]
            params = [{
                chainId: validChainID,
                chainName: 'Matic Mumbai Testnet',
                nativeCurrency: {
                    name: 'MATIC',
                    symbol: 'MATIC',
                    decimals: 18
                },
                rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
                blockExplorerUrls: ['https://mumbai.polygonscan.com/']
            }]
        }

        window.ethereum.request({ method: 'wallet_addEthereumChain', params })
            .then(() => console.log('Successfully added Polygon Network to Wallet'))
            .catch((error) => console.log("Error", error.message));
    }
    const switchNetwork = await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{chainId: validChainID}],
    });

    window.location.reload();
}


async function postMsg() {

    if (validWalletConnection) {

        startLoading('Performing Magic...');

        let message = $('.readonly').html();
        let hashtags = [];
        let tags = [];
        let tips = $('#tips').val();
        let tokenContract = $('#token').val();
        let uri = $('#uri').val();
        let commentLevel = parseInt($('#commentLevel').val());
        let commentTo = $('#commentTo').val();
        let repostOf = $('#repostOf').val();
        let inGroups = [];
        let asGroup = $('#asGroupID').val();
        let erc20TipAmount = 0;
        let validTipContract = parseInt($('#tipsValid').val());

        if (asGroup.length > 2){
            asGroup = await contractGroupTokens.methods.getGroupID(asGroup).call()
                .then(result => {
                    console.log('As Group ID:' + result);
                    return result;
                })
                .catch(err => {
                    catchError('getGroupID', err);
                });
        }

        if ($('#hashtags').val() !== ''){
            if ($('#hashtags').val().indexOf(',') > 0){
                hashtags = $('#hashtags').val().split(',');
                for (let h=0;h<hashtags.length;h++){
                    hashtags[h] = hashtags[h].trim().replaceAll('#','');
                }
            } else {
                hashtags[0] = $('#hashtags').val().trim().replaceAll('#','');
            }
        }

        if ($('#tags').val() !== ''){
            if ($('#tags').val().indexOf(',') > 0){
                tags = $('#tags').val().split(',');
                for (let h=0;h<tags.length;h++){
                    tags[h] = tags[h].trim();
                }
            } else {
                tags[0] = $('#tags').val().trim();
            }
        }

        for (let t=0;t<tags.length;t++){
            if (!validateWalletAddress(tags[t])){
                alert(tags[t] + ' is not a valid Ethereum address');
                endLoading();
                return;
            }
        }


        // Check for tips
        console.log('validTipContract, ', validTipContract);
        console.log('parseFloat(tips), ', parseFloat(tips));
        if (validTipContract === 0 && parseFloat(tips) > 0){
            alert('You need to verify your tips first');
            endLoading();
            return;
        }

        console.log(tags);

        if (tips > 0 && tags.length === 0){
            alert('You need to tag at least 1 user to use tips');
            endLoading();
            return;
        }



        if ($('#inGroups').val() !== ''){
            if ($('#inGroups').val().indexOf(',') > 0){
                inGroups = $('#inGroups').val().split(',');
            } else {
                inGroups[0] = $('#inGroups').val().trim();
            }
        }

        // Flip the groups to group IDs
        for (let i = 0; i < inGroups.length; i++) {
            let inGroup = await contractGroupTokens.methods.getGroupID(inGroups[i]).call()
                .then(result => {
                    console.log('In Group ID:' + result);
                    return result;
                })
                .catch(err => {
                    catchError('inGroups getGroupID', err);
                });

            inGroups[i] = inGroup;
        }


        if (tips === '' || tips === null || tips === undefined){
            tips = 0;
        }

        if (asGroup === '' || asGroup === null || asGroup === undefined){
            asGroup = 0;
        }

        if (tokenContract === '' || tokenContract === null || tokenContract === undefined || tokenContract === 'MATIC'){
            erc20TipAmount = 0;
        } else {
            // Setup for ERC-20 token tipping
            erc20TipAmount = web3.utils.toWei(tips.toString(), 'ether');

            // Set MATIC tips to 0
            tips = 0;

            if (!validateWalletAddress(tokenContract)){
                alert(tokenContract + ' is not a valid ERC-20 Contract address');
                endLoading();
                return;
            }

            tags.push(tokenContract);
        }

        if (commentTo === '' || commentTo === null){
            commentTo = 0;
        }

        if (repostOf === '' || repostOf === null){
            repostOf = 0;
        }

        if (repostOf === '' || repostOf === null){
            repostOf = 0;
        }


        if (hashtags.length > 3){
            alert('No more than 3 hashtags right now');
            endLoading();
            return;
        }

        if (tags.length > 3){
            alert('No more than 3 tags right now');
            endLoading();
            return;
        }

        // Get current gas prices
        const currentGasPrices = await getCurrentGasPrices();


        console.log('Message: ', message);
        console.log('hashtags: ', hashtags);
        console.log('tags: ', tags);
        console.log('tips: ', tips);
        console.log('uri: ', uri);
        console.log('attribs: ', [commentLevel, commentTo, repostOf, asGroup, erc20TipAmount]);
        console.log('inGroups: ', inGroups);



        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["string"],
            [ message ],
            ["string[]"],
            [ hashtags ],
            ["address[]"], // encode as address array
            [ tags ],
            ["string"],
            [ uri ],
            ["uin256[5]"],
            [ [commentLevel, commentTo, repostOf, asGroup, erc20TipAmount.toString()] ],
            ["uint256[]"],
            [ inGroups ],
            ); // array to encode


        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const ethWalletAddress = ethAccounts[0]
        const signer = provider.getSigner(ethWalletAddress)
        const doomContract = new ethers.Contract(contractAddress, abiKUTHULU, signer)
        const estimatedGasLimit = await doomContract.estimateGas.postMsg(message, hashtags, tags, uri, [commentLevel, commentTo, repostOf, asGroup, erc20TipAmount.toString()], inGroups, {value: ethers.utils.parseEther(tips.toString())})
            .then(async (result) => {
                console.log('Gas Estimate: ', result.toString());
                return result;
            })
            .catch(async (err) => {
                let errResp = await catchError('estimateGas', err);
            });

        const transaction = {
            "value": ethers.utils.parseEther(tips.toString()),
            "from": walletAddress,
            "to": contractAddress,
            "data": params,
            "gas": estimatedGasLimit,
            "gasLimit": estimatedGasLimit,
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log("MESSAGE: ", message);
        console.log("HASHTAGS: ", hashtags);
        console.log("TAGS: ", tags);
        console.log("URI: ", uri);
        console.log("COMMENT LEVEL: ", commentLevel);
        console.log("COMMENT TO: ", commentTo);
        console.log("REPOST OF: ", repostOf);
        console.log("AS GROUP: ", asGroup);
        console.log("ERC20 TIP AMOUNT: ", erc20TipAmount);
        console.log("IN GROUPS: ", inGroups);
        console.log('TRANSACTION: ', transaction);

        let resp = await contractKUTHULUPub.methods.postMsg(message, hashtags, tags, uri, [commentLevel, commentTo, repostOf, asGroup, erc20TipAmount.toString()], inGroups).send(transaction)
            .then(async (result) => {
                console.log('Post Results: ', result);

                $('#statusMsg').html('<span class="gameFont errorText">Message Posted!</span>');

                endLoading();

                window.location.reload();

                return result;
            })
            .catch(async (err) => {
                let errResp = await catchError('postMsg', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}


function validateWalletAddress(tag){
    return web3.utils.isAddress(tag);
}

const getCurrentGasPrices = async () => {
    var response = await $.get('https://api.polygonscan.com/api?module=gastracker&action=gasoracle&apikey=XQZ9BUIYDXIQ8624D9FMBKVD4UCRBZ1I6A',
        {},
        function (data) {
            // nope
        }
    );

    let prices = {
        low: response.result.SafeGasPrice,
        medium: response.result.ProposeGasPrice,
        high: response.result.FastGasPrice
    };
    return prices;
}

async function mintGroup(){

    startLoading('Minting Group...');

    // Get the group name
    let groupToMint = $('#groupToMint').val();

    // let letterNumber = /^[0-9a-zA-Z]+$/;
    // if (!groupToMint.match(letterNumber)){
    //     $('#statusMsg').html('<span class="gameFont" style="color: red;text-shadow: none;">Groups can only consist of letters and numbers</span>');
    //     endLoading();
    //     return;
    // }

    if (!groupToMint || groupToMint === '' || groupToMint === null){
        $('#statusMsg').html('<span class="gameFont" style="color: red;text-shadow: none;">You need to pick a group name first.</span>');
        endLoading();
        return;
    } else if (groupToMint.length < 3 || groupToMint.length > 100){
        $('#statusMsg').html('<span class="gameFont" style="color: red;text-shadow: none;">Group names must be between 3 and 100 characters long.</span>');
        endLoading();
        return;
    }

    // Check to see if the group is available
    // Get the group ID
    let isGroupAvailable = await contractGroupTokens.methods.isGroupAvailable(groupToMint).call()
        .then(result => {
            console.log('Group Availability:' + result);
            return result;
        })
        .catch(err => {
            catchError('isGroupAvailable', err);
        });

    // If the group is not owned by 0x0, then it's owned
    if (!isGroupAvailable){
        $('#statusMsg').html('<span class="gameFont" style="color: red;text-shadow: none;">That group is owned already</span>');
        endLoading();
        return;
    }

    // Calculate the cost to mint a group
    let costToMint = costToMintTier4;
    if (groupToMint.length === 3){
        costToMint = costToMintTier1;
    } else if (groupToMint.length <= 5){
        costToMint = costToMintTier2;
    } else if (groupToMint.length <= 8){
        costToMint = costToMintTier3;
    }

    // costToMint += ethDec;

    if (userMATICBalance < costToMint){
        $('#statusMsg').html('<span class="gameFont" style="color: red;text-shadow: none;">You need ' + (parseFloat(costToMint) / ethDec) + ' MATIC to mint that group name</span>');
        endLoading();
        return;
    }

    const currentGasPrices = await getCurrentGasPrices();

    const ethereum = window.ethereum;
    const ethAccounts = await ethereum.request({
        method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(ethereum)
    const ethWalletAddress = ethAccounts[0]
    const signer = provider.getSigner(ethWalletAddress)
    const groupsContract = new ethers.Contract(contractAddressGroupsTokens, abiGroupTokens, signer)
    const estimateGas = await groupsContract.estimateGas.mintGroup(groupToMint, {value: Math.trunc(costToMint).toString()});

    console.log('Gas Estimate: ', estimateGas);

    // Build data manually
    const abi = ethers.utils.defaultAbiCoder;
    let params = abi.encode(
        ["string"],
        [ groupToMint ]
    ); // array to encode

    const transaction = {
        "value": costToMint,
        "from": walletAddress,
        "to": contractAddressGroupsTokens,
        "data": params,
        "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
        "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
        "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
        "chainId": chainIDRaw
    };

    console.log('TRANSACTION: ', transaction);

    let resp = await contractGroupTokensPub.methods.mintGroup(groupToMint).send(transaction)
        .then(async (result) => {
            console.log('Post Results: ', result);

            $('#statusMsg').html('<span class="gameFont errorText">You now own the group "' + groupToMint + '"</span>');

            return result;
        })
        .catch(async (err) => {
            let errResp = await catchError('mintGroup', err);
        });

    endLoading();
}



async function mintDOOM(amount){

    startLoading('Minting DOOM...');

    // Get the group name
    let groupToMint = $('#groupToMint').val();

    let letterNumber = /^[0-9a-zA-Z]+$/;
    if (amount < 1){
        $('#statusMsg').html('<span class="gameFont" style="color: red;text-shadow: none;">Minimum amount of DOOM to mint is 1</span>');
        endLoading();
        return;
    }

    let costToMint = await contractKUTHULUTokens.methods.costToMint().call()
        .then(result => {
            console.log('Cost To Mint 1 DOOM Token: ' + result);
            return result;
        })
        .catch(err => {
            catchError('costToMintDOOM', err);
        });

    costToMint = 100;

    costToMint *= amount;

    if (userMATICBalance < costToMint){
        $('#statusMsg').html('<span class="gameFont" style="color: red;text-shadow: none;">You need ' + (parseFloat(costToMint) / ethDec) + ' MATIC to mint that much DOOM</span>');
        endLoading();
        return;
    }

    const currentGasPrices = await getCurrentGasPrices();

    const ethereum = window.ethereum;
    const ethAccounts = await ethereum.request({
        method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(ethereum)
    const ethWalletAddress = ethAccounts[0]
    const signer = provider.getSigner(ethWalletAddress)
    const tokensContract = new ethers.Contract(contractAddressDOOM, abiTokens, signer)
    const estimateGas = await tokensContract.estimateGas.publicMint(amount, {value: Math.trunc(costToMint).toString()});

    console.log('Gas Estimate: ', estimateGas);

    // Build data manually
    const abi = ethers.utils.defaultAbiCoder;
    let params = abi.encode(
        ["uint256"],
        [ amount ]
    ); // array to encode

    const transaction = {
        "value": costToMint,
        "from": walletAddress,
        "to": contractAddressDOOM,
        "data": params,
        "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
        "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
        "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
        "chainId": chainIDRaw
    };

    console.log('TRANSACTION: ', transaction);

    let resp = await contractKUTHULUTokensPub.methods.publicMint(amount).send(transaction)
        .then(async (result) => {
            console.log('Post Results: ', result);

            $('#statusMsg').html('<span class="gameFont errorText">' + amount + ' DOOM has been added to your wallet!</span>');

            $('#postit').show();
            $('#buyIt').hide();

            return result;
        })
        .catch(async (err) => {
            let errResp = await catchError('publicMint', err);
        });

    endLoading();
}


async function catchError(func, err, skipLoadings, type){
    if (!skipLoadings) {
        endLoading();
    }

    console.log('ERROR: ', err);

    let errMsg = 'Something did\'t go as planned :/ <br> Please refresh and try again.';
    if (err.message !== undefined || err.code !== undefined) {
        if (err.message !== undefined && err.code === undefined) {
            if (err.message.indexOf('User denied transaction signature') >= 0) {
                errMsg = 'You canceled the transaction.';
            } else if (err.message.indexOf('Transaction has been reverted') >= 0) {

                console.log(err.message);
                let txHash = err.message.split('transactionHash": "')[1].split('"')[0];

                let errTx = await $.get('https://api.tenderly.co/api/v1/public-contract/' + validNetworkID + '/tx/' + txHash, {"headers": {"X-Access-Key": "nSABfrE2L1nWFmCa2-nHm-T-1obKW0R-"}});
                console.log(errTx);

                errMsg = "<a href='" + txScanURLPrefix + "/tx/" + txHash + "' target='_blank'>" + errTx.error_message + "</a>";

            } else if (err.message.indexOf('RPC') >= 0){
                console.log('RPC Error: ', err.message);
            } else {
                console.log(err.message, func);
                errMsg = err.message;
            }
        } else if (err.code !== undefined) {
            if (err.code === -32005) {
                console.log('MM Timeout ', func)
                errMsg = "MetaMask was unable to reach the blockchain (rate limiting)<br /> Please try again in a few seconds.";
            } else if (err.code === -32603) {
                console.log('MM RPC Error ', func);
                if (err.data.message.toLowerCase().indexOf('execution reverted') >= 0) {
                    errMsg = err.data.message.replace('execution reverted: ','');
                }
            } else if (err.code === 4001){
                console.log('User Canceled Transaction', func);
                errMsg = "Transaction rejected! Why? Did I do something wrong? Is it me? I'm sorry...🥺";
            } else {
                console.log(err.message, func);
                errMsg = '1 - ' + err.code + ' : ' + func;
            }
        }else{
            console.log(err.message, func);
            errMsg = '2 - ' + err.message + ' : ' + func;
        }
    } else {
        console.log(err.message, func);
        errMsg = err ;
    }


    console.log('Error Func: ' + func);
    $('#statusMsg').html('<span class="gameFont" id="errorText">' + errMsg + '</span>');

    if (!skipLoadings) {
        $('#playButtons').show();
    }
}

async function addTokenToMetaMask(tokenName){
    if (validWalletConnection) {

        var tokenAddress;
        var tokenSymbol;
        var tokenDecimals;
        var tokenImage;

        if (tokenName.toLowerCase() === 'doom') {
            tokenAddress = contractAddressDOOM.toString();
            tokenSymbol = 'DOOM';
            tokenDecimals = 18;
            tokenImage = 'https://kryptosucks.s3.amazonaws.com/tokens/doom/doom_token.png';
        }

        try {
            console.log('Trying to add ' + tokenSymbol + ' to wallet');
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage,
                    },
                },
            });

        } catch (error) {
            console.log(error);
            $('#statusMsg').html('<span class="gameFont" style="color: red;text-shadow: none;">Doh! ' + error + '</span>');
        }
    } else {
        console.log("invalid wallet connection");
        $('#statusMsg').html('<span class="gameFont" style="color: red;text-shadow: none;">Doh! You have to connect your wallet first.</span>');
    }
}


async function approve(){
    if (validWalletConnection) {

        var amount = 10000000000;
        var tokens = web3.utils.toWei(amount.toString(), 'ether');
        var bntokens = web3.utils.toBN(tokens)

        startLoading('Setting Allowance...');

        var resp = await contractKUTHULUTokensPub.methods.approve(contractAddress, bntokens).send({from: walletAddress})
            .then(result => {

                endLoading();

                if (result.status === true){
                    $('#approveit').hide();
                    $('#postit').show();
                }

                return result;
            })
            .catch(err => {
                endLoading();
                $('#approveit').show();
                $('#postit').hide();
                catchError('approve', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}

async function like(postID){
    if (validWalletConnection) {

        startLoading('Liking post...');

        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner(walletAddress)
        const kuthuluContract = new ethers.Contract(contractAddress, abiKUTHULU, signer)
        const estimateGas = await kuthuluContract.estimateGas.toggleLike(postID);

        console.log('Gas Estimate: ', estimateGas);

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["uint256"],
            [ postID ]
        ); // array to encode

        const transaction = {
            "from": walletAddress,
            "data": params,
            "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractKUTHULUPub.methods.toggleLike(postID).send(transaction)
            .then(result => {
                endLoading();
                // window.location.reload();
            })
            .catch(err => {
                endLoading();
                catchError('toggleLike', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}

async function followUser(address, accountType){
    if (validWalletConnection) {

        startLoading('Following ' + accountType + '...');

        console.log('Following: ', address);

        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner(walletAddress)
        const kuthuluContract = new ethers.Contract(contractAddress, abiKUTHULU, signer)
        const estimateGas = await kuthuluContract.estimateGas.followUser(address);

        console.log('Gas Estimate: ', estimateGas);

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["address"],
            [ address ]
        ); // array to encode

        const transaction = {
            "from": walletAddress,
            "data": params,
            "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractKUTHULUPub.methods.followUser(address).send(transaction)
            .then(result => {
                endLoading();
                // window.location.reload();
            })
            .catch(err => {
                endLoading();
                catchError('followUser', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}

async function unfollowUser(address){
    if (validWalletConnection) {

        startLoading('Following user...');

        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner(walletAddress)
        const kuthuluContract = new ethers.Contract(contractAddress, abiKUTHULU, signer)
        const estimateGas = await kuthuluContract.estimateGas.unfollowUser(address);

        console.log('Gas Estimate: ', estimateGas);

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["address"],
            [ address ]
        ); // array to encode

        const transaction = {
            "from": walletAddress,
            "data": params,
            "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractKUTHULUPub.methods.unfollowUser(address).send(transaction)
            .then(result => {
                endLoading();
                // window.location.reload();
            })
            .catch(err => {
                endLoading();
                catchError('followUser', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}


async function toggleBlock(address, groupID){
    if (validWalletConnection) {

        startLoading('Updating Blocking of user...');

        // Check if they're using a whitelist
        let usingWhitelist = await contractBlocking.methods.usrBlockingMap(walletAddress).call()
            .then(result => {
                console.log('Using Whitelist:' + result.usingWhitelist);
                return result.usingWhitelist;
            })
            .catch(err => {
                catchError('usrBlockingMap-whitelistcheck', err);
            });

        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner(walletAddress)
        const kuthuluContract = new ethers.Contract(contractAddressBlocking, abiBlocking, signer)

        console.log('toggle block: ', address, groupID);

        let estimateGas;
        if (usingWhitelist){
            estimateGas = await kuthuluContract.estimateGas.updateWhitelist(address, groupID);
        } else {
            estimateGas = await kuthuluContract.estimateGas.updateBlacklist(address, groupID);
        }


        console.log('Gas Estimate: ', estimateGas);

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["address"],
            [ address ]
        ); // array to encode

        const transaction = {
            "from": walletAddress,
            "data": params,
            "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        if (usingWhitelist){
            let resp = await contractBlockingPub.methods.updateWhitelist(address, groupID).send(transaction)
                .then(result => {
                    console.log("Whitelist Updated");
                    endLoading();
                    // window.location.reload();
                })
                .catch(err => {
                    endLoading();
                    catchError('updateWhitelist', err);
                });
        } else {
            let resp = await contractBlockingPub.methods.updateBlacklist(address, groupID).send(transaction)
                .then(result => {
                    console.log("Blacklist Updated");
                    endLoading();
                    // window.location.reload();
                })
                .catch(err => {
                    endLoading();
                    catchError('updateBlacklist', err);
                });
        }

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}


async function deletePost(msgID){
    if (validWalletConnection) {

        startLoading('Erasing post...');

        let posts = await contractKUTHULU.methods.getMsgsByIDs([msgID], false, '0x0000000000000000000000000000000000000000').call()
            .then(result => {
                result = formatMsgRespToJSON(result);
                console.log('Message Data:', result);
                return result;
            })
            .catch(err => {
                catchError('getMsgsByIDs', err);
            });

        if (posts.Messages[0].postedBy.toLowerCase() !== walletAddress.toLowerCase() && posts.Messages[0].postProxy.toLowerCase() !== walletAddress.toLowerCase()) {
            endLoading();
            $('#statusMsg').html('<span class="gameFont errorText" id="errorText">That\'s not your post to erase.</span>');
            return;
        }

        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner(walletAddress)
        const kuthuluContract = new ethers.Contract(contractAddress, abiKUTHULU, signer)
        const estimateGas = await kuthuluContract.estimateGas.eraseMsg(msgID);

        console.log('Gas Estimate: ', estimateGas);

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["uint256"],
            [ msgID ]
        ); // array to encode

        const transaction = {
            "from": walletAddress,
            "data": params,
            "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractKUTHULUPub.methods.eraseMsg(msgID).send(transaction)
            .then(result => {
                endLoading();
                // window.location.reload();
            })
            .catch(err => {
                endLoading();
                catchError('followUser', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}


async function tip(postID){
    if (validWalletConnection) {

        startLoading('Tipping poster...');

        let tips = prompt("How much do you want to tip?", "1");
        if (tips != null) {
            tips = parseFloat(tips);
        }

        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner(walletAddress)
        const kuthuluContract = new ethers.Contract(contractAddressTips, abiTips, signer)
        const estimateGas = await kuthuluContract.estimateGas.addTipFromPost(postID, {value: ethers.utils.parseEther(tips.toString())})
            .then(async (result) => {
                console.log('Gas Estimate: ', result);
                return result;
            })
            .catch(async (err) => {
                let errResp = await catchError('estimateGas', err);
            });

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["uint256"],
            [ postID ]
        ); // array to encode

        const transaction = {
            "value": ethers.utils.parseEther(tips.toString()),
            "from": walletAddress,
            "to": contractAddressTips,
            "data": params,
            "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractTipsPub.methods.addTipFromPost(postID).send(transaction)
            .then(result => {
                endLoading();
                // window.location.reload();
            })
            .catch(err => {
                endLoading();
                catchError('tip', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}


async function toggleWhitelist(groupID){
    if (validWalletConnection) {

        startLoading('Toggling Whitelist...');

        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner(walletAddress)
        const kuthuluContract = new ethers.Contract(contractAddressBlocking, abiBlocking, signer)
        const estimateGas = await kuthuluContract.estimateGas.toggleWhiteList(groupID)
            .then(async (result) => {
                console.log('Gas Estimate: ', result);
                return result;
            })
            .catch(async (err) => {
                let errResp = await catchError('estimateGas', err);
            });

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["uint256"],
            [ groupID ]
        ); // array to encode

        const transaction = {
            "from": walletAddress,
            "data": params,
            "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractBlockingPub.methods.toggleWhiteList(groupID).send(transaction)
            .then(result => {
                endLoading()
                // window.location.reload();
            })
            .catch(err => {
                endLoading();
                catchError('toggleWhiteList', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}

async function claimTips(groupID){
    if (validWalletConnection) {

        startLoading('Claiming Tips...');

        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner(walletAddress)
        const kuthuluContract = new ethers.Contract(contractAddressTips, abiTips, signer)
        const estimateGas = await kuthuluContract.estimateGas.claimTips(groupID);

        console.log('Gas Estimate: ', estimateGas);

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;

        const transaction = {
            "from": walletAddress,
            "data": '',
            "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractTipsPub.methods.claimTips(groupID).send(transaction)
            .then(result => {

                endLoading();

                $('#tipsToClaim').html(0);
                $('#claimTipsWrapper').hide();

                return result;
            })
            .catch(err => {
                endLoading();
                catchError('claimTips', err);
            });

        $('#statusMsg').html('<span class="gameFont" id="errorText">Your tips have been sent to your wallet!</span>');

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}

async function claimTix(){
    if (validWalletConnection) {

        startLoading('Claiming Raffle Tickets...');

        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner(walletAddress)
        const kuthuluContract = new ethers.Contract(contractAddressRaffleTix, abiRaffleTickets, signer)
        const estimateGas = await kuthuluContract.estimateGas.claimTix();

        console.log('Gas Estimate: ', estimateGas);

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;

        const transaction = {
            "from": walletAddress,
            "data": '',
            "gas": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasLimit": web3.utils.toHex(Math.trunc(estimateGas * 1.10)),
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractRaffleTixPub.methods.claimTix().send(transaction)
            .then(result => {

                endLoading();

                $('#tixToClaim').html(0);
                $('#claimTixWrapper').hide();

                return result;
            })
            .catch(err => {
                endLoading();
                catchError('claimTix', err);
            });

        $('#statusMsg').html('<span class="gameFont" id="errorText">Your Raffle Tickets have been sent to your wallet!</span>');

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}

async function getPosts() {

    // if (parseInt(totalMessages) === 0){
    //     return;
    // }

    startLoading('Retrieving Posts...');

    let showMoreButton = false;

    let msgIDs = [];
    let addresses = [];
    let scrollTo = '';

    let qsMsgID = qs.get('msg');
    let qsHashtag = qs.get('hashtag');
    let qsAddress = qs.get('address');
    let qsGroup = qs.get('group');
    let qsGroupID = qs.get('groupID');
    let qsCommentsOf = qs.get('commentsOf');
    let qsRepostsOf = qs.get('repostsOf');
    let qsLikes = qs.get('likes');
    let qsTipped = qs.get('tips');
    let qsTagged = qs.get('tagged');
    let qsAdmins = qs.get('admins');
    let qsFollowing = qs.get('following');
    let qsFollowers = qs.get('followers');
    let qsOnlyFollowing = qs.get('onlyFollowing');

    if (qsHashtag && qsHashtag !== ''){
        msgIDs = await contractKUTHULU.methods.getMsgIDsByHashtag(qsHashtag, 0).call()
            .then(result => {
                console.log('Hashtag Message IDs:', result);
                $('#postBox').hide();
                return result;
            })
            .catch(err => {
                catchError('getMsgByIDsByHashtag', err);
            });
    } else if (qsAddress && qsAddress !== '' && qsFollowers && qsFollowers !== '') {
        addresses = await contractFollowers.methods.getFollowers(qsAddress, 0).call()
            .then(result => {
                console.log('Followers:', result);
                $('#postBox').hide();
                let newAddresses = [];
                for (let i = 0; i < result.length; i++) {
                    if (result[i].toLowerCase() !== qsAddress.toLowerCase()){
                        newAddresses.push(result[i]);
                    }
                }
                return newAddresses;
            })
            .catch(err => {
                catchError('getFollowers', err);
            });
    } else if (qsAddress && qsAddress !== '' && qsFollowing && qsFollowing !== '') {
        addresses = await contractFollowers.methods.getFollowing(qsAddress, 0).call()
            .then(result => {
                console.log('Following:', result);
                $('#postBox').hide();
                return result;
            })
            .catch(err => {
                catchError('getFollowing', err);
            });
    } else if (qsAddress && qsAddress !== '') {

        if (parseInt(qs.get('comments')) === 1) {
            msgIDs = await contractKUTHULU.methods.getMsgIDsByAddress(qsAddress, 0, true, false).call()
                .then(result => {
                    console.log('User Comments Message IDs:', result);
                    $('#postBox').hide();
                    return result;
                })
                .catch(err => {
                    catchError('getMsgIDsByAddress', err);
                });
        } else if (parseInt(qs.get('reposts')) === 1) {
                msgIDs = await contractKUTHULU.methods.getMsgIDsByAddress(qsAddress, 0, false, true).call()
                    .then(result => {
                        console.log('User Repost Message IDs:', result);
                        $('#postBox').hide();
                        return result;
                    })
                    .catch(err => {
                        catchError('getMsgIDsByAddress', err);
                    });
        } else if (parseInt(qs.get('tagged')) === 1) {
            msgIDs = await contractTagged.methods.getTaggedMsgIDs(qsAddress, 0).call()
                .then(result => {
                    console.log('User Repost Message IDs:', result);
                    $('#postBox').hide();
                    return result;
                })
                .catch(err => {
                    catchError('getMsgIDsByAddress', err);
                });
        } else {
            msgIDs = await contractKUTHULU.methods.getMsgIDsByAddress(qsAddress, 0, false, false).call()
                .then(result => {
                    console.log('Address Message IDs:', result);
                    $('#postBox').hide();
                    return result;
                })
                .catch(err => {
                    catchError('getMsgIDsByAddress', err);
                });
        }

        let profile = await makeProfile(qsAddress);

        $('#postBox').hide();
        $('#profileWrapper').append(profile);

        // Post buttons
        let postTypesButtons = '<br><a href="?address=' + qsAddress + '"><button name="postsBtn" class="btn btn-light typeButton">POSTS</button></a>';
        postTypesButtons += '<a href="?address=' + qsAddress + '&comments=1"><button name="commentsBtn" class="btn btn-light typeButton">COMMENTS</button></a>';
        postTypesButtons += '<a href="?address=' + qsAddress + '&reposts=1"><button name="repostsBtn" class="btn btn-light typeButton">REPOSTS</button></a>';
        postTypesButtons += '<a href="?address=' + qsAddress + '&tagged=1"><button name="taggedBtn" class="btn btn-light typeButton">TAGGED</button></a>';



        $('#profileWrapper').append(postTypesButtons);

    } else if ((qsGroup && qsGroup !== '') || (qsGroupID && qsGroupID !== '')) {

        if (qsGroup && qsGroup !== ''){
            qsGroupID = await contractGroups.methods.getGroupID(qsGroup).call()
                .then(result => {
                    console.log('Group ID:', result);
                    return result;
                })
                .catch(err => {
                    catchError('getMsgIDs-groups', err);
                });
        }

        msgIDs = await contractGroupPosts.methods.getMsgIDsByGroupID(qsGroupID, 0).call()
            .then(result => {
                console.log('Group Message IDs:', result);
                return result;
            })
            .catch(err => {
                catchError('getMsgIDs-groups', err);
            });

        // Get the Group Address
        let groupAddress = await contractGroups.methods.getGroupAddressFromID(qsGroupID).call()
            .then(result => {
                console.log('Group Address:', result);
                return result;
            })
            .catch(err => {
                catchError('getMsgIDs-groups', err);
            });

        // Get the Group Address
        let groupName = await contractGroups.methods.getGroupNameFromID(qsGroupID).call()
            .then(result => {
                console.log('Group Name:', result);
                return result;
            })
            .catch(err => {
                catchError('getMsgIDs-groups', err);
            });

        // Now get the profile data
        let groupProfileData = await contractProfiles.methods.getUserDetails(groupAddress).call()
            .then(result => {
                console.log('Group Profile Data:', result);
                return formatUserProfileToJSON(result);
            })
            .catch(err => {
                catchError('getMsgIDs-groups', err);
            });

        let groupColors = await contractGroups.methods.getGroupColorsFromID(qsGroupID).call()
            .then(result => {
                console.log('Group Colors:', result);
                return result;
            })
            .catch(err => {
                catchError('getMsgIDs-groups', err);
            });

        let groupDetails = await contractGroups.methods.getGroupDetailsFromID(qsGroupID).call()
            .then(result => {
                console.log('Group Details:', result);
                return result;
            })
            .catch(err => {
                catchError('getMsgIDs-groups', err);
            });

        let groupURI = await contractGroups.methods.getGroupURIFromID(qsGroupID).call()
            .then(result => {
                console.log('Group URI:', result);
                return result;
            })
            .catch(err => {
                catchError('getMsgIDs-groups', err);
            });


        // Hide the regular KUTHULU header stuff
        $('#mintGroupLink').hide();
        $('#feedType').hide();

        // Update the postbox to auto-post into this group
        $('#postBoxGroups').html(groupName);
        $('#inGroups').html(groupName);
        $('.placeholderGroups').hide();$('.inputGroups').show();
        $('#groupsWrapper').slideToggle();

        let header = '<a href="index.html">';
            header += '<span style="font-size: 100px; text-shadow: none; background-image: linear-gradient(0deg, #' + groupColors[0] + ', #' + groupColors[1] + ', #' + groupColors[2] + '); -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">';
            header += groupName;
            header += '</span>';
            header += '</a>';

        $('#mainHeadingText').html(header);

        if (groupDetails) {
            $('#groupDetails').html(groupDetails).show();
        }

        if (groupURI) {
            $('#groupURI').html('<a href="' + groupURI + '" target="_blank">' + groupURI + '</a>').show();
        }

        let nftProfile = await getProfileImageFromNFT(groupProfileData.avatarMetadata, groupProfileData.avatarContract, groupAddress, groupProfileData.qsGroupID);

        // Set custom background colors
        $('#home').css('background-image', 'linear-gradient(0deg, #' + groupColors[0] + ', #' + groupColors[1] + ', #' + groupColors[2] + ')');


    } else if (qsCommentsOf && qsCommentsOf !== '') {
        msgIDs = await contractKUTHULU.methods.getSubIDsByPost(qsCommentsOf, 0, 0).call()
            .then(result => {
                console.log('Post (comments of) Message IDs:', result);
                $('#postBox').hide();
                return result;
            })
            .catch(err => {
                catchError('getSubIDsByPost-comments', err);
            });
    } else if (qsTagged && qsTagged !== '') {
        msgIDs = await contractKUTHULU.methods.getMsgIDsByTag(qsTagged, 0).call()
            .then(result => {
                console.log('Account Tagged in Message IDs:', result);
                $('#postBox').hide();
                return result;
            })
            .catch(err => {
                catchError('getMsgIDsByTag', err);
            });
    } else if (qsRepostsOf && qsRepostsOf !== '') {
        msgIDs = await contractKUTHULU.methods.getSubIDsByPost(qsRepostsOf, 0, true).call()
            .then(result => {
                console.log('Repost Message IDs:', result);
                $('#postBox').hide();
                return result;
            })
            .catch(err => {
                catchError('getSubIDsByPost-reposts', err);
            });
    } else if (qsMsgID && qsMsgID !== '') {
        let posts = await contractKUTHULU.methods.getMsgsByIDs([qsMsgID], false, walletAddress).call()
            .then(result => {
                result = formatMsgRespToJSON(result).Messages;
                $('#postBox').hide();
                console.log('Message Data QS:', result[0]);
                return result[0];
            })
            .catch(err => {
                catchError('getMsgsByIDs', err);
            });

        // Check if this is a comment and if it is, show the original message, and then scroll to the comment
        if (posts.isCommentOf > 0){
            msgIDs = [posts.isCommentOf];
            scrollTo = 'comment-' + qsMsgID;
        } else {
            console.log('not a comment')
            msgIDs = [qsMsgID];
        }
    } else if (qsLikes && qsLikes !== '') {
        addresses = await contractLikes.methods.getLikesFromMsgID(qsLikes, 0).call()
            .then(result => {
                console.log('Liked By:', result);
                $('#postBox').hide();
                return result;
            })
            .catch(err => {
                catchError('getLikesFromMsgID', err);
            });
    } else if (qsTipped && qsTipped !== '') {
        addresses = await contractTips.methods.getTippersFromMsgID(qsTipped, 0).call()
            .then(result => {
                console.log('Tipped Message:', result);
                $('#postBox').hide();
                return result;
            })
            .catch(err => {
                catchError('getTippersFromMsgID', err);
            });
    } else if (qsAdmins && qsAdmins !== '') {
        addresses = await contractGroups.methods.getMembersOfGroupByID(qsAdmins).call()
            .then(result => {
                console.log('Group Admins:', result);
                $('#postBox').hide();
                return result.toString().split(',');
            })
            .catch(err => {
                catchError('getTippersFromMsgID', err);
            });
    } else {
        // Get all newest message IDs
        let thisCounter = 0;
        if (allMessagesPos === 0) {
            allMessagesPos = totalMessages;
        }
        for (let i = allMessagesPos; i > 0; i--) {
            thisCounter++;
            msgIDs.push(parseInt(i));
            if (thisCounter === maxMessagesToGet){
                break;
            }
        }
        allMessagesPos = totalMessages - maxMessagesToGet;

        if (msgIDs[msgIDs.length - 1] !== 1){
            showMoreButton = true;
        }
    }

    // console.log('IDs to get: ', msgIDs);

    if (msgIDs.length > 0) {
        let pResp = await processMessages(msgIDs, false, showMoreButton, qsOnlyFollowing);
        $('.comments').show();

        // Scroll to the comment

    }

    if (addresses.length > 0) {
        let pResp = await processAddresses(addresses);
    }

    endLoading();
}

async function processMessages(msgIDs, isComment, showMoreButton, getOnlyFollowing){

    console.log("IDs to get: ", msgIDs);

    let posts = await contractKUTHULU.methods.getMsgsByIDs(msgIDs, getOnlyFollowing, walletAddress).call()
        .then(result => {
            result = formatMsgRespToJSON(result);
            console.log('Message Data:', result);
            return result;
        })
        .catch(err => {
            catchError('getMsgsByIDs', err);
        });

    for (let i = 0; i < posts.Messages.length; i++) {
        // Only show posts (hide comments)
        if (posts.Messages[i].isCommentOf === 0 || qs.get('comments') || qs.get('tagged') || isComment) {

            let post = '';

            if (isComment) {
                post += '<div id="comments-' + posts.Messages[i].isCommentOf + '" class="comments" style="display:none;">';
                post += '<a name="comment-' + posts.Messages[i].msgID + '"></a>';
                post += '<div class="spacer">';
            }

            post += await makePost(posts.Messages[i], false, isComment);

            if (isComment) {
                post += '</div></div>';
            }

            $('#postsWrapper').append(post);

            // Get comments for this post
            let commentIDs = await contractKUTHULU.methods.getSubIDsByPost(posts.Messages[i].msgID, 0, posts.Messages[i].isRepostOf).call()
                .then(result => {
                    return result;
                })
                .catch(err => {
                    catchError('getSubIDsByPost', err);
                });

            console.log("Comments for MsgID " + posts.Messages[i].msgID + ": ", commentIDs);

            // Format the posts
            if (commentIDs.length > 0) {

                let comments = await contractKUTHULU.methods.getMsgsByIDs(commentIDs, false, walletAddress).call()
                    .then(result => {
                        result = formatMsgRespToJSON(result);
                        console.log('Comment Data:' + result);
                        return result;
                    })
                    .catch(err => {
                        catchError('getMsgsByIDs comments', err);
                    });

                for (let c = comments.Messages.length -1; c >= 0; c--) {
                    // Get nested comments
                    if (!isNaN(comments.Messages[c].msgID)) {
                        let commentSubs = await processMessages([comments.Messages[c].msgID], true, false);
                    }
                }

            }
        }
    }

    if (showMoreButton) {
        $('#postsWrapper').append('<div id="moreButton"><input type="button" class="btn btn-sm btn-style-2 gameFont gameButtonSmall" style="margin-top:15px;" onclick="$(\'#moreButton\').remove();getPosts();" value="Load More Messages" /></div>');
    }
}

async function processAddresses(addresses){

    for (let i = 0; i < addresses.length; i++) {

        let user = await makeUserListing(addresses[i]);

        $('#postsWrapper').append(user);

    }
}

async function makeUserListing(posterAddress){
    let post = '<div class="messageWrapper" style="color:#fff;">';
    let showTips = false;
    let tips = 0;

    if (posterAddress.length === 2){
        showTips = true;
        tips = posterAddress[1];
        posterAddress = posterAddress[0];
    }

    // Get User Profile for poster
    let userProfile = await getProfileData(posterAddress);

    // Avatar
    post += '<div class="avatar ' + posterAddress.toLowerCase() + '" >';
    post += '<img src="' + userProfile.profileImage + '" class="avatarImg';
    if (userProfile.groupID > 0){
        post += ' groupAvatar';
    }
    post += '" onerror="this.onerror=null;this.src=\'images/user.png\'" alt="' + posterAddress + '" />';
    post += '</div>';

    // Username
    post += '<div class="nameWrapper"><a href="?address=' + posterAddress + '" class="name">';

    if (userProfile.groupID > 0){
        post += '%' + userProfile.handle.toUpperCase();
    } else if (userProfile.handle.length > 0) {
        post += userProfile.handle;
    } else {
        post += posterAddress;
    }
    post += '</a>';

    if (showTips){
        // Tips
        post += '<div class="profileTips">';
        post += '<img src="images/tips.png" class="tipsImg" alt="' + tips / ethDec + '" />';
        post += '<span class="tipsAmount">' + tips / ethDec + '</span>';
        post += '</div>';
    }

    post += '</div>';

    post += '<div class="clearfix"></div>';

    post += '</div>';

    return post;
}


async function makeProfile(userAddress){
    let post = '<div class="messageWrapper" style="color:#fff;">';

    // Get User Profile for poster
    let userProfile = await getProfileData(userAddress);

    // If this is a group, check if they're the owner or a member
    let isGroupOwner = false;
    let ownerAddress = '';
    if (userProfile.groupID > 0) {
        [isGroupOwner, ownerAddress] = await contractGroups.methods.getOwnerOfGroupByID(userProfile.groupID).call()
            .then(result => {
                console.log('Is Group Owner: ', result);
                return [walletAddress.toLowerCase() === result.toLowerCase(), result];
            })
            .catch(err => {
                catchError('getOwnerOfGroupByID', err);
            });


    }

    // Make claim tips button
    if (isGroupOwner) {
        let groupTipsToClaim = await contractTips.methods.checkTips(userAddress).call()
            .then(result => {
                console.log('Tips to Claim: ' + result);
                return result;
            })
            .catch(err => {
                catchError('checkTips', err);
            });

        if (groupTipsToClaim > 0) {
            let mmButtons = '<div id="claimTipsWrapper"><span class="walletCon gameFont">Tips to Claim : <span style="color:#ad81fc;" id="tipsToClaim">' + web3.utils.fromWei(groupTipsToClaim) + '</span></span><br>';
            mmButtons += '<input type="button" class="btn btn-sm btn-style-2 gameFont gameButtonSmall" style="margin-top:15px;" onClick="claimTips(\'' + userProfile.groupID + '\')" value="Claim Group Tips!"/></div>';

            $('#mmConn').html(mmButtons);
        }
    }

    post += '<div class="dropdown postMenu">';
    post += '<a class="dropdown-toggle" href="#lsRet" role="button" data-toggle="dropdown" aria-expanded="false">⠇</a>';
    post += '<div class="dropdown-menu">';

    let isAllowed = true;

    // Check if group multi-sig locked
    // 0 = Is Locked (True / False)
    // 1 = Has Address set for locking (True / False)
    let isMultiSigLocked = await contractGroupTokens.methods.isMultiSigLocked(userProfile.groupID).call()
        .then(result => {
            console.log("Is Mult-Sig Locked: ", result);
            return result;
        })
        .catch(err => {
            catchError('isAllowed', err);
        });

    if (validWalletConnection) {
        if (walletAddress.toLowerCase() !== userAddress.toLowerCase()) {

            // Check if they're the multi-sig lock address
            let multiSigAddress = await contractGroupTokens.methods.getMultiSigAddress(userProfile.groupID).call()
                .then(result => {
                    console.log('Multi-Sig Address: ' + result);
                    return result;
                })
                .catch(err => {
                    catchError('checkTips', err);
                });

            if (isGroupOwner){
                post += '<a href="#" onclick="resetEdits();$(\'#editProfileWrapper\').show();" class="dropdown-item"><img src="images/profile.png" class="menuImage" /> Edit Profile</a>';
                post += '<a href="#" onclick="resetEdits();$(\'#editAvatarNFT\').show();" class="dropdown-item"><img src="images/nftavatar.png" class="menuImage" /> Set NFT As Pic</a>';
                post += '<a href="#" onclick="resetEdits();$(\'#groupAddMembers\').show();" class="dropdown-item"><img src="images/addMember.png" class="menuImage" /> Add Member</a>';
                post += '<a href="#" onclick="resetEdits();$(\'#groupRemoveMembers\').show();" class="dropdown-item"><img src="images/removeMember.png" class="menuImage" /> Remove Member</a>';
                if (!isMultiSigLocked[0]) {
                    post += '<a href="#" onclick="resetEdits();$(\'#lockGroup\').show();" class="dropdown-item"><img src="images/nftLocked.png" class="menuImage" /> Lock w/ MultiSig</a>';
                } else {
                    post += '<a href="#" class="dropdown-item"><img src="images/profile.png" class="menuImage" /> Multi-Sig Locked</a>';
                }

                post += '<div class="dropdown-divider"></div>';
            }

            // Check if user already following
            let isFollowing = await contractFollowers.methods.isUserFollowing(walletAddress, userAddress).call()
                .then(result => {
                    return result;
                })
                .catch(err => {
                    catchError('isUserFollowing', err);
                });


            let accountType = "User";
            if (userProfile.groupID > 0){
                accountType = "Group"
            }

            if (isFollowing) {
                post += '<a href="#lsRet" onclick="unfollowUser(\'' + userAddress + '\', \'' + accountType + '\')" class="dropdown-item"><img src="images/unfollow.png" class="menuImage" /> Unfollow ' + accountType + '</a>';
            } else {
                post += '<a href="#lsRet" onclick="followUser(\'' + userAddress + '\', \'' + accountType + '\')" class="dropdown-item"><img src="images/follow.png" class="menuImage" /> Follow ' + accountType + '</a>';
            }

            // Check if they are blocking this user (requester / target)
            // It's reversed because we want to check if the user being viewed is blocked from the viewer
            let isAllowed = await contractBlocking.methods.isAllowed(userAddress, walletAddress).call()
                .then(result => {
                    console.log(result);
                    return result;
                })
                .catch(err => {
                    catchError('isAllowed', err);
                });

            if (isAllowed) {
                post += '<a href="#lsRet" onclick="toggleBlock(\'' + userAddress + '\', ' + userProfile.groupID + ')" class="dropdown-item"><img src="images/block.png" class="menuImage" /> Block User</a>';
            } else {
                post += '<a href="#lsRet" onclick="toggleBlock(\'' + userAddress + '\', ' + userProfile.groupID + ')" class="dropdown-item"><img src="images/unblock.png" class="menuImage" /> Unblock User</a>';
            }

            if (walletAddress.toLowerCase() === multiSigAddress.toLowerCase()) {
                if (!isMultiSigLocked[0]) {
                    post += '<a href="#" onclick="resetEdits();lockGroup(\'' + userProfile.groupID + '\', \'Activate\');" class="dropdown-item"><img src="images/nftLockActivate.png" class="menuImage" /> Activate Multi-Sig</a>';
                } else {
                    post += '<a href="#" onclick="resetEdits();lockGroup(\'' + userProfile.groupID + '\', \'Remove\');" class="dropdown-item"><img src="images/nftUnlocked.png" class="menuImage" /> Remove Multi-Sig</a>';
                }
            }
        } else {
            // Check if they're using a whitelist
            let usingWhitelist = await contractBlocking.methods.usrBlockingMap(walletAddress).call()
                .then(result => {
                    console.log('Using Whitelist:', result[0]);
                    return result[0];
                })
                .catch(err => {
                    catchError('usrBlockingMap-whitelistcheck', err);
                });

            post += '<a href="#" onclick="resetEdits();$(\'#editProfileWrapper\').show();" class="dropdown-item"><img src="images/profile.png" class="menuImage" /> Edit Profile</a>';
            post += '<a href="#" onclick="resetEdits();$(\'#editAvatarNFT\').show();" class="dropdown-item"><img src="images/nftavatar.png" class="menuImage" /> Set NFT As Pic</a>';
            if (usingWhitelist){
                post += '<a href="#" onclick="toggleWhitelist(' + userProfile.groupID + ');" class="dropdown-item"><img src="images/blacklist.png" class="menuImage" /> Use Blacklist</a>';
            } else {
                post += '<a href="#" onclick="toggleWhitelist(' + userProfile.groupID + ');" class="dropdown-item"><img src="images/whitelist.png" class="menuImage" /> Use Whitelist</a>';
            }

        }
    }

    post += '</div>';
    post += '</div>';

    // Avatar
    post += '<div class="profileAvatarWrapper" style="position: relative;width:40px;">'
    if (isMultiSigLocked[0]){
        post += '<img src="images/nftLockActivate.png" alt="NFT Multi-Sig Locked" style="position: absolute;right:-6px;top:32px;z-index: 2000;height:20px;" />';
    }
    post += '<div class="profileAvatar ' + userAddress.toLowerCase() + '">';
    post += '<img src="' + userProfile.profileImage + '" class="profileAvatarImg" onerror="this.onerror=null;this.src=\'images/user.png\'" alt="' + userAddress + '" />';
    post += '</div>';
    post += '</div>';

    // Username
    post += '<div class="profileName">';

    if (!isAllowed){
        post += '<img src="images/block.png" class="menuImage" /> '
    }

    if (userProfile.groupID > 0){
        post += '%' + userProfile.handle;
    } else if (userProfile.handle.length > 0) {
        post += userProfile.handle;
    } else {
        let shortAddr = makeShortAddress(userAddress);
        post += shortAddr;
    }

    if (userProfile.verification === 1){
        post += '<img src="images/verified1.png" style="height:20px;position: relative;top:-2px;margin-left:2px;" />';
    }

    if (walletAddress.toLowerCase() === userAddress.toLowerCase()){
        post += '<a href="#lsRet" onclick="resetEdits();$(\'#editName\').show();"><img src="images/pencil.png" style="margin-left:10px;height:16px;position: relative;top:-3px;" /></a>'
    }

    if (userProfile.groupID > 0) {
        // Get Group Members
        let groupMembers = await contractGroups.methods.getMembersOfGroupByID(userProfile.groupID).call()
            .then(result => {
                console.log('Group Members: ', result);
                return result.toString().split(',');
            })
            .catch(err => {
                catchError('groupDetails', err);
            });
        post += '<span class="profileDetail muted" style="margin-left:10px;">( <a href="?admins=' + userProfile.groupID + '">' + groupMembers.length + '</a> Admins )</span>';
    }

    post += '<div class="muted">' + userAddress + '</div>';
    post += '</div>';


    // Follower and Tips Counts
    post += '<div class="followerWrapper">';
    post += '<div class="profileDetail float-left" style="margin-right:20px;"><a href="?address=' + userAddress + '">' + userProfile.postCount + '</a> <span class="muted">Posts</span></div>';
    post += '<div class="profileDetail float-left" style="margin-right:20px;"><a href="?following=1&address=' + userAddress + '">' + userProfile.following + '</a> <span class="muted">Following</span></div>';
    post += '<div class="profileDetail float-left" style="margin-right:20px;"><a href="?followers=1&address=' + userAddress + '">' + userProfile.followers + '</a> <span class="muted">Followers</span></div>';

    let tipsReceived = 0;
    if (userProfile.tipsReceived > 0){
        tipsReceived = userProfile.tipsReceived / ethDec;
        tipsReceived = Math.round((tipsReceived + Number.EPSILON) * 100) / 100
    }
    let tipsSent = 0;
    if (userProfile.tipsSent > 0){
        tipsSent = userProfile.tipsSent / ethDec;
        tipsSent = Math.round((tipsSent + Number.EPSILON) * 100) / 100
    }

    post += '<div class="profileDetail float-left" style="margin-right:20px;"><img src="images/tips.png" style="height: 14px;margin-right:5px;position: relative;top:-1px;" /><a href="?tipsSent=1&address=' + userAddress + '">' + tipsSent + '</a> <span class="muted" style="margin-left:3px;">Tips ↑</span></div>';
    post += '<div class="profileDetail float-left" style="margin-right:20px;"><img src="images/tips.png" style="height: 14px;margin-right:5px;position: relative;top:-1px;" /><a href="?tipsReceived=1&address=' + userAddress + '">' + tipsReceived + '</a> <span class="muted" style="margin-left:3px;">Tips ↓</span></div>';

    post += '<div class="clearfix"></div>';
    post += '</div>';


    // Show the Bio
    let bio = '<span class="muted">No bio given</span>';
    if (userProfile.bio.toString().length > 0){
        bio = userProfile.bio;
    }
    post += '<div class="profileBio" style="margin-bottom:10px;margin-top:20px;">' + bio + '</div>';


    // Show Location and URI and Join Date
    let location = 'unknown';
    if (userProfile.location.toString().length > 0){
        location = userProfile.location;
    }
    let uri = '<img src="images/link.png" style="height:16px;margin-right:5px;margin-left:20px;" />none';
    if (userProfile.uri.toString().length > 0){
        uri = '<a href="' + userProfile.uri + '"><img src="images/link.png" style="height:16px;margin-right:5px;margin-left:20px;" />' + userProfile.uri + '</a>';
    }

    // Convert the epoch time
    let joinDate = new Date(userProfile.blockTimestamp * 1000);


    post += '<div class="muted">';
    post += '<div class="profileDetail float-left" ><img src="images/location.png" style="height:16px;margin-right:5px;" />' + location + '</div>';
    post += '<div class="profileDetail float-left">' + uri + '</div>';
    post += '<div class="profileDetail float-left" style="margin-right:20px;"><img src="images/date.png" style="height: 16px;margin-right:5px;margin-left:20px;position: relative;top:-1px;" />' + joinDate.toLocaleString() + '</div>';
    post += '<div class="clearfix"></div>';

    // Show the group owner
    if (userProfile.groupID > 0){
        // Get the groups they are the owner of
        let groupOwnerAddress = await contractGroups.methods.getOwnerOfGroupByAddress(userAddress).call()
            .then(result => {
                console.log('Group Owner: ', result);
                if (result.groupAddress !== '0x0000000000000000000000000000000000000000'){
                    return result;
                } else {
                    return '';
                }
            })
            .catch(err => {
                catchError('groupDetails', err);
            });

        post += '<div class="profileDetail" style="margin-top:10px;"><i class="fa fa-crown" style="margin-right:5px;color:gold;"></i> Group Owner: &nbsp;';
        post += '<a href="?address=' + groupOwnerAddress + '">' + groupOwnerAddress + "</a>";
        post += '</div>';
    }

    let {allGroupIDs, allGroupDetails} = await getGroupsByOwner(userAddress);

    let groupsNamesOwned = '';
    for (let g=0;g<allGroupDetails.length;g++) {
        if (g > 0) {
            groupsNamesOwned += ', ';
        }
        groupsNamesOwned += '<a href="?address=' + allGroupDetails[g].groupAddress + '">%' + allGroupDetails[g].groupName.toUpperCase() + '</a>';
    }

    if (groupsNamesOwned !== ''){
        post += '<div class="profileDetail" style="margin-top:10px;"><i class="fa fa-crown" style="margin-right:5px;color:gold;"></i> Owner of Groups: &nbsp;';
        post += groupsNamesOwned;
        post += '</div>';
    }

    post += '</div>';

    post += '</div>';


    if (walletAddress.toLowerCase() === userAddress.toLowerCase() || isGroupOwner){
        post += '<div id="editProfileWrapper" style="display:none;margin-top:20px;">';
        post += '<input type="hidden" id="groupID" name="groupID" value="' + userProfile.groupID + '" />';
        post += '<div class="eP">Location: <input type="text" name="location" id="location" /></div>';
        post += '<div class="eP">Avatar URL: <input type="text" name="avatar" id="avatar" /></div>';
        post += '<div class="eP">URI: <input type="text" name="profileuri" id="profileuri" /></div>';
        post += '<div class="eP">Bio: <textarea name="bio" id="bio" style="width:400px;height:60px;"></textarea></div>';
        post += '<input id="updateProfile" type="button" class="walletButtonBig gameFont gameButtonBig" onclick="updateProfile()" value="Update Profile" />';
        post += '</div>';

        post += '<div id="editAvatarNFT" style="display:none;margin-top:20px;">';
        post += '<h1 class="gameFont text-white">NFT must be on Polygon</h1>';
        post += '<input type="hidden" id="groupID" name="groupID" value="' + userProfile.groupID + '" />';
        post += '<div class="eP">NFT Avatar Contract: <input type="text" name="tokenContract" id="tokenContract" /></div>';
        post += '<div class="eP">NFT Avatar Token ID: <input type="text" name="tokenID" id="tokenID" /></div>';
        post += '<input type="button" class="walletButtonBig gameFont gameButtonBig" onclick="setNFTAvatar(' + userProfile.groupID + ')" value="Set NFT As Avatar" />';
        post += '</div>';

        post += '<div id="groupAddMembers" style="display:none;margin-top:20px;">';
        post += '<div class="eP">Wallet Address: <input type="text" name="groupAddAddress" id="groupAddAddress" /></div>';
        post += '<input type="button" class="walletButtonBig gameFont gameButtonBig" onclick=" groupMembership(\'' + userProfile.groupID + '\', \'Add\')" value="Add Member To Group" />';
        post += '</div>';

        post += '<div id="groupRemoveMembers" style="display:none;margin-top:20px;">';
        post += '<div class="eP">Wallet Address: <input type="text" name="groupRemoveAddress" id="groupRemoveAddress" /></div>';
        post += '<input type="button" class="walletButtonBig gameFont gameButtonBig" onclick="groupMembership(\'' + userProfile.groupID + '\', \'Remove\')" value="Remove Member From Group" />';
        post += '</div>';

        post += '<div id="lockGroup" style="display:none;margin-top:20px;">';
        post += '<div class="eP">Multi-Sig Wallet Address: <input type="text" name="lockAddAddress" id="lockAddAddress" /></div>';
        post += '<input type="button" class="walletButtonBig gameFont gameButtonBig" onclick="lockGroup(\'' + userProfile.groupID + '\', \'Add\')" value="Set Multi-Sig Address" />';
        post += '</div>';

        post += '<div id="editName" style="display:none;margin-top:20px;">';
        post += '<div class="eP">Handle: <input type="text" name="handle" id="handle" /></div>';
        post += '<div>It costs ' + costToUpdateHandle / ethDec + ' DOOM to update your handle (to prevent name squatting)</div>';

        if (parseInt(userDOOMBalance) >= parseInt(costToUpdateHandle)) {
            post += '<input id="updateHandle" type="button" class="walletButtonBig gameFont gameButtonBig" onclick="updateHandle()" value="Update Handle" />';
        } else {
            post += '<input id="buyIt" onclick="mintDOOM(100);" type="button" class="walletButtonBig gameFont gameButtonBig" value="Buy 100 DOOM for 1 MATIC" />';
        }
        post += '</div>';
    }

    if (userProfile.groupID > 0){
        post += '<a href="index.html?group=' + userProfile.handle + '"><input id="gotoSpace" type="button" class="walletButtonBig gameFont gameButtonBig" value="Go To %' + userProfile.handle + ' Space" /></a>';
    }

    return post;
}

function resetEdits(){
    $('#editProfileWrapper').hide();
    $('#editAvatarNFT').hide();
    $('#groupAddMembers').hide();
    $('#groupRemoveMembers').hide();
    $('#lockGroup').hide();
    $('#editName').hide();
}

async function groupMembership(groupID, method){

    if (groupID) {
        let _wallet = $('#group' + method + 'Address').val();
        if (validateWalletAddress(_wallet)) {

            startLoading('Updating Group Members...')

            // Get current gas prices
            const currentGasPrices = await getCurrentGasPrices();

            const ethereum = window.ethereum;
            const ethAccounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            const provider = new ethers.providers.Web3Provider(ethereum)
            const ethWalletAddress = ethAccounts[0]
            const signer = provider.getSigner(ethWalletAddress)
            const contractHandlesEther = new ethers.Contract(contractAddressGroups, abiGroups, signer)

            if (method === 'Add') {
                const estimatedGasLimit = await contractHandlesEther.estimateGas.addMemberToGroup(groupID, _wallet)
                    .then(async (result) => {
                        console.log('Gas Estimate: ', result.toString());
                        return result;
                    })
                    .catch(async (err) => {
                        console.log(err);
                        let errResp = await catchError('estimateGas', err);
                    });

                // Build data manually
                const abi = ethers.utils.defaultAbiCoder;
                let params = abi.encode(
                    ["uint256"],
                    [ groupID ],
                    ["address"],
                    [ _wallet ]
                ); // array to encode

                const transaction = {
                    "from": walletAddress,
                    "data": params,
                    "gas": estimatedGasLimit,
                    "gasLimit": estimatedGasLimit,
                    "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
                    "chainId": chainIDRaw
                };

                let resp = await contractGroupsPub.methods.addMemberToGroup(groupID, _wallet).send(transaction)
                    .then(async (result) => {
                        console.log('Update Results: ', result);

                        endLoading();

                        return result;
                    })
                    .catch(async (err) => {
                        let errResp = await catchError('addMemberToGroup', err);
                    });
            } else if (method === 'Remove'){
                const estimatedGasLimit = await contractHandlesEther.estimateGas.removeMemberFromGroup(groupID, _wallet)
                    .then(async (result) => {
                        console.log('Gas Estimate: ', result.toString());
                        return result;
                    })
                    .catch(async (err) => {
                        let errResp = await catchError('estimateGas', err);
                    });

                // Build data manually
                const abi = ethers.utils.defaultAbiCoder;
                let params = abi.encode(
                    ["uint256"],
                    [ groupID ],
                    ["address"],
                    [ _wallet ]
                ); // array to encode

                const transaction = {
                    "from": walletAddress,
                    "data": params,
                    "gas": estimatedGasLimit,
                    "gasLimit": estimatedGasLimit,
                    "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
                    "chainId": chainIDRaw
                };

                let resp = await contractGroupsPub.methods.removeMemberFromGroup(groupID, _wallet).send(transaction)
                    .then(async (result) => {
                        console.log('Update Results: ', result);

                        endLoading();

                        return result;
                    })
                    .catch(async (err) => {
                        let errResp = await catchError('removeMemberFromGroup', err);
                    });
            }
        }
    }
    
}


async function lockGroup(groupID, method){

    if (groupID) {
        let _wallet = $('#lock' + method + 'Address').val();

        if (validateWalletAddress(_wallet) || method === 'Activate' || method === 'Remove') {

            startLoading('Updating Token Multi-Sig Lock...')

            // Get current gas prices
            const currentGasPrices = await getCurrentGasPrices();

            const ethereum = window.ethereum;
            const ethAccounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            const provider = new ethers.providers.Web3Provider(ethereum)
            const ethWalletAddress = ethAccounts[0]
            const signer = provider.getSigner(ethWalletAddress)
            const contractMultiLock = new ethers.Contract(contractAddressGroupsTokens, abiGroupTokens, signer)

            if (method === 'Add') {

                const estimatedGasLimit = await contractMultiLock.estimateGas.addMultiSigLock(groupID, _wallet)
                    .then(async (result) => {
                        console.log('Gas Estimate: ', result.toString());
                        return result;
                    })
                    .catch(async (err) => {
                        console.log(err);
                        let errResp = await catchError('estimateGas', err);
                    });

                // Build data manually
                const abi = ethers.utils.defaultAbiCoder;
                let params = abi.encode(
                    ["uint256"],
                    [ groupID ],
                    ["address"],
                    [ _wallet ]
                ); // array to encode

                const transaction = {
                    "from": walletAddress,
                    "data": params,
                    "gas": estimatedGasLimit,
                    "gasLimit": estimatedGasLimit,
                    "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
                    "chainId": chainIDRaw
                };

                let resp = await contractGroupTokensPub.methods.addMultiSigLock(groupID, _wallet).send(transaction)
                    .then(async (result) => {
                        console.log('Add Multi-Sig Results: ', result);

                        endLoading();

                        $('#statusMsg').html('<span class="gameFont errorText" id="errorText">Now Activate the Multi-Sig with the other wallet.</span>');

                        return result;
                    })
                    .catch(async (err) => {
                        let errResp = await catchError('addMemberToGroup', err);
                    });
            } else if (method === 'Remove'){
                const estimatedGasLimit = await contractMultiLock.estimateGas.removeMultiSigLock(groupID)
                    .then(async (result) => {
                        console.log('Gas Estimate: ', result.toString());
                        return result;
                    })
                    .catch(async (err) => {
                        let errResp = await catchError('estimateGas', err);
                    });

                // Build data manually
                const abi = ethers.utils.defaultAbiCoder;
                let params = abi.encode(
                    ["uint256"],
                    [ groupID ]
                ); // array to encode

                const transaction = {
                    "from": walletAddress,
                    "data": params,
                    "gas": estimatedGasLimit,
                    "gasLimit": estimatedGasLimit,
                    "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
                    "chainId": chainIDRaw
                };

                let resp = await contractGroupTokensPub.methods.removeMultiSigLock(groupID).send(transaction)
                    .then(async (result) => {
                        console.log('Remove Multi-Sig: ', result);

                        $('#statusMsg').html('<span class="gameFont errorText" id="errorText">Multi-Sig Address Removed</span>');

                        endLoading();

                        return result;
                    })
                    .catch(async (err) => {
                        let errResp = await catchError('removeMemberFromGroup', err);
                    });
            } else if (method === 'Activate') {
                const estimatedGasLimit = await contractMultiLock.estimateGas.activateMultiSigLock(groupID)
                    .then(async (result) => {
                        console.log('Gas Estimate: ', result.toString());
                        return result;
                    })
                    .catch(async (err) => {
                        let errResp = await catchError('estimateGas', err);
                    });

                // Build data manually
                const abi = ethers.utils.defaultAbiCoder;
                let params = abi.encode(
                    ["uint256"],
                    [groupID]
                ); // array to encode

                const transaction = {
                    "from": walletAddress,
                    "data": params,
                    "gas": estimatedGasLimit,
                    "gasLimit": estimatedGasLimit,
                    "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
                    "chainId": chainIDRaw
                };

                let resp = await contractGroupTokensPub.methods.activateMultiSigLock(groupID).send(transaction)
                    .then(async (result) => {
                        console.log('Activate Multi-Sig Results: ', result);

                        $('#statusMsg').html('<span class="gameFont errorText" id="errorText">Multi-Sig Activated</span>');

                        endLoading();

                        return result;
                    })
                    .catch(async (err) => {
                        let errResp = await catchError('removeMemberFromGroup', err);
                    });
            }
        }
    }

}


async function getGroupsByOwner(userAddress){

    console.log('Getting group ownership for: ', userAddress);

    let allGroupDetails = [];
    let allGroupIDs = [];

    // Get the groups they are the owner of
    let groupsOwned = await contractGroupTokens.methods.balanceOf(userAddress).call()
        .then(result => {
            console.log('Number of Groups Owned: ', result);
            return result;
        })
        .catch(err => {
            catchError('balanceOf', err);
        });
    if (groupsOwned > 0){
        for (let g=0;g<groupsOwned;g++) {
            let groupID = await contractGroupTokens.methods.tokenOfOwnerByIndex(userAddress, g).call()
                .then(result => {
                    // console.log('Number of Groups Owned: ', result);
                    return result;
                })
                .catch(err => {
                    catchError('tokenOfOwnerByIndex', err);
                });

            let groupDetails = await contractGroups.methods.groupDetails(groupID).call()
                .then(result => {
                    // console.log('Group Details: ', result);
                    if (result.groupAddress !== '0x0000000000000000000000000000000000000000'){
                        return result;
                    } else {
                        return '';
                    }
                })
                .catch(err => {
                    catchError('groupDetails', err);
                });

            allGroupDetails.push(groupDetails);
            allGroupIDs.push(groupID);
        }
    }

    return {allGroupIDs, allGroupDetails};
}


async function getGroupsByMember(userAddress){

    console.log('Getting group memberships for: ', userAddress);

    let allGroupDetails = [];
    let allGroupIDs = [];

    // Get the groups they are a member of
    allGroupIDs = await contractGroups.methods.getGroupMemberships(userAddress).call()
        .then(result => {
            return result;
        })
        .catch(err => {
            catchError('getGroupMemberships', err);
        });

    if (allGroupIDs.length > 0){
        for (let g=0;g<allGroupIDs.length;g++) {

            let groupDetails = await contractGroups.methods.groupDetails(allGroupIDs[g]).call()
                .then(result => {
                    // console.log('Group Details: ', result);
                    if (result.groupAddress !== '0x0000000000000000000000000000000000000000'){
                        return result;
                    } else {
                        return '';
                    }
                })
                .catch(err => {
                    catchError('groupDetails', err);
                });

            allGroupDetails.push(groupDetails);
        }
    }

    return {allGroupIDs, allGroupDetails};
}

async function buildAsGroup(){

    if (validWalletConnection) {
        let groups = '';

        let {allGroupIDs, allGroupDetails} = await getGroupsByMember(walletAddress);

        console.log("Group memberships: ", allGroupIDs)

        // Get User Profile for poster
        let userProfile = await getProfileData(walletAddress);

        // Build SelectorAvatar
        $('#asGroupInitialAvatar').attr('src', userProfile.profileImage);
        if (userProfile.groupID > 0) {
            $('#asGroupInitialAvatar').css.addClass('groupAvatar');
        }


        // Username
        let thisUsername = ''
        if (userProfile.groupID > 0){
            thisUsername = '%' + userProfile.handle.toUpperCase();
        } else if (userProfile.handle.length > 0) {
            thisUsername = userProfile.handle + ' (' + makeShortAddress(walletAddress) + ')';
        } else {
            thisUsername += walletAddress;
        }
        $('#asGroupInitialUsername').html(thisUsername);

        if (allGroupIDs.length > 0){

            // Build SelectorAvatar
            groups += '<div onclick="changeAsGroup(\'' + userProfile.profileImage + '\', \'' + thisUsername + '\', \'\');" class="dropdown-item showCursor" style="margin-top:5px;margin-bottom:5px;">';

            groups += '<div class="avatar ' + thisUsername + '">';
            groups += '<img src="' + userProfile.profileImage + '" class="avatarImg menuImage';
            if (userProfile.groupID > 0) {
                groups += ' groupAvatar';
            }
            groups += '" style="border:0px;max-width:30px;max-height:30px;min-width:30px;" onerror="this.onerror=null;this.src=\'images/user.png\'" />';
            groups += '</div>';


            // Username
            groups += '<div class="nameWrapper">' + thisUsername + '</div>';

            groups += '</div>';

            for (let g = 0; g < allGroupIDs.length; g++) {

                console.log("Group Address: ", allGroupDetails[g].groupAddress);

                // Get User Profile for poster
                let groupProfile = await getProfileData(allGroupDetails[g].groupAddress);

                let groupName = '';
                if (groupProfile.groupID > 0){
                    groupName += '%' + groupProfile.handle.toUpperCase();
                } else if (groupProfile.handle.length > 0) {
                    groupName += groupProfile.handle;
                } else {
                    groupName += walletAddress;
                }

                // Build SelectorAvatar
                groups += '<div onclick="changeAsGroup(\'' + userProfile.profileImage + '\', \'' + groupName + '\', \'' + groupProfile.handle + '\');" class="dropdown-item showCursor" style="margin-top:5px;margin-bottom:5px;">';

                groups += '<div class="avatar ' + allGroupDetails[g].groupAddress.toLowerCase() + '">';
                groups += '<img src="' + userProfile.profileImage + '" class="avatarImg menuImage';
                if (groupProfile.groupID > 0) {
                    groups += ' groupAvatar';
                }
                groups += '" style="border:0px;max-width:30px;max-height:30px;min-width:30px;" onerror="this.onerror=null;this.src=\'images/user.png\'" />';
                groups += '</div>';


                // Username
                groups += '<div class="nameWrapper">' + groupName + '</div>';

                groups += '</div>';

            }

        } else {
            groups += '<div class="dropdown-item showCursor" style="margin-top:5px;margin-bottom:5px;">';

            groups += 'You are not a member of any groups';

            // groups += '<div class="avatar ' + allGroupDetails[g].groupAddress + '">';
            // groups += '<img src="' + profileImage + '" class="avatarImg menuImage';
            // if (groupProfile.groupID > 0) {
            //     groups += ' groupAvatar';
            // }
            // groups += '" style="border:0px;max-width:30px;max-height:30px;min-width:30px;" onerror="this.onerror=null;this.src=\'images/user.png\'" />';
            // groups += '</div>';
            //
            // // Username
            // groups += '<div class="nameWrapper">' + groupName + '</div>';

            groups += '</div>';
        }

        $('#asGroups').html(groups);
        
    }
}


function changeAsGroup(profileImage, groupName, groupID){
    $('#asGroupInitialAvatar').attr('src', profileImage);
    $('#asGroupInitialUsername').html(groupName);
    $('#asGroupID').val(groupID);
}


async function updateHandle(){
    if (validWalletConnection) {
        let handle = $('#handle').val();

        startLoading('Updating Handle...')

        console.log('handle: ', handle);


        // Check DOOM Allowance
        let allowance = await contractKUTHULUTokens.methods.allowance(walletAddress, contractAddressHandles).call()
            .then(result => {
                console.log('Allowance:' + result);
                return result;
            })
            .catch(err => {
                catchError('getDOOMBalance2', err);
            });


        if (parseInt(allowance) === 0 && userDOOMBalance > costToUpdateHandle){
            $('#postit').hide();
            $('#approveit').show();
        } else if (userDOOMBalance < costToPost){
            $('#postit').hide();
            $('#buyIt').show();
        }


        // check if it's taken first
        let checkHandle = await contractHandles.methods.checkIfAvailable(handle).call()
            .then(result => {
                console.log('Is name available: ', result);
                return result;
            })
            .catch(err => {
                catchError('usrHandleMap', err);
            });

        if (!checkHandle){
            $('#statusMsg').html('<span class="gameFont errorText bad">That handle is already in use!</span>');
            endLoading();
            return;
        }

        // Get current gas prices
        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const ethWalletAddress = ethAccounts[0]
        const signer = provider.getSigner(ethWalletAddress)
        const contractHandlesEther = new ethers.Contract(contractAddressHandles, abiHandles, signer)

        const estimatedGasLimit = await contractHandlesEther.estimateGas.updateUserHandle(handle)
            .then(async (result) => {
                console.log('Gas Estimate: ', result.toString());
                return result;
            })
            .catch(async (err) => {
                let errResp = await catchError('estimateGas', err);
            });

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["string"],
            [ handle ]
        ); // array to encode


        const transaction = {
            "from": walletAddress,
            "data": params,
            "gas": estimatedGasLimit,
            "gasLimit": estimatedGasLimit,
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractHandlesPub.methods.updateUserHandle(handle).send(transaction)
            .then(async (result) => {
                console.log('Update Results: ', result);

                $('#statusMsg').html('<span class="gameFont errorText">Handle Updated!</span>');

                endLoading();

                // window.location.reload();

                return result;
            })
            .catch(async (err) => {
                let errResp = await catchError('updateUserHandle', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}


async function setNFTAvatar(groupID){
    if (validWalletConnection) {

        let tokenContract = $('#tokenContract').val();
        let tokenID = $('#tokenID').val();

        // Get current gas prices
        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const ethWalletAddress = ethAccounts[0]
        const signer = provider.getSigner(ethWalletAddress)
        const contractProfilesEther = new ethers.Contract(contractAddressProfiles, abiProfiles, signer)

        const estimatedGasLimit = await contractProfilesEther.estimateGas.setNFTAsAvatar(tokenContract.toString(), tokenID.toString(), groupID.toString())
            .then(async (result) => {
                console.log('Gas Estimate: ', result.toString());
                return result;
            })
            .catch(async (err) => {
                let errResp = await catchError('estimateGas', err);
            });

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["address"],
            [ tokenContract ],
            ["uint256"],
            [ tokenID ],
            ["uint256"],
            [ groupID ]
        ); // array to encode


        const transaction = {
            "from": walletAddress,
            "data": params,
            "gas": estimatedGasLimit,
            "gasLimit": estimatedGasLimit,
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractProfilesPub.methods.setNFTAsAvatar(tokenContract.toString(), tokenID.toString(), groupID.toString()).send(transaction)
            .then(async (result) => {
                console.log('Update Results: ', result);

                $('#statusMsg').html('<span class="gameFont errorText">Avatar set as NFT!</span>');

                endLoading();

                // window.location.reload();

                return result;
            })
            .catch(async (err) => {
                let errResp = await catchError('setNFTAsAvatar', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}

async function updateProfile(){
    if (validWalletConnection) {

        let groupID = $('#groupID').val();
        let location = $('#location').val();
        let avatar = $('#avatar').val();
        let uri = $('#profileuri').val();
        let bio = $('#bio').val();

        startLoading('Updating Profile...')

        if (groupID === '' || groupID === null || groupID === undefined){
            groupID = 0;
        }

        // console.log('GroupID: ', groupID);
        // console.log('location: ', location);
        // console.log('avatar: ', avatar);
        // console.log('uri: ', uri);
        // console.log('bio: ', bio);

        // Get current gas prices
        const currentGasPrices = await getCurrentGasPrices();

        const ethereum = window.ethereum;
        const ethAccounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum)
        const ethWalletAddress = ethAccounts[0]
        const signer = provider.getSigner(ethWalletAddress)
        const contractProfilesEther = new ethers.Contract(contractAddressProfiles, abiProfiles, signer)

        const estimatedGasLimit = await contractProfilesEther.estimateGas.updateProfile(location, avatar, uri, bio, groupID)
            .then(async (result) => {
                console.log('Gas Estimate: ', result.toString());
                return result;
            })
            .catch(async (err) => {
                let errResp = await catchError('estimateGas', err);
            });

        // Build data manually
        const abi = ethers.utils.defaultAbiCoder;
        let params = abi.encode(
            ["string"],
            [ location ],
            ["string"],
            [ avatar ],
            ["string"], // encode as address array
            [ uri ],
            ["string"],
            [ bio ],
            ["uint256"],
            [ groupID ]
        ); // array to encode


        const transaction = {
            "from": walletAddress,
            "data": params,
            "gas": estimatedGasLimit,
            "gasLimit": estimatedGasLimit,
            "gasPrice": web3.utils.toHex(Math.trunc(currentGasPrices.medium * 1e9)),
            "chainId": chainIDRaw
        };

        console.log('TRANSACTION: ', transaction);

        let resp = await contractProfilesPub.methods.updateProfile(location, avatar, uri, bio, groupID).send(transaction)
            .then(async (result) => {
                console.log('Update Results: ', result);

                $('#statusMsg').html('<span class="gameFont errorText">Profile Updated!</span>');

                endLoading();

                window.location.reload();

                return result;
            })
            .catch(async (err) => {
                let errResp = await catchError('updateProfile', err);
            });

    } else {
        console.log("invalid wallet connection");
        resetUI();
    }
}


async function makePost(p, skipRepost, isComment){

    let post = '<div class="messageWrapper" style="color:#fff;">';

    if (skipRepost){
        post = '<div class="messageRepostWrapper" style="color:#fff;">';
    }

    let isGroup = false;
    if (p.postProxy !== '0x0000000000000000000000000000000000000000' && p.postProxy !== p.poster) {
        isGroup = true;
    }

    let nftProfile = await getProfileImageFromNFT(p.avatarMetadata, p.avatarContract, p.postedBy, p.groupID);

    let profileImage = p.avatarURI;

    if (nftProfile && nftProfile.length > 0){
        profileImage = nftProfile;
    }

    if (profileImage === ''){
        profileImage = 'images/user.png';
    }

    // Avatar
    post += '<div class="avatar ' + p.postedBy.toLowerCase() + '">';
    post += '<img src="' + profileImage + '" class="avatarImg';
    if (p.groupID > 0){
        post += ' groupAvatar';
    }
    post += '" onerror="this.onerror=null;this.src=\'images/user.png\'" alt="' + p.postedBy + '" />';
    post += '</div>';


    // Post
    if (skipRepost || isComment){
        post += '<div class="repost">';
    } else {
        post += '<div class="post">';
    }

    if (!skipRepost) {
        post += '<div class="dropdown postMenu">';
        post += '<a class="dropdown-toggle" href="#lsRet" role="button" data-toggle="dropdown" aria-expanded="false">⠇</a>';
        post += '<div class="dropdown-menu">';

        // // Check if they are blocking this user (requester / target)
        // let isAllowed = await contractBlocking.methods.isAllowed(walletAddress, p.postedBy).call()
        //     .then(result => {
        //         return result;
        //     })
        //     .catch(err => {
        //         catchError('isAllowed', err);
        //     });
        //
        // // Check if they are blocking this user (requester / target)
        // let isAllowedRev = await contractBlocking.methods.isAllowed(p.postedBy, walletAddress).call()
        //     .then(result => {
        //         return result;
        //     })
        //     .catch(err => {
        //         catchError('isAllowed', err);
        //     });
        //
        // if (!isAllowed || !isAllowedRev){
        //     return ''
        // }

        if (validWalletConnection) {
            if (walletAddress.toLowerCase() !== p.postedBy.toLowerCase() && walletAddress.toLowerCase() !== p.postProxy.toLowerCase()) {
                // Check if user already following
                let isFollowing = await contractFollowers.methods.isUserFollowing(walletAddress, p.postedBy).call()
                    .then(result => {
                        return result;
                    })
                    .catch(err => {
                        catchError('isUserFollowing', err);
                    });


                let accountType = "User";
                if (p.groupID > 0) {
                    accountType = "Group"
                }

                if (isFollowing) {
                    post += '<a href="#lsRet" onclick="unfollowUser(\'' + p.postedBy + '\', \'' + accountType + '\')" class="dropdown-item"><img src="images/unfollow.png" class="menuImage" /> Unfollow ' + accountType + '</a>';
                } else {
                    post += '<a href="#lsRet" onclick="followUser(\'' + p.postedBy + '\', \'' + accountType + '\')" class="dropdown-item"><img src="images/follow.png" class="menuImage" /> Follow ' + accountType + '</a>';
                }

            } else {
                post += '<a href="#" onclick="deletePost(' + p.msgID + ')" class="dropdown-item"><i class="fa fa-trash" class="menuImage" style="margin-right:5px;color:gray;"></i> Archive Post</a>';
            }
        }

        post += '</div>';
        post += '</div>';
    }

    let datePosted = new Date(p.timestamp * 1000);
    post += '<div class="datePosted muted">' + datePosted.toDateString() + '</div>';

    post += '<div class="nameWrapper"><a href="?address=' + p.postedBy + '" class="name" id="' + p.msgID + '-name">';
    let shortAddr = makeShortAddress(p.postedBy);
    if (p.handle.length > 0){
        if (isGroup){
            post += '%' + p.handle;
        } else {
            post += '@' + p.handle;
        }
        // post += ' <span class="muted">' + shortAddr + '</span>';
    } else {
        post += shortAddr;
    }
    post += '</a>';

    if (p.verification === 1){
        post += '<img src="images/verified1.png" style="height:20px;position: relative;top:-2px;margin-left:2px;" />';
    }

    let groupAddresses = [];

    if (p.inGroups.length > 0) {
        let inGroups = p.inGroups.split(',');
        post += ' <span class="muted">'
        for (let g = 0; g < inGroups.length; g++) {

            // Get the group name
            let groupDetails = await contractGroups.methods.groupDetails(inGroups[g]).call()
                .then(result => {
                    if (result.groupAddress !== '0x0000000000000000000000000000000000000000'){
                        return result;
                    } else {
                        return '';
                    }
                })
                .catch(err => {
                    catchError('groupDetails', err);
                });

            console.log("🔥 Group Details: ", groupDetails);

            // Populate the address
            groupAddresses.push(groupDetails.groupAddress);

            if (groupDetails.groupName) {
                if (g === 0) {
                    post += ' => ';
                }
                if (g > 0) {
                    post += ', ';
                }

                post += '<a href="?groupID=' + inGroups[g] + '" class="groupName">%' + groupDetails.groupName.toUpperCase() + "</a>";
            }
        }
        post += '</span>';
    }

    post += '</div>';


    // Format Groups From Message
    if (p.inGroups.length > 0) {
        let groups = p.message.match(/%[0-9a-zA-Z\-\_]{2,}/g);
        let inGroups = p.inGroups.split(',');
        for (let g = 0; g < inGroups.length; g++) {
            if (groups) {
                if (g + 1 <= groups.length) {
                    let re = new RegExp(groups[g],"gi");
                    console.log("🔥 GROUP ADDERSSSSSS: ",  groupAddresses[g])
                    p.message = p.message.replace(re, '<a href="?address=' + groupAddresses[g] + '">' + groups[g] + '</a>');
                }
            }
        }
    }

    // Format Hashtags from Message
    if (p.hashtags.length > 0) {
        let hashtags = p.message.match(/#[0-9a-zA-Z\-\_]{2,}/g);
        let Hashtags = p.hashtags.split(',');
        for (let g = 0; g < Hashtags.length; g++) {
            if (hashtags) {
                if (g + 1 <= hashtags.length) {
                    let re = new RegExp('#' + hashtags[g],"gi");
                    p.message = p.message.replace(hashtags[g], '<a href="?hashtag=' + Hashtags[g] + '">' + hashtags[g] + '</a>');
                }
            }
        }
    }

    // Format Tagged Users from message
    let taggedUsers = '';
    if (p.taggedAccounts.length > 0) {
        let taggedUser = p.message.match(/@[0-9a-zA-Z\-\_]{2,}/g);
        let taggedAddress = p.message.toLowerCase().match(/0x[0-9a-f{40}]*/g);

        // Format post of tagged users in post
        if (taggedAddress) {
            for (let t = 0; t < taggedAddress.length; t++) {
                if (t + 1 <= taggedAddress.length) {
                    let re = new RegExp('@' + taggedAddress[t],"gi");
                    let handle = await getHandle(taggedAddress[t], true);
                    p.message = p.message.replace(re, '<a href="?address=' + taggedAddress[t] + '&tagged=1" title="' + taggedAddress[t] + '">@' + handle + '</a>');
                }
            }
        }

        // We should be allowing people to tag a name as it can change and the link will be gone
        // if (taggedUser) {
        //     for (let t = 0; t < taggedUser.length; t++) {
        //         if (t + 1 <= taggedUser.length) {
        //             let thisUserHandle = taggedUser[t].replaceAll('@', '');
        //             let taggedUserAddress = await contractHandles.methods.usrHandleMap(thisUserHandle.toLowerCase()).call()
        //                 .then(result => {
        //                     // console.log('Tagged User (' + thisUserHandle + '): ' + result);
        //                     return result;
        //                 })
        //                 .catch(err => {
        //                     catchError('usrHandleMap', err);
        //                 });
        //             if (taggedUserAddress !== '0x0000000000000000000000000000000000000000') {
        //                 let re = new RegExp('@' + taggedUser[t],"gi");
        //                 p.message = p.message.replace(re, '<a href="?address=' + taggedUserAddress + '&tagged=1" title="' + taggedAddress[t] + '">' + thisUserHandle + '</a>');
        //             }
        //         }
        //     }
        // }

        // Show the tagged Users
        let tagged = p.taggedAccounts.split(',');

        let amountOfTaggedUsers = tagged.length;

        // See if they tipped with ERC-20
        if (parseFloat(p.tipAmount) > 0){
            // If so, the last user "tagged" is actually the contract of the ERC-20 token, so stop short by 1
            amountOfTaggedUsers--;
        }

        for (let t = 0; t < amountOfTaggedUsers; t++) {
            // Make the HTML for the post
            taggedUsers += '<div style="float:right;position:relative;margin-right:10px;">';
            if (parseFloat(p.tips) > 0) {
                taggedUsers += '<img src="images/token-MATIC.png" style="position:absolute;right:-5px;top:0px;width:16px;height:16px;" />';
            } else if (parseFloat(p.tipAmount) > 0){
                if (p.tipContract === '0x2ecf9ff1b7e1139c4adb521c034cd2874b8bc396'){
                    taggedUsers += '<img src="images/token-DOOM.png" style="position:absolute;right:-5px;top:0px;width:16px;height:16px;" />';
                } else if (p.tipContract === '0xb45f6e99bc6e4a8bc431ba86b2e0376271c8545f'){
                    taggedUsers += '<img src="images/token-GBAR.png" style="position:absolute;right:-5px;top:0px;width:16px;height:16px;" />';
                } else if (p.tipContract === '0xfd7c36c3640dc0eb778ceb463ce618f37fec5103'){
                    taggedUsers += '<img src="images/token-GP.png" style="position:absolute;right:-5px;top:0px;width:16px;height:16px;" />';
                } else if (p.tipContract === '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'){
                    taggedUsers += '<img src="images/token-WETH.png" style="position:absolute;right:-5px;top:0px;width:16px;height:16px;" />';
                } else {
                    taggedUsers += '<img src="images/coin.png" style="position:absolute;right:-5px;top:0px;width:16px;height:16px;" />';
                }
            }
            taggedUsers += '<a href="?address=' + tagged[t] + '&tagged=1"><img src="images/taggedUser.png" style="width:30px;"  alt="' + tagged[t] + '"></a></div>';
        }
    }

    // Show Message
    post += '<div class="message" id="' + p.msgID + '-message">' + p.message + '</div>';

    if (p.uri !== '') {

        // First check if it's an IPFS image
        if (p.uri.toLowerCase().indexOf('ipfs://') >= 0) {
            // if it's hosted on IPFS, grab via proxy
            let ipfsImg = 'https://cloudflare-ipfs.com/ipfs/' + p.uri.replace('ipfs://', '').replace('IPFS://', '');
            post += '<img src="' + ipfsImg + '" class="postImg" onerror="this.hide();" />';
        } else {
            let validImg = false;

            for (let z=0;z<validImgExt.length;z++){
                let uriToTest = p.uri;
                if (uriToTest.indexOf('?') > 0){
                    uriToTest = uriToTest.substring(0,uriToTest.indexOf('?'));
                }
                if (uriToTest.split('.').pop().toLowerCase() === validImgExt[z]){
                    validImg = true;
                }
            }

            if (validImg){
                post += '<a href="' + p.uri + '" data-toggle="lightbox" data-max-width="550">';
                post += '<img src="' + p.uri + '" class="postImg" />';
                post += '</a>'
            } else {
                // check if it's a YouTube video
                console.log(p.uri);
                if (p.uri.toLowerCase().indexOf('https://youtube.com/') >= 0) {
                    post += '<iframe width="425" height="272" src="https://www.youtube.com/embed/' + p.uri.split('v=')[1] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                } else if (p.uri.toLowerCase().indexOf('https://youtu.be/') >= 0) {
                    post += '<iframe width="425" height="272" src="https://www.youtube.com/embed/' + p.uri.split('.be/')[1] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
                } else {
                    post += '<div style="font-size: 16px;color:#05afd4;"><a href="' + p.uri + '" target="_blank">' + p.uri + '</a></div>';
                }
            }
        }
    }


    // Get Message if repost
    if (p.isRepostOf > 0 && !skipRepost){
        let repost = await contractKUTHULU.methods.getMsgsByIDs([p.isRepostOf], false, walletAddress).call()
            .then(result => {
                result = formatMsgRespToJSON(result);
                // console.log('Repost Of:' + result);
                return result;
            })
            .catch(err => {
                catchError('getRepost', err);
            });

        post += await makePost(repost.Messages[0], true, false);
        // console.log(repostData);
    }


    if (!skipRepost) {
        let commentIds = await contractKUTHULU.methods.getSubIDsByPost(p.msgID, 0, p.isRepostOf).call()
            .then(result => {
                // console.log('Comment IDs for ' + p.msgID + ':' + result);
                return result;
            })
            .catch(err => {
                catchError('getSubIDsByPost', err);
            });

        post += '<div class="actionWrapper gs" onmouseover="$(this).removeClass(\'gs\');" onmouseout="$(this).addClass(\'gs\');">';

        // Show Comments
        if (p.commentLevel === 1) {
            post += '<a href="#lsRet" onclick="toggleComment(' + p.msgID + ', false)"><img src="images/comment.png" class="actionIcon" /></a>';
            post += '<a href="#lsRet" onclick="showComments(' + p.msgID + ')"><span class="actionVal">' + commentIds.length + '</span></a>';
        } else {
            post += '<img src="images/comment.png" alt="No Comments Allowed on this Post" class="actionIcon gs" />';
            post += '<span class="actionVal">' + commentIds.length + '</span>';
        }


        // Check if current user liked it
        let likedIt = false;
        if (validWalletConnection) {
             likedIt = await contractLikes.methods.checkUserLikeMsg(walletAddress, p.msgID).call()
                .then(result => {
                    return result;
                })
                .catch(err => {
                    catchError('getSubIDsByPost', err);
                });
        }

        post += '<a href="#lsRet" onclick="like(' + p.msgID + ');">';
        if (likedIt) {
            post += '<img src="images/liked.png" class="actionIcon" />';
        } else {
            post += '<img src="images/like.png" class="actionIcon" />';
        }
        post += '</a>';

        // Show Likes
        post += '<span class="actionVal"><a href="?likes=' + p.msgID + '">' + p.likes + '</a></span>';


        // Show Reposts
        post += '<a href="#lsRet" onclick="toggleComment(' + p.msgID + ', true)"><img src="images/repost.png" class="actionIcon" /></a>';
        post += '<span class="actionVal"><a href="?repostsOf=' + p.msgID + '">' + p.reposts + '</a></span>';


        // Show Tips
        let tipsReceived = 0;
        if (p.tips > 0){
            tipsReceived = p.tips / ethDec;
            tipsReceived = Math.round((tipsReceived + Number.EPSILON) * 100) / 100
        } else if (parseFloat(p.tipAmount) > 0) {
            tipsReceived = p.tipAmount / ethDec;
            tipsReceived = Math.round((tipsReceived + Number.EPSILON) * 100) / 100
        }

        post += '<a href="#lsRet" onclick="tip(' + p.msgID + ');">';

        if (parseFloat(p.tipAmount) > 0){
            if (p.tipContract === '0x2ecf9ff1b7e1139c4adb521c034cd2874b8bc396'){
                post += '<img src="images/token-DOOM.png" class="actionIcon" style="width:18px;height:18px;" />';
            } else if (p.tipContract === '0xb45f6e99bc6e4a8bc431ba86b2e0376271c8545f'){
                post += '<img src="images/token-GBAR.png" class="actionIcon" style="width:18px;height:18px;" />';
            } else if (p.tipContract === '0xfd7c36c3640dc0eb778ceb463ce618f37fec5103'){
                post += '<img src="images/token-GP.png" class="actionIcon" style="width:18px;height:18px;" />';
            } else if (p.tipContract === '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'){
                post += '<img src="images/token-WETH.png" class="actionIcon" style="width:18px;height:18px;" />';
            } else {
                post += '<img src="images/coin.png" class="actionIcon" style="width:18px;height:18px;" />';
            }
        } else {
            post += '<img src="images/tips.png" class="actionIcon" />';
        }
        post += '</a>';

        post += '<span class="actionVal"><a href="?tips=' + p.msgID + '">' + tipsReceived + '</a></span>';

        // Show Share Button
        post += '<a href="?msg=' + p.msgID + '"><img src="images/share.png" style="height:18px;" class="actionIcon" /></a>';

        // Tagged Accounts
        post += taggedUsers;

        post += '</div>';
    }

    post += '</div>';
    post += '<div class="clearfix"></div>';

    // End post
    post += '</div>';

    return post;
}

async function getProfileImageFromNFT(avatarMetadata, avatarContract, usrAddress, groupID, forSelect){
    // Check if they have an NFT as their profile photo
    let nftImg;

    if (avatarMetadata && avatarContract) {
        let metadata;
        let groupName;

        if (avatarMetadata.toLowerCase().indexOf('http') === 0 || avatarMetadata.toLowerCase().indexOf('ipfs') === 0) {
            // Download the JSON file
            try {
                if (avatarMetadata.toLowerCase().indexOf('ipfs://') >= 0) {
                    // if it's hosted on IPFS, grab via proxy
                    metadata = await $.get('https://cloudflare-ipfs.com/ipfs/' + avatarMetadata.replace('ipfs://', '').replace('IPFS://', ''));
                } else {
                    metadata = await $.get(avatarMetadata);
                }

                nftImg = metadata.image_url;
                if (!nftImg || nftImg === '' || nftImg === undefined) {
                    nftImg = metadata.image;

                    if (nftImg.toLowerCase().indexOf('ipfs://') >= 0) {
                        // if it's hosted on IPFS, grab via proxy
                        nftImg = 'https://cloudflare-ipfs.com/ipfs/' + nftImg.replace('ipfs://', '').replace('IPFS://', '');
                    }
                }

                groupName = metadata.name.length;
            } catch {
                console.log('Invalid metadata');
            }
        }

        if (avatarMetadata.toLowerCase().indexOf('data:application') === 0) {
            const avatarMetadataJSON = JSON.parse(atob(avatarMetadata.substring(29)));
            if (avatarMetadataJSON.hasOwnProperty('image')) {
                nftImg = avatarMetadataJSON.image;
            } else if (avatarMetadataJSON.hasOwnProperty('imageUrl')) {
                nftImg = avatarMetadataJSON.imageUrl;
            }
            if (nftImg.toLowerCase().indexOf('ipfs://') >= 0) {
                // if it's hosted on IPFS, grab via proxy
                nftImg = 'https://cloudflare-ipfs.com/ipfs/' + nftImg.replace('ipfs://', '').replace('IPFS://', '');
            }

            if (avatarMetadataJSON.hasOwnProperty('name')) {
                groupName = avatarMetadataJSON.name;
            }
        }

        if (nftImg) {
            let validImg = false;
            if (nftImg.toLowerCase().indexOf('data:image/svg') === 0) {
                validImg = true;
            } else {
                for (let z = 0; z < validImgExt.length; z++) {
                    if (nftImg.split('.').pop().toLowerCase() === validImgExt[z]) {
                        validImg = true;
                    }
                }
            }
            if (nftImg.toLowerCase().indexOf('https://metadata.ens.domains') === 0){
                validImg = true;
            }

            if (validImg) {

                // console.log('VALID IMAGE');
                let checkForImg = setInterval(function () {
                    if ($('.' + usrAddress.toLowerCase()).length > 0) {
                        let newImg = '<a href="' + nftImg + '" data-toggle="lightbox" data-max-width="550"';
                        // if (groupName > 0){
                            newImg += '  data-title="' + groupName + '"';
                        // }
                        // newImg += ' data-footer="' + avatarContract + '"';
                        newImg += '>';
                        newImg += '<img src="' + nftImg + '" class="avatarImg';
                        if (groupID > 0){
                            newImg += ' groupAvatar';
                        }
                        if (forSelect){
                            newImg += ' groupAvatarSel';
                        }
                        newImg += ' img-fluid" onerror="this.onerror=null;this.src=\'images/user.png\'" alt="' + groupName + '" />';
                        newImg += '</a>';

                        $('.' + usrAddress.toLowerCase()).html(newImg);
                        $('.' + usrAddress.toLowerCase()).removeClass(usrAddress.toLowerCase());
                        clearInterval(checkForImg);
                    }
                }, 100);
            }
        }

    }

    return nftImg;
}


async function getCosts(){

    startLoading('Retrieving Costs...');

    let getStats = await contractKUTHULU.methods.getStats().call()
        .then(result => {
            console.log('Total Messages:' + result[0]);
            totalMessages = result[0];
            totalComments = result[1];
        })
        .catch(err => {
            catchError('msgCounter', err);
        });

    let canary = await contractKUTHULU.methods.canary().call()
        .then(result => {
            if (result !== 'safe'){
                $('#canary').html('<img src="images/canary-dead.png" alt="🚫">');
            } else {
                $('#canary').html('<img src="images/canary.png" alt="Everything is OK 🐤">');
            }
        })
        .catch(err => {
            catchError('msgCounter', err);
        });

    costLike = await contractKUTHULU.methods.cutToPoster().call()
        .then(result => {
            console.log('Cost to Like:' + result);
            return result;
        })
        .catch(err => {
            catchError('costToLike', err);
        });


    // get cost to mint
    costToMintTier1 = await contractGroupTokens.methods.costToMintTier(0).call()
        .then(result => {
            console.log('Cost To Mint Tier 1: ' + result);
            return result;
        })
        .catch(err => {
            catchError('tier1', err);
        });

    costToMintTier2 = await contractGroupTokens.methods.costToMintTier(1).call()
        .then(result => {
            console.log('Cost To Mint Tier 2: ' + result);
            return result;
        })
        .catch(err => {
            catchError('tier2', err);
        });

    costToMintTier3 = await contractGroupTokens.methods.costToMintTier(2).call()
        .then(result => {
            console.log('Cost To Mint Tier 3: ' + result);
            return result;
        })
        .catch(err => {
            catchError('tier3', err);
        });

    costToMintTier4 = await contractGroupTokens.methods.costToMintTier(3).call()
        .then(result => {
            console.log('Cost To Mint Tier 4: ' + result);
            return result;
        })
        .catch(err => {
            catchError('tier4', err);
        });

    costToUpdateHandle = await contractHandles.methods.costForNameChange().call()
        .then(result => {
            console.log('Cost to change name:' + result);
            return result;
        })
        .catch(err => {
            catchError('costToPost', err);
        });

    endLoading();

}


function makeShortAddress(address){
    return address.substring(0, 5) + '..' + address.substring(address.length - 4, address.length);
}

function resetUI(){
    $('#playButtons').hide();
    $('#connectWalletToPost').hide();
}


function escapeHtml(unsafe)
{
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function startLoading(msg){
    $('#loading').show();
    $('#loadMsg').html(msg);
}
function endLoading(){
    $('#loading').fadeOut();
}

async function lookupENSName(address){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return await provider.lookupAddress(address);
}

function formatMsgRespToJSON(_resp){
    /**
     *   index = attribute name (pseudo type)
     *
     *   0 = msgID (int)
     *   1 = postedBy (address)
     *   2 = handle (string)
     *   3 = verification level (int)
     *   4 = avatarURI (string)
     *   5 = avatarMetadata (string)
     *   6 = avatarContract (address)
     *   7 = message (string)
     *   8 = commentLevel (int)
     *   9 = hashtags (string[])
     *   10 = taggedAccounts (address[])
     *   11 = postByContract (bool)
     *   12 = likes (int)
     *   13 = comments (int)
     *   14 = reposts (int)
     *   15 = isCommentOf (int)
     *   16 = isRepostOf (int)
     *   17 = groupID (int)
     *   18 = groups (int[])
     *   19 = URI (string)
     *   20 = tips (int)
     *   21 = paid (int)
     *   22 = block (int)
     *   23 = timestamp (int)
     *   24 = postProxy (address)
     *   25 = tipContract (address)
     *   26 = tipAmount (int)
     *   27 = commentID (int)
     */

    let respJSONAll = {"Messages": []};

    for (let i = 0; i < _resp.length; i++) {
        let respJSON = {};

        respJSON.msgID = parseInt(_resp[i][0]);
        respJSON.postedBy = web3.utils.toChecksumAddress(_resp[i][1]);
        respJSON.handle = _resp[i][2];
        respJSON.verification = parseInt(_resp[i][3]);
        respJSON.avatarURI = _resp[i][4];
        respJSON.avatarMetadata = _resp[i][5];
        respJSON.avatarContract = _resp[i][6];
        respJSON.message = _resp[i][7];
        respJSON.commentLevel = parseInt(_resp[i][8]);
        respJSON.hashtags = _resp[i][9];
        respJSON.taggedAccounts = _resp[i][10];
        respJSON.postByContract = parseInt(_resp[i][11]);
        respJSON.likes = parseInt(_resp[i][12]);
        respJSON.comments = parseInt(_resp[i][13]);
        respJSON.reposts = parseInt(_resp[i][14]);
        respJSON.isCommentOf = parseInt(_resp[i][15]);
        respJSON.isRepostOf = parseInt(_resp[i][16]);
        respJSON.groupID = _resp[i][17];
        respJSON.inGroups = _resp[i][18];
        respJSON.uri = _resp[i][19];
        respJSON.tips = parseInt(_resp[i][20]);
        respJSON.paid = parseInt(_resp[i][21]);
        respJSON.block = parseInt(_resp[i][22]);
        respJSON.timestamp = parseInt(_resp[i][23]);
        respJSON.postProxy = web3.utils.toChecksumAddress(_resp[i][24]);
        respJSON.tipContract = _resp[i][25];
        respJSON.tipAmount = _resp[i][26];
        respJSON.commentID = _resp[i][27];

        respJSONAll.Messages.push(respJSON);
    }

    return respJSONAll;
}

function formatUserProfileToJSON(_resp){
    /**
     * Returns the user details by address in JSON string
     * @param usrAddress : the address to retrieve the details for
     * 0 = Handle
     * 1 = Post Count
     * 2 = Number of users they are following
     * 3 = Number of users that are following them
     * 4 = User Verification level
     * 5 = Avatar URI
     * 6 = Avatar Metadata
     * 7 = Avatar Contract Address
     * 8 = Avatar Network ID
     * 9 = token ID
     * 10 = URI
     * 11 = Bio
     * 12 = Location
     * 13 = Block number when joined
     * 14 = Block timestamp when joined
     * 15 = Limit of number of users they can follow
     * 16 = Total Tips Received
     * 17 = Total Tips Sent
     * 18 = Group ID (0 = user)
     */

    let respJSON = {};

    respJSON.handle = _resp[0];
    respJSON.postCount = parseInt(_resp[1]);
    respJSON.following = parseInt(_resp[2]);
    respJSON.followers = parseInt(_resp[3]);
    respJSON.verification = parseInt(_resp[4]);
    respJSON.avatarURI = _resp[5];
    respJSON.avatarMetadata = _resp[6].replace('base64;','base64,');
    respJSON.avatarContract = web3.utils.toChecksumAddress(_resp[7]);
    respJSON.avatarNetworkID = parseInt(_resp[8]);
    respJSON.avatarTokenID = parseInt(_resp[9]);
    respJSON.uri = _resp[10];
    respJSON.bio = _resp[11];
    respJSON.location = _resp[12];
    respJSON.blockJoined = parseInt(_resp[13]);
    respJSON.blockTimestamp = parseInt(_resp[14]);
    respJSON.followLimit = parseInt(_resp[15]);
    respJSON.tipsReceived = parseInt(_resp[16]);
    respJSON.tipsSent = parseInt(_resp[17]);
    respJSON.groupID = _resp[18];

    return respJSON;
}

function addNameToCache(address, name){
    // COnly add if it's not already there
    if (!nameCache.hasOwnProperty(address)){
        nameCache[address] = name;
    }
}

async function getHandle(address, makeShort){

    // Check if it's in the cache first
    if (nameCache.hasOwnProperty(address)){
        return nameCache[address];
    }

    let userProfile = await getProfileData(address, false);
    console.log(userProfile);
    if (userProfile.handle){
        addNameToCache(address, userProfile.handle);
        return userProfile.handle;
    } else {
        if (makeShort){
            return makeShortAddress(address);
        } else {
            return address;
        }
    }
}

async function getProfileData(address){

    let userProfile = await contractProfiles.methods.getUserDetails(address).call()
        .then(result => {
            // Save the name to cache for quicker lookups later
            addNameToCache(address, result[0]);

            result = result.toString().replace('base64,','base64;');
            return formatUserProfileToJSON(result.toString().split(','));
        })
        .catch(err => {
            catchError('getUserDetails', err);
        });

    let nftProfile = await getProfileImageFromNFT(userProfile.avatarMetadata , userProfile.avatarContract, address, userProfile.groupID);

    let profileImage = userProfile.avatarURI;

    if (nftProfile && nftProfile.length > 0){
        profileImage = nftProfile;
    }

    if (profileImage === ''){
        profileImage = 'images/user.png';
    }

    userProfile.profileImage = profileImage;

    return userProfile;

}

// 0x2ECF9Ff1B7e1139C4adB521C034CD2874B8bc396

async function validateERC20Contract(tokenContract, amount){

    if (tokenContract === 'MATIC'){
        if (parseFloat(userMATICBalance / ethDec) >= amount){
            return 2;
        } else {
            return 0;
        }
    }

    // Get their Custom Token Balance
    let abiCustomTokens = [{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
    let contractCustomToken = new web3inf.eth.Contract(abiCustomTokens, tokenContract);
    console.log("wallet address: ", walletAddress);
    let tokenBalance = await contractCustomToken.methods.balanceOf(walletAddress).call()
        .then(result => {
            console.log('Result:' + result);
            if (result > 0) {
                result = parseFloat(result / ethDec);
            }
            return result;
        })
        .catch(err => {
            console.log('Error getting balance:', err);
            return false;
        });

    if (!tokenBalance) {
        return -1;
    }

    console.log('Amount Needed: ', amount);
    console.log('Custom Token Balance: ', parseFloat(tokenBalance));

    // Check Custom Token Allowance
    let allowance = await contractCustomToken.methods.allowance(walletAddress, contractAddress).call()
        .then(result => {
            console.log('Allowance:' + result);
            if (result > 0) {
                result = parseFloat(result / ethDec);
            }
            return result;
        })
        .catch(err => {
            console.log('Error getting allowance:', err);
            return false;
        });

    if (!allowance) {
        console.log('Failed to get allowance');
        return 0;
    }

    if (allowance >= amount && tokenBalance >= amount) {
        // They have the balance and allowance
        console.log('Have Balance + Allowance');
        return 2;
    } else if (tokenBalance >= amount) {
        console.log('Have Balance / No Allowance');
        // They have the balance, but not the allowance
        return 1;
    } else {
        console.log('No Balance');
        // They don't have the balance (so the allowance doesn't matter)
        return 0;
    }
}

async function validateERC20(tokenContract, amount){
    return await validateERC20Contract(tokenContract, amount);
}