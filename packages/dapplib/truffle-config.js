require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth soccer million guess argue sun suit'; 
let testAccounts = [
"0xe6dfb796e7970eb6eb2c0eb2cf157ba27648ee50fe220f0e207e782df739fc95",
"0x0eb7a806051df5cc044706811a4abc659e41f6cc784b83b9323c2bcc65a64ec2",
"0x11bf958bd176e7a042527b165f27992bc78f13f81f58ffceaa7338e10e7f3667",
"0x7eade28ed80e3c3b2875bb86bec620a3f215fae253ec48a18695db87fa701616",
"0xa017c702c3ad90462c47d4ea056210306f8c453e478e1b35acbcca05f5f850fd",
"0x627f1d00ba81c280d111b3d61205f1b5673c48b70b9c4d8af243c40868b04c40",
"0x849fccda46f4476e18f01ed2d8bec2f5a1847c37abc1550769c36449df4d71f2",
"0xb8f60f49634153b41690568735a5b5c67932b6677534d8d6c7c432421b1c53fa",
"0xb41890bbcf1ec3c7441049fef7fdaa3f61ee5c6526e2bbd5488b57e08e6cb022",
"0xa401eb52857e812d8c06647567d94e1700cbf4e54552e4df32ab2cc681e77fed"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
