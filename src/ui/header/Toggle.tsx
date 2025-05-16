import { CiMenuBurger } from 'react-icons/ci'
import { TfiClose } from 'react-icons/tfi'
export default function Toggle() {
	return (
		<label className="btn-global-style flex h-8 w-8 items-center justify-center rounded [grid-area:toggle] md:hidden">
			<input id="header-toggle" type="checkbox" hidden />

			<span className="header-open:hidden">
				<CiMenuBurger fill="#ffffff" />
			</span>
			<span className="header-closed:hidden">
				<TfiClose fill="#ffffff" />
			</span>
		</label>
	)
}
