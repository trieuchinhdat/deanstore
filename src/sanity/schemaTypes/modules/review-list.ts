import { defineField, defineType } from 'sanity'
import { MdReviews } from 'react-icons/md'

export default defineType({
	name: 'review-list',
	title: 'Reviews',
	type: 'document',
	icon: MdReviews,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required().min(1).max(100),
		}),
		defineField({
			name: 'reviewItems',
			title: 'Review Items',
			type: 'array',
			of: [{ type: 'reviewitem' }],
		}),
	],
	preview: {
		select: {
			title: 'title',
			reviewItems: 'reviewItems',
		},
		prepare({ title, reviewItems }) {
			return {
				title,
				subtitle: `${reviewItems?.length || 0} reviews`,
			}
		},
	},
})
