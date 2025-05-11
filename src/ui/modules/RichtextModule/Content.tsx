import { PortableText } from 'next-sanity'
import AnchoredHeading from './AnchoredHeading'
import { cn } from '@/lib/utils'

import Image from './Image'
import Code from './Code'
import Admonition from './Admonition'
import CustomHTML from '@/ui/modules/CustomHTML'
import ImageListWrapper from '../ImageListWrapper'
import ActionBuy from '../ActionBuy'
import OrderForm from '../product/OrderForm'
import AccordionList from '../AccordionList'
import PricingProduct from '../product/PricingProduct'
import CardList from '../CardList'
import CreativeModule from '../CreativeModule'
import Hero from '../Hero'
import HeroSaaS from '../HeroSaaS'
import HeroSplit from '../HeroSplit'

export default function Content({
	value,
	title,
	ordersite,
	className,
	children,
}: { value: any; ordersite: any } & React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'richtext mx-auto w-full space-y-6 [&>:first-child]:!mt-0',
				className,
			)}
		>
			<PortableText
				value={value}
				components={{
					block: {
						h2: (node) => <AnchoredHeading as="h2" {...node} />,
						h3: (node) => <AnchoredHeading as="h3" {...node} />,
						h4: (node) => <AnchoredHeading as="h4" {...node} />,
						h5: (node) => <AnchoredHeading as="h5" {...node} />,
						h6: (node) => <AnchoredHeading as="h6" {...node} />,
					},
					types: {
						image: Image,
						admonition: Admonition,
						code: Code,
						'image-list': ({ value }) => <ImageListWrapper {...value} />,
						'action-buy': ({ value }) => <ActionBuy {...value} />,
						'order-form': ({ value }) => (
							<OrderForm title={title} ordersite={ordersite} {...value} />
						),
						'accordion-list': ({ value }) => <AccordionList {...value} />,
						'card-list': ({ value }) => <CardList {...value} />,
						'creative-module': ({ value }) => <CreativeModule {...value} />,
						hero: ({ value }) => <Hero {...value} />,
						'hero.saas': ({ value }) => <HeroSaaS {...value} />,
						'hero.split': ({ value }) => <HeroSplit {...value} />,
						pricing: ({ value }) => <PricingProduct {...value} />,
						'custom-html': ({ value }) => (
							<CustomHTML
								className="has-[table]:md:[grid-column:bleed] has-[table]:md:mx-auto"
								{...value}
							/>
						),
					},
				}}
			/>

			{children}
		</div>
	)
}
