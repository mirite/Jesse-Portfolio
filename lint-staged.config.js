export default {
	"*": ["prettier --ignore-unknown --write --cache"],
	"*.{js,ts,jsx,tsx}": ["eslint --fix --cache"],
	"*.{ts,tsx,json}": ["sh -c 'tsc --noEmit'"],
};
