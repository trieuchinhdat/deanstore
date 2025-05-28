import { getSite } from '@/sanity/lib/queries'
import RatingsReviews from './RatingsReviews'
import { fetchSanityLive } from '@/sanity/lib/fetch'

export default async function RatingsReviewsWrap({
	reviews,
	backgroundColor,
}: {
	reviews?: Sanity.RatingsReviews
	backgroundColor?: string
}) {
	const { ordersite } = await getSite()

	return (
		<RatingsReviews
			reviews={reviews}
			backgroundColor={backgroundColor}
			urlreviewsgsheet={ordersite.urlreviewsgform}
			idreviewsnameproduct={ordersite.idreviewsnameproduct}
		/>
	)
}
