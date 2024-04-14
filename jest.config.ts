module.exports = {
	preset: 'ts-jest',
  	testEnvironment: 'jsdom',
	moduleFileExtensions: [ 'js', 'jsx', 'ts', 'tsx' ],
	testMatch: [ '**/?(*.)+(spec|test).[tj]s?(x)' ],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
	},
	transformIgnorePatterns: [
		'node_modules/(?!variables/.*)'
	  ]
};
