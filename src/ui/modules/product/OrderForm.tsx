import { getSite } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import FormBuyNow from './FormBuyNow'
import FormContact from './FormContact'

type Option = { title: string }
type OrderFormProps = {
	content?: any
	option1?: Option[]
	option2?: Option[]
	title?: string
	layout?: 'form order' | 'form contact'
	backgroundColor?: string
}
export default async function OrderForm({
	content,
	option1 = [],
	option2 = [],
	title,
	layout,
	backgroundColor,
}: OrderFormProps) {
	const { ordersite } = await getSite()
	return (
		<section
			id="order-form-gform"
			style={{ backgroundColor: backgroundColor || '#ffffff' }}
			className="richtext overflow-hidden rounded-xl"
		>
			{layout === 'form order' && (
				<div className="section section-form group-global grid gap-8 rounded-xl p-8 max-md:p-4 md:grid-cols-1">
					{content && <PortableText value={content} />}
					{title !== undefined && (
						<p className="text-lg font-medium md:text-xl">Sản phẩm - {title}</p>
					)}
					<FormBuyNow
						option1={option1}
						option2={option2}
						product={title}
						ordersite={ordersite}
					/>
				</div>
			)}
			{layout === 'form contact' && (
				<div className="section section-form mx-auto grid max-w-screen-md gap-8 rounded-xl">
					<header className="mx-auto w-full max-w-screen-lg text-center">
						<PortableText value={content} />
					</header>
					<div className="mx-auto mb-4 w-full max-w-screen-lg text-center">
						<FormContact ordersite={ordersite} />
					</div>
				</div>
			)}
		</section>
	)
}
