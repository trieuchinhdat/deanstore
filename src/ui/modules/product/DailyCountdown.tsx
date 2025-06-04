'use client'

import Countdown, { CountdownRenderProps } from 'react-countdown'
import { useEffect, useState } from 'react'

export default function DailyCountdown({
	lastSaleDate,
}: {
	lastSaleDate?: string
}) {
	const getTargetTime = (): Date => {
		if (lastSaleDate) {
			// Dùng constructor Date để tự động parse định dạng ISO
			return new Date(lastSaleDate)
		}
		// Nếu không có lastSaleDate thì mặc định là hết ngày hôm nay
		const now = new Date()
		const end = new Date(now)
		end.setHours(23, 59, 59, 999)
		return end
	}

	const [targetTime, setTargetTime] = useState<Date | null>(null)

	useEffect(() => {
		setTargetTime(getTargetTime())
	}, [lastSaleDate])

	const renderer = ({
		days,
		hours,
		minutes,
		seconds,
		completed,
	}: CountdownRenderProps) => {
		if (completed) return null

		return (
			<div className="space-y-3 text-center">
				<div className="text-base font-semibold text-red-600 uppercase">
					⏰ Ưu đãi kết thúc sau:
				</div>

				<div className="flex justify-center gap-4 text-gray-800">
					{/* DAYS */}
					<div className="flex flex-col items-center rounded-lg bg-gray-100 px-4 py-2 shadow-sm">
						<div className="text-2xl font-bold">{days}</div>
						<div className="text-xs text-gray-600">ngày</div>
					</div>

					{/* HOURS */}
					<div className="flex flex-col items-center rounded-lg bg-gray-100 px-4 py-2 shadow-sm">
						<div className="text-2xl font-bold">{hours}</div>
						<div className="text-xs text-gray-600">giờ</div>
					</div>

					{/* MINUTES */}
					<div className="flex flex-col items-center rounded-lg bg-gray-100 px-4 py-2 shadow-sm">
						<div className="text-2xl font-bold">{minutes}</div>
						<div className="text-xs text-gray-600">phút</div>
					</div>

					{/* SECONDS */}
					<div className="flex flex-col items-center rounded-lg bg-gray-100 px-4 py-2 shadow-sm">
						<div className="text-2xl font-bold">{seconds}</div>
						<div className="text-xs text-gray-600">giây</div>
					</div>
				</div>
			</div>
		)
	}

	if (!targetTime) return null

	return (
		<Countdown
			date={targetTime}
			renderer={renderer}
			onComplete={() => setTargetTime(getTargetTime())}
		/>
	)
}
