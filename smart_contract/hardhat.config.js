// https://eth-ropsten.alchemyapi.io/v2/kcVXMb0quETg6tDAkkTua9zeku-T2MUN

require('@nomiclabs/hardhat-waffle')

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/kcVXMb0quETg6tDAkkTua9zeku-T2MUN',
			accounts: [
				'ade07d319a24cf570e54499de97f6cf8fa9d7ca3a74c9f6bfd86835b321d3d3d',
			],
		},
	},
}
