import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscEdit } from 'react-icons/vsc'
import { imageBlock, admonition } from '../fragments'

export default defineType({
	name: 'blog.post',
	title: 'Blog post',
	icon: VscEdit,
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
				{ type: 'accordion-list' },
				{ type: 'card-list' },
				{ type: 'creative-module' },
				{ type: 'hero' },
				{ type: 'hero.saas' },
				{ type: 'hero.split' },
				{ type: 'flag-list' },
				{ type: 'step-list' },
				{ type: 'testimonial' },
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
					to: [{ type: 'blog.category' }],
				},
			],
			group: 'content',
		}),
		defineField({
			name: 'authors',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'person' }],
				},
			],
			group: 'content',
		}),
		defineField({
			name: 'publishDate',
			type: 'date',
			validation: (Rule) => Rule.required(),
			group: 'content',
		}),
		defineField({
			name: 'featured',
			type: 'boolean',
			group: 'options',
			initialValue: false,
		}),
		defineField({
			name: 'hideTableOfContents',
			type: 'boolean',
			group: 'options',
			initialValue: false,
		}),
		defineField({
			name: 'rating',
			title: 'Rating',
			type: 'number',
			group: 'content',
			validation: (Rule) =>
				Rule.min(1)
					.max(5)
					.custom((value) => {
						if (value === undefined) return true // Cho phép bỏ trống
						const allowed = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
						return allowed.includes(value) || '1-5★'
					}),
			options: {
				list: [
					{ title: '1 ★', value: 1 },
					{ title: '1.5 ★', value: 1.5 },
					{ title: '2 ★', value: 2 },
					{ title: '2.5 ★', value: 2.5 },
					{ title: '3 ★', value: 3 },
					{ title: '3.5 ★', value: 3.5 },
					{ title: '4 ★', value: 4 },
					{ title: '4.5 ★', value: 4.5 },
					{ title: '5 ★', value: 5 },
				],
				layout: 'dropdown',
			},
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
			featured: 'featured',
			title: 'metadata.title',
			publishDate: 'publishDate',
			language: 'language',
			image: 'metadata.image',
		},
		prepare: ({ featured, title, publishDate, image, language }) => ({
			title: [featured && '★', title].filter(Boolean).join(' '),
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
