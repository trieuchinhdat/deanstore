import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'ordersetting',
	title: 'Order settings',
	type: 'document',

	fields: [
		defineField({
			name: 'idorder',
			title: 'ID Order',
			type: 'string',
		}),
		defineField({
			name: 'idordername',
			title: 'ID Order name',
			type: 'string',
		}),
		defineField({
			name: 'idorderphone',
			title: 'ID Order phone',
			type: 'string',
		}),
		defineField({
			name: 'idorderemail',
			title: 'ID Order email',
			type: 'string',
		}),
		defineField({
			name: 'idorderaddress',
			title: 'ID Order address',
			type: 'string',
		}),
		defineField({
			name: 'idorderproduct',
			title: 'ID Order product',
			type: 'string',
		}),
		defineField({
			name: 'idorderoption1',
			title: 'ID Order option 1',
			type: 'string',
		}),
		defineField({
			name: 'idorderoption2',
			title: 'ID Order option 2',
			type: 'string',
		}),
		defineField({
			name: 'urlordergform',
			title: 'Url google form',
			type: 'string',
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Order settings',
		}),
	},
})
