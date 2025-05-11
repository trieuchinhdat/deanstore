// app/components/OrderForm.tsx
import { PortableText } from '@portabletext/react'
import FormBuyNow from './FormBuyNow'

type Option = { title: string }
type OrderFormProps = {
	content?: any
	option1?: Option[]
	option2?: Option[]
	urlgform?: string
	title?: string
	ordersite?: any
}

export default function OrderForm({
	content,
	option1 = [],
	option2 = [],
	title,
	ordersite,
}: OrderFormProps) {
	return (
		<section
			className="space-y-8 rounded-xl border border-dotted border-[#ddddde] bg-[#b4fd8c] p-4 md:grid-cols-3"
			id="order-form-gform"
		>
			{/* Nội dung */}
			{content && <PortableText value={content} />}
			{/* Tên sản phẩm */}
			<p className="text-lg font-medium md:text-xl">Sản phẩm - {title}</p>
			{/* Form mua hàng */}
			<FormBuyNow
				option1={option1}
				option2={option2}
				product={title}
				ordersite={ordersite}
			/>
		</section>
	)
}
