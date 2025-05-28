'use client'

import { useEffect, useState } from 'react'
import { getSite } from '@/sanity/lib/queries'
import CTA from './CTA'
import { cn } from '@/lib/utils'
import {
	FaBluesky,
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTiktok,
	FaXTwitter,
	FaYoutube,
	FaRegComments,
	FaXmark,
	FaPhone,
} from 'react-icons/fa6'
import { SiZalo } from 'react-icons/si'
import { IoIosLink } from 'react-icons/io'
import type { ComponentProps } from 'react'

export default function ChatBox({ className }: ComponentProps<'div'>) {
	const [socialItems, setSocialItems] = useState<any[]>([])
	const [open, setOpen] = useState(false)

	useEffect(() => {
		getSite().then((data) => {
			if (data?.chatbox?.items?.length) {
				setSocialItems(data.chatbox.items)
			}
		})
	}, [])

	if (!socialItems.length) return null

	return (
		<div
			className={cn(
				'fixed right-8 bottom-8 z-50 flex flex-col items-end gap-2 max-md:right-4 max-md:bottom-4',
				className,
			)}
		>
			{/* Danh sách mạng xã hội */}
			{open && (
				<div className="flex flex-col items-end gap-3 transition-all">
					{socialItems.map((item, key) =>
						item._type === 'link' ? (
							<CTA className="group" link={item} key={key}>
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-110 min-md:h-16 min-md:w-16">
									<Icon
										url={item.external}
										aria-label={item.label}
										className="text-2xl"
									/>
								</div>
							</CTA>
						) : null,
					)}
				</div>
			)}

			{/* Nút Messenger Toggle */}
			<button
				onClick={() => setOpen(!open)}
				className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:scale-105 min-md:h-16 min-md:w-16"
				aria-label={open ? 'Close chat menu' : 'Open chat menu'}
			>
				{open ? (
					<FaXmark size={28} />
				) : (
					<FaRegComments size={28} className="animate-shake" />
				)}
			</button>
		</div>
	)
}

function Icon({
	url,
	className = '',
	...props
}: { url?: string } & React.ComponentProps<'svg'>) {
	if (!url) return null
	if (url.startsWith('tel:')) {
		return <FaPhone className={cn('text-green-600', className)} {...props} />
	}
	if (url.includes('zalo') || url.includes('zalo://')) {
		return <SiZalo className={cn('text-blue-500', className)} {...props} />
	}
	if (url.includes('bsky.app')) {
		return <FaBluesky className={cn('text-sky-500', className)} {...props} />
	}
	if (url.includes('facebook.com')) {
		return <FaFacebookF className={cn('text-blue-600', className)} {...props} />
	}
	if (url.includes('github.com')) {
		return <FaGithub className={cn('text-gray-800', className)} {...props} />
	}
	if (url.includes('instagram.com')) {
		return <FaInstagram className={cn('text-pink-500', className)} {...props} />
	}
	if (url.includes('linkedin.com')) {
		return (
			<FaLinkedinIn className={cn('text-blue-700', className)} {...props} />
		)
	}
	if (url.includes('tiktok.com')) {
		return <FaTiktok className={cn('text-black', className)} {...props} />
	}
	if (url.includes('twitter.com') || url.includes('x.com')) {
		return <FaXTwitter className={cn('text-black', className)} {...props} />
	}
	if (url.includes('youtube.com')) {
		return <FaYoutube className={cn('text-red-600', className)} {...props} />
	}

	// Mặc định (link khác)
	return <IoIosLink className={cn('text-gray-500', className)} {...props} />
}
