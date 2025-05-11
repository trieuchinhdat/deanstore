import { defineField, defineType } from 'sanity'
import { MdOutlineNoteAlt } from 'react-icons/md'

export default defineType({
	name: 'order-form',
	title: 'Order Form',
	icon: MdOutlineNoteAlt,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'option1',
			title: 'Option 1',
			type: 'array',
			of: [{ type: 'options' }],
		}),
		defineField({
			name: 'option2',
			title: 'Option 2',
			type: 'array',
			of: [{ type: 'options' }],
		}),
	],
	preview: {
		select: {
			title: 'content',
			layout: 'layout',
		},
		prepare(selection) {
			const { title } = selection
			return {
				title: 'Order Form',
			}
		},
	},
})
