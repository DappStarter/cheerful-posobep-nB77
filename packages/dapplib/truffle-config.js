require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind assume inflict kitchen off they'; 
let testAccounts = [
"0x19797ff1bacb0146f78d5fd75f3e67abc2f84714bef7f5baf6064ded9f291d37",
"0x412d7223be1a8bb2e147cf3e9ad44edd03fb5ab2cecc9180906bc819072d76cc",
"0x3a5f45d0c1e26ba8cd1696b0ec5afdd2467643ad9ba76a12eaab49fb7211da7c",
"0x52010517556972cbf90f620396ca40d6c8a25beca9c3f852663988f75fd46533",
"0x411c76f4ed83a49386db6be8f924f98e53e1dd216ed568e6809dbdba213abf39",
"0x856e74c097bcfe77c3ba1b332670b68bafc4ea867186c4e262f7aa863cc9b8e2",
"0x5f9a95df85e7340d4b8db3eced74be85fae573b5d7f854cbcfdccb884202c190",
"0xb3796c6d532472f95ecf8cadb7506db10307dbe1dc59f931fce0e487822a37bc",
"0xc5fe42dc04239631a14e39c93b76691bac7ed96b31ea6e10c626c08425c0a913",
"0x42e8fbd05c67139f4bbe4b149a5be707780ac0f8707ccdb6ac7eb01d47526cc9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


