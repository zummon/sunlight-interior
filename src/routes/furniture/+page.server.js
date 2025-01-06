import furnitures from '../../lib/furniture.json'

export const prerender = true;
export const ssr = true;
export const csr = false;

export function load ({  }) {

	return {
		furnitures,
	}
}