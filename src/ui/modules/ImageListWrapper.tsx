import moduleProps from '@/lib/moduleProps'
import ImageList from './ImageList'
import { cn } from '@/lib/utils'

export default function ImageListWrapper({
	assets,
	layout,
}: {
	assets?: Sanity.Img[]
	layout?: 'grid' | 'carousel'
}) {
	if (!assets?.length) return null
	return <ImageList assets={assets} layout={layout} />
}
