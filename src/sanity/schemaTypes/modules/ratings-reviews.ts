import { defineField, defineType } from 'sanity'
import { MdReviews } from 'react-icons/md'

export default defineType({
	name: 'ratings-reviews',
	title: 'Ratings & Reviews',
	type: 'document',
	icon: MdReviews,
	fields: [
		defineField({
			name: 'reviews',
			title: 'Reviews',
			type: 'reference',
			to: [{ type: 'review-list' }],
		}),
		defineField({
			name: 'backgroundColor',
			title: 'Background color',
			description: 'If not set, the default background color will be used.',
			type: 'string',
		}),
	],
	preview: {
		select: {
			title: 'title',
			reviewListTitle: 'reviews.title',
			reviewItems: 'reviews.reviewItems',
		},
		prepare({ title, reviewListTitle, reviewItems }) {
			return {
				title: title || reviewListTitle || 'No Title',
				subtitle: `${reviewItems?.length || 0} reviews`,
			}
		},
	},
})
