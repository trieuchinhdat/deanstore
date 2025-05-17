import { defineArrayMember, defineField, defineType } from 'sanity'
import { AiOutlineProduct } from 'react-icons/ai'
import { imageBlock, admonition } from '../fragments'

export default defineType({
	name: 'product.detail',
	title: 'Product detail',
	icon: AiOutlineProduct,
	type: 'document',
	groups: [
		{ name: 'content', default: true },
		{ name: 'options' },
		{ name: 'metadata' },
	],
	fields: [
		defineField({
			name: 'body',
			type: 'array',
			of: [
				{ type: 'block' },
				imageBlock,
				admonition,
				defineArrayMember({
					title: 'Code block',
					type: 'code',
					options: {
						withFilename: true,
					},
				}),
				{ type: 'custom-html' },
				{ type: 'image-list' },
				{ type: 'action-buy' },
				{ type: 'pricing' },
				{ type: 'order-form' },
				{ type: 'creative-module' },
				{ type: 'accordion-list' },
				{ type: 'card-list' },
				{ type: 'hero' },
				{ type: 'hero.saas' },
				{ type: 'hero.split' },
				{ type: 'flag-list' },
				{ type: 'step-list' },
				{ type: 'tabbed-content' },
			],
			group: 'content',
		}),
		defineField({
			name: 'categories',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'product.category' }],
				},
			],
			group: 'content',
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'metadata',
		}),
		defineField({
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
			publishDate: 'publishDate',
			language: 'language',
			image: 'metadata.image',
		},
		prepare: ({ title, publishDate, image, language }) => ({
			title: [title].filter(Boolean).join(' '),
			subtitle: [language && `[${language}] `, publishDate]
				.filter(Boolean)
				.join(''),
			media: image,
		}),
	},
	orderings: [
		{
			title: 'Date',
			name: 'date',
			by: [{ field: 'publishDate', direction: 'desc' }],
		},
		{
			title: 'Title',
			name: 'metadata.title',
			by: [{ field: 'title', direction: 'asc' }],
		},
	],
})
