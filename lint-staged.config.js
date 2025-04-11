export default {
	"*": ["prettier --ignore-unknown --write --cache"],
	"*.{ts,tsx,json}": ["sh -c 'tsc --noEmit'"],
	"*.{js,ts,jsx,tsx}": ["eslint --fix --cache"],
};
