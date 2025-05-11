import { defineField, defineType } from 'sanity'
import { FaImage } from 'react-icons/fa'

export default defineType({
	name: 'image-list',
	title: 'Image List',
	icon: FaImage,
	type: 'object',
	fields: [
		defineField({
			name: 'layout',
			type: 'string',
			options: {
				list: ['grid', 'carousel', 'product'],
				layout: 'radio',
			},
			initialValue: 'grid',
		}),
		defineField({
			name: 'assets',
			title: 'Assets',
			type: 'array',
			of: [{ type: 'img' }],
			validation: (Rule) => Rule.max(6),
		}),
	],
	preview: {
		select: {
			media: 'assets.0.asset',
		},
		prepare({ media }) {
			return {
				title: 'Image List',
				subtitle: 'Up to 6 images',
				media,
			}
		},
	},
})
