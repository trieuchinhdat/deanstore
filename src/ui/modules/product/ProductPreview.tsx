import { Img } from '@/ui/Img'
import Link from 'next/link'
import resolveUrl from '@/lib/resolveUrl'
import { cn } from '@/lib/utils'

export default function ProductPreview({
	product,
	skeleton,
}: {
	product?: Sanity.ProductDetail
	skeleton?: boolean
}) {
	if (!product && !skeleton) return null

	return (
		<div className="group relative isolate flex h-full flex-col space-y-2">
			<figure className="bg-ink/3 relative aspect-square overflow-hidden transition-all">
				<Img
					className="h-full w-full object-cover transition-all group-hover:brightness-110"
					image={product?.metadata.image}
					width={400}
					alt={product?.metadata.title}
				/>
			</figure>

			<div className={cn('h4', skeleton && 'skeleton-2')}>
				<Link
					className="group-hover:underline"
					href={resolveUrl(product, { base: false })}
				>
					<span className="absolute inset-0" />
					{product?.metadata.title}
				</Link>
			</div>
			<div className="grow">
				<p className="line-clamp-3 text-sm empty:h-[3lh]">
					{product?.metadata.description}
				</p>
			</div>
		</div>
	)
}
