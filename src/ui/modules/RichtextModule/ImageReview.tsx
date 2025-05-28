import { Img } from '@/ui/Img'
import { stegaClean } from 'next-sanity'

export default function ImageReview({
	value,
}: {
	value: Sanity.Image &
		Partial<{
			caption: string
			source: string
			float: 'left' | 'right'
		}>
}) {
	return (
		<figure
			className="mt-2 mr-2 inline-block max-w-[100px] space-y-2 text-center"
			style={{ float: stegaClean(value.float) }}
		>
			<Img
				className="bg-accent/3 max-h-svh w-auto overflow-hidden rounded-xl text-[0px] max-md:rounded-none"
				image={value}
				width={1500}
			/>

			{value.caption && (
				<figcaption className="text-ink/50 px-4 text-sm text-balance italic">
					{value.caption}

					{value.source && (
						<>
							{' ('}
							<a href={value.source} className="image-source link">
								Source
							</a>
							{')'}
						</>
					)}
				</figcaption>
			)}
		</figure>
	)
}
