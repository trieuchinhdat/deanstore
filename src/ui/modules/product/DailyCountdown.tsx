'use client'

import Countdown, { CountdownRenderProps } from 'react-countdown'
import { useEffect, useState } from 'react'

export default function DailyCountdown() {
	const getEndOfDay = (): Date => {
		const now = new Date()
		const end = new Date(now)
		end.setHours(23, 59, 59, 999)
		return end
	}

	const [targetTime, setTargetTime] = useState<Date | null>(null)

	useEffect(() => {
		setTargetTime(getEndOfDay())
	}, [])

	const renderer = ({ hours, minutes, seconds }: CountdownRenderProps) => (
		<div className="text-sm text-gray-800">
			⏰ Ưu đãi kết thúc sau:{' '}
			<strong>
				{hours} giờ {minutes} phút {seconds} giây
			</strong>
		</div>
	)

	// Đợi useEffect chạy xong mới render Countdown
	if (!targetTime) return null

	return (
		<Countdown
			date={targetTime}
			renderer={renderer}
			onComplete={() => setTargetTime(getEndOfDay())}
		/>
	)
}
