import { defineField, defineType } from 'sanity'
import { MdOutlineRateReview } from 'react-icons/md'
import { imageBlock } from '../fragments'

export default defineType({
	name: 'reviewitem',
	title: 'Review item',
	icon: MdOutlineRateReview,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }, imageBlock],
		}),
		defineField({
			name: 'approved',
			title: 'Approved',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'publishDate',
			type: 'date',
			validation: (Rule) => Rule.required(),
			group: 'content',
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare: ({ title }) => ({
			title,
		}),
	},
})
