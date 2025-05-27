import { defineField, defineType } from 'sanity'
import { MdOutlineNoteAlt } from 'react-icons/md'

export default defineType({
	name: 'order-form',
	title: 'Form Contact',
	icon: MdOutlineNoteAlt,
	type: 'object',
	fields: [
		defineField({
			name: 'layout',
			type: 'string',
			options: {
				list: ['form order', 'form contact'],
				layout: 'radio',
			},
			initialValue: 'form order',
		}),
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			hidden: ({ parent }) => parent?.layout === 'form order',
		}),
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
			hidden: ({ parent }) => parent?.layout !== 'form order',
		}),
		defineField({
			name: 'option2',
			title: 'Option 2',
			type: 'array',
			of: [{ type: 'options' }],
			hidden: ({ parent }) => parent?.layout !== 'form order',
		}),
		defineField({
			name: 'widthStyle',
			title: 'Width style',
			description: 'If not set, the default width will be used.',
			type: 'string',
			initialValue: '100%',
			options: {
				list: [
					{ title: 'Default', value: '100%' },
					{ title: '40%', value: '40%' },
					{ title: '50%', value: '50%' },
					{ title: '60%', value: '60%' },
					{ title: '70%', value: '70%' },
					{ title: '80%', value: '80%' },
					{ title: '90%', value: '90%' },
				],
				layout: 'dropdown',
			},
		}),
		defineField({
			name: 'backgroundImage',
			title: 'Background Image',
			description: 'If not set, the default background image will be used.',
			type: 'string',
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
			title: 'content',
			layout: 'layout',
		},
		prepare(selection) {
			const { title, layout } = selection
			return {
				title: 'Form',
				subtitle:
					layout === 'form order'
						? 'Form Order'
						: layout === 'form contact'
							? 'Form Contact'
							: 'Unknown Layout',
			}
		},
	},
})
