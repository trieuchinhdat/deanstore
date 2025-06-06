import { useQueryState } from 'nuqs'

export const useProductFilters = () => {
	const [category, setCategory] = useQueryState('category', {
		defaultValue: 'All',
	})

	return {
		category,
		setCategory,
	}
}
